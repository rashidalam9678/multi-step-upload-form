import { useState } from 'react'
import Information from './steps/Information'
import ImageFileUpload from './steps/ImageFileUpload.js'
import MusicFileUpload from './steps/MusicFileUpload.js'
import Confirmation from './steps/Confirmation'
import { db, storage } from '../firebase/config'
import { Oval } from 'react-loader-spinner'
import { collection, doc, setDoc, serverTimestamp, updateDoc, addDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from '@firebase/storage';

const Form = () => {
    const [uploadStatus, setUploadStatus] = useState(false);
    const [imageUploadStatus, setImageUploadStatus] = useState(false)
    const [musicUploadStatus, setmusicUploadStatus] = useState(false)
    const [successMesssage, setSuccessMessage] = useState(false);
    const [page, setPage] = useState(0);
    const [informationPageError, setInformationPageError] = useState(null)
    const [uploadPageError, setUploadPageError] = useState(null)
    const [musicFile, setMusicFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [imageDownloadURL, setImageDownloadURL] = useState(null);
    const [musicDownloadURL, setMusicDownloadURL] = useState(null);

    const [formData, setFormData] = useState({
        artist: "",
        name: "",
        title: "",
        description: "",
        price: 0,
        symbol: "",
        totalSupply: 0,
        commision: 0,
        imageDownloadUrl: "",
        musicDownloadUrl: "",
    });

    // data upload to firebase

    const CreatePost = async (e) => {
        if (uploadStatus) return;
        setUploadStatus(true);

        const docRef = doc(collection(db, "posts"));
        await setDoc(docRef, formData);
        console.log("Document written with ID: ", docRef.id);

        const imageRef = ref(storage, `posts/${docRef.id}/image`);
        const musicRef = ref(storage, `posts/${docRef.id}/music`);
        setImageUploadStatus(true);
        await uploadString(imageRef, imageFile, "data_url").then(async (snapshot) => {
            await getDownloadURL(imageRef).then((downloadUrl) => {
                setImageDownloadURL(downloadUrl);
                console.log("this is the image URL : ", imageDownloadURL);
                setImageUploadStatus(false);
            })
        });

        
        setmusicUploadStatus(true);
        await uploadString(musicRef, musicFile, "data_url").then(async (snapshot) => {
            await getDownloadURL(musicRef).then((downloadUrl) => {
                setMusicDownloadURL(downloadUrl);
                console.log("this is the Music URL : ", musicDownloadURL);
                setmusicUploadStatus(false);
            })
            await updateDoc(doc(db, "posts", docRef.id), {
                imageDownloadUrl: imageDownloadURL,
                musicDownloadUrl: musicDownloadURL,
                timeStamp: serverTimestamp(),
            });
            console.log("documnet updated")

        });
        setImageFile(null);
        setMusicFile(null);

        if (docRef.id) {
            setFormData({
                artist: "",
                name: "",
                title: "",
                description: "",
                price: 0,
                symbol: "",
                totalSupply: 0,
                commision: 0,
                imageDownloadUrl: "",
                musicDownloadUrl: "",
            })
        }
        setUploadStatus(false);
        setSuccessMessage(true)
    }

    const FormTitles = ["Information", "Files Upload", "Confirmation"];

    const PageDisplay = () => {
        if (page === 0) {
            return (
                <div>
                    <Information formData={formData} setFormData={setFormData} />
                    {informationPageError && <p className="text-red-500 text-center mt-4">{informationPageError}</p>}
                </div>
            )
        } else if (page === 1) {
            return (
                <div className='flex flex-col items-center mt-8'>
                    <ImageFileUpload imageFile={imageFile} setImageFile={setImageFile} />
                    <MusicFileUpload musicFile={musicFile} setMusicFile={setMusicFile} />
                    {uploadPageError && <p className="text-red-500 text-center mt-4">{uploadPageError}</p>}
                </div>
            );
        } else {
            return <Confirmation formData={formData} setFormData={setFormData} />;
        }
    };
    return (
        <div className="flex flex-col justify-center items-center">
            {!successMesssage &&
                <>
                    <div className="w-full h-2 ">
                        <div className={page === 0 ? "w-1/3 h-full bg-sky-500 rounded-full mb-4" : page == 1 ? "w-2/3 h-full bg-sky-500 rounded-full mb-4" : "w-full h-full bg-sky-500 rounde-full mb-4"}

                        ></div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="text-2xl text-center mt-4">
                            <h1>{FormTitles[page]}</h1>
                        </div>
                        <div className="">{PageDisplay()}</div>
                        <div className=" flex justify-around w-full mt-4">
                            <button
                                className='w-1/3 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-md'
                                disabled={page == 0}
                                onClick={() => {
                                    setPage((currPage) => currPage - 1);
                                }}
                            >
                                Prev
                            </button>
                            <button
                                disabled={uploadStatus}
                                className='w-1/3 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-md'
                                onClick={() => {
                                    if (page === FormTitles.length - 1) {
                                        { CreatePost() }
                                    }
                                    else if (page === 0) {
                                        if (formData.artist === "" || formData.name === "" || formData.title === "" || formData.description === "" || formData.symbol === "" || formData.price === "") {
                                            setInformationPageError("Please fill all the fields")
                                        }
                                        else if (formData.commision > 20 || formData.commision <= 0) {
                                            setInformationPageError("Commision should be between 0 and 20")
                                        }
                                        else if (formData.totalSupply > 10000 || formData.totalSupply <= 0) {
                                            setInformationPageError("Total Supply should be between 0 and 10000")
                                        }
                                        else {
                                            setPage((currPage) => currPage + 1);
                                            setInformationPageError(null)

                                        }
                                    }
                                    else if (page === 1) {
                                        if (imageFile === null || musicFile === null) {
                                            setUploadPageError("Please upload all the files")
                                        }
                                        else {
                                            setPage((currPage) => currPage + 1);
                                            setUploadPageError(null);
                                        }

                                    }
                                    else {
                                        setPage((currPage) => currPage + 1);
                                    }
                                }
                                }
                            >
                                {page === FormTitles.length - 1 ? "Submit" : "Next"}
                            </button>
                        </div>
                    </div>
                </>}
            {uploadStatus &&
                <div className='flex flex-col items-center justify-between mt-8'>
                    <div>
                        <Oval
                            ariaLabel="loading-indicator"
                            height={35}
                            width={35}
                            strokeWidth={5}
                            color="#0284c7"
                            secondaryColor="#bae6fd"
                        />
                    </div>
                    <p className='text-center text-gray-800 text-sm mt-2'>Creating Post...</p>
                    {imageUploadStatus && <p className='text-center text-sky-600 text-xs mt-4'>Uploading image...</p>}
                    {musicUploadStatus && <p className='text-center text-sky-600 text-xs mt-4'>Uploading album...</p>}
                </div>}
            {successMesssage &&
                <div className='flex items-center flex-col mt-8 h-[50vh]'>
                    <p className='text-green-600 text-center text-2xl font-semibold mb-4' > Post Created Successfully !</p>
                    <button onClick={() => {
                        setSuccessMessage(false)
                        setPage(0)
                    }} className='underline text-xl'>Go back to home</button>
                </div>}
        </div>
    );
}

export default Form;
