import Image from "next/image";
import Link from "next/link";

import FooterTitle from "@/app/components/reusable/footer/Title";
import SubTitle from "@/app/components/reusable/footer/SubTitle";
import { OUR_SERVICES as services } from "@/app/helpers/stub-data/services";
import { socialMedia } from "@/app/helpers/stub-data/social-media";

export default function Footer() {
  return (
    <div className=" min-h-[60vh] bg-primary text-white flex lg:flex-row flex-col justify-around items-start p-6">
      <Image
        src="/Footer-logo.png"
        width={328}
        height={64}
        alt="Logo"
        className="lg:self-center self-start mt-3"
      />
      <div className="flex flex-col my-6 lg:my-24">
        <FooterTitle />
        {services.map((service) => (
          <SubTitle label={service.name} key={service.id} />
        ))}
      </div>
      <div className="flex flex-col my-6 lg:my-24">
        <FooterTitle label="Other" />
        <SubTitle label="About us" link="#team" />
        <SubTitle label="Blog" link="#blog" />
        <SubTitle label="Portfolio" link="#projects" />
        <SubTitle label="Career" link="#team" />
      </div>
      <div className="flex flex-col my-6 lg:my-24">
        <FooterTitle label="Contact us" />
        <SubTitle label="contact@itperfect.fr" />
        <SubTitle label="+33 7 51 23 98 63" />
        <FooterTitle label="Follow us" />
        <div className="flex flex-row gap-4">
          {socialMedia.map((media) => (
            <Link href={media.link} key={media.id}>
              <Image
                src={media.image}
                width={24}
                height={24}
                alt={media.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
