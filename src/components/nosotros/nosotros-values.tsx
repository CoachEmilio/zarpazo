export default function NosotrosValues() {
  const values = [
    {
      num: "01",
      title: "Diseño propio",
      desc: "Nada de templates. Cada diseño nace de una idea, un chiste interno o una crisis existencial a las 2am.",
    },
    {
      num: "02",
      title: "Producción real",
      desc: "Estampamos nosotros. Controlamos la calidad de cada remera antes de que salga.",
    },
    {
      num: "03",
      title: "Comunidad",
      desc: "Hecho para devs, geeks y gente de cultura. Si entendés el chiste, la remera es tuya.",
    },
  ]

  return (
    <section className="px-6 py-16 border-b border-zinc-900">
      <div className="max-w-2xl mx-auto flex flex-col gap-10">
        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
          Cómo laburamos
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item) => (
            <div key={item.num} className="flex flex-col gap-3">
              <span className="font-mono text-2xl font-bold text-zinc-400">{item.num}</span>
              <span className="font-mono text-sm font-bold text-white">{item.title}</span>
              <span className="font-mono text-xs text-zinc-400 leading-relaxed">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}