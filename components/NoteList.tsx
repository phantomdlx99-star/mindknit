import { NOTES } from "@/lib/constant";
import NoteCard from "./NoteCard";

const NoteList = () => {
  return (
    <div className="mt-2 flex flex-col justify-start items-center gap-3 overflow-y-auto">
      {NOTES.map((note, idx) => (
        <NoteCard {...note} key={idx} />
      ))}
    </div>
  );
};

export default NoteList;
