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
    paths: pages.map((p) =>
      p.endpoint
        ? {
            params: { slug: [p.endpoint] },
          }
        : { params: { slug: [] } }
    ),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const pages = await client.fetch(`*[_type == "page"]`);
  const data = pages.find((p) => p.endpoint == params.slug);
  return {
    props: { data },
  };
}

const Home = ({ data }) => <h1>{data.title}</h1>;

export default Home;
