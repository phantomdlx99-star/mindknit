import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "radix-ui";

const FilterButton = () => {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48 transition-all border-none text-end text-white text-lg cursor-pointer">
        <SelectValue placeholder="Filter" className="text-gray-200" />
      </SelectTrigger>
      <SelectContent className="bg-gray-600 text-gray-200">
        <SelectGroup>
          <SelectLabel className="text-gray-300">Filter by</SelectLabel>
          <SelectSeparator />
          <SelectItem value="length">Length</SelectItem>
          <SelectItem value="date">Date Modified</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterButton;
