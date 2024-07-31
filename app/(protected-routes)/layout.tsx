import SideBarComponent from "@/components/side-bar/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SideBarComponent />
      {children}
    </div>
  );
}
