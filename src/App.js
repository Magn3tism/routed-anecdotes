import { useState } from "react";
import { Routes, Route, Link, useMatch } from "react-router-dom";

import AnecdoteList, { Anecdote } from "./components/anecdotes";
import About from "./components/about";
import Footer from "./components/footer";
import CreateNew from "./components/createNew";
import Notification from "./components/notification";

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);
  const [notification, setNotification] = useState("");

  const match = useMatch("/anecdotes/:id");
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : null;

  let padding = {
    padding: 5,
  };

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  return (
    <>
      <Notification notification={notification} />
      <h1>Software anecdotes</h1>
      <div>
        <Link style={padding} to="/">
          Anecdotes
        </Link>
        <Link style={padding} to="/create">
          Create New
        </Link>
        <Link style={padding} to="/about">
          About
        </Link>
      </div>

      <Routes>
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={anecdote} />}
        />
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route
          path="/create"
          element={
            <CreateNew addNew={addNew} notificationSetter={setNotification} />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
