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
});