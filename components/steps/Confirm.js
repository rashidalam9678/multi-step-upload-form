

function Confirm({ formData, setFormData }) {
  return (
    <div className="flex flex-col">
      <input
        className="w-full p-2 border-2 border-gray-400 rounded-md m-4"
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        className="w-full p-2 border-2 border-gray-400 rounded-md m-4"
        
        type="text"
        placeholder="profession..."
        value={formData.profession}
        onChange={(e) => {
          setFormData({ ...formData, profession: e.target.value });
        }}
      />
    </div>
  );
}

export default Confirm;