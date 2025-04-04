"use client";
import Head from "next/head";
import Button from "@mui/material/Button";
import { useState } from "react";
import CustomTextField from "src/components/text-field";
import Box from "@mui/material/Box";
import Login from "src/views/pages/login";

export default function Home() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  async function handleLoginAction() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("data ===>", data);
    return {
      props: {
        posts: data,
      },
    };
  }
  return (
    <>
      <Login></Login>
    </>
  );
}
