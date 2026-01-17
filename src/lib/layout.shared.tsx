import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { NavTitle } from "./nav-title";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (props) => <NavTitle {...props} />
    },
  };
}
