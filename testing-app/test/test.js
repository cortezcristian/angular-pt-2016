
describe('ControllerTest', function(){
  // load the controller's module
  beforeEach(module('simpleApp'));

  var TodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope
    });
  }));

  it('verificar variable sample en el scope', function () {
    expect(scope.msg).toBe("Sample");
  });
})
