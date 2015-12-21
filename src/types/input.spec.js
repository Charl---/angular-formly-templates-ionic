/* eslint no-console:0 */
import angular from '../angular-fix'
import { compileDirective } from '../test.utils'

describe('input type', ()=>{
  let scope;

  beforeEach(angular.mock.module('formlyIonic'));

  beforeEach(angular.mock.inject(($compile, $rootScope)=>{
    scope = $rootScope.$new();
    compileDirective(scope,$compile,'input');
  }));

  it('should log some warn when type is not a good one', ()=>{
    scope.fields[0].templateOptions.type = 'wrongType';
    scope.$digest();
    expect(console.warn).toHaveBeenCalled()
  });

  it('should not log some warn when type is a good one', ()=>{
    scope.fields[0].templateOptions.type = 'email';
    scope.$digest();
    expect(console.warn).not.toHaveBeenCalled()
  });
});
