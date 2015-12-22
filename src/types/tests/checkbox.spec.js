/* eslint no-console:0 */
import angular from '../../angular-fix'
import { compileDirective } from '../../test.utils'

describe('checkbox type', ()=>{
  let scope;

  beforeEach(angular.mock.module('formlyIonic'));

  beforeEach(angular.mock.inject(($compile, $rootScope)=>{
    scope = $rootScope.$new();
    compileDirective(scope, $compile, 'checkbox');
  }));

  it('should be ok when label is a string', ()=>{
    scope.fields[0].templateOptions.label = 'myCheckbox';
    scope.$digest();
    expect(console.warn).not.toHaveBeenCalled()
  });

  it('should log some warn when label is a number', ()=>{
    scope.fields[0].templateOptions.label = 3;
    scope.$digest();
    expect(console.warn).toHaveBeenCalled()
  });

  it('should log some warn when label is a boolean', ()=>{
    scope.fields[0].templateOptions.label = false;
    scope.$digest();
    expect(console.warn).toHaveBeenCalled()
  });
});
