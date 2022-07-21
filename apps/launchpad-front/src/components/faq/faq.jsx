import React from "react";
import { Row, Col } from "react-bootstrap";

function FAQ() {
  return (
    <Row className="py-5">
      <span
        style={{
          background:
            "linear-gradient(96.51deg, #FF7171 2.96%, rgba(222, 28, 109, 0.78) 55.12%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textFillColor: "transparent",
          fontSize: "2.4em",
          fontStyle: "normal",
          fontWeight: "900",
          fontFamily: "Montserrat",
          lineHeight: "140%",
        }}
        className="my-3"
      >
        FAQ
      </span>
      <Col lg={6}>
        <div className="tabs" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div className="tab">
            <input type="checkbox" className="accordion" id="chck1" />
            <label className="tab-label" htmlFor="chck1">
              #1 How do I participate in IDOs?
            </label>
            <div className="tab-content">
              Just click one of the column of the projects that you interested
              in above.
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" className="accordion" id="chck3" />
            <label className="tab-label" htmlFor="chck3">
              #2 What are the steps of an IDO?
            </label>
            <div className="tab-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, reprehenderit? Qui sint numquam cum exercitationem dolores quibusdam reprehenderit, molestiae, alias est laudantium dignissimos magni optio temporibus! Ipsam reiciendis veniam explicabo.</div>
          </div>
          <div className="tab">
            <input type="checkbox" className="accordion" id="chck5" />
            <label className="tab-label" htmlFor="chck5">
              #3 What is First Come First Serve (FCFS) sale? And who can
              participate in it?
            </label>
            <div className="tab-content d-flex" style={{ flexDirection:"column", justifyContent: "space-between"  }}>
              <span>
                If a pool is not sold out, FCFS round opens 20 minutes before
                the sale end.
              </span>
              <br />
              <span>
                First two rounds - 50% and 100% - are open only for previously
                registered participants. It includes lottery participants who
                didn't win.
              </span>
              <br />
              <span>
                Starting from the round 3 - 200% - all stakers with their level
                higher than "NONE", including non-registered, can participate.
                All participants get an additional allocation on top of their
                level allocation: first +50% of base allocation, then +100%,
                then +200%. Non-registered participants get only the percent on
                top, without the base allocation.
              </span>
              <br />
              <span>
                Whitelist winners DO NOT get an additional allocation.
              </span>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="tabs" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div className="tab">
            <input type="checkbox" className="accordion" id="chck6" />
            <label className="tab-label" htmlFor="chck6">
              #4 When will I find out about my allocation?
            </label>
            <div className="tab-content">
              When the pre-sale ends, there are claim button where you can claim
              your token.
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" className="accordion" id="chck2" />
            <label className="tab-label" htmlFor="chck2">
              #5 How long do I have to fund my IDO allocation?
            </label>
            <div className="tab-content">
              The time based on the timeline that has been set by pool
              originators, you can see it on detail page for particular IDO
              project.
            </div>
          </div>
          <div className="tab">
            <input type="checkbox" className="accordion" id="chck4" />
            <label className="tab-label" htmlFor="chck4">
              #6 What can I fund my allocation with?
            </label>
            <div className="tab-content">Most likely with BUSD/WBNB.</div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default FAQ;
