import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import '../css/About.css';
import { FaCircleNotch, } from "react-icons/fa";


const About = () => {
  return (
    <>

      <div className="about-">
        <h2>ABOUT US</h2>
      </div>

      <div className="team-image">
        <img src="https://apacnewsnetwork.com/wp-content/uploads/2022/07/TO-THE-NEW-expands-its-presence-in-India-with-a-new-office-in-Dehradun-600x375.png"></img>
        <div className="overlay">
          OUR TEAM
        </div>
      </div>


      <div className="focus">
        <h2>How IT Services is Helpful?</h2>
        <p>
          IT SERVICES is the leader in the specialized training of India and it is the certified training institute in Pune.<br></br>
          Our company is known for its best quality of training and we are the largest training service provider in many engineering domains<br></br>
          for all Engg students and working professionals.
        </p>
        <p>
          Our company will prove very helpful to you as we provide all facilities to the students and also having good infrastructure. We focus on the company’s working environment
          <br></br> and make sure that students do not face any issues related to their course. Our company offers online and offline classes to the students as per their suitability.<br></br>
          IT SERVICES is committed to providing quality education and knowledge to the students.We focus on both practical and theoretical knowledge to the students and
          <br></br> also give both basic and advanced level knowledge. Our syllabus related to the relevant course is always updated as per the industry standard.
          <br></br>So, don’t miss the chance to join IT SERVICES and attend the demo session first,
          and then make your decision.<br></br> We will make sure that you will never get disappointed.
        </p>
      </div><br></br>


      <div className="head-ing">

        <div className="img-4">
          <img src="https://shapemyskills.in/wp-content/uploads/2022/01/1513661867.jpg"></img>
        </div>

        <div className="text-4">
          <h2>IT SERVICES FOCUS ON</h2>
          <ul>
            <li>Achieving plenty of exposure</li>
            <li>Transform the learning and development standard</li>
            <li>Addressing on-the-job challenges</li>
            <li>Offering tailored training solutions</li>
            <li>E-Learning concept</li>
            <li>Face-to-face learning experiences</li>
          </ul>
        </div>
      </div><br></br><br></br><br></br>

      <div className="h3">
        <h3>Our Alumni Works At </h3>
      </div><br></br>

      <div className="flipcard-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">

              <div className="names">
                <h4>Anubhav Sonthalia</h4>
                <p>5 years Experience</p>
                <p>Software Developer</p>
                <div className="card-image">
                  <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=1433&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true"></img>
                </div>
              </div>
            </div>

            <div className="flip-card-back">
              <img src="https://t4.ftcdn.net/jpg/06/35/12/21/360_F_635122152_xqMz36lvSyF88Ka4pRJXJ2lfzHpDnbY0.jpg" />
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="names">
                <h4>Ankita Aurora</h4>
                <p>3 years Experience</p>
                <p>React Developer</p>
                <div className="card-image">
                  <img src="https://investnortheastengland.co.uk/wp-content/uploads/2016/09/2560px-Accenture-600x400-1-600x400.jpg"></img>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <img src="https://img.freepik.com/premium-photo/indian-female-software-engineer-smiling_921410-26357.jpg" ></img>
            </div>
          </div>
        </div>


        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="names">
                <h4>Arvind RP </h4>
                <p>8 years Experience</p>
                <p>Human Resource HR</p>
                <div className="card-image">
                  <img src="https://www.thestatesman.com/wp-content/uploads/2022/06/TCS.jpg"></img>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <img src="https://t3.ftcdn.net/jpg/06/36/06/20/360_F_636062005_PhSsuSM8tADiv7D86HxuEYtYOy5NLZjn.jpg" ></img>
            </div>
          </div>
        </div>


        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="names">
                <h4>Vishal Rupan</h4>
                <p>2 years Experience</p>
                <p>Django Developer</p>
                <div className="card-image">
                  <img src="https://logowik.com/content/uploads/images/cognizant-new-20223302.jpg"></img>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <img src="https://t3.ftcdn.net/jpg/06/32/91/32/360_F_632913287_pyej35IPG2tnAcqVxlD5QGlsJKUAYMhP.jpg" ></img>
            </div>
          </div>
        </div>


        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="names">
                <h4>Archana sharma</h4>
                <p>4 years Experience</p>
                <p>Mobile App Developer</p>
                <div className="card-image">
                  <img src="https://img.freepik.com/premium-vector/letter-hcl-logo-design_786241-126.jpg?w=2000"></img>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <img src="https://wallpapercave.com/wp/wp10239551.jpg" ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="com-names">
        <h3>Our Tie up with big multi-national Company like IBM, HCL tech.</h3><br></br><br></br>
        <h4>We also provide startup companies for placement..!</h4>
      </div>


      <div class="circles">
        <div class="circle-with-text">
          Startup Companies
        </div>

        <div className="box-0">
          <p><FaCircleNotch />Finoit Technologies</p>
          <div className="box-0">
            <p><FaCircleNotch />Prismetric</p>
            <div className="box-0">
              <p><FaCircleNotch />Side Bench</p>
            </div>
          </div>
        </div>



        <div className="box-0">
          <p><FaCircleNotch />Bo Tree Technologies</p>
          <div className="box-0">
            <p><FaCircleNotch />Orases</p>
            <div className="box-0">
              <p><FaCircleNotch />Appinventiv</p>
            </div>
          </div>
        </div>

      </div>


      <div className="link-buttons">
        <Link to={'Ourmission & Vision'} className="btn btn-dark">Our Mission & Vision</Link>
      </div>
      <Outlet />


    </>

  )
}
export default About;


