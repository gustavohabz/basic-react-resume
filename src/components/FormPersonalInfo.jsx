import { InputMask } from "@react-input/mask"

export const FormPersonalInfo = ({personalInfo, updatePersonalInfo}) => {
    
  return (
    <>
        <h4 className='text-center'>Personal Info</h4>
            <div className="card p-3">
                <div className="card-text">
                <div className="form-group">
                    <label>Name: </label>
                    <input 
                        type="text" 
                        className='form-control' 
                        name="name"
                        value={personalInfo.name}
                        onChange={(e) => updatePersonalInfo(e)}
                    />
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input 
                        type="text" 
                        className='form-control'
                        name="email"
                        value={personalInfo.email}
                        onChange={(e) => updatePersonalInfo(e)}
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <InputMask
                        mask="(__) _____-____" 
                        replacement={{ _: /\d/ }} 
                        type="text" 
                        name="phone"
                        className="form-control"
                        value={personalInfo.phone}
                        onChange={(e) => updatePersonalInfo(e)}
                    />
                </div>
                </div>
            </div>
    </>
  )
}
