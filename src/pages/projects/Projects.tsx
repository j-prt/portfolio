import { ProjectData } from '../../types'
import FullScreenBackground from '../../ui/FullScreenBackground'
import FunHeading from '../../ui/FunHeading'
import ListContainer from '../../ui/ListContainer'
import MainContainer from '../../ui/MainContainer'
import Rule from '../../ui/Rule'
import SubTitle from '../../ui/SubTitle'
import ProjectCard from './ProjectCard'

const projects: ProjectData[] = [
  {
    date: '2023',
    title: 'Cronicle',
    tags: ['cloud', 'ai', 'llm', 'data engineering'],
    description:
      "Cronicle is a system designed for gathering web articles, uploading them to the cloud, and generating curated emails using AI predictions. The project's workflow involves multiple stages: data collection with custom scrapers targeting selected websites; storage and preprocessing in the cloud; and finally, selection and delivery, with the option to drop in different NLP models for AI inference stage.",
    sourceLink: 'https://github.com/j-prt/cronicle',
    imgs: ['cronicle1.webp', 'cronicle2.webp', 'cronicle3.webp'],
  },
  {
    date: '2022',
    title: "GetRec'd",
    tags: ['web', 'ai recommendation', 'python'],
    description:
      "GetRec'd is a board game recommendation engine based on data scraped from BoardGameGeek, which is kind of like a wiki for board games. They have a comprehensive collection of first-party data and community-based metrics around games in the database, which made it a great source for feature engineering. After a collecting data and cleaning it, a K-Nearest Neighbors model is used to identify similar games based on distance in the vector space.",
    // liveLink: '',
    sourceLink: 'https://github.com/j-prt/GetRecd',
    imgs: ['gr5.webp', 'gr3.webp', 'gr4.webp'],
  },
]

function Projects() {
  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        <FunHeading>Projects!</FunHeading>
        <SubTitle>Some of the things I made</SubTitle>
        <Rule type='bold' />
        <ListContainer>
          <ProjectCard projectData={projects[0]} />
          <ProjectCard projectData={projects[1]} />
        </ListContainer>
      </MainContainer>
    </FullScreenBackground>
  )
}

export default Projects
