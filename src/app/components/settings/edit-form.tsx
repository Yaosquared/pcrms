import SubmitButton from "./action-buttons/submit";

const SettingEditForm = ({
  id,
  code,
  description,
  value,
  clientAction,
  handleClose,
}: {
  id: string;
  code: string;
  description: string;
  value: number;
  clientAction: (formData: FormData) => Promise<void>;
  handleClose: () => void;
}) => {
  return (
    <>
      <form
        action={clientAction}
        className="flex flex-col space-y-4 text-foreground text-sm lg:text-base"
      >
        <h3 className="text-base lg:text-lg 2xl:text-xl font-semibold">
          Edit Setting Record
        </h3>
        <input type="hidden" name="setting-id" value={id} />
        <input
          type="text"
          name="setting-code"
          defaultValue={code}
          placeholder="Code"
          disabled
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="text"
          name="setting-description"
          defaultValue={description}
          placeholder="Description"
          disabled
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <input
          type="number"
          name="setting-value"
          defaultValue={value}
          placeholder="Value"
          className="h-10 w-[100%] px-3 py-2 border rounded-md placeholder:text-muted-foreground outline-none focus:border-2 focus:border-blue-600"
        />
        <SubmitButton handleClose={handleClose} />
      </form>
    </>
  );
};

export default SettingEditForm;
