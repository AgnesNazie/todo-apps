import React from "react";

function TodoItem({ todo, assignedTo, onToggleTodo, onDeleteTodo }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </span>
        {assignedTo && (
          <small className="text-muted ms-2">(Assigned to: {assignedTo})</small>
        )}
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
