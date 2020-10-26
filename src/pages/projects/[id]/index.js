import React from "react";
import styles from "pages/projects/index.module.sass";
import { useRouter } from "next/router";
import Nav from "components/nav";

const ProjectPost = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Nav />
      <div>{id}</div>
    </>
  );
};

export default ProjectPost;
