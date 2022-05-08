import {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./numeric-input.module.css";
import { Box } from "@mui/system";
import { range } from "lodash";

export type NumericInputProps = {
  value: number;
  onChange: ChangeEventHandler;
  numOfMask?: number;
  suffix?: ReactNode;
  name?: string;
};
export default function NumericInput({
  value,
  onChange,
  numOfMask = 2,
  suffix,
  name,
}: NumericInputProps): JSX.Element {
  const [tempVal, setTempVal] = useState(() => value),
    [pos, setPos] = useState(0),
    rootRef = useRef<HTMLDivElement>(),
    tempValStr = useMemo(
      () => (tempVal === 0 ? [""] : (tempVal + "").split("")),
      [tempVal]
    );

  useEffect(() => {
    setTempVal(value);
  }, [value]);

  useEffect(() => {
    if (pos === numOfMask) {
      const event = new Event("change") as unknown as ChangeEvent;
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value: tempVal,
          name,
        },
      });
      onChange(event);
    }
  }, [name, numOfMask, onChange, pos, tempVal]);

  const onFocus = useCallback<MouseEventHandler>(() => {
    rootRef.current?.focus();
  }, []);

  const onKeyDown = useCallback<KeyboardEventHandler>(
    (e) => {
      if (/\d/.test(e.key) && pos < numOfMask) {
        const newVal = tempVal * 10 + parseInt(e.key);
        setTempVal(newVal);
        setPos(pos + 1);
      } else if (e.key === "Backspace") {
        setTempVal(Math.round(tempVal / 10));
        setPos(pos - 1);
      }
    },
    [numOfMask, pos, tempVal]
  );

  return (
    <Box
      ref={rootRef}
      tabIndex={-1}
      onClick={onFocus}
      onKeyDown={onKeyDown}
      className={styles.Root}
      sx={{
        gridTemplateColumns: `${range(numOfMask)
          .map(() => "1fr")
          .join(" ")}${suffix ? " auto" : ""}`,
      }}
    >
      {range(numOfMask).map((_, index) => (
        <Box key={index} className={styles.Cell}>
          {tempValStr[index] ?? ""}
        </Box>
      ))}
      {suffix && <Box className={styles.Text}>{suffix}</Box>}
    </Box>
  );
}
