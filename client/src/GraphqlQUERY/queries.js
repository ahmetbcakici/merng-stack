import {gql} from 'apollo-boost';

export const GET_BOOKS = gql`
  {
    books {
      name
      genre
    }
  }
`;

export const GET_AUTHORS = gql`
  {
    authors {
      id
      name
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($name: String, $genre: String) {
    addBook(name: $name, genre: $genre) {
      name
    }
  }
`;
