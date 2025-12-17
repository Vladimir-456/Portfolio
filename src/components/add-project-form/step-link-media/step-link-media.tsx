import { useFormContext } from "react-hook-form";
import type { ProjectFormData } from "../../../features/schema/projectSchema";

const StepLinksMedia = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProjectFormData>();
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="href" className="text-md text-white mb-1">
          Main link
        </label>
        <input
          id="href"
          type="url"
          {...register("href")}
          placeholder="https://..."
        />
        {errors.href && <p className="field-error">{errors?.href.message}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="imageUrl" className="text-md text-white mb-1">
          Cover image URL (optional)
        </label>
        <input
          id="imageUrl"
          type="url"
          {...register("imageUrl")}
          placeholder="https://..."
          className="h-9 rounded-md border border-slate-300 px-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        {errors.imageUrl && (
          <p className="text-xs text-red-500 mt-1 px-1">
            {errors?.imageUrl.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="favoriteIconUrl" className="text-md text-white mb-1">
          Favorite icon URL
        </label>
        <input
          id="favoriteIconUrl"
          type="url"
          {...register("favoriteIconUrl")}
          placeholder="/images/favorite-svgrepo-com.svg or https://..."
          className="h-9 rounded-md border border-slate-300 px-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        {errors.favoriteIconUrl && (
          <p className="text-xs text-red-500 mt-1 px-1">
            {errors.favoriteIconUrl.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default StepLinksMedia;
