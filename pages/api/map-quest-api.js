export default function handler(req, res) {
  const key = process.env.MAP_QUEST_API_KEY;

  res.status(200).json({ name: "John Doe" });
}
