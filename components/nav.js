import Link from "next/link";

const Nav = ({ pages }) => (
  <ul>
    {pages
      .sort((a, b) => Date.parse(a._createdAt) - Date.parse(b._createdAt))
      .map((page) => (
        <li key={page._id}>
          <Link href={page.slug ? "/" + page.slug : "/"}>
            <a>{page.title}</a>
          </Link>
        </li>
      ))}
  </ul>
);

export default Nav;
