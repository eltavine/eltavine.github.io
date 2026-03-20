<script setup>
import ProjectCard from "@/components/blocks/ProjectCard.vue";
import SectionFrame from "@/components/blocks/SectionFrame.vue";

defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <SectionFrame
    id="projects"
    eyebrow="Projects"
    layout="stacked"
    title="Work I can show."
    description="One Android security tool and one deliberately modular multi-surface system."
  >
    <div class="grid gap-4">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </SectionFrame>
</template>
