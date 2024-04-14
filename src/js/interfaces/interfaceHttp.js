import axios from "axios";

export default async function getReviews() {
    const url = 'https://portfolio-js.b.goit.study/api/reviews';
    const result = await axios.get(url);
    return result.data;
}
