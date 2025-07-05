import DetailsPage from "@/components/templates/DetailsPage";
import { useRouter } from "next/router";

function Details({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading page...</h2>;
  }
  return (
    <div>
      <DetailsPage {...data} />
    </div>
  );
}

export default Details;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();

  const data = json.slice(0, 10);

  const paths = data.map((food) => ({ params: { id: food.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  console.log(id);

  const res = await fetch(`${process.env.BASE_URL}/data/${id}`);
  const data = await res.json();
  console.log(data);

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: +process.env.REVALIDATE,
  };
}
