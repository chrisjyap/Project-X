import Immutable from 'immutable';
import Constants from '../constants/CarListingConstants';

let initialState = {
  cars: [],
  max: 0,
  min: 0
};

export default (state = Immutable.fromJS(initialState), action) => {
  switch(action.type){
    case Constants.INITIALIZE:
      return state.merge({
        cars: action.cars,
        max: action.max,
        min: action.min
      });
    default:
      return state;
  }
}
