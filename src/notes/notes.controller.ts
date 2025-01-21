import {NotesEntity} from "./notes.entity";
import {AppDataSource} from "../../index";
import {instanceToPlain, plainToInstance} from "class-transformer";
import {Request, Response} from "express";
import {validationResult} from "express-validator";
import {UpdateResult} from "typeorm";

class NotesController {

    public async getNotes(req: Request, res: Response): Promise<Response> {
        // this variable hold all notes - it is an array
        let allNotes: NotesEntity[];

        try {
            // fetching all the notes
            allNotes = await AppDataSource.getRepository(NotesEntity).find({});

            // convert the notes instance to an array object
            allNotes = instanceToPlain(allNotes) as NotesEntity[];
            return res.json({status: "success", data: allNotes}).status(200);

        } catch (_error) {
            return res.status(500).send({error: "Internal Server Error"});
        }
    }

    public async createNotes(req: Request, res: Response): Promise<Response> {
        const errors = validationResult(req);

        // Validate the request body for errors
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Extract the note data from the request body
        const { title, notes } = req.body;

        // Check if both `title` and `notes` are provided
        if (!title || !notes) {
            return res.status(400).json({ error: "Title and notes are required" });
        }

        // Create a new note entity
        const newNote = new NotesEntity();
        newNote.title = title;
        newNote.notes = notes;

        try {
            // Save the new note to the database
            const createdNote = await AppDataSource.getRepository(NotesEntity).save(newNote);

            // Return the created note as a response
            return res.status(200).json({ status: "success", data: createdNote });
        } catch (error) {
            console.error("Error creating note:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }


    public async updateNotes(req: Request, res: Response) : Promise<Response> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({errors: errors.array()});
        }

        // find the note by id
        let note: NotesEntity | null;

        try {
            note = await AppDataSource.getRepository(NotesEntity).findOne({
                where: {id: req.body.id}
            })

        } catch (error) {
            return res.status(500).send({error: "Internal Server Error"});
        }

        // if not found
        if (!note) {
            return res.status(404).json({error: "Note with id not found"});
        }

        let updatedNote: UpdateResult;

        // update note
        try {
            updatedNote = await AppDataSource.getRepository(NotesEntity).update(req.body.id, plainToInstance(NotesEntity, {...req.body}))

            updatedNote = instanceToPlain(updatedNote) as UpdateResult;

            return res.json({status: "success", data: updatedNote}).status(200);
        } catch (error) {
            return res.status(500).send({error: "Internal Server Error"});
        }

    }

    public async deleteNotes(req: Request, res: Response): Promise<Response> {
        // Validate the request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // Attempt to find the note by ID
            const note = await AppDataSource.getRepository(NotesEntity).findOne({
                where: { id: req.body.id },
            });

            // If the note doesn't exist, return a 404 error
            if (!note) {
                return res.status(404).json({ error: "Note with the specified ID not found" });
            }

            // Delete the note
            await AppDataSource.getRepository(NotesEntity).remove(note);

            // Return success response
            return res.json({ status: "success", message: "Note deleted successfully" }).status(200);
        } catch (error) {
            // Handle errors
            return res.status(500).send({ error: "Internal Server Error" });
        }
    }

}

export const notesController = new NotesController();
