import React from 'react'
import LineGradient from '../features/LineGradient'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

const Contact = () => {
  const {
    register,
    trigger,
    formState: {errors}

  } = useForm()

  const onSubmit = async (e) => {
    //console.log("~ e", e);
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact py-48">
        {/* Headings */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
            }}
            className="flex justify-end w-full"
        >
        <div>
          <p className="font-playfair font-semibold text-4xl items-center">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* Form & Image */}
      <div className="md:flex md:justify-between gap-16 mt-5">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="../assets/Email-img.png" alt="contact" className='max-h-[445px]'/>
        </motion.div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 mt-10 md:mt-0"
        >
            <form
              //target='_blank'
              onSubmit={onSubmit}
              action='https://formsubmit.co/9702151d021e76aabea09c341bbfba5e'
              method='POST'
            >
                <input
                    className="rounded-md w-full bg-fuchsia-200 text-slate-950 font-semibold placeholder-opaque-black p-3"
                    type="text"
                    placeholder="NAME"
                    {...register("name", {
                        required: true,
                        maxLength: 100,
                    })}
                />

                {errors.name && (
                    <p className="text-red mt-1">
                        {errors.name.type === "required" && "This field is required."}
                        {errors.name.type === "maxLength" && "Max length is 100 char."}
                    </p>
                )}

                <input
                    className="rounded-md w-full bg-sky-200 text-slate-950 font-semibold placeholder-opaque-black p-3 mt-5"
                    type="text"
                    placeholder="EMAIL"
                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                />

                {errors.email && (
                    <p className="text-red mt-1">
                        {errors.email.type === "required" && "This field is required."}
                        {errors.email.type === "pattern" && "Invalid email address."}
                    </p>
                )}

                <textarea
                    className="rounded-md w-full bg-lime-200 text-slate-950 font-semibold placeholder-opaque-black p-3 mt-5"
                    name="message"
                    placeholder="MESSAGE"
                    rows="8"
                    cols="50"
                    {...register("message", {
                        required: true,
                        maxLength: 3000,
                    })}
                />
                {errors.message && (
                    <p className="text-red mt-1">
                        {errors.message.type === "required" &&
                        "This field is required."}
                        {errors.message.type === "maxLength" &&
                        "Max length is 3000 char."}
                    </p>
                )}

                <button
                  className="p-5 bg-white font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500
                  rounded-md"
                  type="submit"
                  
                >
                    SEND MESSAGE

                </button>


            </form>

        </motion.div>

      </div>











    </section>
  )
}



export default Contact