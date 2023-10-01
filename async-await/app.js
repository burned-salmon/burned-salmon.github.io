$(function () {
    console.log("Let's get this party started!");

    $(document).on('click', '#btn-number-fact', function () {
        let favNumber = 13;
        let baseURL = "http://numbersapi.com";

        async function part1() {
            let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
            console.log(data);
        }
        part1();

        const favNumbers = [13, 22, 66];
        async function part2() {
            let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
            console.log(data);
        }
        part2();

        async function part3() {
            let facts = await Promise.all(
                Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
            );
            facts.forEach(data => {
                $('#number-facts').append(`<p>${data.text}</p>`);
            });
        }
        part3();

    });


    let baseURL = "https://deckofcardsapi.com/api/deck";

    async function setup() {
        let $btn = $('#btn-draw-card');
        let $cardArea = $('#card-area');

        let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
        $btn.show().on('click', async function () {
            let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
            let cardSrc = cardData.cards[0].image;
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
            if (cardData.remaining === 0) $btn.remove();
        });
    }
    setup();

});