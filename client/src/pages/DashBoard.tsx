import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/ui/loader";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";
import useGetData from "@/hooks/useGetData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  ActivityIcon,
  CalendarIcon,
  Ellipsis,
  PackageIcon,
  PenToolIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AssetInterface } from "@/components/AssetForm";
import TicketForm from "@/components/TicketForm";
import { formatDate } from "@/utils/formateDate";
interface DashBoardData {
  totalMotors: number;
  activeMotors: number;
  maintenanceTickets: number;
  overdueMaintenance: number;
  recentData: AssetInterface[];
}

const DashBoard = () => {
  const { data, error, loading, reFetch } =
    useGetData<DashBoardData>("/api/dashboard");
  const {
    data: motorIds,
    loading: mLoading,
    error: mError,
    reFetch: mReFetch,
  } = useGetData<{ _id: string; motorId: string }[]>("/api/tickets/motorId");
  if (loading) <Loading />;

  if (error) <h1> {error.message}</h1>;
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Motors</CardTitle>
            <PackageIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.totalMotors}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Motors</CardTitle>
            <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.activeMotors}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Maintenance Tickets
            </CardTitle>
            <PenToolIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.maintenanceTickets}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Overdue Maintenance
            </CardTitle>
            <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data?.overdueMaintenance}</div>
          </CardContent>
        </Card>
      </div>
      <div className="border shadow-sm rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Asset ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Location</TableHead>
              <TableHead className="hidden md:table-cell">
                Installed Date
              </TableHead>
              <TableHead className="text-right">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.recentData.map((item) => (
              <TableRow>
                <TableCell className="font-medium">{item._id}</TableCell>
                <TableCell> {item.name} </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.location}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {formatDate(item.installationDate)}
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={
                      item.status.toLocaleLowerCase() == "active"
                        ? "success"
                        : item.status.toLocaleLowerCase() == "inactive"
                        ? "destructive"
                        : "warning"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button size="icon" variant="ghost">
                        <Ellipsis />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col gap-2">
                      <Link
                        className={buttonVariants({ variant: "outline" })}
                        to={`/assets/${item._id}`}
                      >
                        View details
                      </Link>
                      <TicketForm
                        data={motorIds}
                        reFetch={reFetch}
                        mReFetch={mReFetch}
                        loading={mLoading}
                        error={mError}
                        defaultValues={{
                          _id: item._id,
                          status: "",
                          assetId: item.motorId,
                          issueDescription: "",
                        }}
                      />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashBoard;
