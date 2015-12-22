export default ngModule =>{

  ngModule.directive('fileReader', fileReaderDirective);

  function fileReaderDirective($q, $window) {
    const slice = Array.prototype.slice;

    return {
      restrict: 'A',
      require: '?ngModel',
      link: (scope, element, attrs, ngModel)=> {
        if (!ngModel) return;

        ngModel.$render = function() {};

        scope.onNewFiles = onNewFiles;

        element.bind('change', onNewFiles);

        scope.$on('$destroy', ()=>{
          element.unbind('change', onNewFiles)
        });

        function onNewFiles(e){
          const element = e.target;

          return $q.all(slice.call(element.files, 0).map(readFile))
            .then(function(values) {
              if (element.multiple){
                ngModel.$setViewValue(values);
              } else {
                ngModel.$setViewValue(values.length ? values[0] : null);
              }
            });
        }

        function readFile(file) {
          return $q((resolve, reject)=>{
            const reader = new $window.FileReader();
            reader.addEventListener('load', (e)=>{
              resolve(e.target.result);
            });

            reader.addEventListener('error',(e)=> {
              reject(e);
            });

            reader.readAsDataURL(file);
          });
        }
      }
    };
  }
}
