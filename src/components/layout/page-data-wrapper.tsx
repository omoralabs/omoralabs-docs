"use client";

import { PageDataProvider } from "@/contexts/page-data-context";
import { type ReactNode } from "react";

export function PageDataWrapper({ children }: { children: ReactNode }) {
  return <PageDataProvider>{children}</PageDataProvider>;
}
