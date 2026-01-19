import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components/ui/table";

import { parse } from "csv-parse/sync";
import fs from "fs";

export default function RenderTable({
  csvPath,
  caption,
  children,
}: {
  csvPath: string;
  caption?: string;
  children: React.ReactNode;
}) {
  const csv = fs.readFileSync(csvPath, "utf-8");
  const records = parse(csv, { columns: true }) as Record<
    string,
    string | number | null
  >[];
  const columns = Object.keys(records[0]);

  return (
    <div className="flex flex-col gap-0 select-none">
      <div className="flex bg-transparent justify-center w-full p-8 border border-b-0 rounded-t-lg">
        <Table>
          <TableCaption>{caption}</TableCaption>
          <TableHeader>
            <TableRow>
              {columns.map((c) => (
                <TableHead className="w-[100px]" key={c}>
                  {c}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((row, i) => (
              <TableRow key={i}>
                {columns.map((c) => (
                  <TableCell className="font-medium" key={c}>
                    {row[c]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="[&>figure]:my-0 [&>figure]:rounded-t-none">
        {children}
      </div>
    </div>
  );
}
