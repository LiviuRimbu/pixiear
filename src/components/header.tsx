import LangSwitcher from "@/components/lang-switcher";
import React from "react";
import {useTranslations} from 'next-intl';
import InstructionsModal from "@/components/instructions-modal";

export default function Header() {

    const t = useTranslations('header');

    return (

        <div className="relative flex flex-col justify-center items-center mt-[1rem] w-full mb-[3rem] max-w-[600px]">
            <div className="flex justify-between items-center w-[100%] px-5">
                <InstructionsModal/>
                <LangSwitcher/>
            </div>
            <div className="relative flex flex-row justify-center items-center mt-[2vh]  w-full ">
                <h1 className="text-7xl text-center  text-violet font-black font-herculanum text-[48px] mx-auto">{t('title')}</h1>
            </div>


        </div>

    );
}
