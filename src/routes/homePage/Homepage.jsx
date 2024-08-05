import { Link } from 'react-router-dom';
import './homePage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Link to="/dashboard" className="dashboard-link">Dashboard</Link>
    </div>
  );
};

export default Homepage;
