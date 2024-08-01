import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SideBarComponent from "../side-bar/sideBar";

function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 bg-slate-200">
        <SideBarComponent />
      </SheetContent>
    </Sheet>
  );
}

export default MobileSideBar;
