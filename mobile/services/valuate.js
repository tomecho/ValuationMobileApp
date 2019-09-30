export async function valuate(identity) {
  var data = await fetch(`http://10.0.0.155:5000/valuate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identity }),
  });
  return (await data.json()).value;
}
