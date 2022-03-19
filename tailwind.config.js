module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  plugins: [require("daisyui")],
  // https://daisyui.com/theme-generator/
  // https://daisyui.com/docs/themes/
  daisyui: {
    themes: [
      "cyberpunk",
      "retro",
      "lemonade",
      {
        mytheme: {
          primary: "#fef08a",
          secondary: "#F000B8",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#fb7185",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
