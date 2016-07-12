import Immutable from 'immutable';
import Constants from '../constants/CarListingConstants';

let initialState = {
  isInitializing : false,
  inputValue: 'Redux!'
};

export default (state = Immutable.fromJS(initialState), action) => {
  switch(action.type){
    case Constants.START_INITIALIZE:
      return state.set('isInitializing', true);
    case Constants.FINISH_INITIALIZE:
      return state.set('isInitializing', false);
    case Constants.UPDATE_INPUT:
      return state.set('inputValue', action.value);
    default:
      return state;
  }
}
