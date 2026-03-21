<script setup>
import { computed, ref } from "vue";
import CopyButton from "@/components/blocks/CopyButton.vue";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const props = defineProps({
  downloadPath: {
    type: String,
    required: true,
  },
  keyId: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);
const isLoading = ref(false);
const publicKey = ref("");
const loadError = ref("");

const displayKey = computed(() => {
  if (publicKey.value) {
    return publicKey.value;
  }

  if (loadError.value) {
    return loadError.value;
  }

  return "Loading public key...";
});

async function loadPublicKey() {
  if (publicKey.value || loadError.value || isLoading.value) {
    return;
  }

  isLoading.value = true;

  try {
    const response = await fetch(props.downloadPath);

    if (!response.ok) {
      throw new Error("Public key request failed.");
    }

    publicKey.value = await response.text();
  } catch {
    loadError.value = "The public key could not be loaded from the current build output.";
  } finally {
    isLoading.value = false;
  }
}

function handleOpenChange(nextOpen) {
  isOpen.value = nextOpen;

  if (nextOpen) {
    void loadPublicKey();
  }
}
</script>

<template>
  <Dialog :open="isOpen" @update:open="handleOpenChange">
    <DialogTrigger as-child>
      <Button variant="outline" class="w-full rounded-full bg-background sm:w-auto">
        View public key
      </Button>
    </DialogTrigger>

    <DialogContent class="max-w-3xl border-border/80 bg-card p-0 sm:rounded-[2rem]">
      <div class="space-y-5 p-5 sm:space-y-6 sm:p-8">
        <DialogHeader class="space-y-3">
          <p class="section-eyebrow">PGP block</p>
          <DialogTitle class="font-serif text-[2rem] tracking-[-0.04em] sm:text-4xl">
            Public key
          </DialogTitle>
          <DialogDescription class="text-sm leading-6 text-muted-foreground sm:leading-7">
            {{ uid }} / {{ keyId }}
          </DialogDescription>
        </DialogHeader>

        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <CopyButton
            :disabled="!publicKey"
            :text="publicKey"
            copied-label="Key copied"
            label="Copy key"
            class="w-full sm:w-auto"
          />
          <Button
            as="a"
            :href="downloadPath"
            download
            variant="outline"
            class="w-full rounded-full sm:w-auto"
          >
            Download .asc
          </Button>
        </div>

        <pre
          class="max-h-[58vh] overflow-auto rounded-[1.25rem] border border-border/70 bg-muted/30 p-4 font-mono text-[0.72rem] leading-5 whitespace-pre-wrap break-all text-foreground sm:rounded-[1.5rem] sm:text-xs sm:leading-6"
        ><code>{{ displayKey }}</code></pre>
      </div>
    </DialogContent>
  </Dialog>
</template>
