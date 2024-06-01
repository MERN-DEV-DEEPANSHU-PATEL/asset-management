import AssetForm, { AssetInterface } from "@/components/AssetForm";
import MotorCard from "@/components/MotorCard";
import Loading from "@/components/ui/loader";
import useGetData from "@/hooks/useGetData";

export function Assets() {
  const { data, error, loading } = useGetData("/api/assets");
  if (!loading) {
    console.log(data);
    console.log(error);
  }
  return loading ? (
    <Loading />
  ) : data ? (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6 flex-wrap">
        <AssetForm />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(data) &&
          data?.map((item: AssetInterface) => <MotorCard {...item} />)}
      </div>
    </div>
  ) : (
    <h1>{error && error.message}</h1>
  );
}
