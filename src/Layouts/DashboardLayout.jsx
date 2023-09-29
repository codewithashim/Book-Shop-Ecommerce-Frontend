import { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import useCommonApiData from '@/src/Hooks/useCommonApiData';
import { Layout, Menu, Button } from "antd";
import { MdLocalOffer } from "react-icons/md";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaDiceD6,
  FaPowerOff,
  FaRegClock,
  FaThLarge,
} from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";
const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
  const { handleLogout } = useCommonApiData()
  const [collapsed, setCollapsed] = useState(false); // Start with the sidebar open on desktop devices
  const [sideNavVisible, setSideNavVisible] = useState(false);
  const handleResize = () => {
    setCollapsed(window.innerWidth < 768);
    // Hide the sidebar on mobile devices by default
    if (window.innerWidth < 768) {
      setSideNavVisible(false);
    } else {
      setSideNavVisible(true);
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Call handleResize on component mount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleSideNav = () => {
    setSideNavVisible(!sideNavVisible);
  };

  return (
    <Layout className="bg-transparent">
      <style>{`
        .ant-menu-item-selected {
          background: linear-gradient(135deg, #2b59ff 0%, #bb2bff 100%);
        }
      `}</style>

      {/* Add a condition to render Sider based on sideNavVisible */}
      {sideNavVisible && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="text-white"
          style={{
            position: "sticky", top: 0, height: "100vh",
            zIndex: 999

          }}
        >


          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["2"]}
            className="text-white"
            style={{ height: "100%", width: "100%" }}
          >
            <Menu.Item key="1" icon={<FaThLarge />}>
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FaThLarge />}>
              <Link href="/dashboard">Inventory</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FaCalendarAlt />}>
              <Link href="/dashboard/book/add-book">Books</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<MdLocalOffer />}>
              <Link href="/dashboard/category">Category</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<MdLocalOffer />}>
              <Link href="/dashboard/popular-category/add-popular-category">Popular Category</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<FaDiceD6 />}>
              <Link href="/dashboard/copuon">Coupon</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<FaRegClock />}>
              <Link href="/dashboard/level">Lavel</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<AiOutlineIdcard />}>
              <Link href="/dashboard/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<FaPowerOff />}>
              <button
                onClick={() => handleLogout()}
              >Logout</button>
            </Menu.Item>
          </Menu>
        </Sider>
      )}

      <Layout className="bg-transparent">
        <Header
          style={{
            padding: 0,
            position: "sticky",
            top: 0,
            zIndex: 999
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
              toggleCollapsed();
              toggleSideNav(); // Toggle the sideNavVisible state when the button is clicked
            }}
            style={{
              fontSize: "16px",
              color: "white",
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            padding: 24,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "65rem",
            backgroundPositionY: "bottom",
            backgroundSize: "70% 90%",
          }}
          className={`${collapsed ? "" : "md:ml-10"}`}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
