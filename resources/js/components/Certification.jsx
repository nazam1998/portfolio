import React, { useEffect, useState } from 'react';

const Certification = () => {
    const [json, setJson] = useState(null);
useEffect(() => {
  const script = document.createElement('script');

  script.src = "https://cdn.credly.com/assets/utilities/embed.js";
  script.async = true;

  document.body.appendChild(script);

}, []);
    return (

        <div id='certification' className=''>

            <div className="container text-center">

                <h1>My Certifications</h1>
                <div className="my-5 text-center" id='certifications'>
                    <div className="mx-3" data-iframe-width="200" data-iframe-height="270" data-share-badge-id="47b4f9ad-4630-4ed6-a1a5-88eab94d782c" data-share-badge-host="https://www.credly.com"></div>
                    <div className="mx-3" data-iframe-width="200" data-iframe-height="270" data-share-badge-id="8186ef40-ff2c-4bd8-8e50-adff77df0e59" data-share-badge-host="https://www.credly.com"></div>
                    <div className="mx-3" data-iframe-width="200" data-iframe-height="270" data-share-badge-id="d147181a-f2b2-4fb2-a2ef-ef914cacf8e2" data-share-badge-host="https://www.credly.com"></div>
                </div>
            </div>
        </div>

    )

};

export default Certification
