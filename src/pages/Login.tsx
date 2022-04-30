import SignInSide from '../components/forms/signIn/SignIn'
import SideImage from '../components/layoutComponents/sideImage/SideImage'

export default function LoginPage(): JSX.Element {
  return <SideImage children={<SignInSide />} />
}
