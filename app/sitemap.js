import { SITE_URL } from '../lib/config';

const routes = ['', '/about', '/services', '/industries', '/insights', '/careers', '/contact', '/legal'];

export default function sitemap() {
  return routes.map((r) => ({ url: SITE_URL + r, lastModified: new Date(), changeFrequency: 'monthly', priority: r === '' ? 1 : 0.7 }));
}
