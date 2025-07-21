module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: "var(--blue)",
                "blue-2": "var(--blue-2)",
                "color-bg": "var(--color-bg)",
                "dark-blue": "var(--dark-blue)",
                grey: "var(--grey)",
                "light-grey-blue": "var(--light-grey-blue)",
                white: "var(--white)",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            fontFamily: {
                "body-big": "var(--body-big-font-family)",
                "body-bold-big": "var(--body-bold-big-font-family)",
                "body-bold-medium": "var(--body-bold-medium-font-family)",
                "body-huge-bold": "var(--body-huge-bold-font-family)",
                "body-medium": "var(--body-medium-font-family)",
                "body-regular-small": "var(--body-regular-small-font-family)",
                "body-text-1-regular": "var(--body-text-1-regular-font-family)",
                h1: "var(--h1-font-family)",
                h2: "var(--h2-font-family)",
                h3: "var(--h3-font-family)",
                sans: [
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif",
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
            },
            boxShadow: { "shadow-1": "var(--shadow-1)" },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
        container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    },
    plugins: [],
    darkMode: ["class"],
};
