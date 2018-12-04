$(document).on('ready', function(){
    
    $('#member_email, #member_name').keypress(function(e){
        var enter = 13;

        if (e.which == enter && valid_parans()){
            $('.new_member').submit();
        }
    });
    
    $('#member_name, #member_email').blur(function(e){
        valid_parans() ? $('.new_member').submit() : false;
    });

    $('.new_member').on('submit', function(e){
        $.ajax({
            type: "POST",
            dataType: "json",
            data: $('.new_member').serialize(),
            url: e.target.action,
            success: function(data, textStatus, jqXHR){
                insert_member(data['id'], data['name'],  data['email']);
                $('#member_name, #member_email').val("");
                $('#member_name').focus();
                M.toast(
                    {
                        html: 'Membro Adicionado!',
                        inDuration: 400,
                        classes: 'green'
                    }
                )
            },
            error: function (xhr, ajaxOptions, thrownError) {
                M.toast(
                    {
                        html: 'Problema na hora de incluir membro',
                        inDuration: 400,
                        classes: 'red'
                    }
                )
                }
        });
        return false;
    });

    $(document).on('click', 'body a.remove_member', function(e){
        $.ajax({
            type: "DELETE",
            dataType: "json",
            url: '/members/' + e.currentTarget.id,
            success: function(data, textStatus, jqXHR){
                $('#member_' + e.currentTarget.id).remove();
                M.toast(
                    {
                        html: 'Membro Removido!',
                        inDuration: 400,
                        classes: 'green'
                    }
                )
            },
            error: function (xhr, ajaxOptions, thrownError) {
                M.toast(
                    {
                        html: 'Problema na remoção de membro',
                        inDuration: 400,
                        classes: 'red'
                    }
                )
            }
        });
        return false;
    });

    $('.member_list input').bind('change', function(e){
        e.preventDefault();
        
        var id = $(e.target).data('id');
        
        $.ajax({
            url: "/members/" + id,
            data: {
                'member[name]': $($('#member_'+id+' input').get(0)).val(),
                'member[email]': $($('#member_'+id+' input').get(1)).val(),
                'member[campaign_id]': $('#member_campaign_id').val()
            },
            type: "PUT",
            dataType: "json",
            success: function(data, textStatus, jqXHR){
                M.toast(
                    {
                        html: 'Membro Atualizado!',
                        inDuration: 400,
                        classes: 'green'
                    }
                )
            },
            error: function (xhr, ajaxOptions, thrownError) {
                M.toast(
                    {
                        html: 'Problema ao atualizar membro',
                        inDuration: 400,
                        classes: 'red'
                    }
                )
                }
        });
    });
    
    function valid_parans(){
        var email = $( "#member_email" ).val();
        var name = $("#member_name").val();

        return name != "" && valid_email(email);
    };

    function valid_email(email){
        var re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return re.test(email);
    };

    function insert_member(id, name, email){
        $('.member_list').append(
            '<div class="member" id="member_' + id + '">' +
              '<div class="row">' +
                '<div class="col s12 m5 input-field">' +
                  '<input id="name" type="text" class="validate" value="' + name + '">' +
                  '<label for="name" class="active">Nome</label>' +
                '</div>' +
                '<div class="col s12 m5 input-field">' +
                  '<input id="email" type="email" class="validate" value="' + email + '">' +
                  '<label for="email" class="active" data-error="Formato incorreto">Email</label>' +
                '</div>' +
                '<div class="col s3 offset-s3 m1 input-field">' +
                  '<i class="material-icons icon">visibility</i>' +
                '</div>' +
                '<div class="col s3 m1 input-field">' +
                  '<a href="#" class="remove_member" id="' + id + '">' +
                    '<i class="material-icons icon">delete</i>' +
                  '</a>' +
                '</div>' +
              '</div>' +
            '</div>')
    };

});