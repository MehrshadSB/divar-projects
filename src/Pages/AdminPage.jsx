import React from "react";
import CategoryForm from "src/Components/Template/CategoryForm";
import CategoryList from "src/Components/Template/CategoryList";

function AdminPage() {
  return (
    <div>
      <CategoryList />
      <CategoryForm />
    </div>
  );
}

export default AdminPage;
