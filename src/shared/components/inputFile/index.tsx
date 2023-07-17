import { useFormContext } from "react-hook-form-mui";
import { iUserFirstRequest } from "../../interfaces";

export const InputFile = () => {
  const { register, formState } = useFormContext<iUserFirstRequest>();

  const { errors } = formState;

  return (
    <div>
      <form className="flex flex-col gap-2 border invalid:border-red-600 invalid:first:text-red-600 invalid:hover:border-red-600 border-neutral-300 hover:border-neutral-700 transition-colors rounded-[4px] px-[14px] pt-3 pb-[16.5px] text-[#000000de] hover:cursor-pointer">
        <label htmlFor="avatar" className="text-sm hover:cursor-pointer">
          Foto de Perfil *
        </label>
        <input
          id="avatar"
          type="file"
          required
          accept="image/jpeg, image/jpg, image/png, image/webp"
          className="text-sm cursor-pointer file:bg-primary file:hover:bg-red-900 file:transition-colors file:uppercase file:text-xs file:p-[6px]  file:text-white file:shadow file:rounded file:border-none file:cursor-pointer"
          {...register("avatar")}
        />
      </form>
      {errors.avatar && (
        <span className="text-red-600 text-xs ml-[14px]">
          {errors.avatar.message}
        </span>
      )}
    </div>
  );
};
