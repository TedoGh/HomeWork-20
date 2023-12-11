import { useRef } from "react";

const UserTodo = ({
  onFormSubmit,
  taskTime,
  taskName,
  firstName,
  lastName,
}) => {
  const taskTimeRef = useRef();
  const taskNameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      taskTimeRef.current &&
      taskNameRef.current &&
      firstNameRef.current &&
      lastNameRef.current
    ) {
      onFormSubmit(
        taskTimeRef.current.value,
        taskNameRef.current.value,
        firstNameRef.current.value,
        lastNameRef.current.value
      );
    } else {
      console.log("please fill all the information");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="taskTime"
        ref={taskTimeRef}
        defaultValue={taskTime}
      />
      <input
        type="text"
        placeholder="taskName"
        ref={taskNameRef}
        defaultValue={taskName}
      />
      <input
        type="text"
        placeholder="firstName"
        ref={firstNameRef}
        defaultValue={firstName}
      />
      <input
        type="text"
        placeholder="lastName"
        ref={lastNameRef}
        defaultValue={lastName}
      />
      <button>Submit</button>
    </form>
  );
};

export default UserTodo;
