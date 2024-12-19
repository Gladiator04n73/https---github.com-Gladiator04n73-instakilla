import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
   <Link href="/auth">auth</Link>
   <Link href="/changePassword">changePassword</Link>
   <Link href="/feed">feed</Link>
   <Link href="/editProfile">editProfile</Link>
   <Link href="/profile">profile</Link>
   <Link href="/sign_up">sign_up</Link>
    </div>

  );
}
