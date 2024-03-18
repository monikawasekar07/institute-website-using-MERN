import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Bookseat.css';



const Boakseat = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        city: '',
    });

    const [showVideo, setShowVideo] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, });
    }

    const handleWatchNow = () => {
        setShowVideo(true);

        toast.success('video is now playing watch with our expert trainers!', { position: toast.POSITION.TOP_CENTER });
    }


    return (

        <div className='top5'>
            <h2>TOP 5 COURSES ROADMAP</h2>
            <p>View free top 5 courses roadmap<br></br>
                with our expert trainers<br></br><br></br>
                fill details and watch video now...!!!!
            </p>

            <div className='bookseat'>
                <div className='wrappers-1'>
                    <form>
                        <div className='input-box-5'>
                            <label>Full Name:</label>
                            <input type="text" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} />
                        </div>


                        <div className='input-box-5'>
                            <label>Email:</label>
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                        </div>


                        <div className='input-box-5'>
                            <label>Mobile:</label>
                            <input type="text" name='mobile' placeholder="Mobile no" value={formData.mobile} onChange={handleChange} />
                        </div>


                        <div className='input-box-5'>
                            <label>City:</label>
                            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                        </div>
                    </form>
                    <br></br>
   
                    <button onClick={handleWatchNow}>Watch Now</button>



                    {showVideo && (
                        <ReactPlayer
                            controls={true}
                            url="https://youtu.be/254L4H6qNSc?si=OTHLSD6ZiQ8B9kpr"
                            height={300}
                            width={600}
                            style={{ marginTop: '60px', marginLeft: '430px' }} />



                    )}

                    {showVideo && (
                        <ReactPlayer
                            controls={true}
                            url="https://youtu.be/TjzRS-oyUtY?si=TxafFYWYCmLwfpBK"
                            height={300}
                            width={600}
                            style={{ marginTop: '60px', marginLeft: '430px' }} />



                    )}

                    {showVideo && (
                        <ReactPlayer
                            controls={true}
                            url="https://youtu.be/14WBmf9nMsk?si=rAZMc_zYjtwYgWA4"
                            height={300}
                            width={600}
                            style={{ marginTop: '60px', marginLeft: '430px' }} />



                    )}


                    {showVideo && (
                        <ReactPlayer
                            controls={true}
                            url="https://youtu.be/sFXU9n9-6iI?si=-R707d8XKglb4w-C"
                            height={300}
                            width={600}
                            style={{ marginTop: '60px', marginLeft: '430px' }} />



                    )}

                    {showVideo && (
                        <ReactPlayer
                            controls={true}
                            url="https://youtu.be/qlHsAfrs3GE?si=5yL8ITi0jJ0k7fI4"
                            height={300}
                            width={600}
                            style={{ marginTop: '60px', marginLeft: '430px' }} />



                    )}

                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Boakseat;




