import { themes } from '../config'

export default ngModule => {
  ngModule.config(addInputType);

  const template = `<i class="icon" ng-if="::to.iconLeft" ng-class="::to.iconLeft"></i>
                      <input type="range" ng-class="{{ to.theme }}" ng-model="model[options.key]"/>
                    <i class="icon" ng-if="::to.iconRight" ng-class="::to.iconRight"></i>`;

  function addInputType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'range',
      template,
      wrapper: ['ionInput'],
      apiCheck: check => ({
        templateOptions: {
          theme: check.oneOf(themes),
          iconLeft: check.string.optional,
          iconRight: check.string.optional
        }
      })
    })
  }
}
