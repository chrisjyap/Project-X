import React from 'react';
import {FormControl} from 'react-bootstrap';
import Rheostat from 'rheostat';
var MicroBarChart = require('react-micro-bar-chart');

import 'rheostat/css/slider.css';
import 'rheostat/css/slider-horizontal.css';
import styles from '../../sass/components/_CarFilter.scss';

export default class extends React.Component {
  constructor () {
    super();
  }

  render () {
    const {makeFilter, priceFilter, max, min, prices} = this.props;
    return (
      <section className={styles.carFilterContainer}>
        <FormControl
          value={makeFilter}
          placeholder='Filter by Make'
          onChange={this.props.onMakeInputChange.bind(this)}
        />
        <div className='input-slider-container'>
          <MicroBarChart
            width={window.innerWidth- 50} //TODO: find cleaner way to pull width
            hoverColor='rgba(118,118,118,0.5)'
            fillColor='rgba(118,118,118,0.5)'
            data={prices}
          />
          <Rheostat
            min={min}
            max={max}
            values={[priceFilter.min, priceFilter.max]}
            onValuesUpdated={this.props.onSliderChange.bind(this)}
          />
          <div className='label-container'>
            <span>{`$${min.toLocaleString()}`}</span>
            <span>{`$${max.toLocaleString()}`}</span>
          </div>
        </div>
      </section>
    );
  }
}
