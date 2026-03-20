<script setup>
import { MoonStar, SunMedium } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

defineProps({
  avatarSrcset: {
    type: String,
    default: "",
  },
  avatarUrl: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isDark: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  navigation: {
    type: Array,
    required: true,
  },
});

defineEmits(["toggle-theme"]);
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3.5 sm:px-6 sm:py-4 lg:px-10">
      <a href="#top" class="flex min-w-0 items-center gap-3">
        <img
          :src="avatarUrl"
          :srcset="avatarSrcset || undefined"
          sizes="40px"
          alt="Eltavine avatar"
          width="80"
          height="80"
          decoding="async"
          class="size-10 shrink-0 rounded-full border border-border/70 object-cover"
        />
        <div class="min-w-0">
          <p class="section-eyebrow">Eltavine</p>
          <p class="truncate text-sm font-semibold uppercase tracking-[0.24em]">
            {{ name }}
          </p>
        </div>
      </a>

      <div class="flex items-center gap-3">
        <nav class="hidden items-center gap-5 md:flex">
          <a
            v-for="item in navigation"
            :key="item.href"
            :href="item.href"
            class="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground hover:text-foreground"
          >
            {{ item.label }}
          </a>
        </nav>

        <Button
          size="sm"
          variant="outline"
          class="size-8 rounded-full bg-background p-0"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="$emit('toggle-theme')"
        >
          <component :is="isDark ? SunMedium : MoonStar" class="size-4" />
        </Button>

        <Button
          as="a"
          :href="`mailto:${email}`"
          size="sm"
          variant="outline"
          class="rounded-full bg-background px-3"
        >
          Mail
        </Button>
      </div>
    </div>
  </header>
</template>
