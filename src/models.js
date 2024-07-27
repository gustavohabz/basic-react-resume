import { v4 as uuidv4 } from 'uuid';
export const personalInfoModel = {
    name: 'Lionel Huntz',
    email: 'lionel.huntz@springfield.com',
    phone: '(55) 55555-5555'
}

export const experiencesModel = [
    {
      id: uuidv4(),
      companyName: 'MIT',
      positionTitle: 'Physics Professor',
      workedFrom: '10/03/1992',
      workedUntil: '27/07/2024',
      responsibilities: 'To teach and provide people with knowledge'
    },
    {
      id: uuidv4(),
      companyName: 'Amazon',
      positionTitle: 'Retail',
      workedFrom: '10/03/1979',
      workedUntil: '04/05/1992',
      responsibilities: 'Retail worker'
    }
]

export const educationModel = [
    {
      id: uuidv4(),
      schoolName: 'University of New Hampshire',
      titleStudy: 'Physics',
      dateStudy: '10/02/1988',
      dateEndStudy: '10/02/1992'
    },
    {
      id: uuidv4(),
      schoolName: 'Physics School',
      titleStudy: 'Physics',
      dateStudy: '10/02/1981',
      dateEndStudy: '10/02/1984'
    }
]
