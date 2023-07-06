import {FC, useState } from "react";
import { motion } from "framer-motion";
import {SocialDashboard} from "../assets/images";
import { styles } from "../styles";
import { SectionWrapper } from "./ui/hoc";
import { slideIn } from "../lib/motions";
import {toast} from "react-hot-toast";
import Button from './ui/Button';
import axios from "axios";

interface FormProps {
  name:string;
  email:string;
  message:string;
}

const Contact:FC = () => {

  const [Loading, setLoading] = useState<boolean>(false);

  const emptyData:FormProps = {
    name:"",
    email:"",
    message:""
  }

  const [form, setForm] = useState<FormProps>(emptyData);

  const handleChange = (event:any) => {
    const { target } = event;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };


  //which is the type of React Event hanlder
  const handleSubmit = async() => {
    setLoading(true);
    try{
      const config = {
        headers: {
          Authorization: import.meta.env.VITE_FORM_UATH_TOKEN
        },
        params:{
          language:"it"
        }
      }
      await axios.post("/api/send-email",form,config);
      setForm(emptyData);
      toast.success("Messagio inviato con successo");
    } catch(error){
      toast.error("Non si ha potuto inviare il messaggio");
    } finally{
      setLoading(false);
    }

  };

  return (
    <div
      className={`xl:mt-0 h-full flex md:flex-row flex-col-reverse gap-0 lg:gap-10 overflow-hidden `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='w-full md:w-1/2  p-4 sm:p-8 rounded-2xl red-orange-gradient'
      >
        <p className={styles.sectionSubText}>{"Informazione"}</p>
        <h2 className={styles.sectionHeadText}>{"Contattaci"}</h2>
        <div
          className='mt-0 flex flex-col gap-2 sm:gap-8 w-full'
        >
          <div className='flex flex-col'>
            <span className='font-small sm:text-lg mb-2 sm:mb-4'>{"Nome"}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={"Qual e il tuo nome"}
              className='bg-fifth py-2 sm:py-4 px-6 text-secondary placeholder:text-secondary rounded-lg font-small sm:font-medium
                transition-color focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              '
            />
          </div>
          <div className='flex flex-col'>
            <span className='font-small sm:text-lg mb-2 sm:mb-4'>{"Email"}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={"Qual e la tua email"}
              className='bg-fifth py-2 sm:py-4 px-6 text-secondary placeholder:text-secondary rounded-lg font-small sm:font-medium
                transition-color focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              '
            />
          </div>
          <div className='flex flex-col'>
            <span className='font-small sm:text-lg mb-2 sm:mb-4'>{"Messagio"}</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={"Cosa vuole dirmi?"}
              className='bg-fifth py-2 sm:py-4 px-6 text-secondary placeholder:text-secondary rounded-lg font-small sm:text-lg 
                transition-color focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              '
            />
          </div>
          <Button 
            type="submit" 
            isLoading={Loading} 
            className="text-lg"
            onClick={handleSubmit}
          >
            {"Invia"}
          </Button>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='w-full md:w-1/2 h-auto flex items-center '
      >
          <motion.img
            src={SocialDashboard}
            alt="SocialDashboard"
            className="w-full h-[140px] sm:h-[180px] lg:h-auto object-contain"
          />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
