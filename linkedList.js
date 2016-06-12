/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    var head = null;
    var tail = null;
    var node = {};
    var nodeIndex = 0;

  function _getHead(){
    return head;
  }

  function _getTail(){
    return tail;
  }

  function _add(value){
    node = {
      nodeIndex: nodeIndex++,
      value: value,
      next: null
    };
    if (head === null && tail === null) {
      head = node;
      tail = node;
    }else{
      tail.next = node;
      tail = node;
    }
    return node;
  }

  function _get(number){
    var thisNode = head;
    for (var i = 0; i < number; i++) {
      thisNode = thisNode.next;
      if(thisNode === null){
        return false;
      }
    }
    return thisNode;
  }

  function _remove(number){
    var thisNode = head;
    for (var i = 0; i < number; i++) {
      thisNode = thisNode.next;
    }
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
}

