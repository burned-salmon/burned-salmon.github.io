$(function () {
    console.log("Let's get this party started!");

    $("form").on("submit", function (event) {
        event.preventDefault();
        const searchVal = $("#search-text").val();
        addGif(searchVal);
        //$("#gifs").append("<img src='i-failed-you.gif' style='width:200px;padding:12px;'>");
        $("form").trigger('reset');
    });

    $(document).on('click', '#btn-remove-gifs', function () {
        $("#gifs").empty();
    });
});

async function addGif(search) {
    const key = "IuiMXeF5i949yhWUmAKZ8p9XoxrOj87L";

    const url = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + key + '&limit=1';
    axios.get(url)
        .then((response) => {
            console.log('success got data', response.data);
        })
        .catch((error) => {
            console.error('An error occurred:', error.message);
        });

    //let xhr = $.get("http://api.giphy.com/v1/gifs/search", { q: search, api_key: key, limit: 1 });
    //xhr.done(function (data) { console.log("success got data", data); });
    //$("#gifs").append(response);
};