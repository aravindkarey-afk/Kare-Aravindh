// Reference installation photography, bundled so it is embedded in the build.
//
// Drop the original photos into this folder as `<key>.webp` (e.g. `g1.webp`,
// `s26.webp`) and they are picked up automatically. Any key without its own
// photo falls back to the closest matching image in `../photos`.

import bedroomWindow from "../photos/bedroom-window.jpg";
import birdNet from "../photos/bird-net.jpg";
import cableDetail from "../photos/cable-detail.jpg";
import familyBalcony from "../photos/family-balcony.jpg";
import heroBalcony from "../photos/hero-balcony.jpg";
import heroReference from "../photos/hero-reference.jpg";
import safetyNet from "../photos/safety-net.jpg";
import serviceDuct from "../photos/service-duct.jpg";
import staircase from "../photos/staircase.jpg";

const FALLBACK = {
  // Gallery
  g1: heroBalcony,
  g2: bedroomWindow,
  g3: heroReference,
  g4: familyBalcony,
  g11: cableDetail,
  g12: heroBalcony,
  g13: familyBalcony,
  g14: cableDetail,
  g19: heroReference,
  // Services
  s1: safetyNet,
  s3: safetyNet,
  s4: safetyNet,
  s5: familyBalcony,
  s6: safetyNet,
  s7: safetyNet,
  s8: serviceDuct,
  s9: safetyNet,
  s10: safetyNet,
  s11: heroReference,
  s12: staircase,
  s13: safetyNet,
  s14: safetyNet,
  s15: birdNet,
  s16: birdNet,
  s19: safetyNet,
  s20: safetyNet,
  s23: safetyNet,
  s24: safetyNet,
  s25: safetyNet,
  s26: heroBalcony,
  s27: bedroomWindow,
  s28: familyBalcony,
  s29: familyBalcony,
  s30: birdNet,
  s31: cableDetail,
  s32: cableDetail,
  s33: cableDetail,
} as const;

type ImageKey = keyof typeof FALLBACK;

const originals = import.meta.glob<string>("./*.webp", {
  eager: true,
  import: "default",
});

export const IMG = Object.fromEntries(
  Object.entries(FALLBACK).map(([key, fallback]) => [key, originals[`./${key}.webp`] ?? fallback]),
) as Record<ImageKey, string>;

export const heroImages = [IMG.s26, IMG.s27, IMG.s1, IMG.s11, IMG.s5, IMG.s16];
