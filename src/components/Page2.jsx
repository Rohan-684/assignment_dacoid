import HeroImg from './HeroImg'
import HeroText from './HeroText'
import NextBtn from './NextBtn'
import StatusBar from './StatusBar'
import img from '../assets/imageHero2.png'

const Page2 = () => {
  return (
    <div className="w-[375px] h-[800px] rounded-[10px] bg-[#FCFCFC]">
      <StatusBar />
      <HeroImg img={img} />
      <HeroText
        heading="Get Burn"
        text="Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever"
      />
      <NextBtn page="yes" />
    </div>
  )
}
export default Page2
