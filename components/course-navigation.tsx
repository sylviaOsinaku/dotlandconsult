"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CourseNavigationProps {
  sections: Array<{
    id: string
    label: string
  }>
  currentCourse?: string // optional prop
}

export function CourseNavigation({ sections = [], currentCourse }: CourseNavigationProps) {
  const [activeSection, setActiveSection] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Early return if no sections provided
    if (!sections || sections.length === 0) {
      return
    }

    const handleScroll = () => {
      // Check if we've scrolled past the hero section
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsVisible(window.scrollY > heroBottom - 100)
      }

      // Find the current active section
      const sectionElements = sections
        .map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }))
        .filter((item) => item.element)

      // Find the section that's currently in view
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i].element!
        if (window.scrollY >= element.offsetTop - 150) {
          setActiveSection(sectionElements[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  // Don't render if no sections or not visible
  if (!isVisible || !sections || sections.length === 0) return null

  return (
    <nav className="fixed top-16 left-0 right-0 z-40 bg-white/95 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-3 overflow-x-auto">
          <div className="flex items-center gap-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-300",
                  activeSection === section.id
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50",
                )}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
