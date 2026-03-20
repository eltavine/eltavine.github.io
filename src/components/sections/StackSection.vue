<script setup>
import IconBadge from "@/components/blocks/IconBadge.vue";
import SectionFrame from "@/components/blocks/SectionFrame.vue";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

defineProps({
  stackGroups: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <SectionFrame
    id="stack"
    eyebrow="Stack"
    layout="stacked"
    title="Stack, by layer."
    description="I do not use one language for everything. The stack changes with the boundary, runtime, and failure mode."
  >
    <div class="grid gap-4 md:grid-cols-2">
      <Card
        v-for="group in stackGroups"
        :key="group.title"
        class="surface-panel min-w-0 gap-0 rounded-[1.75rem] py-0"
      >
        <CardHeader class="gap-3 px-6 py-6">
          <p class="section-eyebrow">{{ group.eyebrow }}</p>
          <CardTitle class="break-words text-2xl tracking-[-0.03em]">{{ group.title }}</CardTitle>
          <CardDescription class="body-copy break-words text-sm leading-7 text-muted-foreground">
            {{ group.description }}
          </CardDescription>
        </CardHeader>

        <CardContent class="px-6 pb-6">
          <div class="flex flex-wrap gap-2">
            <IconBadge
              v-for="item in group.items"
              :key="`${group.title}-${item.label}`"
              :item="item"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  </SectionFrame>
</template>
