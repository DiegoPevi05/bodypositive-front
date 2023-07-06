import { useState,useEffect } from 'react';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer, slideIn } from "../lib/motions";
import Link from '../components/ui/Link';
import {Iphone,Ragazzi1, Ragazzi2 , Ragazzi3} from "../assets/images";
import { User,Instagram } from 'lucide-react';

const imageCarousel = [Ragazzi1,Ragazzi2,Ragazzi3]


const Hero = () => {

  const [CurrentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageCarousel.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return(
      <motion.section 
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col lg:flex-row w-full h-full sm:h-[800px] mx-auto overflow-hidden">
        <motion.div 
          variants={slideIn("left", "tween", 0.2, 1)}
          className="w-full w-full lg:w-1/2 h-screen sm:h-full flex justify-center items-center lg:pl-[200px]">
          <motion.div className="w-auto h-[70%] sm:h-[70%] lg:h-[70%] relative z-20">
            <motion.img
              src={Iphone}
              alt="Iphone"
              className="w-auto h-full object-contain z-30"
            />
            {imageCarousel.map((image, index) => {
              if (index === CurrentImage) {
                return(
                  <motion.img
                    key={index}
                    src={image}
                    alt={"Ragazzi"+index}
                    className="top-[30%] left-[6%] w-[88%] h-[230px] absolute z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />
                )
              }
            })}
          </motion.div>
          <motion.div className="w-auto h-auto bottom-4 mx-auto absolute flex flex-col">
            <h1 className="font-heading text-fifth text-2xl">4000 Users sul Trend</h1>
            <h2 className="text-secondary text-xl font-bold">#Bodypositive</h2>
            <Link className="w-[200px]" href="https://instagram.com/bodypositive_sc?igshid=MzRlODBiNWFlZA==" target="_blank">Uniti al Trend <Instagram className="ml-4"/></Link>
          </motion.div>
        </motion.div>
        <motion.div 
          variants={slideIn("right", "tween", 0.2, 1)}
          className={`${styles.paddingX} relative inset-0 mx-auto flex flex-col w-full lg:w-1/2 items-center justify-center gap-5`}>
          <div className="w-full">
            <h1 className={`${styles.heroHeadText} text-center sm:text-left`}>
              {"Ciao a Tutti!"} <span className='text-primary'></span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 w-full sm:w-[400px] text-center sm:text-left`}>
              {"Siamo Body Positive - Social Challenge"}<br className='sm:block hidden' />
            </p>
            <p className="mt-2 text-white-100 w-full sm:w-[400px] text-center sm:text-left">
              {"Incoraggiamo l'accettazione del corpo da parte di tutti, indipendentemente dalle dimensioni o dalla forma del corpo."}
            </p>
            <div className="flex flex-row mt-8 sm:mt-5 gap-5 justify-center sm:justify-start">
              <Link className="text-sm sm:text-md gap-2"  href="#noi"><User/>{'Noi'}</Link>
            </div>
          </div>
        </motion.div>
      </motion.section>
  )
}

export default Hero;
