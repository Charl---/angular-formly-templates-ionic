export default ngModule =>{
  ngModule.config(addFileType);

  const template = `<input type="file" ng-model="model[options.key]" accept="{{ ::to.accept }}"  file-reader/>`;

  function addFileType(formlyConfigProvider){
    formlyConfigProvider.setType({
      name: 'file',
      template,
      wrapper: ['ionInput'],
      apiCheck: check => ({
        templateOptions: {
          accept: check.string.optional
        }
      })
    })
  }
}
