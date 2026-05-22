import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-125 flex flex-col items-center justify-center text-center bg-black overflow-hidden">
    <div className="absolute inset-0">
    <Image
      src="/landing-hero.webp"
      alt="Zarpazo"
      fill
      className="object-contain opacity-60"
      priority
    />
    </div>
    <div className="relative z-10">
      <h1 className="font-mono text-5xl md:text-7xl font-bold text-white tracking-tight">
        ZARPAZO
      </h1>
      <p className="font-mono text-zinc-300 mt-4 text-xl md:text-2xl">
        Diseños que garpan.
      </p>
    </div>
    </section>
  )
}