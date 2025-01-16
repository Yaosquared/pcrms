import { createRecord } from "./actions";

const CustomerNewForm = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <>
      <form
        action={createRecord}
        className="flex flex-col space-y-4 text-foreground text-sm lg:text-base"
      >
        <h3 className="text-base lg:text-lg 2xl:text-xl font-semibold">
          Add Customer Record
        </h3>
        <input
          type="text"
          name="customer-name"
          placeholder="Customer Name"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="phone-number"
          defaultValue="+63"
          placeholder="Phone Number (+63)"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="date"
          name="birthdate"
          placeholder="Birthdate"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="id-type"
          placeholder="ID Type"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="id-number"
          placeholder="ID Number"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <button
          type="submit"
          onClick={handleClose}
          className="w-[100%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] xl:w-[20%] bg-blue-600 hover:bg-blue-700 text-white rounded-md h-10 sm:h-9 lg:h-11 text-xs lg:text-sm"
        >
          Save
        </button>
      </form>
    </>
  );
};

export default CustomerNewForm;
