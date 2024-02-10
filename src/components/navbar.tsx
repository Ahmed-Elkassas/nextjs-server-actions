import Link from "next/link";

export function Navbar() {
  return (
    <div className="p-3 bg-green-500">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <Link href="/" className="capitalize px-2 py-1">
            home
          </Link>
          <div>
            <Link
              href={`/snippets/new`}
              className="capitalize rounded-md border border-neutral-900 px-2 py-1"
            >
              new snippets
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
