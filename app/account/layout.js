import SideNavigation from "@/app/_components/SideNavigation";

function Layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-[16rem_1fr] h-full gap-12 ">
        <SideNavigation />
        <div className="py-1">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
