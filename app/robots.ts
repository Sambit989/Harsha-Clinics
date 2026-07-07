import type { MetadataRoute } from 'next'
import { clinicConfig } from '@/lib/clinicConfig'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${clinicConfig.seo.domain}/sitemap.xml`,
  }
}
