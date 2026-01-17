import { DocsLayout } from 'components/layout/notebook';
import { baseOptions } from 'lib/layout.shared';
import { source } from 'lib/source';
import type { ReactNode } from 'react';
import { PageDataWrapper } from 'components/layout/page-data-wrapper';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <PageDataWrapper>
      <DocsLayout {...baseOptions()} tree={source.getPageTree()}>
        {children}
      </DocsLayout>
    </PageDataWrapper>
  );
}