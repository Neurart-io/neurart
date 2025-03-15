"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollAnimatedSectionProps {
  children: React.ReactNode
  direction?: "up" | "down" | "right"
}

export function ScrollAnimatedSection({ children, direction = "up" }: ScrollAnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getAnimationClass = () => {
    if (isVisible) return "opacity-100 translate-x-0 translate-y-0"
    switch (direction) {
      case "up":
        return "opacity-0 translate-y-10"
      case "down":
        return "opacity-0 -translate-y-10"
      case "right":
        return "opacity-0 translate-x-10"
      default:
        return "opacity-0"
    }
  }

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-in-out ${getAnimationClass()}`}>
      {children}
    </div>
  )
}

