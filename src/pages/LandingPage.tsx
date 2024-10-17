import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Package, Users } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to NoTransport Delivery</h1>
          <p className="text-xl mb-8">Connecting people for efficient, community-driven deliveries</p>
          <Link to="/add-request" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </Link>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Post a Delivery Request</h3>
              <p>Share details about your package and where it needs to go.</p>
            </div>
            <div className="text-center">
              <Users size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Connect with Deliverers</h3>
              <p>Local community members offer to help with your delivery.</p>
            </div>
            <div className="text-center">
              <Package size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Get Your Package Delivered</h3>
              <p>Track your package and receive it at your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
          <Link to="/add-request" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Create a Delivery Request
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;