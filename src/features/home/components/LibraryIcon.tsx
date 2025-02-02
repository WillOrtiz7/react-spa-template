import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LibraryIconProps {
  src: string;
  alt: string;
  name: string;
  docsUrl: string;
}

export function LibraryIcon({ src, alt, name, docsUrl }: LibraryIconProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a
              href={docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <img src={src} alt={alt} className="w-10 h-10" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <span>{name}</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
