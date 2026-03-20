<script setup>
import HeroSection from "@/components/sections/HeroSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import InterestsSection from "@/components/sections/InterestsSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import SiteFooter from "@/components/sections/SiteFooter.vue";
import SiteHeader from "@/components/sections/SiteHeader.vue";
import StackSection from "@/components/sections/StackSection.vue";
import { contact, interests, navigation, profile, projects, stackGroups } from "@/content/site";
import { buildProtectedContact } from "@/lib/protected-contact";

const resolvedContact = buildProtectedContact(contact);
</script>

<template>
  <div class="site-shell">
    <SiteHeader :navigation="navigation" :name="profile.name" :email="resolvedContact.email" />

    <main class="mx-auto flex max-w-7xl flex-col gap-12 px-5 pb-14 pt-5 sm:px-8 sm:pb-16 sm:pt-6 lg:gap-20 lg:px-12">
      <HeroSection :profile="profile" :contact="resolvedContact" />

      <div class="soft-rule h-px w-full" />

      <ContactSection :contact="resolvedContact" />

      <div class="soft-rule h-px w-full" />

      <InterestsSection :interests="interests" />

      <div class="soft-rule h-px w-full" />

      <StackSection :stack-groups="stackGroups" />

      <div class="soft-rule h-px w-full" />

      <ProjectsSection :projects="projects" />
    </main>

    <SiteFooter :profile="profile" :contact="resolvedContact" />
  </div>
</template>
