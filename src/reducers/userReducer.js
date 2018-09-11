export const userReducer = (state = [], action) => {
  let addedNewUser;
  let stringedUsers;
  switch (action.type) {
    case 'ADD_USER':
      addedNewUser = [action.user, ...state];
      stringedUsers = JSON.stringify(addedNewUser);
      localStorage.setItem('AllUsers', stringedUsers);
      return addedNewUser;
    case 'GET_LOCAL_STORAGE_USERS':
      return action.users || state;
    default:
      return state;
  }
};
