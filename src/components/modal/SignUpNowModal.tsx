// src/components/sections/SignUpNowModal.tsx
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CustomModal } from "./custom-modal";
import { useApiMutation } from "../../hooks/useApiMutation";
import { endpoints } from "../../api/endpoints";
// optional: import { appToast } from "../utils/toast";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  zip: string;
};

export default function SignUpNowModal({
  isOpen,
  onClose,
  onSubmitApi, // optional API callback
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
    },
    mode: "onBlur",
  });

  const { mutate, isPending } = useApiMutation<any, any>({
    route: endpoints.postSignup,
    method: "POST",
    onSuccess: () => {
      //  appToast.success("Submission successful! We'll be in touch soon.");
      console.log("we'll get in touch soon");
      onClose();
    },
  });

  const submit = async (data: FormValues) => {
    const payload = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      zip: data.zip,
    };
    mutate(payload);
    // hook to your API here
    // if (onSubmitApi) await onSubmitApi(data);
    // appToast?.success?.("Thanks for signing up!");
    // reset();
    console.log("running reset", onSubmitApi, data);
    onClose();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title="Sign up now"
      onSubmit={handleSubmit(submit)}
      submitButtonText="Sign up now"
      submitButtonClass="bg-[#6b0d0d] text-white rounded-full px-6"
      needX
      isSubmitting={isSubmitting}
      contentContainerClass="w-full bg-white"
    >
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6 pt-2">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="firstName" className="text-lg">
              First name
            </Label>
            <Input
              id="firstName"
              placeholder="First name"
              {...register("firstName", {
                required: "First name is required",
                minLength: { value: 2, message: "Min 2 characters" },
              })}
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
              {...register("lastName", {
                required: "Second name is required",
                minLength: { value: 1, message: "Min 1 character" },
              })}
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone" className="text-lg">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="+1"
              {...register("phone", {
                pattern: {
                  value: /^[0-9+()\-\s]{5,20}$/,
                  message: "Enter a valid phone",
                },
              })}
            />
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <Label htmlFor="zip" className="text-lg">
              Zip code
            </Label>
            <Input
              id="zip"
              placeholder="02800"
              {...register("zip", {
                required: "Zip is required",
                pattern: { value: /^\d{3,10}$/, message: "Enter a valid zip" },
              })}
            />
            {errors.zip && (
              <p className="text-sm text-red-600">{errors.zip.message}</p>
            )}
          </div>
        </div>
      </form>
    </CustomModal>
  );
}
