import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { calculate } from "../src/main.ts"

const server: FastifyInstance = fastify({ logger: true });
server.register(cors, { origin: "*" });

server.get("/calculate?name=:name&heigth=:heigth&weigth=:weigth", (request, reply) => {
    try {
        const { name, heigth, weight } = request.query as { name: string, heigth: number, weight: number};

        const response = calculate(name, heigth, weight);

        reply.status(200).send(response);
    } catch (error) {
        reply.status(400).send(error);
    }
});

server.listen({ port: 8000 });