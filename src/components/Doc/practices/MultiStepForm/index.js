import AddOnPicker from "./AddOnPicker";
import MultiStepForm from "./MultiStepForm";
import PersonalInfo from "./PersonalInfo";
import PlanSelector from "./PlanSelector";
import Summary from "./Summary";
import ThankYouPage from "./ThankYouPage";

export default function Forms() {
  const stepComponents = [
    {
      component: PersonalInfo,
      title: "Personal Info",
      desc: "Please provide your name,email address, and phone number.",
    },
    {
      component: PlanSelector,
      title: "Select your Plan",
      desc: "You have the option of monthly or yearly billing.",
    },
    {
      component: AddOnPicker,
      title: "Pick add-ons",
      desc: "Add-ons help enhance your gaming experience.",
    },
    {
      component: Summary,
      title: "Finishing Up",
      desc: "Double-check everything looks OK before confirming.",
    },
    {
      component: ThankYouPage,
    },
  ];
  return (
    <div>
      <MultiStepForm stepComponents={stepComponents} />
    </div>
  );
}
