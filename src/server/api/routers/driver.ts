import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const driverRouter = createTRPCRouter({
    driverTest: publicProcedure
        .query(() => {
            return "Hello From Driver Test";
        }),
    
    getDriver: publicProcedure
        .input(z.object({ id: z.string()}))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.id}`,
            };
        }),
})