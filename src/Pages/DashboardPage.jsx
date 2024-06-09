import { useQuery } from "@tanstack/react-query";
import React from "react";
import AddPost from "src/Components/Template/AddPost";
import PostList from "src/Components/Template/PostList";

function DashboardPage() {
  return (
    <div>
      <AddPost />
      <PostList />
    </div>
  );
}

export default DashboardPage;
