import { FastifyInstance } from "fastify";
import { catalogRoutes } from "./catalogRoutes";

export const registerRoutes = async (server: FastifyInstance) => {
    server.get('/', async (request, reply) => {
        return { status: 'ok' };
    });

    await server.register(catalogRoutes);
}