"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Emergency Info",
    href: "/emergency-info",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="
        mx-auto
        mt-4
        max-w-7xl
        rounded-2xl
        border
        border-blue-100
        bg-white/80
        backdrop-blur-xl
        shadow-sm
        px-5
        py-4
        "
      >

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div
              className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-blue-600
              to-emerald-500
              text-white
              "
            >
              <ShieldCheck size={24}/>
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Rescue<span className="text-blue-600">Net</span>
              </h1>

              <p className="hidden text-xs text-slate-500 sm:block">
                Disaster Response Platform
              </p>
            </div>

          </Link>


          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 lg:flex">

            {
              navLinks.map((link)=>(
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                  text-sm
                  font-medium
                  text-slate-600
                  transition
                  hover:text-blue-600
                  "
                >
                  {link.name}
                </Link>
              ))
            }

          </div>


          {/* Desktop Buttons */}

          <div className="hidden items-center gap-3 lg:flex">

            <Link
              href="/login"
              className="
              rounded-xl
              border
              border-blue-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-blue-600
              transition
              hover:bg-blue-50
              "
            >
              Login
            </Link>


            <Link
              href="/register"
              className="
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-emerald-500
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-md
              transition
              hover:scale-105
              "
            >
              Register
            </Link>

          </div>


          {/* Mobile Button */}

          <button
            onClick={()=>setOpen(!open)}
            className="
            rounded-lg
            p-2
            text-slate-700
            lg:hidden
            "
          >

            {
              open
              ?
              <X size={26}/>
              :
              <Menu size={26}/>
            }

          </button>


        </div>


        {/* Mobile Menu */}

        {
          open && (

            <motion.div
              initial={{
                opacity:0,
                height:0
              }}

              animate={{
                opacity:1,
                height:"auto"
              }}

              className="
              mt-5
              space-y-4
              border-t
              border-slate-200
              pt-5
              lg:hidden
              "
            >

              {
                navLinks.map((link)=>(
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={()=>setOpen(false)}
                    className="
                    block
                    text-sm
                    font-medium
                    text-slate-700
                    hover:text-blue-600
                    "
                  >
                    {link.name}
                  </Link>
                ))
              }


              <div className="flex gap-3 pt-3">

                <Link
                  href="/login"
                  className="
                  flex-1
                  rounded-xl
                  border
                  border-blue-600
                  py-2.5
                  text-center
                  text-sm
                  font-semibold
                  text-blue-600
                  "
                >
                  Login
                </Link>


                <Link
                  href="/register"
                  className="
                  flex-1
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-emerald-500
                  py-2.5
                  text-center
                  text-sm
                  font-semibold
                  text-white
                  "
                >
                  Register
                </Link>

              </div>


            </motion.div>

          )
        }


      </nav>
    </header>
  );
};


export default Navbar;