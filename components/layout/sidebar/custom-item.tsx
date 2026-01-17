'use client';
import type * as PageTree from "fumadocs-core/page-tree";
import { SidebarItem } from "../notebook/sidebar";
import { customIcons } from "../custom-icons";
import { useMemo } from "react";

export function CustomSidebarItem({ item }: { item: PageTree.Item }) {
  const icon = useMemo(() => {
    // First check if item has an icon
    if (item.icon) return item.icon;

    // Check if the item name matches a custom icon
    if (item.name in customIcons) {
      return customIcons[item.name];
    }

    return undefined;
  }, [item]);

  return (
    <SidebarItem href={item.url} external={item.external} icon={icon}>
      {item.name}
    </SidebarItem>
  );
}
