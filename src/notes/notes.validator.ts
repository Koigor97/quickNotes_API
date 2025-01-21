import {body, ValidationChain} from "express-validator";

export const createValidator: ValidationChain[]    = [
    body("title")
        .notEmpty()
        .withMessage("Title is required")
        .trim()
        .isString()
        .withMessage("Title needs to a text")
    ,

    body("notes")
        .notEmpty()
        .withMessage("You must have a note")
        .trim()
        .isString()
        .withMessage("Notes must be in a text format")
]

export const updateValidator: ValidationChain[] = [
    body("id")
    .notEmpty()
    .withMessage("Id is required")
    .trim()
    .isString()
    .withMessage("Id needs to a valid uuid format for update"),

    body("title")
    .notEmpty()
    .withMessage("Title is required")
    .trim()
    .isString()
    .withMessage("Title needs to a text"),

    body("notes")
    .notEmpty()
    .withMessage("You must have a note")
    .trim()
    .isString()
    .withMessage("Notes must be in a text format")

]
