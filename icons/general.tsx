import Image from "next/image";

export const GitHubLogo = () => (
  <>
    <Image
      src="/github-mark.svg"
      alt="GitHub"
      width={32}
      height={32}
      className="h-4 w-auto dark:hidden"
    />
    <Image
      src="/github-mark-white.svg"
      alt="GitHub"
      width={32}
      height={32}
      className="h-4 w-auto hidden dark:block"
    />
  </>
);
