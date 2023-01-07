'use strict';

(() => {
  const cloneDeep = (object) => {
    const clonedObject = {};
    for (const property in object) {
      clonedObject[property] = object[property]
      if (typeof object[property] === 'object' && object[property] !== null) {
        cloneDeep(object[property])
      }
    }
    return clonedObject;
  }

  const x = {
    a: 124,
    b: {
      c: 123,
      d: {
        e: () => {}
      }
    },
    f: {
      g: 'stringa'
    }
  }

  const obj = cloneDeep(x);
  console.log(obj)
})();
