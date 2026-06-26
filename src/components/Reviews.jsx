import { motion } from 'framer-motion'

const reviews = [
  {
    id: 1,
    quote:
      'Everything is extremely fresh and tastes amazing. You would never know you\'re eating something healthy.',
    name: 'Brittany H.',
    stars: 5,
  },
  {
    id: 2,
    quote:
      'The pride the owner has for his shop and customers is evident. Highly recommend.',
    name: 'Pablo A.',
    stars: 5,
  },
  {
    id: 3,
    quote:
      'Protein Monkey is a staple to Westchase and West Park Village. Couldn\'t recommend this place more.',
    name: 'Cody M.',
    stars: 5,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-monkey-orange"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <motion.article
      variants={cardVariants}
      className="flex-shrink-0 w-[82vw] snap-center md:w-auto md:flex-shrink bg-monkey-cream rounded-2xl p-7 shadow-sm border border-monkey-orange/10 flex flex-col gap-4"
    >
      <StarRating count={review.stars} />
      <blockquote className="text-monkey-brown/80 text-base leading-relaxed flex-1">
        "{review.quote}"
      </blockquote>
      <footer>
        <p className="text-monkey-brown font-semibold text-sm">
          — {review.name}
        </p>
        <p className="text-monkey-brown/40 text-xs mt-0.5">
          Google Review · ★ 5.0
        </p>
      </footer>
    </motion.article>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-monkey-brown py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <p className="text-monkey-orange font-semibold text-sm tracking-widest uppercase mb-3">
            Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-monkey-white">
            What the Neighborhood Is Saying
          </h2>
          <p className="mt-4 text-monkey-cream/60 text-base md:text-lg max-w-xl mx-auto">
            Don't just take our word for it.
          </p>
        </motion.div>

        {/* Review Cards — horizontal scroll on mobile, 3-col grid on desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-5 pb-4 -mx-6 px-6
                     md:grid md:grid-cols-3 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0"
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </motion.div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/maps/place/Protein+Monkey/@28.0438289,-82.599891,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2eb4e87459caf:0xdae3af129012a66e!8m2!3d28.0438242!4d-82.5973107!16s%2Fg%2F11nmksjzj2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-monkey-orange/80 hover:text-monkey-orange text-sm font-medium underline underline-offset-4 transition-colors duration-200"
          >
            See all reviews on Google →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
