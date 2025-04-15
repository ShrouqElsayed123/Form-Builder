import { Visibility, VisibilityOff, Lock } from "@mui/icons-material";
import { useState } from "react";

export const PasswordFieldFormElement = {
  type: "Password",

  construct: (id) => ({
    id,
    type: "Password",
    extraAttributes: {
      label: "Password",
      placeholder: "Enter your password"
    }
  }),

  designerBtnElement: {
    icon: <Lock />,
    label: "Password"
  },

  // العرض في المصمم
  designerComponent: ({ extraAttributes }) => (
    <div style={{ padding: "10px", border: "1px solid #ccc" }}>
      <label style={{ display: "block", marginBottom: "5px" }}>
        {extraAttributes?.label || "Password"}
      </label>
      <div style={{ position: "relative" }}>
        <input
          type="password"
          placeholder={extraAttributes?.placeholder || ""}
          disabled
          style={{ width: "100%", padding: "8px", paddingRight: "40px" }}
        />
        <VisibilityOff
          style={{
            position: "absolute",
            right: "10px",
            top: "8px",
            color: "#aaa"
          }}
        />
      </div>
    </div>
  ),

  // العرض في النموذج الحقيقي
  formComponent: ({ extraAttributes }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);

    return (
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          {extraAttributes?.label || "Password"}
        </label>
        <div style={{ position: "relative" }}>
          <input
            type={show ? "text" : "password"}
            placeholder={extraAttributes?.placeholder || ""}
            style={{ width: "100%", padding: "8px", paddingRight: "40px" }}
          />
          {show ? (
            <Visibility
              onClick={() => setShow(false)}
              style={{
                position: "absolute",
                right: "10px",
                top: "8px",
                cursor: "pointer"
              }}
            />
          ) : (
            <VisibilityOff
              onClick={() => setShow(true)}
              style={{
                position: "absolute",
                right: "10px",
                top: "8px",
                cursor: "pointer"
              }}
            />
          )}
        </div>
      </div>
    );
  },

  // واجهة الخصائص
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
