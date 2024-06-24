import styled from "styled-components";

const Aside = styled.aside`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  margin: 0 0 1rem 0;
  cursor: pointer;
  transition: background 0.3s ease;
  border-radius: 2rem;
  font-size: 1.3rem;
  font-weight: 400;
  &:hover {
    background-color: #181818;
  }
`;
export default function SidebarItem({ icon, children }) {
  return (
    <Aside>
      {icon}
      <span>{children}</span>
    </Aside>
  );
}
