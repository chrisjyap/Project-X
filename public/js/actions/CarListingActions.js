import Constants from '../constants/CarListingConstants';

export const startInitialize = () => ({
  type: Constants.START_INITIALIZE
});

export const finishInitialize = () => ({
  type: Constants.FINISH_INITIALIZE
});

export const onInputChange = (e) => ({
  type: Constants.UPDATE_INPUT,
  value: e.target.value
});
