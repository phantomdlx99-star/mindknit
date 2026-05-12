"use client";
import { NAVIGATION_LINKS } from "@/lib/constant";
import { Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const settings = pathname === "/settings";
  return (
    <div className="fixed left-0 top-0 bottom-0 w-auto h-dvh bg-gray-800 px-4 py-2 border-r-2 border-gray-600 z-50">
      <div className="flex mx-auto">
        <Image src={"/logo.svg"} width={200} height={200} alt="logo" />
      </div>
      <div className="flex justify-between items-start flex-col h-[88%]">
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
        <Link
          href={"/settings"}
          className={`flex justify-start items-center gap-3 px-4 ${settings ? "text-white bg-gray-600" : "text-gray-400 hover:bg-gray-600"} hover:text-white transition-colors duration-300 w-full py-2 rounded-lg cursor-pointer relative`}
        >
          <Settings className="w-6 h-6" />
          <h2>Settings</h2>
          <div className="absolute -top-3 left-1 right-1 w-auto h-px bg-gray-600 rounded-full" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
