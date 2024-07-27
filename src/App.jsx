import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { ResumeTitle } from './components/ResumeTitle';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormExperiences } from './components/FormExperiences';
import { FormEducation } from './components/FormEducation';
import { FormPersonalInfo } from './components/FormPersonalInfo';
import { personalInfoModel, experiencesModel, educationModel } from './models'
import { Resume } from './components/Resume';

function App() {
  const [personalInfo, setPersonalInfo] = useState(personalInfoModel)
  const [experiences, setExperiences] = useState(experiencesModel)
  const [education, setEducation] = useState(educationModel)
  
  const addExperience = () => {
    setExperiences(
      [
        ...experiences, {
          id: uuidv4(),
          companyName: '',
          positionTitle: '',
          workedFrom: '',
          workedUntil: '',
          responsibilities: ''
        }
      ]
    )
  }

  const removeExperience = (id) => {
    setExperiences(
      experiences.filter(exp => exp.id !== id)
    )
  }

  const addEducation = () => {
    setEducation(
      [
        ...education, {
          id: uuidv4(),
          schoolName: '',
          titleStudy: '',
          dateStudy: '',
          dateEndStudy: ''
        }
      ]
    )
  }

  const removeEducation = (id) => {
    setEducation(
      education.filter(educ => educ.id !== id)
    )
  }

  const updatePersonalInfo = (e) => {
    const field = e.target.attributes['name'].value
    const value = e.target.value
    setPersonalInfo(
      {...personalInfo, [field]: value}
    )
  }

  const updateExperiences = (e, id) => {
    const field = e.target.attributes['name'].value
    const value = e.target.value
    setExperiences(
      experiences.map((exp) => exp.id === id ? {...exp, [field]: value} : exp)
    )
  }

  const updateEducation = (e, id) => {
    const field = e.target.attributes['name'].value
    const value = e.target.value
    setEducation(
      education.map((exp) => exp.id === id ? {...exp, [field]: value} : exp)
    )
  }

  return (
    <>
      <div className="container">
        <ResumeTitle />
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 col-xs-12 col-sm-12">
                <FormPersonalInfo 
                  personalInfo={personalInfo}
                  updatePersonalInfo={updatePersonalInfo}
                />
                <br />
                <h4 className='text-center'>
                  Experiences &nbsp; 
                  <button 
                    className="btn btn-primary"
                    onClick={addExperience}
                  >
                    Add
                  </button> 
                </h4>
                {experiences.map((experience, index) => {
                  return <FormExperiences 
                            key={experience.id}
                            experience={experience}
                            removeExperience={removeExperience}
                            updateExperiences={updateExperiences}
                            index={index}
                          />
                })}
                <br />
                <h4 className='text-center'>
                  Education
                  &nbsp;
                  <button 
                    className="btn btn-primary"
                    onClick={addEducation}
                  >
                    Add
                  </button>
                </h4>
                {education.map((educ, index) => {
                  return <FormEducation
                            key={educ.id}
                            education={educ}
                            removeEducation={removeEducation}
                            updateEducation={updateEducation}
                            index={index}
                          />
                })}
              </div>
              <div className="col-md-8 col-xs-12 col-sm-12">
                <Resume 
                  personalInfo={personalInfo}
                  experiences={experiences}
                  education={education}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
