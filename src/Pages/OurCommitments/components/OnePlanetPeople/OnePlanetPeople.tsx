import { motion } from "framer-motion";
import { fadeLeft, fadeUp } from "../../../../utils/scrollAnimations";

const OnePlanetPeople = () => {
    const items = ["Environmental Sustainability", "Labour Practices, Health & Safety", "Consumer & Product Safety", "Social & Community Development"];

    return (
        <section className="flex flex-col items-center px-[18px] md:px-[32px] xl:px-[110px] xl1:px-[60px] py-[80px] md:py-[120px] gap-[40px] md:gap-[60px] xl:gap[80px]">
            <motion.img className="w-full md:w-[688px] xl:w-[927px] xl1:w-[979px]" 
                src={`${process.env.PUBLIC_URL}/assets/img/planet-one-people.svg`}
                variants={fadeLeft}
                initial={'hidden'}
                whileInView={'visible'} 
                alt=""
            />

            <motion.div className="flex items-center flex-col gap-[24px] xl:gap-[40px]"
                variants={fadeUp}
                initial={'hidden'}
                whileInView={'visible'}
                >
                <span className="text-[24px] md:text-[32px] xl1:text-[40px]">We care for –</span>
                <div className="flex flex-wrap justify-center gap-[12px] md:gap-[20px] xl:gap-[24px]">
                    {
                        items.map((item,index) => {
                            return <div key={index} className="bg-[#FFF9EF] w-full md:w-[calc(50%-10px)] xl:w-auto px-[12px] py-[16px] xl:px-[32px] xl:py-[20px] text-[16px] xl:text-[20px] xl1:text-[24px] text-center rounded-[12px]">
                                {item}
                            </div>
                        })
                    }
                </div>
            </motion.div>
        </section>
    )
}

export default OnePlanetPeople;