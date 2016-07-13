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
    let filteredCars = [];
    if(carListing.makeFilter.length > 0)
      carListing.cars.map(car => {
        let name = car.name.split(' ');
        if(carListing.makeFilter.includes(name[1])) filteredCars.push(car);
      });
    else filteredCars = carListing.cars;

    return (
      <section className={styles.mainApp}>
        <CarFilter
          make={carListing.make}
          makeFilter={carListing.makeFilter}
          max={carListing.max}
          min={carListing.min}
          onSelectMakeChange={this.actions.updateMakeFilter.bind(this)}
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
