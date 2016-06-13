/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    var head = null;
    var tail = null;
    var node = {};

  function _getHead(){
    return head;
  }

  function _getTail(){
    return tail;
  }

  function _add(value){
    node = {
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
      if(thisNode.next === null){
        return false;
      }
      thisNode = thisNode.next;
    }
    return thisNode;
  }

  function _remove(number){
    var currentNode = _get(number);
    var prevNode = _get(number - 1);
    var nextNode = _get(number + 1);

    if(currentNode === head){
      head = nextNode;
    }else if(currentNode.next === null){
      prevNode.next = null;
      tail = prevNode;
    }else if(currentNode === false){
      return false;
    }
    prevNode.next = nextNode;
  }

  function _insert(value, number){
    var newNode = {
      value: value,
      next: null
    };
    var desiredPlace = _get(number);
    var prevNode = _get(number-1);

    if(desiredPlace === false || number < 0){
      return false;
    }else if(number === 0){
      head = newNode;
      newNode.next = desiredPlace;
    }else if(desiredPlace !== head || desiredPlace !== tail){
      newNode.next = desiredPlace;
      prevNode.next = newNode;
    }
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

