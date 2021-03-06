import Paragraph from '@editorjs/paragraph';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Header from '@editorjs/header';
import Embed from '@editorjs/embed';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';

const EDITOR_JS_TOOLS = {
  paragraph: Paragraph,
  table: Table,
  list: List,
  header: Header,
  embed: Embed,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};

export default EDITOR_JS_TOOLS;
