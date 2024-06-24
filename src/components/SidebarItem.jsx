export default function SidebarItem({ icon, children }) {
  return (
    <div className="sidebar-item">
      {icon}
      <span>{children}</span>
    </div>
  );
}
