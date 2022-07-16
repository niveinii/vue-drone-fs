import { celebrate, Joi, Segments } from 'celebrate';



export const deleteValidator = celebrate(
    {
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    },
);

