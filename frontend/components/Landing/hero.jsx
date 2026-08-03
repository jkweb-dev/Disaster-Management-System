"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";


const Hero = () => {

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

      {/* Background Blur Shapes */}

      <div
        className="
        absolute
        -top-20
        -left-20
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
        top-40
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


        {/* LEFT CONTENT */}

        <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.7
          }}

        >

          <div
            className="
            mb-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-blue-200
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-blue-700
            shadow-sm
            "
          >

            <ShieldCheck size={18}/>

            Trusted Disaster Response Platform

          </div>



          <h1
            className="
            text-4xl
            font-extrabold
            leading-tight
            text-slate-900
            sm:text-5xl
            lg:text-6xl
            "
          >

            Faster Response.
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
              Saving More Lives.
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

            A smart disaster management platform that connects
            victims, rescue teams, and emergency coordinators
            to deliver faster and organized emergency response.

          </p>



          <div
            className="
            mt-8
            flex
            flex-col
            gap-4
            sm:flex-row
            "
          >

            <Link
              href="/register"
              className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-emerald-500
              px-7
              py-3.5
              font-semibold
              text-white
              shadow-lg
              transition
              hover:scale-105
              "
            >

              Report Emergency

              <ArrowRight size={18}/>

            </Link>



            <Link
              href="/register"
              className="
              rounded-xl
              border
              border-blue-600
              bg-white
              px-7
              py-3.5
              text-center
              font-semibold
              text-blue-600
              transition
              hover:bg-blue-50
              "
            >

              Join Rescue Team

            </Link>


          </div>



          {/* Mini Stats */}

          <div
            className="
            mt-10
            grid
            grid-cols-3
            gap-4
            "
          >

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                24/7
              </h3>

              <p className="text-sm text-slate-500">
                Support
              </p>
            </div>


            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Fast
              </h3>

              <p className="text-sm text-slate-500">
                Response
              </p>
            </div>


            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Live
              </h3>

              <p className="text-sm text-slate-500">
                Tracking
              </p>
            </div>


          </div>



        </motion.div>





        {/* RIGHT IMAGE */}


        <motion.div

          initial={{
            opacity:0,
            x:50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.7
          }}

          className="
          relative
          "

        >


          <div
            className="
            relative
            overflow-hidden
            rounded-3xl
            shadow-2xl
            "
          >

            <Image

              src="/images/Landing/Hero Image.jpg"

              alt="Emergency rescue workers helping people"

              width={700}

              height={700}

              priority

              className="
              h-[500px]
              w-full
              object-cover
              "
            />


            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/20
              to-transparent
              "
            />

          </div>





          {/* Floating Card 1 */}

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
            left-5
            top-10
            rounded-2xl
            bg-white
            p-4
            shadow-xl
            "
          >

            <div className="flex gap-3 items-center">

              <Users className="text-blue-600"/>

              <div>

                <p className="text-sm text-slate-500">
                  Active Teams
                </p>

                <p className="font-bold">
                  120+
                </p>

              </div>

            </div>

          </motion.div>





          {/* Floating Card 2 */}

          <motion.div

            animate={{
              y:[0,10,0]
            }}

            transition={{
              duration:3,
              repeat:Infinity
            }}

            className="
            absolute
            bottom-10
            right-5
            rounded-2xl
            bg-white
            p-4
            shadow-xl
            "

          >

            <div className="flex gap-3 items-center">

              <MapPin className="text-emerald-600"/>

              <div>

                <p className="text-sm text-slate-500">
                  Live Locations
                </p>

                <p className="font-bold">
                  Tracking
                </p>

              </div>

            </div>


          </motion.div>


        </motion.div>



      </div>


    </section>

  );
};


export default Hero;