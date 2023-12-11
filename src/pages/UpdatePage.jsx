import { useNavigate, useParams } from "react-router-dom";
import UserTodo from "../components/UserTodo";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const UpdatePage = () => {
  const navigate = useNavigate();
  const { todoId } = useParams();
  const { response, loading, error } = useFetch({
    url: `/api/v1/todos/${todoId}`,
    method: "GET",
  });

  const { sendRequest } = useRequest({
    url: `/api/v1/todos/${todoId}`,
    method: "PUT",
  });
  const onSubmit = (taskTime, taskName, firstName, lastName) => {
    sendRequest({ taskTime, taskName, firstName, lastName })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  if (loading && !response) return <p>Loading . . . </p>;
  if (error || !response) return <p>Something went wrong</p>;

  return (
    <UserTodo
      onFormSubmit={onSubmit}
      taskTime={response.taskTime}
      taskName={response.taskName}
      firstName={response.firstName}
      lastName={response.lastName}
    />
  );
};

export default UpdatePage;
