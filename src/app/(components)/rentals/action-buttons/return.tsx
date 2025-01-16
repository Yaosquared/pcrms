import { FaCheck } from "react-icons/fa6";

import { markAsReturned } from "../actions";

const ReturnedButton = ({ id }: { id: string }) => {
  const submitId = markAsReturned.bind(null, id);

  return (
    <form action={submitId}>
      <button type="submit">
        <FaCheck
          title="Mark as returned"
          size={20}
          className="text-green-600 hover:text-green-700 hover:scale-105 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7"
        />
      </button>
    </form>
  );
};

export default ReturnedButton;
