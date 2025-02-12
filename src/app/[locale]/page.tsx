'use client'

import Header from "@/components/header"
import Footer from "@/components/footer"
import BooksList from "@/components/books-list"
import React from "react";
// import CameraInstrModal from "@/components/camera-instr-modal";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center sm:justify-start ">
            {/*<CameraInstrModal isModalOpen= true />*/}
            <Header/>
            <BooksList/>
            <Footer/>
        </div>
    );
}