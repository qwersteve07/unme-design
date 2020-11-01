export const createReducer = (actionMap, initState) => {
  return (state, action) => {
    const { type, payload } = action;
    const actionHandler = actionMap[type];
    return actionHandler ? actionHandler(state, payload) : initState;
  };
};
