import React from 'react';
import emailjs from 'emailjs-com';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_p99rffk',
      'template_5rzkk2k',
      e.target,
      '5-6hk_JU1p-xcVbvp'
    ).then(
      (result) => {
        alert('Message sent successfully!');
        console.log(result.text);
      },
      (error) => {
        alert('Failed to send the message.');
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}`;
  const whatsappMessage = 'Hello, I would like to get in touch!';
  const emailSubject = 'Inquiry';
  const emailBody = 'Hello, I have an inquiry.';

  return (
    <section id="contact" className="relative py-20 min-h-screen overflow-x-hidden">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-3xl px-4">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-10 text-center"
          >
            Get in Touch
          </motion.h2>
          <form onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-neutral-700 rounded bg-neutral-800 text-neutral-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-neutral-700 rounded bg-neutral-800 text-neutral-300"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="p-3 border border-neutral-700 rounded bg-neutral-800 text-neutral-300"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 text-neutral-950 px-4 py-2 rounded hover:bg-cyan-400 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 text-center text-neutral-300">
            <p className="mb-4">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                {CONTACT.address}
              </a>
            </p>
            <p className="mb-4">
              <a
                href={`https://wa.me/${CONTACT.phoneNo.replace(/\s+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                className="hover:text-cyan-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {CONTACT.phoneNo}
              </a>
            </p>
            <p className="mb-4">
              <a
                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                className="hover:text-cyan-400"
              >
                {CONTACT.email}
              </a>
            </p>
            <a
              href={CONTACT.cvUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-cyan-500 text-neutral-950 px-4 py-2 rounded hover:bg-cyan-400 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center text-neutral-300 py-4">
  <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Designed and developed by Sidharth Saholiya. All rights reserved
    </p>
    <p className="text-sm">
      <a href="#contact" className="hover:text-cyan-400">
        Contact me
      </a>
      {' | '}
      <a
        href="https://www.linkedin.com/in/sidharthsaholiya/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400"
      >
        LinkedIn
      </a>
      {' | '}
      <a
        href="https://github.com/sidharth0909"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400"
      >
        GitHub
      </a>
    </p>
  </div>
</footer>

    </section>
  );
};

export default Contact;
