/* eslint-disable react/no-unescaped-entities */
import styles from "@/app/styles/styles";
import { cardContent } from "@/utils";
import { motion } from "framer-motion";

type CardContent = {
  title: string;
  benefits: string[];
  price: number;
  annualPrice: number;
};

function SubCard({ title, benefits, annualPrice, price }: CardContent) {
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const cardTransition = {
    duration: 0.5,
  };
  return (
    <motion.div
      variants={cardVariants}
      animate="visible"
      transition={cardTransition}
      whileHover={{ scale: 1.1 }}
      className="w-[350px] md:w-[488px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col mx-auto md:mx-3 my-2 cursor-pointer"
    >
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">
        {title}
      </h1>
      <div className="">
        <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-col items-center justify-center">
          {benefits.map((benefit, i) => (
            <li key={i}>- {benefit}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col text-gray-400 w-full">
        <p className="text-gray-400">
          <span className="text-4xl text-gray-100">${price}</span>/month
        </p>
        {/* <p className="">
          Billed anually at{" "}
          <span className="text-4xl text-gray-100">${annualPrice}</span>/year
        </p> */}
      </div>
      <div className="mt-2  w-full flex">
        <button className="bg-blue-500 rounded-md flex-1 hover:bg-blue-300 transition duration-200 ease-out">
          Subscribe
        </button>
      </div>
    </motion.div>
  );
}

export default function SubModules() {
  return (
    <div
      className={`flex flex-col ${styles.xPaddings} ${styles.yPaddings} my-2`}
    >
      <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center mb-7">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-white font-semibold text-5xl">
            Your story starts with us.
          </h1>
          <p className="mt-[8px] text-center text-[20px] font-normal text-secondary-white sm:text-[32px]">
            With unlimited access to all of our features and tools, you'll be
            able to create stunning images that are sure to impress. Plus, all
            of our plans come with a 30-day money-back guarantee, so you can try
            them risk-free. Don't settle for mediocre images – choose the plan
            that's right for you and start creating amazing visuals today!
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row">
        {cardContent.map((card, i) => (
          <SubCard
            key={i}
            benefits={card.benefits}
            annualPrice={card.annualPrice}
            price={card.price}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
}
