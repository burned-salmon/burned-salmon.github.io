document.addEventListener("DOMContentLoaded", function () {
  console.log("Let's get ready to party with jQuery!");
  $("article img").addClass("image-center");
  $("p:last").hide();
  $("#title").css("font-size", (Math.floor(Math.random() * 100)) + "px");
  $("ol").append("<li>Wait, what are we doing again?</li>");
  $("aside *").remove();
  $("aside").append("<p>Oh no, what's happening here? This is all going wrong. There was a list here, but it's stupid. I'm so sorry. Geez. Here - hold on a minute. Alright, I've removed it. Now you can continue reading.</p>");
  $(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
      "rgb(" + red + "," + green + "," + blue + ")");
  });
  $("img").on('click', function (e) {
    $(e.target).remove();
  });
});