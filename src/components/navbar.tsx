import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-black sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/brand/targattos-logo.png"
          alt="Targattos"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-mono text-xl font-bold tracking-tight text-white">
          Targattos
        </span>
      </Link>

      <nav className="flex items-center gap-6">
        <Link
          href="/#productos"
          className="font-mono text-sm text-zinc-400 hover:text-white transition-colors"
        >
          Drops
        </Link>
        <Link
            href="/nosotros"
            className="font-mono text-sm text-zinc-400 hover:text-white transition-colors"
        >
            Nosotros
        </Link>
      </nav>
    </header>
  )
}