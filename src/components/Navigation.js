import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Nav.css';

const NavigationBar = () => {
  const { title } = useSelector((state) => state.crypto);
  const history = '';
  return (
    <nav className="nav">
      <span className="logo">
        <Link className="link" to={history}>
          <i className="bi-chevron-left" />
        </Link>
      </span>
      <span className="nav-title">{title}</span>
      <span className="nav-icon">
        <i className="bi-mic" />
        <i className="bi-gear" />
      </span>
    </nav>
  );
};

export default NavigationBar;
