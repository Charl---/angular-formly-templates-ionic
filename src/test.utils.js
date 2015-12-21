/* eslint no-console:0 */
import _ from 'lodash'

export function shouldWarn(match, test) {
  const originalWarn = console.warn;
  let calledArgs;
  console.warn = function() {
    calledArgs = arguments
  };
  test();
  expect(calledArgs, 'expected warning and there was none').to.exist;
  expect(Array.prototype.join.call(calledArgs, ' ')).to.match(match);
  console.warn = originalWarn
}


export function shouldNotWarn(test) {
  const originalWarn = console.warn;
  let calledArgs;
  console.warn = function() {
    calledArgs = arguments
  };
  test();
  if (calledArgs) {
    console.log(calledArgs);
    throw new Error('Expected no warning, but there was one', calledArgs)
  }
  console.warn = originalWarn
}

export function shouldWarnWithLog($log, logArgs, test) {
  /* eslint no-console:0 */
  test();
  expect($log.warn.logs, '$log should have only been called once').to.have.length(1);
  const log = $log.warn.logs[0]
  _.each(logArgs, (arg, index) => {
    if (_.isRegExp(arg)) {
      expect(log[index]).to.match(arg)
    } else {
      expect(log[index]).to.equal(arg)
    }
  })
}

export function customEventPolyfill(){
  const CustomEvent = function(event, params) {
    var evt;
    params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}
