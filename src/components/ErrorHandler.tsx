import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundary } from '@/pages/ErrorBoundary';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorHandler extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erreur non gérée:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorBoundary />;
    }

    return this.props.children;
  }
} 