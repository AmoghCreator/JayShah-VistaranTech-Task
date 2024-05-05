import Image from "next/image";
import ArticlePage from "@/components/ArticlePage";
import Markdown from "react-markdown"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export default function Home() {

  return (
    <div>
      <ArticlePage />
    </div>
  );
}

