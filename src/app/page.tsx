import Link from 'next/link'

export default function Home() {
  return (
    <div className="border-2 border-orange-300">
      Root Page
      <Link href={'/dashboard'}>
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          go to dashboard
        </button>
      </Link>
    </div>
  )
}
