/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#E5FFEA",
        primary2: "#CCFFD4",
        primary3: "#99FFA9",
        primary4: "#66FF7F",
        primary5: "#00FF29",
        primary6: "#009919",
        primary7: "#004C0C",
        primary8: "#003308",
        primary9: "#001904",

        /*  */

        secondary1: "#E6FFF9",
        secondary2: "#CCFEF2",
        secondary3: "#B3FEEC",
        secondary4: "#34FDCD",
        secondary5: "#01CA9A",
        secondary6: "#00654D",
        secondary7: "#00654D",
        secondary8: "#001913",

        /*  */

        neutral0: "#F8FAFC",
        neutral1: "#F1F5F9",
        neutral2: "#E2E8F0",
        neutral3: "#CBD5E1",
        neutral4: "#94A3B8",
        neutral5: "#64748B",
        neutral6: "#475569",
        neutral7: "#334155",
        neutral8: "#1E293B",
        neutral9: "#0F172A",

        /*  */

        dark0: "#5F626B",
        dark1: "#555962",
        dark2: "#4C4F59",
        dark3: "#424651",
        dark4: "#393D48",
        dark5: "#2F343F",
        dark6: "#262A36",
        dark7: "#1C212E",
        dark8: "#131825",
      },
      backgroundImage: {
        gradient1: "linear-gradient(to right,#06ff3d , #2bffcc)",
        landingBG:
          "url(https://res.cloudinary.com/dwnvkwrox/image/upload/v1680784794/Side_Bar_xnrmai.png)",
      },
      borderColor: {
        Gray3: "#CBD5E1",
      },
      textColor: {
        gray3: "#CBD5E1",
        secondary5: "#34FDCD",
      },
      screens: {
        desktop: { max: "1160px" },
        tablet: { max: "744px" },
        phone: { max: "430px" },
      },
    },
  },
  plugins: [],
};
