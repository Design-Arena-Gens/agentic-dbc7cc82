"use client";

import {
  AcademicCapIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  TrophyIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import { ComponentProps } from "react";

type IconName =
  | "AcademicCapIcon"
  | "CalendarDaysIcon"
  | "ChartBarIcon"
  | "CurrencyDollarIcon"
  | "TrophyIcon"
  | "UserGroupIcon";

const iconMap: Record<IconName, (props: ComponentProps<"svg">) => JSX.Element> =
  {
    AcademicCapIcon: (props) => <AcademicCapIcon {...props} />,
    CalendarDaysIcon: (props) => <CalendarDaysIcon {...props} />,
    ChartBarIcon: (props) => <ChartBarIcon {...props} />,
    CurrencyDollarIcon: (props) => <CurrencyDollarIcon {...props} />,
    TrophyIcon: (props) => <TrophyIcon {...props} />,
    UserGroupIcon: (props) => <UserGroupIcon {...props} />
  };

type Props = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: Props) {
  const Component = iconMap[name];
  return <Component className={className} />;
}
