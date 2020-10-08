import defaultSettings from '@/settings'

const title = defaultSettings.title || '校园二手平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
