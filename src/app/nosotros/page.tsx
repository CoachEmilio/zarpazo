import Image from "next/image"
import { config } from "@/data/config"

export default function Nosotros() {
  return (
    <main className="flex-1 bg-black text-white px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-12">
          <Image
            src={config.brand.logoPath}
            alt={config.brand.name}
            width={200}
            height={200}
            unoptimized
          />
        </div>
        <h1 className="font-mono text-4xl font-bold tracking-tight mb-6">
          Nosotros
        </h1>
       <div className="font-mono text-zinc-400 text-lg leading-8 space-y-6">
        <p>
          ¿Cuántas cabezas tiene el gato? ¿Tres? ¿Cinco?{" "}
          Como diría Ravnovich: una cabeza, una oveja.{" "}
          Nosotros dijimos: cuatro cabezas, un gato. Y de ahí no había vuelta atrás.
        </p>

        <p>
          ¿Cuántas garras?{" "}
          Las suficientes{" "}
          para hacer un{" "}
          <span className="text-green-400">sudo rm -rf/*</span>{" "}
          sin arrepentirse.
          <br />
          ¿Cuántas colas? Al menos tres. Una para el teclado, otra para el mouse y la última para el café.
          </p>

          <p>
            Somos developers que codeamos riéndonos.{" "}
            {config.brand.name} nació a las 3am entre un bug y una decisión de arquitectura
            que en el momento pareció sagaz.
          </p>

          <p className="text-zinc-400">
            Y como número fuera de programa... vendemos remeras estampadas por nosotros.
            Las remeras están en el menú de arriba, nuestro pequeño kiosquito suburbano. .{" "}
          </p>
        </div>
      </div>
    </main>
  )
}