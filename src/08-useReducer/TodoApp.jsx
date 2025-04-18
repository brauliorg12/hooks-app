import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodos();

  return (
    <>
      <h2>
        TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small>{' '}
      </h2>
      <br />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h5>Agregar TODO</h5>
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>

      <hr />
    </>
  );
};
