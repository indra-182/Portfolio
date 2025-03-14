import { getPayload } from "payload";
import configPromise from "../app/payload.config";

export async function fetchPayload() {
  return getPayload({ config: configPromise });
}
