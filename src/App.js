import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molocules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>search</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
}
