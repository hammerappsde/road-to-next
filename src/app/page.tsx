import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h2 className="text-lg">HomePage</h2>

      <Link href="/tickets" className="text-sm underline">
        Tickets
      </Link>
    </div>
  )
}

export default Home;