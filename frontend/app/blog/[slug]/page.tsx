import api from "../../api";

export async function generateStaticParams() {
  const res = await api.call("test-params");
  const res1 = await api.call("test-page?slug=XX");

  return [{ slug: "test1" }, { slug: "test2" }];
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await api.call(`test-page?slug=${params.slug}`);
  const data = await res.json();

  const res1 = await api.call("test-page?slug=XX");

  return <div>My Post: {JSON.stringify(data)}</div>;
}
