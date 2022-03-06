import { useEffect, useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {storage} from '../firebase/config'
// import { createContext, useContext } from 'react';
// const AppContext = createContext();

const useStorage = (file) => {

    const [uploadProgress, setUploadProgress] = useState(0)
    const [url, setUrl] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const storageRef = ref(storage, 'allfiles/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setUploadProgress(progress)
            },
            (error) => {
                setError(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setUrl(downloadURL)
                });
            }
        );


    }, [file]);
    return { uploadProgress, url, error }
}
export default useStorage

// src/context/state.js





// export function useAppContext() {
//   return useContext(AppContext);
// }







