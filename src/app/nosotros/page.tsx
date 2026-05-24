import Image from "next/image"
import Link from "next/link"
import { config } from "@/data/config"

export default function Nosotros() {
  return (
    <main className="flex-1 bg-black text-white">

      {/* Hero */}
      <section className="px-6 py-20 border-b border-zinc-900">
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
              ZARPAZO
            </h1>
            <p className="font-mono text-zinc-400 text-lg leading-relaxed">
              Diseños que garpan. Remeras con identidad para devs, geeks y cultura.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="px-6 py-16 border-b border-zinc-900">
        <div className="max-w-2xl mx-auto flex flex-col gap-6 font-mono text-zinc-400 text-base leading-8">
          <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
            El origen
          </span>
          <p>
            ¿Cuántas cabezas tiene el gato? ¿Tres? ¿Cinco?{" "}
            Como diría Ravnovich: una cabeza, una oveja.{" "}
            Nosotros dijimos: cuatro cabezas, un gato. Y de ahí no había vuelta atrás.
          </p>
          <p>
            ¿Cuántas garras?{" "}
            Las suficientes para hacer un{" "}
            <span className="text-green-400">sudo rm -rf/*</span>{" "}
            sin arrepentirse.
            ¿Cuántas colas? Al menos tres. Una para el teclado, otra para el mouse y la última para el café.
          </p>
          <p>
            Somos developers que codeamos riéndonos.{" "}
            {config.brand.name} nació a las 3am entre un bug y una decisión de arquitectura
            que en el momento pareció sagaz.
          </p>
          <p>
            Y como número fuera de programa... vendemos remeras estampadas por nosotros.
            Las remeras están en el menú de arriba, nuestro pequeño kiosquito suburbano.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="px-6 py-16 border-b border-zinc-900">
        <div className="max-w-2xl mx-auto flex flex-col gap-10">
          <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
            Cómo laburamos
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Diseño propio", desc: "Nada de templates. Cada diseño nace de una idea, un chiste interno o una crisis existencial a las 2am." },
              { num: "02", title: "Producción real", desc: "Estampamos nosotros. Controlamos la calidad de cada remera antes de que salga." },
              { num: "03", title: "Comunidad", desc: "Hecho para devs, geeks y gente de cultura. Si entendés el chiste, la remera es tuya." },
            ].map((item) => (
              <div key={item.num} className="flex flex-col gap-3">
                <span className="font-mono text-2xl font-bold text-zinc-700">{item.num}</span>
                <span className="font-mono text-sm font-bold text-white">{item.title}</span>
                <span className="font-mono text-xs text-zinc-500 leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
          <h2 className="font-mono text-2xl font-bold text-white">
            ¿Ya viste el catálogo?
          </h2>
          <p className="font-mono text-zinc-500 text-sm leading-relaxed max-w-sm">
            Si llegaste hasta acá es porque algo te copó. Fijate en los diseños — seguro hay uno que te representa.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              href="/#productos"
              className="font-mono text-sm bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-zinc-200 transition-colors duration-200"
            >
              Ver catálogo →
            </Link>
            <a
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm border border-zinc-700 hover:border-white text-zinc-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 hover:bg-white/5"
            >
              Escribinos por WhatsApp ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}