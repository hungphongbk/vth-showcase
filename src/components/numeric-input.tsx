import {
  ChangeEventHandler,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./numeric-input.module.css";
import { Box } from "@mui/system";
import { range } from "lodash";

type NumericInputProps = {
  value: number;
  onChange: ChangeEventHandler;
  numOfMask?: number;
  suffix?: ReactNode;
};
export default function NumericInput({
  value,
  onChange,
  numOfMask = 2,
  suffix,
}: NumericInputProps): JSX.Element {
  const [tempVal, setTempVal] = useState(() => value),
    [pos, setPos] = useState(0),
    rootRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setTempVal(value);
  }, [value]);

  const onFocus = useCallback<MouseEventHandler>(() => {
    rootRef.current?.focus();
  }, []);

  return (
    <Box
      ref={rootRef}
      tabIndex={-1}
      onClick={onFocus}
      className={styles.Root}
      sx={{
        gridTemplateColumns: `${range(numOfMask)
          .map(() => "1fr")
          .join(" ")}${suffix ? " auto" : ""}`,
      }}
    >
      {range(numOfMask).map((_, index) => (
        <Box key={index} className={styles.Cell}></Box>
      ))}
    </Box>
  );
}
