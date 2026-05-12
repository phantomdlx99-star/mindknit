"use client";
import { Show, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="w-full z-50 h-auto px-6 py-4 flex justify-between items-center border-b-2 border-gray-600 bg-gray-800">
      <div className="relative w-[60%]">
        <Input
          className="peer p-3 pl-12 w-full h-auto border border-gray-500 text-xl text-gray-500 bg-[#232C3B]"
          placeholder="Find notes about vector search"
        />
        <Search className="w-6 h-6 absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 peer-focus:opacity-0 pointer-events-none transition-opacity duration-300" />
      </div>
      <Show when={"signed-out"}>
        <div className="flex justify-center items-center gap-2 bg-blue-900 text-white font-bold text-xl px-4 py-2 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer active:scale-100">
          <SignInButton mode="modal" />
        </div>
      </Show>
      <Show when={"signed-in"}>
        <div className="flex justify-center gap-2 items-center px-3 py-2 hover:bg-gray-700 rounded-xl transition-colors duration-300 cursor-pointer">
          <UserButton />
          {user && <span className="text-white">{user.firstName}</span>}
        </div>
      </Show>
    </div>
  );
};

export default Header;
