import { useRouter } from "next/router";

function Developer() {
  const router = useRouter();

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const id = router.query.developerId;
  let index;
  details.map((detail) => {
    if (detail.id === +id) {
      index = details.indexOf(detail);
    }
  });
  if (index >= 0) {
    return <h1>{`${details[index].name} ${details[index].role}`}</h1>;
  } else {
    return <h1>Developer doesn't exist</h1>;
  }
}

export default Developer;
