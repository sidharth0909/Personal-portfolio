import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
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
          {CONTACT.address}
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a 
          href={`mailto:${CONTACT.email}`} 
          className="border-b border-neutral-300 hover:text-cyan-400"
        >
          {CONTACT.email}
        </a>
        <div className="my-4">
          <a
            href={CONTACT.cvUrl}
            download
            className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
