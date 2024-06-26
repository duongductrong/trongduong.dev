"use client";

import Smoother from "@/components/motions/smoother";
import SmootherScrollSection from "@/components/motions/smoother-scroll-section";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import HeaderSection from "../_components/header-section";

const DetailedHeaderLayout = () => {
  const pathname = usePathname();
  const isDetailedProjectPath = /\/projects\/*./g.test(pathname);

  return (
    <SmootherScrollSection
      className={clsx("h-[72px] flex items-center", {
        "bg-gray-100 dark:bg-[#0045fa]": isDetailedProjectPath,
      })}
    >
      <HeaderSection />
    </SmootherScrollSection>
  );
};

export default DetailedHeaderLayout;
