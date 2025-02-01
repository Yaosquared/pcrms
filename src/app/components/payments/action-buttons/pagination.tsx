"use client";

import { useSearchParams, useRouter } from "next/navigation";

const Pagination = ({ paymentsDataLength }: { paymentsDataLength: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = parseInt(searchParams.get("page") ?? "1");
  const itemsPerPage = 15;
  const totalPages = Math.ceil(paymentsDataLength / itemsPerPage);

  const isPreviousDisabled = page <= 1;
  const isNextDisabled = page >= totalPages;

  return (
    <div className="flex justify-end gap-2 p-4 text-sm">
      <button
        onClick={() => {
          router.push(`?page=${page - 1}`);
        }}
        className={`p-2 rounded-md shadow-md ${
          isPreviousDisabled
            ? "bg-accent-foreground/10 cursor-not-allowed"
            : "bg-accent-foreground/0 hover:bg-accent-foreground/5 transition duration-300 ease-in-out"
        }`}
        disabled={isPreviousDisabled}
      >
        &lt;
      </button>

      <div className="p-2 rounded-md shadow-md">
        Page {page} of {totalPages}
      </div>

      <button
        onClick={() => {
          router.push(`?page=${page + 1}`);
        }}
        className={`p-2 rounded-md shadow-md ${
          isNextDisabled
            ? "bg-accent-foreground/10 cursor-not-allowed"
            : "bg-accent-foreground/0 hover:bg-accent-foreground/5 transition duration-300 ease-in-out"
        }`}
        disabled={isNextDisabled}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
