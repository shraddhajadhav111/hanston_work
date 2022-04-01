// Function to retrieve query string values..
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get element..
var eBookingIframe = document.getElementById('ebooking-iframe-container');

// Check if it exists. If true, proceed to render the iFrame..
if (eBookingIframe) {
    var storeId = getParameterByName('store_id');
    if (storeId) {
        var url = 'https://direct-booking.storage.googleapis.com/index.html?store_id=' + storeId; 
        var iFrame = '<iframe id="ebooking-iframe" width="500" frameborder="0" scrolling="no" style="width:100%" src="' + url + '"></iframe>';
        eBookingIframe.innerHTML = iFrame;
    }
}
