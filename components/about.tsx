"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Heart, Award, Users } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])

  const stats = [
    {
      icon: Heart,
      value: "250+",
      label: "Weddings",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Couples",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-rose-50 to-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              style={{ y: y1, rotate }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image src="/placeholder.svg?height=800&width=600" alt="Our team" fill className="object-cover" />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl -z-10 opacity-80"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl -z-10 opacity-80"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
              Creating Magical Wedding Experiences
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              With over 15 years of experience in the wedding industry, we've helped hundreds of couples create their
              dream wedding. Our team of passionate professionals specializes in exquisite floral decorations, stunning
              photography, and cinematic videography.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              We believe that every wedding is unique, and we work closely with our clients to understand their vision
              and bring it to life. Our attention to detail and commitment to excellence ensures that your special day
              will be everything you've imagined and more.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-white shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-purple-500 rounded-full shadow-md flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
