/* eslint no-console:0 */
import angular from '../angular-fix'
import { compileDirective } from '../test.utils'

describe('file type', ()=>{
  let scope;

  beforeEach(angular.mock.module('formlyIonic'));

  beforeEach(angular.mock.inject(($compile, $rootScope)=>{
    scope = $rootScope.$new();
    compileDirective(scope,$compile,'file');
  }));

  it('should be ok when no accept property defined', ()=>{
    scope.$digest();
    expect(console.warn).not.toHaveBeenCalled();
  });

  it('should log some warn when accept property is a number', ()=>{
    scope.fields[0].templateOptions.accept = 4;
    scope.$digest();
    expect(console.warn).toHaveBeenCalled()
  });

  it('should log some warn when accept property is a boolean', ()=>{
    scope.fields[0].templateOptions.accept = false;
    scope.$digest();
    expect(console.warn).toHaveBeenCalled()
  });
});
