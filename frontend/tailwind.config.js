module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bmo-green': '#00ff88',
        'bmo-blue': '#00aaff',
        'bmo-purple': '#aa00ff',
        'bmo-pink': '#ff00aa',
        'bmo-yellow': '#ffff00',
        'bmo-orange': '#ff8800',
        'bmo-red': '#ff0000',
        'bmo-dark': '#1a1a2e',
        'bmo-darker': '#16213e',
      },
      fontFamily: {
        'bmo': ['Comic Sans MS', 'cursive'],
        'pixel': ['Courier New', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff88' },
          '100%': { boxShadow: '0 0 20px #00ff88, 0 0 30px #00ff88' },
        }
      }
    },
  },
  plugins: [],
}
