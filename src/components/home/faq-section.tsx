import faq from "@/data/faq.json"

type FaqItem = {
  question: string
  answer: string
}

const items = faq as FaqItem[]

export default function FaqSection() {
  return (
    <section className="px-6 py-20 border-t border-zinc-900 bg-black">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            FAQ
          </span>
          <h2 className="font-brand text-3xl font-bold tracking-[0.18em] text-white md:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="max-w-2xl font-mono text-sm leading-relaxed text-zinc-400 md:text-base">
            Lo básico para entender cómo comprás, cómo te atendemos y qué pasa si querés llevar varias.
          </p>
        </div>

        <div className="grid gap-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-zinc-900 bg-zinc-950 px-5 py-4 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/40 open:border-zinc-700"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-mono text-sm font-bold text-white outline-none transition-colors group-open:text-[#f1e6cc]">
                <span className="text-left">{item.question}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200 group-open:rotate-180 group-open:text-[#f1e6cc]"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-zinc-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}