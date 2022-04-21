import { useState, useRef } from 'react'
import { MusicNoteIcon } from '@heroicons/react/outline'

const MusicFileUpload = ({ musicFile, setMusicFile }) => {
  const [error, setError] = useState(null);
  const filePickerRef = useRef(null);

  const AddMusicFile = (e) => {
    const types = ['audio/mpeg', 'audio/mp3'];
    const reader = new FileReader();
    if (e.target.files[0] && types.includes(e.target.files[0].type)) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (readerEvent) => {
        setMusicFile(readerEvent.target.result);
        setError(null)
      }
    }
    else {
      setMusicFile(null);
      setError("Please Select 'mp3' format file")
    }

  }
  return (
    <div>
      <div onClick={() => filePickerRef.current.click()} className=' border-[2px] border-dashed border-gray-200 mt-4 mb-8 flex justify-center items-center cursor-pointer w-[350px] h-[150px] '>
        {musicFile ?
          <audio controls src={musicFile} ></audio> :
          <div className='flex flex-col items-center justify-center'>
            <p className='text-sm text-gray-600'>Upload your album</p>
            <p className='text-gray-500 text-center'>select <span className='text-sky-600 hover:text-sky-400'>mp3</span> file</p>
            <MusicNoteIcon className='text-blue w-10 h-10 text-gray-500 text-center hover:text-gray-700' />
          </div>
        }
      </div>
      {error && <p className='text-red-600 text-sm my-2 text-center'>{error}</p>}
      <input type="file" hidden onChange={AddMusicFile} ref={filePickerRef} />
    </div>
  )
}

export default MusicFileUpload