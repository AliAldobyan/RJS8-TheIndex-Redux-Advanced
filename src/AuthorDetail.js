import React, { useState, useEffect } from "react";
import axios from "axios";
import {connect} from "react-redux";

// Components
import BookTable from "./BookTable";
import Loading from "./Loading";

//Route
import { useParams } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

const AuthorDetail = props => {
  //const books = props.books.filter((book) => props.authors.filter((author) => book.authors.includes(author.id)) )
  //const [author, setAuthor] = useState(null);
  
  const { authorID } = useParams();
  console.log(props.authors)
  const author = props.authors.find((author) => author.id === +authorID)
  const books = props.books.filter((book) => author.books.includes(book.id))
  // useEffect(() => {
  //   const getAuthor = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await instance.get(`/api/authors/${authorID}`);
  //       const authorData = res.data;
  //       //setAuthor(authorData);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getAuthor(authorID);
  // }, [authorID]);

    const authorName = `${author.first_name} ${author.last_name}`;
    return (
      <div className="author">
        <div>
          <h3>{authorName}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={authorName}
          />
        </div>
        <BookTable books={books} />
      </div>
    );
  
};
const mapStateToProps = state =>{
  return {  
    authors: state.authorsState.authors,
    books: state.booksState.books
  }
}
export default connect(mapStateToProps)(AuthorDetail);
