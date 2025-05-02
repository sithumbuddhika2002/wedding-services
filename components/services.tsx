"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Flower, Film } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: "Wedding Decoration",
      description: "Transform your venue into a breathtaking floral paradise with our custom decoration services.",
      icon: Flower,
      color: "bg-emerald-50 text-emerald-600",
      delay: 0,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Photography",
      description: "Capture every precious moment with our professional photography services.",
      icon: Camera,
      color: "bg-rose-50 text-rose-600",
      delay: 0.2,
      gradient: "from-rose-500 to-pink-500",
    },
    {
      title: "Videography",
      description: "Create a cinematic story of your special day that you'll cherish forever.",
      icon: Film,
      color: "bg-blue-50 text-blue-600",
      delay: 0.4,
      gradient: "from-blue-500 to-purple-500",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">Exceptional Wedding Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive wedding services to make your special day perfect from start to finish.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} whileHover={{ y: -10 }} className="h-full">
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg transform -rotate-6`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mr-2"></span>
                      <span>Customized packages</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mr-2"></span>
                      <span>Professional team</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mr-2"></span>
                      <span>Premium quality</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 hover:border-gray-300 group relative overflow-hidden">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                      Learn More
                    </span>
                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-rose-500 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
