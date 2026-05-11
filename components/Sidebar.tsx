"use client";
import { NAVIGATION_LINKS } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-auto h-dvh bg-gray-800 px-4 py-2 border-r-2 border-gray-600 z-50">
      <div className="flex mx-auto">
        <Image src={"/logo.svg"} width={200} height={200} alt="logo" />
      </div>
      <div className="w-full mt-6 flex flex-col justify-center items-start gap-3 px-1">
        {NAVIGATION_LINKS.map((link) => {
          const pathname = usePathname();
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.href}
              className={`flex justify-start p-2 items-center gap-3 w-full ${isActive ? "bg-gray-600" : "bg-transparent"} hover:bg-gray-600 hover:shadow-2xs rounded-md transition-colors duration-300 group`}
            >
              <link.icon
                className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-600"} group-hover:text-white transition-colors duration-300`}
              />
              <span
                className={`text-lg font-normal transition-all duration-300 ${isActive ? "text-white" : "text-gray-400"} group-hover:text-white`}
              >
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
