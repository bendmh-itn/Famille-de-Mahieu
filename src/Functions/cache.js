var userData = {};

export const getUserData = () => {
  return userData;
};

export const copyUserData = (id, data) => {
  userData = {};
  userData.id = id;
  userData.data = data;
};
