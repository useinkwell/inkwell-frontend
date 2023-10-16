import { useState } from "react";
import axios from 'axios';

export default function Form() {
    const clearMessage = () => {
        setInfo('')
    }
    const clearErrorMessage = () => {
        setErrorMessage('')
        setErrorCheck(true)
    }
    const clearForm = () => {
        setData({
            name: '',
            email: ''
        })
    }


    const [info, setInfo] = useState();
    const [errorCheck, setErrorCheck] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setData] = useState({
        name: '',
        email: ''
    });

    const handleInputChange = (event) => {
        setData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const apiKey = 'PMIb9gs716ERZ9tmRjTEtjdAhzsyBIPO3J0';

            const form = new FormData();
            form.append('name', formData.name);
            form.append('email', formData.email);

            const headers = {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'multipart/form-data',
            }
            const response = await axios.post('https://inkwell-backend.onrender.com/api/add',
                form,
                { headers }
            );

            console.log(response.data);
            setInfo(response.data.msg);

            setTimeout(clearMessage, 7000);
            setTimeout(clearForm, 7000);
            setTimeout(clearMessage, 7000);
            }
        catch (error) {
            console.error('An error occured: ', error);
            setErrorCheck(false);
            setErrorMessage("an error occured try again");
            setTimeout(clearForm, 7000);
            setTimeout(clearErrorMessage, 7000);

        }
       
    }


    return (
        <div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input
                    placeholder="John Doe"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="focus:outline-none p-2 rounded border-b-4 border-inkBlue text-inkBlue" />

                <input
                    placeholder="johndoe@gmail.com"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="focus:outline-none p-2 rounded border-b-4 border-inkBlue text-inkBlue"
                />
                <button className="bg-white rounded px-[4rem] py-[0.5rem] text-2xl font-bold" type="submit" >
                    <span className="gradient-text">Join the wait-list</span>
                </button>
            </form>
            {/* Email succes message */}
            {info ? <div className="flex items-center gap-5 text-inkBlue bg-white text-center fixed top-[10.5rem] text-lg px-2 py-2 rounded left-[.2rem] translate-x-6">
                <p className="">{info}</p> <i className="fa-solid fa-circle-check mt-[.233rem]"></i>
            </div> :
                <div className="hidden"></div>}

            {/* Email failed message */}
            {errorCheck ? <div className="hidden"></div>
                : <div className="mx-auto translate-x-12 flex items-center gap-5 text-inkBlue bg-white text-center fixed top-[10.5rem] text-lg px-2 py-2 rounded left-[.2rem]">
                    <p className="text-red-400">{errorMessage}</p> <i className="fa-solid fa-circle-xmark"></i>
                </div>}
        </div>

    );
}