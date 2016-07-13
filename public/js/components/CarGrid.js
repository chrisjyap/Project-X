import React from 'react';
import CarInfoCard from './CarInfoCard';

import styles from '../../sass/components/_CarGrid.scss';

export default class extends React.Component {
  constructor () {
    super();
  }

  render () {
    const {cars} = this.props;
    return (
      <section className={styles.carGridContainer}>
        {
          cars.map((car, i) => (
            <CarInfoCard
              key={i}
              car={car}
            />
          ))
        }
      </section>
    );
  }
}
