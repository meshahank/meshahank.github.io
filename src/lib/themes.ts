// Available theme options
export const THEMES = {
  default: 'Default Purple',
  blue: 'Ocean Blue',
  green: 'Forest Green',
  orange: 'Sunset Orange',
  red: 'Crimson Red',
  dark: 'Dark Mode',
  minimal: 'Minimal Mono',
} as const;

export type ThemeName = keyof typeof THEMES;