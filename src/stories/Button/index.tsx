import "../../common/styles/index.less";
import "./index.less";

interface Props {
  user: string;
}

export function Button({ user }: Props) {
  return (
    <div className="cyberpunk-design-btn">
      <div className="bg"></div>
      <span className="text" data-text="AVAILABLE NOW">
        AVAILABLE NOW
      </span>
      <span className="glitch"></span>
    </div>
  );
}
