import Image from "next/image"
import {faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function AuthorDetails() {

  return (
    <div className="py-4 flex flex-row gap-10">
      <Image src="https://via.placeholder.com/400x400" className="rounded-full" width={100} height={100} />
      <div className="flex flex-row justify-between w-full">
      <div className="pt-4">
        <h1 className="font-bold text-xl">Author XYZ</h1>
        <p className="text-l">a great author, CXO</p>
      </div>
      <div className=" py-4 mr-0 flex flex-row gap-8" >
<FontAwesomeIcon icon={faLinkedin} className="w-10 h-10 " />
<FontAwesomeIcon icon={faTwitter}  className="w-10 h-10 "/>
</div></div>
    </div>
  )

}
