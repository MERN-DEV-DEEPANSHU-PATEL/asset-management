import AssetForm, { AssetInterface } from "@/components/AssetForm";
import DeleteAsset from "@/components/DeleteAsset";
import { Badge } from "@/components/ui/badge";
import Loading from "@/components/ui/loader";
import useGetData from "@/hooks/useGetData";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useParams } from "react-router-dom";

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useGetData<AssetInterface>(
    `/api/assets/${id}`
  );
  console.log(data);
  if (loading) return <Loading />;
  if (error) return <h1>{error.message}</h1>;

  return data ? (
    <div className="container mx-auto p-4 md:p-8 bg-white dark:bg-slate-900 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900 font-semibold">
            Motor ID
          </Label>
          <p className="dark:text-gray-400 text-gray-700">{data.motorId}</p>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Name
          </Label>
          <p className="dark:text-gray-400 text-gray-700">{data.name}</p>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Description
          </Label>
          <p className="dark:text-gray-400 text-gray-700">{data.description}</p>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Location
          </Label>
          <p className="dark:text-gray-400 text-gray-700">{data.location}</p>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Status
          </Label>
          <Badge
            variant={
              data.status === "active"
                ? "success"
                : data.status === "inactive"
                ? "destructive"
                : "warning"
            }
          >
            {data.status}
          </Badge>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Manufacturer
          </Label>
          <p className="dark:text-gray-400 text-gray-700">
            {data.manufacturer}
          </p>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Model
          </Label>
          <p className="dark:text-gray-400 text-gray-700">{data.modelNumber}</p>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Serial Number
          </Label>
          <p className="dark:text-gray-400 text-gray-700">
            {data.serialNumber}
          </p>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Installation Date
          </Label>
          <p className="dark:text-gray-400 text-gray-700">
            {new Date(data.installationDate).toLocaleDateString()}
          </p>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Last Maintenance
          </Label>
          <p className="dark:text-gray-400 text-gray-700">
            {new Date(data.lastMaintenanceDate).toLocaleDateString()}
          </p>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Power (kW)
          </Label>
          <p className="dark:text-gray-400 text-gray-700">
            {data.specifications.power}
          </p>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Voltage (V)
          </Label>
          <p className="dark:text-gray-400 text-gray-700">
            {data.specifications.voltage}
          </p>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Current (A)
          </Label>
          <p className="dark:text-gray-400 text-gray-700">
            {data.specifications.current}
          </p>
        </div>
        <div className="space-y-2">
          <Label className="dark:text-gray-300 text-gray-900  font-semibold">
            Speed (RPM)
          </Label>
          <p className="dark:text-gray-400 text-gray-700">
            {data.specifications.speed}
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-end gap-2 mt-4">
          <AssetForm isEdit={true} defaultAsset={data} />
          <DeleteAsset id={data._id} />
        </div>
      </div>
    </div>
  ) : null;
};

export default DetailsPage;
