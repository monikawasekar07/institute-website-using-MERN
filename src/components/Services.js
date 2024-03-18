
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Services.css';


const Services = () => {

  return (
    <div className='services'>
      <img src="https://media.istockphoto.com/id/660286864/photo/banker-discussing-with-couple.jpg?s=612x612&w=0&k=20&c=GiKscg_qupDsLTy-AkIBPhpoHmTBCKJAkeW-vMwtuw8="></img>
      <div className='overlay-overlaytext'>OUR SERVICES</div>
      <br /><br />

      <div className="wrapper-2">
        <div className="card-7">
          <img src="https://miro.medium.com/v2/resize:fit:1358/0*ZEPJsASfB2z7hi_0" />
          <div className="info">
            <h1>Full Stack Web Development</h1>
            <Link to="/services/full-stack-development">
              <button>Read More</button>
            </Link>
          </div>
        </div>

        <div className="card-7"><img src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg" />
          <div className="info">
            <h1>App Development</h1>
            <Link to='/services/app-development'>
              <button>Read More</button>
            </Link>
          </div>
        </div>

        <div className="card-7"><img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Data_Science.jpg" />
          <div className="info">
            <h1>Data <br></br>Science</h1>
            <Link to='/services/data-science'>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div><br></br><br></br>



      <div className='wrapper-2'>
        <div className="card-7"><img src="https://theicttrends.com/wp-content/uploads/2023/01/4-Pillars-of-Cloud-Computing-1.jpg" />
          <div className="info">
            <h1>Cloud Computing</h1>
            <Link to='/services/cloud-computing'>
              <button>Read More</button>
            </Link>
          </div>
        </div>

        <div className="card-7"><img src="https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149370941.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705881600&semt=sph" />
          <div className="info">
            <h1>Devops</h1>
            <Link to='/services/devops-developer'>
              <button>Read More</button>
            </Link>
          </div>
        </div>

        <div className="card-7"><img src="https://stridefuture.com/wp-content/uploads/Recent-Trends-on-UI-UX.jpg" />
          <div className="info">
            <h1>Ui/Ux Design</h1>
            <Link to='/services/uiux-design'>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div><br></br><br></br>


      <div className='wrapper-2'>
        <div className="card-7"><img src="https://www.eviaglobal.com/images/microsoft-net-development.jpg" />
          <div className="info">
            <h1>Dot<br></br>Net</h1>
            <Link to='/services/dot-net'>
              <button>Read More</button>
            </Link>
          </div>
        </div>

        <div className="card-7"><img src="https://www.gcreddy.com/wp-content/uploads/2022/08/Basics-of-Automation-Testing.jpg" />
          <div className="info">
            <h1>Automation Testing</h1>
            <Link to='/services/automation-testing'>
              <button>Read More</button>
            </Link>
          </div>
        </div>

        <div className="card-7"><img src="https://res.heraldm.com/content/image/2021/09/01/20210901000925_0.jpg" />
          <div className="info">
            <h1>Big<br></br>Data</h1>
            <Link to='/services/big-data'>
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div className='traing-certi'>
        <div className='cer-trg'>
          <p className='trai-text'>TRAINING COMPLETATION <br />CERTIFICATE<br />
            <hr style={{ color: 'white', backgroundColor: 'white', height: 6 }} />
            <br />
            Get Certified On Course Completation</p>
          <img src={require('../Assets/it sols ss.png')} />
        </div>
      </div>



    </div>
  );
};

export default Services;
