import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

import { Banner } from "fumadocs-ui/components/banner";
import { ArrowLeftRight, Compass, Diff, Play, Wallet, Zap } from "lucide-react";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...components,
    Banner: (props) => <Banner changeLayout={false} {...props} />,
    Wallet,
    Diff,
    ArrowLeftRight,
    Play,
    Compass,
    Zap,
  };
}
