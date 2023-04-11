import { Request, Response } from "express";
import { itemsRepository } from "../repositories/itemsRepository";

export class ItemsController {
    async create(req: Request, res: Response) {
        const {title, Description, Marca, Valor, Mecanica} =  req.body

        if(!title || !Description || !Marca || !Valor || !Mecanica) {
            return res.status(400).json({message: 'Os campos obrigatórios não foram informados'})
        }

        try {
            const newItem = itemsRepository.create({
                title,
                Description,
                Marca,
                Valor,
                Mecanica
            })
            await itemsRepository.save(newItem) 

            return  res.status(201).json(newItem)
        }catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Internal Server Error'})
        }
    }
}