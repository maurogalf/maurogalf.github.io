import React, { useEffect, useState } from "react";
import { projects } from "../data/projects";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Projects = ({ setPage }) => {
  const [projectsShowed, setProjectsShowed] = useState([]);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(4);

  setPage(2);

  const handleProjects = () => {
    setFirst(first + 4);
    setLast(last + 4);
  };

  const handlePrevious = () => {
    setFirst(first - 4);
    setLast(last - 4);
  };

  useEffect(() => {
    const p = projects.slice(first, last);
    setProjectsShowed(p);
  }, [first, last]);
  return (
    <div className="project-container">
      <div className="btn-group-container">
        <h2>
          Trab<span>ajos</span>
        </h2>
        {first !== 0 && (
          <button onClick={handlePrevious} className="btn-show btn-prev">
            ← Mostrar anteriores
          </button>
        )}
        {last < projects.length && (
          <button onClick={handleProjects} className="btn-show btn-next">
            Mostrar más →
          </button>
        )}
      </div>
      <TransitionGroup component="div" className={"project-container"}>
        {projectsShowed.map((project) => {
          return (
            <CSSTransition key={project.nombre} timeout={300} classNames="fade">
              <div className="project">
                <div className="project-image-container">
                  <h3 className="project-title">{project.nombre}</h3>
                  <Image
                    className="project-image"
                    href={project.link}
                    image={project.presentacion}
                    target="_blank"
                    rel="noreferrer"
                  ></Image>
                </div>
                <div className="project-description">
                  {project.descripcion}
                  <div>
                    <a
                      href={project.repositorio}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Go to repo →
                    </a>
                  </div>
                </div>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default Projects;

const Image = styled.a`
  background-image: url("${(props) => props.image}");
  background-size: cover;
  border-radius: 5px;
  transition: all 1000ms;

  &:hover {
    background-position: bottom;
  }
`;
