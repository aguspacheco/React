import "./App.css";
import { TwitterFollowCard } from "./twitterFollowCard.jsx";

export function App() {
  return (
    <>
      <TwitterFollowCard userName="Fifa" name="Fifa org" />
      <TwitterFollowCard userName="BocaJuniors" name="BocaJuniors" />
      <TwitterFollowCard userName="Barcelonacf" name="Barcelonacf" />;
    </>
  );
}
