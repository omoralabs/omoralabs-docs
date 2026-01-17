"use client";

import { useEffect } from "react";
import { useSetPageData } from "@/contexts/page-data-context";

export function PageDataSetter({
  markdownUrl,
  githubUrl,
}: {
  markdownUrl: string;
  githubUrl: string;
}) {
  const setData = useSetPageData();

  useEffect(() => {
    setData({ markdownUrl, githubUrl });
  }, [markdownUrl, githubUrl, setData]);

  return null;
}
