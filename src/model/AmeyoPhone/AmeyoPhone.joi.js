import Joi from 'joi'

const AmeyoJoiSchema = Joi.object({
    account : Joi.string().required(),
   

})

export default AmeyoJoiSchema