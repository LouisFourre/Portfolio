import { createContentLoader } from 'vitepress'

const EXT = 'jpg'

function slug(url: string) {
  return url.split('/').pop()!.replace(/\.html$/, '')
}

export default createContentLoader('projects/*.md', {
  transform(raw) {
    return raw
      .map(({ url, frontmatter }) => ({
        url,
        title: frontmatter.title,
        image: frontmatter.image ?? `/img/${slug(url)}/${slug(url)}.${EXT}`,
        description: frontmatter.description,
        tags: frontmatter.tags ?? [],
        date: frontmatter.date
      }))
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  }
})