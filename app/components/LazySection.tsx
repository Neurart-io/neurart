"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import LoadingSpinner from "./LoadingSpinner"

interface LazySectionProps {
  children: ReactNode
  threshold?: number
  placeholder?: ReactNode
}

export default function LazySection({ children, threshold = 0.1, placeholder = <LoadingSpinner /> }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return (
    <div ref={ref} className="min-h-[200px]">
      {isVisible ? children : placeholder}
    </div>
  )
}

