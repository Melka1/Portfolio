const theme = {
  fonts: {
    title: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
    main: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
  },
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",

    // Surfaces — every card/panel picks from these so they read as one system.
    surface: "#151E31",
    surfaceRaised: "#1B2740",
    border: "rgba(255, 255, 255, 0.08)",
    borderStrong: "rgba(255, 255, 255, 0.22)",

    // Text ramp
    text: "hsl(204,23.8%,95.9%)",
    textMuted: "rgba(255, 255, 255, 0.72)",
    textSubtle: "rgba(255, 255, 255, 0.5)",

    // Brand accents, taken from the existing gradient pair
    cyan: "#13ADC7",
    purple: "#945DD6",
    orange: "#F46737",
  },
  gradients: {
    brand: "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)",
    brandAlt: "linear-gradient(270deg, #F46737 0%, #945DD6 100%)",
    heading:
      "linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
  },
  radii: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    pill: "999px",
  },
  shadows: {
    card: "0 4px 24px rgba(0, 0, 0, 0.35)",
    cardHover: "0 16px 40px rgba(0, 0, 0, 0.45)",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)'
  },
}


export default theme
