import { computed, ref } from "vue";

const isEmailPrimed = ref(false);
const isEmailRevealed = ref(false);

export function useProtectedEmail(contact) {
  const email = computed(() => (isEmailRevealed.value ? contact.buildEmailAddress() : ""));
  const mailto = computed(() => (email.value ? `mailto:${email.value}` : ""));
  const uid = computed(() => (email.value ? `${contact.uidName} <${email.value}>` : contact.hiddenUid));
  const revealLabel = computed(() => {
    if (isEmailRevealed.value) {
      return "Email revealed";
    }

    return isEmailPrimed.value ? "Reveal email" : "Press to reveal";
  });

  function requestReveal() {
    if (!isEmailPrimed.value) {
      isEmailPrimed.value = true;
      return;
    }

    isEmailRevealed.value = true;
  }

  return {
    email,
    isEmailPrimed,
    isEmailRevealed,
    mailto,
    requestReveal,
    revealLabel,
    uid,
  };
}
