import { Outlet } from "react-router-dom";
import Header from "./app-layout-components/Header";
import Sidebar from "./app-layout-components/Sidebar";
import LogoContainer from "./app-layout-components/LogoContainer";
import Main from "./app-layout-components/Main";
import Logo from "./app-layout-components/Logo";
import LayoutContainer from "./app-layout-components/LayoutContainer";
import NavList from "./app-layout-components/NavList";
import Link from "./app-layout-components/Link";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import Container from "./app-layout-components/Container";

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
        <Container>
          <Outlet />
        </Container>
      </Main>
    </LayoutContainer>
  );
}
