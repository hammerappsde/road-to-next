import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import Link from "next/link";
import clsx from "clsx";

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
        />
    </svg>
)
const TICKET_ICONS = {
    OPEN: "O",
    IN_PROGRESS: ">",
    DONE: <CheckIcon />,
}

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
                <p className="text-sm text-muted-foreground">
                    All your tickets at on place
                </p>
            </div>

            <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">  
                {initialTickets.map((ticket) => (
                    <div key={ticket.id} className="w-full max-w-[420px] p-4 border border-slate-100 rounded">
                        <div>{TICKET_ICONS[ticket.status]}</div>
                        <h3 className="text-lg font-semibold truncate">{ticket.title}</h3>
                        <p className={clsx("text-sm text-slate-500 truncate", {"line-through": ticket.status === "DONE"})}>{ticket.content}</p>
                        <Link href={ticketPath(ticket.id)} className="text-sm underline">
                            View
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default TicketsPage;