import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
  {
    userName: "dprojas",
    name: "Miguel Angel Duran",
    isFollowing: true
  },
  {
    userName: "alfonso16",
    name: "Pablo H.",
    isFollowing: false
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez",
    isFollowing: true
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: false
  }
]
export function App() {
  return (
    <section className="App">
     {
      users.map(user => {
        const {userName, name, isFollowing } = user

        return (
          <TwitterFollowCard 
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          name={name}
          >
          </TwitterFollowCard>
        )
      })
     }    
    </section> 
  )
}
