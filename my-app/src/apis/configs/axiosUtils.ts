type CancelApiObject = {
  [key: string]: any;
};

type CancellationControllerObject = {
  controller: undefined | AbortController;
};

export function defineCancelApiObject(apiObject: any) {
  const cancelApiObject: CancelApiObject = {};

  Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
    const cancellationControllerObject: CancellationControllerObject = {
      controller: undefined,
    };

    cancelApiObject[apiPropertyName] = {
      handleRequestCancellation: () => {
        if (cancellationControllerObject.controller) {
          cancellationControllerObject.controller.abort();
        }

        cancellationControllerObject.controller = new AbortController();

        return cancellationControllerObject.controller;
      },
    };
  });

  return cancelApiObject;
}
