"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import FAQItem from "./FAQItem";
import { faqs } from "./faqData";

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.div
      className="mx-auto mt-16 max-w-4xl space-y-5"
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.question}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <FAQItem
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() =>
              setOpenIndex(openIndex === index ? -1 : index)
            }
          />
        </motion.div>
      ))}
    </motion.div>
  );
}