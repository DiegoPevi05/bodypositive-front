import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../components/ui/hoc";
import { textVariant } from "../lib/motions";
import { Scale,Boxes, Sword, Hammer, Share2, Trophy } from 'lucide-react';

const stepsData = [
  {
    title: "Regole",
    icon: <Scale/>,
    iconBg: "#6669C6",
    description: "Un facilitatore spiega ai ragazzi il regolamento",
  },
  {
    title: "Squadra",
    icon: <Boxes/>,
    iconBg: "#6669C6",
    description: "I ragazzi, divisi in squadre, creano un nuovo profilo Instagram",
  },
  {
    title: "Sfida",
    icon: <Sword/>,
    iconBg: "#6669C6",
    description: "Ogni squadra riceve tramite social alcune sfide da superare",
  },
  {
    title: "Creazione",
    icon: <Hammer/>,
    iconBg: "#6669C6",
    description: "Ogni sfida prevede la creazione e la promozione di contenuti social",
  },
  {
    title: "Condivisione",
    icon: <Share2/>,
    iconBg: "#6669C6",
    description: "Viene attribuito un punteggio in base ai like ricevuti e ai follower coinvolti",
  },
  {
    title: "Vittoria",
    icon: <Trophy/>,
    iconBg: "#6669C6",
    description: "La squadra con il punteggio più alto riceve un premio",
  },
];

const ChallengeStepCard = ({ step }:any) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#6669C6",
        color: "#F1F1F0",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #6669C6" }}
      iconStyle={{ background: step.iconBg, color: "#F9B314" }}
      icon={step.icon}
    >
      <div>
        <h3 className='text-secondary text-[24px] font-bold'>{step.title}</h3>
        <p className="text-fourth text-[14px]">{step.description}</p>
      </div>
    </VerticalTimelineElement>
  );
};

const Challenge = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Cosa devi fare
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          La Sfida
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {stepsData.map((step, index) => (
            <ChallengeStepCard
              key={`step-${index}`}
              step={step}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Challenge, "challenge");
