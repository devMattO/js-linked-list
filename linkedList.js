/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    var head = null;
    var tail = null;
    var newNode = {};
    var nodeIndex = 0;

  function _getHead(){
    return head;
  }

  function _getTail(){
    return tail;
  }

  function _add(value){
    newNode = {
      'nodeIndex': nodeIndex++,
      'value': value,
      next: null
    };
    return newNode;
  }

  function _get(Number){

  }

  function _remove(Number){

  }

  function _insert(Value, Number){
    if (true) {}
  }

  return {
    getHead: _getHead,
    getTail: _getTail,
    add: _add,
    get: _get,
    remove: _remove,
    insert: _insert
  };
};

linkedListModule();
