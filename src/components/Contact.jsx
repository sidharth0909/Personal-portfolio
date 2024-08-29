import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const whatsappMessage = "I want to contact you regarding...";
  const emailSubject = "Inquiry";
  const emailBody = "I want to contact you regarding...";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`;

  return (
    <section id="contact" className="pt-20">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl font-bold"
        >
          Get in Touch
        </motion.h2>
        <div className="text-center tracking-tighter">
          <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="my-4"
          >
            <a 
              href={mapUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="border-b border-neutral-300 hover:text-cyan-400"
            >
              {CONTACT.address}
            </a>
          </motion.p>
          <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="my-4"
          >
            <a 
              href={`https://wa.me/${CONTACT.phoneNo.replace(/\s+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`} 
              className="border-b border-neutral-300 hover:text-cyan-400"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {CONTACT.phoneNo}
            </a>
          </motion.p>
          <a 
            href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`} 
            className="border-b border-neutral-300 hover:text-cyan-400"
          >
            {CONTACT.email}
          </a>
          <div className="my-4">
            <a
              href={CONTACT.cvUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
