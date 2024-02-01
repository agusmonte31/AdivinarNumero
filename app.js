// Variables
let maximoPosible=100;
let numeroSecreto = Math.floor(Math.random() * maximoPosible)+1;
let numeroUsuario= 0; //la declaro antes
let intentos=1;
let palabraVeces= 'Vez';
let maximosIntentos=5;


while(numeroUsuario != numeroSecreto) {
  let  numeroUsuario = parseInt(prompt(`Escribe un número entre 1 y ${maximoPosible}:`));// El parseInt me pasa el string a numero entero

    console.log(numeroUsuario); 

    if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el numero es: ${numeroUsuario} . Lo hiciste en ${intentos} ${intentos == 1 ? 'vez': 'veces'}`);  // Super importante las comillas invertidas(ctrl+alt+}+espacio), template String,indico que quiero que quede la variable y no la palabra
    } else {
        if (numeroUsuario>numeroSecreto){
            alert('El numero secreto es menor');
        } else {
            alert ('El numero secreto es mayor');
        }
        intentos++; //Contador,podria ser intentos=intentos+1 o intentos+=1
        palabraVeces='veces';
        if (intentos>5) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break; //salgo del ciclo
        }
    }
}



