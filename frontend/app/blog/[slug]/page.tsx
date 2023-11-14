import api from '../../api';

export async function generateStaticParams() {
  await api.call('test-params');
  await api.call('test-page?slug=global-slug');

  return [{ slug: 'test1' }, { slug: 'test2' }];
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await api.call(`test-page?slug=page-${params.slug}`);

  await api.call('test-page?slug=global-slug');

  return <div>My Post: {JSON.stringify(data)}</div>;
}
