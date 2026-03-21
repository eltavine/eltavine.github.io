<script setup>
import SectionFrame from "@/components/blocks/SectionFrame.vue";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

defineProps({
  interests: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <SectionFrame
    id="interests"
    eyebrow="Interests"
    layout="stacked"
    title="What I keep coming back to."
    description="Mostly games with strong systems, pacing, or enough room to tinker for a long time."
  >
    <div class="grid gap-4 md:grid-cols-3">
      <Card
        v-for="interest in interests"
        :key="interest.name"
        class="surface-panel min-w-0 gap-0 rounded-[1.75rem] py-0"
      >
        <CardHeader class="gap-4 px-5 py-5 sm:px-6 sm:py-6">
          <div class="flex size-12 items-center justify-center rounded-full border border-border/70 bg-background">
            <component :is="interest.icon" class="size-5" />
          </div>

          <div class="min-w-0 space-y-2">
            <CardTitle class="break-words text-xl tracking-[-0.03em]">{{ interest.name }}</CardTitle>
            <CardDescription class="body-copy break-words text-sm leading-6 text-muted-foreground sm:leading-7">
              {{ interest.note }}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  </SectionFrame>
</template>
