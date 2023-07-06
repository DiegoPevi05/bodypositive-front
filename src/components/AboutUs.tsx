import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../components/ui/hoc";
import {  textVariant,slideIn } from "../lib/motions";
import { Question  } from "../assets/images"
import {MailCheck,Instagram} from "lucide-react";


const About = () => {

  return (
    <>
      <div className="w-full h-full flex flex-col sm:flex-row overflow-hidden">
        <div className="w-full h-full flex-col">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='w-full flex items-center justify-center py-4 sm:py-0'
          >
            <img src={Question} alt='ImageAbout' className='relative w-full sm:w-[640px] h-[250px] sm:h-[640px] object-contain' />
          </motion.div>
        </div>
        <motion.div 
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full h-[400px] sm:h-[600px] flex-col rounded-[20px] p-4 sm:p-6 bg-fifth">
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-white`}>
              Noi
            </p>
            <h2 className={`${styles.sectionHeadText} text-secondary md:text-[50px]`}>Cosa è Social Challenge ?</h2>
          </motion.div>

          <motion.p
            className='mt-4 text-white text-justify text-[13px] leading-[15px] lg:text-[17px] lg:leading-[25px]'
          >
            {"Un metodo innovativo per lavorare con i social per: creare contenuti, raccogliere dati e diffondere messaggi positivi"}
          </motion.p>
          <motion.div className="flex flex-row w-full h-auto mt-2 md:mt-8">
            <a id={"Email"} href="mailto:body.positive@outlook.it" target="_blank" className="flex w-auto h-auto justify-center cursor-pointer mx-auto">
              <MailCheck className={`${styles.sectionHeadText} text-secondary h-10 w-auto transform hover:-translate-y-2 transition-all duration-300`}/> 
            </a>
            <a id={"instagram"} href="https://instagram.com/bodypositive_sc?igshid=MzRlODBiNWFlZA==" target="_blank" className="flex w-auto h-auto justify-center cursor-pointer mx-auto">
              <Instagram  className={`${styles.sectionHeadText} text-secondary h-10 w-auto transform hover:-translate-y-2 transition-all duration-300`}/> 
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "noi");
