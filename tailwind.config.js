
module.exports = {
  content: ["./**.html"],
  theme: {
    extend: {
        fontFamily: {
            'moret': ['"moret"', 'serif'],
            'geist': ['"geist-sans"', 'sans-serif'],
        },

        fontSize: {
            '11xl': '11rem',
            '12xl': '12rem',
            '9xl': '9rem',
            '17xl': '17rem',
            '14xl': '14rem',
            '16px': ['1rem', {
                fontWeight: '600',
            }],
            '14px': ['0.875rem', {
                fontWeight: '600',
            }],
        },

        lineHeight: {
            '7l': '7rem',
            '9l': '9rem',
            '12': '12rem',
            '17': '17rem',
        },
    },
},
  plugins: [],
}

