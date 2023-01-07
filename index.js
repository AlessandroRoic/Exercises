'use strict';

(() => {
  const queryTagSelector = (target) => {
    const root = document.body;
    return depthFistSearchTag(target, root)
  };

  const depthFistSearchTag = (target, currentNode) => {
    if (currentNode.tagName === target.toUpperCase()) {
      return currentNode;
    }

    for (let node of currentNode.childNodes) {
      const result = depthFistSearchTag(target, node);
      if (result) return result;
    }

    return null;
  };

  console.log(queryTagSelector('div'));
})();
