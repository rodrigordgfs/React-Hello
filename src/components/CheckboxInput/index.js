export default function CheckboxInput({
  id = "input",
  inputLabel = "Label description",
  inputValue = "",
  inputFocus = false,
  onCheckboxChange = null,
}) {
  function handleCheckboxChange() {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }

  return (
    <>
      <div className="flex flex-row my-4 items-center space-x-2">
        <input
          autoFocus={inputFocus}
          id={id}
          className="border p-1"
          type="checkbox"
          value={inputValue}
          onChange={handleCheckboxChange}
        />
        <label className="text-sm mb-1" htmlFor={id}>
          {inputLabel}
        </label>
      </div>
    </>
  );
}
