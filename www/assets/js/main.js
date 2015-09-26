$(document).ready(function(){
    function init(){
    // Fonction à lancer une fois la page chargée
        $('html').removeClass('no-js');
        $('html').removeAttr('class');
        console.log('Prêt à démarrer !');
    }

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
    init();
});