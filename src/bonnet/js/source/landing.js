$( document ).ready( function() {
    var dom = {
        catPromptButton : '.js-prompt-cat-button',
        catPromptContainer : '.js-prompt-cat-container',
        catPromptContent : '.js-prompt-cat-content',
        catContainer : '.js-cat-container'
    };

    $( dom.catPromptButton ).on( 'click', function() {
        console.log( 'clicked' );
        var currentStatus = $( dom.catPromptContainer ).attr( 'data-status' );
        if ( currentStatus === 'open' ) {
            $( dom.catPromptContainer ).attr( 'data-status', 'closed' );
        } else {
            $( dom.catPromptContainer ).attr( 'data-status', 'open' );
        }
    });
})
