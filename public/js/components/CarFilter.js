import React from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

export default class extends React.Component {
  constructor () {
    super();
  }

  render () {
    const {make, makeFilter, max, min} = this.props;
    const makeOptions = make.map(m=>({
      value: m,
      label: m
    }));
    return (
      <section>
        <Select
          value={makeFilter}
          multi={true}
          options={makeOptions}
          placeholder='Filter by make'
          onChange={this.props.onSelectMakeChange.bind(this)}
        />
      </section>
    );
  }
}
