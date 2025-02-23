"use client";
import React from "react";

const CardRequestDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <button className="text-gray-600">← Back</button>
        <h1 className="text-xl font-medium">Request Details</h1>
      </div>

      <p className="text-gray-500 mb-8">
        Perform predetermined actions on card requests here.
      </p>

      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-medium mb-6">Card Request Details</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Branch Name
            </label>
            <input
              type="text"
              value="Corporate"
              disabled
              className="w-full p-2 bg-gray-50 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Initiator
            </label>
            <input
              type="text"
              value="RootUser"
              disabled
              className="w-full p-2 bg-gray-50 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Card Type
            </label>
            <input
              type="text"
              value="Classic Debit"
              disabled
              className="w-full p-2 bg-gray-50 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Card Charges
            </label>
            <input
              type="text"
              value="₦1,500"
              disabled
              className="w-full p-2 bg-gray-50 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">Quantity</label>
            <input
              type="text"
              value="10"
              disabled
              className="w-full p-2 bg-gray-50 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">Batch</label>
            <input
              type="text"
              value="847264905"
              disabled
              className="w-full p-2 bg-gray-50 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Date Requested
            </label>
            <input
              type="text"
              value="11/14/2024 10:27:43"
              disabled
              className="w-full p-2 bg-gray-50 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">Status</label>
            <input
              type="text"
              value="Pending"
              disabled
              className="w-full p-2 bg-gray-50 border rounded-md"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2">
            <span>Download for Production</span>
          </button>
          <button className="px-4 py-2 bg-orange-200 text-orange-700 rounded-md">
            Mark as In Progress
          </button>
          <button className="px-4 py-2 bg-green-200 text-green-700 rounded-md">
            Mark as Ready
          </button>
          <button className="px-4 py-2 bg-purple-200 text-purple-700 rounded-md">
            Send to Dispatch
          </button>
          <button className="px-4 py-2 bg-blue-200 text-blue-700 rounded-md">
            Mark as Acknowledged
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRequestDetails;

// src/components/CardRequestDetails.tsx
// export default function CardRequestDetails() {
//   return (
//     <div>
//       <h1 className="text-2xl font-semibold mb-2">Request Details</h1>
//       {/* <p className="text-gray-600 mb-6">
//         Perform predetermined actions on card requests here.
//       </p> */}

//       <div className="bg-white rounded-lg shadow p-6">
//         <h2 className="text-lg font-medium mb-6">Card Request Details</h2>

//         <div className="grid grid-cols-2 gap-6">
//           {/* Form fields as shown in your previous example */}
//           {/* You can copy the fields from the previous CardRequest component */}
//         </div>
//       </div>
//     </div>
//   );
// }
