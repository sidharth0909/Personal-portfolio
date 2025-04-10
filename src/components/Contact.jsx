import { useTheme } from '../ThemeContext';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaInfoCircle,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaSpinner
} from 'react-icons/fa';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [isSending, setIsSending] = useState(false);
  const [activeTab, setActiveTab] = useState('info');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('service_p99rffk', 'template_5rzkk2k', e.target, '5-6hk_JU1p-xcVbvp')
      .then(() => {
        alert('Message sent successfully!');
        e.target.reset();
      })
      .catch(() => {
        alert('Error sending message');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const tabButtonClass = (tab) =>
    `px-4 py-2 rounded-t-md font-medium transition flex items-center ${
      activeTab === tab
        ? isDarkMode
          ? 'bg-gray-800 text-white'
          : 'bg-white text-black'
        : isDarkMode
        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
    }`;

  const iconColor = isDarkMode ? 'text-white' : 'text-black';
  const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className={`text-4xl font-bold mb-8 text-center ${iconColor}`}>
        Contact
      </h2>

      <div className="flex space-x-4 mb-6">
        <button onClick={() => setActiveTab('info')} className={tabButtonClass('info')}>
          <FaInfoCircle className="mr-2" /> Contact Info
        </button>
        <button onClick={() => setActiveTab('form')} className={tabButtonClass('form')}>
          <FaPaperPlane className="mr-2" /> Send Message
        </button>
      </div>

      <div className={`w-full max-w-4xl p-6 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        {activeTab === 'info' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="flex flex-col md:flex-row gap-8"
          >
            <div className="md:w-1/2 space-y-6">
              <h3 className={`text-xl font-semibold mb-4 ${iconColor}`}>
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className={`mt-1 ${iconColor}`} />
                  <p className={textColor}>{CONTACT.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className={iconColor} />
                  <p className={textColor}>{CONTACT.phoneNo}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className={iconColor} />
                  <a href={`mailto:${CONTACT.email}`} className={`hover:underline ${textColor}`}>
                    {CONTACT.email}
                  </a>
                </div>
                <div className="flex space-x-4 pt-2">
                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-full transition ${
                      isDarkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-black'
                    }`}
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-full transition ${
                      isDarkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-black'
                    }`}
                  >
                    <FaLinkedin className="mr-2" /> LinkedIn
                  </a>
                </div>
                <a
                  href={CONTACT.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center mt-4 px-6 py-2 rounded-full transition ${
                    isDarkMode
                      ? 'bg-white hover:bg-gray-200 text-black'
                      : 'bg-black hover:bg-gray-800 text-white'
                  }`}
                >
                  <FaDownload className="mr-2" /> Download CV
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
  <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15066.862220195728!2d72.85848770606171!3d19.25122456183374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0eef33fcc13%3A0xdf8f3b35a262c586!2sDahisar%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1744273442096!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


          </motion.div>
        )}

        {activeTab === 'form' && (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="relative">
              <FaUser className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textColor}`} />
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={`w-full pl-10 p-3 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
                required
              />
            </div>
            <div className="relative">
              <FaEnvelope className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${textColor}`} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`w-full pl-10 p-3 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
                required
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className={`w-full p-3 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-3 rounded-full flex items-center justify-center transition ${
                isDarkMode
                  ? 'bg-white hover:bg-gray-200 text-black'
                  : 'bg-black hover:bg-gray-800 text-white'
              }`}
            >
              {isSending ? (
                <>
                  <FaSpinner className="animate-spin mr-2" /> Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="mr-2" /> Send Message
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default Contact;