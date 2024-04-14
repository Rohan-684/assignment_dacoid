import StatusBar from './StatusBar'
import img from '../assets/eye-off.png'
import RegisterOrLogin from './RegisterOrLogin'

const Page4 = () => {
  return (
    <div className="w-[375px] h-[800px] rounded-[10px] bg-[#FCFCFC] mt-[40px] font-montserrat">
      <StatusBar />
      <form className="mx-[16px] mb-[290px]">
        <h4 className="font-[600] text-[20px] mb-[44px] mt-[24px]">
          Welcome Back
        </h4>
        <input
          type="text"
          placeholder="Email"
          className="rounded-[12px] bg-[#F1F1F1] w-full py-[18px] px-[20px] text-left font-[600] text-[12px] text-[#7F7F7F] mb-[24px]"
        />
        <div className="relative">
          <input
            type="text"
            placeholder="Password"
            className="rounded-[12px] bg-[#F1F1F1] w-full py-[18px] px-[20px] text-left font-[600] text-[12px] text-[#7F7F7F] mb-[10px]"
          />
          <img
            src={img}
            alt=""
            className="absolute top-[18px] left-[311px] cursor-pointer"
          />
        </div>
        <p className="font-[500] text-[12px] text-[#7F7F7F] underline underline-offset-[3.1px] cursor-pointer">
          Forgot your password?
        </p>
      </form>
      <RegisterOrLogin
        btnText="Sign In"
        text="Don’t have an account yet?"
        stext="Create an account"
        reg="yes"
      />
    </div>
  )
}
export default Page4
