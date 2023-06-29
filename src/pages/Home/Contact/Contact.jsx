import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    useEffect(() => {
      const hasSubmitted = localStorage.getItem('formSubmitted');
      if (hasSubmitted) {
        setIsSubmitted(true);
      }
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setName('');
      setEmail('');
      setMessage('');
      localStorage.setItem('formSubmitted', 'true');
  
      setIsSubmitted(true);
    };
    return (
        <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="title text-center">Contact <span className='text-indigo-400'>Us </span></h1>
                <p className='text-center'>We would love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
                {isSubmitted ? (
                    <p className="mt-4 text-indigo-400 text-center">
                        Thank you for contacting us. We'll be in touch soon!
                    </p>
                ) : (
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm p-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm p-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-400 focus:border-indigo-400 sm:text-sm p-2"
                                ></textarea>
                            </div>
                        </div>
                        <div>
                        <button className="btn hover:bg-indigo-800 glass bg-indigo-600 text-white mt-4 w-1/3 mx-auto">
                            Send Message
                        </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;