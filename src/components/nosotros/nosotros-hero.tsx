import Image from "next/image"
import { config } from "@/data/config"

export default function NosotrosHero() {
  return (
    <section className="px-6 py-16 border-b border-zinc-900">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
        <Image
          src={config.brand.logoPath}
          alt={config.brand.name}
          width={160}
          height={160}
          unoptimized
        />
        <div className="flex flex-col gap-4">
          <h1 className="font-brand text-5xl font-bold tracking-widest text-[#f1e6cc]">
            {config.brand.nameUpper}
          </h1>
          <p className="font-mono text-zinc-400 text-lg leading-relaxed">
            Diseños que garpan. Remeras con identidad para devs, geeks y cultura.
          </p>
        </div>
      </div>
    </section>
  )
}