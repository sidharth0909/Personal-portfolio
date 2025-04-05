

  import { useTheme } from '../ThemeContext';
  import { motion } from 'framer-motion';
  import { CONTACT } from '../constants';
  import emailjs from 'emailjs-com';
  import { useState } from 'react';
  
  const Contact = () => {
    const { isDarkMode } = useTheme();
    const [isSending, setIsSending] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSending(true);
      
      emailjs.sendForm(
        'service_p99rffk',
        'template_5rzkk2k',
        e.target,
        '5-6hk_JU1p-xcVbvp'
      ).then(() => {
        alert('Message sent successfully!');
        e.target.reset();
      }).catch(() => {
        alert('Error sending message');
      }).finally(() => {
        setIsSending(false);
      });
    };
  
    return (
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl w-full">
          <h2 className={`text-4xl font-bold mb-12 text-center ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            Contact
          </h2>
  
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-6 rounded-lg ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                Contact Info
              </h3>
              <div className="space-y-4">
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {CONTACT.address}
                </p>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {CONTACT.phoneNo}
                </p>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {CONTACT.email}
                </p>
                <a
                  href={CONTACT.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block mt-4 px-6 py-2 rounded-full ${
                    isDarkMode
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  Download CV
                </a>
              </div>
            </motion.div>
  
            <motion.form
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className={`p-6 rounded-lg ${
                isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
              }`}
            >
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={`w-full p-3 rounded ${
                    isDarkMode
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-black'
                  }`}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`w-full p-3 rounded ${
                    isDarkMode
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-black'
                  }`}
                  required
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message"
                  className={`w-full p-3 rounded ${
                    isDarkMode
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-black'
                  }`}
                  required
                ></textarea>
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3 rounded-full ${
                    isDarkMode
                      ? 'bg-white text-black hover:bg-gray-200'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;