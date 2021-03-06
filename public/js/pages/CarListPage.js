import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/CarListingActions';
import CarFilter from '../components/CarFilter';
import CarGrid from '../components/CarGrid';
import styles from '../../sass/main.scss';

class CarListPage extends React.Component {
  constructor (props) {
    super(props);
    this.actions = bindActionCreators(actions, this.props.dispatch);
  }

  componentDidMount () {
    this.actions.initialize();
  }

  render () {
    const {carListing} = this.props;
    if(carListing.isInitializing) return <div> Initializing...</div>;
    let filteredCars = [], prices= [];
    let regex = new RegExp(carListing.makeFilter, 'i');
    carListing.cars.map(car => {
      if(car.price >= carListing.priceFilter.min && car.price <= carListing.priceFilter.max) {
        if(carListing.makeFilter) {
          let name = car.name.split(' ');
          if(regex.test(name[1])) filteredCars.push(car); //assuming make is on second index
        }
        else filteredCars.push(car);
      }
    });
    for(let key in carListing.histogram) prices.push(carListing.histogram[key]);
    return (
      <section className={styles.mainApp}>
        <CarFilter
          makeFilter={carListing.makeFilter}
          max={carListing.max}
          min={carListing.min}
          prices={prices}
          priceFilter={carListing.priceFilter}
          onMakeInputChange={this.actions.updateMakeFilter.bind(this)}
          onSliderChange={this.actions.updateSliderFilter.bind(this)}
        />
        <hr/>
        <CarGrid cars={filteredCars} />
      </section>
    );
  }
}

export default connect( state => {
  return {
    carListing: state.carListing.toJS()
  };
})(CarListPage);
