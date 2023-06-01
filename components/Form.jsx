import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    function handleInputChange(event) {

        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        console.log(formData);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            email: formData.email
        }
        const formDataa = new FormData();
        formDataa.append('email', formData.email)
        try {
            // Send the data to the server /api/hello
            const response = await fetch('https://wait-linkr-api.onrender.com/add', {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json',
                // },
                body: formDataa,
                mode: "no-cors"
            });

            if (response.ok) {
                // Handle successful response
                console.log('Data sent successfully!');
            } else {
                // Handle error response
                console.error('Failed to send data..');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    return (
        <>
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
        </>
    );
}

export default Form;