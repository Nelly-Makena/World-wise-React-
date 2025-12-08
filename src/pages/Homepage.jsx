import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function WorldWise() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
      <Link to="/AppLayout">Visit the App</Link>
    </div>
  );
}
export default WorldWise;
