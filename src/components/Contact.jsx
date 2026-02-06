import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [status, setStatus] = useState({
    type: null,
    message: "",
  });

  const onSubmit = async (data) => {
    setStatus({ type: null, message: "" });

    try {
      const serviceId =""
      const templateId = "";
      const publicKey = "";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS environment variables");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      reset();
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err?.text || err?.message || "Failed to send message. Try again later.",
      });
    }
  };

  return (
    <motion.section
      id="Contact"
      className="scroll-mt-8 w-full py-20 bg-white/15 dark:bg-black transition-colors"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="mb-14"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Contact
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            Get in touch with me. I will get back to you as soon as possible.
          </p>
        </motion.div>


        {/* Form */}
        <motion.div
          className="max-w-3xl"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-lg font-semibold text-black dark:text-white mb-1">
            Send me a message
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Fill out the form below and I will get back to you as soon as possible.
          </p>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {/* Name & Phone */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={fadeUp}
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-black dark:text-gray-200">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700
                  dark:bg-white/10 text-black dark:text-white px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2 text-black dark:text-gray-200">
                  Phone 
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+1 (123) xxx-xxxx"
                  className="w-full rounded-md border border-gray-300 dark:border-white/15
                  bg-white dark:bg-white/10 text-black dark:text-white px-4 py-3
                  focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp}>
              <label className="block text-sm font-medium mb-2 text-black dark:text-gray-200">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="your.email@example.com"
                className="w-full rounded-md border border-gray-300 dark:border-white/15
                bg-white dark:bg-white/10 text-black dark:text-white px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp}>
              <label className="block text-sm font-medium mb-2 text-black dark:text-gray-200">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows={5}
                placeholder="Tell me about your project or just say hello..."
                className=" w-full rounded-lg border
    border-gray-300 dark:border-white/15
    bg-white dark:bg-white/10
    text-zinc-900 dark:text-white
    placeholder-gray-400 dark:placeholder-gray-300
    px-4 py-3
    focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
    transition duration-200"
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            {/* Status */}
            {status.type && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-md px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                }`}
              >
                {status.message}
              </motion.div>
            )}

            {/* Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center w-full sm:w-auto
              bg-black dark:bg-white text-white dark:text-black
              px-6 py-3 rounded-md hover:opacity-90 transition disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;