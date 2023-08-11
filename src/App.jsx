import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "jheinember16",
    name: "Jheinember Jimenez",
    isFollowing: true,
  },
  {
    userName: "alfonso16",
    name: "Pablo H.",
    isFollowing: false,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {
      users.map(({ userName, name, isFollowing }) => (
        // const {userName, name, isFollowing } = user
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
