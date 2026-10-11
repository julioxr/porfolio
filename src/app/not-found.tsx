import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-serif text-4xl font-semibold">No encontré esa página</h1>
      <p className="mt-4 text-lg text-muted">Puede que el link haya cambiado.</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
