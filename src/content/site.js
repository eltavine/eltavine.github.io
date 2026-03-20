import { interestIcons, projectIcons, stackIcons } from "@/lib/icon-map";

const stackRegistry = {
  android: { label: "Android", icon: stackIcons.android },
  asm: { label: "ASM", icon: stackIcons.asm },
  c: { label: "C", icon: stackIcons.c },
  cpp: { label: "C++", icon: stackIcons.cpp },
  java: { label: "Java", icon: stackIcons.java },
  javascript: { label: "JavaScript", icon: stackIcons.javascript },
  kotlin: { label: "Kotlin", icon: stackIcons.kotlin },
  linux: { label: "Linux", icon: stackIcons.linux },
  nestjs: { label: "NestJS", icon: stackIcons.nestjs },
  postgresql: { label: "PostgreSQL", icon: stackIcons.postgresql },
  rust: { label: "Rust", icon: stackIcons.rust },
  tauri: { label: "Tauri", icon: stackIcons.tauri },
  typescript: { label: "TypeScript", icon: stackIcons.typescript },
  windowsKernel: { label: "Windows Kernel", icon: stackIcons.windowsKernel },
};

const pickStack = (...keys) =>
  keys.map((key) => ({
    key,
    ...stackRegistry[key],
  }));

export const navigation = [
  { href: "#contact", label: "Contact" },
  { href: "#interests", label: "Interests" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
];

export const profile = {
  avatarUrl: "/eltavine-avatar-160.webp",
  avatarSrcset: "/eltavine-avatar-80.webp 80w, /eltavine-avatar-160.webp 160w",
  headlineLines: ["Android,", "Windows,", "native."],
  lead: "I build across Android, low-level runtime surfaces, and service backends.",
  metrics: [
    { label: "Projects", value: "02" },
    { label: "Focus areas", value: "03" },
    { label: "Contact", value: "Mail" },
  ],
  name: "Eltavine",
  principles: ["Modular systems", "Native-first tooling", "Clear boundaries"],
  role: "Software engineer",
  summary:
    "This site is a short overview of what I work on: Android security tooling, modular clients, service backends, and the lower-level runtime details that sit underneath them. I care most about systems that stay legible as they grow.",
};

export const contact = {
  algorithm: "ed25519",
  createdAt: "2026-03-20",
  fingerprint: "46CC2913C0B6460FF498DE6009E517BD5F0084C8",
  githubLabel: "github.com/eltavine",
  githubUrl: "https://github.com/eltavine/",
  keyserverWebUrl: "https://keys.openpgp.org/",
  keyId: "09E517BD5F0084C8",
  publicKeyUrl: "/eltavine-public-key.asc",
  uidName: "Eltavine",
};

export const interests = [
  {
    icon: interestIcons.wutheringWaves,
    name: "Wuthering Waves",
    note: "Combat feel, encounter rhythm, and character kit design.",
  },
  {
    icon: interestIcons.minecraft,
    name: "Minecraft",
    note: "Sandbox building, automation loops, and long-form world shaping.",
  },
  {
    icon: interestIcons.forzaHorizon4,
    name: "Forza Horizon 4",
    note: "Open-world driving, tuning, and clean audiovisual pacing.",
  },
];

export const stackGroups = [
  {
    description: "Lower-level work where control, layout, and runtime behavior matter most.",
    eyebrow: "Core",
    items: pickStack("cpp", "c", "rust"),
    title: "Core Languages",
  },
  {
    description: "Languages used to ship user-facing apps, services, and flexible product surfaces.",
    eyebrow: "Application",
    items: pickStack("kotlin", "typescript", "javascript", "java"),
    title: "Application Languages",
  },
  {
    description: "Operating systems and platform-specific areas that shape how software lands in the real world.",
    eyebrow: "Platform",
    items: pickStack("linux", "windowsKernel", "android"),
    title: "Systems and Platform",
  },
  {
    description: "Persistent state and service storage when the product boundary reaches the data layer.",
    eyebrow: "Data",
    items: pickStack("postgresql"),
    title: "Data Layer",
  },
];

export const projects = [
  {
    emphasis:
      "A device-side Android security inspection app built around modular detectors instead of one monolithic scan flow.",
    id: "android-project",
    notes: [
      "Focused on local evidence collection for root-related tampering, runtime hooking, mount manipulation, attestation trust, and virtualized execution environments.",
      "The app layer is Kotlin-first with Jetpack Compose, feature-scoped packages, view models, repositories, coroutines, and DataStore-backed settings.",
      "Lower-level probes are implemented through the Android NDK with C++, CMake, and arm64 assembly paths where syscall timing, trap handling, or mount visibility matters.",
    ],
    section: "Android / Security",
    stack: pickStack("android", "kotlin", "cpp", "asm"),
    status: "Native Android security tooling",
    summary:
      "Duck Detector is a native Android app for on-device security inspection. It surfaces detector cards for bootloader state, LSPosed / Zygisk traces, native root evidence, virtualization, TEE attestation trust, and other integrity signals while keeping most analysis local to the device.",
    title: "Duck Detector",
  },
  {
    emphasis:
      "Extreme modularity by design: separate surfaces, separate responsibilities, clear contracts.",
    featured: true,
    id: "nephrite-client",
    moduleSummary:
      "The system is deliberately decomposed so each delivery surface can evolve at its own pace while still participating in a coherent product.",
    modules: [
      {
        description:
          "TypeScript + NestJS handle orchestration, shared contracts, and service-side boundaries for the rest of the stack.",
        icon: projectIcons.server,
        id: "service-core",
        name: "Service Core",
        stack: pickStack("typescript", "nestjs", "postgresql"),
      },
      {
        description:
          "A C++ client with ImGui as the native UI layer, optimized for a direct desktop surface.",
        icon: projectIcons.nativeClient,
        id: "native-client",
        name: "Native Client",
        stack: pickStack("cpp"),
      },
      {
        description:
          "A separate Java client surface that can move independently from the native client.",
        icon: projectIcons.javaClient,
        id: "java-client",
        name: "Java Client",
        stack: pickStack("java"),
      },
      {
        description:
          "A Tauri-based installer path for packaging and delivery without merging installer concerns into the clients.",
        icon: projectIcons.installer,
        id: "installer",
        name: "Installer",
        stack: pickStack("tauri", "typescript"),
      },
      {
        description:
          "A dedicated C driver that isolates lower-level system work instead of leaking kernel concerns upward.",
        icon: projectIcons.driver,
        id: "driver",
        name: "Driver",
        stack: pickStack("c", "windowsKernel"),
      },
    ],
    notes: [
      "Server-side orchestration runs in TypeScript + NestJS, keeping contracts and service boundaries explicit.",
      "Client delivery is intentionally plural: C++ + ImGui for the native surface, Java for an additional client surface, and Tauri for installer distribution.",
      "Low-level capability stays isolated in a dedicated C driver instead of spilling system concerns into higher layers.",
    ],
    section: "Client / Service / Driver",
    stack: pickStack("typescript", "nestjs", "cpp", "java", "tauri", "c", "windowsKernel"),
    status: "Modular multi-surface system",
    summary:
      "An aggregated multi-surface system split across backend, native UI, Java client, installer, and driver layers. Each layer owns a bounded role and can move independently without forcing the entire product to mutate with it.",
    title: "Nephrite Client",
  },
];
