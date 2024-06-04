import AppNav from "../AppNav/AppNav";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import style from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <Footer />
    </div>
  );
}

export default Sidebar;
