﻿import { initialTickets } from "@/data";

type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>
};

const TicketPage = async ({params}: TicketPageProps) => {
    const {ticketId} = await params;

    const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

    if(!ticket) {
        return <h2 className="text-lg">Ticket not found</h2>
    }
    
    return (
        <div>
            <h2>{ticket.title}</h2>
            <p>{ticket.content}</p>
            <p>{ticket.status}</p>
        </div>
    )
};

export default TicketPage;