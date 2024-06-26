import React from "react";

export default function VisionandMission() {
  const className = "max-w-[1170px]   w-[90vw] py-8 m-auto";
  return (
    <section className="bg-black">
      <article className={`${className} `}>
        <div className="w-[14rem] h-[0.2rem] hidden md:block bg-brand m-auto"></div>
        <h3 className="text-brand text-[1.7rem] font-headings font-semibold text-center">
          vision and mission
        </h3>
        <div className="w-[14rem] h-[0.2rem] bg-brand hidden md:block m-auto"></div>

        <div className="md:flex  gap-x-4 md:items-center md:mt-[6rem] md:justify-between">
          <div>
            <img
              src="/images/Group 26936.png"
              alt="img"
              className="md:hidden"
            />
          </div>

          <div className="flex flex-col">
            <div>
              <h3 className="text-brand hidden md:block font-headings">
                vision statement
              </h3>
              <p className="font-body md:text-left my-2 text-center text-stone-300">
                Empowering tech Studio students to satisfy their cravings and
                supporting the Tech Studio community, one delicious bite at a
                time.
              </p>
            </div>
            <div>
              <h3 className="text-brand font-headings hidden md:block ">
                mission statement
              </h3>
              <p className="font-body text-center my-2 md:text-left text-stone-300">
                {" "}
                At TechEats, our mission is to revolutionize the way students
                experience meals at Tech Studio Academy. We aim to provide a
                platform for Tech Studio students to easily find and order meals
                from their favorite food vendors.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/images/Group 26936.png"
              alt="img"
              className="hidden md:block"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
