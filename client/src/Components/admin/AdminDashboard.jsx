import React,{useState,useEffect} from 'react';
import './AdminDashboard.css';

export default function AdminDashboard() {
   const [families, setFamilies] = useState(0);
    const [volunteers, setVolunteers] = useState(0);
    const [cities, setCities] = useState(0);

    useEffect(() => {
        const animateCount = (target, setter, speed = 50) => {
          let count = 0;
          const step = target / 100; 
          const interval = setInterval(() => {
            count += step;
            if (count >= target) {
              setter(Math.round(target));
              clearInterval(interval);
            } else {
              setter(Math.round(count));
            }
          }, speed);
        };
        animateCount(1200, setFamilies);
        animateCount(300, setVolunteers);
        animateCount(10, setCities);
      }, []);
  return (
    <div className="admin-dashboard">
      <div className="side-bar">
        <h2>Admin</h2>
        <ul>
          <li>📊 Dashboard</li>
      <li>👨‍👩‍👧‍👦 Families</li>
      <li>🤝 Volunteers</li>
      <li>📦 Inventory</li>
      <li>🏙️ Cities</li>
      <li>📈 Reports</li>
      <li>⚙️ Settings</li>
        </ul>
      </div>

      <div className="content">
        <h1>Welcome to the Admin Dashboard</h1>
        <div className="cards">
          <div className="card">
            <h3>{families}+</h3>
            <p>Families Supported</p>
          </div>
          <div className="card">
            <h3>{volunteers}+</h3>
            <p>Active Volunteers</p>
          </div>
          <div className="card">
            <h3>{cities}</h3>
            <p>Cities Covered</p>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Volunteer Name</th>
              <th>Role</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>Coordinator</td>
              <td>Mumbai</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Smith</td>
              <td>Volunteer</td>
              <td>Delhi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
