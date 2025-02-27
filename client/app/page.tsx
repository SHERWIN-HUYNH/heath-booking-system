'use client'
import CategorySearch from "@/components/homepage/CategorySearch";
import DoctorList from "@/components/homepage/DoctorList";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import Hero from "@/components/homepage/Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch('http://localhost:8000/api/home').then(res => res.json()).then(data => console.log(data))
  },[])
  return (
    <div>
      <Header />
      <Hero />
      <CategorySearch />
      <DoctorList />
      <Footer />
    </div>
  );
}
