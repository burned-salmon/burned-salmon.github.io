$(function () {
    console.log("Let's get this party started!");

    $(document).on('click', '#btn-number-fact', function () {
        let favNumber = 13;
        let baseURL = "http://numbersapi.com";

        // 1.
        $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
            console.log(data);
        });

        // 2.
        let favNumbers = [13, 22, 666];
        $.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
            console.log(data);
        });

        // 3.
        Promise.all(
            Array.from({ length: 4 }, () => {
                return $.getJSON(`${baseURL}/${favNumber}?json`);
            })
        ).then(facts => {
            facts.forEach(data => $("#number-facts").append(`<p>${data.text}</p>`));
        });

    });


    let baseURL = "https://deckofcardsapi.com/api/deck";

    let deckId = null;
    let $btn = $('#btn-draw-card');
    let $cardArea = $('#card-area');

    $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
        deckId = data.deck_id;
        $btn.show();
    });

    $btn.on('click', function () {
        $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
            let cardSrc = data.cards[0].image;
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            $cardArea.append(
                $('<img>', {
                    src: cardSrc,
                    css: {
                        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                    }
                })
            );
            if (data.remaining === 0) $btn.remove();
        });
    });

});