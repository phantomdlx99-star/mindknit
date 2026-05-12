"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { useRouter, useSearchParams } from "next/navigation";

const NoteCard = ({
  id,
  title,
  description,
  tags,
}: {
  id: string;
  title: string;
  description: string;
  tags: String[];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeId = searchParams.get("id");
  return (
    <Card
      className={`bg-gray-800 cursor-pointer border-2 border-blue-500 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 z-5 ${
        activeId === id
          ? "bg-gray-700 border-blue-500 border-2"
          : "bg-gray-800 border-transparent"
      }`}
      onClick={() => router.push(`?id=${id}`)}
    >
      <CardTitle className="text-start px-3 text-xl font-bold text-white">
        {title}
      </CardTitle>
      <CardContent>
        <CardDescription className="text-gray-300 text-md">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="w-full h-auto px-3 py-2 flex justify-start items-center gap-2 bg-transparent border-none">
        {tags.map((tag, idx) => (
          <div
            className="rounded-full h-auto p-2 bg-blue-950/55 text-white"
            key={idx}
          >
            #{tag}
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
