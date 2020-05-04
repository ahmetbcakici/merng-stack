import React, {Component} from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import './style/App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-7">
            <br />
            <h1 className="text-center">Ahmet's Reading List</h1>
            <br/>
            <BookList />
            <AddBook />
          </div>
          <div
            className="col-5 vh-100 text-white p-3"
            style={{background: '#AD1457'}}
          >
            <p>No books selected..</p>
          </div>
        </div>
      </div>
    );
  }
}
