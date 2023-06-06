import { Button } from "@wfp/ui";
import { iconWfpLogoStandardBlackEn } from "@wfp/icons";
import React from "react";
import { Icon } from "@wfp/ui";

export interface RegularPageProps {
  children?: React.ReactNode | undefined;
  withoutSecondary?: boolean;
  withoutSecondaryTabs?: boolean;
  pageWidth?: PageWidth;
  title?: string | React.ReactNode;
  pageTitle?: string;
  descriptions?: string;
}

const RegularPage: React.FC<RegularPageProps> = ({
  children,
  pageWidth = "full",
  title,
  descriptions,
}: RegularPageProps) => {
  return (
    <div className="regular-page">
      <div className="icon-container">
        <Icon
          icon={iconWfpLogoStandardBlackEn}
          fill="#ffffff"
          className="icon"
        />
      </div>
      <div>{children}</div>
    </div>
  );
};

export { RegularPage };
export default RegularPage;
