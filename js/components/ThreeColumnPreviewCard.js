export default function ThreeColumnPreviewCard(obj) {
    // *** *** *** Variables *** *** ***
    const $container = document.createElement("div"),
        $template = document.getElementById("card").content,
        $fragment = document.createDocumentFragment();

    // *** *** *** Ejecución *** *** ***
    $container.classList.add("three-column-preview-card");
    obj.forEach(card => {
        // *** Variables ***
        let $cardClone = document.importNode($template, true),
            $card = $cardClone.querySelector(".card"),
            $title = $cardClone.querySelector(".card-title"),
            $content = $cardClone.querySelector(".card-content"),
            $icon = $cardClone.querySelector(".card-icon"),
            $btn = $cardClone.querySelector(".card-btn");
        // *** Ejecución ***
        $card.style.backgroundColor = card.bgColor;
        $icon.src = card.icon.src;
        $icon.alt = card.icon.alt;
        $title.textContent = card.title;
        $content.textContent = card.content;
        $btn.style.color = card.bgColor;
        $fragment.append($card);
    });
    $container.append($fragment);
    return $container;
};
