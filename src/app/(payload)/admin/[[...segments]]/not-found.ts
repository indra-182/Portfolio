/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

import config from "../../../payload.config";
import { NotFoundPage, generatePageMetadata } from "@payloadcms/next/views";
import { importMap } from "../importMap";

export const generateMetadata = ({ params, searchParams }: { params: Record<string, string>; searchParams: Record<string, string | string[]> }) =>
  generatePageMetadata({ config, params: Promise.resolve(params), searchParams: Promise.resolve(searchParams) });

const NotFound = ({ params, searchParams }: { params: Record<string, string>; searchParams: Record<string, string | string[]> }) =>
  NotFoundPage({ config, params: Promise.resolve({ segments: params.segments ? [params.segments].flat() : [] }), searchParams: Promise.resolve(searchParams), importMap });

export default NotFound;
