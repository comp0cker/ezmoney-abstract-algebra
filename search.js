$(document).ready(function() {

    function app(i){
        $('.list').append(
            "<ul class = 'collection with-header'>" +
            "<li class = 'collection-header'><h5>" + data[i].name + "</h5></li>" +
            "<li class = 'collection-item'>" + data[i].text + "</li>" +
            "<li class = 'collection-item'>Chapter " + data[i].chapter + "</li>");
    }

    function parse(input, i){
        var split = input.split(" ");

        for (var j = 0; j < split.length; j++) {
            if (data[i].name.toLowerCase().indexOf(split[j].toLowerCase()) >= 0
                || data[i].text.toLowerCase().indexOf(split[j].toLowerCase()) >= 0
                || data[i].chapter.toLowerCase().indexOf(split[j].toLowerCase()) >= 0
                || "chapter".indexOf(split[j].toLowerCase()) >= 0);
            else
                return 0;
        }

        return 1;
    }

    for (var i = 0; i < data.length; i++) {
        app(i);
    }

    Materialize.showStaggeredList('.list');

    $('#search').keyup(function () {
        $('.prompt').text("Results for " + $(this).val() + ":");
        $('.list').empty();

        for (var i = 0; i < data.length; i++) {
            if (parse($(this).val(), i)){
                app(i);
            }
        }
        Materialize.showStaggeredList('.list');
    });
});