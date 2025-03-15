import { T } from "./T"

export default function FeatureOverview() {
  return (
    <section className="relative py-8 sm:py-16 overflow-hidden w-full">
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 z-10 w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 w-full">
          <span className="block md:hidden">
            <T id="feature.title" />
          </span>
          <span className="hidden md:block">
            <T id="feature.subtitle" />
          </span>
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg text-white w-full mb-8"
          style={{
            fontFamily: "Kode Mono, monospace",
            fontOpticalSizing: "auto",
            fontStyle: "normal",
          }}
        >
          <T id="feature.description" />
        </p>
      </div>
    </section>
  )
}

