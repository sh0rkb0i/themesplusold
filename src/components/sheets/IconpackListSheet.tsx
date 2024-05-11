import { React } from "@vendetta/metro/common";
import { Forms } from "@vendetta/ui/components";

import {
  ActionSheet,
  ActionSheetCloseButton,
  ActionSheetContentContainer,
  ActionSheetTitleHeader,
  hideActionSheet,
} from "$/types";

import { active, lang } from "../..";

const { FormRow, FormRadioRow } = Forms;

export default function ({
  value: _value,
  callback,
}: {
  value: string | null;
  callback: (v: string | null) => void;
}) {
  const [value, setValue] = React.useState(_value);
  callback(value);

  const options = [
    {
      label: lang.format("sheet.select_iconpack.none", {}),
      value: null,
    },
    ...active.iconpackList.map((x) => ({
      label: x.id,
      value: x.id,
    })),
  ];

  return (
    <ActionSheet>
      <ActionSheetContentContainer>
        <ActionSheetTitleHeader
          title={lang.format("sheet.select_iconpack.title", {})}
          trailing={
            <ActionSheetCloseButton onPress={() => hideActionSheet()} />
          }
        />
        {options.map((x) => (
          <FormRadioRow
            label={x.label}
            onPress={() => setValue(x.value)}
            trailing={<FormRow.Arrow />}
            selected={x.value === value}
          />
        ))}
      </ActionSheetContentContainer>
    </ActionSheet>
  );
}
