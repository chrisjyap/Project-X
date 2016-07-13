import Constants from '../constants/CarListingConstants';
import cars from '../../../cars.json';

export const initialize = () => {
  return (dispatch, state) => {
    let min = Infinity, max= -Infinity;
    cars.map(car => {
      if(car.price < min) min = car.price;
      else if(car.price > max) max = car.price;
    });
    dispatch({
      type: Constants.INITIALIZE,
      cars,
      max,
      min
    });
  };
};

export const updateMakeFilter = (e) => ({
  type: Constants.UPDATE_MAKE,
  makeFilter: e.target.value
});
