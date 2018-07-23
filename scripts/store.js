/* global $, cuid, Item */

// eslint-disable-next-line no-unused-vars

const store = (function() {

  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';

  let findById = function(id) {
    this.items.find(item => item.id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  };

  const findAndToggleChecked = function(id) {
    let foundItem = this.items.findById(id);  
    console.log(foundItem);
    foundItem.checked = !foundItem.checked; // this is wrong
  };

  const findAndUpdateName = function(id, newName) {
    try{
      Item.validateName(newName);
      findById(id).addItem(newName);
    } catch(error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  };

  const findAndDelete = function(id) {
    const itemIndex = this.items.findById(id); 
    this.items.splice(itemIndex);

    // this.items.filter(item => item.id === id);
   
  };


  return {
    items: items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };

}() 
);