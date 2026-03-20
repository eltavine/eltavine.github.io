<script setup>
import IconBadge from "@/components/blocks/IconBadge.vue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Card
    :class="
      cn(
        'surface-panel min-w-0 gap-0 overflow-hidden rounded-[1.5rem] py-0 sm:rounded-[2rem]',
      )
    "
  >
    <CardHeader class="gap-5 border-b border-border/60 px-5 py-5 sm:px-8 sm:py-8">
      <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div class="min-w-0 space-y-4">
          <div class="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              class="rounded-full border-border/70 bg-background/75 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground"
            >
              {{ project.section }}
            </Badge>
            <Badge
              variant="outline"
              class="rounded-full border-border/70 bg-background/75 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground"
            >
              {{ project.status }}
            </Badge>
          </div>

          <div class="space-y-3">
            <CardTitle class="headline-regular break-words text-balance font-serif text-3xl sm:text-5xl">
              {{ project.title }}
            </CardTitle>
            <CardDescription class="body-copy max-w-3xl break-words text-base leading-8 text-muted-foreground">
              {{ project.summary }}
            </CardDescription>
          </div>
        </div>

        <div class="max-w-xs min-w-0 rounded-[1.25rem] border border-border/70 bg-muted/35 p-4 sm:rounded-[1.5rem]">
          <p class="section-eyebrow">Core idea</p>
          <p class="mt-3 break-words text-sm leading-7 text-muted-foreground">
            {{ project.emphasis }}
          </p>
        </div>
      </div>
    </CardHeader>

    <CardContent class="space-y-6 px-5 py-5 sm:space-y-8 sm:px-8 sm:py-8">
      <div class="flex flex-wrap gap-2">
        <IconBadge
          v-for="item in project.stack"
          :key="`${project.id}-${item.label}`"
          :item="item"
        />
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <div
          v-for="note in project.notes"
          :key="note"
          class="rounded-[1.25rem] border border-border/70 bg-background/70 p-4 break-words text-sm leading-7 text-muted-foreground sm:rounded-[1.5rem]"
        >
          {{ note }}
        </div>
      </div>

      <div v-if="project.modules" class="space-y-4">
        <div class="space-y-2">
          <p class="section-eyebrow">Module map</p>
          <p class="max-w-3xl break-words text-sm leading-7 text-muted-foreground">
            {{ project.moduleSummary }}
          </p>
        </div>

        <Accordion type="single" collapsible class="space-y-3">
          <AccordionItem
            v-for="module in project.modules"
            :key="module.id"
            :value="module.id"
            class="rounded-[1.25rem] border border-border/70 bg-background/70 px-4 sm:rounded-[1.5rem]"
          >
            <AccordionTrigger class="py-5 hover:no-underline">
              <div class="flex min-w-0 items-start gap-4">
                <div
                  class="flex size-10 items-center justify-center rounded-full border border-border/70 bg-background"
                >
                  <component :is="module.icon" class="size-4" />
                </div>

                <div class="min-w-0 space-y-1">
                  <p class="break-words font-semibold text-foreground">{{ module.name }}</p>
                  <p class="break-words text-sm leading-7 text-muted-foreground">
                    {{ module.description }}
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent class="pb-5">
              <div class="flex flex-wrap gap-2 pl-14">
                <IconBadge
                  v-for="item in module.stack"
                  :key="`${module.id}-${item.label}`"
                  :item="item"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </CardContent>
  </Card>
</template>
