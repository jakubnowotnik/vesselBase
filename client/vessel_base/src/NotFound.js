import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="notFound">
      <h3>Sorry</h3>
      <p>That page cannot be found</p>
      <Link to='/'> Back to the homepage </Link>
    </div>
  );
}

export default NotFound;