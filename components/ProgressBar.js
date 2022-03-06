import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile, formData, setFormData }) => {
  const { uploadProgress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
      setFormData({ ...formData, downloadUrl: url })
    }
  }, [url, setFile]);

  return (


    <div>
      <p className='text-center text-sky-600 mb-4 mt-4'> Uploading File </p>
      <motion.div className="h-2 mt-4 mb-4 bg-sky-500"
        initial={{ width: 0 }}
        animate={{ width: uploadProgress + '%' }}
      > </motion.div>
      <p className='mt-4 text-center text-gray-600 text-bold'>{uploadProgress} %</p>

    </div>



  );
}


export default ProgressBar;