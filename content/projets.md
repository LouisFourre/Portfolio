---
title: Projets
---

<script setup>
import { data as projects } from './projects.data'
</script>

# Mes projets

<ProjectCard
  v-for="p in projects"
  :key="p.url"
  :title="p.title"
  :image="p.image"
  :description="p.description"
  :url="p.url"
  :html="p.html"
/>