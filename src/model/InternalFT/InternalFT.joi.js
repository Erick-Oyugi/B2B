import Joi from 'joi';

const UpdatedInternalTransferValidation = Joi.object({
  amount: Joi.number().precision(2),
  paymentNarrative: Joi.string().max(999),
  accountFrom: Joi.string().length(13),
  accountTo: Joi.string().length(13),
  endtoEndRef: Joi.string().length(12)
});


export default UpdatedInternalTransferValidation



