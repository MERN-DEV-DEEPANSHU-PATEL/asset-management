import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import AssetForm, { AssetInterface } from "./AssetForm";
import DeleteAsset from "./DeleteAsset";

const MotorCard = (props: AssetInterface) => {
  const { specifications, specificationsValues } = props;
  return (
    <Card>
      <Link to={props._id}>
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>{props.motorId}</CardDescription>
          <CardDescription>{props.modelNumber}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Serial Number
              </div>
              <div>{props.serialNumber}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Manufacturer
              </div>
              <div>{props.manufacturer}</div>
            </div>

            {props.specificationsValues.power && (
              <div>
                {" "}
                <div className=" flex justify-between items-center flex-wrap text-sm text-gray-500 dark:text-gray-400">
                  Power
                  <div>{specifications.power}</div>
                </div>
              </div>
            )}
            {props.specificationsValues.current && (
              <div>
                <div className="flex justify-between items-center flex-wrap text-sm text-gray-500 dark:text-gray-400">
                  Current
                  <div>{specifications.current}</div>
                </div>
              </div>
            )}
            {specificationsValues.speed && (
              <div>
                {" "}
                <div className="flex justify-between items-center flex-wrap text-sm text-gray-500 dark:text-gray-400">
                  Speed
                  <div>{specifications.speed}</div>
                </div>
              </div>
            )}
            {specificationsValues.voltage && (
              <div>
                {" "}
                <div className="flex justify-between items-center flex-wrap text-sm text-gray-500 dark:text-gray-400">
                  Voltage
                  <div>{specifications.voltage}</div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-end gap-2">
        <AssetForm isEdit={true} defaultAsset={props} />
        <DeleteAsset id={props._id} />
      </CardFooter>
    </Card>
  );
};

export default MotorCard;
