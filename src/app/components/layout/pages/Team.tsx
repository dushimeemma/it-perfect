import Employee from "@/app/components/reusable/Employee";
import SubTitle from "@/app/components/reusable/SubTitle";
import Title from "@/app/components/reusable/Title";
import { employees } from "@/app/helpers/stub-data/employees";

export default function Team() {
  return (
    <div
      id="team"
      className="p-6 min-h-[60vh] w-[94vw] flex flex-col items-center mt-6"
    >
      <Title title="Team" />
      <SubTitle text="Know about our people" />
      <div className="w-full flex flex-col lg:flex-row justify-around my-6 gap-4 flex-wrap">
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}
