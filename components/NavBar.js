import React from "react";
import Link from "next/link";

export default function NavBar() {
  const user = undefined;
  return (
    <nav className="px-4 py-2 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold ">
          <Link href="/">
            <a>Next Shop</a>
          </Link>
        </li>
        <li role="separator" className="flex-1" />
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <button>Sign Out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">
              <a>Sign In</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
