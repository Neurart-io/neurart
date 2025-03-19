"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface LazyImageProps extends Omit<ImageProps, "onLoad"> {
  showPlaceholder?: boolean
}

export default function LazyImage({ showPlaceholder = true, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className={`relative ${props.className || ""}`}>
      <Image
        {...props}
        className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${props.className || ""}`}
        onLoad={handleLoad}
        loading="lazy"
      />
      {!isLoaded && showPlaceholder && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"
          style={{ height: props.height, width: props.width }}
        />
      )}
    </div>
  )
}

