module.exports = {
  theme: {
    extend: {
      keyframes: {
        pulseCustom: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        pulseCustom: 'pulseCustom 1.5s ease-in-out infinite',
      },
    },
  },
};
