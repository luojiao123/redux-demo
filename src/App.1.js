import React, { Component } from 'react';
import Counter from './reducer'
import {createStore} from 'redux'
import './App.css';

let store = createStore(Counter);
console.log(store.getState())
class App extends Component {
	leoClick(){
		store.dispatch({type:'leo'});
	}
	addClick(){
		store.dispatch({type:'add'});
	}
  render() {
    return (
      <div className="App">
				<input type="button" value="-" onClick={this.leoClick.bind(this)} />
				<span>{store.getState()}</span>
				<input type="button" value="+" onClick={this.addClick.bind(this)} />
      </div>
    );
  }
}

export {App,store};
