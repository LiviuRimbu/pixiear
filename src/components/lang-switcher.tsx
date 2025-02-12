import { usePathname } from 'next/navigation';
import Link from 'next/link';
import FlagUK from "@/components/ui/icons/flag-uk";
import FlagRo from "@/components/ui/icons/flag-ro";


export default function LangSwitcher() {
    const pathname = usePathname();
    const pathWithoutLocale = pathname.replace(/^\/(en|ro)/, '');

    return (
        <div className="flex mt-[12px]">
            <Link href={`/en${pathWithoutLocale}`} locale="en" className=" flex flex-col mr-[10px] ">
                <FlagUK className=" w-5 h-5 rounded-[5px]"/>
                <span className='text-center  text-violet font-black font-herculanum'>EN</span>
            </Link>
            <Link href={`/ro${pathWithoutLocale}`} locale="ro" className=" flex flex-col ">
                <FlagRo className="w-5 h-5 rounded-[5px]"/>
                <span className='text-center  text-violet font-black font-herculanum'>RO</span>
            </Link>
        </div>
    );
}
