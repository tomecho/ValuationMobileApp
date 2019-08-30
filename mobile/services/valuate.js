export async function valuate(identity) {
  var data = await fetch(`${process.env.API_URL}/valuate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identity }),
  });
}
