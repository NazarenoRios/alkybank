import SignUpForm from "../components/Form/SignUpForm"
import handIllustration from "../assets/hand-illustration.png"

export default function SignUp() {
  return (
    <section className="w-full h-screen flex">
      <div className="w-full flex justify-center items-center">
        <SignUpForm />
      </div>
      <div className="xl:min-w-[675px] xl:inline-block hidden ">
        <img className="object-cover min-h-screen" src={handIllustration} alt="hand-illustration" />
      </div>
    </section>
  )
}
