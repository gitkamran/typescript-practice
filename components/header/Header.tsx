import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-2 border-b border-b-white/10 bg-neutral-900 flex items-center w-full h-[6vh]">
      <nav>
        <ul className="flex items-center gap-4 text-xs text-white">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/practice">تمرین</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
