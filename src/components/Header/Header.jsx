import Logo from "./components/Logo";
import Search from "../Search/Search";
import LocationBtn from "./components/Location";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Search />
      <LocationBtn />
    </header>
  );
}
