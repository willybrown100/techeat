import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';

export default function Pagination({count}) {
    const [searchParams,setSearchParams]=useSearchParams()
    const currentPage = !searchParams.get("page")?1:Number(searchParams.get("page"))
    const pageCount = Math.ceil(count/16)
    console.log(pageCount)
    const nextPage = ()=>{
        const next = currentPage===pageCount?currentPage:currentPage+1
        searchParams.set("page",next)
        setSearchParams(searchParams)
    }
    const prevPage = ()=>{
const prev  = currentPage===1?currentPage:currentPage-1
searchParams.set("page", prev);
setSearchParams(searchParams);
    }
  return (
    <article className="flex items-center justify-center gap-x-6">
      <div className="flex items-center gap-x-4">
        <button className="" onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft />
        </button>
        <div className="flex gap-x-2">
          <p
            className={`${
              currentPage === 1 ? "bg-brand text-white rounded-md" : ""
            } text-black mb-0 px-1`}
          >
            {currentPage}
          </p>
          <p
            className={`${
              currentPage === pageCount ? "bg-brand text-white  rounded-md" : ""
            } font-semibold mb-0 px-1 text-black`}
          >
            {pageCount}
          </p>
        </div>
        <button onClick={nextPage} disabled={currentPage === pageCount}>
          <HiChevronRight />
        </button>
      </div>
      <p className="text-black font-semibold capitalize mb-0">
        page <span>{currentPage}</span> of <span>{pageCount}</span>
      </p>
    </article>
  );
}
