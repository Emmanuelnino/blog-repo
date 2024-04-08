import { useState } from "react";
import { IPost } from "../interface/types";
import PostDetailComponent from "./PostDetailComponent";
import axios from "axios";
import { useQuery } from "react-query";

const PostListComponent = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const token = localStorage.getItem("token");

  console.log(token);

  const { isLoading, isError } = useQuery(
    "getPosts",
    async () => {
      const res = await axios.get("https://blog-server-swart.vercel.app/post", {
        headers: {
          "auth-token": token,
        },
      });
      return res.data;
    },
    {
      onSuccess(data) {
        console.log(data);
        setPosts(data.posts);
      },
    }
  );

  return (
    <section className=" min-h-screen w-full px-4 md:px-12 max-w-7xl flex flex-col py-12">
      <div className=" flex w-full items-end justify-end">
        <button className=" bg-purple-600 p-2 rounded-md w-fit">
          Create new post
        </button>
      </div>
      <PostDetailComponent c={posts} />
    </section>
  );
};

export default PostListComponent;
