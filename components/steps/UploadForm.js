import { useState } from 'react';
import ProgressBar from '../ProgressBar';


const UploadForm = ({ formData, setFormData }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form className='mt-8 mb-4'>
      {formData.downloadUrl && <div className='flex justify-center items-center'>

        <img src={formData.downloadUrl} alt="Uploaded" className='w-auto h-32 object-cover' />

      </div>}

      {file && !formData.downloadUrl ?
        <div className="h-full w-full">
          {error && <div className="text-sm font-semibold text-gray-500 mt-4 text-center">{error}</div>}
          {file && <div className="text-sm font-semibold text-gray-500 mt-4 text-center">{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} formData={formData} setFormData={setFormData} />}
        </div>

        : !formData.downloadUrl && <div className="flex flex-col items-center border-dashed border-2 p-12 mx-8">

          <div className="flex text-sm text-gray-600 ">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-sky-500 hover:text-sky-400 "
            >
              <span>Upload a file</span>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleChange} />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
        </div>}
    </form>
  );
}

export default UploadForm;

