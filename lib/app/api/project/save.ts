import fetch from "cross-fetch";
import { SERVER_URI } from "../../../config";

export async function saveEnv(key: string, appName: string, env: string) {
  try {
    await fetch(SERVER_URI + "/app/" + appName, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ envData: env }),
    });
  } catch (e) {
    throw e;
  }
}