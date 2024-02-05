import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import LogoContainer from "./LogoContainer";
import Main from "./Main";
import Logo from "./Logo";
import LayoutContainer from "./LayoutContainer";
import NavList from "./NavList";
import Link from "./Link";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

export default function AppLayout() {
  return (
    <LayoutContainer>
      <Header>header</Header>
      <Sidebar>
        <LogoContainer>
          <Logo src="/logo.png" alt="Logo" />
        </LogoContainer>

        <nav>
          <NavList>
            <li>
              <Link to="/dashboard">
                <HiOutlineHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/bookings">
                <HiOutlineCalendarDays />
                <span>Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/cabins">
                <HiOutlineHomeModern />
                <span>Cabins</span>
              </Link>
            </li>
            <li>
              <Link to="/users">
                <HiOutlineUsers />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <HiOutlineCog6Tooth />
                <span>Settings</span>
              </Link>
            </li>
          </NavList>
        </nav>
      </Sidebar>
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
}
