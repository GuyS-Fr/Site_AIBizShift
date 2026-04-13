import { getServerSideURL } from './getURL'

/**
 * Processes media resource URL to ensure proper formatting.
 *
 * Strips the server URL prefix (e.g. https://aibizshift.eu) so that paths
 * stay relative (e.g. /api/media/file/image.png). This lets Next.js Image
 * match them against localPatterns instead of requiring remotePatterns,
 * and avoids the optimizer making an HTTP round-trip to itself.
 */
export const getMediaUrl = (url: string | null | undefined, cacheTag?: string | null): string => {
  if (!url) return ''

  // Strip server URL prefix to keep paths relative for localPatterns
  const serverURL = getServerSideURL()
  if (serverURL && url.startsWith(serverURL)) {
    url = url.slice(serverURL.length)
  }

  if (cacheTag && cacheTag !== '') {
    cacheTag = encodeURIComponent(cacheTag)
  }

  return cacheTag ? `${url}?${cacheTag}` : url
}
