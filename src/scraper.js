// Using standard fetch since this is node 18+
async function run() {
  const res = await fetch('https://houseofsoftskills.com/uae/phonics-for-kids');
  const text = await res.text();
  const match = text.match(/Subscription Plans[\s\S]*?(?=The HOSS Secret Ingredient|Frequenty Asked Questions)/i);
  if (match) {
    console.log(match[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  } else {
    console.log("No match found");
  }
}
run();
