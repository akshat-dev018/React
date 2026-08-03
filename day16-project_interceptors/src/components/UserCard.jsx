import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-3xl font-bold text-blue-600 shadow-md">
          {user.name.firstname.charAt(0).toUpperCase()}
          {user.name.lastname.charAt(0).toUpperCase()}
        </div>

        <h2 className="mt-4 text-2xl font-bold text-white capitalize">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="text-blue-100">@{user.username}</p>
      </div>

      {/* Details */}
      <div className="p-6 space-y-4">
        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="font-medium break-all text-black">{user.email}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Phone</p>
          <p className="font-medium text-black">{user.phone}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Address</p>
          <p className="font-medium capitalize text-black">
            {user.address.number}, {user.address.street}
          </p>
          <p className="text-gray-600 ">
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">User ID</p>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
            #{user.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;