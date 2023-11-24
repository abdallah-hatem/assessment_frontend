import { ApiBaseUrl } from "../../services/config";
import REQUEST from "../../services/reuest";

export default async function GET_ANNOUNCEMENTS() {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `announcement`,
  }).catch((error) => console.log(error));
}
