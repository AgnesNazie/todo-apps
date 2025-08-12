import React from "react";
import "../styles/sidebar.css";

function SidebarLeft({ username, onLogin, onLogout }) {
  return (
    <div className="d-flex flex-column justify-content-between sidebar">
      <div>
        <h5 className="brand mb-3">My Tasks</h5>
        <ul className="list-group">
          <li className="list-group-item">Dashboard</li>
          <li className="list-group-item">Users</li>
          <li className="list-group-item">Tasks</li>
          <li className="list-group-item">Settings</li>
        </ul>
      </div>

      <div>
        {username ? (
          <>
            <div className="text-muted small mb-1">UserName</div>
            <div className="fw-bold mb-2">{username}</div>
            <button className="btn btn-outline-danger w-100" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="btn btn-primary w-100" onClick={onLogin}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default SidebarLeft;
