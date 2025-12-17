import { useFormContext, useWatch } from "react-hook-form";
import type { ProjectFormData } from "../../../features/schema/projectSchema";

export function StepFavorite() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ProjectFormData>();

  const title = useWatch({ control, name: "title" });
  const href = useWatch({ control, name: "href" });
  const isFavorite = useWatch({ control, name: "isFavorite" });

  return (
    <div className="space-y-4">
      <label className="inline-flex items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          {...register("isFavorite")}
          className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />
        Mark as favorite project
      </label>

      {/* Небольшое превью карточки проекта */}
      <div className="project-preview">
        <h3>Preview</h3>
        <div className="project-preview__card">
          <div className="project-preview__header">
            <span className="project-preview__title">
              {title || "Project title"}
            </span>
            {isFavorite && (
              <span className="project-preview__badge">★ Favorite</span>
            )}
          </div>
          <a
            href={href || "#"}
            target="_blank"
            rel="noreferrer"
            className="project-preview__link"
          >
            {href || "Project link"}
          </a>
        </div>
      </div>
    </div>
  );
}
