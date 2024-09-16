import Fastify from 'fastify';

import { registerRoutes } from './api/routes';
import { errorHandler } from './api/middlewares/errorHandler';
import config from './infrastructure/config';

export const start = async () => {
  const server = Fastify({
    logger: true,
  });

  server.setErrorHandler(errorHandler);

  server.register(registerRoutes);

  try {
    await server.listen({ port: Number(config.port) });
    server.log.info(`Server is running on port ${config.port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
