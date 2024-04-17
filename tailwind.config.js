/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "url('https://www.zaubacorp.com/sites/default/themes/bootstrap_subtheme/images/banner.png')",
        assobanner:
          "url('https://www.zaubacorp.com/sites/default/themes/bootstrap_subtheme/images/img01.png')",
        column3:
          "url('https://www.zaubacorp.com/sites/default/themes/bootstrap_subtheme/images/img03.png')",
        column4:
          "url('https://www.zaubacorp.com/sites/default/themes/bootstrap_subtheme/images/img04.png')",
        column5first:
          "url('https://www.zaubacorp.com/sites/default/themes/bootstrap_subtheme/images/img05.png')",
        column5second:
          "url('https://www.zaubacorp.com/sites/default/themes/bootstrap_subtheme/images/img06.png')",

        column6:
          "url('https://www.zaubacorp.com/sites/default/themes/bootstrap_subtheme/images/img07.jpg')",
      },
    },
  },
  plugins: [],
};
