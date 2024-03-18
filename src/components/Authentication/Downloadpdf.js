import React from "react";
import '../../css/Downloadpdf.css'

const Downloadpdf = () => {

    const handleDownload = () => {
        const pdfContent = 'FSD Brochure.pdf';
        const blob = new Blob([pdfContent], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'FSD Brochure.pdf';
        link.click();
    }


    return (
        <>

            <div className="outer-card">
                <div className="inner-card ">

                    <h1><i>THANK YOU</i> </h1>
                    <h3>for contacting us</h3>
                    <h4>our representative will get back to you shortly</h4>
                    <button onClick={handleDownload}>Download carriculum</button>

                </div>
            </div>

        </>

    )


}
export default Downloadpdf;