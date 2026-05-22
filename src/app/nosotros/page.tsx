import Image from "next/image"

export default function Nosotros() {
  return (
    <main className="flex-1 bg-black text-white px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-12">
          <Image
            src="/brand/targattos-logo.png"
            alt="Targattos"
            width={200}
            height={200}
          />
        </div>
        <h1 className="font-mono text-4xl font-bold tracking-tight mb-6">
          Nosotros
        </h1>
        <p className="font-mono text-zinc-400 text-lg leading-8">
          Targattos es una marca de remeras con diseños únicos y humor para
          comunidades. Drops limitados, producción propia, identidad real.
        </p>
        <p className="font-mono text-zinc-400 text-lg leading-8 mt-4">
          No vendemos ropa. Vendemos cultura.
        </p>
      </div>
    </main>
  )
}