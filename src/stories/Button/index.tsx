import "../../common/styles/index.less";
import "./index.less";

interface Props {
  user: string;
}

export function Button({ user }: Props) {
  return (
    <div className="cyberpunk-design-btn">
      <span className="text" data-text="test">
        test
      </span>
      <span className="glitch"></span>
    </div>
  );
}
