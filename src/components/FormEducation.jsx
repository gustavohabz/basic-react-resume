import { InputMask } from '@react-input/mask'
import React from 'react'

export const FormEducation = ({education, removeEducation, updateEducation, index}) => {
    let removeButton = ''
    if(index > 0) {
        removeButton = (
            <button 
                className="btn btn-danger"
                onClick={(e) => removeEducation(e.target.attributes['data-key'].value)}
                data-key={education.id}
            >
                Remove
            </button>
        )
    }
  return (
    <div className="card p-3 mt-2 mb-2">
            <div className="card-text">
                <div className="text-end">
                    {removeButton}
                </div>
                <div className="form-group">
                    <label>School Name</label>
                    <input 
                        type="text" 
                        className='form-control'
                        name="schoolName"
                        value={education.schoolName}
                        onChange={(e)=>updateEducation(e, education.id)}
                    />
                </div>
                <div className="form-group">
                    <label>Title of Study</label>
                    <input 
                        type="text" 
                        className='form-control'
                        name="titleStudy"
                        value={education.titleStudy}
                        onChange={(e)=>updateEducation(e, education.id)}
                    />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Started: </label>
                            <InputMask
                                mask="__/__/____" 
                                replacement={{ _: /\d/ }} 
                                type="text" 
                                className="form-control"
                                name="dateStudy"
                                value={education.dateStudy}
                                onChange={(e)=>updateEducation(e, education.id)}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Ended/ends: </label>
                            <InputMask
                                mask="__/__/____" 
                                replacement={{ _: /\d/ }} 
                                type="text" 
                                className="form-control"
                                name="dateEndStudy"
                                value={education.dateEndStudy}
                                onChange={(e)=>updateEducation(e, education.id)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
