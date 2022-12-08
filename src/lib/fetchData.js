const url = "https://probability-node-api.vercel.app/rewards";

export async function getReward(endPoint) {
  try {
    const res = await fetch(`${url}${endPoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    const data = await res.json();
    return data;
  } catch (error) {
    alert("some thing went wrong");
    console.log(error);
  }
}
