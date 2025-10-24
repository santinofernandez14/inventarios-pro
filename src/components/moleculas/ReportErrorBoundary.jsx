import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  padding: 20px;
  background-color: #ffebee;
  border: 1px solid #e57373;
  border-radius: 8px;
  color: #c62828;
  text-align: center;
  font-family: 'Arial', sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-top: 0;
    color: #b71c1c;
  }

  p {
    margin-bottom: 10px;
  }

  code {
    background-color: #ffcdd2;
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 0.9em;
  }
`;

export class ReportErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error capturado por el Error Boundary de Reportes:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorContainer>
                    <h2>Ocurrió un error en este reporte.</h2>
                    <p>Por favor, intenta refrescar la página.</p>
                    <p>
                        Si el problema persiste, contacta a soporte.
                    </p>
                </ErrorContainer>
            );
        }

        return this.props.children;
    }
}