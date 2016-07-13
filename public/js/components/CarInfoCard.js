import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

import styles from '../../sass/components/_CarInfoCard.scss';

export default class extends React.Component {
  constructor () {
    super();
    this.state = {
      hover: false
    };
  }

  onHoverToggle() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render () {
    const {car} = this.props;
    return (
      <div
        className={styles.carInfoCardContainer}
        onMouseEnter={this.onHoverToggle.bind(this)}
        onMouseLeave={this.onHoverToggle.bind(this)}
      >
        <Card>
          <CardMedia
            overlay={(
              <div className='car-info-overlay'>
                <div className='overlay-header'>
                  <span>{car.name}</span>
                  <span>{`$${car.price.toLocaleString()}`}</span>
                </div>
                {
                  this.state.hover ?
                    <span className='overlay-header'>{`Mileage:${car.mileage.toLocaleString()} · Type: ${car.bodyType}`}</span>
                  :
                    null
                }
              </div>
            )}
          >
            <img src={car.image} />
          </CardMedia>
        </Card>
      </div>
    );
  }
}
