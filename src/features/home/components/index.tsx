import { Button } from "@/components/ui/button";
import { libraryIcons } from "../constants/libraryIcons";
import { LibraryIcon } from "./LibraryIcon";

export function HomeIndex() {
  return (
    <div className="flex flex-col items-center justify-center h-screen align-middle">
      <h1 className="font-bold">Tech Stack</h1>
      <div className="flex flex-row gap-2">
        {libraryIcons.map((icon, index) => (
          <LibraryIcon
            key={index}
            src={icon.src}
            alt={icon.alt}
            name={icon.name}
            docsUrl={icon.docsUrl}
          />
        ))}
      </div>
      <Button
        onClick={() => {
          throw new Error("This is your first error!");
        }}
      >
        Break the world
      </Button>
      ;
    </div>
  );
}
