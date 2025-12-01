// import { ReactNode } from "react";

// import { X } from "lucide-react";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "../ui/alert-dialog";

// export const CustomModal = ({
//   children,
//   isOpen,
//   onClose,
//   title,
//   onSubmit,
//   submitButtonText,
//   submitButtonClass,
//   submitButtonProps,
//   footer,
//   contentContainerClass,
//   isLoading,
//   loader,
//   needX,
//   isSubmitting,
// }: {
//   children: ReactNode;

//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   onSubmit: () => void;
//   submitButtonText?: string;
//   submitButtonClass?: string;
//   submitButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
//   footer?: ReactNode;
//   contentContainerClass?: string;
//   isLoading?: boolean;
//   loader?: ReactNode;
//   needX?: boolean;
//   isSubmitting?: boolean;
// }) => {
//   return (
//     <AlertDialog open={isOpen}>
//       <AlertDialogContent
//         className={`max-w-5xl ${contentContainerClass} scrollbar-hide`}
//       >
//         <AlertDialogHeader>
//           <div className="flex gap-3 justify-between items-center px-2">
//             <AlertDialogTitle className="text-radial-indigo text-xl">
//               {title}
//             </AlertDialogTitle>
//             <p>
//               {needX && (
//                 <div
//                   className="hover:bg-brown/80 bg-brown text-white rounded-full cursor-pointer p-1 duration-150"
//                   onClick={onClose}
//                 >
//                   <X size={20} />
//                 </div>
//               )}
//             </p>
//           </div>
//         </AlertDialogHeader>

//         <AlertDialogDescription className="">
//           <div className="max-h-[600px] overflow-y-auto no-scrollbar px-2">
//             {isLoading
//               ? loader ?? <div className="animate-pulse">Loading...</div>
//               : children}
//           </div>
//         </AlertDialogDescription>
//         <AlertDialogFooter className="">
//           {footer ?? (
//             <>
//               <AlertDialogCancel
//                 className="rounded-full border border-radial-indigo text-[#0264ff] text-lg"
//                 onClick={onClose}
//               >
//                 Cancel
//               </AlertDialogCancel>
//               <AlertDialogAction
//                 disabled={!!isSubmitting}
//                 className={`${submitButtonClass} hover:bg-blue-800 text-lg`}
//                 onClick={onSubmit}
//                 {...submitButtonProps}
//               >
//                 {submitButtonText ?? "Submit"}
//               </AlertDialogAction>
//             </>
//           )}
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// };
import { ReactNode } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export const CustomModal = ({
  children,
  isOpen,
  onClose,
  title,
  onSubmit,
  submitButtonText,
  submitButtonClass,
  submitButtonProps,
  footer,
  contentContainerClass,
  isLoading,
  loader,
  needX,
  isSubmitting,
}: {
  children: ReactNode;

  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSubmit: () => void;
  submitButtonText?: string;
  submitButtonClass?: string;
  submitButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  footer?: ReactNode;
  contentContainerClass?: string;
  isLoading?: boolean;
  loader?: ReactNode;
  needX?: boolean;
  isSubmitting?: boolean;
}) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        // when Dialog is closed (esc, outside click, etc.)
        if (!open) onClose();
      }}
    >
      <DialogContent
        className={`max-w-5xl ${contentContainerClass} scrollbar-hide`}
      >
        <DialogHeader>
          <div className="flex gap-3 justify-between items-center px-2">
            <DialogTitle className="text-radial-indigo text-xl">
              {title}
            </DialogTitle>
            {needX && (
              <button
                type="button"
                className="hover:bg-brown/80 bg-brown text-white rounded-full cursor-pointer p-1 duration-150"
                onClick={onClose}
              >
                <X size={20} />
              </button>
            )}
          </div>
        </DialogHeader>

        <DialogDescription>
          <div className="max-h-[600px] overflow-y-auto no-scrollbar px-2">
            {isLoading
              ? loader ?? <div className="animate-pulse">Loading...</div>
              : children}
          </div>
        </DialogDescription>

        <DialogFooter>
          {footer ?? (
            <>
              <button
                type="button"
                className="rounded-full border border-radial-indigo text-[#0264ff] text-lg px-6 py-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!!isSubmitting}
                className={`${submitButtonClass} hover:bg-blue-800 text-lg px-6 py-2`}
                onClick={onSubmit}
                {...submitButtonProps}
              >
                {submitButtonText ?? "Submit"}
              </button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
