import { ApiBaseUrl } from "../../services/config";
import REQUEST from "../../services/reuest";

export default async function GET_QUIZZES() {
  return await REQUEST({
    method: "GET",
    url: ApiBaseUrl + `quiz`,
  }).catch((error) => console.log(error));
}
