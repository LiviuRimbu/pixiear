module.exports = {
    darkMode: ['class'],
    // mode: 'jit',
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './node_modules/@shadcn/ui/components/**/*.js',
        './node_modules/@shadcn/ui/**/*.js',
    ],
    theme: {
        extend: {
            screens: {
                // Custom screen sizes
                xs: '480px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                xxl: '1536px',
            },
            backgroundImage: {
                'ardino-bg': "linear-gradient(rgba(132, 229, 222, 0.8), rgba(148, 204, 253, 0.9)), url('/images/ardino.png')",
                // 'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
            },
            backgroundSize: {
                '210': '210%',
            },
            backgroundPosition: {
                'left-60': 'left 60%',
            },
            fontFamily: {
                herculanum: ['var(--font-herculanum)', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                violet: 'var(--violet)',
                btnGradient: 'var(--btn-gradient)',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            }
        },
        animation: {
            gradient: "gradientBG 5s infinite linear",
        },
        keyframes: {
            gradientBG: {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
