import AddButton from "@/components/AddButton";
import FilterButton from "@/components/FilterButton";
import NoteList from "@/components/NoteList";
import { NOTES } from "@/lib/constant";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) => {
  const { id } = await searchParams;
  const selectedNote = NOTES.find((note) => note.id === id) || NOTES[0];
  console.log(selectedNote);
  return (
    <div className="w-full p-4 flex gap-5 justify-center items-stretch h-dvh">
      <div className="w-100 flex flex-col gap-4">
        <div className="flex justify-between items-center z-0">
          <AddButton />
          <FilterButton />
        </div>
        <div className="overflow-y-auto no-scrollbar h-auto mt-5">
          <NoteList />
        </div>
      </div>
      <div className="flex-1 bg-[#1e212e] rounded-2xl border border-gray-800 p-8">
        {selectedNote ? (
          <>
            <h1 className="text-3xl font-bold text-white mb-4">
              {selectedNote.title}
            </h1>
            <div className="text-gray-400">{selectedNote.description}</div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-start text-white">
              Select a note to start editing!
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
