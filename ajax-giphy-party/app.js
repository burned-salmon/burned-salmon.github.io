$(function () {
    console.log("Let's get this party started!");

    $("form").on("submit", function (event) {
        event.preventDefault();
        const searchVal = $("#search-text").val();
        //addGif(searchVal);
        $("#gifs").append("<img src='i-failed-you.gif' style='width:200px;padding:12px;'>");
        $("form").trigger('reset');
    });

    $(document).on('click','#btn-remove-gifs',function(){
        $("#gifs").empty();
    });
});

async function addGif(search) {
    let response = await axios.get("api.giphy.com/v1/gifs/search", {params: {q: search, api_key: "IuiMXeF5i949yhWUmAKZ8p9XoxrOj87L", limit: 1}});
    console.log(response.data[0].images.downsized.url);
    //$("#gifs").append(response);
};