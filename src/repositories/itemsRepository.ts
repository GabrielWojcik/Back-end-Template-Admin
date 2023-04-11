import { AppDataSource } from "../data-source";
import { Item } from "../entities/Item";

export const itemsRepository = AppDataSource.getRepository(Item)