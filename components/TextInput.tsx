"use client";

import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function TextInput() {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className=" w-[354px]">
        <form action="/" method="get" className="flex flex-col gap-8">
          <fieldset>
            {/* EMAIL */}
            <label htmlFor="email" className="text-base text-gray-700">
              Email
            </label>
            <div className="w-full relative bg-red-300">
              <EnvelopeIcon className="size-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="email"
                type="text"
                name="email"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title="email@domaine.com"
                required
                placeholder="name@email.com"
                className="w-full pl-10 py-2 bg-gray-50 border border-gray-200 rounded-sm outline-none"
              />
              <QuestionMarkCircleIcon className="size-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </fieldset>
          <fieldset>
            {/* PASSWORD */}
            <label htmlFor="password" className="text-base text-gray-700">
              Password
            </label>
            <div className="w-full relative bg-red-300">
              <input
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Doit contenir au moins un chiffre et une lettre majuscule et minuscule, et au moins 8 caractères ou plus"
                required
                type={hidden ? "text" : "password"}
                name="password"
                id="password"
                placeholder="password"
                className="w-full  px-3 py-2 bg-gray-50 border border-gray-200 rounded-sm outline-none"
              />
              <button
                type="button"
                aria-label={hidden ? "Password Visible" : "Password Invisible."}
                className="z-50 absolute right-3 top-1/2 -translate-y-1/2
"
                onClick={() => {
                  setHidden(!hidden);
                }}
              >
                {hidden ? (
                  <EyeIcon className="size-4 text-gray-400 " />
                ) : (
                  <EyeSlashIcon className="size-4 text-gray-400 " />
                )}
              </button>
              {hidden && (
                <EyeIcon className="size-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              )}
            </div>
          </fieldset>
          <input
            type="submit"
            value="Submit"
            className=" bg-blue-400 text-white py-2 px-4 rounded-sm hover:bg-blue-300 duration-300 cursor-pointer"
          />
        </form>
        {/* <div id="message">
          <h3>Password must contain the following:</h3>
          <p id="message" className="invalid">
            A <b>lowercase</b> letter
          </p>
          <p id="message" className="invalid">
            A <b>capital (uppercase)</b> letter
          </p>
          <p id="message" className="invalid">
            A <b>number</b>
          </p>
          <p id="message" className="invalid">
            Minimum <b>8 characters</b>
          </p>
        </div> */}
      </div>
    </div>
  );
}
