import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'maiweb-cms',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})