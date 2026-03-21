<script setup>
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

defineProps({
  contact: {
    type: Object,
    required: true,
  },
  protectedEmail: {
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
    class="section-anchor grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] lg:items-start"
  >
    <div class="space-y-5 sm:space-y-6">
      <div class="space-y-3 sm:space-y-4">
        <p class="section-eyebrow">{{ profile.role }}</p>
        <h1 class="headline-tight max-w-[56rem] font-serif text-[2.7rem] leading-[0.96] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
          <span
            v-for="line in profile.headlineLines"
            :key="line"
            class="block"
          >
            {{ line }}
          </span>
        </h1>
      </div>

      <p class="body-copy max-w-2xl text-base leading-7 text-foreground/88 sm:text-xl sm:leading-8 lg:text-2xl">
        {{ profile.lead }}
      </p>

      <p class="body-copy max-w-[42rem] text-[0.95rem] leading-7 text-muted-foreground sm:text-lg sm:leading-8">
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

      <div class="flex flex-wrap gap-2 gap-y-2.5">
        <Badge
          v-for="principle in profile.principles"
          :key="principle"
          variant="outline"
          class="rounded-full border-border/70 bg-background/80 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground"
        >
          {{ principle }}
        </Badge>
      </div>
    </div>

    <div class="surface-panel rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-7 lg:p-8">
      <div class="mb-5 flex items-center gap-4 sm:mb-6">
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
        <div class="min-w-0 space-y-1.5">
          <p class="section-eyebrow">Eltavine</p>
          <p class="headline-regular break-words font-serif text-2xl sm:text-3xl">
            Current focus
          </p>
          <p class="break-words text-sm leading-6 text-muted-foreground sm:leading-7">
            Android security tooling, modular clients, and backend systems.
          </p>
        </div>
      </div>

      <div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
        <div v-for="metric in profile.metrics" :key="metric.label" class="space-y-2">
          <p class="section-eyebrow">{{ metric.label }}</p>
          <p class="headline-regular font-serif text-2xl sm:text-3xl lg:text-4xl">
            {{ metric.value }}
          </p>
        </div>
      </div>

      <div class="soft-rule my-5 h-px w-full sm:my-6" />

      <div class="space-y-3.5 sm:space-y-4">
        <div class="flex items-start justify-between gap-3">
          <span class="section-eyebrow">Email</span>
          <button
            type="button"
            class="info-link cursor-pointer text-right font-mono text-sm tracking-[0.04em] text-foreground transition-colors hover:text-muted-foreground"
            @click="protectedEmail.requestReveal()"
          >
            {{ protectedEmail.isEmailRevealed.value ? protectedEmail.email.value : protectedEmail.revealLabel.value }}
          </button>
        </div>

        <div class="flex items-start justify-between gap-3">
          <span class="section-eyebrow">GitHub</span>
          <a
            :href="contact.githubUrl"
            target="_blank"
            rel="noreferrer"
            class="info-link text-right font-mono text-sm tracking-[0.04em] text-foreground hover:text-muted-foreground"
          >
            {{ contact.githubLabel ?? contact.githubUrl }}
          </a>
        </div>

        <p class="text-sm leading-6 text-muted-foreground sm:leading-7">
          I prefer systems with explicit ownership, low cross-talk between modules, and enough structure to survive long-lived iteration.
        </p>
      </div>
    </div>
  </section>
</template>
