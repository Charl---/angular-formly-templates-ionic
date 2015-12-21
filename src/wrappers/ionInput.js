export default ngModule => {
  ngModule.config(addWrappers);

  const template = `<ion-input class="item {{ to.inputClass }}"
                               ng-class="{ 'has-error' : options.formControl.$invalid,
                                           'is-valid' : options.formControl.$valid}">
                      <i ng-if="::to.icon" class="icon" ng-class="::to.icon"></i>
                      <ion-label ng-if="::to.label" ng-bind="::to.label"></ion-label>
                      <formly-transclude></formly-transclude>
                    </ion-input>`;

  function addWrappers(formlyConfigProvider) {
    formlyConfigProvider.setWrapper([
      {
        name: 'ionInput',
        template,
        apiCheck: check => ({
          templateOptions: {
            inputClass: check.string.optional,
            icon: check.string.optional,
            label: check.string.optional
          }
        })
      }
    ])
  }
}
