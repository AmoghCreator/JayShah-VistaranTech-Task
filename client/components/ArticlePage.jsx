import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import AuthorDetails from "./AuthorDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import renderer from "../utils/renderers.js"
import axios from "axios";

export default async function ArticlePage(props) {
  const response = await axios.get('http://127.0.0.1:5000/') 
  const content = response.data.content;
  const numOfWords = content.split(" ").length;
  const timeToRead = numOfWords / 200;

  const renderers = renderer(timeToRead)
  return (

    <div className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Markdown components={renderers} >
            {
              content
            }
          </Markdown>
            <div className="border-b border-gray-800 "></div>
          <AuthorDetails />
        </div>
      </div>
    </div>
  );
}
