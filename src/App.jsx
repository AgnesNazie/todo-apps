import React, { useState } from "react";
import SidebarLeft from "./components/SidebarLeft";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
    attachment: null
  });

  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("");

  const handleSaveTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const handleDeleteTask = (id) => {
    if (!window.confirm("Delete this task?")) return;
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleLogin = () => {
    const name = prompt("Enter your username:");
    if (name) setUsername(name);
  };

  const handleLogout = () => {
    setUsername("");
  };

  const filteredTasks = tasks.filter((task) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      (task.title && task.title.toLowerCase().includes(q)) ||
      (task.description && task.description.toLowerCase().includes(q)) ||
      (task.assignedTo && task.assignedTo.toLowerCase().includes(q))
    );
  });

  return (
    <div className="container-fluid app-bg">
      <div className="row gx-0">
        {/* Smaller Sidebar */}
        <div className="col-12 col-md-2 p-0">
          <SidebarLeft
            username={username}
            onLogin={handleLogin}
            onLogout={handleLogout}
          />
        </div>

        {/* Bigger Main Content */}
        <div className="col-12 col-md-10 p-4 main-content">
          {/* Header */}
          <div className="header-row mb-4">
            <h1 className="h3 mb-0">Tasks</h1>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Task Form */}
          <TaskForm
            task={currentTask}
            setTask={setCurrentTask}
            onSave={(t) => {
              handleSaveTask(t);
              setCurrentTask({
                title: "",
                description: "",
                assignedTo: "",
                dueDate: "",
                attachment: null
              });
            }}
          />

          {/* Saved Tasks */}
          <h4 className="mt-4">Todos</h4>
          <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
