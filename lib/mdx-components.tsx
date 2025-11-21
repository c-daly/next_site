import GlossaryTerm from '@/components/GlossaryTerm';
import { getDefinition } from '@/lib/glossary';

export function getMDXComponents() {
  return {
    strong: ({ children }: any) => {
      const text = String(children);
      const definition = getDefinition(text);
      
      if (definition) {
        return (
          <GlossaryTerm term={text} definition={definition}>
            {children}
          </GlossaryTerm>
        );
      }
      return <strong>{children}</strong>;
    },
  };
}
