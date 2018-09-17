export const completeOrdersReducer = (state=[], action) => {
  let addCompletedOrder;
  let stringedOrder;
  switch (action.type) {
    case 'ADD_COMPLETED_ORDER':
      addCompletedOrder = [action.order, ...state];
      stringedOrder = JSON.stringify(addCompletedOrder);
      localStorage.setItem('AllCompletedOrders', stringedOrder);
      return addCompletedOrder;
    case 'GET_LOCAL_STORAGE_ORDERS':
      return action.orders || state;
    default:
      return state;
  }
};