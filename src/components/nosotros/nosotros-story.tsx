import { config } from "@/data/config"

export default function NosotrosStory() {
  return (
    <section className="px-6 py-12 border-b border-zinc-900">
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
  )
}