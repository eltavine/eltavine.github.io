<script setup>
const currentYear = new Date().getFullYear();

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
  <footer class="border-t border-border/60 bg-background/80">
    <div class="mx-auto grid max-w-7xl gap-6 px-4 py-7 sm:px-6 sm:py-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:px-10">
      <div class="space-y-4">
        <p class="section-eyebrow">Contact</p>
        <div class="space-y-2">
          <p class="headline-regular font-serif text-3xl">{{ profile.name }}</p>
          <p class="text-sm uppercase tracking-[0.18em] text-muted-foreground">
            {{ profile.role }}
          </p>
        </div>
        <p class="body-copy max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          {{ profile.summary }}
        </p>
        <div class="flex flex-wrap gap-2">
          <a href="#projects" class="nav-pill">Projects</a>
          <a href="#contact" class="nav-pill">Contact</a>
          <a href="#stack" class="nav-pill">Stack</a>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:justify-items-end">
        <div class="card-subtle rounded-[1.25rem] p-4 sm:p-5 lg:w-full lg:max-w-sm">
          <p class="section-eyebrow">Reach out</p>
          <div class="mt-3 space-y-2 text-sm text-muted-foreground">
            <p>
              <a :href="contact.mailto" class="info-link hover:text-foreground">
                {{ contact.email }}
              </a>
            </p>
            <p class="font-mono text-xs tracking-[0.05em] sm:tracking-[0.08em]">
              <a :href="contact.githubUrl" class="info-link hover:text-foreground">
                {{ contact.githubLabel ?? contact.githubUrl }}
              </a>
            </p>
          </div>
        </div>

        <div class="card-subtle rounded-[1.25rem] p-4 sm:p-5 lg:w-full lg:max-w-sm">
          <p class="section-eyebrow">Signature</p>
          <div class="mt-3 space-y-2 text-sm text-muted-foreground">
            <p>Built for clear boundaries, modular systems, and long-lived iteration.</p>
            <p class="font-mono text-xs tracking-[0.08em] text-muted-foreground/90">
              {{ currentYear }} / {{ profile.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
