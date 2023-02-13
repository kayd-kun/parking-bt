import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const driverRouter = createTRPCRouter({
    // Testing API
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
    getDistricts: publicProcedure
        .query(({input}) => {
            return {
                // TODO: Get districts from database using prisma
                districts: [
                    {
                        id: 1,
                        name: "District 1",
                    },
                    {
                        id: 2,
                        name: "District 2",
                    },
                ],
            };
        }),

})