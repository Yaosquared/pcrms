"use client";

import { useSearchParams, useRouter } from "next/navigation";

const Pagination = ({ rentalsDataLength }: { rentalsDataLength: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = parseInt(searchParams.get("page") ?? "1");
  const itemsPerPage = 15;
  const totalPages = Math.ceil(rentalsDataLength / itemsPerPage);

  const isPreviousDisabled = page <= 1;
  const isNextDisabled = page >= totalPages;

  return (
    <div className="flex justify-end gap-2 p-4 text-sm">
      <button
        onClick={() => {
          router.push(`?page=${page - 1}`);
        }}
        className={`p-2 rounded-md shadow-md ${
          isPreviousDisabled ? "bg-accent-foreground/10 cursor-not-allowed" : ""
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
          isNextDisabled ? "bg-accent-foreground/10 cursor-not-allowed" : ""
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
