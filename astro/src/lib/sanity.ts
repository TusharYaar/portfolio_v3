import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.CMS_ID || process.env.CMS_ID,
  dataset: import.meta.env.CMS_DATASET || process.env.CMS_DATASET,
  apiVersion: import.meta.env.CMS_API_VERSION || process.env.CMS_API_VERSION || '2023-01-01',
  useCdn: Boolean(import.meta.env.CMS_USE_CDN || process.env.CMS_USE_CDN),
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
