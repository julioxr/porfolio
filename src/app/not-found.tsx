import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-4xl sm:text-5xl">No encontré esa página</h1>
      <p className="mt-4 text-lg text-muted">Puede que el link haya cambiado.</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center rounded-[5px] bg-accent px-5 text-[0.9375rem] font-medium text-accent-ink transition-colors duration-200 hover:bg-accent-hover"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
