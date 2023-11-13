export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const timestamp = new Date().toISOString();

  const data = {
    test: `page route called with "${slug}"  at ${timestamp}`,
  };

  // await one second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // log with timestamp
  console.warn(`page route called with "${slug}"  at ${timestamp}`);

  return Response.json({ data });
}
