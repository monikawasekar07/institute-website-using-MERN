import { Link } from "react-router-dom";
import '../css/Pagenotfound.css';

const Pagenotfound = () => {
    return (

        <>
            <div className="page-img">
                <img style={{ height: '300px' }} src={require('../Assets/pagenotfounds.jpg')} />
            </div>

            <div className="home-btn">

                <Link to={''} className="btn btn-info">Go To Home Page</Link>

            </div>

        </>
    )
}
export default Pagenotfound;