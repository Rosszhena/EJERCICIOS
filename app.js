// Toda la documentación necesaria se encuentra en
//
// https://developer.mozilla.org/es/
//
// Se utiliza mocha para realizar pruebas unitarias
// a los problemas de este examen

// 1 - binarioDecimal()
// Crear una función que reciba como parámetro un arreglo de números, estos números serán 0s y 1s que representan un número binario.
// La función debe retornar el valor numérico en base 10 de arreglo

const binarioDecimal = (arr) => {
  let exp = 0;
  let res=0;

 // array.reverse();
  for (let i of arr.reverse()) {
    if(i===0 && exp===0){
      res=0
      exp++
    }
    else{
     res = res + Math.pow((i * 2), exp);
     exp++ 
    }
    
  }

  return res;

}

// 2 - numeroMaximo()
// Crear una función que reciba como parámetro un número de n digitos. La función deberá retornar el mayor número de esa combinación de dígitos. Si el número recibido es negativo tendrá que retornar 0

const numeroMaximo = (n) => {

  if ( Math.sign(n) === -1 ) {
    return 0;
   }
  
   else {
     
     let num = n.toString();
     let arr = [];

     for(let i=0; i<num.length; i++){
       arr.push(num.substr(i,1));
     }

    let arrMayor = [];
    let numMayor;
   var pos;
    for(let i=0; i<arr.length; i++){

      numMayor = Math.max(...arr);
      arrMayor.push( numMayor);
      pos = arr.indexOf(numMayor.toString());
      arr.splice(pos,1)
    }
    arrMayor.push(parseInt(arr[0]));
    return (arrMayor.join(''));
   }
}

// 3 - sinVocales()
// Crear una función que reciba una cadena de texto y retorne una cadena de texto sin vocales.

const sinVocales = (cadena) => {

  return cadena.replace(/[aeiouAEIOU]/ig,'');
}
// 4 - multiplicar()
// Crear una función que reciba un arreglo de números y una base. 
//La función debe retornar un arreglo del resultado de multiplicar los elementos del arreglo por la base

const multiplicar = (arr, base) => {

  let arrRes = [];

  for( let i of arr) {

    arrRes.push(i*base);
  }
  return arrRes;

}


//binarioDecimal(array)


module.exports = {
  binarioDecimal,
  numeroMaximo,
  sinVocales,
  multiplicar
}



