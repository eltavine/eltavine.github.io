<script setup>
import { Menu, MoonStar, SunMedium, X } from "lucide-vue-next";
import { ref } from "vue";
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
  protectedEmail: {
    type: Object,
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

const isMenuOpen = ref(false);

function closeMenu() {
  isMenuOpen.value = false;
}

function handleContactAction(protectedEmail) {
  if (protectedEmail.isEmailRevealed.value && protectedEmail.mailto.value) {
    window.location.assign(protectedEmail.mailto.value);
    return;
  }

  protectedEmail.requestReveal();
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border/60 bg-background/86 backdrop-blur-xl">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4 lg:px-10">
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

      <div class="flex items-center gap-2 sm:gap-3">
        <nav class="hidden items-center gap-2 md:flex lg:gap-3">
          <a
            v-for="item in navigation"
            :key="item.href"
            :href="item.href"
            class="nav-pill"
          >
            {{ item.label }}
          </a>
        </nav>

        <Button
          size="sm"
          variant="outline"
          class="size-9 rounded-full bg-background p-0 md:hidden"
          :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          :title="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="toggleMenu"
        >
          <component :is="isMenuOpen ? X : Menu" class="size-4" />
        </Button>

        <Button
          size="sm"
          variant="outline"
          class="size-9 rounded-full bg-background p-0"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="$emit('toggle-theme')"
        >
          <component :is="isDark ? SunMedium : MoonStar" class="size-4" />
        </Button>

        <Button
          size="sm"
          class="rounded-full px-4"
          :variant="protectedEmail.isEmailRevealed.value ? 'default' : 'outline'"
          @click="handleContactAction(protectedEmail)"
        >
          {{ protectedEmail.isEmailRevealed.value ? 'Send mail' : protectedEmail.revealLabel.value }}
        </Button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="border-t border-border/60 px-4 py-3 md:hidden">
      <nav class="grid gap-2">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="nav-pill justify-start px-4 py-3"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
