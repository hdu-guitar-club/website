import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../../../mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: any) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath, params.lang);
  return metadata;
}

interface IPageProps {
  params: Promise<{
    lang: string;
    mdxPath: string[];
  }>;
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props: IPageProps) {
  const params = await props.params;
  const result = await importPage(params.mdxPath, params.lang);
  const { default: MDXContent, toc, metadata, sourceCode } = result;
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
