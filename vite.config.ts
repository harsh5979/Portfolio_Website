import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { projectPage, projectPath, projectSitemap, visibleProjects } from './src/project-pages.ts'

function portfolioPages(): Plugin {
  let outputDirectory: string
  return {
    name: 'portfolio-project-pages',
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir)
    },
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const path = new URL(request.url || '/', 'http://localhost').pathname
        const project = visibleProjects.find((item) => projectPath(item) === path)
        if (!project) return next()
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.end(projectPage(project, '/src/index.css'))
      })
    },
    async closeBundle() {
      const homepage = await readFile(resolve(outputDirectory, 'index.html'), 'utf8')
      const stylesheet = homepage.match(/href="([^"]+\.css)"/)?.[1]
      if (!stylesheet) throw new Error('Portfolio stylesheet missing from build output')
      await Promise.all(visibleProjects.map(async (project) => {
        const folder = resolve(outputDirectory, '.' + projectPath(project))
        await mkdir(folder, { recursive: true })
        await writeFile(resolve(folder, 'index.html'), projectPage(project, stylesheet))
      }))
      await writeFile(resolve(outputDirectory, 'sitemap.xml'), projectSitemap())
    },
  }
}

export default defineConfig({ plugins: [react(), portfolioPages()] })
