import { CodeBlock, Pre } from "components/codeblock";
import fs from "fs";
import { codeToHtml } from "shiki";

export default async function ReadComponents({
  filePath,
}: {
  filePath: string;
}) {
  const code = fs.readFileSync(filePath, "utf-8");
  const lang = filePath.split(".").pop() || "text";

  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: "github-light",
      dark: "ayu-dark",
    },
    defaultColor: false,
  });

  const codeContent = html.match(/<code[^>]*>([\s\S]*?)<\/code>/)?.[1] || "";

  return (
    <CodeBlock
      data-line-numbers={true}
      className="dark:bg-zinc-700/30 bg-zinc-200/30 leading-[1.9]! relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words outline-none max-h-85 overflow-auto scrollbar-hide"
    >
      <Pre
        dangerouslySetInnerHTML={{ __html: `<code>${codeContent}</code>` }}
      />
    </CodeBlock>
  );
}
