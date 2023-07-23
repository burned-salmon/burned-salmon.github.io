$(function () {
    console.log("Let's get this party started!");

    $("form").on("submit", function (event) {
        event.preventDefault();
        const searchVal = $("#search-text").val();
        addGif(searchVal, 0);
        $("form").trigger('reset');
    });

    $(document).on('click','#btn-remove-gifs',function(){
        // remove gifs
    });
});

async function addGif(search, weirdness) {
    let response = await axios.get("api.giphy.com/v1/gifs/search", {params: {q: search, api_key: "IuiMXeF5i949yhWUmAKZ8p9XoxrOj87L", limit: 1}});
    console.log(response.data[0].images.downsized.url);
    //$("#gifs").append(response);
};