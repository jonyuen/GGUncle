import { database } from '../firebase';



function actionCreator(item) {
  return {
    type: 'UPDATE_CURRENT_ITEM',
    payload: item
  };
}

export default updateCurrentItem = (item) => {
  return function (dispatch, getState) {
    return dispatch(actionCreator(item))
  };
};
