<script setup>
import HeroSection from "@/components/sections/HeroSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import InterestsSection from "@/components/sections/InterestsSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import SiteFooter from "@/components/sections/SiteFooter.vue";
import SiteHeader from "@/components/sections/SiteHeader.vue";
import StackSection from "@/components/sections/StackSection.vue";
import { contact, interests, navigation, profile, projects, stackGroups } from "@/content/site";
import { useThemeMode } from "@/composables/useThemeMode";
import { buildProtectedContact } from "@/lib/protected-contact";

const resolvedContact = buildProtectedContact(contact);
const { isDark, toggleTheme } = useThemeMode();
</script>

<template>
  <div class="site-shell">
    <SiteHeader
      :navigation="navigation"
      :name="profile.name"
      :email="resolvedContact.email"
      :avatar-url="profile.avatarUrl"
      :avatar-srcset="profile.avatarSrcset"
      :is-dark="isDark"
      @toggle-theme="toggleTheme"
    />

    <main class="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-12 pt-4 sm:px-8 sm:pb-16 sm:pt-6 lg:gap-16 lg:px-12">
      <HeroSection :profile="profile" :contact="resolvedContact" />

      <div class="soft-rule h-px w-full" />

      <ProjectsSection :projects="projects" />

      <div class="soft-rule h-px w-full" />

      <ContactSection :contact="resolvedContact" />

      <div class="soft-rule h-px w-full" />

      <StackSection :stack-groups="stackGroups" />

      <div class="soft-rule h-px w-full" />

      <InterestsSection :interests="interests" />
    </main>

    <SiteFooter :profile="profile" :contact="resolvedContact" />
  </div>
</template>
