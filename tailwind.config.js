// tailwind.config.js
const { Dimensions } = require('react-native');
const { plugin } = require('twrnc');

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");


module.exports = {
    theme: {
        extend: {
            colors: {
                "primary": "#D71573"
            }
        }

    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                keypad: {
                    height: 60,
                    backgroundColor: 'white',
                    width: screenWidth * (30 / 100),
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }



            });
        }),
    ]
}