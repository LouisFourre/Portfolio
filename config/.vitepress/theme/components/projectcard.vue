<script setup>
import { withBase } from 'vitepress'
defineProps({
  title: String,
  image: String,
  description: String,
  url: String,
  tags: { type: Array, default: () => [] }
})
</script>

<template>
  <a :href="withBase(url)" class="project-card">
    <img :src="withBase(image)" class="project-img" />
    <div class="project-body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div v-if="tags.length" class="project-tags">
        <span v-for="t in tags" :key="t" class="tag">{{ t }}</span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.project-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-top: 3px solid var(--vp-c-brand-1);
  border-radius: 4px;
  overflow: hidden;
  margin: 1rem 0;
  text-decoration: none;
  color: inherit;
  background: var(--vp-c-bg);
  transition: border-color .2s, transform .2s, box-shadow .2s;
}
.project-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-3px);
  box-shadow: var(--vp-shadow-3);
}
.project-img { width: 100%; display: block; aspect-ratio: 16 / 9; object-fit: cover; }
.project-body { padding: 1.25rem; }
.project-body h3 {
  margin: 0 0 .5rem;
  font-family: var(--font-family-display);
  font-size: 1.2rem;
  border-top: none;
  padding-top: 0;
}
.project-tags { margin-top: .9rem; display: flex; flex-wrap: wrap; gap: .4rem; }
.tag {
  font-size: .75rem;
  font-weight: 500;
  padding: .2rem .6rem;
  border-radius: 4px;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
</style>