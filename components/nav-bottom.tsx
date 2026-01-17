"use client";

import { Button } from "components/ui/button";
import { findNeighbour } from "fumadocs-core/page-tree";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationBottomProps = {
  neighbours: ReturnType<typeof findNeighbour>;
};

export function NavigationBottom({ neighbours }: NavigationBottomProps) {
  const pathname = usePathname();
  return (
    pathname !== "/" && (
      <div className="mx-auto flex h-16 w-full max-w-2xl items-center justify-between gap-2 px-4 md:px-0">
        {neighbours.previous && (
          <Button variant="secondary" size="sm" asChild className="shadow-none">
            <Link
              href={neighbours.previous.url}
              className="flex gap-1 dark:text-gray-300 text-extralight"
            >
              <ArrowLeft />
              <span className="hidden min-[400px]:inline">
                {" "}
                {neighbours.previous.name}
              </span>
            </Link>
          </Button>
        )}
        {neighbours.next && (
          <Button
            variant="secondary"
            size="sm"
            className="ml-auto shadow-none"
            asChild
          >
            <Link
              href={neighbours.next.url}
              className="flex gap-1 dark:text-gray-300 text-extralight"
            >
              <span className="hidden min-[400px]:inline">
                {" "}
                {neighbours.next.name}
              </span>
              <ArrowRight />
            </Link>
          </Button>
        )}
      </div>
    )
  );
}
