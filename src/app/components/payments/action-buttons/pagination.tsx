"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ paymentsDataLength }: { paymentsDataLength: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = parseInt(searchParams.get("page") ?? "1");
  const itemsPerPage = 15;
  const totalPages = Math.ceil(paymentsDataLength / itemsPerPage);

  const isPreviousDisabled = page <= 1;
  const isNextDisabled = page >= totalPages;

  return (
    <div className="flex justify-end p-4">
      <button
        onClick={() => {
          router.push(`?page=${page - 1}`);
        }}
        className={`p-2 rounded-l-md shadow-md ${
          isPreviousDisabled
            ? "bg-accent-foreground/5 cursor-not-allowed"
            : "bg-accent-foreground/0 hover:bg-accent-foreground/5 transition duration-300 ease-in-out"
        }`}
        disabled={isPreviousDisabled}
      >
        <IoIosArrowBack />
      </button>

      <div className="p-2 shadow-md text-sm">
        Page {page} of {totalPages}
      </div>

      <button
        onClick={() => {
          router.push(`?page=${page + 1}`);
        }}
        className={`p-2 rounded-r-md shadow-md ${
          isNextDisabled
            ? "bg-accent-foreground/5 cursor-not-allowed"
            : "bg-accent-foreground/0 hover:bg-accent-foreground/5 transition duration-300 ease-in-out"
        }`}
        disabled={isNextDisabled}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
