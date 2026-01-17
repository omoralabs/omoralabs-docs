"use client";
import { cva } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";
import { Airplay, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ComponentProps, useEffect, useState } from "react";
import { cn } from "../../lib/cn";

const itemVariants = cva(
  "size-6.5 rounded-full p-1.5 text-fd-muted-foreground",
  {
    variants: {
      active: {
        true: "bg-fd-accent text-fd-accent-foreground",
        false: "text-fd-muted-foreground",
      },
    },
  },
);

const full = [
  ["light", Sun] as const,
  ["dark", Moon] as const,
  ["system", Airplay] as const,
];

export function ThemeToggle({
  className,
  mode = "light-dark",
  ...props
}: ComponentProps<"div"> & {
  mode?: "light-dark" | "light-dark-system";
}) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const container = cn(
    "inline-flex items-center rounded-full border p-1",
    className,
  );

  if (mode === "light-dark") {
    const value = mounted ? resolvedTheme : null;
    const Icon = value == "light" ? Moon : Sun;

    return (
      <button
        className={cn(
          "size-8 rounded-md p-2 dark:text-white hover:bg-fd-accent cursor-pointer",
          className,
        )}
        aria-label="Toggle Theme"
        onClick={() => setTheme(value === "light" ? "dark" : "light")}
        data-theme-toggle=""
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={value}
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="size-full" />
          </motion.div>
        </AnimatePresence>
      </button>
    );
  }

  const value = mounted ? theme : null;

  return (
    <div className={container} data-theme-toggle="" {...props}>
      {full.map(([key, Icon]) => (
        <button
          key={key}
          aria-label={key}
          className={cn(itemVariants({ active: value === key }))}
          onClick={() => setTheme(key)}
        >
          <Icon className="size-full" />
        </button>
      ))}
    </div>
  );
}
