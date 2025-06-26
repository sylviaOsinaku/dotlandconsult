"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Menu,
  Calendar,
  X,
  Home,
  Info,
  GraduationCap,
  MessageSquare,
  Phone,
  HelpCircle,
  Users,
  ChevronRight,
  Briefcase,
  Database,
  Shield,
  Heart,
  ArrowRight,
  Zap,
} from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setExpandedSection(null)
  }

  const courseCategories = [
    {
      title: "Project Management",
      icon: <Briefcase className="h-4 w-4" />,
      courses: [
        { name: "PMP Certification", href: "/courses/pmp" },
        { name: "PRINCE2 Certification", href: "/courses/prince2" },
        { name: "Scrum Master (PSM)", href: "/courses/scrum-master" },
        { name: "PMI-ACP", href: "/courses/pmi-acp" },
        { name: "Program Management", href: "/courses/program-management" },
        { name: "Primavera P6", href: "/courses/primavera-p6" },
      ],
    },
    {
      title: "Process & People Management",
      icon: <Users className="h-4 w-4" />,
      courses: [
        { name: "Business Analysis", href: "/courses/business-analysis" },
        { name: "Risk Management", href: "/courses/risk-management" },
        { name: "Operations & Facility Management", href: "/courses/operations-facility" },
        { name: "Customer Relationship Management", href: "/courses/crm" },
        { name: "Supply Chain Management", href: "/courses/supply-chain" },
      ],
    },
    {
      title: "IT & Data",
      icon: <Database className="h-4 w-4" />,
      courses: [
        { name: "Data Analysis", href: "/courses/data-analysis" },
        { name: "Microsoft Project", href: "/courses/ms-project" },
      ],
    },
    {
      title: "Health, Safety & Environment",
      icon: <Shield className="h-4 w-4" />,
      courses: [
        { name: "First Aid & CPR", href: "/courses/first-aid-cpr" },
        { name: "Food Safety & Hygiene", href: "/courses/food-safety" },
        { name: "Caregiver Certification", href: "/courses/caregiver" },
      ],
    },
  ]

  const mainNavItems = [
    { name: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
    { name: "About", href: "/about", icon: <Info className="h-5 w-5" /> },
    { name: "Our Team", href: "/team", icon: <Users className="h-5 w-5" /> },
    { name: "Testimonials", href: "/testimonials", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="h-5 w-5" /> },
    { name: "FAQs", href: "/faqs", icon: <HelpCircle className="h-5 w-5" /> },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Desktop Navigation */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="font-bold text-2xl text-blue-600">Dotland</div>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Training Programs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium leading-none mb-3 text-blue-900">Project Management</h4>
                        <div className="space-y-2">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/pmp"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              PMP Certification
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/prince2"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              PRINCE2 Certification
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/scrum-master"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              Scrum Master (PSM)
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/pmi-acp"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              PMI-ACP
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/program-management"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              Program Management
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/primavera-p6"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              Primavera P6
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium leading-none mb-3 text-red-900">
                          Process & People Management
                        </h4>
                        <div className="space-y-2">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/business-analysis"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              Business Analysis
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/risk-management"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              Risk Management
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/operations-facility"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              Operations & Facility Management
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/crm"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              Customer Relationship Management
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/supply-chain"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              Supply Chain Management
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
                      <div>
                        <h4 className="text-sm font-medium leading-none mb-3 text-purple-900">IT & Data</h4>
                        <div className="space-y-2">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/data-analysis"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              Data Analysis
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/ms-project"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              Microsoft Project
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium leading-none mb-3 text-orange-900">
                          Health, Safety & Environment
                        </h4>
                        <div className="space-y-2">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/first-aid-cpr"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              First Aid & CPR
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/food-safety"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              Food Safety & Hygiene
                            </Link>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/courses/caregiver"
                              className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm"
                            >
                              Caregiver Certification
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </div>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/courses"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground mt-4 pt-4 border-t text-center font-medium text-blue-600"
                      >
                        View All Courses →
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/team"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Our Team
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/testimonials"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Testimonials
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/faqs"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    FAQs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:w-80 p-0 bg-slate-950 text-white border-slate-800">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800/50">
              <Link href="/" onClick={closeMenu} className="flex items-center">
                <div className="font-bold text-2xl text-white">
                  <span className="text-blue-400">Dot</span>land
                </div>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMenu}
                className="h-8 w-8 p-0 text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto">
              {/* Quick Action */}
              <div className="p-6 border-b border-slate-800/50">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:scale-[1.02] group"
                  onClick={closeMenu}
                >
                  <Link href="/training-schedule" className="flex items-center justify-center w-full">
                    <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Book Training Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Main Navigation */}
              <div className="flex-1 p-6 space-y-1">
                {/* Regular Nav Items */}
                {mainNavItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group border border-transparent hover:border-slate-700/50"
                  >
                    <div className="text-slate-400 group-hover:text-blue-400 transition-colors mr-4">{item.icon}</div>
                    <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}

                {/* Training Programs - Expandable */}
                <div className="space-y-1">
                  <button
                    onClick={() => toggleSection("courses")}
                    className="w-full flex items-center p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group border border-transparent hover:border-slate-700/50"
                  >
                    <div className="text-slate-400 group-hover:text-blue-400 transition-colors mr-4">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-slate-200 group-hover:text-white transition-colors flex-1 text-left">
                      Training Programs
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 text-slate-600 group-hover:text-slate-400 transition-all duration-300 ${
                        expandedSection === "courses" ? "rotate-90 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  {expandedSection === "courses" && (
                    <div className="ml-6 space-y-2 animate-in slide-in-from-top-2 duration-300">
                      {courseCategories.map((category, index) => (
                        <div key={index} className="space-y-1">
                          <button
                            onClick={() => toggleSection(`category-${index}`)}
                            className="w-full flex items-center p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800/50 transition-all duration-200 border border-slate-800/50 hover:border-slate-700/50 group"
                          >
                            <div className="text-slate-500 group-hover:text-slate-300 mr-3">{category.icon}</div>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white flex-1 text-left">
                              {category.title}
                            </span>
                            <ChevronRight
                              className={`h-3 w-3 text-slate-600 group-hover:text-slate-400 transition-all duration-200 ${
                                expandedSection === `category-${index}` ? "rotate-90 text-blue-400" : ""
                              }`}
                            />
                          </button>

                          {expandedSection === `category-${index}` && (
                            <div className="ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                              {category.courses.map((course, courseIndex) => (
                                <Link
                                  key={courseIndex}
                                  href={course.href}
                                  onClick={closeMenu}
                                  className="block p-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:border-blue-400/50"
                                >
                                  {course.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                      <Link
                        href="/courses"
                        onClick={closeMenu}
                        className="block p-4 text-center bg-slate-800/50 hover:bg-slate-700/50 text-blue-400 hover:text-blue-300 rounded-xl font-medium transition-all duration-300 border border-slate-700/50 hover:border-blue-500/30 group mt-4"
                      >
                        <span className="flex items-center justify-center">
                          View All Courses
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-slate-800/50 bg-slate-900/50">
                <div className="text-center space-y-3">
                  <p className="text-sm text-slate-400">Ready to advance your career?</p>
                  <Button
                    className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-medium py-3 rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 group"
                    onClick={closeMenu}
                  >
                    <Link href="/contact" className="flex items-center justify-center w-full">
                      <Heart className="mr-2 h-4 w-4 group-hover:text-red-400 transition-colors" />
                      Get Started Today
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Logo and CTA */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="flex items-center md:hidden">
              <div className="font-bold text-xl text-blue-600">Dotland</div>
            </Link>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 hidden md:flex">
            <Link href="/training-schedule" className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              Book Training
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
