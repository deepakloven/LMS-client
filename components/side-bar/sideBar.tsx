import SideBarList from "../side-bar-list/sideBarList";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Image from "next/image";

function SideBarComponent() {
  const navigationList = [
    { icon: <SpaceDashboardIcon />, name: "DashBoard", path: "/dashboard" },
    { icon: <AutoStoriesIcon />, name: "Course", path: "/courses" },
  ];
  return (
    <div className="flex h-full w-full  bg-slate-200 shadow-2xl  flex-col gap-2  ">
      {navigationList.map((item, index) => {
        return (
          <SideBarList
            key={index}
            icon={item.icon}
            name={item.name}
            path={item.path}
          />
        );
      })}
    </div>
  );
}

export default SideBarComponent;
