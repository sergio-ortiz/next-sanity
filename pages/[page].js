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
    paths: pages.map((p) => ({
      params: { page: p.endpoint },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pages = await client.fetch(`*[_type == "page"]`);
  const data = pages.find((p) => p.endpoint == params.page);
  return {
    props: { data },
  };
}

const Page = ({ data }) => <h1>{data.title}</h1>;

export default Page;
