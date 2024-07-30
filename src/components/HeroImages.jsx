import React, { useCallback, useEffect, useRef } from 'react';



 





const surroundingImages = [
  { id: 1, src: "/images/image 20.png" },
  { id: 2, src: "/images/image 23.png" },
  { id: 3, src: "/images/image 81.png" },
  { id: 4, src: "/images/image 82.png" },
  { id: 5, src: "/images/image 83 (1).png" },
  { id: 6, src: "/images/image 84.png" },
  { id: 7, src: " /images/image 84.png" },
];

 export function CricleImagesLarge() {
  const observerRef = useCallback(node => {
    if (node) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('invisible');
          } else {
            entry.target.classList.add('invisible');
            entry.target.classList.remove('visible');
          }
        });
      });

      observer.observe(node);

      // return () => observer.unobserve(node);
    }
  }, []);

  const calculatePosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 230; // Adjust radius
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="hidden md:flex md:items-center md:justify-center md:h-screen">
      <div className="relative w-[25rem] h-[25rem]">
        <img
          src="\images\Frame 1171276718 (1).png"
          alt="CentralImage"
          className="absolute  object-cover h-[25rem] rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {surroundingImages.map((image, index) => {
          const { x, y } = calculatePosition(index, surroundingImages.length);
          return (
            <img
              key={image.id}
              src={image.src}
              alt="Img"
              className="absolute w-[4rem] h-[4rem] duration-300 rounded-full invisible transition-opacity  ease-in-out"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
              }}
              ref={observerRef}
            />
          );
        })}
      </div>
    </div>
  );
}

 function CricleImages() {
  const observerRef = useCallback(node => {
    if (node) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('invisible');
          } else {
            entry.target.classList.add('invisible');
            entry.target.classList.remove('visible');
          }
        });
      });

      observer.observe(node);

      // return () => observer.unobserve(node);
    }
  }, []);

  const calculatePosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 125; 
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="  md:hidden pb-[1rem] flex items-center justify-center ">
      <div className="relative w-[14rem] h-[14rem]">
        <img
          src="\images\Frame 1171276718 (1).png"
          alt="CentralImage"
          className="absolute   rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {surroundingImages.map((image, index) => {
          const { x, y } = calculatePosition(index, surroundingImages.length);
          return (
            <img
              key={image.id}
              src={image.src}
              alt="Img"
              className="absolute w-[3rem] h-[3rem] rounded-full invisible transition-opacity duration-500"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
              }}
              ref={observerRef}
            />
          );
        })}
      </div>
    </div>
  );
}











export default CricleImages;
