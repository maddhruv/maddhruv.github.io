import { Header } from "@/components/header";

export default function NotFound() {
  return (
    <>
      <Header location="home" />
      <main className="h-screen grid items-center text-center text-6xl text-red">
        <h2>HTTP 404</h2>
      </main>
    </>
  );
}
