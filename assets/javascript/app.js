$(document).ready(function () {



    $(function () {
        populateButtons(searchArray, 'searchButton', '#buttonsArea');
        console.log('page loaded');
    });
    const searchArray = ["Dog", "Cat", "Bears", "Wizard"];

    function populateButtons(searchArray, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();
        for (let i = 0; i < searchArray.length; i++) {
            const a = $('<button>');
            a.addClass(classToAdd);
            a.attr('data-type', searchArray[i]);
            a.text(searchArray[i]);
            $(areaToAddTo).append(a);
        }
    }

    $(document).on('click', '.searchButton', function () {
        $('#searches').empty();
        const type = $(this).data('type');
        console.log(type);
        const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=0tPJSAkmge33IsGzgEwrOofvW7yPGcVv&limit=5";

        $.ajax({ url: queryURL, method: "GET" })
            .done(function (response) {
                console.log(response);

                for (let i = 0; i < response.data.length; i++) {
                    let searchDiv = $('<div class="search-item">');
                    const rating = response.data[i].rating;
                    const p = $('<p>').text("Rating:" + rating);
                    let animated = response.data[i].images.fixed_height.url;
                    let still = response.data[i].images.fixed_height_still.url;
                    let image = $('<img>');
                    image.attr('src', still);
                    image.attr('data-still', still);
                    image.attr('data-animated', animated);
                    image.attr('data-state', 'still');
                    image.addClass('searchImage');
                    searchDiv.append(p);
                    searchDiv.append(image);
                    $('#searches').append(searchDiv);
                    // console.log(searchDiv)
                }
            });


    })

})