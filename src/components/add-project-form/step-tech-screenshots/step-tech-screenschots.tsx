import { useFormContext, useFieldArray } from "react-hook-form";
import type { ProjectFormData } from "../../../features/schema/projectSchema";

export function StepTechScreenshots() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ProjectFormData>();

  const {
    fields: techFields,
    append: appendTech,
    remove: removeTech,
  } = useFieldArray<ProjectFormData, "technologies">({
    control,
    name: "technologies",
  });

  const {
    fields: screenshotFields,
    append: appendScreenshot,
    remove: removeScreenshot,
  } = useFieldArray<ProjectFormData, "screenshots">({
    control,
    name: "screenshots",
  });

  return (
    <div className="flex flex-col">
      {/* Technologies */}
      <div className="space-y-4">
        <label className="text-md text-white">Technologies</label>
        <div className="flex flex-col gap-3">
          {techFields.map((field, index) => (
            <div key={field.id} className="flex gap-3">
              <input
                type="text"
                {...register(`technologies.${index}` as const)}
                placeholder="e.g. React, TypeScript"
                className="flex-1 rounded-md border border-slate-300 px-2 py-1 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <button
                type="button"
                onClick={() => removeTech(index)}
                className="border border-slate-400 rounded-md px-3 py-1 text-xs font-medium text-white transition hover:bg-slate-50"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => appendTech("")}
            className="border border-slate-500 bg-slate-800 px-2 py-2 rounded-md text-xs text-white hover:bg-slate-500 transition ease-in-out duration-200"
          >
            Add technology
          </button>
        </div>
        {errors.technologies && (
          <p className="text-xs text-red-500 mt-1 px-1">
            {errors.technologies.message as string}
          </p>
        )}
      </div>

      <div className="space-y-4 mt-4">
        <label className="text-md text-white">Screenshots URLs</label>
        <div className="flex flex-col gap-3">
          {screenshotFields.map((field, index) => (
            <div key={field.id} className="flex gap-3">
              <input
                type="url"
                {...register(`screenshots.${index}` as const)}
                placeholder="https://..."
                className="h-9 rounded-md border border-slate-300 px-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <button
                type="button"
                onClick={() => removeScreenshot(index)}
                className="border border-slate-500 bg-slate-800 px-2 py-2 rounded-md text-xs text-white"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => appendScreenshot("")}
            className="border border-slate-500 bg-slate-800 px-2 py-2 rounded-md text-xs text-white hover:bg-slate-500 transition ease-in-out duration-200"
          >
            Add screenshot
          </button>
        </div>
        {errors.screenshots && (
          <p className="text-xs text-red-500 mt-1 px-1">
            {errors.screenshots.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
