import styles from "./page.module.css";
import "./styles.css";
import HOC from "./hoc";
import New from "./new";
import Hook from "./hook";
import MouseFollow from "./template/customHook.js/mouseFollow/mouseFollow";
import HomeTab from "./template/customHook.js/formTabs/homeTab";

export default function Home() {
  return <HomeTab />;
  // return <MouseFollow />;
  // return <Hook />;
  // return <HOC />;
  // return <New />;
}
