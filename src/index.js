import angular from './angular-fix'
import apiCheck from 'api-check'

const ngModuleName = 'formlyIonic';

const ngModule = angular.module(ngModuleName, [
  'formly'
]);

const wrappers = require.context('./wrappers', false, /.js/);
const types = require.context('./types', false, /.js/);
const directives = require.context('./directives', false, /.js/);

if(process.env.NODE_ENV === 'test'){
  requireAll(require.context('./directives/tests', false, /.spec.js/));
  requireAll(require.context('./types/tests', false, /.spec.js/));
}

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
