export const logger = store => next => action => {
    if (typeof action === 'function') {
      // If the action is a function, execute it with the dispatch and getState functions
      return action(store.dispatch, store.getState);
    }
  
    // If the action is a plain object, proceed with the middleware chain
    console.log('dispatch', store.getState());
    const result = next(action);
    console.log('after dispatch', store.getState());
    
    return result;
  };
  