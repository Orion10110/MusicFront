export const actionEditInfo = (userInformation) => ({
  type: 'EDIT_INFO',
  user: {
    ...userInformation
  }
});
