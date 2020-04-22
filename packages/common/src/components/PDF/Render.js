import React, { Component, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import PDFLoader, { Error } from "../Loading/PDF";
import { InteriorWrapper, PagesWrapper, Other } from "./Render.style";

const pdf = `${process.env.BACKEND}assets/pdf/graphql.pdf`;

const Render = ({ pageheight, pagewidth }) => {
  const renderWidth = pagewidth <= 425 ? pagewidth : null;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess(document) {
    setNumPages(document.numPages);
  }

  const changePage = (offset) => {
    setPageNumber(pageNumber + offset);
  };

  const previousPage = () => changePage(-1);

  const nextPage = () => {
    // event.preventDefault();
    changePage(1);
    console.log("next page");
  };
  return (
    <React.Fragment>
      <Document
        loading={<PDFLoader width={pagewidth} height={pageheight} speed={1} />}
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <PagesWrapper>
          <Page
            height={pageheight}
            pageNumber={pageNumber}
            width={renderWidth}
          />
          {pagewidth >= 900 && (
            <Page height={pageheight} pageNumber={pageNumber + 1} />
          )}
        </PagesWrapper>
      </Document>
      <InteriorWrapper>
        <div className="glide__controls">
          <div className="glide__arrows">
            <div
              className="glide__prev--area"
              onClick={pageNumber <= 1 ? null : previousPage}
            >
              <span className="prev_arrow" className="prev_arrow" />
            </div>

            <div
              className="glide__next--area"
              onClick={pageNumber >= numPages ? null : nextPage}
            >
              <span className="next_arrow" />
            </div>
          </div>
        </div>
      </InteriorWrapper>
    </React.Fragment>
  );
};

export default Render;
