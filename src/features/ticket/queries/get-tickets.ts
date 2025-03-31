import { initialTickets } from '@/data'
import { Ticket } from '../types'

export const getTickets = async (): Promise<Ticket[]> => {
    // Simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
 // throw new Error("Function not implemented.");

    // Return the initial tickets data
    return new Promise((resolve) => {
        resolve(initialTickets)
    });
}