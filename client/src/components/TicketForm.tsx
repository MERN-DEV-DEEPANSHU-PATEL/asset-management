import {
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
  DrawerClose,
  DrawerFooter,
  DrawerContent,
  Drawer,
} from "@/components/ui/drawer";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import Loading from "./ui/loader";
import { throwError } from "@/utils/throwError";
import { makeRequest } from "@/hooks/usePrivateAxios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export interface TicketInterface {
  _id?: string;
  assetId: string;
  issueDescription: string;
  status: string;
}
export interface FullTicketInterface extends TicketInterface {
  dateRaised: string;
}
const emptyValues = {
  assetId: "",
  issueDescription: "",
  status: "",
};

const TicketForm = ({
  isEdit = false,
  defaultValues = emptyValues,
  data,
  loading,
  error,
  reFetch,
  mReFetch,
}: {
  isEdit?: boolean;
  defaultValues?: TicketInterface;
  data: { motorId: string; _id: string }[] | null;
  loading: boolean;
  error: null | AxiosError;
  reFetch: any;
  mReFetch: any;
}) => {
  const [formData, setFormData] = useState<TicketInterface>(defaultValues);

  if (loading) return <Loading />;
  if (error) return <h1>{error.message}</h1>;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async () => {
    try {
      if (isEdit) {
        await makeRequest.patch(`/api/tickets/${defaultValues._id}`, formData);
        toast.success("Updated");
      } else {
        await makeRequest.post("/api/tickets", formData);
        toast.success("Ticket Rised");
      }
    } catch (error) {
      throwError(error);
    } finally {
      reFetch();
      mReFetch();
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="sm" variant="outline">
          {isEdit ? "Edit Ticket" : "Raise New Ticket"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            {isEdit ? "Edit Ticket" : "Raise New Ticket"}
          </DrawerTitle>
          <DrawerDescription>
            {isEdit
              ? "Update the ticket details and save the changes."
              : "Provide the ticket details and raise a new ticket."}
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="assetId">Asset ID</Label>
              <Select
                disabled={isEdit}
                value={formData.assetId}
                onValueChange={(value) => handleSelectChange("assetId", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Asset" />
                </SelectTrigger>
                <SelectContent>
                  {data?.map((item) => (
                    <SelectItem
                      key={item._id}
                      className="uppercase"
                      value={item.motorId}
                    >
                      {item.motorId}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="issueDescription">Issue Description</Label>
              <Textarea
                id="issueDescription"
                value={formData.issueDescription}
                onChange={handleChange}
              />
            </div>
          </div>
          {isEdit && (
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => handleSelectChange("status", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="inProgress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        <DrawerFooter>
          <Button type="button" onClick={handleSubmit}>
            {isEdit ? "Save Changes" : "Add"}
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default TicketForm;
