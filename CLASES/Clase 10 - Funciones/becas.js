function becaEscolar(promedioEscolar,ingresoFamiliar,sobrinoDirectivo){
    if(promedioEscolar>=9 && ingresoFamiliar<=1000 || sobrinoDirectivo ){
        return "Beca Completa";
    }else if(promedioEscolar>=7 && ingresoFamiliar<=500 && !sobrinoDirectivo){
        return "Media Beca";
    }else{
        return "No dispones de una beca";
    }
}

promedio = Number(prompt("Cual es tu promedio escolar?"));
ingreso = Number(prompt("Cual es el ingreso de tu familia?"));
sobrino = Number(prompt("Si eres sobrino de un directivo selecciona 1 / si no eres sobrino de un directivo selecciona 0 "));

if(sobrino===1){
    sobrino=true;
}else{
    sobrino=false;
}

alert(becaEscolar(promedio,ingreso,sobrino));