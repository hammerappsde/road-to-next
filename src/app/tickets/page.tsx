﻿import { Heading } from "@/components/heading";
import { Suspense } from "react";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { Spinner } from "@/components/spinner";
import { ErrorBoundary } from "react-error-boundary";
import { Placeholder } from "@/components/placeholder";

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <div>
                <Heading title="Tickets" description="All your tickets at one place" /> 
            </div>

            <ErrorBoundary fallback={<Placeholder label={"Something went wrong!"} />}>
                <Suspense fallback={<Spinner/>}>
                    <TicketList/>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
};

export default TicketsPage;