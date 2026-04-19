import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { ReactProjects, VanillaProjects, meta } from "../../content_option";

export const Portfolio = () => {
  const [isReactProjects, setisReactProjects] = useState(true);
  console.log("isReactProjects", isReactProjects);

  const curretProjects = isReactProjects ? ReactProjects : VanillaProjects;

  function hanldeChangeProject(project) {
    if (project === "react" && isReactProjects) return;
    if (project === "vanila" && !isReactProjects) return;
    setisReactProjects((prev) => !prev);
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="Project-Btns">
          <button
            className={isReactProjects && "currentProjectBtn"}
            onClick={() => hanldeChangeProject("react")}
          >
            React
          </button>
          <button
            className={!isReactProjects && "currentProjectBtn"}
            onClick={() => hanldeChangeProject("vanila")}
          >
            Vanilla
          </button>
        </div>
        <div className="mb-5 po_items_ho">
          {curretProjects?.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt={`Project${i + 1}`} />
                <div className="content">
                  <div className="projectName">
                    <h1>{data?.projectName} </h1>
                  </div>
                  <div className="po_item_heading">
                    <h5>TeckStack </h5>
                    <p>{data?.teckStack} </p>
                  </div>

                  <div className="po_item_description">
                    <h5>Overview</h5>
                    <p>{data.description}</p>
                  </div>
                  {data.link && (
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Explore
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
