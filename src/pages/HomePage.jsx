import { useLanguageContext } from "../contexts/LanguageContext";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { language } = useLanguageContext();
  const { response, loading, error, resendReqeust } = useFetch({
    url: "api/v1/todos",
    method: "GET",
  });
  const { sendRequest } = useRequest({ method: "DELETE" });
  const userTodo = response?.items.map((todo) => {
    return {
      taskTime: todo.taskTime,
      taskName: todo.taskName,
      firstName: todo.firstName,
      lastName: todo.lastName,
      id: todo._uuid,
    };
  });

  const onDelete = (todoId) => {
    sendRequest(null, `/api/v1/todos/${todoId}`).then(() => resendReqeust());
  };

  if (loading) return <p>Loading ... </p>;
  if (error) return <p>error {error}</p>;
  return (
    <div className="App">
      {userTodo?.map((todo) => (
        <div key={todo.id} style={{ border: "1px solid gray" }}>
          <h3>Task Time: {todo.taskTime}</h3>
          <h3>Task Name: {todo.taskName}</h3>
          <h3>User First Name: {todo.firstName}</h3>
          <h3>User Last Name: {todo.lastName}</h3>
          <Link to={`/update/${todo.id}`}>Edit</Link>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
          <p>current Language is {language}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
