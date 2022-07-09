import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StoreCarousel from "./StoreCarousel";
export default function StoresRow(props) {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <Box marginY={5}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
        mb={3}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography component="div">
            <Box
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              {props.title}
            </Box>
          </Typography>
        </Box>
        <Button
          disableRipple
          variant="text"
          sx={{
            "&:hover": {
              backgroundColor: "#D5D5D5",
              boxShadow: "none",
            },
          }}
          onClick={clickHandler}
        >
          <Typography
            color="#010101"
            component={"div"}
            sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          >
            See All
          </Typography>
        </Button>
        <Stack direction="row" ml={3} spacing={1}>
          <IconButton
            className={props.prev}
            sx={{
              boxShadow: "none",
              backgroundColor: "#E5E4E4",
              "&:hover": {
                backgroundColor: "#D5D5D5",
                boxShadow: "none",
              },
              color: "#010101",
            }}
          >
            <ChevronLeftIcon></ChevronLeftIcon>
          </IconButton>
          <IconButton
            className={props.next}
            sx={{
              boxShadow: "none",
              backgroundColor: "#E5E4E4",
              "&:hover": {
                backgroundColor: "#D5D5D5",
                boxShadow: "none",
              },
              color: "#010101",
            }}
          >
            <ChevronRightIcon></ChevronRightIcon>
          </IconButton>
        </Stack>
      </Box>
      <StoreCarousel
        next={props.next}
        prev={props.prev}
        stores={props.restaurant}
      ></StoreCarousel>
    </Box>
  );
}
