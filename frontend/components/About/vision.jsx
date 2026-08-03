"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Globe2, Sparkles } from "lucide-react";


const VisionSection = () => {

  return (

    <section
      className="
      py-20
      bg-gradient-to-br
      from-slate-50
      to-blue-50
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


        {/* Content */}

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

            <Target size={28}/>

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

            Our Vision

          </h2>



          <p
            className="
            mt-5
            leading-relaxed
            text-slate-600
            "
          >

            Our vision is to create a future where disaster
            response is faster, smarter, and accessible to
            every community.

          </p>



          <p
            className="
            mt-4
            leading-relaxed
            text-slate-600
            "
          >

            By combining technology, real-time communication,
            and coordinated rescue operations, we aim to build
            a safer world prepared for emergencies.

          </p>



          <div
            className="
            mt-8
            grid
            gap-4
            sm:grid-cols-2
            "
          >

            <div
              className="
              rounded-2xl
              bg-white
              p-5
              shadow-sm
              "
            >

              <Globe2
              className="text-blue-600"
              />

              <h3 className="
              mt-3
              font-bold
              text-slate-900
              ">
                Global Impact
              </h3>

              <p className="
              mt-2
              text-sm
              text-slate-600
              ">
                Helping communities become more prepared.
              </p>

            </div>



            <div
              className="
              rounded-2xl
              bg-white
              p-5
              shadow-sm
              "
            >

              <Sparkles
              className="text-emerald-600"
              />

              <h3 className="
              mt-3
              font-bold
              text-slate-900
              ">
                Smart Innovation
              </h3>

              <p className="
              mt-2
              text-sm
              text-slate-600
              ">
                Using modern technology for emergencies.
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
            overflow-hidden
            rounded-3xl
            shadow-xl
            "
          >

            <Image

            src="/images/Landing/Evacuation sense.jpg"

            alt="Community disaster preparation"

            width={700}

            height={600}

            className="
            h-[500px]
            w-full
            object-cover
            "

            />

          </div>


        </motion.div>



      </div>


    </section>

  );
};


export default VisionSection;