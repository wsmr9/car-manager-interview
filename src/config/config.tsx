// List of image URLs for car brands. These are used throughout the application
// to display logos or related imagery for each brand.
const carBrandsImages = [
    "https://pngimg.com/d/rolls_royce_PNG27.png",
    "https://pngimg.com/d/bentley_PNG37.png",
    "https://i.pinimg.com/originals/4c/ab/f1/4cabf11ca2754891d4d9d20326eca835.png",
    "https://pngimg.com/d/aston_martin_PNG35.png",
    "https://upload.wikimedia.org/wikipedia/nah/5/5c/Lamborghini_logo.png",
    "https://www.carlogos.org/car-logos/maserati-logo-2006-download.png",
    "https://pngimg.com/uploads/porsche_logo/small/porsche_logo_PNG1.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Bugatti_Logo.png",
    "https://seeklogo.com/images/M/mercedes-benz-logo-0DCE214555-seeklogo.com.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jLdiRIffyVvYjJSgZqFzc73YJSfqcRbR6Q&s",
    "https://1000logos.net/wp-content/uploads/2020/02/Lexus-Logo-1989.png",
    "https://logowik.com/content/uploads/images/685_jaguar.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Land_Rover_logo_black.svg/594px-Land_Rover_logo_black.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    "https://logos-world.net/wp-content/uploads/2021/09/McLaren-Logo.png",
    "https://1000logos.net/wp-content/uploads/2018/09/Alfa-Romeo-Logo-1972.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f4/Logo_Lincoln.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/INFINITI_Logo_Primary_Black.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Volvo_Trucks_Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Acura_logo.svg/2560px-Acura_logo.svg.png",
    "https://www.carlogos.org/logo/Genesis-logo-4096x1638.jpg",
    "https://www.carlogos.org/logo/Lotus-logo-2019-1800x1800.png",
    "https://seekvectorlogo.com/wp-content/uploads/2021/12/morgan-motor-company-vector-logo-2021.png",
    "https://1000logos.net/wp-content/uploads/2024/01/Rimac-Logo.jpg",
    "https://1000logos.net/wp-content/uploads/2021/11/Lucid-Motors-Logo.png",
    "https://seeklogo.com/images/F/fisker-logo-845743FA01-seeklogo.com.png?v=638266620090000000"
];

// Configuration object for the application.
const config = {
    // API endpoint for car data, specified in the environment variables.
    carEndpoint: process.env.REACT_APP_CARS_ENDPOINT,
    // Array of car brand images URLs.
    carBrandsImages: carBrandsImages
};

export default config;
