"use client";
import { Checkbox } from "components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "components/ui/field";
import { useState } from "react";

export default function GLAccountsSelector({
  segmented,
  simple,
}: {
  segmented: React.ReactNode;
  simple: React.ReactNode;
}) {
  const [isSegmented, setIsSegmented] = useState(false);

  return (
    <>
      <div className="max-w-fit mb-6">
        <Field orientation="horizontal">
          <Checkbox
            onCheckedChange={(checked) => setIsSegmented(checked === true)}
            id="segmented"
            name="segmented"
          />
          <FieldContent>
            <FieldLabel htmlFor="segmented">GL Accounts Segmented</FieldLabel>
            <FieldDescription>
              Select if GL Accounts are segmented by business units
            </FieldDescription>
          </FieldContent>
        </Field>
      </div>
      <div>{isSegmented ? segmented : simple}</div>
    </>
  );
}
