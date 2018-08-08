import React, { Component } from 'react';

class Counter extends Component {
  render() {
		let {value,onAdd,onLeo} = this.props;
    return (
      <div>
				<input type="button" value="-" onClick={onLeo} />
				<span>{value}</span>
				<input type="button" value="+" onClick={onAdd} />
      </div>
    );
  }
}

export default Counter;