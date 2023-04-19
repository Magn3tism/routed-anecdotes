import { Link } from "react-router-dom";

const AnecdoteList = ({ anecdotes, vote }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
          <div>
            has {anecdote.votes} votes{" "}
            <button
              onClick={() => {
                vote(anecdote.id);
              }}
            >
              Vote
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Anecdote = ({ anecdote }) => (
  <div>
    <h2>{anecdote.content}</h2>
    <h3>by {anecdote.author}</h3>
    <h4>has {anecdote.votes} votes</h4>
  </div>
);

export default AnecdoteList;
export { Anecdote };
