import { FC } from "react";
import { IPost } from "../interface/types";

interface Props {
  c: IPost[];
}

const PostDetailComponent: FC<Props> = ({ c }) => {
  return (
    <div className=" w-full flex flex-col">
      <div className="grid w-full grid-cols-1 items-center justify-center">
        {c.map((item, i) => (
          <div key={i} className=" border-b p-4 border-gray-500 capitalize">
            <h1>
              Title: <span className=" text-gray-400">{item.title}</span>
            </h1>
            <p>
              Description:{" "}
              <span className=" text-gray-400">{item.description}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetailComponent;
