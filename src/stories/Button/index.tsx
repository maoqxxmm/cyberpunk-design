import cls from "classnames";
import "../../common/styles/index.less";
import "./index.less";

type GapType = "bottomleft" | "topright" | "topleft" | "bottomright";

interface Props {
  text: string;
  gap?: GapType[];
  glitch?: boolean;
  onClick?: () => void;
}

export function Button({ text, glitch = true, gap, onClick }: Props) {
  return (
    <div
      className={cls("cyberpunk-design-btn", { "enable-glitch": glitch })}
      onClick={onClick}
    >
      <div className="bg"></div>
      <span className="text" data-text={text}>
        {text}
      </span>
      <span className="glitch"></span>
    </div>
  );
}
