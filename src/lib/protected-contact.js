function buildEmailAddress(parts) {
  return `${parts.user}@${parts.domain}.${parts.tld}`;
}

export function buildProtectedContact(contact) {
  return {
    ...contact,
    buildEmailAddress: () => buildEmailAddress(contact.emailParts),
    hiddenUid: `${contact.uidName} <hidden until reveal>`,
  };
}
