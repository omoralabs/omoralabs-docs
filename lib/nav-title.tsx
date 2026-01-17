"use client";

import { LogoSVG } from "logo";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "components/ui/tooltip";

export function NavTitle() {
  return (
    <div className="flex items-center gap-2">
    <Tooltip>
      <TooltipTrigger>
      <a
        href="https://omoralabs.com"
        className="cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoSVG />
          </a>
      </TooltipTrigger>
      <TooltipContent className="dark:bg-black dark:text-gray-200 border bg-white text-gray-700 select-none">
        <p>Omora Labs Home</p>
      </TooltipContent>
    </Tooltip>
      <span className="text-fd-muted-foreground mx-0.5">|</span>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href="/"
            className="text-black dark:text-white text-lg hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer"
          >
            Docs
          </Link>
        </TooltipTrigger>
        <TooltipContent className="dark:bg-black dark:text-gray-200 border bg-white text-gray-700 select-none">
          <p>Docs Home</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
