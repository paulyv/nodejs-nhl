$.getJSON("/scores", function(json) {

    var gamesJson = json;

    $.each(gamesJson.games, function (index, value) {
        var year    = (value.id).toString().substring(0, 4);
        var season  = (value.id).toString().substring(4, 6);
        var game    = (value.id).toString().substring(6, 10);

        // To get the links which is now disabled
        // $.getJSON('/gameurl/'+year+'/'+season+'/'+game+'/', function(urls) {
        //  console.log(urls);
        var gameTime = moment(value.longStartTime);
        var now = moment();
        var diff = now.diff(gameTime, 'days');

        // if-block adjusts how old games will be shown (0 = only today and future. now that it is commented shows everything)

        //if(diff == 0) {
        var gameDate = moment(value.longStartTime).add(7, 'hours').format('MMMM Do YYYY, HH:mm a');
        $('#rivit tr:last').after('<tr><td>' + gameDate + '</td><td>' + value.homeTeamName + ' - ' + value.awayTeamName + '</td><td>' + value.homeTeamScore + ' - ' + value.awayTeamScore + '</td><td>' + value.id + '</td><td>-</td></tr>');
        //}

    });
    $('#loading').html('<h2>Downloaded 100% <span class="glyphicon glyphicon-ok"></span></h2>');
    $('#loading span').css("color", "#00ff00");
    $('footer').css("display", "block");

});