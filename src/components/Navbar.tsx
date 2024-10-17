import React from 'react';
import { Link } from 'react-router-dom';
import { Package, List } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">NoTransport</Link>
        <div className="flex space-x-4">
          <Link to="/add-request" className="flex items-center"><Package className="mr-1" size={18} /> Add Request</Link>
          <Link to="/view-requests" className="flex items-center"><List className="mr-1" size={18} /> View Requests</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;