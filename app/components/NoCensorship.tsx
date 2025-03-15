"use client"
import { Wand2, Type, ImageIcon } from "lucide-react"
import { T } from "./T"

export default function NoCensorship() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden w-full">
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-left mb-4"
              style={{
                fontFamily: "Kode Mono, monospace",
              }}
            >
              <T id="docs.dontWasteTime" />
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg text-white max-w-xl text-left"
              style={{
                fontFamily: "Kode Mono, monospace",
                fontOpticalSizing: "auto",
                fontStyle: "normal",
              }}
            >
              <T id="docs.dontWasteTimeText" />
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-8">
                <div className="transition-all duration-300 hover:scale-105 flex flex-col items-center">
                  <Wand2 size={48} className="text-[#2478ff]" />
                  <p className="text-sm mt-2 text-white">
                    <T id="generateImage.presets" />
                  </p>
                </div>
                <div className="text-2xl font-bold text-white">+</div>
                <div className="transition-all duration-300 hover:scale-105 flex flex-col items-center">
                  <Type size={48} className="text-[#b157ff]" />
                  <p className="text-sm mt-2 text-white">
                    <T id="generateImage.positivePrompt" />
                  </p>
                </div>
                <div className="text-2xl font-bold text-white">=</div>
                <div className="transition-all duration-300 hover:scale-105 flex flex-col items-center">
                  <ImageIcon size={48} className="text-white" />
                  <p className="text-sm mt-2 text-white">
                    <T id="nocensorship.perfectImage" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

