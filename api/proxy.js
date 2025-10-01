export default async function handler(req, res) {
  try {
    const target = req.query.url;
    if (!target) return res.status(400).send("Missing ?url=");
    const r = await fetch(target);
    const body = await r.text();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", r.headers.get("content-type") || "text/plain");
    res.status(r.status).send(body);
  } catch (e) {
    res.status(500).send(String(e));
  }
}
