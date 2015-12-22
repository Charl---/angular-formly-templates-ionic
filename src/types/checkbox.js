export default ngModule => {
  ngModule.config(addCheckboxType);

  const template = `<ion-checkbox ng-model="model[options.key]" ng-checked="to.checked">
                      {{ to.label }}
                    </ion-checkbox>`;

  function addCheckboxType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'checkbox',
      template,
      wrapper: [],
      apiCheck: check => ({
        templateOptions: {
          label: check.string.optional,
          checked: check.bool.optional
        }
      })
    })
  }
}
