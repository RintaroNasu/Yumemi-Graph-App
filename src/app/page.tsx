import { PopulationDataDashboard } from "@/components/organisms/PopulationDataDashboard";

export default function Home() {
  return (
    <>
      <div className="flex justify-center text-[1.875rem] font-semibold">Yumemi Graph App</div>
      <PopulationDataDashboard />
    </>
  );
}
