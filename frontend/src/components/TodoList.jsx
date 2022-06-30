import Todo from "./Todo";

const TodoList = (props) => {
  const { todos, setTodos } = props;

  // change one entry of todo
  const setTodo = (id, todo) => {
    for (let i in todos) {
      if (todos[i].id === id) {
        todos[i] = todo;
        setTodos(todos);
      }
    }
  };

  return (
    <>
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            setTodo={(newTodo) => setTodo(todo.id, newTodo)}
            key={todo.id}
          />
        );
      })}
    </>
  );
};

export default TodoList;
