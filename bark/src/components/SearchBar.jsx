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
    >
      <TextField
        size="small"
        placeholder="What service are you looking for?"
        name="service"
        sx={{ flex: "3" }}
      />
      <TextField
        size="small"
        placeholder="Postcode"
        name="postcode"
        sx={{ flex: "2", marginRight: 1 }}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
