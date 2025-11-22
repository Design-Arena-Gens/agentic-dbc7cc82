import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-6xl px-6 pb-12">
      <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-[1.5fr,1fr,1fr]">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 text-lg font-bold text-black shadow-lg shadow-primary-500/40">
              涙
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold uppercase tracking-[0.3em]">
                Shogun CRM
              </span>
              <span className="text-xs text-white/50">
                El dojo digital definitivo
              </span>
            </div>
          </Link>
          <p className="text-sm text-white/60">
            Empodera a tu equipo con flujos guiados, analítica predictiva y experiencias
            memorables para cada alumno.
          </p>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Shogun CRM. Hecho por senseis obsesionados con
            el detalle.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Navegación
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link href="#modulos" className="transition hover:text-white">
                Módulos
              </Link>
            </li>
            <li>
              <Link href="#resultados" className="transition hover:text-white">
                Resultados
              </Link>
            </li>
            <li>
              <Link href="#precios" className="transition hover:text-white">
                Precios
              </Link>
            </li>
            <li>
              <Link href="#demo" className="transition hover:text-white">
                Demo
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Recursos
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <Link href="#" className="transition hover:text-white">
                Kit de lanzamiento
              </Link>
            </li>
            <li>
              <Link href="#" className="transition hover:text-white">
                Webinar Sensei Pro
              </Link>
            </li>
            <li>
              <Link href="mailto:info@shoguncrm.com" className="transition hover:text-white">
                info@shoguncrm.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
