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
const DeleteAsset = ({ id }: { id: string }) => {
  const handleDelete = useCallback(
    async (id: string) => {
      await makeRequest.delete(`/api/assets/${id}`);
      toast.success("Delete Successful");
    },
    [id]
  );

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
          <Button onClick={() => handleDelete(id)} variant="destructive">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAsset;
