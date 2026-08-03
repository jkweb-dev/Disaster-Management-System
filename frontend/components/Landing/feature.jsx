"use client";

import { motion } from "framer-motion";
import {
  Siren,
  MapPinned,
  MessageCircleMore,
  UsersRound,
  BookOpenCheck,
  ShieldCheck,
} from "lucide-react";


const features = [
  {
    icon: Siren,
    title: "Emergency Reporting",
    description:
      "Victims can quickly report emergencies and share important details for faster response.",
  },

  {
    icon: MapPinned,
    title: "Live Location Tracking",
    description:
      "Location-based coordination helps rescue teams reach affected areas efficiently.",
  },

  {
    icon: UsersRound,
    title: "Rescue Team Management",
    description:
      "Admin can organize and assign verified rescue teams according to situations.",
  },

  {
    icon: MessageCircleMore,
    title: "Real-Time Communication",
    description:
      "Instant updates between victims, rescue teams, and coordinators.",
  },

  {
    icon: BookOpenCheck,
    title: "Emergency Information",
    description:
      "Access safety guides and preparation information for different disasters.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Protected authentication and controlled access for every user role.",
  },
];


const FeaturesSection = () => {

  return (

    <section
      className="
      bg-slate-50
      py-20
      "
    >

      <div
        className="
        mx-auto
        max-w-7xl
        px-5
        lg:px-8
        "
      >

        {/* Heading */}

        <div className="text-center">

          <span
            className="
            rounded-full
            bg-emerald-50
            px-4
            py-2
            text-sm
            font-semibold
            text-emerald-600
            "
          >
            Powerful Features
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
            Everything Needed For Faster Emergency Response
          </h2>


          <p
            className="
            mx-auto
            mt-4
            max-w-2xl
            text-slate-600
            "
          >
            A complete platform designed to coordinate disasters,
            rescue operations, and emergency communication.
          </p>


        </div>



        {/* Feature Cards */}


        <div
          className="
          mt-12
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
          "
        >

          {
            features.map((feature,index)=>{

              const Icon = feature.icon;


              return (

                <motion.div

                key={feature.title}

                initial={{
                  opacity:0,
                  y:30
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:.5,
                  delay:index*.1
                }}

                viewport={{
                  once:true
                }}

                className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-sm
                transition
                hover:-translate-y-2
                hover:shadow-xl
                "

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
                    transition
                    group-hover:scale-110
                    "
                  >

                    <Icon size={28}/>

                  </div>


                  <h3
                    className="
                    mt-6
                    text-xl
                    font-bold
                    text-slate-900
                    "
                  >
                    {feature.title}
                  </h3>


                  <p
                    className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-slate-600
                    "
                  >
                    {feature.description}
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


export default FeaturesSection;