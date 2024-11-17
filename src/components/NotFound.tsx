import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Link to={'/'} className="text-2xl font-bold gradient-text mb-4">FUNDIFY</Link>
      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <p className="text-lg mb-4">Sorry, the page you are looking for does not exist.</p>
      <Link to={'/'} className="text-blue-500 hover:underline">Go back to Home</Link>
    </div>
  );
}

export default NotFound;