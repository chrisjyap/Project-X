import Constants from '../constants/CarListingConstants';
import cars from '../../../cars.json';

export const initialize = () => {
  return (dispatch, state) => {
    let min = Infinity, max= -Infinity;
    let makeArr = [];
    cars.map(car => {
      if(car.price < min) min = car.price;
      else if(car.price > max) max = car.price;
      let name = car.name.split(' ');
      if(!makeArr.includes(name[1])) makeArr.push(name[1]); //Assuming make is second element in name;
    });
    dispatch({
      type: Constants.INITIALIZE,
      cars,
      make: makeArr,
      max,
      min
    });
  };
};

export const updateMakeFilter = (makeArr) => ({
  type: Constants.UPDATE_MAKE,
  makeFilter: makeArr ? makeArr.map(item=> item.value) : []
});

export const onInputChange = (e) => ({
  type: Constants.UPDATE_INPUT,
  value: e.target.value
});
