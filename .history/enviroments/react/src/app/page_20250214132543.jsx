import styles from "./page.module.css";
import "./styles.css";
import HOC from "./hoc";
import New from "./new";
import Hook from "./hook";
import MouseFollow from "./template/customHook.js/mouseFollow/mouseFollow";

export default function Home() {
  return ({[<MouseFollow />,
  <Hook />]})
  // return <HOC />;
  // return <New />;
}
