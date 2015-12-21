export default ngModule => {
  ngModule.config(addWrappers);

  const template = `<ion-list ng-class="to.listClass">
                      <formly-transclude></formly-transclude>
                    </ion-list>`;

  function addWrappers(formlyConfigProvider) {
    formlyConfigProvider.setWrapper([
      {
        name: 'ionList',
        template,
        apiCheck: check => ({
          templateOptions: {
            listClass: check.string.optional
          }
        })
      }
    ])
  }
}
