import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Books from './components/books.js';
import { useState, useEffect } from "react"

const API_URL = "http://localhost:3000/api/v1/books"

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    let mounted = true
    getAPIData().then((items) => {
      if (mounted) {
        setBooks(items)
      }
    })
    return () => (mounted = false)
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <Books books={books} />
    </div>
  );
}

export default App;
