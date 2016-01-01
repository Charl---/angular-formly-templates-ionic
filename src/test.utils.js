export function initFields(type){
  return [
    {
      type: type,
      key: 'testKey',
      templateOptions: {}
    }
  ]
}

export function compileDirective(scope, $compile, type){
  spyOn(console,'warn').and.callThrough();
  scope.model = {};
  scope.options = {};
  scope.fields = initFields(type);
  return $compile('<formly-form model="model" fields="fields" options="options" form="form"></formly-form>')(scope);
}

export function customEventPolyfill(){
  const CustomEvent = function(event, params) {
    params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
    const evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}
