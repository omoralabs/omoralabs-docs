import { DocsPage } from "components/layout/notebook/page";
import { PageDataSetter } from "components/layout/page-data-setter";
import {
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getPageImage, source } from "lib/source";
import { getMDXComponents } from "mdx-components";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page(props: PageProps<"/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const gitConfig = {
    user: "omoralabs",
    repo: "omora-labs-docs",
    branch: "main",
  };

  const slugPath = params.slug?.join("/") || "index";
  const markdownUrl = `/api/mdx/${slugPath}`;
  const githubUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${slugPath}.mdx`;

  return (
    <>
      <PageDataSetter markdownUrl={markdownUrl} githubUrl={githubUrl} />
      <DocsPage
        toc={page.data.toc}
        full={page.data.full}
        tableOfContent={{ style: "clerk" }}
        tableOfContentPopover={{ enabled: false }}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className="mb-0">
          {page.data.description}
        </DocsDescription>
        <DocsBody>
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(source, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const isHomePage = !params.slug || params.slug.length === 0;

  return {
    title: isHomePage ? "Omora Docs" : `${page.data.title} | Omora Docs`,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
