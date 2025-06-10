"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, Minimize2 } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const FAQ_RESPONSES = {
  "what courses do you offer": {
    text: "We offer several professional certification courses:\n\n🎯 **Project Management Professional (PMP)** - 5-day intensive program\n📊 **Business Analysis Certification** - 4-day comprehensive training\n🛡️ **Risk Management Professional** - 5-day program\n⚡ **Agile & Scrum Master** - 3-day certification\n🏆 **Quality Management Systems** - ISO 9001 training\n👑 **Strategic Leadership** - Executive development\n\nWould you like details about any specific course?",
    suggestions: ["Tell me about PMP", "Business Analysis details", "Pricing information"],
  },

  "pmp course": {
    text: "Our **PMP Certification Program** is perfect for project managers!\n\n✅ **Duration:** 5 days (40 hours)\n✅ **PDUs:** 35 contact hours included\n✅ **Format:** Public, Corporate, or Online\n✅ **Materials:** Comprehensive study materials\n✅ **Support:** Post-training assistance\n\nThis globally recognized certification validates your project management expertise. We have a high pass rate thanks to our experienced instructors and practical approach.",
    suggestions: ["PMP pricing", "PMP schedule", "Book PMP training"],
  },

  "business analysis": {
    text: "Our **Business Analysis Certification** covers everything you need!\n\n📋 **What you'll learn:**\n• Requirements gathering techniques\n• Stakeholder analysis & management\n• Business process modeling\n• Solution evaluation methods\n• Documentation best practices\n\n⏱️ **Duration:** 4 days intensive training\n🎯 **Perfect for:** Business Analysts, Systems Analysts, Project Managers",
    suggestions: ["Business Analysis pricing", "Course schedule", "Book this course"],
  },

  "risk management": {
    text: "Our **Risk Management Professional** program is comprehensive!\n\n🛡️ **Key Topics:**\n• Risk identification & assessment\n• Mitigation strategies\n• Compliance frameworks\n• Crisis management\n• Risk monitoring tools\n\n⏱️ **Duration:** 5 days (40 hours)\n🎯 **Ideal for:** Risk Managers, Compliance Officers, Senior Management",
    suggestions: ["Risk Management pricing", "View schedule", "Corporate training"],
  },

  pricing: {
    text: "Our course pricing varies by program and format:\n\n💼 **Public Training:** Join scheduled sessions\n🏢 **Corporate Training:** Customized for your team (8+ people)\n💻 **Online Training:** Virtual instructor-led sessions\n\nFor detailed pricing and current promotions, I recommend:\n• Visiting our courses page\n• Speaking with our team directly\n• Requesting a custom quote for corporate training",
    suggestions: ["Contact for pricing", "View courses page", "Corporate training quote"],
  },

  schedule: {
    text: "We offer **flexible scheduling options**:\n\n📅 **Public Sessions:** Regular schedules in Lagos & Abuja\n🏢 **Corporate Training:** Flexible dates at your location\n💻 **Online Training:** Multiple time slots available\n\nTo see current schedules and book your preferred dates:",
    suggestions: ["Book training now", "Contact us", "View all courses"],
  },

  location: {
    text: "**Our Training Locations:**\n\n🏢 **Main Office:** The Bunker, 279 Herbert Macaulay Way, Yaba, Lagos\n🌍 **We also serve:** Abuja and other locations\n🏢 **Corporate Training:** We come to your office\n💻 **Online Training:** From anywhere!\n\nAll our facilities are equipped with modern training amenities.",
    suggestions: ["Get directions", "Book training", "Contact us"],
  },

  contact: {
    text: "**Get in touch with us:**\n\n📞 **Phone:**\n• 07025560034\n• 07084659907\n\n📧 **Email:** support@dotlandconsulting.com\n\n📍 **Address:** The Bunker, 279 Herbert Macaulay Way, Yaba, Lagos\n\n⏰ **Business Hours:**\n• Mon-Fri: 9:00 AM - 5:00 PM\n• Saturday: 10:00 AM - 2:00 PM",
    suggestions: ["Send message", "Book training", "Get directions"],
  },

  pecb: {
    text: "Yes! We're proud to be an **Authorized Training Partner of PECB** 🏆\n\nThis means:\n✅ Internationally recognized certifications\n✅ Global standards compliance\n✅ Quality assured training programs\n✅ Professional certification pathways\n\nOur PECB partnership ensures you receive world-class training that's recognized globally.",
    suggestions: ["View PECB courses", "Book training", "Learn more"],
  },

  "corporate training": {
    text: "Our **Corporate Training Solutions** are perfect for teams!\n\n🎯 **Benefits:**\n• Customized content for your industry\n• Flexible scheduling\n• On-site or online delivery\n• Group discounts (8+ participants)\n• Team building opportunities\n\n📊 **Popular for:** Project teams, management groups, department-wide training\n\nWe'll work with you to create the perfect training experience for your organization.",
    suggestions: ["Get corporate quote", "Contact us", "View courses"],
  },

  "online training": {
    text: "Our **Online Training** is fully interactive and engaging!\n\n💻 **Features:**\n• Live instructor-led sessions\n• Interactive exercises & discussions\n• Digital materials included\n• Recorded sessions for review\n• Full technical support\n• Same certification as in-person\n\nYou get the same quality training from the comfort of your home or office!",
    suggestions: ["Book online training", "View schedule", "Technical requirements"],
  },
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 I'm your Dotland Consulting assistant. I'm here to help you with:\n\n• Course information & details\n• Pricing & scheduling\n• Training formats & locations\n• Booking assistance\n\nWhat would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [suggestions, setSuggestions] = useState([
    "What courses do you offer?",
    "PMP certification",
    "Contact information",
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findBestResponse = (userMessage: string): { text: string; suggestions: string[] } => {
    const message = userMessage.toLowerCase()

    // Check for exact or partial matches
    for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
      if (message.includes(key) || key.split(" ").some((word) => message.includes(word))) {
        return response
      }
    }

    // Check for common keywords
    if (message.includes("price") || message.includes("cost") || message.includes("fee")) {
      return FAQ_RESPONSES.pricing
    }

    if (message.includes("when") || message.includes("time") || message.includes("date")) {
      return FAQ_RESPONSES.schedule
    }

    if (message.includes("where") || message.includes("address")) {
      return FAQ_RESPONSES.location
    }

    if (message.includes("phone") || message.includes("email") || message.includes("reach")) {
      return FAQ_RESPONSES.contact
    }

    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return {
        text: "Hello! 😊 Great to meet you! I'm here to help you learn about our professional training programs. What interests you most?",
        suggestions: ["View all courses", "PMP certification", "Corporate training"],
      }
    }

    if (message.includes("thank") || message.includes("thanks")) {
      return {
        text: "You're very welcome! 😊 I'm always here to help. Is there anything else you'd like to know about our training programs?",
        suggestions: ["Book training", "Contact us", "View courses"],
      }
    }

    // Default response
    return {
      text: "I'd be happy to help you with that! 😊\n\nI can assist you with:\n🎓 **Course Information** - Details about all our programs\n💰 **Pricing & Packages** - Training costs and options\n📅 **Scheduling** - Available dates and booking\n📍 **Locations** - Training venues and formats\n🏢 **Corporate Training** - Team training solutions\n\nWhat would you like to explore?",
      suggestions: ["Show me courses", "Pricing information", "Contact details"],
    }
  }

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue
    if (!textToSend.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = findBestResponse(textToSend)
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botResponse])
      setSuggestions(response.suggestions)
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const minimizeChat = () => {
    setIsMinimized(!isMinimized)
  }

  const closeChat = () => {
    setIsOpen(false)
    setIsMinimized(false)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-6 z-50 transition-all duration-300 ${isMinimized ? "w-80 h-16" : "w-80 h-[500px]"}`}
        >
          <Card className="h-full flex flex-col shadow-2xl border-2 border-blue-200">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bot className="h-5 w-5" />
                  Dotland Assistant
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    onClick={minimizeChat}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  >
                    <Minimize2 className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={closeChat}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {!isMinimized && (
              <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[320px]">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-2xl ${
                          message.sender === "user"
                            ? "bg-blue-600 text-white rounded-br-md"
                            : "bg-gray-100 text-gray-900 rounded-bl-md"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-600" />}
                          <div className="text-sm whitespace-pre-line leading-relaxed">{message.text}</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md max-w-[85%]">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4 text-blue-600" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggestions */}
                {suggestions.length > 0 && !isTyping && (
                  <div className="px-4 pb-2">
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          variant="outline"
                          size="sm"
                          className="text-xs h-7 px-3 border-blue-200 text-blue-700 hover:bg-blue-50"
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your question..."
                      className="flex-1 border-gray-300 focus:border-blue-500"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={() => handleSendMessage()}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 px-3"
                      disabled={isTyping || !inputValue.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      )}
    </>
  )
}
