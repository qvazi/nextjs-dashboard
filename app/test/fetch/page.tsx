export default async function Page() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    (response) => response.json(),
  );
  return (
    <div>
      <h1>Test fetch</h1>
      <code>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code>
    </div>
  );
}
