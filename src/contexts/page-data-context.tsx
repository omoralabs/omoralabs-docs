"use client";

import { createContext, useContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";

interface PageDataContextValue {
  markdownUrl?: string;
  githubUrl?: string;
}

interface PageDataContext {
  data: PageDataContextValue;
  setData: Dispatch<SetStateAction<PageDataContextValue>>;
}

const PageDataContext = createContext<PageDataContext>({
  data: {},
  setData: () => {},
});

export function PageDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PageDataContextValue>({});

  return (
    <PageDataContext.Provider value={{ data, setData }}>
      {children}
    </PageDataContext.Provider>
  );
}

export function usePageData() {
  const context = useContext(PageDataContext);
  return context.data;
}

export function useSetPageData() {
  const context = useContext(PageDataContext);
  return context.setData;
}
