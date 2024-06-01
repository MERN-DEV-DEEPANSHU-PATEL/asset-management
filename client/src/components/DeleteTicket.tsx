import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useCallback } from "react";
import { makeRequest } from "@/hooks/usePrivateAxios";
import { toast } from "react-toastify";
import { throwError } from "@/utils/throwError";
const DeleteTicket = ({
  id,
  reFetch,
  mReFetch,
}: {
  id: string;
  reFetch: any;
  mReFetch: any;
}) => {
  const handleDelete = useCallback(async () => {
    try {
      await makeRequest.delete(`/api/tickets/${id}`);
      toast.success("Ticket Deleted");
      reFetch();
      mReFetch();
    } catch (error) {
      throwError(error);
    }
  }, [id]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Ticket</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this ticket? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleDelete} variant="destructive">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTicket;
