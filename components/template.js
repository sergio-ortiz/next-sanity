import Link from "next/link";

const Layout = ({ children, pages }) => (
  <>
    <ul>
      {pages.map((page) => (
        <li key={page._id}>
          <Link href={page.slug ? "/" + page.slug : "/"}>
            <a>{page.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <h1>{children}</h1>
  </>
);

export default Layout;
