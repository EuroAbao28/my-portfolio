import React, { useState, useEffect } from "react";
import { LuCircleAlert, LuCircleCheck, LuMail, LuPhone } from "react-icons/lu";
import NumberStamp from "../generics/NumberStamp";
import ParentContainer from "../generics/ParentContainer";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: string;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "There was an error sending your message.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // clear the status
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <ParentContainer id="contact">
      <div className="bg-white grid">
        <NumberStamp number="04" />

        <div className="py-16 col-start-1 row-start-1">
          <h3 className="font-bold text-2xl border-y border-r-gray-300 bg-white">
            Contact:
          </h3>

          <div className="mt-6 flex max-[940px]:flex-col gap-6 min-[940px]:gap-12 border-y border-gray-300">
            <div className="min-[940px]:border-r border-gray-300">
              <h1 className="font-bold text-5xl md:text-6xl border-b border-gray-300">
                Get in touch
              </h1>

              <div className="mt-6 border-y border-gray-300 flex">
                <div className="text-xl  w-14">
                  <div className=" border-r border-gray-300 w-fit p-1">
                    <LuPhone />
                  </div>
                </div>
                <p className="border-l border-gray-300 flex-1">+69693037581</p>
              </div>

              <div className="mt-6 border-y border-gray-300 flex">
                <div className="text-xl  w-14">
                  <div className=" border-r border-gray-300 w-fit p-1">
                    <LuMail />
                  </div>
                </div>
                <p className="border-l border-gray-300 flex-1">
                  abaoeuro2002@gmail.com
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-[24px_1fr_24px_1fr_24px] grid-rows-[24px_minmax(24px,1fr)_24px] max-sm:grid-cols-[14px_1fr_14px_1fr_14px] max-sm:grid-rows-[14px_1fr_14px] flex-1 min-[940px]:border-l max-[940px]:border-t border-gray-300">
              {/* 1st row */}
              <div></div>
              <div className="border-x border-gray-300"></div>
              <div></div>
              <div className="border-x border-gray-300"></div>
              <div></div>

              {/* 2nd row */}
              <div className="border-y border-gray-300"></div>
              <div className="col-span-3 flex flex-col">
                {/* status message */}
                {status?.message && (
                  <>
                    <div
                      className={`border-t border-x border-gray-300 p-2 flex items-center gap-2 font-medium ${
                        status.type === "success"
                          ? "bg-green-500/5 text-green-600"
                          : "bg-red-500/5 text-red-600"
                      }`}>
                      {status.type === "success" ? (
                        <LuCircleCheck className="text-xl" />
                      ) : (
                        <LuCircleAlert className="text-xl" />
                      )}
                      {status.message}
                    </div>

                    <div className="max-sm:h-[14px] h-6 border-x border-t border-gray-300 grid grid-cols-[1fr_24px_1fr] max-sm:grid-cols-[1fr_14px_1fr]">
                      <div className="border-r border-gray-300"></div>
                      <div></div>
                      <div className="border-l border-gray-300"></div>
                    </div>
                  </>
                )}

                <div className="grid min-[640px]:grid-cols-[minmax(40px,1fr)_24px_minmax(40px,1fr)]">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-2 min-[640px]:border-b border-x border-t border-gray-300"
                  />
                  <div className="max-[640]:h-[14px] max-[640]:border-t max-[640]:border-x min-[640px]:border-y border-gray-300"></div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2 border-t border-x border-b border-gray-300 rounded-none"
                  />
                </div>
                <div className="max-sm:h-[14px] h-6 border-x border-gray-300 grid grid-cols-[1fr_24px_1fr] max-sm:grid-cols-[1fr_14px_1fr]">
                  <div className="border-r border-gray-300"></div>
                  <div></div>
                  <div className="border-l border-gray-300"></div>
                </div>

                <textarea
                  name="message"
                  placeholder="Write a message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="flex-1 border border-gray-300 min-h-32 w-full p-2"></textarea>
                <div className="max-sm:h-[14px] h-6 border-x border-b border-gray-300 grid grid-cols-[1fr_24px_1fr]">
                  <div></div>
                  <div></div>
                  <div className=" sm:border-l border-gray-300 "></div>
                </div>
                <div className="border-x border-b border-gray-300 grid min-[640px]:grid-cols-[1fr_24px_1fr]">
                  <div></div>
                  <div></div>
                  <div className="border-l border-gray-300">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-slate-950 text-white p-2 w-full cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2">
                      {isLoading && (
                        <div className="w-4 aspect-square rounded-full border-white border-t-slate-950 animate-spin border-2"></div>
                      )}

                      {isLoading ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-y border-gray-300"></div>

              {/* 3rd row */}
              <div></div>
              <div className="col-span-3 border-x border-gray-300 grid grid-cols-[1fr_24px_1fr]">
                <div></div>
                <div></div>
                <div className="sm:border-l border-gray-300 "></div>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </ParentContainer>
  );
}

export default ContactSection;
