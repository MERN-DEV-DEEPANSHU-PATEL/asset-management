import { toast } from "react-toastify";

export const throwError = (error: any) => toast.error(error.response.data.msg);
