$( document ).ready( function() {
    var dom = {
        catPromptButton : 'js-prompt-cat-button',
        catPromptContainer : '.js-cat-prompt-container',
        catPromptContent : '.js-prompt-cat-content',
        catContainer : '.js-cat-container'
    };

    $( dom.catPromptButton ).on( 'click', function() {
        $( dom.catPromptContainer ).attr( 'data-status', 'open' );
    })


})
