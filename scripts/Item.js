/* global $, cuid, store */


const Item = (function(){
  
  const validateName = name => {
    if(name === '') {
      throw new TypeError('Name doesnt exist');
    }
  };

  const create = name => {
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  };

  return {
    validateName: validateName,
    create: create
  };

}()
);