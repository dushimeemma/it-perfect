import Title from "@/app/components/reusable/Title";
import SubTitle from "@/app/components/reusable/SubTitle";
import Testimonial from "@/app/components/reusable/Testimonial";

export default function Testimonials() {
  return (
    <div className="flex w-[94vw] flex-col items-center p-6 mt-6">
      <Title title="Testimonial" />
      <SubTitle text="See valuable feedback from our clients" />
      <Testimonial />
    </div>
  );
}
