"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldAlert } from "lucide-react";


const CTASection = () => {

  return (

    <section className="
    relative
    overflow-hidden
    py-20
    "
    >

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-blue-600
        to-emerald-500
        "
      />


      <div
        className="
        absolute
        -right-20
        -top-20
        h-72
        w-72
        rounded-full
        bg-white/20
        blur-3xl
        "
      />


      <div
        className="
        relative
        mx-auto
        max-w-7xl
        px-5
        lg:px-8
        "
      >

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
          rounded-3xl
          border
          border-white/20
          bg-white/10
          p-8
          text-center
          backdrop-blur-xl
          sm:p-12
          "

        >


          <div
            className="
            mx-auto
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-white/20
            text-white
            "
          >

            <ShieldAlert size={30}/>

          </div>



          <h2
            className="
            mt-6
            text-3xl
            font-extrabold
            text-white
            sm:text-4xl
            "
          >

            Ready To Make Emergency Response Faster?

          </h2>



          <p
            className="
            mx-auto
            mt-4
            max-w-2xl
            text-white/80
            "
          >

            Join a connected emergency network where victims,
            rescue teams, and coordinators work together.

          </p>



          <div
            className="
            mt-8
            flex
            flex-col
            justify-center
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
              bg-white
              px-7
              py-3.5
              font-semibold
              text-blue-600
              transition
              hover:scale-105
              "
            >

              Get Started

              <ArrowRight size={18}/>

            </Link>



            <Link
              href="/register?rescue=true"
              className="
              rounded-xl
              border
              border-white/40
              px-7
              py-3.5
              font-semibold
              text-white
              transition
              hover:bg-white/10
              "
            >

              Join Rescue Team

            </Link>


          </div>


        </motion.div>


      </div>


    </section>

  );
};


export default CTASection;