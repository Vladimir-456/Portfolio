import { FormProvider, useForm } from "react-hook-form";
import {
  projectSchema,
  type ProjectFormData,
} from "../../features/schema/projectSchema";
import { useState } from "react";
import { projectSteps } from "./const";
import { zodResolver } from "@hookform/resolvers/zod";
import StepBasicInfo from "./step-basic-info/step-basic-info";
import StepLinksMedia from "./step-link-media/step-link-media";
import { StepTechScreenshots } from "./step-tech-screenshots/step-tech-screenschots";
import { StepFavorite } from "./step-favorite/step-favorite";

type Props = {
  initialData?: ProjectFormData;
  // onSubmitProject: (data: ProjectFormData) => void;
};

const defaultData: ProjectFormData = {
  id: crypto.randomUUID(),
  title: "",
  description: "",
  imageUrl: "",
  favoriteIconUrl: "",
  screenshots: [],
  technologies: [],
  href: "",
  isFavorite: false,
  type: "",
};

const AddProjectForm = ({ initialData }: Props) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const methods = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    mode: "onChange",
    defaultValues: initialData ?? defaultData,
  });

  const currentStep = projectSteps[currentStepIndex];
  const isLastStep = currentStepIndex === projectSteps.length - 1;

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const nextStep = async () => {
    // валидируем только поля текущего шага
    const isValid = await methods.trigger(currentStep.fields);
    if (!isValid) return;

    if (currentStepIndex < projectSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const onSubmit = (data: ProjectFormData) => {
    console.log("Submit data:", data);
    // позже здесь будет onSubmitProject(data)
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-xl mx-auto mt-8 rounded-xl border border-slate-500 bg-slate-700 p-6 shadow-sm backdrop-blur"
      >
        <div className="mb-6 flex items-center justify-center">
          <p className="text-sm font-medium text-slate-500">
            Step {currentStepIndex + 1} of {projectSteps.length}
          </p>
        </div>

        <div className="flex  items-start justify-center my-5">
          {currentStep.id === 1 && <StepBasicInfo />}
          {currentStep.id === 2 && <StepLinksMedia />}
          {currentStep.id === 3 && <StepTechScreenshots />}
          {currentStep.id === 4 && <StepFavorite />}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStepIndex === 0}
            className="rounded-md border border-slate-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Back
          </button>

          {!isLastStep && (
            <button
              type="button"
              onClick={nextStep}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-blue-700"
            >
              Next
            </button>
          )}

          {isLastStep && <button type="submit">Save project</button>}
        </div>
      </form>
    </FormProvider>
  );
};

export default AddProjectForm;
