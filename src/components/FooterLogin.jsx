import styled from "styled-components";
import { GiPadlock } from "react-icons/gi";

export function FooterLogin() {
  return (
    <Container>
      <section className="security-info">
        <GiPadlock size={14} />
        <span>Tu información está protegida</span>
      </section>

      <section className="copyright">
        <span>Todos los derechos reservados</span>
        <div className="separator" />
        <span> 2025 grupo5.com</span>
      </section>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  color: #91a4b7;
  gap: 0.5rem;
  padding: 0.5rem 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .security-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(145, 164, 183, 0.2);

    svg {
      color: #91a4b7;
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;

    .separator {
      width: 1px;
      height: 0.75rem;
      background-color: rgba(145, 164, 183, 0.3);
    }

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 0.25rem;

      .separator {
        display: none;
      }
    }
  }
`;