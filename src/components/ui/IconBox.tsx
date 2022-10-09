import React from "react";
import { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconProp;
  title: string;
  subtitle: string;
}

function IconBox({ icon, title, subtitle }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <FontAwesomeIcon icon={icon} size="lg" color="red" />
      <h2 className="cursor-pointer text-lg font-semibold text-black transition-all duration-500 hover:text-red-600">
        {title}
      </h2>
      <h4 className="font-light text-gray-500">{subtitle}</h4>
    </div>
  );
}

export default IconBox;
