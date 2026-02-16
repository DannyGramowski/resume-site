import React, { useState } from 'react'; 
import { Document, Page, pdfjs } from 'react-pdf';
import dannyResume from "./files/Danny_Resume.pdf";
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import './Resume.scss';


// This approach imports the worker file directly from your installed package

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;// var resumeURL = "";
// if(dannyResume != "") {
//     resumeURL = dannyResume;
// } else {
//     fetch(dannyResume).then((response) => {
//         response.blob().then((blob) => {
//             resumeURL = window.URL.createObjectURL(blob);
//         });
//     });
// }
// console.log(resumeURL, "resume url");
console.log(dannyResume, "danny resume url");

export const Resume = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    function handleLoadSuccess() {
        setIsLoaded(true);
    }
    return (
        <div className="resume-page-wrapper">
            <div className="resume-paper">
                <Document 
                    file={dannyResume}
                    onLoadSuccess={handleLoadSuccess} 
                    loading={<p className="loading-text">Loading Resume...</p>}
                >
                    <Page 
                        pageNumber={1} 
                        // This width centers it nicely on most screens
                        width={window.innerWidth > 900 ? 900 : window.innerWidth * 0.95} 
                        renderTextLayer={false} 
                        renderAnnotationLayer={false}
                    />
                </Document>
            </div>
            
            {isLoaded && (
                <a href={dannyResume} download className="custom-download-btn animate-in">
                    Download PDF
                </a>
            )}
        </div>
    );
};