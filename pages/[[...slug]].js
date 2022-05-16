import Layout from "../components/template";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "gp05no4d",
  dataset: "production",
  apiVersion: "2022-05-11",
  useCdn: false,
});

export async function getStaticPaths() {
  const pages = await client.fetch(`*[_type == "page"]`);

  return {
    paths: pages.map((page) =>
      page.slug
        ? {
            params: { slug: [page.slug] },
          }
        : { params: { slug: [] } }
    ),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pages = await client.fetch(`*[_type == "page"]`);
  const data = pages.find((page) => page.slug == params.slug);
  return {
    props: { data, pages },
  };
}

const Page = ({ data, pages }) => <Layout pages={pages}>{data.title}</Layout>;

export default Page;
