import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-extrabold text-ink">404</h1>
          <p className="mt-3 text-muted-foreground">The page you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </>
  );
}
