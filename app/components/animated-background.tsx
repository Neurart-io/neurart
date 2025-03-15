"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6b8ae00461e0d3c9b9030230613439b-wuNP8X3bgTp9winsVX5ycHBGgELGiO.gif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3, // Reduced opacity to ensure content readability
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010]/80 to-[#101010]" aria-hidden="true" />
    </div>
  )
}

