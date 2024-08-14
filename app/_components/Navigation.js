import { auth } from "@/app/_lib/auth";
import Link from "next/link";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className={`hover:text-accent-400 transition-colors `}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`hover:text-accent-400 transition-colors $`}
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className={`hover:text-accent-400 transition-colors flex gap-3 justify-center items-center `}
            >
              <img
                className="rounded-full h-8"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span> Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className={`hover:text-accent-400 transition-colors `}
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
