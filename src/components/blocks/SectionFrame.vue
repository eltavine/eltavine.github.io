<script setup>
defineProps({
  description: {
    type: String,
    default: "",
  },
  eyebrow: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  layout: {
    type: String,
    default: "split",
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section
    :id="id"
    :class="
      layout === 'stacked'
        ? 'section-anchor space-y-5 sm:space-y-6'
        : 'section-anchor grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-10'
    "
  >
    <div class="space-y-3">
      <p class="section-eyebrow">{{ eyebrow }}</p>
      <h2
        :class="
          layout === 'stacked'
            ? 'headline-regular max-w-3xl font-serif text-[2rem] leading-[1.04] sm:text-5xl'
            : 'headline-regular max-w-xs font-serif text-[2rem] leading-[1.04] sm:text-5xl'
        "
      >
        {{ title }}
      </h2>

      <p
        v-if="description && layout === 'stacked'"
        class="body-copy max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
      >
        {{ description }}
      </p>
    </div>

    <div class="space-y-6">
      <p
        v-if="description && layout !== 'stacked'"
        class="body-copy max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
      >
        {{ description }}
      </p>

      <slot />
    </div>
  </section>
</template>
