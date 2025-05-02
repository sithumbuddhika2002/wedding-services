"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Wedding backdrop"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />
      </motion.div>

      {/* Animated decorative elements */}
      <motion.div animate={floatingAnimation} className="absolute top-20 right-10 w-64 h-64 opacity-20">
        <Image
          src="/hero.jpg"
          alt="Floral decoration"
          width={300}
          height={300}
          className="object-contain"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          transition: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
        className="absolute bottom-20 left-10 w-48 h-48 opacity-20"
      >
        <Image
          src="/hero.jpg"
          alt="Floral decoration"
          width={300}
          height={300}
          className="object-contain"
        />
      </motion.div>

      <div className="container mx-auto px-4 z-10 pt-24">
        <motion.div style={{ opacity }} className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-800 mb-4 leading-tight">
              Creating{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500">
                Unforgettable
              </span>{" "}
              Wedding Moments
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Exquisite decorations, stunning photography, and cinematic videography to make your special day truly
              magical.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explore Our Services
            </Button>
            <Button
              variant="outline"
              className="border-rose-500 text-rose-500 hover:bg-rose-50 rounded-full px-8 py-6 text-lg backdrop-blur-sm bg-white/30"
            >
              View Gallery
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-gray-600 mb-2 text-sm">Scroll to explore</p>
        <motion.div
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <motion.div className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
