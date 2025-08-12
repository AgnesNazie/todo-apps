import React from "react";
import "../styles/taskList.css";

function TaskList({ tasks, onDelete }) {
  return (
    <div>
      {tasks.length === 0 && <p className="text-muted">No tasks found.</p>}
      {tasks.map((task) => (
        <div key={task.id} className="card task-card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="card-title">{task.title}</h5>
                {task.assignedTo && <p className="mb-1"><strong>Assigned To:</strong> {task.assignedTo}</p>}
                {task.dueDate && <p className="mb-1"><strong>Due Date:</strong> {task.dueDate}</p>}
                {task.description && <p>{task.description}</p>}
                {task.attachment && (
                  <p>
                    <strong>Attachment:</strong>{" "}
                    <a
                      href={URL.createObjectURL(task.attachment)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {task.attachment.name}
                    </a>
                  </p>
                )}
              </div>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

