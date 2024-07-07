import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-zinc-100  dark:bg-slate-900 dark:text-white">
        <div className="border border-zinc-300 md:w-1/4 p-8 relative shadow-xl rounded-md bg-white  mt-10  dark:bg-slate-900 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Contact Us</h3>

            <div className="flex gap-2 flex-col mt-3  ">
              <label className="input input-bordered flex items-center gap-4 border border-zinc-300 dark:bg-slate-900 dark:text-white dark:border dark:border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Name"
                  {...register("text", { required: true })}
                />
              </label>
              {errors.text && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
              <label className="input input-bordered flex items-center gap-4 border-zinc-300 dark:bg-slate-900 dark:text-white dark:border dark:border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </label>
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
              <textarea
                placeholder="Type message here"
                className="textarea textarea-bordered textarea-lg  max-w-xs text-sm p-2 h-40  border-zinc-300 dark:bg-slate-900 dark:text-white dark:border dark:border-white"
                {...register("textarea", { required: true })}
              ></textarea>
              {errors.textarea && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
              <div className="flex justify-between items-center text-sm mt-4  dark:bg-slate-900 dark:text-white ">
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 ">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
