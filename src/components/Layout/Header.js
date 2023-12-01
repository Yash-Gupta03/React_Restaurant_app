import headerImg from "../../assets/header_img.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Hungry</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImg} alt="Delicious Food" />
      </div>
    </>
  );
};

export default Header;
