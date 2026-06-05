import Image from "next/image"

import sizeGuide from "@/data/size-guide.json"

type SizeRow = {
  size: string
  width: string
  length: string
}

type SizeGuideData = {
  title: string
  subtitle: string
  images: {
    men: string
    women: string
  }
  men: SizeRow[]
  women: SizeRow[]
}

const guide = sizeGuide as SizeGuideData

function SizeTable({ title, rows }: { title: string; rows: SizeRow[] }) {
  return (
    <div className="rounded-[1.5rem] border border-zinc-900 bg-zinc-950 p-5 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="font-mono text-lg font-bold text-white">{title}</h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
          Ancho / Largo
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800">
        <table className="w-full border-collapse text-left font-mono text-sm">
          <thead className="bg-zinc-900/70 text-zinc-400">
            <tr>
              <th className="px-4 py-3 font-normal">Talle</th>
              <th className="px-4 py-3 font-normal">Ancho</th>
              <th className="px-4 py-3 font-normal">Largo</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={`${title}-${row.size}`}
                className={index % 2 === 0 ? "bg-black" : "bg-zinc-950"}
              >
                <td className="px-4 py-3 text-white">{row.size}</td>
                <td className="px-4 py-3 text-zinc-300">{row.width}</td>
                <td className="px-4 py-3 text-zinc-300">{row.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SizeCard({ title, image, rows }: { title: string; image: string; rows: SizeRow[] }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-zinc-900 bg-zinc-950">
      <div className="relative aspect-square border-b border-zinc-900 bg-black">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="p-5 md:p-6">
        <SizeTable title={title} rows={rows} />
      </div>
    </article>
  )
}

export default function GuiaDeTalles() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl space-y-10">
        <header className="space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400">
            Medidas
          </span>
          <h1 className="font-brand text-4xl font-bold tracking-[0.18em] text-white md:text-6xl">
            {guide.title}
          </h1>
          <p className="max-w-3xl font-mono text-sm leading-relaxed text-zinc-400 md:text-base">
            {guide.subtitle}
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          <SizeCard title="Hombre" image={guide.images.men} rows={guide.men} />
          <SizeCard title="Mujer" image={guide.images.women} rows={guide.women} />
        </div>
      </div>
    </section>
  )
}