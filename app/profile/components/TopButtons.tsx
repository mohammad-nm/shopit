import { clearError } from "@/store/ui";
import { loginSignup } from "@/store/ui";
import { clearAll } from "@/store/ui";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const TopButtons = () => {
  const dispatch = useDispatch();
  const login = useSelector((state: any) => state.ui.loginSignup);
  return (
    <div className="flex gap-12 font-semibold text-4xl">
      <button
        className={`${!login ? "text-gray-300" : ""}`}
        onClick={() => {
          dispatch(loginSignup(true));
          dispatch(clearError());
          dispatch(clearAll());
        }}
      >
        ورود
      </button>
      <button
        className={`${login ? "text-gray-300" : ""}`}
        onClick={() => {
          dispatch(loginSignup(false));
          dispatch(clearError());
          dispatch(clearAll());
        }}
      >
        عضویت
      </button>
    </div>
  );
};
