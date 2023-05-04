import React from 'react'

import ProjectBox from '../../components/Projects/ProjectBox'
import NavMan from '../../components/Navigation/NavMan'

import { projects } from '../../components/data/projects'

export default function Projects({ page, setPage }) {
  const [currentProject, setCurrentProject] = React.useState(0)

  if (currentProject > projects.length - 1) setPage(page + 1)

  return (
    <div>
      <NavMan arrow={false} style={"absolute w-32 mt-5 right-5"} explaining={true} />
      {projects.map((project, index) => {
        return (
          <>
            {project.index === currentProject &&
              <ProjectBox
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                key={index}
                index={`${project.index + 1} av ${projects.length}`}
                i={project.index}
                title={project.title}
                description={project.description}
                designDescription={project.designDescription}
                tools={project.tools}
                link={project.link}
                image={project.image}
              />}
          </>
        )
      })}
    </div>
  )
}