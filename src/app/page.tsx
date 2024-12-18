import Link from "next/link";

export default function Home() {
  return (
    <div>
      Welcome Home
      <div className="m-2">
        <p>Understanding routing in NextJs</p>
        <Link href="/blog">Blog</Link> <br />
        <Link href="/about">About</Link> <br />
        <Link href="/profile">Profile</Link>
      </div>
    </div>
  );
}
