import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";

const CreateNew = ({ addNew, notificationSetter }) => {
  const naviagte = useNavigate("");

  const { reset: resetContent, ...content } = useField("text");
  const { reset: resetAuthor, ...author } = useField("text");
  const { reset: resetInfo, ...info } = useField("text");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });

    notificationSetter(`A new anecdote ${content.value} has been added`);
    setTimeout(() => {
      notificationSetter("");
    }, 5000);

    naviagte("/");
  };

  const handleReset = () => {
    resetContent();
    resetAuthor();
    resetInfo();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Content
          <input {...content} />
        </div>
        <div>
          Author
          <input {...author} />
        </div>
        <div>
          URL For More Info
          <input {...info} />
        </div>
        <button>Create</button>
        <button onClick={handleReset} type="button">
          Reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
