import React, {useState} from 'react';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {GET_AUTHORS, ADD_BOOK, GET_BOOKS} from '../GraphqlQUERY/queries';
import {Button, Input, Label} from 'reactstrap';
import '../style/AddBook.css';

export default function AddBook() {
  const [bookName, setBookName] = useState('');
  const [bookGenre, setBookGenre] = useState('');
  const [addBook] = useMutation(ADD_BOOK);
  const {loading, error, data} = useQuery(GET_AUTHORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div id="add-book" className="bg-white">
      <Input
        type="text"
        placeholder="Name"
        bsSize="sm"
        className="w-75"
        value={bookName}
        onChange={({target}) => setBookName(target.value)}
      />
      <br />
      <Input
        type="text"
        placeholder="Genre"
        bsSize="sm"
        className="w-75"
        value={bookGenre}
        onChange={({target}) => setBookGenre(target.value)}
      />
      <Button
        color="danger"
        onClick={() => {
          addBook({variables: {name: bookName, genre: bookGenre}});
        }}
      >
        Add
      </Button>
      <Label for="selectAuthor">Select</Label>
      <Input type="select" id="selectAuthor">
        {data.authors.map((author) => (
          <option key={author.id}>{author.name}</option>
        ))}
      </Input>
    </div>
  );
}
