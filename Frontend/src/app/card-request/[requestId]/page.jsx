"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import {
  BellIcon,
  UserIcon,
  ArrowLeftIcon,
  PrinterIcon,
  CircleIcon,
} from "lucide-react";

const API_URL = "https://coreinfra.onrender.com/api/v1/card-requests";

const CardRequestDetails = () => {
  const params = useParams();
  const requestId = params.requestId;

  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!requestId) return;

    const fetchRequest = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/${requestId}`);
        setRequest(data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequest();
  }, [requestId]);

  const updateStatus = async (status) => {
    try {
      await axios.patch(`${API_URL}/${requestId}/status`, { status });
      setRequest((prev) => ({ ...prev, status }));
    } catch (err) {
      alert("Failed to update status");
    }
  };

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  console.log(request);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <h1 className="text-xl font-medium mb-2">Request Details</h1>
        <p className="text-gray-500 mb-6">
          Perform predetermined actions on card requests here.
        </p>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-6">Card Request Details</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Branch Name
              </label>
              <input
                type="text"
                value={request?.branchName}
                disabled
                className="w-full p-2 bg-gray-50 border rounded-md text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Initiator
              </label>
              <input
                type="text"
                value={request?.initiator}
                disabled
                className="w-full p-2 bg-gray-50 border rounded-md text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Card Type
              </label>
              <input
                type="text"
                value={request?.cardType}
                disabled
                className="w-full p-2 bg-gray-50 border rounded-md text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Card Charges
              </label>
              <input
                type="text"
                value={request?.cardCharges}
                disabled
                className="w-full p-2 bg-gray-50 border rounded-md text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Quantity
              </label>
              <input
                type="text"
                value={request?.quantity}
                disabled
                className="w-full p-2 bg-gray-50 border rounded-md text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">Batch</label>
              <input
                type="text"
                value={request?.batch}
                disabled
                className="w-full p-2 bg-gray-50 border rounded-md text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">
                Date Requested
              </label>
              <span className="text-gray-800">{request?.dateRequested}</span>
            </div>
            <div>
              <label className="block text-sm text-gray-800 mb-1">Status</label>
              <div className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm">
                {request?.status || "Pending"}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => updateStatus("IN_PROGRESS")}
              className="px-4 py-2 bg-orange-100 text-orange-700 rounded-md text-sm"
            >
              Mark as In Progress
            </button>
            <button
              onClick={() => updateStatus("READY")}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-md text-sm"
            >
              Mark as Ready
            </button>
            <button
              onClick={() => updateStatus("DISPATCH")}
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-md text-sm"
            >
              Send to Dispatch
            </button>
            <button
              onClick={() => updateStatus("ACKNOWLEDGED")}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm"
            >
              Mark as Acknowledged
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRequestDetails;
