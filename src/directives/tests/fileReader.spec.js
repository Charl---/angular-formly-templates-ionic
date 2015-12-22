/* eslint no-console:0 */
import angular from '../../angular-fix'
import { customEventPolyfill } from '../../test.utils.js'

describe('fileReader directive', () =>{
  let scope, element, div, windowMock;

  beforeEach(angular.mock.module('formlyIonic'));

  beforeEach(angular.mock.inject(($compile, $rootScope, $window)=>{
    customEventPolyfill();
    windowMock = $window;
    scope = $rootScope.$new();
    element = $compile('<input type="file" file-reader ng-model="myFiles"/>')(scope);

    let eventListener = jasmine.createSpy();
    spyOn(windowMock, "FileReader").and.returnValue({
      addEventListener: eventListener,
      readAsDataURL : function() {
        // do nothing.
      }
    });
  }));

  it('schould call FileReader constructor when new value of input change', ()=>{

    // todo make this work !!!!
    div = element[0];
    div.files = [
      {
        name: 'test.png'
      }
    ];
    //div.dispatchEvent(new CustomEvent('change'));

    scope.onNewFiles({
      target: {
        files: [{
          name: 'test.png'
        }]
      }
    });

    scope.$digest();
    expect(windowMock.FileReader).toHaveBeenCalled();
  })
});

