<script setup>
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
    <div class="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:px-6 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
      <div>
        <p class="section-eyebrow">Contact</p>
        <p class="headline-regular mt-2 font-serif text-3xl">{{ profile.name }}</p>
      </div>

      <div class="space-y-1 text-sm text-muted-foreground lg:text-right">
        <p>
          <a :href="contact.mailto" class="hover:text-foreground">
            {{ contact.email }}
          </a>
        </p>
        <p class="break-all font-mono text-xs tracking-[0.05em] sm:tracking-[0.08em]">
          <a :href="contact.githubUrl" class="hover:text-foreground">
            {{ contact.githubLabel ?? contact.githubUrl }}
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
