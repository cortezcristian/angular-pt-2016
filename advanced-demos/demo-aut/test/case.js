var alcuadrado = function(x){
  if(typeof x !== 'number') {
    throw new Error('Se esperaba un numero');
  }
  return x*x;
}

describe('Controllers', function(){

  beforeEach(module('simpleApp'));

  var HomeCtrl, scope;

  beforeEach(inject(function($controller, $rootScope){
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });

  }));

  it('Test Home Controller', function(){
    expect(scope.msg).toBe("Hola");
  });

  /*
  it('debe devolver 4 cuando se ingresa 2', function(){
    expect(alcuadrado(2)).toBe(4);
  });

  it('no debe devolver 5 cuando se ingresa 2', function(){
    expect(alcuadrado(2)).not.toBe(5);
  });

  it('debe devolver una excepcion cuando se ingresa una string', function(){
    expect(function(){alcuadrado("feliz cumple mama")}).toThrowError('Se esperaba un numero');
  });
  */
})
