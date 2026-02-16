import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import dannyResume from "./files/Danny_Resume.pdf";

// This approach imports the worker file directly from your installed package

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export const Resume = () => {
    return (
        <div className="resume-page-wrapper">
            <div className="resume-paper">
                <Document 
                    file={dannyResume} 
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
            
            <a href={dannyResume} download className="custom-download-btn">
                Download PDF
            </a>
        </div>
    );
};