"use client";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Field, FieldGroup } from "./ui/field";
const AddButton = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger className="flex justify-center items-center gap-3 rounded-xl text-gray-200 px-4 py-3 text-lg hover:cursor-pointer hover:scale-105 active:scale-100 transition-all duration-300 group bg-[#2a2d3a]">
          <Plus
            size={24}
            className="transition-transform duration-300 group-hover:rotate-90"
          />
          New Note
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input
                id="name-1"
                name="name"
                defaultValue="Next JS"
                className="md:text-sm"
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">Description</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="Type something about your note"
                className="md:text-sm"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddButton;
