import type { Config } from "tailwindcss"

import { shadcnPreset } from "./lib/shadcn-preset"

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [shadcnPreset],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
} satisfies Config

export default config
