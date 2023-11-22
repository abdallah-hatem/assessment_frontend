import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Button } from "@mui/material";

interface Props {
  children?: ReactJSXElement[] | ReactJSXElement;
  style?: object;
  headerTitle?: string;
}
export default function CardComp({ children, style, headerTitle }: Props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 15,
        paddingTop: headerTitle && 2,
        borderRadius: 5,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        ...style,
      }}
    >
      {headerTitle && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p style={{ fontWeight: "700" }}>{headerTitle}</p>
            </div>

            <Button>All</Button>
          </div>
          <p style={{ fontSize: 11, marginTop: -13, color: "grey" }}>
            Lorem ipsum dolor sit amet consectetu.
          </p>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
