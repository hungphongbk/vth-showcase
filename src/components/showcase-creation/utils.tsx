import { css, darken, styled } from "@mui/material/styles";
import { Button, TextField, TextFieldProps, Typography } from "@mui/material";
import "../../theme";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React, { useCallback } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const EnhancedTextField = styled(TextField)<{
  placeholderColor?: string;
}>(
  ({ theme, placeholderColor }) => css`
    margin-top: 4px;
    .MuiInputBase-input::placeholder {
      color: ${placeholderColor ?? theme.palette.neutral.darkGrey};
      opacity: 100%;
    }
    .MuiInputBase-formControl {
      &::before {
        border-bottom: 1px solid ${theme.palette.neutral.lightGrey};
      }
      &::after {
        border-bottom: 1px solid ${darken(theme.palette.neutral.lightGrey, 0.2)};
      }
    }
  `
);

export const EnhancedMultilineTextField = styled((props: TextFieldProps) => (
  <TextField {...props} multiline rows={props.rows ?? 4} variant={"filled"} />
))(
  ({ theme }) => css`
    margin-top: 4px;
    .MuiInputBase-input::placeholder {
      color: ${theme.palette.neutral.darkGrey};
      opacity: 100%;
    }
    .MuiInputBase-root {
      border-radius: 10px;
    }
    .MuiInputBase-formControl {
      &::before {
        //border-bottom: 1px solid ${theme.palette.neutral.lightGrey};
        display: none;
      }
      &::after {
        //border-bottom: 1px solid ${darken(
          theme.palette.neutral.lightGrey,
          0.2
        )};
        display: none;
      }
    }
  `
);

export const useShowcaseCreationSuccess = () => {
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return useCallback(
    async ({ name, slug }: any) => {
      await router.prefetch(`/post/${slug}`);
      enqueueSnackbar(
        <Typography>
          Showcase&nbsp;<strong>{name}</strong>&nbsp;được tạo thành công!
        </Typography>,
        {
          variant: "success",
          action: (key) => (
            <Button
              variant={"text"}
              onClick={async () => {
                await router.push(`/post/${slug}`);
                closeSnackbar(key);
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Xem
            </Button>
          ),
          async onClose(_, reason) {
            if (reason === "timeout") await router.push(`/post/${slug}`);
          },
        }
      );
    },
    [closeSnackbar, enqueueSnackbar, router]
  );
};
