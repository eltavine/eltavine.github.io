<script setup>
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const props = defineProps({
  class: {
    type: [Boolean, null, String, Object, Array],
    required: false,
    skipCheck: true,
  },
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Badge
    variant="outline"
    :class="
      cn(
        'rounded-full border-border/70 bg-background/80 px-3 py-1.5 font-mono text-[0.72rem] font-medium tracking-[0.05em] text-foreground/88',
        props.class,
      )
    "
  >
    <component :is="item.icon" class="size-3.5" />
    <span>{{ item.label }}</span>
  </Badge>
</template>
