import images from "~/assets/images";
import LoginForm from "./Form/Form";

const Login = () => {
    return (
        <section>
            <div className="flex w-full h-auto justify-between items-center py-16">
                <div className="overflow-hidden">
                    <img className="w-[805px] object-contain" src={images.shop_auth} alt="shop-auth" />
                </div>
                <div className="me-[135px] min-w-[371px]">
                    <div class="demo text-start">
                        <h4 className="text-black text-opacity-50">Demo:</h4>
                        <p className="text-black text-opacity-50">- username: clientclient</p>
                        <p className="text-black text-opacity-50">- password: 123456</p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </section>
    );
};

export default Login;
