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
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0;
  text-decoration: none;
  color: inherit;
  transition: border-color .2s, transform .2s;
}
.project-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}
.project-img { width: 100%; display: block; }
.project-body { padding: 1rem; }
.project-body h3 { margin: 0 0 .5rem; }
.project-tags { margin-top: .75rem; display: flex; flex-wrap: wrap; gap: .4rem; }
.tag {
  font-size: .75rem;
  padding: .15rem .5rem;
  border-radius: 999px;
  background: var(--vp-c-default-soft);
}
</style>