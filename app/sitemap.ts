import type { MetadataRoute } from 'next'
import { clinicConfig } from '@/lib/clinicConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = clinicConfig.seo.domain

  // Filter out unique, non-anchor internal paths
  const uniquePaths = Array.from(
    new Set(
      clinicConfig.navLinks
        .map((link) => link.href)
        .filter((href) => href.startsWith('/') && !href.includes('#'))
    )
  )

  const sitemapItems = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    ...uniquePaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  return sitemapItems
}
