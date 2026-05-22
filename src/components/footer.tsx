import Link from "next/dist/client/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black px-6 py-8 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-zinc-500 text-sm">
          © 2026 Targattos. Drops limitados.
        </span>
        <Link
            href="/nosotros"
            className="font-mono text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Nosotros
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/targattos"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-zinc-500 text-sm hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-zinc-500 text-sm hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}