import { useEffect } from 'react';
import { COMPANY_NAME } from '../data/site';

// Sets the browser tab title: "<title> · Oltaken", or just "Oltaken" with no title.
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${COMPANY_NAME}` : COMPANY_NAME;
  }, [title]);
}
