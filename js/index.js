import ThreeColumnPreviewCard from "./components/ThreeColumnPreviewCard.js";

// *** *** *** Variables *** *** ***
const $main = document.getElementById("main");

const IMG_SRC = "./images/";

const allCards = [
    {   
        title: "Sedans",
        content: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
        bgColor: "var(--color-bright-orange)",
        icon: {
            src: IMG_SRC + "icon-sedans.svg",
            alt: "Icon Sedans"
        }
    },
    {   
        title: "SUVs",
        content: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
        bgColor: "var(--color-dark-cyan)",
        icon: {
            src: IMG_SRC + "icon-suvs.svg",
            alt: "Icon Suvs"
        }
    },
    {   
        title: "Luxury",
        content: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
        bgColor: "var(--color-very-dark-cyan)",
        icon: {
            src: IMG_SRC + "icon-luxury.svg",
            alt: "Icon Luxury"
        }
    }
];

// *** *** *** Ejecución *** *** ***
document.addEventListener("DOMContentLoaded", evt => {
    $main.append(
        ThreeColumnPreviewCard(allCards)
    );
});
