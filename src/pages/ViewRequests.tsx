import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { List, CheckCircle, XCircle } from 'lucide-react';

interface DeliveryRequest {
  id: string;
  title: string;
  description: string;
  pickupAddress: string;
  deliveryAddress: string;
  status: string;
  createdAt: Date;
}

const ViewRequests: React.FC = () => {
  const [requests, setRequests] = useState<DeliveryRequest[]>([]);
  const [acceptedRequests, setAcceptedRequests] = useState<string[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const q = query(collection(db, 'deliveryRequests'), where('status', '==', 'open'));
      const querySnapshot = await getDocs(q);
      const fetchedRequests: DeliveryRequest[] = [];
      querySnapshot.forEach((doc) => {
        fetchedRequests.push({ id: doc.id, ...doc.data() } as DeliveryRequest);
      });
      setRequests(fetchedRequests);
    };

    fetchRequests();
  }, []);

  const handleAccept = async (requestId: string) => {
    try {
      const requestRef = doc(db, 'deliveryRequests', requestId);
      await updateDoc(requestRef, {
        status: 'accepted',
        acceptedAt: new Date()
      });
      setAcceptedRequests([...acceptedRequests, requestId]);
      alert('Request accepted successfully!');
    } catch (error) {
      console.error('Error accepting request: ', error);
      alert('Failed to accept request. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <List className="mr-2" /> View Delivery Requests
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((request) => (
          <div key={request.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{request.title}</h2>
            <p className="text-gray-300 mb-4">{request.description}</p>
            <div className="mb-2">
              <strong>Pickup:</strong> {request.pickupAddress}
            </div>
            <div className="mb-4">
              <strong>Delivery:</strong> {request.deliveryAddress}
            </div>
            {acceptedRequests.includes(request.id) ? (
              <div className="flex items-center text-green-500">
                <CheckCircle className="mr-2" /> Accepted
              </div>
            ) : (
              <button
                onClick={() => handleAccept(request.id)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
              >
                Accept Request
              </button>
            )}
          </div>
        ))}
      </div>
      {requests.length === 0 && (
        <div className="text-center text-gray-400 mt-8">
          <XCircle size={48} className="mx-auto mb-4" />
          <p>No open delivery requests available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default ViewRequests;