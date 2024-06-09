import { validateForms } from './../functions/validate-forms.js';
const checks = [
  {
    selector: ".input-check",
    errorMessage: "Выберите чекбоксы",
  }
];
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
      },
      {
        rule: 'email',
      },
    ]
  },
  {
    ruleSelector: '.input-company',
    rules: [
      {
        rule: 'required',
      },
    ]
  },
];

const afterForm = () => {
  alert('Спасибо за заявку! Свяжемся с вами в ближейшее время.')
};

validateForms('.form', rules1, checks, afterForm);
