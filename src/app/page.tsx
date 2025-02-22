import { ticketsPath } from "@/paths";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h2 className="text-lg">HomePage</h2>

      <Link href={ticketsPath()} className="text-sm underline">
        Tickets
      </Link>
    </div>
  )
}

export default Home;