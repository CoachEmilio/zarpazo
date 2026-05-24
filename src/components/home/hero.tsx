import Image from "next/image"
import { config } from "@/data/config"

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full overflow-hidden bg-black px-6 pb-4 pt-3 md:pb-12 md:pt-8"
    >
      <div className="mx-auto flex min-h-[28svh] md:min-h-[58svh] max-w-5xl flex-col items-center justify-start text-center">
        <div className="relative mb-4 h-36 w-36 max-w-full md:h-64 md:w-64 lg:h-72 lg:w-72">
          <Image
            src={config.brand.logoPath}
            alt={config.brand.name}
            fill
            priority
            sizes="(max-width: 768px) 144px, (max-width: 1024px) 256px, 288px"
            className="object-contain"
          />
        </div>

        <h1
          id="hero-title"
          className="font-brand text-4xl font-semibold tracking-[0.18em] text-[#f1e6cc] md:text-6xl"
        >
          ZARPAZO
        </h1>

        <h2 className="mt-3 font-mono text-lg font-medium tracking-wide text-[#f1e6cc]/90 md:text-2xl">
          Diseños que garpan.
        </h2>
      </div>
    </section>
  )
}