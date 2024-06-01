import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { makeRequest } from "@/hooks/usePrivateAxios";
import { toast } from "react-toastify";
import { throwError } from "@/utils/throwError";

export interface AssetInterface {
  _id: string;
  motorId: string;
  name: string;
  description: string;
  location: string;
  manufacturer: string;
  modelNumber: string;
  serialNumber: string;
  installationDate: string;
  lastMaintenanceDate: string;
  status: string;
  specificationsValues: {
    power: boolean;
    voltage: boolean;
    current: boolean;
    speed: boolean;
  };
  specifications: {
    power: number;
    voltage: number;
    current: number;
    speed: number;
  };
}

const defaultAssetEmpty: AssetInterface = {
  _id: "",
  motorId: "",
  name: "",
  description: "",
  location: "",
  manufacturer: "",
  modelNumber: "",
  serialNumber: "",
  installationDate: "",
  lastMaintenanceDate: "",
  status: "",
  specificationsValues: {
    power: false,
    voltage: false,
    current: false,
    speed: false,
  },
  specifications: {
    power: 0,
    voltage: 0,
    current: 0,
    speed: 0,
  },
};

export default function AssetForm({
  isEdit = false,
  defaultAsset = defaultAssetEmpty,
}) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<AssetInterface>(defaultAsset);

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSpecificationCheckboxChange = (e: any) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      specificationsValues: {
        ...prevData.specificationsValues,
        [name]: checked,
      },
    }));
  };

  const handleSpecificationValueChange = (e: any) => {
    console.log(formData);
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      specifications: {
        ...prevData.specifications,
        [id]: parseInt(value),
      },
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    try {
      if (isEdit) {
        await makeRequest.patch(`/api/assets/${formData._id}`, formData);
        toast.success("Updated Successful");
      } else {
        const { _id, ...otherData } = formData;
        await makeRequest.post("/api/assets", otherData);
        toast.success("Added Successful");
      }
      setFormData(defaultAsset);
    } catch (error: any) {
      console.log(error);
      throwError(error);
    }
  };

  return (
    <>
      <Button
        onClick={() => setShowForm(true)}
        variant={"outline"}
        size={"default"}
      >
        {isEdit ? "Edit" : "Add Motor"}
      </Button>
      {showForm && (
        <div className="fixed bg-fixed top-0 left-0 w-screen h-screen overflow-hidden bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-700 dark:text-slate-200 p-6 rounded-lg shadow-lg relative h-[90%] overflow-scroll ">
            <Button
              className="absolute right-0 top-0"
              size={"icon"}
              onClick={() => setShowForm(false)}
            >
              <X size={24} />
            </Button>
            <h1 className="text-center text-2xl mb-5 font-serif dark:text-white">
              Add New Motor
            </h1>

            <form
              className="grid grid-cols-2 gap-4 md:gap-6"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <Label htmlFor="motorId">Motor ID</Label>
                <Input
                  id="motorId"
                  required
                  type="text"
                  value={formData.motorId}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  required
                  type="text"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  required
                  value={formData.status}
                  onValueChange={(value) =>
                    setFormData({ ...formData, status: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="manufacturer">Manufacturer</Label>
                <Input
                  id="manufacturer"
                  required
                  type="text"
                  value={formData.manufacturer}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modelNumber">Model</Label>
                <Input
                  id="modelNumber"
                  required
                  type="text"
                  value={formData.modelNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="serialNumber">Serial Number</Label>
                <Input
                  id="serialNumber"
                  required
                  type="text"
                  value={formData.serialNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="installationDate">Installation Date</Label>
                <Input
                  id="installationDate"
                  required
                  value={
                    isEdit
                      ? new Date(formData.installationDate)
                          .toISOString()
                          .split("T")[0]
                      : formData.installationDate
                  }
                  type="date"
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastMaintenanceDate">Last Maintenance</Label>
                <Input
                  id="lastMaintenanceDate"
                  required
                  value={
                    isEdit
                      ? new Date(formData.lastMaintenanceDate)
                          .toISOString()
                          .split("T")[0]
                      : formData.lastMaintenanceDate
                  }
                  type="date"
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-span-2">
                <Label>specificationsValues</Label>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="power"
                      checked={formData?.specificationsValues.power}
                      onChange={handleSpecificationCheckboxChange}
                    />
                    <span>Power</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="voltage"
                      checked={formData.specificationsValues.voltage}
                      onChange={handleSpecificationCheckboxChange}
                    />
                    <span>Voltage</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="current"
                      checked={formData.specificationsValues.current}
                      onChange={handleSpecificationCheckboxChange}
                    />
                    <span>Current</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="speed"
                      checked={formData.specificationsValues.speed}
                      onChange={handleSpecificationCheckboxChange}
                    />
                    <span>Speed</span>
                  </label>
                </div>
              </div>

              {formData.specificationsValues.power && (
                <div className="space-y-2">
                  <Label htmlFor="power">Power (kW)</Label>
                  <Input
                    id="power"
                    value={formData.specifications.power}
                    required
                    step="1"
                    type="number"
                    onChange={handleSpecificationValueChange}
                  />
                </div>
              )}
              {formData.specificationsValues.voltage && (
                <div className="space-y-2">
                  <Label htmlFor="voltage">Voltage (V)</Label>
                  <Input
                    id="voltage"
                    value={formData.specifications.voltage}
                    required
                    step="1"
                    type="number"
                    onChange={handleSpecificationValueChange}
                  />
                </div>
              )}
              {formData.specificationsValues.current && (
                <div className="space-y-2">
                  <Label htmlFor="current">Current (A)</Label>
                  <Input
                    id="current"
                    value={formData.specifications.current}
                    required
                    step="0.1"
                    type="number"
                    onChange={handleSpecificationValueChange}
                  />
                </div>
              )}
              {formData.specificationsValues.speed && (
                <div className="space-y-2">
                  <Label htmlFor="speed">Speed (RPM)</Label>
                  <Input
                    id="speed"
                    required
                    step="0.1"
                    value={formData.specifications.speed}
                    type="number"
                    onChange={handleSpecificationValueChange}
                  />
                </div>
              )}

              <div className="col-span-2 flex justify-end gap-2">
                <Button type="submit" variant="default">
                  Add
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
