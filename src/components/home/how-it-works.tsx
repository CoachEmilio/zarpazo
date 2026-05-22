export default function HowItWorks() {
  return (
    <section className="px-6 py-16 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-2xl font-bold tracking-tight text-center mb-12">
          ¿Cómo funciona?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Elegís", desc: "Encontrás el diseño que te representa." },
            { step: "02", title: "Pedís", desc: "Entrás al diseño que elegistes, y nos mandás un WhatsApp con tu talle y color." },
            { step: "03", title: "Transferís", desc: "te mandamos alias y confirmás el pedido con la transferencia." },
            { step: "04", title: "Recibís", desc: "Lo fabricamos y te lo enviamos." },
          ].map((item) => (
            <div key={item.step} className="flex flex-col gap-3">
              <span className="font-mono text-orange-500 text-4xl font-bold">
                {item.step}
              </span>
              <span className="font-mono text-white font-bold text-lg">
                {item.title}
              </span>
              <span className="font-mono text-zinc-400 text-sm">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}