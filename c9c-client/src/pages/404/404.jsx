import '../404/404.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notfound'>
      <h2 className='notfound__title'>404 - Page Not Found</h2>
      <p className='notfound__desc'>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className='notfound__link'>Go Back to Home</Link>
    </div>
  );
};

export default NotFound;