
function Information({ formData, setFormData }) {
  return (
    <div className="flex flex-col justify-around mt-8">
      <input
        className='w-full p-2 border-2 border-gray-400 rounded-md m-4'
        type="text"
        required
        placeholder="name..."
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <input
        className='w-full p-2 border-2 border-gray-400 rounded-md m-4'
        type="email"
        required
        placeholder="email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        className='w-full p-2 border-2 border-gray-400 rounded-md m-4'
        type="password"
        required
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
    </div>
  );
}

export default Information;