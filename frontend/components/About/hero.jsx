"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock } from "lucide-react";


const AboutHero = () => {

  return (

    <section
      className="
      relative
      overflow-hidden
      pt-32
      pb-20
      bg-gradient-to-br
      from-blue-50
      via-white
      to-emerald-50
      "
    >


      {/* Background Effects */}

      <div
        className="
        absolute
        -left-20
        top-20
        h-72
        w-72
        rounded-full
        bg-blue-200/30
        blur-3xl
        "
      />


      <div
        className="
        absolute
        right-0
        bottom-20
        h-72
        w-72
        rounded-full
        bg-emerald-200/30
        blur-3xl
        "
      />



      <div
        className="
        relative
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



        {/* Content */}

        <motion.div

          initial={{
            opacity:0,
            x:-40
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.7
          }}

        >


          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-blue-50
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-600
            "
          >

            <ShieldCheck size={18}/>

            About RescueNet

          </div>



          <h1
            className="
            mt-6
            text-4xl
            font-extrabold
            leading-tight
            text-slate-900
            sm:text-5xl
            "
          >

            Building Technology
            <span
              className="
              block
              bg-gradient-to-r
              from-blue-600
              to-emerald-500
              bg-clip-text
              text-transparent
              "
            >
              That Saves Lives
            </span>

          </h1>



          <p
            className="
            mt-6
            max-w-xl
            text-lg
            leading-relaxed
            text-slate-600
            "
          >

            RescueNet is a modern disaster response platform
            designed to connect victims, rescue teams, and
            emergency coordinators through intelligent technology.

          </p>



          <div
            className="
            mt-8
            grid
            grid-cols-2
            gap-5
            "
          >


            <div
              className="
              rounded-2xl
              bg-white
              p-5
              shadow-lg
              "
            >

              <Users
              className="text-blue-600"
              />

              <h3
              className="
              mt-3
              text-2xl
              font-bold
              "
              >
                500+
              </h3>


              <p
              className="
              text-sm
              text-slate-500
              "
              >
                Rescue Members
              </p>

            </div>



            <div
              className="
              rounded-2xl
              bg-white
              p-5
              shadow-lg
              "
            >

              <Clock
              className="text-emerald-600"
              />


              <h3
              className="
              mt-3
              text-2xl
              font-bold
              "
              >
                24/7
              </h3>


              <p
              className="
              text-sm
              text-slate-500
              "
              >
                Emergency Support
              </p>


            </div>


          </div>



        </motion.div>





        {/* Image */}


        <motion.div

          initial={{
            opacity:0,
            x:40
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.7
          }}

          className="
          relative
          "

        >


          <div
            className="
            overflow-hidden
            rounded-3xl
            shadow-2xl
            "
          >

            <Image

              src="/images/Landing/Disaster Center.jpg"

              alt="Emergency command center"

              width={700}

              height={700}

              className="
              h-[520px]
              w-full
              object-cover
              "
            />

          </div>


          {/* Floating Card */}

          <motion.div

            animate={{
              y:[0,-10,0]
            }}

            transition={{
              duration:3,
              repeat:Infinity
            }}

            className="
            absolute
            bottom-8
            left-5
            rounded-2xl
            bg-white
            p-5
            shadow-xl
            "

          >

            <p className="text-sm text-slate-500">
              Emergency Network
            </p>

            <h3 className="
            mt-1
            text-xl
            font-bold
            text-blue-600
            ">
              Connected & Ready
            </h3>

          </motion.div>


        </motion.div>


      </div>


    </section>

  );
};


export default AboutHero;