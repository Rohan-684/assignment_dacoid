import fbIcon from '../assets/fb.png'
import googleIcon from '../assets/google.png'
import CustomBtn from './CustomBtn'

const RegisterOrLogin = ({ btnText, text, stext, reg = '' }) => {
  let underline = ''
  if (reg) {
    underline = 'underline'
  }
  return (
    <div className="mx-[16px] font-montserrat">
      <CustomBtn text={btnText} />
      <div className="mt-[22px] flex items-center">
        <div className="border-[0.1px] border-[var(--gray-100,#7F7F7F)] w-[155px] h-[0]"></div>
        <span className="mx-[6px] text-[12px] font-[500]">Or</span>
        <div className="border-[0.1px]  border-[var(--gray-100,#7F7F7F)] w-[157px] h-[0]"></div>
      </div>
      <div className="mt-[31px] flex mx-[120px] ">
        <div className="w-[44px] h-[44px] rounded-[8px] border-[1px] border-[#7F7F7F] flex items-center justify-center mr-[18px]">
          <img src={googleIcon} alt="google-icon" />
        </div>
        <div className="w-[44px] h-[44px] rounded-[8px] border-[1px] border-[#7F7F7F] flex items-center justify-center">
          <img src={fbIcon} alt="fb-icon" />
        </div>
      </div>
      <p
        className={`font-[500] text-[12px] mt-[26px] text-center mb-[29px] ${underline} underline-offset-[3.1px]`}
      >
        {text}
        <span className="text-[#9FB2FF] underline underline-offset-[3.1px] cursor-pointer">
          {' '}
          {stext}
        </span>
      </p>
    </div>
  )
}
export default RegisterOrLogin
