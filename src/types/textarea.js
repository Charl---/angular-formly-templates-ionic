export default ngModule => {
  ngModule.config(addTextareaType);

  const template = `<textarea style="width:100%" ng-class="::{'no-resize': !to.resize}" ng-model="model[options.key]">
                    </textarea>`;

  function addTextareaType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'textarea',
      template,
      wrapper: ['ionInput'],
      defaultOptions: {
        ngModelAttrs: {
          rows: {attribute: 'rows'}
        }
      },
      apiCheck: check => ({
        templateOptions: {
          rows: check.number.optional,
          resize: check.bool.optional
        }
      })
    })
  }
}
