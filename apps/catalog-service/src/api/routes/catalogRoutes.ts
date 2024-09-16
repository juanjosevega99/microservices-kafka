import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getCatalogItems } from "../controllers/catalogController";

export const catalogRoutes = (fastify: FastifyInstance, options: FastifyPluginOptions, done: () => void) => {
    fastify.get('/catalog', getCatalogItems);
    done();
}