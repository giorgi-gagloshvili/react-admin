import SidebarNav from './SidebarNav'
import Logo from './../../assets/images/logo.png'

const Sidebar = () => {
    return (
        <aside className="fixed w-[232px] h-screen border-r flex flex-col bg-[#F8F8F8]">
            <div className="logo flex items-center justify-center w-full min-h-[88px]">
                <img src={Logo} alt="" />
            </div>
            
            <SidebarNav />
        </aside>
    );
}
 
export default Sidebar;