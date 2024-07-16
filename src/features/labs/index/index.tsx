"use client";

import { cn } from "@/lib/utils/tailwind";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { MouseEvent, useState } from "react";

export interface LabsProps {}

const container: Variants = {
  initial: {
    opacity: 0,
    y: 5,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  initial: {
    opacity: 0,
    y: 5,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Labs = (props: LabsProps) => {
  const [selectedPos, setSelectedPos] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [selectedId, setSelectedId] = useState<string | null>("");

  const handlePressProject = (
    event: MouseEvent<HTMLButtonElement, MouseEvent>,
    itemId: string
  ) => {
    const targetEl = event.target as HTMLElement;
    const { x, y, width, height } = targetEl.getBoundingClientRect();
    console.log({ x, y, width, height });
    setSelectedPos({ x, y, width, height });
    setSelectedId(itemId);
  };

  return (
    <div
      {...props}
      className={cn(
        "font-geist-sans flex items-center justify-center px-6 md:px-0",
        "min-h-lvh w-full bg-labs-background text-labs-foreground"
      )}
    >
      <motion.div
        variants={container}
        initial="initial"
        animate="active"
        className="max-w-[490px]"
      >
        <Image
          src="/assets/peeps-avatar-alpha-transparent.png"
          width={80}
          height={80}
          className="w-10 h-10 object-cover rounded-md mb-4 bg-labs-foreground"
          alt="Avatar"
        />
        <motion.h2 variants={item} className="text-2xl font-bold mb-4">
          Daniel <span className="text-sm">(Trong Duong)</span>
        </motion.h2>
        <motion.p
          variants={item}
          className="text-2xl font-light text-labs-muted mb-10"
        >
          A front-end engineer, craft intuitive user interfaces and optimize web
          performance. I work with modern frameworks to build responsive
          designs, ensuring seamless experiences across devices while
          collaborating with cross-functional teams.
        </motion.p>

        <motion.div variants={item}>
          <p className="text-sm font-normal text-labs-muted mb-3">PROJECTS</p>
          <div className="grid grid-cols-2 gap-x-4">
            {Array(10)
              .fill(1)
              .map((_, idx) => (
                <motion.button
                  variants={item}
                  key={idx}
                  layoutId={idx.toString()}
                  className="flex items-center justify-between py-2 border-b border-labs-border"
                  onClick={(e: any) => handlePressProject(e, idx.toString())}
                >
                  labs{idx}.supply{" "}
                  <ChevronRight className="size-4 text-labs-muted" />
                </motion.button>
              ))}
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div className="absolute text-black" layoutId={selectedId}>
              <motion.div className="relative z-10 w-[300px] h-[150px] bg-background overflow-hidden">
                <motion.h5>Category</motion.h5>
                <motion.h2>Title</motion.h2>
                <motion.button onClick={() => setSelectedId(null)}>
                  Close
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                },
              }}
              className="fixed top-0 left-0 w-full h-lvh bg-black/50"
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Labs;