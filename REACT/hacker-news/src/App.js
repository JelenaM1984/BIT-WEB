import "./App.css";
import Header from "./Header/Header";
import MyComponent from "./List/List";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />

        <MyComponent />
      </div>
    </>
  );
}
