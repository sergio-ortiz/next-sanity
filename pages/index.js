import { createClient } from "next-sanity";

const Home = ({ data }) => <h1>{data.title}</h1>;

const client = createClient({
  projectId: "gp05no4d",
  dataset: "production",
  apiVersion: "2022-05-11",
  useCdn: false,
});

export async function getStaticProps({ query }) {
  const pages = await client.fetch(`*[_type == "page"]`);
  const data = pages.find((p) => p.endpoint == "home");
  return {
    props: { data },
  };
}

export default Home;
