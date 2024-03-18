import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import '../../css/Ourmission.css'
import { FaArrowAltCircleRight, FaConnectdevelop, } from 'react-icons/fa';

function Ourmission() {
  const [yearsofexperience, setyearsofexperience] = useState(0);
  const [companyPartnerships, setCompanyPartnerships] = useState(0);
  const [studentstrained, setstudentstrained] = useState(0);
  const [batches, setbatches] = useState(0);

  useEffect(() => {
    setyearsofexperience(8);
    setCompanyPartnerships(30);
    setstudentstrained(15000);
    setbatches(200)
  }, []);


  return (
    <>

      <div className='boz'>
        <div className='boz1'>
          <div class="left-side">

            <FaArrowAltCircleRight className='circle-arrow' />Our vision is to be the leading world technology institute that offers transformative education
            for creating innovators<br></br> and also generates new skills and knowledge for the industry and society.<br></br>

            <FaArrowAltCircleRight className='circle-arrow' />We always try to create learning opportunities for the people who are eagerly want to explore new skills
            and willing to<br></br> transform their careers with education & training that stand with both job and time.<br></br>

            <FaArrowAltCircleRight className='circle-arrow' />We provide the best possible content to you from hands-on projects to degree programs to job-ready
            certifications that<br></br> learners can easily redefine their careers. One of our mission is to make learning accessible
            for all and for that we constantly <br></br>add new trainers to the team for creating a perfect learning environment.
          </div>

          <div className="bozxx">
            <div className="right-side">

              <div className="box3">
                <CountUp
                  end={yearsofexperience}
                  duration={10}
                  separator=","
                  suffix='+'
                  style={{ marginLeft: '120px', fontSize: '50px' }}
                />
                <h4 className='lines'><b>YEARS OF TRAINING EXPERIENCE</b></h4>
              </div>

              <div className="box3">
                <CountUp
                  end={companyPartnerships}
                  duration={10}
                  separator=","
                  suffix='+'
                  style={{ marginLeft: '120px', fontSize: '50px' }}
                />
                <h4 className='lines'><b>COMPANY PARTNERSHIPS</b></h4>
              </div>

              <div className="box3">
                <CountUp
                  end={studentstrained}
                  duration={10}
                  suffix="+"
                  style={{ marginLeft: '60px', fontSize: '50px' }}
                />
                <h4 className='lines'><b>STUDENTS <br></br>TRAINED</b></h4>
              </div>

              <div className="box3">
                <CountUp
                  end={batches}
                  duration={10}
                  suffix="+"
                  style={{ marginLeft: '100px', fontSize: '50px' }}
                />
                <h4 className='lines'><b>BATCHES</b></h4>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='vis-mis'>
        <h2>
          We change the student's career by giving:
        </h2>
      </div>

      <div class="container-A">

        <div class="box1">
          <img src="https://cdn.dribbble.com/users/189859/screenshots/8585872/media/c9eae0a49587d854ed9035ab9db6b4ab.gif" />
          <div class="overlay1"><h5>Learning</h5>
            <p>From our industry experts
              learn from  the basics and advanced topics of your selected course whichwill help you become master.</p></div>
        </div>

        <div className='box1'>
          <img src="https://cdn.dribbble.com/users/2070959/screenshots/4169320/pc_1.gif" />
          <div class="overlay1"><h5>Practices</h5><p>
            You will be given assignments and tasks for practice so that you will be able to apply all the theory
            you learned in the training phase.</p></div>
        </div>

        <div class="box1"><img src="https://lordicon.com/icons/wired/flat/1019-document-signature-hand.gif" />
          <div class="overlay1"><h5>Exam</h5><p>
            You will be evaluated on the basis of your learning which will include some theory questions and some practical(coding) questions.</p></div>
        </div>

        <div class="box1"><img src="https://cdn.dribbble.com/users/293101/screenshots/4804121/seo_icons.gif" />
          <div class="overlay1"><h5>Live Project</h5><p>
            You will work on live projects where you can apply your learning practically and understand the stages through the project goes. </p></div>
        </div>

        <div class="box1"><img src="https://lordicon.com/icons/wired/outline/982-cv-curriculum-vitae-resume.gif" />
          <div class="overlay1"><h5>Resume Building</h5><p>
            We will help you create your resume so that you can make a good impression at the interviewer to show yout skills and other information.</p></div>
        </div>

        <div class="box1"><img src='https://cdnl.iconscout.com/lottie/premium/thumb/businessman-taking-interview-of-male-candidate-5626084-4702081.gif' />
          <div class="overlay1"><h5>Job Guarantee</h5><p>
            You will be provided job interview calls based on your performance so that you can get to your dream job and make progress.</p></div>
        </div>
      </div>

      <div className='sub-hea'>
        <h2>3 IN ONE CERTIFICATE</h2>
      </div>

      <div className='certificate-3'>
        <div>
          <FaConnectdevelop className='cer-icon' />
          <p><b>Course completation<br></br> certificate from IT services</b></p> </div>
        <div>
          < img src="https://cdn-icons-png.flaticon.com/512/882/882625.png" className='cer-icon' />
          <p><b> Experience certificate<br></br> from IBM    </b></p> </div>
        <div>
          <img src="https://images.pond5.com/hcl-letter-logo-design-black-illustration-171439477_iconl_nowm.jpeg"
            className='cer-icon' />
          <p><b>Internship certificate<br></br> from HCL tech</b></p> </div>

      </div>
    </>

  )
}

export default Ourmission;