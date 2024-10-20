import "./Header.scss";

const Header = ({ categories }) => {
  return (
    <div className="header">
      <h1>Product List</h1>
      <div className="btnDiv">
        {categories.map((a,index) => (
          <button key={index}>{a}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
