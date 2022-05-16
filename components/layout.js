import Nav from "./nav";

const Layout = ({ children, pages }) => (
  <>
    <Nav pages={pages} />
    <h1>{children}</h1>
  </>
);

export default Layout;
