import ClassStrengthBar from "@/components/Charts/ClassStrengthBar";
import ClassStrengthPie from "@/components/Charts/ClassStrengthPie";
import StaffTable from "@/components/Tables/StaffTable";
import StudentTable from "@/components/Tables/StudentTable";

export default function Home() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 px-8 py-20 ">
      <div className="card px-10 py-20 shadow-lg rounded-lg">
        <ClassStrengthBar />
      </div>
      <div className="card  px-10 py-20 shadow-lg rounded-lg">
        <ClassStrengthPie />
      </div>
      <div className="card  px-10 py-20 shadow-lg rounded-lg">
        <StudentTable />
      </div>
      <div className="card   px-10 py-20 shadow-lg rounded-lg">
        <StaffTable />
      </div>
    </div>
  );
}
