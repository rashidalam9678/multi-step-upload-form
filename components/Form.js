import { useState, useEffect } from 'react'
import Information from './steps/Information'
import UploadForm from './UploadForm'
import Confirm from './steps/Confirm'
import { db } from '../firebase/config'

import { collection, addDoc } from "firebase/firestore";
const collRef = collection(db, "uploads");

const Form = () => {
    const [uploadStatus, setUploadStatus] = useState(false);

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        downloadUrl: "",
        nationality: "",
        profession: "",
    });

    const CreateUpload = async () => {
        await addDoc(collRef, formData);
        alert("Post Created")
        setFormData({
            name: "",
            email: "",
            password: "",
            downloadUrl: "",
            nationality: "",
            profession: "",
        })
        setUploadStatus(false)
        setPage(0)


    }

    const FormTitles = ["Information", "Upload", "Confirm"];

    const PageDisplay = () => {
        if (page === 0) {
            return <Information formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <UploadForm formData={formData} setFormData={setFormData} />;
        } else {
            return <Confirm formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full h-2 ">
                <div className={page === 0 ? "w-1/3 h-full bg-sky-500 rounded-full" : page == 1 ? "w-2/3 h-full bg-sky-500 rounded-full" : "w-full h-full bg-sky-500 rounde-full"}

                ></div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="text-2xl text-center ">
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
                        className='w-1/3 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-md'
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                            } else {
                                setPage((currPage) => currPage + 1);
                            }
                            if (page === FormTitles.length - 1) { CreateUpload(), setUploadStatus(!uploadStatus) }
                        }}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next" }
                    </button>
                </div>
            </div>

            {
                uploadStatus && <div className='mt-8 text-center text-sky-500 text-semibold text-xl'>
                    <p className='text-center text-bold '>Uploading Post...</p>
                </div>
            }

        </div>
    );
}

export default Form;