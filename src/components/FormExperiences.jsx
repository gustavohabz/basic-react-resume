import { InputMask } from "@react-input/mask"

export const FormExperiences = ({experience, removeExperience, updateExperiences, index}) => {
    let removeButton = ''
    if(index > 0) {
        removeButton = (
            <button 
                className="btn btn-danger"
                onClick={(e) => removeExperience(e.target.attributes['data-key'].value)}
                data-key={experience.id}
            >
                Remove
            </button>
        )
    }
  return (
    <>
        <div className="card p-3 mt-2">
            <div className="card-text">
                <div className="text-end">
                    {removeButton}
                </div>
                <div className="form-group">
                    <label>Company Name</label>
                    <input 
                        type="text" 
                        className='form-control'
                        name="companyName"
                        value={experience.companyName}
                        onChange={(e)=>updateExperiences(e, experience.id)}
                    />
                </div>
                <div className="form-group">
                    <label>Position Title</label>
                    <input 
                        type="text" 
                        className='form-control'
                        name="positionTitle"
                        value={experience.positionTitle}
                        onChange={(e)=>updateExperiences(e, experience.id)}
                    />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Worked from: </label>
                            <InputMask
                                mask="__/__/____" 
                                replacement={{ _: /\d/ }} 
                                type="text" 
                                className="form-control"
                                name="workedFrom"
                                value={experience.workedFrom}
                                onChange={(e)=>updateExperiences(e, experience.id)}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Until: </label>
                            <InputMask
                                mask="__/__/____" 
                                replacement={{ _: /\d/ }} 
                                type="text" 
                                className="form-control"
                                name="workedUntil"
                                value={experience.workedUntil}
                                onChange={(e)=>updateExperiences(e, experience.id)}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Responsibilities</label>
                    <input 
                        type="text" 
                        className='form-control'
                        name="responsibilities"
                        value={experience.responsibilities}
                        onChange={(e)=>updateExperiences(e, experience.id)}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

