import React from "react";

export default function MeetOurTeam() {
  const className = "max-w-[1200px]  w-[90vw] py-[3rem] m-auto";
  return (
    <section className="bg-black md:bg-transparent">
      <article className={`${className}`}>
        <div className="md:my-4 md:mb-[4rem]">
          <div className="w-[14rem] h-[0.2rem] hidden md:block bg-brand m-auto"></div>
          <h3 className="text-brand text-[1.7rem] font-headings font-semibold text-center">
            meet our team
          </h3>
          <div className="w-[14rem] h-[0.2rem] hidden md:block bg-brand m-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4  justify-center gap-2">
          <div className="bg-white  md:pb-[4rem] relative  shadow-lg shadow-stone-500/50 rounded-[1rem]">
            <div>
              <img src="/images/Rectangle 4269.png" alt="img" />
            </div>
            <div className="bg-brand p-1 md:p-4 rounded-[0.5rem] shadow-lg shadow-stone-500/50 md:w-[15rem] w-[9.2rem] left-[50%] absolute text-center translate-x-[-50%] bottom-[2rem] md:bottom-[3rem]">
              <h4 className="font-semibold md:text-xl font-headings mb-0">
                adebayo micheal
              </h4>
              <p className=" mb-0 capitalize">ceo </p>
            </div>
          </div>

          <div className="bg-white pb-[3rem] md:pb-[5rem] relative  shadow-lg shadow-stone-500/50 rounded-[1rem]">
            <div>
              <img src="/images/Rectangle 4269 (1).png" alt="img" />
            </div>
            <div className="bg-brand p-1 shadow-lg shadow-stone-500/50 md:p-4 rounded-[0.5rem] w-[9.2rem] md:w-[15rem]  left-[50%] absolute text-center translate-x-[-50%] bottom-[2rem] md:bottom-[3rem]">
              <h4 className="font-semibold md:text-xl mb-0 font-headings">
                amina hassan
              </h4>
              <p className=" mb-0">marketing manager</p>
            </div>
          </div>
          <div className="bg-white md:pb-[5rem] pb-[3rem] relative  shadow-lg shadow-stone-500/50 rounded-[1rem]">
            <div>
              <img src="/images/Rectangle 4269 (2).png" alt="img" />
            </div>
            <div className="bg-brand p-1 md:p-4 rounded-[0.5rem] shadow-lg shadow-stone-500/50 left-[50%] md:w-[15rem] w-[9.2rem]  absolute text-center bottom-[2rem] translate-x-[-50%] md:bottom-[3rem]">
              <h4 className="font-semibold font-headings mb-0 md:text-xl">
                ijeoma okafor
              </h4>
              <p className=" mb-0">customer success</p>
            </div>
          </div>
          <div className="bg-white pb-[3rem] md:pb-[5rem] relative  shadow-lg shadow-stone-500/50 rounded-[1rem]">
            <div>
              <img src="/images/Rectangle 4269 (3).png" alt="img" />
            </div>
            <div className="bg-brand p-1 md:p-4 rounded-[0.5rem] shadow-lg shadow-stone-500/50 left-[50%] md:w-[15rem] w-[9.2rem]  absolute text-center translate-x-[-50%] bottom-[2rem] md:bottom-[3rem]">
              <h4 className="font-semibold md:text-xl mb-0 font-headings">
                patience okon
              </h4>
              <p className=" mb-0">head of sales</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:flex md:justify-center mt-6 md:items-center gap-2 ">
          <div className="bg-white item md:pb-[5rem] pb:-[3rem] relative  shadow-lg shadow-stone-500/50 rounded-[1rem]">
            <div>
              <img src="/images/Rectangle 4269 (4).png" alt="img" />
            </div>
            <div className="bg-brand p-1 md:p-2 rounded-[0.5rem] shadow-lg shadow-stone-500/50 left-[50%] md:w-[15rem] w-[9.2rem]  absolute text-center translate-x-[-50%] bottom-[2rem] md:bottom-[3rem]">
              <h4 className="font-semibold font-headings md:text-xl mb-0">
                bassey effiong
              </h4>
              <p className="mb-0">head of logistics</p>
            </div>
          </div>

          <div className="bg-white items md:pb-[5rem] pb-[3rem]  relative  shadow-lg shadow-stone-500/50 rounded-[1rem]">
            <div>
              <img src="/images/Rectangle 4269 (5).png" alt="img" />
            </div>
            <div className="bg-brand p-1 md:p-2 rounded-[0.5rem] shadow-lg shadow-stone-500/50 left-[50%] absolute  md:w-[15rem] w-[9.2rem] text-center translate-x-[-50%] bottom-[2rem] md:bottom-[3rem]">
              <h4 className="font-semibold font-headings md:text-xl mb-0">
                oby udeh
              </h4>
              <p className=" mb-0">human resources</p>
            </div>
          </div>

          <div className="bg-white md:pb-[5rem] pb-[3rem] itemz relative  shadow-lg shadow-stone-500/50 rounded-[1rem]">
            <div>
              <img src="/images/Rectangle 4269 (6).png" alt="img" />
            </div>
            <div className="bg-brand p-1 md:p-4 rounded-[0.5rem] shadow-lg shadow-stone-500/50 left-[50%] absolute md:w-[15rem] w-[9.2rem] text-center translate-x-[-50%] md:bottom-[3rem] bottom-[2rem]">
              <h4 className="font-semibold font-headings md:text-xl mb-0">
                bola oyewole
              </h4>
              <p className=" mb-0">human resources</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
