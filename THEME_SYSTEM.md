# Theme System Documentation

## Overview

The portfolio website now supports multiple theme configurations through a flexible theme system built with Tailwind CSS. Users can switch between different color schemes and themes in real-time.

## Available Themes

1. **Default Purple** - Original purple gradient theme
2. **Ocean Blue** - Cool blue color scheme
3. **Forest Green** - Nature-inspired green theme
4. **Sunset Orange** - Warm orange theme
5. **Crimson Red** - Bold red theme
6. **Dark Mode** - Dark background with purple accents
7. **Minimal Mono** - Clean monochrome theme

## How It Works

### Theme Configuration (tailwind.config.ts)

The theme system is built around CSS custom properties and Tailwind's extend functionality:

- **Theme Definitions**: Each theme is defined with HSL color values in the `themes` object
- **CSS Variables**: Themes are converted to CSS custom properties (--primary, --background, etc.)
- **Dynamic Classes**: Theme classes are generated (`.theme-blue`, `.theme-dark`, etc.)
- **Automatic Application**: Themes are applied via CSS classes and data attributes

### Theme Provider Context

The `ThemeProvider` component manages:
- Current theme state
- Theme persistence in localStorage
- Dynamic CSS class application
- Theme switching functionality

### Theme Switcher Component

The `ThemeSwitcher` component provides:
- Dropdown menu with all available themes
- Current theme indicator
- Responsive design (icon only on small screens)
- Theme name display

## Usage

### For Users

1. Look for the theme switcher button (palette icon) in the navigation
2. Click to open the theme dropdown
3. Select your preferred theme
4. The theme will be applied immediately and saved for future visits

### For Developers

#### Adding New Themes

1. **Add theme to configuration** in `tailwind.config.ts`:
```typescript
const themes = {
  // ... existing themes
  myNewTheme: {
    primary: "210 100% 50%", // HSL values without hsl()
    "primary-foreground": "0 0% 100%",
    // ... other color definitions
  },
};
```

2. **Add theme to constants** in `src/lib/themes.ts`:
```typescript
export const THEMES = {
  // ... existing themes
  myNewTheme: 'My New Theme Name',
} as const;
```

#### Customizing Theme Colors

Each theme should define these core colors:
- `primary` - Main brand color
- `primary-foreground` - Text on primary background
- `primary-glow` - Glow effect color
- `secondary` - Secondary color
- `secondary-foreground` - Text on secondary background
- `accent` - Accent color
- `accent-foreground` - Text on accent background
- `background` - Main background color
- `foreground` - Main text color

#### Using Theme Variables in Components

Colors automatically work with Tailwind classes:
```tsx
// These automatically adapt to the current theme
<div className="bg-primary text-primary-foreground">
<div className="bg-background text-foreground">
<div className="bg-gradient-primary">
```

## File Structure

```
src/
├── contexts/
│   └── ThemeContext.tsx    # Theme provider and context
├── hooks/
│   └── use-theme.ts        # Theme hook for components
├── lib/
│   └── themes.ts           # Theme constants and types
├── components/
│   └── ThemeSwitcher.tsx   # Theme switcher UI component
└── tailwind.config.ts      # Theme configuration and CSS generation
```

## Technical Details

### CSS Custom Properties

The system generates CSS custom properties like:
```css
:root {
  --primary: 262 83% 58%;
  --background: 0 0% 100%;
  /* ... */
}

.theme-blue {
  --primary: 221 83% 53%;
  /* ... */
}
```

### Theme Application

Themes are applied through:
1. CSS classes on the root element (`.theme-{name}`)
2. Data attributes (`data-theme="{name}"`)
3. Automatic CSS variable updates

### Persistence

Theme preferences are saved to localStorage as `portfolio-theme` and automatically restored on page load.

## Browser Support

- Modern browsers supporting CSS custom properties
- Fallbacks provided for essential functionality
- Progressive enhancement approach

## Performance

- Minimal JavaScript overhead
- CSS-based theme switching (no re-renders)
- Efficient CSS custom property updates
- Optimized theme definitions