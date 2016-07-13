import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/CarListingActions';
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
    return (
      <section className={styles.mainApp}>
        <h2> App Page </h2>
        <hr/>
        <CarGrid
          cars={carListing.cars}
        />
      </section>
    );
  }
}

export default connect( state => {
  return {
    carListing: state.carListing.toJS()
  };
})(CarListPage);
