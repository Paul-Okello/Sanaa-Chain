import React from "react";

type FormFieldProps = {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: any;
  isSurpriseMe: any;
  handleSurpriseMe: any;
};

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}: FormFieldProps) => (
  <div className="flex flex-col items-center justify-center">
    <div className="flex justify-center items-center gap-2 mb-2 mx-auto w-full">
      <label
        htmlFor={name}
        className=" text-[18px] font-normal leading-[32.4px] text-[#B0B0B0]"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-lg bg-[#F2CD5C] py-1 px-2 rounded-t-md text-slate-800  animate-pulse w-50 justify-self-center items-center "
        >
          Sample
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full lg:w-1/2 p-4 placeholder:text-ellipsis placeholder:text-base"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;
