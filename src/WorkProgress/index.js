import React from "react";
import "./style.css";
import Idea from "../assets/images/idea.svg";
import Bluepring from "../assets/images/blueprint.svg";
import Execute from "../assets/images/execute.svg";
export default function WorkProgress() {
  return (
    <div className="work-progress-main-parent-container d-flex flex-column justify-content-center align-items-center mb-5">
      <div className="work-progress-text-container">Work Progress</div>
      <div className="work-progress-our-progress-text  fs-1 mb-5">
        Our Process
      </div>
      <div className="work-progress-all-child-parent-container d-flex flex-wrap">
        {/* first-child */}
        <div className="work-progress-ideal-discussion-main-parent-container d-flex flex-column justify-content-center align-items-center me-5">
          <div className="work-progress-idea-discussion-img-container d-flex justify-content-center align-items-center">
            <img src={Idea} className="idea-img" />
          </div>
          <div className="ideal-discussion-text fw-bold fs-3 mb-3">
            Idea Discussion
          </div>
          <div className="work-progress-lets-discuss-text-container fw-light1 fs-51 text-muted">
            Let’s discuss on your awesome
            <br />
            idea and together we made your <br />
            idea into reality.
          </div>
        </div>
        {/* sec-child */}
        <div className="work-progress-ideal-discussion-main-parent-container d-flex flex-column justify-content-center align-items-center me-5 ms-3">
          <div className="work-progress-blueprint-discussion-img-container d-flex justify-content-center align-items-center">
            <img src={Bluepring} className="idea-img" />
          </div>
          <div className="ideal-discussion-text fw-bold fs-3 mb-3">
            Built a Blueprint/Design
          </div>
          <div className="work-progress-blueprint-discussion-text-container fw-bold1 fs-51 text-muted">
            After the discussion, it’s important
            <br />
            to have a blueprint of the idea or
            <br />
            work to avoid conflicts.
          </div>
        </div>
        {/* 3rd child */}
        <div className="work-progress-ideal-discussion-main-parent-container d-flex flex-column justify-content-center align-items-center me-5 ms-3">
          <div className="work-progress-execute-discussion-img-container d-flex justify-content-center align-items-center">
            <img src={Execute} className="idea-img" />
          </div>
          <div className="ideal-discussion-text fw-bold fs-3 mb-3">
            Execute & Deliver
          </div>
          <div className="work-progress-execute-deliver-text-container fw-bold1 fs-51 text-muted">
            After blueprint of project, we
            <br />
            execute the task in calcultive <br />
            manner and deliver high quality
            <br />
            product.
          </div>
        </div>
      </div>
    </div>
  );
}
