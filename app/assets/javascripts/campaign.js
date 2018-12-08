$(document).on('ready', function(){

    $('.update_campaign input').bind('change', function(e){
        $('.update_campaign').submit();
    });

    $('.update_campaign').on('submit', function(e){
        $.ajax({
            type: "PUT",
            dataType: "json",
            data: $('.update_campaign').serialize(),
            url: $('.update_campaign').attr('action'),
            success: function(data, textStatus, jqXHR){
                M.toast(
                    {
                        html: 'Campanha atualizada!',
                        inDuration: 400,
                        classes: 'green'
                    }
                )
            },
            error: function (xhr, ajaxOptions, thrownError) {
                M.toast(
                    {
                        html: 'Problema ao atualizar Campanha!',
                        inDuration: 400,
                        classes: 'red'
                    }
                )
            }
        });
        return false;
    });

    $('#remove').on('click', function(e){
        e.preventDefault();
        $('#remove').attr('class', 'waves-effect waves-light btn black').text('Confirma?!');
        $('#remove').unbind('click');
    });

    $('.remove_campaign').on('submit', function(e){
        e.preventDefault();
        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: e.target.action,
            success: function(data, textStatus, jqXHR){
                $(location).attr('href', '/campaigns');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                M.toast(
                    {
                        html: 'Problema na remoção da Campanha',
                        inDuration: 400,
                        classes: 'red'
                    }
                )
            }
        });
    });

    $('.raffle_campaign').on('submit', function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            dataType: "json",
            url: e.target.action,
            success: function(data, textStatus, jqXHR){
                M.toast(
                    {
                        html: 'Tudo certo, em breve os participantes receberão um email!',
                        inDuration: 400,
                        classes: 'green',
                        completeCallback: function(){$(location).attr('href', '/campaigns')}
                    }
                )
            },
            error: function (xhr, ajaxOptions, thrownError) {
                M.toast(
                    {
                        html: xhr.responseText,
                        inDuration: 400,
                        classes: 'red'
                    }
                )
            }
        });
    });
    
});