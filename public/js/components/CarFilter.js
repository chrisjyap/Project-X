import React from 'react';
import {FormControl} from 'react-bootstrap';

import 'react-select/dist/react-select.css';

export default class extends React.Component {
  constructor () {
    super();
  }

  render () {
    const {makeFilter, max, min} = this.props;
    return (
      <section>
        <FormControl
          value={makeFilter}
          placeholder='Filter by Make'
          onChange={this.props.onMakeInputChange.bind(this)}
        />
      </section>
    );
  }
}
