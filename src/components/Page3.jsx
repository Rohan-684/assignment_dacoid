import RegisterOrLogin from './RegisterOrLogin'
import StatusBar from './StatusBar'

const Page3 = () => {
  return (
    <div className="w-[375px] h-[800px] rounded-[10px] bg-[#FCFCFC] mt-[-40px] font-montserrat">
      <StatusBar />
      <form className="mx-[16px] mb-[122px]">
        <h4 className="font-[600] text-[20px] mb-[44px] mt-[24px]">
          Create an account
        </h4>
        <input
          type="text"
          placeholder="First Name"
          className="rounded-[12px] bg-[#F1F1F1] w-full py-[18px] px-[20px] text-left font-[600] text-[12px] text-[#7F7F7F] mb-[24px]"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="rounded-[12px] bg-[#F1F1F1] w-full py-[18px] px-[20px] text-left font-[600] text-[12px] text-[#7F7F7F] mb-[24px]"
        />
        <input
          type="text"
          placeholder="Email"
          className="rounded-[12px] bg-[#F1F1F1] w-full py-[18px] px-[20px] text-left font-[600] text-[12px] text-[#7F7F7F] mb-[24px]"
        />
        <input
          type="text"
          placeholder="Password"
          className="rounded-[12px] bg-[#F1F1F1] w-full py-[18px] px-[20px] text-left font-[600] text-[12px] text-[#7F7F7F] mb-[24px]"
        />

        <div className="flex ">
          <input
            type="checkbox"
            name=""
            id=""
            className="mr-[8px] w-[22px] h-[22px] cursor-pointer accent-[#7F7F7F]"
          />
          <p className="font-[500] text-[12px] text-[#7F7F7F]">
            By proceeding, I agree to all
            <span className="text-[#9FB2FF] underline underline-offset-[3.1px] cursor-pointer">
              {' '}
              T&C
            </span>{' '}
            and
            <span className="text-[#9FB2FF] underline underline-offset-[3.1px] cursor-pointer">
              {' '}
              Privacy Policy
            </span>
          </p>
        </div>
      </form>
      <RegisterOrLogin
        btnText="Create an Account"
        text="Already have an account?"
        stext="Login"
      />
    </div>
  )
}
export default Page3
