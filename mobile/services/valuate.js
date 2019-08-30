export async function valuate(identity) {
  var data = await fetch(`http://localhost:5000/valuate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identity }),
  });
  return data;
}
