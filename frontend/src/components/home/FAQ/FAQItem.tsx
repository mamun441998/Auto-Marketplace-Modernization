"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: FAQItemProps) {
  return (
    <motion.div
      layout
      transition={{
        duration: 0.35,
      }}
      className={`
        overflow-hidden
        rounded-2xl
        border
        bg-white
        shadow-md
        transition-all
        duration-300

        ${
          isOpen
            ? "border-blue-600 shadow-blue-100"
            : "border-slate-200 hover:border-blue-200 hover:shadow-lg"
        }
      `}
    >
      {/* Question */}

      <button
        onClick={onClick}
        className="
          flex
          w-full
          items-center
          justify-between
          px-6
          py-4
          text-left
        "
      >
        <h3 className="pr-6 text-base font-semibold text-slate-900 lg:text-lg">
          {question}
        </h3>

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className={`
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            transition-all

            ${
              isOpen
                ? "bg-blue-600 text-white"
                : "bg-blue-50 text-blue-600"
            }
          `}
        >
          {isOpen ? (
            <Minus size={18} />
          ) : (
            <Plus size={18} />
          )}
        </motion.div>
      </button>

      {/* Answer */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <div className="border-t border-slate-100 px-6 py-4">
              <p className="text-sm leading-7 text-slate-600">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}