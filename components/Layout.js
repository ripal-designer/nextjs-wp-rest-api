import style from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={style.container}>
      <div className={style.main}>{children}</div>
    </div>
  );
}

export default Layout;
