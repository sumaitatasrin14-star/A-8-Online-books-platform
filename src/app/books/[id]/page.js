import books from "@/data/books.json";

export default function Page({ params }) {
  const book = books.find((b) => b.id == params.id);

  if (!book) return <p>Book not found</p>;

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
}