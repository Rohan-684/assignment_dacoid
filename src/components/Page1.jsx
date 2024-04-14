import HeroImg from './HeroImg'
import HeroText from './HeroText'
import NextBtn from './NextBtn'
import StatusBar from './StatusBar'
import img from '../assets/imageHero1.png'

const Page1 = () => {
  return (
    <div className="w-[375px] h-[800px] rounded-[10px] bg-[#FCFCFC]">
      <StatusBar />
      <HeroImg img={img} />
      <HeroText
        heading="Track Your Goal"
        text="Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals"
      />
      <NextBtn />
    </div>
  )
}
export default Page1
