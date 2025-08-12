import React from "react";
import "../styles/taskForm.css";

function TaskForm({ task, setTask, onSave }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setTask({ ...task, attachment: file });
  };

  return (
    <div className="card shadow-sm task-form-card">
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Title <span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="4"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Assigned To</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter person name"
            value={task.assignedTo}
            onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
          />
        </div>

        <div className="row">
          <div className="col-6 mb-3">
            <label className="form-label">Due Date</label>
            <input
              type="date"
              className="form-control"
              value={task.dueDate}
              onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            />
          </div>
          <div className="col-6 mb-3">
            <label className="form-label">Attachment</label>
            <input type="file" className="form-control" onChange={handleFileChange} />
          </div>
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn btn-success"
            onClick={() => {
              if (!task.title.trim()) {
                alert("Please enter a title");
                return;
              }
              onSave(task);
            }}
          >
            Save 
          </button>
          <button
            className="btn btn-secondary"
            onClick={() =>
              setTask({
                title: "",
                description: "",
                assignedTo: "",
                dueDate: "",
                attachment: null
              })
            }
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
