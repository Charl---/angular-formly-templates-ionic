export default ngModule => {
  ngModule.config(addRadioType);

  const template = `<ion-toggle ng-model="model[options.key]" toggle-class="'toggle-'+{{to.theme}}">
                      {{ ::to.label }}
                    </ion-toggle>`;

  function addRadioType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'toggle',
      template,
      defaultOptions: {
        noFormControl: false
      },
      apiCheck: check => ({
        templateOptions: {
          label: check.string,
          theme: check.string.optional
        }
      })
    })
  }
}
