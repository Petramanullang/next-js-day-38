export async function getServerSideProps(router) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${router.params.userId}`
  );
  const userSatu = await res.json();
  return { props: { userSatu } };
}

export default function Homepage({ userSatu }) {
  return <div>{JSON.stringify(userSatu)}</div>;
}
