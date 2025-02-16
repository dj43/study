import "./styles.css";
import useFetch from "./template/customHook.js/fetchHook";

export default function Hook() {
  const { data, isLoading, eroor } = useFetch("");
  return (
    <>
      <div>sogdfgdg</div>
    </>
  );
}
