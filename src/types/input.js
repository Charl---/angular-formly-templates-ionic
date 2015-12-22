export default ngModule => {
  ngModule.config(addInputType);

  const template = `<input type="{{::to.type}}" ng-model="model[options.key]"/>`;

  function addInputType(formlyConfigProvider, inputTypes) {
    formlyConfigProvider.setType({
      name: 'input',
      template,
      wrapper: ['ionInput'],
      apiCheck: check => ({
        templateOptions: {
          type: check.oneOf(inputTypes)
        }
      })
    })
  }
}
