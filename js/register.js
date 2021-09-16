$(document).ready(function(){
        
    //untuk hide/show password yang type nya password
    $("#show-password").click(function(){
        
        if($("input[name='password']").attr('type') == "password"){
            $("input[name='password']").attr('type', 'text');
            $("#show-password").html('hide <i class="fas fa-eye-slash"></i>'); //agar icon font awesome ikut terganti, jadi user tau maksud icon
        }else{
            $("input[name='password']").attr('type', 'password');
            $("#show-password").html('show <i class="fas fa-eye"></i>');
        }
    });

    function checkSym(str) {
        var sym = new Array ("/","!", "@", "#","$","%","%","^","&","*",
                  "(",")","_","+","=","-","`","~",";","<",
                  ">",".","?","[","]","{","}",",");

        var n = false;   

        for (var i = 0; i < sym.length; i++) {
            if(str.includes(sym[i])){
                n = str.includes(sym[i]);
                break;
            }
        }
        return n;
    }
    
    //form validation
    $('#register-submit').click(function(e){
        //agar message, border ter reset pada click button register
        $('span.message').html('');
        $('input').removeClass('atttentionBorder');

        //form data
        let form = $("#register-form")[0];
        let fd = new FormData(form);

        // console.log(fd.get('username'));
        var isValid = true;

        for(var pair of fd.entries()) {
            console.log(pair[0]+ ', '+ pair[1].length);
            
            if(pair[0] == "password" && !checkSym(pair[1])){
                $('input[name='+pair[0]+']').addClass('atttentionBorder');
                $('label[for='+pair[0]+'] span.message').html('Need One special character');
                isValid = false;
            }

            if(pair[0] == "password" && (pair[1].length) < 8 && (pair[1]).length != 0){
                $('input[name='+pair[0]+']').addClass('atttentionBorder');
                $('label[for='+pair[0]+'] span.message').html('8 characters minimum');
                isValid = false;
            }

            if((pair[1]).length == 0){
                $('input[name='+pair[0]+']').addClass('atttentionBorder');
                $('label[for='+pair[0]+'] span.message').html('cannot be blank');
                isValid = false;
            }

            
        }
        if(isValid){
            console.log(isValid);
            return;
        }else{
            e.preventDefault(); // agar jika belum valid tidak ke redirect secara default
        }
    });

    $('#clear-form-inputs').click(function(e){
        e.preventDefault();
        $("#register-form input").val('');
    });  
});