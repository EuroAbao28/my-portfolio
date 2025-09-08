import { EXPERIENCE } from "@/constants/generics";
import classNames from "classnames";
import NumberStamp from "./NumberStamp";

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="grid grid-cols-[1fr_14px_minmax(0,1100px)_14px_1fr] sm:grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr]">
      <div className="bg-white"></div>
      <div className="border-x border-gray-300"></div>

      <div className="bg-white grid">
        <NumberStamp number="01" />

        <div className="py-16 col-start-1 row-start-1">
          <h3 className="font-bold text-2xl border-y border-r-gray-300 bg-white">
            Experience:
          </h3>

          <div className="mt-6 flex flex-col md:flex-row gap-4 p-4">
            {EXPERIENCE.map((item, index) => (
              <div key={index} className="flex-1 border border-gray-300">
                <div className="flex gap-4 border-b border-gray-300">
                  <div className="border-r border-gray-300 grid grid-cols-[10px_auto_10px] grid-rows-[1fr_auto_1fr]">
                    <div></div>
                    <div className="border-x border-gray-300"></div>
                    <div></div>

                    <div className="border-y border-gray-300"></div>
                    <div className="border border-gray-300 flex justify-center items-center text-2xl md:text-4xl bg-slate-950 text-white p-1">
                      {item.icon}
                    </div>
                    <div className="border-y border-gray-300"></div>

                    <div></div>
                    <div className="border-x border-gray-300"></div>
                    <div></div>
                  </div>

                  <div className="flex-1 border-l border-gray-300">
                    <h3 className="text-base md:text-lg font-semibold border-b border-gray-300">
                      {item.title}
                    </h3>

                    <h4 className="text-slate-500 text-xs md:text-sm">
                      {item.company}
                    </h4>
                    <p
                      className={classNames(
                        "text-slate-500 text-xs md:text-sm border-gray-300",
                        {
                          "border-t": item.company,
                        }
                      )}>
                      {item.date}
                    </p>
                  </div>
                </div>

                <p className="mt-4 border-t border-gray-300 text-sm md:text-base text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-x border-gray-300"></div>
      <div className="bg-white"></div>
    </section>
  );
}

export default ExperienceSection;
