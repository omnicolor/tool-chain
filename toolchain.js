$(function() {
    $.deck('.slide');
    var notes = window.open('notes.html', 'notes',
        'menubar=no,toolbar=no,location=no,dependent=yes,height=600,width=600');

    $(document).bind('deck.change', function(from, to) {
        displayNotes(notes, to);
    });
    $.extend(true, $.deck.defaults, {
        hashPrefix: 'slide-',
        preventFragmentScroll: true
    });
});

/**
 * Send the speaker notes to the speaker notes window.
 * @param {string} notes HTML of the notes to send.
 * @param {number} to Slide we're going to.
 */
var displayNotes = function(notes) {
    // Set timeout to give the deck classes time to settle down. Otherwise
    // .deck-current still points to the slide we're leaving.
    window.setTimeout(function() {
        notes.postMessage($('.deck-current .note').html(), '*');
    }, 0);
};
