import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";

function Mainlayout() {
  return (
    <section id="main-layout">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Content></Content>
    </section>
  );
}

export default Mainlayout;
