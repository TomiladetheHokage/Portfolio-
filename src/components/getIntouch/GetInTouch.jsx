import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const GetIntouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    useEffect(() => {
        // Initialize EmailJS with your Public Key
        emailjs.init("q4WobFnbmEsggzOHC");
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const result = await emailjs.send(
                'service_4jk7chr', // EmailJS service ID
                'template_kq8y1i2', // EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Tomilade', // Your name
                    reply_to: formData.email,
                },
                'q4WobFnbmEsggzOHC' // EmailJS Public Key
            );

            if (result.status === 200) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus(''), 3000);
        }
    };

    return(
        <>
            <section id="contact" className="py-20 mt-[-25px] md:mt-0">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-gray-600 mb-6">
                                    I'm always interested in hearing about new projects and opportunities.
                                    Whether you have a question or just want to say hi, feel free to reach out!
                                </p>
                                <div className="space-y-4">
                                    <a href="mailto:oyebolatomilade@gmail.com"
                                       className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                                        <i className="fa-solid fa-envelope text-2xl md:text-3xl"></i>
                                        Oyebolatomilade@Gmail.com
                                    </a>
                                    <a href="https://www.linkedin.com/in/tomilade-yemi-oyebola/"
                                       className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                                        <i className="fa-brands fa-linkedin text-2xl md:text-3xl"></i>
                                        linkedin.com/tomilade-yemi-oyebola
                                    </a>
                                    <a href="https://github.com/TomiladetheHokage"
                                       className="flex items-center gap-3 text-gray-600 hover:text-indigo-600">
                                        <i className="fa-brands fa-github text-2xl md:text-3xl"></i>
                                        github.com/TomiladetheHokage
                                    </a>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name"
                                           className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message"
                                           className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    ></textarea>
                                </div>
                                
                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                        Sorry, there was an error sending your message. Please try again.
                                    </div>
                                )}
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default GetIntouch