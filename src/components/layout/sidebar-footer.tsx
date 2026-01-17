import { GitHubLogo } from "icons/general";
import { MessageCircleQuestionMark } from "lucide-react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SidebarFooter() {
  return (
    <div className="flex flex-col-3 gap-2 justify-center h-full">
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={"https://github.com/omoralabs/omora-labs-docs"}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <GitHubLogo />
            </span>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="dark:bg-black dark:text-gray-200 border bg-white text-gray-700 select-none">
          <p>Github Docs</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={"https://omoralabs.com/contact"}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <MessageCircleQuestionMark className="h-5 w-5 dark:text-white text-gray-700" />
          </Link>
        </TooltipTrigger>
        <TooltipContent className="dark:bg-black dark:text-gray-200 border bg-white text-gray-700 select-none">
          <p>Questions?</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
