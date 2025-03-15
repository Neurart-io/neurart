import Link from "next/link"
import Image from "next/image"
import { T } from "../components/T"
import { useScrollToTop } from "../hooks/useScrollToTop"
import { useLocalization } from "../contexts/LocalizationContext"

export default function AboutUsPage() {
  useScrollToTop()
  const { language } = useLocalization()

  return (
    <div className="min-h-screen flex flex-col bg-[#101010]" style={{ fontFamily: "'Kode Mono', monospace" }}>
      {/* Navigation */}
      <header className="py-4 bg-[#101010]/80 backdrop-blur-sm">
        <div className="flex justify-between items-center px-[5%]">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
              alt="Neurart Logo"
              width={46}
              height={16}
              className="object-contain"
              priority
            />
            <span className="ml-3 text-white text-lg">Neurart.io</span>
            <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-[#2478ff] rounded-full">Beta</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main id="about-us-top" className="flex-grow container mx-auto px-4 py-16 max-w-4xl flex flex-col items-center">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-8 text-white">
            <T id="aboutUs.title" />
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <T id="aboutUs.welcome" />
          </p>
        </section>
        <div className="text-white space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#b157ff]">
              <T id="aboutUs.genesis.title" />
            </h2>
            <p>
              <T id="aboutUs.genesis.description" />
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#b157ff]">
              <T id="aboutUs.presentFuture.title" />
            </h2>
            <p>
              <T id="aboutUs.presentFuture.description" />
            </p>
          </div>
        </div>
        {/* Founders Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8 text-[#b157ff] text-center">
            <T id="aboutUs.founders.title" />
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#181818] rounded-lg p-6 space-y-4">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1741300759704.jpg-zIzbPARlFoFhtIKwfbGU5HgKLcuB7M.jpeg"
                  alt="Neurart Founder"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">Victor Fernando</h3>
              <p className="text-gray-300">
                <T id="aboutUs.founders.victor" />
              </p>
            </div>
            <div className="bg-[#181818] rounded-lg p-6 space-y-4">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1711504663992.jpg-SmHHQ7TXM1UHvoCzLTFS1xETDl7gGl.jpeg"
                  alt="Neurart Founder"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">Yuri Costa</h3>
              <p className="text-gray-300">
                <T id="aboutUs.founders.yuri" />
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-[#101010]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-center items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon%20Branco-Icu0fjwiD8ffrMcMzvPk9Bmc7nNuHq.png"
                alt="Neurart Logo"
                width={32}
                height={11}
                className="object-contain"
                priority
              />
              <span className="text-lg font-bold ml-2 text-white">Neurart.io</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

