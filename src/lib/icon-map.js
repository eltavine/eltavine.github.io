import {
  Binary,
  Blocks,
  CarFront,
  Download,
  ExternalLink,
  Gamepad2,
  KeyRound,
  Mail,
  Monitor,
  Package,
  Server,
  Shield,
} from "lucide-vue-next";
import IconAndroid from "~icons/simple-icons/android";
import IconC from "~icons/devicon/c";
import IconCpp from "~icons/devicon/cplusplus";
import IconGithub from "~icons/simple-icons/github";
import IconJava from "~icons/devicon/java";
import IconJavascript from "~icons/devicon/javascript";
import IconKotlin from "~icons/devicon/kotlin";
import IconLinux from "~icons/simple-icons/linux";
import IconMinecraft from "~icons/simple-icons/minecraft";
import IconNestjs from "~icons/simple-icons/nestjs";
import IconPostgresql from "~icons/simple-icons/postgresql";
import IconRust from "~icons/devicon/rust";
import IconTauri from "~icons/simple-icons/tauri";
import IconTypescript from "~icons/devicon/typescript";
import IconWindows from "~icons/simple-icons/windows";

export const contactIcons = {
  download: Download,
  email: Mail,
  external: ExternalLink,
  github: IconGithub,
  pgp: KeyRound,
};

export const interestIcons = {
  forzaHorizon4: CarFront,
  minecraft: IconMinecraft,
  wutheringWaves: Gamepad2,
};

export const stackIcons = {
  android: IconAndroid,
  asm: Binary,
  c: IconC,
  cpp: IconCpp,
  java: IconJava,
  javascript: IconJavascript,
  kotlin: IconKotlin,
  linux: IconLinux,
  nestjs: IconNestjs,
  postgresql: IconPostgresql,
  rust: IconRust,
  tauri: IconTauri,
  typescript: IconTypescript,
  windowsKernel: IconWindows,
};

export const projectIcons = {
  driver: Shield,
  installer: Package,
  javaClient: Blocks,
  nativeClient: Monitor,
  server: Server,
};
