$(function(){
    //a funcão de click do botão
    $('button').bind('click', function(){
        //Vai pegar o que está digitando no input 
        var cidade = $('#cidade').val();

        //A url da API
        let temp_url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&appid=295aa42a05b535cd62edd3e86c019a7e&units=metric&lang=pt_br`
        $.ajax({
            url: temp_url,
            dataType: 'json',
            type: 'GET',
            success:function(json){       
                if(json.cod === 200) {
                    $('#resultado').html(json.main.temp+'º C')
                }
            }, 
            //*Se a cidade não for encontrada ou se o usuário apertar o botão sem ter digitado nada, vai mostrar esse erro
            //
            error:function(){
                $('#resultado').html('Não encontramos a localização informada');
            } 
        })
    })
});

