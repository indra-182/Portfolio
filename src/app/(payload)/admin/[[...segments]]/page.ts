/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

import config from "../../../payload.config";
import { RootPage, generatePageMetadata } from "@payloadcms/next/views";
import { importMap } from "../importMap";
import { Metadata } from "next";

type PageProps = {
  params: { segments?: string[] };
  searchParams: Record<string, string | string[] | undefined>;
};

export const generateMetadata = async ({
  params,
  searchParams,
}: PageProps): Promise<Metadata> => {
  const filteredSearchParams: Record<string, string | string[]> = {};
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined) {
      filteredSearchParams[key] = value;
    }
  });

  return generatePageMetadata({
    config,
    params: Promise.resolve(params),
    searchParams: Promise.resolve(filteredSearchParams),
  });
};

const Page = async ({ params, searchParams }: PageProps) => {
  const filteredSearchParams: Record<string, string | string[]> = {};
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined) {
      filteredSearchParams[key] = value;
    }
  });

  return RootPage({
    config,
    params: Promise.resolve({
      segments: params.segments || [],
    }),
    searchParams: Promise.resolve(filteredSearchParams),
    importMap,
  });
};

export default Page;
