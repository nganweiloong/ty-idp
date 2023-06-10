import { Typography, Box, Chip } from "@mui/material";
import { useQuery } from "react-query";

const Display: React.FC = () => {
  const { data, isFetching } = useQuery(
    "repoData",
    () =>
      fetch(
        "https://idp-roarr-default-rtdb.firebaseio.com/data/result.json?orderBy=%22data%22&limitToLast=10"
      ).then(res => res.json()),
    {
      refetchInterval: 1000,
    }
  );
  let result = [];
  if (data) {
    console.log("oi");
    result = Object.keys(data).map(key => {
      return { id: key, ...data[key] };
    });
  }
  return (
    <Box>
      <Typography component="h1" variant="h4" textAlign="center">
        {isFetching ? "synchronizing...." : "data"}
      </Typography>
      {result.map(data => (
        <Box sx={{ border: "1px solid black", p: 1 }} key={data.id} mb={2}>
          <Chip variant="filled" key={data.id} label={data.id}></Chip>
          <Box sx={{ display: "flex" }}>
            <Typography>humidity: {data.humidity}</Typography>
            <Typography> temperature: {data.temperature}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Display;
