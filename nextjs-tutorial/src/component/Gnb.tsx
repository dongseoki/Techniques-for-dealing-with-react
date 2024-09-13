import { Menu } from "semantic-ui-react";

// 여기서 서버사이드렌더링을 적용해봅시다

export default function Gnb() {
  const activeItem = "home";
  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        //   onClick={this.handleItemClick}
      />
      <Menu.Item
        name="messages"
        active={activeItem === "messages"}
        //   onClick={this.handleItemClick}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        //   onClick={this.handleItemClick}
      />
    </Menu>
  );
}
