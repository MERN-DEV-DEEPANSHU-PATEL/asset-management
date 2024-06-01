import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import TicketForm, { TicketInterface } from "@/components/TicketForm";
import useGetData from "@/hooks/useGetData";
import Loading from "@/components/ui/loader";
import DeleteTicket from "@/components/DeleteTicket";

interface FullTicketInterface extends TicketInterface {
  dateRaised: string;
}

// Helper function to format date
export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

export function Maintenance() {
  const { data, loading, error } =
    useGetData<FullTicketInterface[]>("/api/tickets");

  const {
    data: motorIds,
    loading: mLoading,
    error: mError,
  } = useGetData<{ _id: string; motorId: string }[]>("/api/tickets/motorId");

  if (loading) return <Loading />;
  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="sm:container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold dark:text-gray-300">
          Maintenance Tickets
        </h1>
        <TicketForm data={motorIds} loading={mLoading} error={mError} />
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>Asset ID</TableHead>
              <TableHead>Issue Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Raised</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: FullTicketInterface) => (
              <TableRow key={item._id}>
                <TableCell title={item._id}>
                  {item._id?.substring(0, 7)}...
                </TableCell>
                <TableCell className="uppercase">{item.assetId}</TableCell>
                <TableCell>{item.issueDescription}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status.toLocaleLowerCase() == "inprogress"
                        ? "warning"
                        : item.status.toLocaleLowerCase() == "open"
                        ? "destructive"
                        : "success"
                    }
                    className="capitalize"
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{formatDate(item.dateRaised)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <TicketForm
                      data={motorIds}
                      loading={mLoading}
                      error={mError}
                      isEdit={true}
                      defaultValues={item}
                    />
                    {item._id && <DeleteTicket id={item._id} />}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
