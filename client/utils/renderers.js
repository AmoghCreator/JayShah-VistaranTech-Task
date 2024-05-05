import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function renderer(timeToRead) {
      return {
    code: (props) => {
      const { children, className, node, ...rest } = props
      const match = /language-(\w+)/.exec(className)
      // console.log(match);
      // console.log(props);
      return (
        <div className=" bg-gray-600 rounded">
          <div className="pt-2 pl-4 text-white">{match[1]}</div>
          <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            style={oneDark}
          /></div>
      )
    },
    h1: (props) => {
      console.log(props);
      const { children } = props;
      return (
        <div className="w-full static pb-4">
          <h1 className="text-3xl font-bold pb-4">{children}</h1>
          <div className="flex flex-row justify-between pb-4 ">
            <h2 className="text-md text-green-600 relative right-0 font-bold">{timeToRead} Minute Read</h2>
            <h2 className="text-md text-gray-600 relative"><FontAwesomeIcon icon={faShareNodes} className=" w-5 h-5" /></h2>
          </div>
            <div className="border-b border-gray-800 "></div>
        </div>
      )
    },
    h2: (props) => {
      console.log(props);
      const { children } = props;
      return (
        <div className="w-full static">
          <h1 className="text-2xl font-bold text-custom-yellow py-4"># {children}</h1>
        </div>
      )
    },
    p: (props) => {
      const { children } = props;
      console.log(props)
      return <p className="text-md pb-4">{children}</p>
    },
    img: (props) => {
      const { children, src } = props;
      console.log(props);
      return <Image src={src} alt="Blog Image" className="rounded-lg mb-4 mt-4" width={800} height={400} />
    }
  };
  }
