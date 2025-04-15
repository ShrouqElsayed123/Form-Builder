import { Email } from "@mui/icons-material";

export const EmailFormElement = {
  type: "Email",

  construct: (id) => ({
    id,
    type: "Email",
    extraAttributes: {
      label: "Email Address",
      placeholder: "Enter your email"
    }
  }),

  designerBtnElement: {
    icon: <Email />,
    label: "Email"
  },

  designerComponent: ({ extraAttributes }) => (
    <div style={{ padding: "10px", border: "1px solid #ccc" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>
        {extraAttributes?.label || "Email"}
      </label>
      <input
        type="email"
        placeholder={extraAttributes?.placeholder || ""}
        disabled
        style={{ width: "100%", padding: "8px" }}
      />
    </div>
  ),

  formComponent: ({ extraAttributes }) => (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>
        {extraAttributes?.label || "Email"}
      </label>
      <input
        type="email"
        placeholder={extraAttributes?.placeholder || ""}
        style={{ width: "100%", padding: "8px" }}
        required
      />
    </div>
  ),

  propertiesComponent: ({ element, updateElement }) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      updateElement({
        ...element,
        extraAttributes: {
          ...element.extraAttributes,
          [name]: value
        }
      });
    };

    return (
      <div>
        <div style={{ marginBottom: "10px" }}>
          <label>Label</label>
          <input
            type="text"
            name="label"
            value={element.extraAttributes?.label || ""}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Placeholder</label>
          <input
            type="text"
            name="placeholder"
            value={element.extraAttributes?.placeholder || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
};
