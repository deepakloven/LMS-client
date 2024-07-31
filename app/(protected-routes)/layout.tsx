import SideBarComponent from "@/components/side-bar/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-5 h-screen">
      <SideBarComponent />
      {children}
    </div>
  );
}
