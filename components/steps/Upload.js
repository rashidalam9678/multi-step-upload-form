import React from "react";

function Upload({ formData, setFormData }) {
  return (
    <div className="flex flex-col ">
      <input
        className="w-full p-2 border-2 border-gray-400 rounded-md m-4"
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        className="w-full p-2 border-2 border-gray-400 rounded-md m-4"

        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        className="w-full p-2 border-2 border-gray-400 rounded-md m-4"

        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
}

export default Upload;