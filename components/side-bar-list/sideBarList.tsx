"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface SideBarListProps {
  path: string;
  name: string;
  icon: any;
}
const SideBarList: React.FC<SideBarListProps> = ({ path, name, icon }) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <Link
      href={path}
      className={`flex gap-x-2 justify-between ${
        isActive ? "text-info bg-sky-300 bg-opacity-40 shadow-sm" : null
      } `}
    >
      <div className={`flex item-center p-4 rounded gap-2 `}>
        <span>{icon}</span>
        {name}
      </div>
      <div className={`${isActive && "border-2 border-info"}`} />
    </Link>
  );
};

export default SideBarList;
