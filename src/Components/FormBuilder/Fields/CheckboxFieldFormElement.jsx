import { CheckBox } from "@mui/icons-material";

export const CheckboxFieldFormElement = {
    type: "Checkbox",
  
    construct: (id) => ({
      id,
      type: "Checkbox",
      extraAttributes: {
        title: "Select your preferences",
        options: ["Option 1", "Option 2"],
        layout: "vertical",
      }
    }),
  
    designerBtnElement: {
      icon: <CheckBox />,
      label: "Checkbox"
    },
  
    designerComponent: ({ extraAttributes }) => (
      <div className="border p-3 rounded bg-light">
        {extraAttributes?.title && (
          <h6 className="mb-3">{extraAttributes.title}</h6>
        )}
        <div className={`d-flex ${extraAttributes.layout === "horizontal" ? "flex-row" : "flex-column"} gap-2`}>
          {extraAttributes?.options?.map((option, index) => (
            <div className="form-check" key={index}>
              <input className="form-check-input" type="checkbox" disabled />
              <label className="form-check-label">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    ),
  
    formComponent: ({ extraAttributes }) => (
      <div className="mb-3">
        {extraAttributes?.title && (
          <h6 className="mb-2">{extraAttributes.title}</h6>
        )}
        <div className={`d-flex ${extraAttributes.layout === "horizontal" ? "flex-row" : "flex-column"} gap-2`}>
          {extraAttributes?.options?.map((option, index) => (
            <div className="form-check" key={index}>
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    ),
  
    propertiesComponent: ({ element, updateElement }) => {
      const options = element.extraAttributes?.options || [];
  
      const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        updateElement({
          ...element,
          extraAttributes: {
            ...element.extraAttributes,
            options: newOptions
          }
        });
      };
  
      const handleTitleChange = (e) => {
        updateElement({
          ...element,
          extraAttributes: {
            ...element.extraAttributes,
            title: e.target.value
          }
        });
      };
  
      const handleLayoutChange = (e) => {
        updateElement({
          ...element,
          extraAttributes: {
            ...element.extraAttributes,
            layout: e.target.value
          }
        });
      };
  
      const addOption = () => {
        updateElement({
          ...element,
          extraAttributes: {
            ...element.extraAttributes,
            options: [...options, ""]
          }
        });
      };
  
      const removeOption = (index) => {
        const newOptions = options.filter((_, i) => i !== index);
        updateElement({
          ...element,
          extraAttributes: {
            ...element.extraAttributes,
            options: newOptions
          }
        });
      };
  
      return (
        <div className="mb-3">
          <div className="mb-3">
            <label className="form-label">Checkbox Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={element.extraAttributes?.title || ""}
              onChange={handleTitleChange}
            />
          </div>
  
          <div className="mb-3">
            <label className="form-label">Layout</label>
            <select
              className="form-select"
              value={element.extraAttributes?.layout || "vertical"}
              onChange={handleLayoutChange}
            >
              <option value="vertical">Vertical</option>
              <option value="horizontal">Horizontal</option>
            </select>
          </div>
  
          <label className="form-label">Checkbox Options</label>
          {options.map((opt, index) => (
            <div className="d-flex gap-2 mb-2" key={index}>
              <input
                type="text"
                className="form-control"
                value={opt}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeOption(index)}
                type="button"
              >
                ❌
              </button>
            </div>
          ))}
          <button
            className="btn btn-outline-primary btn-sm mt-2"
            onClick={addOption}
            type="button"
          >
            ➕ Add Option
          </button>
        </div>
      );
    }
  };
  