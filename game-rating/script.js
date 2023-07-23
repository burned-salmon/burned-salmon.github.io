$(document).ready(function () {
    console.log("Let's get ready to party with jQuery!");
    const starSolid = '<i class="fa-solid fa-star"></i>';
    const starHalf = '<i class="fa-solid fa-star-half-stroke"></i>';
    const starEmpty = '<i class="fa-regular fa-star"></i>';

    $("form").on("submit", function (event) {
        event.preventDefault();
        const ratingName = $("#inputThing").val();
        let ratingNum;
        // Snap rating to 0 or 10 if it's below 0 or above 10, respectively
        if ($("#inputRating").val() < 0) {
            ratingNum = 0;
        }
        else if ($("#inputRating").val() > 10) {
            ratingNum = 10;
        }
        else {
            ratingNum = $("#inputRating").val();
        }
        let ratingStars = "";

        // I'm sorry for how badly written this part of the code is, it's not even required, idk why I decided to implement it
        const starNum = ratingNum / 2;
        for (let i = 0; i < Math.floor(starNum); i++) {
            ratingStars += starSolid;
        }
        if (starNum % 1 != 0) {
            ratingStars += starHalf;
        }
        if (Math.ceil(starNum) < 5) {
            for (let i = 0; i < (5 - Math.ceil(starNum)); i++) {
                ratingStars += starEmpty;
            }
        }

        $("#ratings").append(
            '<div class="rating"><p>' + ratingName + ' ' + ratingStars + '</p><button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></div>'
        );
        $("form").trigger('reset');
    });

    $(document).on('click','.btn-danger',function(){
        $(this).parent().remove();
    });
});