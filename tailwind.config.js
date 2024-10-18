/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        //color part start
        colors: {
          'ButtonBg': '#E5745D',
          'PrimaryColor': '#00413D',
          'h4Color': '#rgba(0, 65, 61, 0.7)',
          'FCBg': '#rgba(0, 65, 61, 0.9)',
        },
        //color part end

         //width part
         width: {
           'container': '1170px',
           'Bannnercontainer': '1920px',
          },
          //width part end
          //font family start
            fontFamily: {
              
              'Vollkorn': ['"Vollkorn", serif'],
              'Jost': ['"Jost", sans-serif;'],  
              
            } 
          //font family end
          //font size start
            // fontSize: {
    
            //    'rk': '70px'
            // },
          //font size end




    },
  },
  plugins: [],
}

