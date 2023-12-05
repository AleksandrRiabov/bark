import { Button, TextField } from "@mui/material";

const SearchBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      id="project-create-form"
      autoComplete="off"
      onSubmit={handleSubmit}
      className="d-flex"
      style={{ gap: "1rem" }}
    >
      <TextField
        size="small"
        placeholder="What service are you looking for?"
        name="service"
        sx={{
          flex: "3",
          backgroundColor: "white",
          borderRadius: "5px",
          outline: "none",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", // Set border color to transparent
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
        }}
      />
      <TextField
        size="small"
        placeholder="Postcode"
        name="postcode"
        sx={{
          flex: "2",
          marginRight: 1,
          backgroundColor: "white",
          outline: "none",
          borderRadius: "5px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
        }}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
