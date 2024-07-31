import Link from "next/link";

interface SideBarListProps {
  path: string;
  name: string;
}
const SideBarList: React.FC<SideBarListProps> = ({ path, name }) => {
  return (
    <div>
      <Link href={path}>{name}</Link>
    </div>
  );
};

export default SideBarList;
