import { TypeTable, type TypeNode } from './type-table';
import { readFileSync } from 'fs';
import { join } from 'path';

interface SchemaField {
  type: string;
  description?: string;
}

interface SchemaJSON {
  table_name: string;
  fields: Record<string, SchemaField>;
  foreign_keys: Array<{
    field: string;
    references: string;
    on_delete: string;
  }>;
}

export function TypeTableFromFile({ filePath }: { filePath: string }) {
  const fullPath = join(process.cwd(), filePath);
  const jsonData: SchemaJSON = JSON.parse(readFileSync(fullPath, 'utf-8'));

  // Transform JSON fields to TypeNode format
  const type: Record<string, TypeNode> = {};
  for (const [name, props] of Object.entries(jsonData.fields)) {
    type[name] = {
      type: props.type,
      description: props.description || undefined,
    };
  }

  return <TypeTable type={type} />;
}
