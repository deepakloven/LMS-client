import SideBarList from "../side-bar-list/sideBarList";

function SideBarComponent() {
  const navigationList = [
    { name: "DashBoard", path: "/dashboard" },
    { name: "Course", path: "/courses" },
  ];
  return (
    <div className="h-full w-56 bg-slate-200 shadow-2xl flex flex-col gap-4 p-3">
      {navigationList.map((item, index) => {
        return <SideBarList key={index} name={item.name} path={item.path} />;
      })}
    </div>
  );
}

export default SideBarComponent;
