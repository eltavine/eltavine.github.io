const encryptedEmailBytes = Uint8Array.from([68, 200, 28, 159, 98, 179, 18, 46, 207, 91, 172, 84, 92, 70, 192]);

const keyFragments = [
  Uint8Array.from([41, 173, 92, 250, 14]),
  Uint8Array.from([199, 115, 88, 166]),
  Uint8Array.from([53, 201, 122, 63]),
];

function mergeKeyFragments() {
  return Uint8Array.from(keyFragments.flatMap((fragment) => Array.from(fragment)));
}

function decryptEmailAddress() {
  const key = mergeKeyFragments();
  const plainBytes = encryptedEmailBytes.map((byte, index) => byte ^ key[index % key.length]);
  return new TextDecoder().decode(plainBytes);
}

export function buildProtectedContact(contact) {
  const email = decryptEmailAddress();

  return {
    ...contact,
    email,
    mailto: `mailto:${email}`,
    uid: `${contact.uidName} <${email}>`,
  };
}
