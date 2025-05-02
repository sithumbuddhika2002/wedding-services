"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah & Michael",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The floral decorations were absolutely stunning! Our guests couldn't stop talking about how beautiful everything looked. The photos and videos captured every special moment perfectly.",
      rating: 5,
    },
    {
      name: "Emily & James",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Working with this team was the best decision we made for our wedding. They took care of everything and made our day stress-free and magical.",
      rating: 5,
    },
    {
      name: "Jessica & David",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The attention to detail was incredible. They listened to our vision and brought it to life even better than we imagined. The photos and video are treasures we'll cherish forever.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">What Our Couples Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the couples who trusted us with their special day.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-10 pb-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-rose-200 shadow-lg">
                      <Image
                        src={testimonials[activeIndex].image || "/placeholder.svg"}
                        alt={testimonials[activeIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex mb-6">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-xl mb-6 leading-relaxed">
                      "{testimonials[activeIndex].quote}"
                    </p>
                    <h3 className="font-bold text-2xl bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                      {testimonials[activeIndex].name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-rose-200 hover:border-rose-300 hover:bg-rose-50"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5 text-rose-500" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-gradient-to-r from-rose-500 to-purple-500 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-rose-200 hover:border-rose-300 hover:bg-rose-50"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5 text-rose-500" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
