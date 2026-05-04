import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="min-h-screen bg-dark flex items-center justify-center px-4">
    <div className="text-center">
      <p className="text-primary text-8xl font-display font-bold mb-4">404</p>
      <h1 className="text-white text-3xl font-display font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  </main>
);

export default NotFound;