﻿import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket } from "../types";
import { TICKET_ICONS } from "./constants";
import Link from "next/link";
import { ticketPath } from "@/paths";
import { Button } from "@/components/ui/button";
import { LucideArrowUpRightFromSquare } from "lucide-react"; // Adjust the import path if necessary

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
}

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    const detailButton = (
        <Button variant="outline" size="icon" asChild>
            <Link href={ticketPath(ticket.id)}>
                <LucideArrowUpRightFromSquare className="h-4 w-4" />
            </Link>
        </Button>
    );

    return(
        <div className="w-full max-w-[420px] flex gap-x-1">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex gap-x-2">
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className="truncate">{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span className="line-clamp-3 whitespace-break-spaces">{ticket.content}</span>
                </CardContent>
                <CardFooter>
                    <Link href={ticketPath(ticket.id)} className="text-sm underline">
                        View
                    </Link>
                </CardFooter>
            </Card>

            {isDetail ? null : (
                <div className="flex flex-col gap-y-1">{detailButton}</div>
            )}
        </div>
    );
}

export {TicketItem};