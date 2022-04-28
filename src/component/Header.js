import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledSection>
        <ul>
          <StyledFlex>
            <li>
              <Link href="/products" passHref>
                <button>Produkte</button>
              </Link>
            </li>
            <li>
              <Link href="/categories" passHref>
                <button>Kategorien</button>
              </Link>
            </li>
            <li>
              <Link href="/create-category" passHref>
                <button>Kategorien hinzufügen</button>
              </Link>
            </li>
            <li>
              <Link href="/create-product" passHref>
                <button>Produkte hinzufügen</button>
              </Link>
            </li>
          </StyledFlex>
        </ul>
      </StyledSection>
    </>
  );
}

const StyledFlex = styled.div`
  display: flex;
  fex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const StyledSection = styled.section`
  width: 100vw;
  height: 3vw;
`;
