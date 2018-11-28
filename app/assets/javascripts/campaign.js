$(document).on('ready turbolinks:load', function(){
    $('.update_campaign input').bind('blur', function(e){
        if(e.target.name != 'campaign[event_date]'){
            $('.update_campaign').submit();
        }
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