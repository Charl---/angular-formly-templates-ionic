export default ngModule => {
  ngModule.config(addRadioType);

  const template = `<ion-radio ng-repeat="(key, option) in ::to.options"
                                 ng-value="option[to.valueProp || 'value']"
                                 ng-model="model[options.key]"
                                 icon="{{::to.icon}}">
                        {{::option.title}}
                      </ion-radio>`;

  function addRadioType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'radio',
      template,
      wrapper: ['ionList'],
      apiCheck: check => ({
        templateOptions: {
          options: check.arrayOf(check.object),
          labelProp: check.string.optional,
          valueProp: check.string.optional,
          icon: check.string.optional
        }
      })
    })
  }
}
