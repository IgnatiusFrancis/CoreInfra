"use client";
import React, { useState } from "react";
import {
  BellIcon,
  UserIcon,
  ArrowLeftIcon,
  PrinterIcon,
  X,
  ChevronDown,
  Plus,
} from "lucide-react";

const CreateProfile = () => {
  const [showAddFeeModal, setShowAddFeeModal] = useState(false);
  const [fees, setFees] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-xl font-medium mb-2">Create Profile</h1>
        <p className="text-gray-500 mb-6">
          Fill in profile details and add card fee.
        </p>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-6">Profile Details</h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Card Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter card name"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Bin Prefix<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="00000000"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Card Scheme<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full p-2 border rounded-md appearance-none bg-white pr-8">
                  <option>Verve</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-2 top-3 text-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Expiration<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm text-gray-600 mb-1">
                Description
              </label>
              <textarea className="w-full p-2 border rounded-md" rows={3} />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Currency<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full p-2 border rounded-md appearance-none bg-white pr-8">
                  <option>NGN</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-2 top-3 text-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Branch Blacklist
              </label>
              <div className="relative">
                <select className="w-full p-2 border rounded-md appearance-none bg-white pr-8">
                  <option>Head Office</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-2 top-3 text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Fees Section */}
          <div>
            <h2 className="text-lg font-medium mb-4">Fees</h2>
            <button
              onClick={() => setShowAddFeeModal(true)}
              className="flex items-center gap-2 mb-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm"
            >
              <Plus size={16} /> Add Fee
            </button>

            <div className="border rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-3 text-sm font-medium text-gray-600">
                      Name
                    </th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">
                      Value
                    </th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">
                      Frequency
                    </th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">
                      Currency
                    </th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">
                      Time
                    </th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">
                      Account Pad
                    </th>
                    <th className="text-left p-3 text-sm font-medium text-gray-600">
                      Account
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((fee, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3">{fee.name}</td>
                      <td className="p-3">{fee.value}</td>
                      <td className="p-3">{fee.frequency}</td>
                      <td className="p-3">{fee.currency}</td>
                      <td className="p-3">{fee.time}</td>
                      <td className="p-3">{fee.accountPad}</td>
                      <td className="p-3">{fee.account}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <button className="w-full mt-8 px-4 py-2 bg-blue-600 text-white rounded-md">
            Create Profile
          </button>
        </div>
      </div>

      {/* Add Fee Modal */}
      {showAddFeeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-[480px] p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-medium">Add Fee</h3>
                <p className="text-sm text-gray-500">Fill in fee details.</p>
              </div>
              <button
                onClick={() => setShowAddFeeModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Fee Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Maintenance"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Value
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Currency
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="currency" defaultChecked />
                    <span>NGN</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="currency" />
                    <span>USD</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Fee Frequency
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="frequency" defaultChecked />
                    <span>One Off</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="frequency" />
                    <span>Monthly</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Fee Impact
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="impact" defaultChecked />
                    <span>Issuance</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="impact" />
                    <span>Pin Reissue</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Account Pad
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="accountPad" defaultChecked />
                    <span>None</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="accountPad" />
                    <span>Branch Code Prefix</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="accountPad" />
                    <span>Branch Code Suffix</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Account
                </label>
                <input
                  type="account"
                  placeholder="Account"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md mt-4">
                Add Fee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateProfile;
