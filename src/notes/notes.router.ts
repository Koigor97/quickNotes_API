import { Router} from "express";
import {notesController} from "./notes.controller";
import {createValidator, updateValidator} from "./notes.validator";


export const noteRouter: Router = Router();

// @ts-ignore
noteRouter.get('/notes', notesController.getNotes)

// @ts-ignore
noteRouter.post('/notes', createValidator, notesController.createNotes)

// @ts-ignore
noteRouter.put('/notes', updateValidator, notesController.updateNotes)

//@ts-ignore
noteRouter.delete('/notes/:id', notesController.deleteNotes)
