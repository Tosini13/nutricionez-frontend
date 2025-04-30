import { FC } from "react";
import Paragraph from "../Sections/Paragraph";

type BlockOptions = {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;
  color?: string;
  size?: string;
  align?: string;
};

const getClassName = (options: BlockOptions) => {
  const className = [];
  if (options.bold) className.push("font-bold");
  if (options.italic) className.push("italic");
  if (options.underline) className.push("underline");
  if (options.strike) className.push("line-through");
  if (options.color) className.push(`text-${options.color}`);
  if (options.size) className.push(`text-${options.size}`);
  if (options.align) className.push(`text-${options.align}`);
  return className.join(" ");
};

export type BlockType = {
  type: "paragraph";
  children: {
    type: "text";
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strike?: boolean;
    color?: string;
    size?: string;
    align?: string;
  }[];
};

type BlockPropsType = {
  block: BlockType;
};

const Block: FC<BlockPropsType> = ({ block }) => {
  return (
    <Paragraph data-testid="block">
      {block.children.map((child) => (
        <span key={child.text} className={getClassName(child)}>
          {child.text}
        </span>
      ))}
    </Paragraph>
  );
};

export default Block;
