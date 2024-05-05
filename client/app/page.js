import Image from "next/image"
import NavBar from "@/components/NavBar.jsx"
import Link from "next/link"
import axios from "axios"

export default async function xo() { 
  const blogElms = await axios.get('http://127.0.0.1:5000/blogs')
return(
<div class="bg-gray-100 text-gray-800">
    <div class="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold mb-8">Latest Blog Posts</h1>
        <div class="flex flex-col w-4/7 md:w-2/3 ">
          {blogElms.data.map(elms => (
            <div class="flex flex-row bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <Image src={elms.image} alt="Blog Image" width={400} height={400} className="hidden md:block" />
                <div class="p-6">
                    <h2 class="text-xl font-semibold mb-2">{elms.heading}</h2>
                    <p class="text-sm text-gray-600 mb-4">Published on {elms.date} by {elms.author}</p>
                    <p class="text-gray-700">{
                elms.description.substring(0,50)+"..."
                    }</p>
                    <Link href="/blog"
                        class="block bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm uppercase tracking-wide mt-4 px-3 py-2 rounded-md text-center">Read
                        More</Link>
                </div>
            </div>

          ))}
        </div>
    </div>
</div>
);
}
