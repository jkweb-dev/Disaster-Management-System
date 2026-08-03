"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Ambulance,
  Users,
  Radio,
} from "lucide-react";


const trustItems = [
  {
    icon: ShieldCheck,
    title: "Secure Coordination",
    description:
      "Organized emergency communication between victims and response teams.",
  },

  {
    icon: Ambulance,
    title: "Rescue Support",
    description:
      "Connects people with verified rescue teams during critical situations.",
  },

  {
    icon: Users,
    title: "Community Driven",
    description:
      "Helping communities prepare and respond together.",
  },

  {
    icon: Radio,
    title: "Real-Time Updates",
    description:
      "Fast information sharing for better emergency decisions.",
  },
];


const TrustedSection = () => {

  return (

    <section className="bg-white py-20">

      <div className="
        mx-auto
        max-w-7xl
        px-5
        lg:px-8
      ">


        {/* Heading */}

        <div className="text-center">

          <span
            className="
            inline-flex
            rounded-full
            bg-blue-50
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-600
            "
          >
            Trusted Emergency Network
          </span>


          <h2
            className="
            mt-5
            text-3xl
            font-bold
            text-slate-900
            sm:text-4xl
            "
          >
            Built To Connect People When It Matters Most
          </h2>


          <p
            className="
            mx-auto
            mt-4
            max-w-2xl
            text-slate-600
            "
          >
            A unified platform bringing victims, rescue teams,
            and emergency coordinators together.
          </p>

        </div>



        {/* Cards */}

        <div
          className="
          mt-12
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >

          {
            trustItems.map((item,index)=>{

              const Icon = item.icon;

              return (

                <motion.div

                  key={item.title}

                  initial={{
                    opacity:0,
                    y:30
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    duration:0.5,
                    delay:index * 0.1
                  }}

                  viewport={{
                    once:true
                  }}

                  className="
                  rounded-3xl
                  border
                  border-slate-100
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  hover:-translate-y-2
                  hover:shadow-xl
                  "

                >

                  <div
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-600
                    to-emerald-500
                    text-white
                    "
                  >

                    <Icon size={24}/>

                  </div>


                  <h3
                    className="
                    mt-5
                    text-lg
                    font-bold
                    text-slate-900
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-slate-600
                    "
                  >
                    {item.description}
                  </p>


                </motion.div>

              )

            })
          }


        </div>


      </div>

    </section>

  );
};


export default TrustedSection;