//FUNCIONES ÚTILES Y MISCELANEA.

const checkError = (datosCheck) => {
    

    for(let field in datosCheck){


        switch(field) {

            case 'nombre' : 

                // eslint-disable-next-line
                if(! /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(datosCheck[field])){

                    return "El nombre introducido solo puede contener letras";
                }

            break;

            case 'apellido1' : 

                // eslint-disable-next-line
                if(! /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(datosCheck[field])){

                    return "El primer apellido introducido solo puede contener letras";
                }

            break;

            case 'apellido2' : 

                // eslint-disable-next-line
                if(! /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(datosCheck[field])){

                    return "El segundo apellido introducido solo puede contener letras";
                }

            break;

            case 'dni' : 

                // eslint-disable-next-line
                if(! /^[0-9]{8,8}[A-Za-z]$/.test(datosCheck[field])){

                    return "El dni introducido es incorrecto";
                }

            break;

            case 'telefono' : 

                // eslint-disable-next-line
                if(! /^[0-9]{9,11}$/.test(datosCheck[field])){

                    return "El telefono introducido solo puede contener números";
                }

            break;

            case 'email' :
                
                // eslint-disable-next-line
                if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(datosCheck[field]) ){
                    
                    return "El email introducido no es correcto";
                }

            break;


            case 'password' :

                // eslint-disable-next-line
                if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(datosCheck[field])){
                    return "El password debe contener 8 caracteres, mayúsculas, minúsculas, número y algún caracter especial";
                }
                
            break;

            default: 

            break;


        }
    }

};

export default checkError;