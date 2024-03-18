import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Slider.css';
import { FaArrowAltCircleRight, FaBriefcase, FaCertificate, FaConnectdevelop,FaUser,FaUserTie,FaStarHalfAlt,FaThumbsUp,FaPeopleArrows } from 'react-icons/fa';


const SliderComponent = () => {

  return (
    <>
      <div className='body--1'>
        <Carousel pause="hover" interval={1000}>

          <Carousel.Item>
            <img className="d-block  w-100"
              src="https://e1.pxfuel.com/desktop-wallpaper/467/383/desktop-wallpaper-web-design-web-development.jpg"
            />
            <div className="overlay-text">
              <h2 style={{ color: 'white' }}>BEST INSTITUTE IN PUNE : IT SERVICES</h2>
              <h2 style={{ color: 'white' }}> In Collaboration with:</h2>
              <h4 style={{ color: 'white' }}>IBM</h4>
              <h4 style={{ color: 'white' }}>HCL</h4>
              <h5 style={{ color: 'aqua' }}>Mode of Training : Classroom and Online</h5>
              <div>
                <p style={{ color: 'aqua' }}><FaUser className='user-1' />900+ Students Enroll</p>
                <p style={{ color: 'aqua' }}><FaStarHalfAlt className='user-1' />4.5 Google Reviews</p>
                <p style={{ color: 'aqua' }}><FaUserTie className='user-1' />Job Readiness </p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100"
              src="https://static.vecteezy.com/system/resources/thumbnails/025/474/298/small_2x/portrait-of-a-beautiful-diverse-female-wearing-glasses-using-laptop-computer-looking-at-camera-and-smiling-information-technology-specialist-software-engineer-or-developer-ai-generated-photo.jpg"
            />
            <div class="overlay-text">
              <h1>Fullstack Development</h1>
              <p>front-end web development, back-end web development,and database development.</p>
              <p><b>👉90+ Hrs of effective live training</b></p>
              <p><b>👉30+ Hrs assignments</b></p>
              <p><b>👉50+ Hrs projects</b></p>
              <p><b>👉Interactive Sessions</b></p>
              <p><b>👉Real-time Projects</b> </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
              <img
              className="d-block  w-100"
              src="https://www.smdwebtech.com.my/wp-content/uploads/2020/07/online-employee-training-program.png"
            />
            <div class="overlay-text">
              <h1>App Development</h1>
              <p> UX/UI design,testing,and post-launch optimization, etc.</p>
              <p><b>👉40+ effective live training</b></p>
              <p><b>👉30+ assignments</b></p>
              <p><b>👉1 major real time projects</b></p>
              <p><b>👉Interactive Sessions</b></p>
              <p><b>👉Interview FAQ's</b> </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/premium-photo/business-team-showing-unity-with-their-hands-together-unity-teamwork-concept_33413-238.jpg?size=626&ext=jpg"
            />
            <div class="overlay-text">
              <h1>Data Science</h1>
              <p>Machine Learning, Python, Artificial Intelligence, Data Analytics.</p>
              <p><b>👉80+ effective live training</b></p>
              <p><b>👉20+  assignments</b></p>
              <p><b>👉25+ ppt presentation</b></p>
              <p><b>👉Interactive live Sessions</b></p>
              <p><b>👉major Real-time Projects</b> </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.johnacademy.co.uk/wp-content/uploads/2023/11/image-72.jpg"
            />
            <div class="overlay-text">
              <h1>Cloud Computing</h1>
              <p>Aws cloud computing, Azure cloud computing, GCP cloud computing</p>
              <p><b>👉90+ effective live training</b></p>
              <p><b>👉40+ Hrs assignments</b></p>
              <p><b>👉20+ projects</b></p>
              <p><b>👉Interactive Sessions</b></p>
              <p><b>👉Real-time Projects</b> </p>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className='main'>
          <FaConnectdevelop className='con-dev-icon' /> <h2>IT SERVICES</h2>
        </div>

        <div className='heading1'>
          <h2>BEST IT SOFTWARE TRAINING INSTITUTE</h2><br></br>
          <div className='subheading'>
            <h4>IT services believe in sharing best practices with learners to build a great career in IT.</h4>



            <div className='container'>
              <div className='box'>
                <p><FaArrowAltCircleRight className='arrow-1' />Learn the latest technologies like Fullstack Development, Aws, etc.</p>
                <p><FaArrowAltCircleRight className='arrow-1' />Real-world scenario projects involving real-world data sets for hands-on learning.</p>
                <p><FaArrowAltCircleRight className='arrow-1' />Live Interactive Software Training Sessions.</p>
              </div>

              <div className='box'>
                <p><FaArrowAltCircleRight className='arrow-1' /> provide hand written notes plus books to refre. </p>
                <p><FaArrowAltCircleRight className='arrow-1' /> Live mock tests build confidence for actual interviews. </p>
                <p><FaArrowAltCircleRight className='arrow-1' /> Daily practice during sessions to revise.</p>
              </div>

              <div className='box'><p><FaArrowAltCircleRight className='arrow-1' />At the end of the training,resume-writing session to write a noticeable resume.</p>
                <p><FaArrowAltCircleRight className='arrow-1' />Certificate of Completion to showcase your skills to everyone on LinkedIn and GitHub.</p>
                <p><FaArrowAltCircleRight className='arrow-1' />communication  class + weekly presentaion.</p>
              </div>
            </div>
          </div>
        </div><br></br><br></br>






        <div className="container-a">
          <div className="main-image">

            <div className='hover-heading'>
              <h3>---WHY CHOOSE US</h3>
              <h1>WHY SHOULD OUR IT SERVICES</h1>
            </div><br></br>
            <ul>
              <li>👉Working IT professionals as instructors.</li>
              <li>👉Flexibility to switch training batches.</li>
              <li>👉Online, Classroom, corporate training.</li>
              <li>👉LIVE Class training recording for revision.</li>
              <li>👉Doubt discussion after every training sessions.</li>
              <li>👉Training with Live projects.</li>
            </ul>
          </div>

        </div>



        <div class="gallery-container">

          <div className="image-box">
            <FaThumbsUp className='iconssss' />
            <p>Trusted by students</p>
          </div>

          <div className="image-box">
            <FaPeopleArrows className='iconssss' />
            <p>Strong network</p>
          </div>

          <div className="image-box">
            <FaBriefcase className='iconssss' />
            <p>Interview Preparation</p>
          </div>

          <div className="image-box">
            <FaCertificate className='iconssss' />
            <p>Certification</p>
          </div>

        </div><br></br><br></br><br></br><br/>



        <div className="corporate">
          <div className="text-1">
            <h2>Benefits Of Corporate Training......!!!</h2>
            <p>Training is more than enhancing qualities or skills.<br>
            </br> It is the ability to help capable and independent-thinking people; together; build relationships & careers.
              Training is more than enhancing qualities or skills. <br></br>
              It is the ability to help capable and independent-thinking people; together; build relationships & careers.
            </p>
            <div className='box-set'>
              <div className="box-2">
                <p>
                  <div className='cor-heading'>
                    <h6>Corporate Training Contributes to Sustained Growth of the Organization:</h6>
                  </div>
                  <ul>
                    <li>Personalized Training Content</li>
                    <li>Experienced Trainers</li>
                    <li>Nationwide Presence</li>
                    <li>Known for Professionalism and Quality</li>
                    <li>Improved cost-efficiency</li>
                    <li>Increased morale and motivation</li>
                    <li>Increased employee retention</li>
                    <li>Better decision making & leadership</li>
                    <li>Elimitnates weaknesses</li>
                    <li>Gain Consumer satisfaction</li>
                    <li>Uniformity in the work processes.</li>
                    <li>Increase Profitability</li>
                    <li>To be ahead in the competition</li>
                    <br></br>
                    <h6>Types of Corporate Training Programs:</h6>
                    <li>One Board Orientation</li>
                    <li>Compliance Training</li>
                    <li>Hardskill Training</li>
                    <li>Softskill Training</li>
                    <li>Product Knowledge Training</li>
                    <br></br>
                    <h6>Importance of Evaluating The Effectiveness of Employee Training:</h6>
                    <li>Helps Identify the Areas of Improvement</li>
                    <li>Helps Keep Your Trainers and Learners Accountable</li>
                    <li>Helps Motivate the Employees</li>
                    <li>To uncover issues in the training process and improve it.</li>
                    <li> To determine if the training benefits employees.</li>
                    <br></br>
                    <h6>Corporate training also helps to reduce:</h6>
                    <li>Workplace mishaps</li>
                    <li>Equipment maintenance costs</li>
                    <li>Staff turnover and leaves</li>
                    <li>Cost of hiring</li>
                  </ul>
                </p>
              </div><br></br><br></br><br></br>

            </div>
          </div>
          <div className="image-3">
            <img src="https://www.goteso.com/assets/images/training/banner/corporate-training-in-india.png" ></img>
          </div>
        </div><br></br><br></br><br></br>
        <div className='placement'>
          <h2>Our Students Are Placed in..!</h2>
        </div>

        <div className="animated-box">
          <div className="company-logo" >
            <img src="https://www.hcltech.com/sites/default/files/images/campaign-images/rich-snippet/Supercharging-progress-facebook.png"></img>
          </div>
          <div className="company-logo" >
            <img src="https://logodix.com/logo/64531.jpg"></img>
          </div>
          <div className="company-logo" >
            <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/IK7236HTRVIF5LHRAYWSUV2ZWA.jpg"></img>
          </div>
          <div className="company-logo" >
            <img src="https://thumbs.dreamstime.com/b/capgemini-company-logo-sign-building-capgemini-company-logo-sign-building-capgemini-french-multinational-272177357.jpg"></img>
          </div>
          <div className="company-logo" >
            <img src="https://images.cnbctv18.com/wp-content/uploads/2022/07/Tech-Mahindra-shutterstock.jpg?im=FitAndFill,width=1200,height=900"></img>
          </div>
          <div className="company-logo" >
            <img src="https://i.pinimg.com/736x/63/80/58/6380584b5bb39e66530e85c77d4a215d.jpg"></img>
          </div>
        </div>
      </div>

    </>

  )
}

export default SliderComponent;


