<script setup>
import { onBeforeUnmount, ref } from "vue";
import { Check, Copy } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  copiedLabel: {
    type: String,
    default: "Copied",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "outline",
  },
});

const copied = ref(false);
let resetTimer;

async function writeToClipboard(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

async function handleCopy() {
  if (props.disabled) {
    return;
  }

  try {
    await writeToClipboard(props.text);
    copied.value = true;
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      copied.value = false;
    }, 1800);
  } catch {
    copied.value = false;
  }
}

onBeforeUnmount(() => {
  window.clearTimeout(resetTimer);
});
</script>

<template>
  <Button
    v-bind="$attrs"
    :disabled="disabled"
    :variant="variant"
    size="sm"
    class="rounded-full"
    @click="handleCopy"
  >
    <component :is="copied ? Check : Copy" class="size-4" />
    {{ copied ? copiedLabel : label }}
  </Button>
</template>
