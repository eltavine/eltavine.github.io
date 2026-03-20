<script setup>
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

defineProps({
  contact: {
    type: Object,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section
    id="top"
    class="section-anchor grid gap-7 sm:gap-8 lg:grid-cols-[minmax(0,1.16fr)_minmax(340px,0.84fr)] lg:items-end"
  >
    <div class="space-y-6">
      <div class="space-y-4">
        <p class="section-eyebrow">{{ profile.role }}</p>
        <h1 class="headline-tight max-w-[60rem] font-serif text-4xl leading-[0.98] sm:text-7xl lg:text-8xl">
          <span
            v-for="line in profile.headlineLines"
            :key="line"
            class="block"
          >
            {{ line }}
          </span>
        </h1>
      </div>

      <p class="body-copy max-w-2xl text-lg leading-8 text-foreground/88 sm:text-2xl">
        {{ profile.lead }}
      </p>

      <p class="body-copy max-w-[42rem] text-[0.95rem] leading-8 text-muted-foreground sm:text-lg">
        {{ profile.summary }}
      </p>

      <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button as="a" href="#projects" class="w-full rounded-full px-6 sm:w-auto">
          View projects
        </Button>
        <Button
          as="a"
          href="#contact"
          variant="outline"
          class="w-full rounded-full bg-background px-6 sm:w-auto"
        >
          Contact
        </Button>
      </div>

      <div class="flex flex-wrap gap-2">
        <Badge
          v-for="principle in profile.principles"
          :key="principle"
          variant="outline"
          class="rounded-full border-border/70 bg-background/75 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground"
        >
          {{ principle }}
        </Badge>
      </div>
    </div>

    <div class="surface-panel rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-8">
      <div class="mb-6 flex items-center gap-4">
        <img
          :src="profile.avatarUrl"
          :srcset="profile.avatarSrcset || undefined"
          sizes="(min-width: 640px) 80px, 64px"
          alt="Eltavine avatar"
          width="160"
          height="160"
          decoding="async"
          fetchpriority="high"
          class="size-16 shrink-0 rounded-[1.25rem] border border-border/70 object-cover sm:size-20"
        />
        <div class="min-w-0 space-y-1">
          <p class="section-eyebrow">Eltavine</p>
          <p class="headline-regular break-words font-serif text-2xl sm:text-3xl">
            Current focus
          </p>
          <p class="break-words text-sm leading-7 text-muted-foreground">
            Android security tooling, modular clients, and backend systems.
          </p>
        </div>
      </div>

      <div class="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
        <div v-for="metric in profile.metrics" :key="metric.label" class="space-y-2">
          <p class="section-eyebrow">{{ metric.label }}</p>
          <p class="headline-regular font-serif text-3xl sm:text-4xl">
            {{ metric.value }}
          </p>
        </div>
      </div>

      <div class="soft-rule my-6 h-px w-full" />

      <div class="space-y-4">
        <div class="flex items-start justify-between gap-3">
          <span class="section-eyebrow">Email</span>
          <a
            :href="contact.mailto"
            class="break-all text-right font-mono text-sm tracking-[0.06em] text-foreground hover:text-muted-foreground"
          >
            {{ contact.email }}
          </a>
        </div>

        <div class="flex items-start justify-between gap-3">
          <span class="section-eyebrow">GitHub</span>
          <a
            :href="contact.githubUrl"
            target="_blank"
            rel="noreferrer"
            class="break-all text-right font-mono text-sm tracking-[0.05em] text-foreground hover:text-muted-foreground"
          >
            {{ contact.githubLabel ?? contact.githubUrl }}
          </a>
        </div>

        <p class="break-words text-sm leading-7 text-muted-foreground">
          I prefer systems with explicit ownership, low cross-talk between modules, and enough structure to survive long-lived iteration.
        </p>
      </div>
    </div>
  </section>
</template>
