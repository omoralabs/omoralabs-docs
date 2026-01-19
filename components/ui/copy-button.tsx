"use client";
import { Tooltip, TooltipContent, TooltipTrigger } from "components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useCopyButton } from "fumadocs-ui/utils/use-copy-button";
import { Check, Copy } from "lucide-react";
import { RefObject } from "react";
import { toast } from "sonner";

export function CopyButton({
  spanText,
  copyElement,
  tooltipText,
  buttonClassName,
  tooltipClassName,
  iconClassName,
  showArrow,
}: {
  spanText?: string;
  copyElement: RefObject<HTMLElement | null> | string;
  tooltipText: string;
  buttonClassName?: string;
    tooltipClassName?: string;
    iconClassName?: string;
  showArrow?: boolean;
}) {
  const [checked, onClick] = useCopyButton(async () => {
    const text =
      typeof copyElement === "string"
        ? copyElement
        : copyElement.current?.querySelector("code")?.textContent || "";
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  });

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className={buttonClassName} onClick={onClick}>
          <AnimatePresence mode="wait" initial={false}>
            {checked ? (
              <motion.div
                key="check"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Check className="size-4" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -180 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                  <Copy className={iconClassName} />
              </motion.div>
            )}
          </AnimatePresence>
          {spanText && (
            <span className=" dark:text-gray-200 text-black">{spanText}</span>
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent className={tooltipClassName} showArrow={showArrow}>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
}
