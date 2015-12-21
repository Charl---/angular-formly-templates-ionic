import angular from './angular-fix'
import apiCheck from 'api-check'

const ngModuleName = 'formlyIonic';

const ngModule = angular.module(ngModuleName, [
  'formly'
]);

//todo do something for this regex
const wrappers = require.context('./wrappers', true, /^[^.]+$|\.(?!(spec.js)$)([^.js]+$)/);
const types = require.context('./types', true, /^[^.]+$|\.(?!(spec.js)$)([^.js]+$)/);
const directives = require.context('./directives', true, /^[^.]+$|\.(?!(spec.js)$)([^.js]+$)/);

ngModule.constant(
  'formlyIonicApiCheck',
  apiCheck({
    output: {
      prefix: 'angular-formly-ionic'
    }
  })
);

ngModule.constant(
  'inputTypes', [
    'text',
    'email',
    'search',
    'number',
    'url',
    'tel',
    'color',
    'date',
    'datetime',
    'time',
    'month',
    'week'
  ]
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
