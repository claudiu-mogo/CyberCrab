import Modal from "@/components/shared/modal";
import { signIn } from "next-auth/react";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { LoadingDots, Google } from "@/components/shared/icons";
import Image from "next/image";
import { setRequestMeta } from "next/dist/server/request-meta";

const RegisterModal = ({
  showRegisterModal,
  setShowRegisterModal,
}: {
  showRegisterModal: boolean;
  setShowRegisterModal: Dispatch<SetStateAction<boolean>>;
}) => {
    const [registerClicked, setRegisterClicked] = useState(false);


  return (
    <Modal showModal={showRegisterModal} setShowModal={setShowRegisterModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://precedent.dev">
            <Image
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Register</h3>
          <p className="text-sm text-gray-500"></p>
        </div>
        <div className="m-auto flex flex-col items-center justify-center p-4">
          <div className="my-auto p-4">
            <input
              type="text"
              name="user_name"
              placeholder="Username"
              className="w-full rounded-md border border-gray-300 px-4 py-2"
              required
              minLength={3}
              maxLength={50}
              title="Please enter a name between 3 and 50 characters."
            />
          </div>
          <div className="my-auto p-4">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full rounded-md border border-gray-300 px-4 py-2"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required
              minLength={2}
              maxLength={50}
              title="Please enter a valid email address."
            />
          </div>
          <div className="my-auto p-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full rounded-md border border-gray-300 px-4 py-2"
              required
              minLength={8}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$"
              title="Please enter a password that is at least 8 characters long and includes at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*()_+)."
            />
          </div>
          <button className="flex transform items-center justify-center space-x-2 rounded-md border border-white bg-gradient-to-r from-sky-700 to-sky-950 px-6 py-3 text-sm text-white shadow-md transition-transform hover:scale-105">
            Submit
          </button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          <h3 className="font-display text-2xl font-bold">Or</h3>
          <button
            disabled={registerClicked}
            className={`${
              registerClicked
                ? "cursor-not-allowed border-gray-200 bg-gray-100"
                : "border border-gray-200 bg-white text-black hover:bg-gray-50"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setRegisterClicked(true);
              signIn("google");
            }}
          >
            {registerClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <img
                  className="h-10 w-10"
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="Google"
                />
                <p>Register with Google</p>
              </>
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export function useRegisterModal() {
  const [showRegisterModal, setRegisterModal] = useState(false);

  const RegisterModalCallback = useCallback(() => {
    return (
      <RegisterModal
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setRegisterModal}
      />
    );
  }, [showRegisterModal, setRegisterModal]);

  return useMemo(
   () => ({ setRegisterModal, RegisterModal: RegisterModalCallback }),
   [setRegisterModal, RegisterModalCallback],
);

}
