"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `Kar AI Web Integrations`,
              subtitle: `Remotely Maintain Your AI Solutions, From Anywhere, Anytime.`,
              description: `Kar AI Web solutions help you integrate seamlessly with multiple platforms. Manage data, track insights, and perform analytics efficiently from a single interface.`,
            }}
          />

          {/* <!-- Section Title End --> */}
        </div>

        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap justify-around gap-y-10">
            {/* Motion elements for Kar AI and partners */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-07.svg"// Placeholder for Kar AI logo
                  alt="Kar AI"
                />
              </div>
            </motion.div>

            {/* Add your partner brands */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-08.svg"// Another example brand
                  alt="Brand 1"
                />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-09.svg"// Another example brand
                  alt="Brand 2"
                />
              </div>
            </motion.div>

            {/* Add additional integration logos */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/brand-10.svg" // Another example brand
                  alt="Brand 3"
                />
              </div>
            </motion.div>

            {/* You can add more brands and customize them accordingly */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
