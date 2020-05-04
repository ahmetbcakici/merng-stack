import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_BOOKS} from '../GraphqlQUERY/queries';
import { Button } from 'reactstrap';

export default function BookList() {
  const {loading, error, data} = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({name, genre}, index) => (
    <div id="book-list" key={index} style={{display: 'inline-block',marginInline:'15px',marginBottom:'20px'}}>
      {/* <span style={{padding: '10px', background: '#ECECEC'}}></span> */}
      <Button outline color="danger">{name}</Button>
    </div>
  ));
}
