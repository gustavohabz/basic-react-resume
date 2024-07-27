import React from 'react'

export const Resume = ({personalInfo, experiences, education}) => {
    const name = (personalInfo.name ? 
                <h2 className='text-center'>{personalInfo.name}</h2> : 
                <h2 className='text-center'><i>No name.</i></h2> )
    const email = (personalInfo.email ? personalInfo.email : <i>No e-mail</i> )
    const phone = (personalInfo.phone ? personalInfo.phone : <i>No phone number</i> )

  return (
    <>
        <h4 className='text-center'>Resume</h4>
        <div className="card p-3">
            <div className="card-text">
                {name}
                <h4>Email: {email}</h4>
                <h4>Phone: {phone}</h4>
                <hr />
                <h2 className="text-center">Experiences</h2>
                <h5>
                    <ul>
                        {experiences.map((exp) => {
                            return <li 
                                        key={exp.id}
                                        className="mb-4"
                                    >
                                        <div className="row mb-4">
                                            <div className="col-md-6">
                                                <strong>{exp.companyName}</strong>
                                                <p><small>{exp.positionTitle}</small></p>
                                            </div>
                                            <div className="col-md-6">
                                                {exp.workedFrom} - {exp.workedUntil}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <strong>Responsibilities: </strong><small>{exp.responsibilities}</small>
                                        </div>
                                    </li>
                        })}
                    </ul>
                </h5>
                <hr />
                <h2 className="text-center">Education</h2>
                <h5>
                    <ul>
                        {education.map((educ) => {
                        return <li
                                    key={educ.id}
                                    className="mb-4"
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            {educ.schoolName} - <small>{educ.titleStudy}</small>
                                        </div>
                                        <div className="col-md-6 text-end">
                                            {educ.dateStudy} - {educ.dateEndStudy}
                                        </div>
                                    </div>
                                </li>
                        })}
                    </ul>
                </h5>
            </div>
        </div>
    </>
  )
}
