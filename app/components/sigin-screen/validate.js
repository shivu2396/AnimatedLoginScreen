import { validate } from 'validate.js';
import { isEmpty } from 'lodash';

var constraints = {
  name: {
    presence: {
      allowEmpty: false,
    },
  },
  length: {
    minimum: 40,
    maximum: 50,
    message: 'Not a valid',
  },
  format: {
    pattern: '[a-zA-Z]+',
    message: 'Not a valid',
  },
  email: {
    presence: {
      allowEmpty: false,
    },
    email: true,
  },
  password: {
    presence: {
      message: 'Cannot be blank.',
    },
    length: {
      minimum: 9,
      messsage: 'must be at least 9 characters',
    },
    format: {
      pattern: '[a-z0-9A-Z]+',
      message: '^Not a valid',
    },
  },
  confirm: {
    presence: { allowEmpty: false },
    equality: {
      attribute: 'password',
      messsage: 'Not match',
    },
  },
  // confirm: {
  //   require: true,
  //   minlength: 6,
  //   equalTo: 'password',
  // },
};

const Validation = (field, value, extra = {}) => {
  console.log('field, value', field, value);
  let object = new Object();
  object[field] = value;

  if (!isEmpty(extra)) {
    let tempkey = Object.keys(extra);
    let tmpKeyValue = tempkey[0];
    let tempvalue = Object.values(extra);
    let tmpValue = tempvalue[0];
    object[tmpKeyValue] = tmpValue;
    console.log('this is final object with confirm password', object);
  }

  console.log('this is forgot password', object, extra);

  let constraint = new Object();
  constraint[field] = constraints[field];
  console.log(object, constraint);
  const result = validate(object, constraint); //
  console.log('dggddbbbb', result);
  //   if (value != '' && value != null) {
  //     //if null value it will return with the presence validation
  //     emailerror = validate(object, constraint);
  //   }

  // If there is an error message, return it!
  if (result) {
    // Return only the field error message if there are multiple
    return result[field][0];
    console.log(email);
  }
  return null;
};
export default Validation;
