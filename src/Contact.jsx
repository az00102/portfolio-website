import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [modalMessage, setModalMessage] = useState('');  // For modal message
    const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_vkrpg1d',  // EmailJS service ID
            'template_1n2uxe9', // EmailJS template ID
            formData,
            '5EBOAX4SR2PH18_7w' // EmailJS user ID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success modal
            setModalMessage('Message sent successfully!');
            setIsModalOpen(true);

            // Clear the form
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        })
        .catch((error) => {
            console.error('FAILED...', error);

            // Show error modal
            setModalMessage('Failed to send message. Please try again.');
            setIsModalOpen(true);
        });
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <section className="w-full font-roboto text-white py-12">
            <div className="max-w-screen-md mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold leading-tight lg:text-4xl mb-4">Let's talk!</h2>
                    <p className="text-gray-400 text-base lg:text-lg">
                        You are most welcome to contact me by submitting the form below.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="flex flex-col justify-center items-center">
                    <form noValidate="" className="space-y-6 w-full" onSubmit={sendEmail}>
                        <div>
                            <label htmlFor="name" className="text-sm text-white font-bold">Full name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-violet-600 focus:outline-none text-sm"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm text-white font-bold">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-violet-600 focus:outline-none text-sm"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm text-white font-bold">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 resize-none placeholder-gray-500 focus:ring-2 focus:ring-violet-600 focus:outline-none text-sm"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-gray-50 hover:bg-violet-700 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                        <p className="text-black text-lg mb-4">{modalMessage}</p>
                        <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 text-base"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
