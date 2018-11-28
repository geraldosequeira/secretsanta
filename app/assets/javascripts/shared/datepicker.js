$(document).on('ready turbolinks:load', function() {
    $('.datepicker').datepicker({
        closeOnSelect: true,
        format: 'dd/mm/yy',
        i18n: {
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
            weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            cancel: 'Sair',
            done: 'Confirmar',
            selectMonths: true,
            selectYears: 5,
        },
        container: 'body',
        minDate: new Date(),
        onOpen: function(){$('.update_campaign').submit();}
    });
});

$(document).on('ready turbolinks:load', function() {
    $('.timepicker').timepicker({
        closeOnSelect: true,
        i18n: {
            cancel: 'Sair',
            done: 'Confirmar'
        },
        defaultTime: 'now',
        twelveHour: false, // change to 12 hour AM/PM clock from 24 hour
        autoclose: false,
        vibrate: true, // vibrate the device when dragging clock hand
    });
});

$(document).on('ready turbolinks:load', function() {
    $('.datepicker').on( 'keyup', function(e) {
        $('.datepicker').click();
    } );

    $('.timepicker').on( 'keyup', function(e) {
        $('.timepicker').click();
    } );
});