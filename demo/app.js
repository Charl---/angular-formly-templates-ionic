(function (angular) {
  'use strict';

  angular.module('app', ['ionic', 'formly', 'formlyIonic'])

    .controller('MainController', MainController);

  function MainController() {
    var vm = this;

    vm.model = {};
    vm.options = {};

    vm.fields = [
      {
        type: 'file',
        key: 'file',
        templateOptions: {
          label: 'pick me !!!!',
          accept: 'image/*',
          multiple: true
        }
      },
      {
        type: 'checkbox',
        key: 'myCheckbox',
        templateOptions: {
          label: 'myCheckbox'
        }
      },
      {
        type: 'toggle',
        key: 'myToggle',
        templateOptions: {
          inputClass: 'toggle-positive',
          label: 'myToggle',
          theme: 'positive'
        }
      },
      {
        type: 'multiCheckbox',
        key: 'myCheckboxes',
        templateOptions: {
          label: 'myCheckboxes',
          options: [{id: 1, title : "Administrator"}, {id: 2, title : "User"}],
          valueProp: 'id',
          labelProp: 'title'
        }
      },
      {
        type: 'radio',
        key: 'myRadio',
        templateOptions: {
          label: 'myRadio',
          options: [{id: 1, title : "train"}, {id: 2, title : "plane"}],
          valueProp: 'id',
          labelProp: 'travel',
          icon: 'ion-checkmark-round'
        }
      },
      {
        type: 'input',
        key: 'normal',
        templateOptions: {
          label: 'standard input (email)',
          required: true,
          placeholder: 'standard input (email)',
          type: 'email',
          inputClass: 'item-input'
        }
      },
      {
        type: 'input',
        key: 'myIcon',
        templateOptions: {
          inputClass: 'item-input',
          icon: 'ion-person',
          label: 'with icon',
          required: true,
          placeholder: 'with icon',
          type: 'text'
        }
      },
      {
        type: 'input',
        key: 'myFloating',
        templateOptions: {
          label: 'floating label',
          required: true,
          maxlength: 6,
          minlength: 2,
          placeholder: 'floating label',
          type: 'text',
          inputClass: 'item-input item-floating-label'
        }
      },
      {
        type: 'input',
        key: 'myStacked',
        templateOptions: {
          label: 'stacked label',
          required: true,
          placeholder: 'stacked label',
          type: 'tel',
          inputClass: 'item-input item-stacked-label'
        }
      },
      {
        type: 'range',
        key: 'myRange',
        templateOptions: {
          min: 0,
          max: 100,
          step:5,
          iconLeft: 'ion-volume-low',
          iconRight: 'ion-volume-high',
          inputClass: 'range range-positive'
        }
      },
      {
        type: 'input',
        key: 'myDate',
        templateOptions: {
          min: '2012-06-25',
          max: '2015-08-13',
          type: 'date'
        }
      },
      {
        type: 'input',
        key: 'mySearch',
        templateOptions: {
          icon: 'ion-search placeholder-icon',
          type: 'search',
          inputClass: 'item-input'
        }
      },
      {
        type: 'textarea',
        key: 'text',
        templateOptions: {
          placeholder: 'im a textarea',
          rows: 4
        }
      },
      {
        "key": "transportation",
        "type": "select",
        "templateOptions": {
          "inputClass": "item-select",
          "label": "How do you get around in the city",
          "valueProp": "name",
          "options": [
            {
              "name": "Car"
            },
            {
              "name": "Helicopter"
            },
            {
              "name": "Sport Utility Vehicle"
            },
            {
              "name": "Bicycle",
              "group": "low emissions"
            },
            {
              "name": "Skateboard",
              "group": "low emissions"
            },
            {
              "name": "Walk",
              "group": "low emissions"
            },
            {
              "name": "Bus",
              "group": "low emissions"
            },
            {
              "name": "Scooter",
              "group": "low emissions"
            },
            {
              "name": "Train",
              "group": "low emissions"
            },
            {
              "name": "Hot Air Baloon",
              "group": "low emissions"
            }
          ]
        }
      }
    ];

    vm.originalFields = angular.copy(vm.fields);
  }
})(window.angular);
