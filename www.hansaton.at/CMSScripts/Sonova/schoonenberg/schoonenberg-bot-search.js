
//starts search in seamly bot
function startSearch() {
    
    var searchText = $.trim($('#txtWordForBot').val());

    //search text entered by user?
    if (searchText === '') {
        return;
    }

    //get reference to seamly bot
    window.seamly = window.seamly || [];
    
    //open bot and start search witch user's search text
    window.seamly.push(
        { action: 'setVisibility', args: 'open'},
        { action: 'askText', args: searchText }
    );
}


$( document ).ready(function() {
    
    //add listener to search box
    $('#txtWordForBot').keydown(function (e) {

        if (e.keyCode === 13) {

            e.preventDefault(); //skip submission of form
            startSearch();
            return false;

        } else {
            return true;
        }
    });

    //add listener to search button
    $('#btnSearchForBot').click(function (e) {
        e.preventDefault(); //skip submission of form
        startSearch();
    });

});

