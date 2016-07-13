import Constants from '../constants/CarListingConstants';
import cars from '../../../cars.json';

export const initialize = () => {
  return (dispatch, state) => {
    let min = Infinity, max= -Infinity;
    let histogram = {};
    cars.map(car => {
      if(car.price < min) min = car.price;
      else if(car.price > max) max = car.price;
    });
    let minVal = Math.round(min/1000)*1000;
    let maxVal = Math.round(max/1000)*1000;
    for(let i = minVal; i<= maxVal; i+=1000) histogram[i] = 0; //rounds price to nearest thousand for cleaner graph
    cars.map(car => {
      let value = Math.round(car.price/1000)*1000;
      histogram[value] = histogram[value] += 1;
    });
    dispatch({
      type: Constants.INITIALIZE,
      cars,
      histogram,
      max,
      min
    });
  };
};

export const updateMakeFilter = (e) => ({
  type: Constants.UPDATE_MAKE,
  makeFilter: e.target.value
});

export const updateSliderFilter = (data) => ({
  type: Constants.UPDATE_SLIDER,
  priceFilter: {
    min: data.values[0],
    max: data.values[1]
  }
});
