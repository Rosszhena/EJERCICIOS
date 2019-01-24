var assert = require('assert');

var ejercicios = require('../app');

describe('Binario a decimal', function() {
  it('[0,1,0,1] --> 5', function() {
    let resultado = ejercicios.binarioDecimal([0,1,0,1]);
    assert.equal(resultado, 5);
  });
  it('[1,0] --> 2', function() {
    let resultado = ejercicios.binarioDecimal([1,0]);
    assert.equal(resultado, 2);
  });
  it('[1,0,1,0] --> 10', function() {
    let resultado = ejercicios.binarioDecimal([1,0,1,0]);
    assert.equal(resultado, 10);
  });
});

describe('Número mayor', function() {
  it('931 -> 931', function() {
    let a = ejercicios.numeroMaximo(931);
    assert.equal(a, 931);
  });
  it('183 -> 831', function() {
    let a = ejercicios.numeroMaximo(183);
    assert.equal(a, 831);
  });
  it('12 -> 21', function() {
    let a = ejercicios.numeroMaximo(12);
    assert.equal(a, 21);
  });
  it('-100 -> 0', function() {
    let a = ejercicios.numeroMaximo(-100);
    assert.equal(a, 0);
  });
});

describe('Eliminar vocales', function() {
  it('Hola Mundo --> Hl Mnd', function() {
    let a = ejercicios.sinVocales('Hola Mundo');
    assert.equal(a, 'Hl Mnd');
  });
  it('Lorem Ipsum --> Lrm psm', function() {
    let a = ejercicios.sinVocales('Lorem Ipsum');
    assert.equal(a, 'Lrm psm');
  });
});

describe('Multiplicar arreglo', function() {
  it('[1, 2, 3, 4, 5], 10 --> [10, 20, 30, 40, 50]', function() {
    let a = ejercicios.multiplicar([1, 2, 3, 4, 5], 10);
    assert.deepEqual(a, [10, 20, 30, 40, 50]);
  });
  it('[10, 20, -30, 40, -50], 2 --> [20, 40, -60, 80, -100]', function() {
    let a = ejercicios.multiplicar([10, 20, -30, 40, -50], 2);
    assert.deepEqual(a, [20, 40, -60, 80, -100]);
  });
});
