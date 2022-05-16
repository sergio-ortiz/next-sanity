import Link from "next/link";

const Layout = ({ children, pages }) => (
  <>
    <ul>
      {pages.map((page) => (
        <li>
          <Link href={page.slug ? page.slug : "/"}>
            <a>{page.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <h1>{children}</h1>
  </>
);

export default Layout;
