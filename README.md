# TODO

- Studio section with this slider
  https://www.youtube.com/watch?v=QpsGo8kZiTo

- React helmet

- Dark mode at sending form

- Toast at form when send

- Showcase studio

- Animations

- Check out inifnity floating elements in background

  useEffect(() => {
  fetch(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZMkfGS_gdQmKRjZOaF7yvysVHnn6Qa0nHElhIzJz2MjOfgPAIGqG0f-6QaeYO9tktiB3FkVN6qNFG/pub?output=tsv"
  )
  .then((res) => {
  return res.text();
  })
  .then((text) => {

        const rows = text
          .trim()
          .split("\n")
          .map((row) => row.split("\t")); // Convert TSV to Array
        setData(rows);
        console.log(rows);
      })
      .catch((err) => console.error("Error fetching data:", err));

  }, []);
