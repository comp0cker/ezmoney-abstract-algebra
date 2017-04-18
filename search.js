$(document).ready(function() {

    function app(i){
        $('.list').append(
            "<ul class = 'collection with-header'>" +
            "<li class = 'collection-header'><h5>" + data[i].name + "</h5></li>" +
            "<li class = 'collection-item'>" + data[i].text + "</li>");
    }
    for (var i = 0; i < data.length; i++) {
        app(i);
    }

    $('#search').keyup(function () {
        $('.prompt').text("Results for " + $(this).val() + ":");
        $('.list').empty();

        for (var i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase().indexOf($(this).val().toLowerCase()) >= 0
                || data[i].text.toLowerCase().indexOf($(this).val().toLowerCase()) >= 0) {
                app(i);
            }
        }
    });
});