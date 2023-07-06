import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../components/ui/hoc";
import {slideIn } from "../lib/motions";
import { Method  } from "../assets/images"


const MethodComponent = () => {

  return (
    <>
      <div className="w-full h-full flex flex-col sm:flex-row overflow-hidden mt-20">
        <div className="w-full h-full flex-col">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='w-full flex items-center justify-center py-4 sm:py-0'
          >
            <img src={Method} alt='ImageAbout' className='relative w-full sm:w-[640px] h-[250px] sm:h-[500px] object-contain' />
          </motion.div>
        </div>
        <motion.div 
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full h-[500px] sm:h-[600px] flex flex-col p-4 sm:p-6 bg-transparent gap-4">
          <h2 className={`${styles.sectionSubText} text-secondary `}>Qual è il Metodo ?</h2>
          <motion.div 
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0}}
            transition={{ duration: 2 }}
            className="w-full xs:w-[80%] h-auto bg-fifth rounded-[15px] p-4 flex flex-col">
            <h3 className="font-heading text-secondary">Creare contenuti</h3>
            <p className="text-white text-[12px] sm:text-[16px]">Sono i ragazzi stessi, utilizzatori esperti dei Social, a produrre contenuti con il taglio e il linguaggio che risulta loro più comprensibile e accattivante.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0}}
            transition={{ duration: 3 }}
            className="w-full xs:w-[80%] h-auto bg-fifth rounded-[15px] p-4 flex flex-col xs:ml-auto">
            <h3 className="font-heading text-secondary">Raccogliere dati</h3>
            <p className="text-white text-[12px] sm:text-[16px]">I ragazzi producono dati social sulla propria visione del mondo, sulle loro percezioni ed il loro stile di vita.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0}}
            transition={{ duration: 4 }}
            className="w-full xs:w-[80%] h-auto bg-fifth rounded-[15px] p-4 flex flex-col">
            <h3 className="font-heading text-secondary">Diffondere messaggi positivi</h3>
            <p className="text-white text-[12px] sm:text-[16px]">I ragazzi si trasformano in veri e propri influencer e inondano il web di messaggi educativi utilizzando il linguaggio dei loro coetanei.</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(MethodComponent, "method");
