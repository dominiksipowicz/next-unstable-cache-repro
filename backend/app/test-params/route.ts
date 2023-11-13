export async function GET() {
  const data = {
    test: "this is my test",
  };

  // await one second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // log with timestamp
  const timestamp = new Date().toISOString();
  console.warn(`params route called at ${timestamp}`);

  return Response.json({ data });
}
