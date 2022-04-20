import { useState, useRef } from 'react';
import { CameraIcon} from '@heroicons/react/outline';
const ImageFileUpload = ({ imageFile, setImageFile }) => {

  const [error, setError] = useState(null);
  const filePickerRef = useRef(null);

  const AddImageFile = (e) => {
    const types = ['image/png', 'image/jpeg'];
    console.log("image type", e.target.files[0].type);

    const reader = new FileReader();
    if (e.target.files[0] && types.includes(e.target.files[0].type)) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (readerEvent) => {
        setImageFile(readerEvent.target.result);
        setError(null)
      }
    }
    else {
      setImageFile(null);
      setError("Please Select 'png' or 'jpeg' format file")
    }
  }
  return (
    <div>
      <div onClick={() => filePickerRef.current.click()} className="w-[400px] h-[150px] flex flex-col items-center justify-center border-dashed border-2 p-12 mx-8 cursor-pointer">
        {imageFile ?
          <div className='flex items-center justify-center'>
            <img src={imageFile} alt="cover image" className='w-[300px] h-[110px] object-contain' />
          </div> :
          <div className="flex text-sm text-gray-600 flex-col items-center justify-center ">
          <p className='text-sm text-gray-600'>Upload your cover picture</p>
          <p className="text-xs text-sky-600 hover:text-sky-400"><span className='text-gray-600'>select</span> PNG, JPG up to 10MB</p>
          <CameraIcon className='text-blue w-10 h-10 text-gray-500 text-center hover:text-gray-700' />
        </div>
        }
      </div>
      {error && <p className='text-red-600 text-sm my-2 text-center'>{error}</p>}
      <input type="file" hidden onChange={AddImageFile} ref={filePickerRef} />
    </div>
  );
}
export default ImageFileUpload;

