import type { Metadata } from "next"
import Link from "next/link"
import { config } from "@/data/config"

export const metadata: Metadata = {
  title: `Políticas y términos — ${config.brand.name}`,
  description: "Política de devoluciones, privacidad y términos y condiciones de Zarpazo.",
  robots: { index: false },
}

const sections = [
  { id: "devoluciones", label: "Devoluciones" },
  { id: "privacidad", label: "Privacidad" },
  { id: "terminos", label: "Términos" },
]

export default function LegalPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-zinc-300">Políticas y términos</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12 space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">Legal</span>
          <h1 className="font-brand text-4xl md:text-5xl font-bold tracking-wide" style={{ color: "#f1e6cc" }}>
            Políticas y términos
          </h1>
          <p className="font-mono text-sm text-zinc-400 leading-relaxed">
            Última actualización: junio 2026
          </p>
        </div>

        {/* Índice de secciones */}
        <nav aria-label="Secciones" className="mb-16 flex flex-wrap gap-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-mono text-xs text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-4 py-2 rounded-full transition-all duration-200"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="space-y-20">

          {/* Devoluciones */}
          <section id="devoluciones" aria-labelledby="title-devoluciones">
            <SectionTitle id="title-devoluciones">Política de devoluciones y cambios</SectionTitle>

            <Block title="Cambio de talle">
              <p>Si el problema es el talle, podés solicitar el cambio dentro de los <strong className="text-white">7 días</strong> posteriores a la recepción de tu pedido.</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>El costo del envío para el cambio corre por cuenta del cliente.</li>
                <li>Te recomendamos revisar la <Link href="/guia-de-talles" className="text-[#f1e6cc] hover:underline">guía de talles</Link> antes de comprar.</li>
              </ul>
            </Block>

            <Block title="Condiciones del producto">
              <p>Para que un producto sea aceptado para cambio, debe cumplir con:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>No estar lavado ni usado.</li>
                <li>Incluir el embalaje original tal como fue recibido.</li>
              </ul>
              <p className="mt-2">No se aceptan productos con signos de uso o sin su packaging original.</p>
            </Block>

            <Block title="Reintegros de dinero">
              <p>No realizamos reintegros de dinero. En su lugar, podés cambiar tu producto por cualquier otro artículo disponible en la web con el mismo valor.</p>
            </Block>

            <Block title="Diseños personalizados">
              <p>Los productos con diseño propio del cliente son fabricados a medida y <strong className="text-white">no tienen cambio ni devolución</strong>, salvo defecto de fabricación comprobable.</p>
            </Block>

            <Block title="Retiro en persona">
              <p>Podés retirar tu pedido de forma gratuita en:</p>
              <div className="mt-3 border border-zinc-800 rounded-xl p-4 font-mono text-sm space-y-1">
                <p className="text-white font-bold">Defensa 657, San Telmo, CABA</p>
                <p className="text-zinc-400">Domingos de 10:00 a 18:00 hs</p>
              </div>
            </Block>

            <Block title="Envíos">
              <p>Actualmente los envíos se coordinan caso a caso por WhatsApp. Escribinos y te informamos disponibilidad, costos y tiempos según tu ubicación.</p>
              <a
                href={`https://wa.me/${config.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 font-mono text-xs text-[#f1e6cc] hover:underline"
              >
                Consultar por WhatsApp →
              </a>
            </Block>
          </section>

          <Divider />

          {/* Privacidad */}
          <section id="privacidad" aria-labelledby="title-privacidad">
            <SectionTitle id="title-privacidad">Política de privacidad</SectionTitle>

            <Block title="Qué datos recolectamos">
              <p>Este sitio no solicita ni almacena datos personales directamente. El contacto y la compra se realizan vía WhatsApp, sujeto a la <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#f1e6cc] hover:underline">política de privacidad de WhatsApp</a>.</p>
            </Block>

            <Block title="Google Analytics">
              <p>Usamos Google Analytics para entender cómo se navega el sitio. Los datos son anónimos y agregados — no identifican personas. Podés optar por no ser rastreado desde la configuración de tu navegador.</p>
            </Block>

            <Block title="Cookies">
              <p>Google Analytics utiliza cookies de análisis. No usamos cookies propias ni publicitarias.</p>
            </Block>

            <Block title="Ley 25.326">
              <p>Cumplimos con la Ley de Protección de Datos Personales de Argentina (Ley 25.326). Si tenés preguntas sobre el uso de tus datos, escribinos a <a href={`mailto:${config.correo}`} className="text-[#f1e6cc] hover:underline">{config.correo}</a>.</p>
            </Block>
          </section>

          <Divider />

          {/* Términos */}
          <section id="terminos" aria-labelledby="title-terminos">
            <SectionTitle id="title-terminos">Términos y condiciones</SectionTitle>

            <Block title="Proceso de compra">
              <p>Los pedidos se realizan vía WhatsApp. Un pedido se considera confirmado cuando acordamos el diseño, talle y método de pago por ese canal.</p>
            </Block>

            <Block title="Métodos de pago">
              <p>Aceptamos transferencia bancaria y efectivo. El pago se confirma manualmente antes de iniciar la producción.</p>
            </Block>

            <Block title="Precios">
              <p>Los precios están expresados en pesos argentinos (ARS) y pueden actualizarse sin previo aviso. El precio válido es el acordado en el momento de confirmar el pedido.</p>
            </Block>

            <Block title="Producción">
              <p>Trabajamos bajo demanda. Cada producto se fabrica al confirmar el pedido. Los tiempos de producción se informan por WhatsApp según el tipo de producto.</p>
            </Block>

            <Block title="Contacto">
              <p>Para cualquier consulta relacionada con estas políticas:</p>
              <div className="mt-3 font-mono text-sm space-y-1 text-zinc-400">
                <p>WhatsApp: <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-[#f1e6cc] hover:underline">Escribinos</a></p>
                <p>Email: <a href={`mailto:${config.correo}`} className="text-[#f1e6cc] hover:underline">{config.correo}</a></p>
              </div>
            </Block>
          </section>

        </div>
      </div>
    </main>
  )
}

// ─── Helpers de layout ────────────────────────────────────────────────────────

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-brand text-2xl md:text-3xl font-bold text-white mb-8 pb-4 border-b border-zinc-800">
      {children}
    </h2>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="font-mono text-sm font-bold text-[#f1e6cc] mb-3 uppercase tracking-widest">{title}</h3>
      <div className="font-mono text-sm text-zinc-400 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  )
}

function Divider() {
  return <hr className="border-zinc-800" />
}
