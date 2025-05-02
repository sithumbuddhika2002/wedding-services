"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-rose-500/30 top-10 left-10"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-purple-500/30 bottom-10 right-10"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <motion.h3
              className="text-2xl font-serif font-bold mb-6 bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              BloomWed
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Creating unforgettable wedding moments with exquisite decorations, stunning photography, and cinematic
              videography.
            </motion.p>
            <motion.p
              className="text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              © {new Date().getFullYear()} BloomWed. All rights reserved.
            </motion.p>
          </div>

          <div>
            <motion.h4
              className="text-xl font-medium mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Services
            </motion.h4>
            <ul className="space-y-3">
              {["Wedding Decoration", "Photography", "Videography", "Complete Packages"].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-rose-300 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></span>
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h4
              className="text-xl font-medium mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#" },
                { name: "About Us", href: "#about" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-rose-300 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h4
              className="text-xl font-medium mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Newsletter
            </motion.h4>
            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Subscribe to our newsletter for wedding inspiration and special offers.
            </motion.p>
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 w-full rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 px-4 py-3 rounded-r-lg transition-colors duration-300">
                Subscribe
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
