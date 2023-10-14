import { useState } from "react";
import axios from 'axios';

export default function Form() {

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
                'Content-Type':'multipart/form-data',
            }
            const response = await axios.post('https://inkwell-backend.onrender.com/api/add',
                form,
                { headers }
            );

            console.log(response.data);

        }
        catch (error) {
            console.error('An error occured: ', error)
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

        </div>

    );
}