import {useState} from "react";
import {useTranslations} from "next-intl";

import Modal from "@/components/modal";
import {Button} from "@/components/ui/button";
import Image from "next/image";


export default function InstructionsModal() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const t = useTranslations('header');

    return (
        <div className="">
            <Button
                onClick={() => setIsModalOpen(true)}
                variant="webar"
                className={`z-[1000] flex items-center justify-center `}
            >
                <Image src='/icons/icons-info.png' alt='icon' width={50} height={50}
                       className="w-5 h-5 mr-[10px] flex flex-col items-center justify-center"/>

                <p className="bold"> {t('help')} </p>
            </Button>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                className="opacity-100 py-[2rem] "
            >
                <div className="opacity-100 px-[2rem] mt-[2rem] flex flex-col items-center justify-items-start
                                max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="opacity-100 px-[2rem] mt-[2rem] flex flex-col items-center justify-items-start">
                        <div className="flex flex-col items-start ">
                            <p className="text-2xl mb-[1rem]  text-[rgba(46,204,239,0.8)]">
                                {t('scan-3d-title')}
                            </p>
                            {t.raw("scan-3d-steps").map((step: string, index: number) => (
                                <p
                                    key={index}
                                    className="text-xl"
                                >
                                    {index + 1}. {step}
                                    {index === 1 &&
                                        <Image
                                            src="/images/scan-cover.webp"
                                            alt="scan"
                                            width={350}
                                            height={350}>

                                        </Image>
                                    }
                                    {index === 2 &&
                                        <Image
                                            src="/images/launch.webp"
                                            alt="scan"
                                            width={250}
                                            height={250}>

                                        </Image>
                                    }
                                </p>

                            ))}

                            <p className="text-2xl mb-[1rem] mt-[2rem] text-[rgba(46,204,239,0.8)]">
                                {t('scan-content-title')}
                            </p>
                            {t.raw("scan-content-steps").map((step: string, index: number) => (
                                <p
                                    key={index}
                                    className="text-xl"
                                >
                                    {index + 1}. {step}
                                    {index === 1 &&
                                        <Image
                                            src="/images/scan-content.webp"
                                            alt="scan"
                                            width={350}
                                            height={400}

                                        >

                                        </Image>
                                    }
                                </p>

                            ))}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
