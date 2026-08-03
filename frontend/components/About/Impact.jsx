"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Activity,
  Globe,
} from "lucide-react";


const impacts = [
  {
    icon: Users,
    value: "10K+",
    title: "People Supported",
  },

  {
    icon: Activity,
    value: "500+",
    title: "Rescue Operations",
  },

  {
    icon: Globe,
    value: "24/7",
    title: "Emergency Network",
  },
];


const ImpactSection = () => {

  return (

    <section
      className="
      py-20
      bg-slate-50
      "
    >

      <div
        className="
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-12
        px-5
        lg:grid-cols-2
        lg:px-8
        "
      >


        {/* Image */}

        <motion.div

        initial={{
          opacity:0,
          x:-40
        }}

        whileInView={{
          opacity:1,
          x:0
        }}

        viewport={{
          once:true
        }}

        >

          <div
            className="
            relative
            overflow-hidden
            rounded-3xl
            shadow-xl
            "
          >

            <Image

            src="/images/Landing/Helicopter.jpg"

            alt="Rescue operation"

            width={700}

            height={600}

            className="
            h-[480px]
            w-full
            object-cover
            "

            />

          </div>

        </motion.div>




        {/* Content */}


        <motion.div

        initial={{
          opacity:0,
          x:40
        }}

        whileInView={{
          opacity:1,
          x:0
        }}

        viewport={{
          once:true
        }}

        >


          <div
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-blue-600
            to-emerald-500
            text-white
            "
          >

            <Heart size={28}/>

          </div>



          <h2
            className="
            mt-6
            text-3xl
            font-bold
            text-slate-900
            sm:text-4xl
            "
          >

            Creating Real Impact

          </h2>



          <p
            className="
            mt-5
            leading-relaxed
            text-slate-600
            "
          >

            Every emergency requires quick decisions and
            organized action. RescueNet helps transform
            scattered information into coordinated response.

          </p>



          <div
            className="
            mt-8
            grid
            gap-4
            sm:grid-cols-3
            "
          >

          {
            impacts.map((item)=>{

              const Icon=item.icon;

              return (

                <div
                  key={item.title}
                  className="
                  rounded-2xl
                  bg-white
                  p-5
                  shadow-sm
                  "
                >

                  <Icon
                  className="text-blue-600"
                  />


                  <h3
                  className="
                  mt-3
                  text-2xl
                  font-bold
                  text-slate-900
                  "
                  >
                    {item.value}
                  </h3>


                  <p
                  className="
                  text-sm
                  text-slate-500
                  "
                  >
                    {item.title}
                  </p>


                </div>

              )

            })
          }


          </div>



        </motion.div>


      </div>


    </section>

  );
};


export default ImpactSection;