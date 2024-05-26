/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens:{
      'si': '200vh',
      'sm' : '100px',
      'md' : '768px',
      'lg' : '1024',
      'xl' : '1280px',
    },
    fontFamily:{
      'profile-logo' : '"Jolly Lodger", system-ui',
      "Istok" : '"Istok Web", sans-serif',
      "Inter" : '"Inter", sans-serif'
    },
    extend: {
      opacity:{
        '100':'1',
        '75':'0.75',
        '50':'0.5',
      },
      fontSize:{
        '170' : '170px',
        '36' : '36px',
        '30' : '30px',
        '17' : '17px',
        '24' : '24px',
        '20' : '20px',
        '17' : '17px',
        '15' : '15px',
        '13' : '13px',
        '10' : '10px',
        '9' : '9px',
      },
      colors:{
      'blue-1' : '#001A79',
      'blue-3' : '#076CBC',
      'blue-2' : '#6FBFF2',
      'purple-1' : '#2E0696',
      'purple-2' : '#641AB8',
      'purple-3' : '#B039EC',
      'download' : "#0078CE",
      "main-color" : "#191919",
      "s-color" : "#8C8C8C",
      "mint" : "#01FFF6",
      "card" : "#303030",
      "button-color" : "#373131"
      },
      spacing: {
        '850' : '850px',
        '600' : '600px',
        '500': '500px',
        '175' : '160px',
        '47' : '40px',
        '80' : '80px',
        '70' : '70px',
        '60' :'60px',
        '50' :'50px',
        '40' :'40px',
        '30': '30px',
        '20': '20px',
        '10': '10px',
        'n10' : '-10px',
        'n20' : '-20px',
        'n30' : '-30px',
        'n40' : '-40px',
        'n60' : '-60px',
        '15': '15px',
        '150': '150px',
        '130': '130px',
        '125': '125px',
        '100': '100px',
        '250': '250px',
        '230' : '230px',
        '200': '200px',
        '10-p' : "10%",
        'half' : "50%",
        'quarter' : "25%",
        'card' : "400px",
      }
    },  
  },
  plugins: [],
}

