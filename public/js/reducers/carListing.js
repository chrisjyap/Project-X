import Immutable from 'immutable';
import Constants from '../constants/CarListingConstants';

let initialState = {
  isInitializing: true,
  cars: [],
  makeFilter: '',
  histogram: {},
  max: 0,
  min: 0,
  priceFilter: {
    max: 0,
    min: 0
  }
};

export default (state = Immutable.fromJS(initialState), action) => {
  switch(action.type){
    case Constants.INITIALIZE:
      return state.merge({
        isInitializing: false,
        cars: action.cars,
        histogram: action.histogram,
        max: action.max,
        min: action.min,
        priceFilter: {
          max: action.max,
          min: action.min
        }
      });
    case Constants.UPDATE_MAKE:
      return state.set('makeFilter', action.makeFilter);
    case Constants.UPDATE_SLIDER:
      return state.set('priceFilter', action.priceFilter);
    default:
      return state;
  }
}
