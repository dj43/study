import "./styles.css";
import useFetch from "./template/customHook.js/fetchHook";

export default function Hook() {
  const { data, isLoading, eroor } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  return (
    <>
      <div>sogdfgdg</div>
    </>
  );
}
