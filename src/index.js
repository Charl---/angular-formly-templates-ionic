import angular from './angular-fix'
import apiCheck from 'api-check'

const ngModuleName = 'formlyIonic';

const ngModule = angular.module(ngModuleName, [
  'formly',
  'ngMessages'
]);

const wrappers = require.context('./wrappers', true, /.js$/);
const types = require.context('./types', true, /.js$/);
const directives = require.context('./directives', true, /.js$/);

ngModule.constant(
  'formlyIonicApiCheck',
  apiCheck({
    output: {
      prefix: 'angular-formly-ionic'
    }
  })
);

ngModule.constant('formlyIonicVersion', VERSION);

requireAll(wrappers)
  .forEach(wrapperFactory =>{
    wrapperFactory(ngModule)
  });

requireAll(types)
  .forEach(typeFactory =>{
    typeFactory(ngModule)
  });

requireAll(directives)
    .forEach(directiveFactory =>{
      directiveFactory(ngModule)
    });


function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

export default ngModuleName
