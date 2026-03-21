<script setup>
import { computed } from "vue";
import CopyButton from "@/components/blocks/CopyButton.vue";
import PublicKeyDialog from "@/components/blocks/PublicKeyDialog.vue";
import SectionFrame from "@/components/blocks/SectionFrame.vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contactIcons } from "@/lib/icon-map";

const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
  protectedEmail: {
    type: Object,
    required: true,
  },
});

const fingerprintGroups = computed(() => props.contact.fingerprint.match(/.{1,4}/g) ?? []);

function handleEmailAction() {
  if (props.protectedEmail.isEmailRevealed.value && props.protectedEmail.mailto.value) {
    window.location.assign(props.protectedEmail.mailto.value);
    return;
  }

  props.protectedEmail.requestReveal();
}
</script>

<template>
  <SectionFrame
    id="contact"
    eyebrow="Contact"
    layout="stacked"
    title="Where to find me."
    description="Email and GitHub sit together. Verification material stays in its own card."
  >
    <div class="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <Card class="surface-panel rounded-[1.5rem] py-0 sm:rounded-[1.75rem]">
        <CardHeader class="gap-4 border-b border-border/60 px-5 py-5 sm:px-6 sm:py-6">
          <div class="flex items-center gap-3">
            <div class="flex size-11 items-center justify-center rounded-full border border-border/70 bg-background">
              <component :is="contactIcons.email" class="size-4" />
            </div>
            <div>
              <p class="section-eyebrow">Direct</p>
              <CardTitle class="mt-2 text-xl tracking-[-0.03em] sm:text-2xl">
                Email and GitHub
              </CardTitle>
            </div>
          </div>
          <CardDescription class="body-copy max-w-xl break-words text-sm leading-6 text-muted-foreground sm:leading-7">
            Email for direct contact, GitHub for public work.
          </CardDescription>
        </CardHeader>

        <CardContent class="space-y-4 px-5 py-5 sm:px-6 sm:py-6">
          <div class="grid gap-3">
            <div class="card-subtle rounded-[1.25rem] p-4 sm:rounded-[1.5rem]">
              <div class="flex items-start gap-3">
                <div class="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background">
                  <component :is="contactIcons.email" class="size-4" />
                </div>
                <div class="min-w-0 flex-1">
                  <p class="section-eyebrow">Email</p>
                  <p class="info-link mt-2 font-mono text-sm text-foreground sm:text-base">
                    {{ protectedEmail.isEmailRevealed.value ? protectedEmail.email.value : 'Hidden until reveal' }}
                  </p>
                </div>
              </div>

              <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  class="w-full rounded-full sm:w-auto"
                  :variant="protectedEmail.isEmailRevealed.value ? 'default' : 'outline'"
                  @click="handleEmailAction"
                >
                  {{ protectedEmail.isEmailRevealed.value ? 'Send mail' : protectedEmail.revealLabel.value }}
                </Button>
                <CopyButton
                  :disabled="!protectedEmail.isEmailRevealed.value"
                  :text="protectedEmail.email.value"
                  copied-label="Email copied"
                  :label="protectedEmail.isEmailRevealed.value ? 'Copy email' : 'Copy after reveal'"
                  class="w-full sm:w-auto"
                />
              </div>
            </div>

            <div class="card-subtle rounded-[1.25rem] p-4 sm:rounded-[1.5rem]">
              <div class="flex items-start gap-3">
                <div class="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background">
                  <component :is="contactIcons.github" class="size-4" />
                </div>
                <div class="min-w-0 flex-1">
                  <p class="section-eyebrow">GitHub</p>
                  <p class="info-link mt-2 font-mono text-sm text-foreground sm:text-base">
                    {{ contact.githubLabel ?? contact.githubUrl }}
                  </p>
                </div>
              </div>

              <div class="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  as="a"
                  :href="contact.githubUrl"
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  class="w-full rounded-full bg-background sm:w-auto"
                >
                  <component :is="contactIcons.external" class="size-4" />
                  Open profile
                </Button>
                <CopyButton
                  :text="contact.githubUrl"
                  copied-label="Link copied"
                  label="Copy GitHub"
                  class="w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card class="surface-panel rounded-[1.5rem] py-0 sm:rounded-[1.75rem]">
        <CardHeader class="gap-4 border-b border-border/60 px-5 py-5 sm:px-6 sm:py-6">
          <div class="flex items-center gap-3">
            <div class="flex size-11 items-center justify-center rounded-full border border-border/70 bg-background">
              <component :is="contactIcons.pgp" class="size-4" />
            </div>
            <div>
              <p class="section-eyebrow">PGP identity</p>
              <CardTitle class="mt-2 text-xl tracking-[-0.03em] sm:text-2xl">
                {{ contact.keyId }}
              </CardTitle>
            </div>
          </div>
          <CardDescription class="body-copy max-w-xl break-words text-sm leading-6 text-muted-foreground sm:leading-7">
            You can inspect the armored key here, search by email on
            <a
              :href="contact.keyserverWebUrl"
              target="_blank"
              rel="noreferrer"
              class="text-foreground underline decoration-border underline-offset-4 hover:text-muted-foreground"
            >
              keys.openpgp.org
            </a>
            ,
            or use
            <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.82em] text-foreground">
              hkps://keys.openpgp.org
            </code>
            in your OpenPGP client after revealing this email address.
          </CardDescription>
        </CardHeader>

        <CardContent class="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
          <div class="card-subtle rounded-[1.25rem] p-4 sm:rounded-[1.5rem]">
            <p class="section-eyebrow">Fingerprint</p>
            <div class="mt-3 flex flex-wrap gap-x-2 gap-y-2 font-mono text-xs tracking-[0.08em] text-foreground sm:gap-x-3 sm:text-sm sm:tracking-[0.14em]">
              <span v-for="group in fingerprintGroups" :key="group">{{ group }}</span>
            </div>
          </div>

          <div class="grid gap-3 sm:grid-cols-3">
            <div class="card-muted rounded-[1.1rem] p-4 sm:rounded-[1.25rem]">
              <p class="section-eyebrow">Algorithm</p>
              <p class="mt-2 font-mono text-sm text-foreground">{{ contact.algorithm }}</p>
            </div>
            <div class="card-muted rounded-[1.1rem] p-4 sm:rounded-[1.25rem]">
              <p class="section-eyebrow">Created</p>
              <p class="mt-2 font-mono text-sm text-foreground">{{ contact.createdAt }}</p>
            </div>
            <div class="card-muted rounded-[1.1rem] p-4 sm:rounded-[1.25rem]">
              <p class="section-eyebrow">UID</p>
              <p class="mt-2 break-all font-mono text-sm text-foreground">{{ protectedEmail.uid.value }}</p>
            </div>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CopyButton
              :text="contact.fingerprint"
              copied-label="Fingerprint copied"
              label="Copy fingerprint"
              class="w-full sm:w-auto"
            />
            <PublicKeyDialog
              :download-path="contact.publicKeyUrl"
              :key-id="contact.keyId"
              :uid="protectedEmail.uid.value"
            />
            <Button
              as="a"
              :href="contact.publicKeyUrl"
              download
              variant="outline"
              class="w-full rounded-full bg-background sm:w-auto"
            >
              <component :is="contactIcons.download" class="size-4" />
              Download .asc
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </SectionFrame>
</template>
