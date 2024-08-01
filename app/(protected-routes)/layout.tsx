import SideBarComponent from "@/components/side-bar/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex  h-screen">
      <div className="w-60 md:block hidden">
        <SideBarComponent />
      </div>

      {children}
    </div>
  );
}
