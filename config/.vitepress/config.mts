import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: '../content',
  outDir: '../dist',
  title: 'Portfolio',
  description: "Portfolio avec vitepress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Projets', link: '/projets' },
      { text: 'Self Host', link: '/self-host' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LouisFourre' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/louis-fourre/' },
      { icon: 'gmail', link: 'mailto:fourre.louis@gmail.com' }
    ]
  }
})
