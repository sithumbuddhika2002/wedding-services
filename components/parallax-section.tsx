"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={ref} className="py-20 relative overflow-hidden h-[50vh] flex items-center">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Parallax background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <motion.div style={{ y: y2, opacity }} className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Crafting Beautiful Memories</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Every detail matters in creating the perfect wedding experience
        </p>
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"
      />
    </section>
  )
}
