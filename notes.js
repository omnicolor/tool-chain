/**
 * Receive a message from the main window and display it.
 * @param {Event} event Event that fired this handler (message).
 */
var receiveMessage = function(event) {
    $('#notes').html(event.data);
};

window.addEventListener('message', receiveMessage, false);
