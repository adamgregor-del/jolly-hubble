import os
import json
import time
from google import genai
from google.genai import types

# Ensure API key is set
if not os.environ.get("GEMINI_API_KEY"):
    print("ERROR: GEMINI_API_KEY environment variable is not set.")
    exit(1)

client = genai.Client()

def generate_topic(topic):
    prompt = f"""
    You are an expert educational content writer for students in grades 4-8.
    Topic: {topic['title']}
    Context 1: {topic['who1']}
    Context 2: {topic['who2']}

    Write two short historical articles about this topic. 
    - Article 1 must focus on "Impact & Legacy".
    - Article 2 must focus on "Origins & History".
    
    CRITICAL: 
    - Use concrete historical facts, dates, and numbers.
    - Write exactly 4 paragraphs per article.
    - Output MUST be strict JSON matching this exact schema, with NO markdown formatting, NO backticks. Just pure JSON.
    {{
        "article1": {{
            "title": "Article 1: {topic['title']} - Impact & Legacy",
            "paragraphs": [
                ["Sentence 1 of paragraph 1", "Sentence 2 of paragraph 1"],
                ["Sentence 1 of paragraph 2", "Sentence 2 of paragraph 2"]
            ]
        }},
        "article2": {{
            "title": "Article 2: {topic['title']} - Origins & History",
            "paragraphs": [
                ["Sentence 1 of paragraph 1", "Sentence 2 of paragraph 1"],
                ["Sentence 1 of paragraph 2", "Sentence 2 of paragraph 2"]
            ]
        }}
    }}
    """
    
    try:
        response = client.models.generate_content(
            model='gemini-3.6-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
            ),
        )
        return json.loads(response.text)
    except Exception as e:
        print(f"Error generating {topic['id']}: {e}")
        return None

# Load topics
with open('data/topics.json', 'r') as f:
    topics = json.load(f)

print(f"Loaded {len(topics)} topics to generate.")

results = {}
print("Starting generation for all topics...")
for i, topic in enumerate(topics):
    print(f"[{i+1}/{len(topics)}] Generating: {topic['id']}...")
    result = generate_topic(topic)
    if result:
        results[topic['id']] = result
    
    # Save partial results periodically so we don't lose data if it crashes
    if (i + 1) % 10 == 0:
        with open('data/generated_articles.json', 'w') as f:
            json.dump(results, f, indent=2)
    
    time.sleep(2) # rate limit buffer

# Save final results
with open('data/generated_articles.json', 'w') as f:
    json.dump(results, f, indent=2)

print("Saved all articles to data/generated_articles.json")
