import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "./ui/hoc";
import { fadeIn, textVariant } from "../lib/motions";
import {Context1,Context2,Context3,Context4} from "../assets/images";

const contextData = [
  {
    title:"Context1",
    text: "90% degli adolescenti tra i 13 e i 17 anni ha utilizzato i social media.",
    icon: Context1,
  },
  {
    title:"Context2",
    text: "75% degli adolescenti dichiara di avere almeno un profilo attivo sui social media.",
    icon: Context2,
  },
  {
    title:"Context3",
    text: "51% degli adolescenti dichiara di visitare un sito di social media almeno ogni giorno.",
    icon: Context3,
  },
  {
    title:"Context4",
    text:"86% degli adolescenti tra i 13 e i 17 anni utilizza i social media come principale forma di comunicazione.",
    icon: Context4,
  }
];

const ContextCard = ({ index, text, icon }:any) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-fifth p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-fourth rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-24 h-24 object-contain'
        />

        <p className='text-fifth text-[16px] font-bold text-center'>
          {text}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Context = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>panoramica</p>
        <h2 className={styles.sectionHeadText}>Contesto</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I social media svolgono un ruolo importante nella cultura degli adolescenti di oggi.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {contextData.map((context, index) => (
          <ContextCard key={context.title} index={index} {...context} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Context, "context");
