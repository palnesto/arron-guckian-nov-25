import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CustomModal } from "./custom-modal";

export default function JoinMovementModal({
  isOpen,
  onClose,
  onSubmitApi,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmitApi?: (data: FormValues) => Promise<void> | void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zip: "",
      interests: [],
    },
    mode: "onBlur",
  });

  async function submit(data: FormValues) {
    if (onSubmitApi) await onSubmitApi(data);
    reset();
    onClose();
  }

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Join the Movement"
      onSubmit={handleSubmit(submit)}
      submitButtonText="Join now"
      submitButtonClass="bg-[#6b0d0d] text-white rounded-full px-6"
      needX
      isSubmitting={isSubmitting}
      contentContainerClass="w-full bg-white h-[90vh] overflow-y-auto"
    >
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6 pt-2">
        {/* Name / Email / Phone / Zip */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="firstName" className="text-lg">
              First name
            </Label>
            <Input
              id="firstName"
              placeholder="First name"
              {...register("firstName", { required: "Required" })}
            />
            {errors.firstName && (
              <p className="text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="lastName" className="text-lg">
              Second name
            </Label>
            <Input
              id="lastName"
              placeholder="Second name"
              {...register("lastName", { required: "Required" })}
            />
            {errors.lastName && (
              <p className="text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Sample@email.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone" className="text-lg">
              Phone
            </Label>
            <Input id="phone" placeholder="+1" {...register("phone")} />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <Label htmlFor="zip" className="text-lg">
              Zip code
            </Label>
            <Input id="zip" placeholder="02800" {...register("zip")} />
          </div>
        </div>

        {/* Volunteer Interest checkboxes */}
        <div className="space-y-3">
          <Label className="text-lg font-semibold">Check all that apply:</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            {[
              "Door to door",
              "Sign duty",
              "Digital media",
              "Photography / Video",
              "Host a house party or event",
              "Make phone calls",
              "Event duty",
              "Other",
            ].map((item) => (
              <label key={item} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value={item}
                  {...register("interests")}
                  className="h-4 w-4 accent-[#6b0d0d]"
                />
                <span className="text-sm text-gray-700">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </form>
    </CustomModal>
  );
}

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  zip: string;
  interests: string[];
};
