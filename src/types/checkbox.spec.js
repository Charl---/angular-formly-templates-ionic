/* eslint no-console:0 */
import angular from '../angular-fix'

describe('checkbox type', ()=>{
  let scope;

  beforeEach(angular.mock.module('formlyIonic'));

  beforeEach(angular.mock.inject(($compile, $rootScope)=>{
    scope = $rootScope.$new();
    $compile('<formly-form model="model" fields="fields" options="options" form="form"></formly-form>')(scope);
    spyOn(console,'warn').and.callThrough();
    scope.model = {};
    scope.options = {};
  }));

  it('should be ok', ()=>{
    scope.fields =  [{
      type: 'checkbox',
      key: 'myCheckbox',
      templateOptions: {
        label: 'myCheckbox'
      }
    }];
    scope.$digest();
    expect(console.warn).not.toHaveBeenCalled()
  });

  it('should log some warn when bad label type', ()=>{
    scope.fields =  [{
      type: 'checkbox',
      key: 'myCheckbox',
      templateOptions: {
        label: 3
      }
    }];
    scope.$digest();
    expect(console.warn).toHaveBeenCalled()
  });

  it('should log some warn when no label specified', ()=>{
    scope.fields =  [{
      type: 'checkbox',
      key: 'myCheckbox'
    }];
    scope.$digest();
    expect(console.warn).toHaveBeenCalled()
  })

});
