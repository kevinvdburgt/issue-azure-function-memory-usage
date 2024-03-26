const usage = { lowest: null, highest: null };

const bytesToMegabytes = (bytes) => `${Math.round(bytes / 1024 / 1024)}mb`;

const reportUsage = () => {
  const memory = process.memoryUsage();

  if (usage.lowest === null || usage.lowest > memory.rss) {
    usage.lowest = memory.rss;
  }

  if (usage.highest === null || usage.highest < memory.rss) {
    usage.highest = memory.rss;
  }

  console.log(`Rss: ${bytesToMegabytes(memory.rss)} (lowest: ${bytesToMegabytes(usage.lowest)}, highest: ${bytesToMegabytes(usage.highest)})`)
}

setInterval(reportUsage, 100);

const script = async (context) => {
  context.res = {
    body: { hello: 'world' }
  };
};

module.exports = script;
