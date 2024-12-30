import MainPractice from "@/components/practice/MainPractice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice",
  description: "Practice with Typescript",
};

export default function Practice() {
  return <MainPractice />;
}
