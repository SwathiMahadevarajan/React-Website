import { ReactComponent as ThankYouIcon } from "assets/icons/icon-thank-you.svg";
import "./thankYouPage.css";
export default function ThankYouPage() {
  return (
    <div className="thankYouNote">
      <ThankYouIcon style={{ width: "50px" }} />
      <h2>Thank You!</h2>
      <p className="thankYouDescription">
        Thanks for confirming your subscription!We hope you have fun using our
        platform.If you ever need support,please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
