"use client";

import { contactInfo, socialLinks } from "@/data/portfolio";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  IoCall,
  IoLocation,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";

const contactIcons= {
  IoMail,
   IoCall,
 IoLocation,
};

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Title  */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-center">
          Kontactieren Sie Mich
        </motion.h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <h3 className="mb-6 text-2xl font-bold">Kontaktinformationen</h3>
            <p className="mb-8 text-gray-600">
              Für Projektideen und Kooperationen können Sie mich gerne kontaktieren.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = contactIcons[info.icon] || IoMail;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">{info.label}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 transition-all bg-gray-100 rounded-lg hover:bg-gray-900 hover:text-white">
                <IoLogoGithub className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 transition-all bg-gray-100 rounded-lg hover:bg-blue-500 hover:text-white">
                <IoLogoLinkedin className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 transition-all bg-gray-100 rounded-lg hover:bg-gray-900 hover:text-white">
                <IoLogoTwitter className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form  */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Nachricht</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg resize-none focus:border-blue-500 focus:outline-none"
                  placeholder="Ihre Nachricht..."></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold text-white transition-colors rounded-lg bg-blue-600 hover:bg-blue-700">
                Senden
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
