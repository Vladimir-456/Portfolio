import { useFormContext } from "react-hook-form";
import type { ProjectFormData } from "../../../features/schema/projectSchema";

const StepBasicInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProjectFormData>();

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="text-md text-white mb-1">
          Title
        </label>
        <input
          id="title"
          type="text"
          {...register("title")}
          placeholder="Enter project title"
          className="h-9 rounded-md border border-slate-300 px-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        {errors.title && (
          <p className="text-xs text-red-500 mt-1 px-1">
            {errors.title.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-md text-white mb-1">
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          {...register("description")}
          placeholder="Short description of the project"
          className="rounded-md border border-slate-300 px-2 py-1 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        {errors.description && (
          <p className="text-xs text-red-500 mt-1 px-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="type" className="text-md text-white mb-1">
          Type
        </label>
        <input
          id="type"
          type="text"
          {...register("type")}
          placeholder="e.g. pet, commercial, study"
          className="h-9 rounded-md border border-slate-300 px-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        {errors.type && (
          <p className="text-xs text-red-500 mt-1 px-1">
            {errors.type.message as string}
          </p>
        )}
      </div>
    </div>
  );
};

export default StepBasicInfo;
