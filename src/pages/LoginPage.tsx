import LoginForm from '../components/form/login.Form';
import Footer from '../components/partials/Footer';
import '../../src/App.css';
import logoImage from '../assets/images/ks_logo.png';

function LoginPage() {
  return (
    <>
      <div id="login-page">
        <div>
          <img src={logoImage} alt="Logo" />
          <h1>LSC-EC 拡張機能</h1>
        </div>
        <LoginForm />
      </div>
      <Footer />
    </>
  );
}
export default LoginPage;
