import './SignInPage.css'
import { SignIn } from "@clerk/clerk-react"

const SignInPage = () => {
  return (
    <div className='signInPage'>
     return <SignIn path="/sign-in" />;
     </div>
  )
}

export default SignInPage
