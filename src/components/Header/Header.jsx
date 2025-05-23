import Logo from "./components/Logo";
import Search from "../Search/Search";
import LocationBtn from "./components/Location";

export default function Header({ setCoords }) {
  return (
    <header className="header">
      <Logo />
      <Search setCoords={setCoords} />
      <LocationBtn setCoords = { setCoords }/>
    </header>
  );
}
