import { initialTickets } from "@/data";
import { Ticket } from "../types";

const getTicket = async (id: string): Promise<Ticket | null> => { 
    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const maybeTicket = initialTickets.find((ticket) => ticket.id === id);

    // Return the initial tickets data
    return new Promise((resolve) => {
        resolve(maybeTicket || null);
    });
}

export { getTicket };