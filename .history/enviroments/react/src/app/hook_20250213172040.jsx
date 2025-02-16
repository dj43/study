"use client";

import "./styles.css";
import useFetch from "./template/customHook.js/fetchHook";

export default function Hook() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <>
      <div>{data.body}</div>
    </>
  );
}
