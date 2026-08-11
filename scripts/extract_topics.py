import re
import json

with open('app.js', 'r') as f:
    content = f.read()

blocks = re.findall(r'const RAW_\w+_DATA = (\[.*?\]);', content, re.DOTALL)

all_topics = []
for block in blocks:
    # Some objects in the JS array might not be valid JSON if they use single quotes or lack quotes on keys, but app.js seems to use standard JSON format.
    # However, to be safe against trailing commas which JSON parser hates, we can strip them.
    block_clean = re.sub(r',\s*([\]}])', r'\1', block)
    try:
        topics = json.loads(block_clean)
        all_topics.extend(topics)
    except Exception as e:
        print(f"Failed strict JSON parsing, falling back to regex: {e}")
        topic_blocks = re.findall(r'\{.*?"id":\s*"(.*?)".*?"title":\s*"(.*?)".*?"who1":\s*"(.*?)".*?"who2":\s*"(.*?)".*?\}', block, re.DOTALL)
        for t in topic_blocks:
            all_topics.append({
                "id": t[0],
                "title": t[1],
                "who1": t[2],
                "who2": t[3]
            })

print(f"Extracted {len(all_topics)} topics!")

with open('data/topics.json', 'w') as f:
    json.dump(all_topics, f, indent=2)
