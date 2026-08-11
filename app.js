/* Talking Calendar - Dual-Article Research & Paraphrase Hub Engine */
/* Clean Engine with Copy to Clipboard capabilities */

(function () {
  'use strict';

  function getArticlesForTopic(topic) {
    if (!topic) return null;

    const db = window.GENERATED_ARTICLES || window.GENERATED_ARTICLES_DB || window.OCTOBER_ARTICLES_DB;
    if (db && db[topic.id]) {
      const ext = db[topic.id];
      return {
        article1: ext.article1,
        article2: ext.article2
      };
    }

    // Check embedded topic articles
    if (topic.article1 && topic.article2) {
      return {
        article1: topic.article1,
        article2: topic.article2
      };
    }

    const isPerson = topic.type ? topic.type.includes("Person") : true;
    const sourceName = isPerson ? "Biography.com" : "Wikipedia";

    return {
      article1: {
        title: `Article 1: ${topic.title} - Impact & Legacy (${sourceName})`,
        paragraphs: [[`${topic.who1 || topic.title}`]]
      },
      article2: {
        title: `Article 2: ${topic.title} - Origins & History (${sourceName})`,
        paragraphs: [[`${topic.who2 || topic.title}`]]
      }
    };
  }

  const RAW_OCTOBER_DATA = [
  {
    "id": "oct-1-henry-ford",
    "month": "October",
    "day": "October 1",
    "dayNum": 1,
    "title": "Henry Ford introduces Model T (1908)",
    "type": "Person (Biography.com)",
    "connection": "Introduced the Model T automobile on October 1, 1908!",
    "emoji": "\ud83d\ude97",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Henry Ford introduces Model T is documented on Biography.com as a landmark historical subject from October 1.",
    "who2": "Henry Ford introduces Model T developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 1 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Henry Ford introduces Model T (1908) - Impact & Legacy",
      "paragraphs": [
        [
          "On October 1, 1908, Henry Ford officially introduced the Model T, forever changing American transportation.",
          "Before the Model T, cars were expensive luxury items reserved for the wealthy, often costing upwards of $2,000."
        ],
        [
          "By introducing the moving assembly line in 1913 at his Highland Park plant, Ford reduced the time it took to build a car from 12 hours to just 93 minutes.",
          "This incredible efficiency allowed Ford to lower the price of the Model T from $850 in 1908 to under $300 by the 1920s."
        ],
        [
          "Between 1908 and 1927, the Ford Motor Company produced more than 15 million Model T automobiles.",
          "The widespread ownership of these cars spurred the construction of thousands of miles of paved roads, gas stations, and suburban communities across the United States."
        ],
        [
          "In 1914, Ford raised worker wages to an unprecedented $5 per day and shortened the workday to eight hours, which helped build a strong American middle class.",
          "The lasting legacy of the Model T proved that mass production could make advanced technology accessible to everyday families."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Henry Ford introduces Model T (1908) - Origins & History",
      "paragraphs": [
        [
          "Henry Ford was born on July 30, 1863, in Greenfield Township, Michigan, and possessed a passionate interest in mechanics from childhood.",
          "After building his first experimental gas-powered vehicle, the Quadricycle, in 1896, Ford established the Ford Motor Company on June 16, 1903."
        ],
        [
          "In the years leading up to 1908, Ford and his team experimented with various vehicle designs named after letters of the alphabet, starting with the Model A.",
          "Ford wanted to create a simple, reliable car that could handle rugged rural roads without breaking down frequently."
        ],
        [
          "The team used a newly developed vanadium steel alloy, which made the Model T lighter and three times stronger than other contemporary automobiles.",
          "The vehicle was equipped with a 20-horsepower, four-cylinder engine that could reach top speeds of up to 45 miles per hour."
        ],
        [
          "The first production Model T was completed at the Piquette Avenue Plant in Detroit on September 27, 1908, and official sales began on October 1, 1908.",
          "With more than 10,000 orders placed in the first year alone, the Model T quickly established itself as a revolutionary milestone in automotive history."
        ]
      ]
    }
  },
  {
    "id": "oct-2-peanuts-comic-strip",
    "month": "October",
    "day": "October 2",
    "dayNum": 2,
    "title": "Peanuts Comic Strip first published (1950)",
    "type": "Event / Culture (Wikipedia)",
    "connection": "First published in national newspapers on October 2, 1950!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Peanuts Comic Strip first published is documented on Wikipedia as a landmark historical subject from October 2.",
    "who2": "Peanuts Comic Strip first published developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 2 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Peanuts Comic Strip first published (1950) - Impact & Legacy",
      "paragraphs": [
        [
          "When Peanuts debuted in 1950, nobody expected it to become one of the most influential comic strips in modern print history.",
          "Over its 50-year run, the strip reached an incredible audience of over 355 million readers across 75 countries and was translated into 21 different languages."
        ],
        [
          "The success of the newspaper strip quickly expanded into iconic animated television specials and major pop culture milestones.",
          "In December 1965, 'A Charlie Brown Christmas' aired for the first time, winning an Emmy Award, and in 1968, NASA officially adopted Snoopy as their safety mascot for human spaceflight missions."
        ],
        [
          "Peanuts also revolutionized global commercial licensing and merchandising for newspaper comics throughout the late twentieth century.",
          "By the 1980s, Charles Schulz's characters were generating over one billion dollars annually in retail sales, appearing on greeting cards, apparel, and major national ad campaigns."
        ],
        [
          "The enduring legacy of Charles Schulz's work completely reshaped how cartoonists approached emotion, anxiety, and philosophy in daily comics.",
          "When Schulz retired, the final original daily strip was published on February 13, 2000, concluding a historic run that forever changed American culture."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Peanuts Comic Strip first published (1950) - Origins & History",
      "paragraphs": [
        [
          "Before creating his masterwork, artist Charles M. Schulz drew a weekly panel comic called 'Li'l Folks' starting in June 1947.",
          "Published in his hometown newspaper, the St. Paul Pioneer Press, this early comic featured prototype versions of quiet children who enjoyed classical music and dogs that resembled Snoopy."
        ],
        [
          "In May 1950, Schulz traveled to New York City to present his newest comic ideas to the publication team at United Feature Syndicate.",
          "The syndicate executives loved the cartoon concept but insisted on renaming the strip 'Peanuts', a decision Schulz personally disliked because he thought the title lacked dignity."
        ],
        [
          "The official national publication of the Peanuts comic strip occurred on October 2, 1950, debuting in seven American newspapers.",
          "That first panel showed Charlie Brown walking past two neighborhood friends, Shermy and Patty, while Snoopy appeared as a regular four-legged beagle."
        ],
        [
          "Throughout the early 1950s, the comic strip expanded rapidly in both visual detail and character development.",
          "Charlie Brown gained his famous zigzag pattern on his shirt on December 21, 1950, and future core characters Lucy and Linus were introduced to readers in 1952."
        ]
      ]
    }
  },
  {
    "id": "oct-3-mohandas-gandhi",
    "month": "October",
    "day": "October 2",
    "dayNum": 2,
    "title": "Mohandas Gandhi (b. 1869)",
    "type": "Person (Biography.com)",
    "connection": "Born on October 2, 1869, commemorated as International Non-Violence Day!",
    "emoji": "\ud83d\udd4a\ufe0f",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Mohandas Gandhi is documented on Biography.com as a landmark historical subject from October 2.",
    "who2": "Mohandas Gandhi developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 2 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Mohandas Gandhi (b. 1869) - Impact & Legacy",
      "paragraphs": [
        [
          "Mohandas Gandhi's philosophy of nonviolent resistance, known as Satyagraha, transformed the struggle for Indian independence from British rule.",
          "His leadership inspired millions of everyday citizens to participate in peaceful protests, boycotts, and marches during the early-to-mid twentieth century."
        ],
        [
          "In 1930, Gandhi led the famous 240-mile Salt March to the Arabian Sea to protest harsh British salt taxes.",
          "This massive demonstration led to the arrest of over 60,000 Indians, bringing international media attention to the injustice of colonial rule."
        ],
        [
          "Gandhi's successful methods deeply influenced future global leaders, including Dr. Martin Luther King Jr. during the American Civil Rights Movement in the 1950s and 1960s.",
          "Nelson Mandela also utilized Gandhi's principles of peaceful resistance to fight against apartheid in South Africa."
        ],
        [
          "India gained full independence on August 15, 1947, largely due to the national unity forged through Gandhi's leadership.",
          "Today, his birthday on October 2 is celebrated globally as the International Day of Non-Violence to honor his enduring historical legacy."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Mohandas Gandhi (b. 1869) - Origins & History",
      "paragraphs": [
        [
          "Mohandas Karamchand Gandhi was born on October 2, 1869, in Porbandar, a coastal town in western India.",
          "Raised in a devout Hindu family, he learned principles of self-discipline, vegetarianism, and respect for all living beings at an early age."
        ],
        [
          "At age 18 in 1888, Gandhi traveled to London, England, to study law at the Inner Temple.",
          "He successfully passed the bar exam in June 1891 and returned to India to begin practicing law as a barrister."
        ],
        [
          "In 1893, Gandhi accepted a one-year legal contract in South Africa, where he immediately faced severe racial discrimination.",
          "After being thrown off a train in Pietermaritzburg for sitting in a first-class carriage, he spent the next 21 years fighting for Indian civil rights in South Africa."
        ],
        [
          "Gandhi returned to India in 1915 as a seasoned activist and assumed leadership of the Indian National Congress in 1921.",
          "Over the next three decades, he organized nationwide campaigns for economic independence and social reform until his assassination in 1948."
        ]
      ]
    }
  },
  {
    "id": "oct-4-sos-established",
    "month": "October",
    "day": "October 3",
    "dayNum": 3,
    "title": "SOS established (1906)",
    "type": "Event / History (Wikipedia)",
    "connection": "Adopted as the international distress signal on October 3, 1906!",
    "emoji": "\ud83d\udce1",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "SOS established is documented on Wikipedia as a landmark historical subject from October 3.",
    "who2": "SOS established developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 3 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: SOS established (1906) - Impact & Legacy",
      "paragraphs": [
        [
          "The establishment of SOS in 1906 completely transformed international safety at sea by creating the world's first universal distress signal.",
          "Before this unified standard was created, ships from different countries and private radio companies used competing codes that often led to confusion during life-threatening emergencies."
        ],
        [
          "One of the most famous historical uses of the signal occurred on the night of April 14, 1912, when the RMS Titanic struck an iceberg in the North Atlantic.",
          "Wireless operators sent out both the older CQD signal and the new SOS call, which alerted the nearby Carpathia and helped rescue 705 surviving passengers."
        ],
        [
          "Throughout the twentieth century, this distinct Morse code sequence saved thousands of lives across global oceans during naval battles, shipwrecks, and severe storms.",
          "Because the pattern of three dots, three dashes, and three dots was so simple, the letters SOS quickly entered popular culture worldwide as the ultimate symbol for needing emergency assistance."
        ],
        [
          "Even though international maritime authorities officially replaced Morse code distress calls with advanced satellite systems in 1999, the impact of SOS remains profound.",
          "It established a lasting standard for global safety cooperation that still influences modern search-and-rescue operations today."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: SOS established (1906) - Origins & History",
      "paragraphs": [
        [
          "After Italian inventor Guglielmo Marconi developed practical wireless telegraphy in the late 1890s, ocean vessels began installing radios to communicate with land and other ships.",
          "However, as radio traffic grew, sailors quickly realized that ships lacked a single, agreed-upon signal to request emergency help."
        ],
        [
          "In 1904, the Marconi Company attempted to solve this issue by creating the distress call CQD, which combined a general call signal with the letter D for danger.",
          "Unfortunately, CQD was frequently misheard by land operators because it sounded similar to standard non-emergency telegraph codes used at the time."
        ],
        [
          "To solve this dangerous problem, representatives from 29 nations gathered at the International Radio Telegraphic Convention in Berlin, Germany, on October 3, 1906.",
          "During this historic conference, delegates officially approved a unique visual and audio sequence composed of three short dots, three long dashes, and three short dots."
        ],
        [
          "Contrary to popular myth, the letters did not stand for Save Our Ship or Save Our Souls, but were chosen simply because the pattern was easy for anyone to transmit and recognize.",
          "The new standard officially took effect on July 1, 1908, permanently establishing SOS as the international call for help."
        ]
      ]
    }
  },
  {
    "id": "oct-5-robert-lawson",
    "month": "October",
    "day": "October 4",
    "dayNum": 4,
    "title": "Robert Lawson, author (b. 1892)",
    "type": "Person (Biography.com)",
    "connection": "Born on October 4, 1892, winning both the Newbery and Caldecott Medals!",
    "emoji": "\ud83d\udcda",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Robert Lawson, author is documented on Biography.com as a landmark historical subject from October 4.",
    "who2": "Robert Lawson, author developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 4 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Robert Lawson, author (b. 1892) - Impact & Legacy",
      "paragraphs": [
        [
          "Robert Lawson left an unprecedented mark on American children's literature as the first person to win both major literary honors in the field.",
          "In 1941, he earned the Caldecott Medal for his artwork in They Were Strong and Good, and in 1945, he won the Newbery Medal for writing Rabbit Hill."
        ],
        [
          "Lawson's artistic influence expanded significantly when he illustrated Munro Leaf's classic 1936 book, The Story of Ferdinand.",
          "His detailed black-and-white ink drawings helped the book become an international bestseller, at one point selling over 14,000 copies per week."
        ],
        [
          "Beyond his artistic talent, Lawson revolutionized historical fiction for young readers with his 1939 masterpiece, Ben and Me.",
          "By telling the biography of Benjamin Franklin through the eyes of a clever mouse named Amos, he created an engaging strategy to teach 18th-century American history."
        ],
        [
          "Today, Lawson is documented on Biography.com as a landmark historical figure born on October 4, 1892, whose work set a standard for quality in publishing.",
          "His unique dual victory of both the Caldecott and Newbery Medals remains one of the rarest achievements in children's literary history."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Robert Lawson, author (b. 1892) - Origins & History",
      "paragraphs": [
        [
          "Robert Lawson was born on October 4, 1892, in New York City and spent most of his childhood growing up in Montclair, New Jersey.",
          "Determined to pursue an artistic career, he attended the New York School of Fine and Applied Art from 1911 to 1914."
        ],
        [
          "During World War I, Lawson enlisted in the United States Army and served overseas in France from 1917 to 1919.",
          "He was assigned to the 40th Engineers Camouflage Section, where artists used visual design principles to disguise military equipment on European battlefields."
        ],
        [
          "After returning to the United States, Lawson married fellow illustrator Marie Abrams in 1922 and established a home in Connecticut.",
          "Throughout the 1920s, he worked as a commercial illustrator, creating visual graphics for magazines, advertisements, and greeting cards."
        ],
        [
          "By the late 1930s, Lawson transitioned into creating books, ultimately writing and illustrating 17 of his own original titles before his death on May 26, 1957.",
          "His rich personal history\u2014spanning early art school, wartime military camouflage, and decades of studio practice\u2014shaped his successful career as a historical author."
        ]
      ]
    }
  },
  {
    "id": "oct-6-sputnik-1",
    "month": "October",
    "day": "October 4",
    "dayNum": 4,
    "title": "Sputnik I launched (1957)",
    "type": "Event / Space (Wikipedia)",
    "connection": "Launched into Earth orbit on October 4, 1957, beginning the Space Age!",
    "emoji": "\ud83d\ude80",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Sputnik I launched is documented on Wikipedia as a landmark historical subject from October 4.",
    "who2": "Sputnik I launched developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 4 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Sputnik I launched (1957) - Impact & Legacy",
      "paragraphs": [
        [
          "The launch of Sputnik I on October 4, 1957, shocked the public and instantly transformed global politics.",
          "It demonstrated that the Soviet Union possessed advanced technology capable of reaching outer space before any other nation."
        ],
        [
          "In response, the United States entered an intense period of competition known as the Space Race.",
          "To lead American efforts, President Dwight D. Eisenhower signed the National Aeronautics and Space Act on July 29, 1958, creating NASA."
        ],
        [
          "The launch also triggered major changes in American education and scientific research.",
          "Congress passed the National Defense Education Act in 1958, providing over $1 billion to improve science, mathematics, and technology programs in schools."
        ],
        [
          "Today, Sputnik I is celebrated as the dawn of the space age.",
          "Its legacy includes thousands of modern satellites that enable global communication, weather forecasting, and GPS navigation."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Sputnik I launched (1957) - Origins & History",
      "paragraphs": [
        [
          "On October 4, 1957, the Soviet Union launched Sputnik I from the Baikonur Cosmodrome in Kazakhstan.",
          "The satellite was a polished metal sphere measuring 23 inches in diameter and weighing 183.9 pounds."
        ],
        [
          "Soviet engineer Sergey Korolev led the secret development team that adapted an R-7 intercontinental ballistic missile for the launch.",
          "The massive rocket delivered enough energy to boost Sputnik I to an orbital speed of about 18,000 miles per hour."
        ],
        [
          "Equipped with four long radio antennas, the satellite transmitted a distinct radio signal that could be heard worldwide.",
          "It broadcasted its famous 'beep-beep' signal for 21 days until its chemical batteries finally ran out."
        ],
        [
          "Sputnik I orbited Earth every 96 minutes, traveling millions of miles and completing 1,440 orbits over three months.",
          "On January 4, 1958, the historic satellite reentered Earth's atmosphere and burned up completely."
        ]
      ]
    }
  },
  {
    "id": "oct-7-ray-kroc",
    "month": "October",
    "day": "October 5",
    "dayNum": 5,
    "title": "Ray Kroc, founder of McDonald's (b. 1902)",
    "type": "Person (Biography.com)",
    "connection": "Born on October 5, 1902, building McDonald's into a global restaurant chain!",
    "emoji": "\ud83c\udf54",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Ray Kroc, founder of McDonald's is documented on Biography.com as a landmark historical subject from October 5.",
    "who2": "Ray Kroc, founder of McDonald's developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 5 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Ray Kroc, founder of McDonald's (b. 1902) - Impact & Legacy",
      "paragraphs": [
        [
          "Ray Kroc transformed the restaurant industry by turning a small California burger stand into a global fast-food empire.",
          "By the time of his death in 1984, McDonald's was serving millions of customers daily across more than 30 countries."
        ],
        [
          "Kroc created a strict system of uniformity where every McDonald's location offered the exact same menu, taste, and cleanliness standards.",
          "This innovative franchising model established McDonald's as a household name and reshaped American dining habits during the late 20th century."
        ],
        [
          "The success of the business created jobs for millions of workers, while popularizing quick service and standardized drive-thru windows.",
          "Today, the brand operates over 38,000 locations worldwide, serving as an iconic symbol of American entrepreneurship."
        ],
        [
          "Beyond business, Kroc established the Kroc Foundation in 1965 to support medical research into diabetes and arthritis.",
          "He also purchased the San Diego Padres baseball team in 1974, leaving a lasting mark on American culture, sports, and philanthropy."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Ray Kroc, founder of McDonald's (b. 1902) - Origins & History",
      "paragraphs": [
        [
          "Born on October 5, 1902, in Oak Park, Illinois, Ray Kroc worked a variety of energetic sales jobs during his early life.",
          "He served as a Red Cross ambulance driver during World War I before spending seventeen years selling paper cups across the country."
        ],
        [
          "By the early 1950s, Kroc was working as an exclusive distributor for a commercial milkshake machine called the Multimixer.",
          "In 1954, he traveled to San Bernardino, California, after brothers Richard and Maurice McDonald ordered eight of his mixers for a single restaurant."
        ],
        [
          "Impressed by the brothers' speedy assembly-line kitchen system, Kroc convinced them to let him franchise their restaurant concept nationwide.",
          "He opened his first official McDonald's franchise in Des Plaines, Illinois, on April 15, 1955, and incorporated the growing company."
        ],
        [
          "After years of rapid expansion, Kroc purchased the full rights to the McDonald's brand from the original brothers in 1961 for 2.7 million dollars.",
          "This pivotal transaction allowed Kroc to take total control and guide the business into an international food phenomenon."
        ]
      ]
    }
  },
  {
    "id": "oct-8-neil-degrasse-tyson",
    "month": "October",
    "day": "October 5",
    "dayNum": 5,
    "title": "Neil deGrasse Tyson, astronomer (b. 1958)",
    "type": "Person (Biography.com)",
    "connection": "Born on October 5, 1958, leading astronomer and Hayden Planetarium director!",
    "emoji": "\ud83c\udf0c",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Neil deGrasse Tyson, astronomer is documented on Biography.com as a landmark historical subject from October 5.",
    "who2": "Neil deGrasse Tyson, astronomer developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 5 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Neil deGrasse Tyson, astronomer (b. 1958) - Impact & Legacy",
      "paragraphs": [
        [
          "In 1996, Neil deGrasse Tyson became the director of the Hayden Planetarium at the American Museum of Natural History in New York City.",
          "Through this prominent leadership position, he redesigned the planetarium and transformed how millions of visitors learn about space and astronomy."
        ],
        [
          "In 2000, Tyson made the bold decision to omit Pluto from the planet exhibit at the planetarium, leading to intense debate among scientists.",
          "The International Astronomical Union officially reclassified Pluto as a dwarf planet in 2006, proving that Tyson's scientific vision was ahead of its time."
        ],
        [
          "Tyson hosted the popular television series Cosmos: A Spacetime Odyssey in 2014, which was broadcast in over 135 countries.",
          "He also launched his hit radio show and podcast StarTalk in 2009 to successfully bridge the gap between pop culture and modern science."
        ],
        [
          "In 2004, President George W. Bush appointed Tyson to serve on the Commission on Implementation of United States Space Exploration Policy.",
          "Tyson received the NASA Distinguished Public Service Medal in 2004 for his incredible efforts to inspire young students across the country."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Neil deGrasse Tyson, astronomer (b. 1958) - Origins & History",
      "paragraphs": [
        [
          "Neil deGrasse Tyson was born on October 5, 1958, in New York City, where he grew up fascinated by the night sky.",
          "At age 9, a visit to the Hayden Planetarium sparked his lifelong passion for studying the universe and stars."
        ],
        [
          "By the age of 15, Tyson was already giving public lectures on astronomy and earning money for his deep scientific knowledge.",
          "Famous astronomer Carl Sagan personally invited 17-year-old Tyson to visit Cornell University in 1975 to encourage his scientific career."
        ],
        [
          "Tyson earned his Bachelor of Arts degree in Physics from Harvard University in 1980, where he was also an active wrestler.",
          "He continued his advanced studies and successfully earned a Doctorate in Astrophysics from Columbia University in 1991."
        ],
        [
          "From 1991 to 1994, Tyson worked as a postdoctoral research associate at Princeton University, studying star formation and distant galaxies.",
          "He joined the staff at the Hayden Planetarium in 1994, returning full circle to the very place that inspired him as a child."
        ]
      ]
    }
  },
  {
    "id": "oct-9-thomas-edison-motion-picture",
    "month": "October",
    "day": "October 6",
    "dayNum": 6,
    "title": "Thomas Edison shows first motion picture (1889)",
    "type": "Person (Biography.com)",
    "connection": "Demonstrated the first working motion picture film on October 6, 1889!",
    "emoji": "\ud83c\udfac",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Thomas Edison shows first motion picture is documented on Biography.com as a landmark historical subject from October 6.",
    "who2": "Thomas Edison shows first motion picture developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 6 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Thomas Edison shows first motion picture (1889) - Impact & Legacy",
      "paragraphs": [
        [
          "On October 6, 1889, Thomas Edison demonstrated a short moving picture clip at his lab in West Orange, New Jersey, changing global entertainment forever.",
          "This early breakthrough laid the foundation for the modern movie industry, which eventually grew into a multi-billion dollar global force."
        ],
        [
          "Beyond fictional storytelling, motion pictures quickly became a revolutionary tool for documenting real historical events, nature, and news around the world.",
          "By the mid-1890s, early films allowed ordinary citizens to observe far-off places and world leaders they would otherwise never have seen."
        ],
        [
          "Edison's visual breakthrough inspired his team to build the Black Maria in 1893, which was recognized as the world's very first film production studio.",
          "This invention launched a rapid wave of innovation among worldwide engineers, leading to theater projectors and synchronized audio by the late 1920s."
        ],
        [
          "More than 130 years after that initial 1889 demonstration, visual storytelling remains one of humanity's most powerful art forms.",
          "Every digital movie, streaming television show, and online video recorded today traces its direct roots back to Edison's original motion picture experiments."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Thomas Edison shows first motion picture (1889) - Origins & History",
      "paragraphs": [
        [
          "In 1888, American inventor Thomas Edison decided to design a device that would do for the eye what his phonograph had accomplished for the ear.",
          "Edison assigned his skilled assistant, William Kennedy Laurie Dickson, to engineer a motion picture camera capable of capturing rapid movement."
        ],
        [
          "Dickson and his research team utilized George Eastman's newly developed flexible celluloid film, cutting it into strips 35 millimeters wide.",
          "They built an innovative camera called the Kinetograph, which captured rapidly sequential photographs at speeds up to 46 frames per second."
        ],
        [
          "When Edison returned to his laboratory from a trip to Europe on October 6, 1889, Dickson presented his new projection test called the Kinetophonograph.",
          "The brief motion picture clip showed Dickson stepping forward, lifting his hat, and speaking greeting words synchronized with a recorded audio track."
        ],
        [
          "Edison filed official patents for his Kinetoscope viewing box in 1891, allowing individual viewers to watch short films through a peep-hole viewer.",
          "By April 1894, the first public Kinetoscope parlor opened in New York City, formally kicking off the commercial film age in human history."
        ]
      ]
    }
  },
  {
    "id": "oct-10-rose-national-flower",
    "month": "October",
    "day": "October 7",
    "dayNum": 7,
    "title": "Rose designated as U.S. National Flower (1986)",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Signed into law as the official U.S. National Flower on October 7, 1986!",
    "emoji": "\ud83c\udf39",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Rose designated as U.S. National Flower is documented on Wikipedia as a landmark historical subject from October 7.",
    "who2": "Rose designated as U.S. National Flower developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 7 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Rose designated as U.S. National Flower (1986) - Impact & Legacy",
      "paragraphs": [
        [
          "On November 20, 1986, President Ronald Reagan signed Proclamation 5574, officially declaring the rose as the national floral emblem of the United States.",
          "This landmark decision came shortly after Congress passed Senate Joint Resolution 159 in October 1986, giving the country its first official national flower."
        ],
        [
          "The designation highlighted the flower's deep presence across all 50 states, where wild and cultivated varieties thrive.",
          "Long before the 1986 federal law, individual states had already adopted the rose, including Iowa in 1897, Georgia in 1916, North Dakota in 1942, and New York in 1955."
        ],
        [
          "The official status elevated a massive domestic floriculture industry that grows over 100 million stems annually for public celebration.",
          "Famous events like the Tournament of Roses Parade in Pasadena, California, which started in 1890, gained renewed national significance as standard-bearers for America's favorite bloom."
        ],
        [
          "Today, the rose stands alongside the bald eagle and the star-spangled banner as an enduring emblem of American pride.",
          "It serves as the backdrop for presidential announcements in the historic White House Rose Garden, which was established in 1913 by First Lady Ellen Wilson and redesigned in 1962."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Rose designated as U.S. National Flower (1986) - Origins & History",
      "paragraphs": [
        [
          "The history of the rose on the American continent spans far longer than the history of the United States itself.",
          "Fossilized remains discovered in Colorado prove that wild roses grew in North America over 35 million years ago, and Native American tribes harvested rose hips for medicine and tea for centuries."
        ],
        [
          "During the 20th century, lawmakers spent more than 30 years debating which plant should become the country's national floral emblem.",
          "In 1955, Senator Everett Dirksen made national headlines by campaigning for the marigold, while other politicians championed the corn tassel, mountain laurel, or apple blossom."
        ],
        [
          "The movement to choose the rose finally gained unstoppable political support in 1985 when Senator J. Bennett Johnston introduced legislation in Congress.",
          "On October 7, 1986, the U.S. House of Representatives passed the joint resolution, successfully completing the final legislative step."
        ],
        [
          "President Ronald Reagan finalized the law on November 20, 1986, by issuing Public Law 99-449 during a ceremony in the White House Rose Garden.",
          "In his ceremony speech, President Reagan declared that humans have loved roses throughout history, officially enshrining the flower in United States law."
        ]
      ]
    }
  },
  {
    "id": "oct-11-great-chicago-fire",
    "month": "October",
    "day": "October 8",
    "dayNum": 8,
    "title": "The Great Chicago Fire started (1871)",
    "type": "Event / History (Wikipedia)",
    "connection": "Began on October 8, 1871, leading to modern city building codes!",
    "emoji": "\ud83d\udd25",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "The Great Chicago Fire started is documented on Wikipedia as a landmark historical subject from October 8.",
    "who2": "The Great Chicago Fire started developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 8 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: The Great Chicago Fire started (1871) - Impact & Legacy",
      "paragraphs": [
        [
          "The Great Chicago Fire of October 1871 left a devastating impact on the city, destroying over 3.3 square miles of land in just two days.",
          "Approximately 300 people lost their lives, and more than 100,000 residents were left homeless in the immediate aftermath of the blaze."
        ],
        [
          "The disaster consumed over 17,000 structures, including important business districts, government buildings, and financial institutions.",
          "Total property damage was estimated at $200 million, which represented about a third of the entire city's valuation at that time."
        ],
        [
          "Despite the immense tragedy, Chicago began rebuilding almost immediately with millions of dollars in aid sent from around the world.",
          "Innovative architects rushed to the city, using revolutionary steel-frame construction to build early modern skyscrapers that transformed urban architecture."
        ],
        [
          "In response to the catastrophe, city leaders created strict modern building codes that banned wood construction in downtown areas.",
          "Today, the legacy of the 1871 fire lives on every October during National Fire Prevention Week, which was established to teach fire safety across the nation."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: The Great Chicago Fire started (1871) - Origins & History",
      "paragraphs": [
        [
          "On the evening of October 8, 1871, a fire broke out in a small barn owned by Patrick and Catherine O'Leary on DeKoven Street.",
          "Chicago was dangerously dry that autumn, having received only about one inch of rainfall between July and October."
        ],
        [
          "At the time, most of Chicago was constructed almost entirely of wood, including thousands of buildings and over 500 miles of wooden sidewalks.",
          "Strong winds blowing from the southwest rapidly pushed the flames toward the crowded, wood-filled downtown area."
        ],
        [
          "Exhausted firefighters, who had battled a major fire just the night before, were mistakenly dispatched to the wrong neighborhood at first.",
          "By midnight, the rapidly spreading inferno had destroyed the main city waterworks, cutting off the water supply and rendering fire hoses useless."
        ],
        [
          "The fire burned uncontrollably for over 36 hours until a welcome rainstorm finally helped extinguish the flames on the night of October 9.",
          "Although a famous legend blamed Mrs. O'Leary's cow for kicking over a lantern, historians today agree the true spark remains a mystery."
        ]
      ]
    }
  },
  {
    "id": "oct-12-james-marshall-gold",
    "month": "October",
    "day": "October 8",
    "dayNum": 8,
    "title": "James Marshall, first to find gold in CA (b. 1810)",
    "type": "Person (Biography.com)",
    "connection": "Discovered gold at Sutter's Mill, triggering the California Gold Rush!",
    "emoji": "\ud83e\ude99",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "James Marshall, first to find gold in CA is documented on Biography.com as a landmark historical subject from October 8.",
    "who2": "James Marshall, first to find gold in CA developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 8 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: James Marshall, first to find gold in CA (b. 1810) - Impact & Legacy",
      "paragraphs": [
        [
          "James Marshall's discovery on January 24, 1848, triggered the largest mass migration in United States history.",
          "By 1849, approximately 80,000 gold seekers, popularly known as 'forty-niners,' traveled to California in search of riches."
        ],
        [
          "Between 1848 and 1855, more than 300,000 people from around the world arrived in the region.",
          "This rapid population surge enabled California to officially become the 31st state on September 9, 1850."
        ],
        [
          "Despite starting a multi-million dollar boom, Marshall never achieved financial success from his find.",
          "Invasive gold seekers trampled his property and destroyed his business, leading the state legislature to grant him a modest monthly pension in 1872."
        ],
        [
          "Marshall died penniless on August 10, 1885, at the age of 74 in a small cabin near Coloma.",
          "Today, his legacy is preserved at the Marshall Gold Discovery State Historic Park, which hosts thousands of educational visitors each year."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: James Marshall, first to find gold in CA (b. 1810) - Origins & History",
      "paragraphs": [
        [
          "James Wilson Marshall was born on October 8, 1810, in Hopewell Township, New Jersey.",
          "He learned the craft of carpentry from his father before leaving home in 1834 to head west to Missouri."
        ],
        [
          "In 1844, Marshall joined an overland wagon train to Oregon, and he relocated south into California in 1845.",
          "He soon gained employment with pioneer John Sutter, building structures and machinery near Sacramento."
        ],
        [
          "In August 1847, Marshall partnered with Sutter to build a water-powered sawmill along the South Fork of the American River in Coloma.",
          "Construction took several months, requiring workers to deepen the ditch that redirected river water to turn the heavy mill wheel."
        ],
        [
          "On the morning of January 24, 1848, Marshall inspected the water channel and discovered small, shiny metal particles in the silt.",
          "Laboratory tests confirmed the flakes were high-quality gold, forever changing the course of Western history."
        ]
      ]
    }
  },
  {
    "id": "oct-13-first-two-way-telephone",
    "month": "October",
    "day": "October 9",
    "dayNum": 9,
    "title": "First two-way telephone conversation (1876)",
    "type": "Event / Science (Wikipedia)",
    "connection": "Alexander Graham Bell conducted the first two-way long distance call on Oct 9!",
    "emoji": "\ud83d\udcde",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "First two-way telephone conversation is documented on Wikipedia as a landmark historical subject from October 9.",
    "who2": "First two-way telephone conversation developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 9 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: First two-way telephone conversation (1876) - Impact & Legacy",
      "paragraphs": [
        [
          "The successful long-distance call on October 9, 1876, changed human communication forever.",
          "By proving that voices could travel clearly over 2 miles of telegraph wire, Alexander Graham Bell and Thomas Watson proved the telephone was a practical tool for daily life."
        ],
        [
          "Following this breakthrough, telephone networks expanded at a rapid pace across the United States.",
          "Within just one year, by 1877, the first commercial telephone lines were installed, connecting businesses and homes."
        ],
        [
          "Instant communication reshaped businesses, emergency services, and personal relationships in the late 19th century.",
          "Instead of waiting days for letters or reading brief telegrams, people could now converse across cities in real time."
        ],
        [
          "Today, the technology born from that 1876 experiment forms the foundation of global telecommunications.",
          "The 2-mile conversation between Boston and Cambridge paved the way for modern smartphones that connect billions of people instantly."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: First two-way telephone conversation (1876) - Origins & History",
      "paragraphs": [
        [
          "In early 1876, inventor Alexander Graham Bell received a official patent for his original telephone design.",
          "Although Bell famously called his assistant Thomas Watson inside a lab in March 1876, they still needed to test if voice signals could travel long distances outdoors."
        ],
        [
          "On October 9, 1876, Bell and Watson set up a landmark experiment across a 2-mile telegraph wire.",
          "Bell stayed at the Walworth Manufacturing Company in Boston, while Watson waited at the Riverside Press building in Cambridge, Massachusetts."
        ],
        [
          "When Bell spoke into his transmitter, Watson heard his voice clearly coming through the receiver 2 miles away.",
          "Watson shouted back a reply that Bell understood, marking the very first successful two-way telephone conversation in history."
        ],
        [
          "To ensure the experiment was accurate, both men carefully wrote down every word spoken during the test.",
          "The comparison of their written logs confirmed that real-time two-way speech over a distance was officially a success."
        ]
      ]
    }
  },
  {
    "id": "oct-14-leif-erikson-day",
    "month": "October",
    "day": "October 9",
    "dayNum": 9,
    "title": "Leif Erikson Day",
    "type": "Event / History (Wikipedia)",
    "connection": "Honors the Norse explorer who reached North America around 1000 AD!",
    "emoji": "\u26f5",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Leif Erikson Day is documented on Wikipedia as a landmark historical subject from October 9.",
    "who2": "Leif Erikson Day developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 9 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Leif Erikson Day - Impact & Legacy",
      "paragraphs": [
        [
          "Leif Erikson was a famous Norse explorer who led a daring expedition across the Atlantic Ocean around the year 1000 AD.",
          "With a brave crew of 35 men, he sailed west from Greenland and landed in a lush region he named Vinland, which is located in modern-day Canada."
        ],
        [
          "In 1960, archaeologists discovered the physical remains of an ancient Norse settlement at L'Anse aux Meadows in Newfoundland, Canada.",
          "This monumental archaeological discovery proved that European explorers reached North America nearly 500 years before Christopher Columbus arrived in 1492."
        ],
        [
          "To honor these historical achievements, President Lyndon B. Johnson signed a national proclamation in 1964 after Congress passed Public Law 88-566.",
          "Since that historic vote, every United States president issues an annual statement on October 9 to celebrate Nordic heritage and adventurous spirits."
        ],
        [
          "Today, Leif Erikson Day inspires young students to study ancient maritime navigation, ship design, and early Atlantic ocean trade routes.",
          "The enduring legacy of Erikson's journey reminds communities around the world of the power of exploration and cross-cultural history."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Leif Erikson Day - Origins & History",
      "paragraphs": [
        [
          "The specific date chosen for Leif Erikson Day, October 9, connects directly to an important moment in 19th-century American history.",
          "On October 9, 1825, a small ship named Restauration safely arrived in New York Harbor from Stavanger, Norway, carrying a group of 52 organized immigrants."
        ],
        [
          "As Scandinavian communities expanded across the Midwest, local leaders advocated for an official holiday to honor their ancient and modern pioneers.",
          "During the Norse-American Centennial in 1925, President Calvin Coolidge officially recognized Leif Erikson as the first European explorer to discover the American continent."
        ],
        [
          "State governments took early action to establish the holiday long before it became a nationwide federal observation.",
          "Wisconsin became the very first U.S. state to officially adopt Leif Erikson Day in 1929, and Minnesota passed similar state legislation in 1931."
        ],
        [
          "Finally, on September 2, 1964, the United States Congress authorized and requested the President to proclaim October 9 as Leif Erikson Day every year.",
          "This decision brought decades of historical advocacy to a successful close and created a permanent tradition observed across the nation."
        ]
      ]
    }
  },
  {
    "id": "oct-15-panama-canal",
    "month": "October",
    "day": "October 10",
    "dayNum": 10,
    "title": "Panama Canal connects to the Atlantic ocean",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Connected the Atlantic and Pacific oceans, revolutionizing global shipping!",
    "emoji": "\ud83d\udea2",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Panama Canal connects to the Atlantic ocean is documented on Wikipedia as a landmark historical subject from October 10.",
    "who2": "Panama Canal connects to the Atlantic ocean developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 10 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Panama Canal connects to the Atlantic ocean - Impact & Legacy",
      "paragraphs": [
        [
          "The opening of the 50-mile Panama Canal transformed global maritime trade by directly connecting the Atlantic Ocean to the Pacific Ocean.",
          "Before its completion, ships traveling between New York City and San Francisco had to sail around the treacherous southern tip of South America, adding over 8,000 miles to their journey."
        ],
        [
          "Today, approximately 13,000 to 14,000 vessels travel through this crucial waterway every single year.",
          "By allowing ships to bypass Cape Horn, the canal saves companies up to 20 days of travel time and millions of gallons of fuel."
        ],
        [
          "In June 2016, a massive 5.25 billion dollar expansion project was completed to accommodate giant modern cargo ships known as Neopanamax vessels.",
          "This engineering upgrade doubled the canal's total cargo capacity, allowing ships carrying up to 14,000 shipping containers to pass through smoothly."
        ],
        [
          "On December 31, 1999, the United States officially transferred full ownership and control of the canal to the Republic of Panama.",
          "Today, the Panama Canal Authority successfully manages this world wonder, generating over 2 billion dollars in annual revenue for the nation's economy."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Panama Canal connects to the Atlantic ocean - Origins & History",
      "paragraphs": [
        [
          "The dream of creating a shortcut through Central America began centuries ago, but the French made the first major construction attempt in 1881.",
          "Led by Ferdinand de Lesseps, the project collapsed due to financial trouble and deadly outbreaks of malaria and yellow fever that killed over 20,000 workers."
        ],
        [
          "In November 1903, the United States recognized Panama's independence from Colombia and signed the Hay-Bunau-Varilla Treaty.",
          "The U.S. government purchased the remaining French canal equipment and land rights for 40 million dollars to begin their own construction efforts in 1904."
        ],
        [
          "Chief Sanitary Officer Dr. William Gorgas led strict sanitation programs to eradicate mosquito breeding grounds, dramatically reducing disease among the workforce.",
          "More than 56,000 workers used massive steam shovels and dynamite to excavate millions of cubic yards of rock through the dangerous Gaillard Cut."
        ],
        [
          "A historic milestone occurred on October 10, 1913, when President Woodrow Wilson pressed a button in Washington, D.C., triggering an explosion that destroyed the Gamboa Dike and flooded the canal basin.",
          "The Panama Canal officially opened on August 15, 1914, when the steamship SS Ancon made the very first successful transit through the new locks."
        ]
      ]
    }
  },
  {
    "id": "oct-16-eleanor-roosevelt",
    "month": "October",
    "day": "October 11",
    "dayNum": 11,
    "title": "Eleanor Roosevelt, former First Lady (b. 1884)",
    "type": "Person (Biography.com)",
    "connection": "First Lady for 12 years and chair of UN Human Rights commission!",
    "emoji": "\ud83c\udf1f",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Eleanor Roosevelt, former First Lady is documented on Biography.com as a landmark historical subject from October 11.",
    "who2": "Eleanor Roosevelt, former First Lady developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 11 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Eleanor Roosevelt, former First Lady (b. 1884) - Impact & Legacy",
      "paragraphs": [
        [
          "Eleanor Roosevelt served as First Lady of the United States from 1933 to 1945, completely redefining the role for future generations.",
          "She was the first First Lady to hold regular news conferences, conducting over 348 press sessions specifically for female reporters who were often excluded from main media events."
        ],
        [
          "Throughout the 1930s and 1940s, she actively advocated for civil rights and equal opportunities for African Americans and working-class citizens.",
          "In 1939, when the Daughters of the American Revolution refused to let African American singer Marian Anderson perform at Constitution Hall, Eleanor famously resigned from the organization in protest.",
          "Her public stand helped arrange Anderson's historic open-air concert at the Lincoln Memorial on April 9, 1939, which drew an audience of over 75,000 people."
        ],
        [
          "In December 1945, President Harry S. Truman appointed Eleanor as a United States delegate to the newly formed United Nations General Assembly.",
          "She served as the first chairperson of the UN Human Rights Commission from 1946 to 1951.",
          "Under her leadership, the UN adopted the Universal Declaration of Human Rights on December 10, 1948, establishing basic rights for people everywhere."
        ],
        [
          "Eleanor Roosevelt wrote a syndicated daily newspaper column called 'My Day' six days a week from 1935 until 1962, sharing her ideas directly with millions of readers.",
          "President Truman recognized her global impact by calling her the 'First Lady of the World' for her dedication to peace and equality.",
          "Today, her legacy lives on as a model of courageous leadership, social activism, and global human rights advocacy."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Eleanor Roosevelt, former First Lady (b. 1884) - Origins & History",
      "paragraphs": [
        [
          "Anna Eleanor Roosevelt was born in New York City on October 11, 1884, into a prominent and wealthy family.",
          "Her uncle, Theodore Roosevelt, served as the 26th President of the United States from 1901 to 1909.",
          "After losing both of her parents by age 10, Eleanor attended Allenswood Academy in England in 1899, where headmistress Marie Souvestre encouraged her to think independently and serve her community."
        ],
        [
          "On March 17, 1905, Eleanor married her distant cousin Franklin Delano Roosevelt in New York City.",
          "Together, they raised five children while Franklin built his political career in state and national government.",
          "When Franklin was stricken with polio in August 1921 and lost the use of his legs, Eleanor encouraged him to stay in politics and began making public appearances on his behalf."
        ],
        [
          "During the 1920s, Eleanor became heavily involved in political organizations, including the Women's Trade Union League and the League of Women Voters.",
          "In 1926, she co-founded Todhunter School, a private school in New York City, where she taught history and literature to teenage girls.",
          "She also helped establish Val-Kill Industries in 1927 to create manufacturing jobs for struggling farming families in rural New York."
        ],
        [
          "When Franklin was elected Governor of New York in 1928, Eleanor traveled across the state to inspect schools, hospitals, and state facilities.",
          "In November 1932, Franklin was elected the 32nd President of the United States during the depth of the Great Depression.",
          "Eleanor officially entered the White House on March 4, 1933, well-prepared to use her experience to help lead a struggling nation."
        ]
      ]
    }
  },
  {
    "id": "oct-17-steam-ferry-boat",
    "month": "October",
    "day": "October 11",
    "dayNum": 11,
    "title": "Steam-powered ferry boat began operations (1811)",
    "type": "Event / Science (Wikipedia)",
    "connection": "John Stevens launched the world's first steam ferry service on Oct 11!",
    "emoji": "\u2699\ufe0f",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Steam-powered ferry boat began operations is documented on Wikipedia as a landmark historical subject from October 11.",
    "who2": "Steam-powered ferry boat began operations developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 11 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Steam-powered ferry boat began operations (1811) - Impact & Legacy",
      "paragraphs": [
        [
          "On October 11, 1811, the launch of the first regular steam-powered ferry boat transformed how people traveled across busy waterways.",
          "By connecting Manhattan in New York City with Hoboken, New Jersey, this revolutionary service proved that steam engines could move passengers reliably every single day."
        ],
        [
          "Before 1811, travelers relied on sailboats or heavy rowboats that depended entirely on unpredictable winds and strong river tides.",
          "A trip across the Hudson River could take hours, but the new steam ferry slashed travel times down to just 15 to 20 minutes."
        ],
        [
          "This rapid transportation system made daily commuting possible for thousands of workers and boosted economic trade between New York and New Jersey.",
          "Farmers could quickly transport fresh produce to city markets without worrying about food spoiling during long delays on the water."
        ],
        [
          "The success of the 1811 steam ferry inspired cities across the United States and Europe to build their own steam-powered transit fleets.",
          "Today, modern passenger ferries around the world trace their heritage back to this historic landmark achievement in American engineering."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Steam-powered ferry boat began operations (1811) - Origins & History",
      "paragraphs": [
        [
          "In the early 1800s, inventors across America were experimenting with steam power to improve water travel.",
          "Following Robert Fulton's successful steamboat demonstration in 1807, pioneer engineer John Stevens set out to design a specialized steam ferry for short, frequent river crossings."
        ],
        [
          "John Stevens built a ferry named the Juliana, which featured a high-pressure steam engine designed to push the boat smoothly through rough river currents.",
          "The vessel measured approximately 60 feet long and was specifically built to hold dozens of passengers along with light cargo."
        ],
        [
          "On October 11, 1811, the Juliana officially began scheduled commercial operations across the Hudson River.",
          "Passengers paid a small fare to board the wooden vessel for its historic maiden voyage from New York City to the shore of Hoboken."
        ],
        [
          "Although the Juliana operated successfully, legal disputes over steamboat navigation monopolies forced Stevens to move the boat to Connecticut in 1812.",
          "Despite its brief run in New York harbor, the Juliana secured its place in history as the world's very first steam-powered ferry boat service."
        ]
      ]
    }
  },
  {
    "id": "oct-18-columbus-day",
    "month": "October",
    "day": "October 12",
    "dayNum": 12,
    "title": "Columbus Day",
    "type": "Event / History (Wikipedia)",
    "connection": "Commemorates Christopher Columbus arriving in the Americas in 1492!",
    "emoji": "\ud83c\udf0d",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Columbus Day is documented on Wikipedia as a landmark historical subject from October 12.",
    "who2": "Columbus Day developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 12 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Columbus Day - Impact & Legacy",
      "paragraphs": [
        [
          "Over the centuries, Columbus Day has generated diverse perspectives among different communities across the United States.",
          "While many Italian Americans celebrate the holiday as a point of cultural pride, Indigenous communities view the date through a lens of profound loss and historical struggle."
        ],
        [
          "Christopher Columbus's arrival in 1492 initiated intense transatlantic trade and European colonization that reshaped global demographics.",
          "However, European colonization brought diseases like smallpox, which tragically reduced native populations by an estimated 80 to 90 percent over the following century."
        ],
        [
          "In response to these historical impacts, South Dakota became the first state to replace Columbus Day with Native Americans' Day in 1990.",
          "Today, more than 100 American cities, including Seattle and Minneapolis, officially celebrate Indigenous Peoples' Day on the same date."
        ],
        [
          "Although Columbus Day remains a official federal holiday established by Congress in 1968, state policies vary widely across all 50 states.",
          "This evolving national conversation encourages students to examine historical events through multiple cultural viewpoints."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Columbus Day - Origins & History",
      "paragraphs": [
        [
          "On October 12, 1492, Italian navigator Christopher Columbus made landfall in the Bahamas while sailing under the Spanish flag.",
          "His crew of 90 men completed the perilous journey across the Atlantic Ocean aboard three famous ships: the Ni\u00f1a, the Pinta, and the Santa Mar\u00eda."
        ],
        [
          "The earliest recorded celebration of Columbus's voyage occurred in New York City on October 12, 1792.",
          "Organized by the Society of St. Tammany, the ceremony marked the 300th anniversary of his arrival in the Americas."
        ],
        [
          "In 1892, President Benjamin Harrison issued a nationwide proclamation encouraging Americans to observe the 400th anniversary.",
          "This initiative followed a tragic 1891 event in New Orleans involving 11 Italian immigrants, aiming to foster civic unity and combat anti-immigrant prejudice."
        ],
        [
          "Following years of active lobbying by the Knights of Columbus, President Franklin D. Roosevelt designated Columbus Day a federal holiday in 1934.",
          "In 1971, the official observance was shifted to the second Monday of October under the Uniform Monday Holiday Act."
        ]
      ]
    }
  },
  {
    "id": "oct-19-margaret-thatcher",
    "month": "October",
    "day": "October 13",
    "dayNum": 13,
    "title": "Margaret Thatcher, former English Prime Minister (b. 1925)",
    "type": "Person (Biography.com)",
    "connection": "First female Prime Minister of the United Kingdom, serving from 1979 to 1990!",
    "emoji": "\ud83c\uddec\ud83c\udde7",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Margaret Thatcher, former English Prime Minister is documented on Biography.com as a landmark historical subject from October 13.",
    "who2": "Margaret Thatcher, former English Prime Minister developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 13 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Margaret Thatcher, former English Prime Minister (b. 1925) - Impact & Legacy",
      "paragraphs": [
        [
          "Margaret Thatcher, born on October 13, 1925, left a powerful mark on modern political history as Britain's first female prime minister.",
          "Her bold leadership style earned her the famous nickname 'The Iron Lady' from a Soviet newspaper in 1976."
        ],
        [
          "During her 11 years in office from 1979 to 1990, she introduced economic policies known as Thatcherism that reduced government spending.",
          "She sold state-owned businesses like British Telecom and decreased the power of trade unions across the United Kingdom."
        ],
        [
          "In 1982, Thatcher led the nation during the 74-day Falklands War against Argentina, successfully defending the South Atlantic islands.",
          "She also worked closely with U.S. President Ronald Reagan during the 1980s to help bring an end to the Cold War."
        ],
        [
          "After resigning as prime minister on November 28, 1990, Thatcher remained one of the most influential political figures of the twentieth century.",
          "Today, her political decisions continue to be studied on platforms like Biography.com as key moments in international history."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Margaret Thatcher, former English Prime Minister (b. 1925) - Origins & History",
      "paragraphs": [
        [
          "Margaret Hilda Roberts was born on October 13, 1925, in the small town of Grantham, England.",
          "Her father was a grocer and local politician who taught her the importance of hard work and public service."
        ],
        [
          "She attended Somerville College at Oxford in 1943 to study chemistry before working as an industrial research chemist.",
          "After marrying Denis Thatcher in 1951, she studied law and qualified as a barrister in 1953."
        ],
        [
          "Thatcher entered the House of Commons in 1959 after winning a seat for the Conservative Party representing Finchley.",
          "She later served as Secretary of State for Education and Science from 1970 to 1974 under Prime Minister Edward Heath."
        ],
        [
          "In 1975, Thatcher defeated Heath to become the leader of the Conservative Party.",
          "On May 4, 1979, she won the general election and officially became Prime Minister, starting a historic era recorded in detail on Biography.com."
        ]
      ]
    }
  },
  {
    "id": "oct-20-molly-pitcher",
    "month": "October",
    "day": "October 13",
    "dayNum": 13,
    "title": "Molly Pitcher, Revolutionary War hero (b. 1754)",
    "type": "Person (Biography.com)",
    "connection": "Brave heroine who carried water and operated cannons during the Battle of Monmouth!",
    "emoji": "\ud83d\udca5",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Molly Pitcher, Revolutionary War hero is documented on Biography.com as a landmark historical subject from October 13.",
    "who2": "Molly Pitcher, Revolutionary War hero developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 13 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Molly Pitcher, Revolutionary War hero (b. 1754) - Impact & Legacy",
      "paragraphs": [
        [
          "Molly Pitcher stands as an enduring symbol of American courage and patriotic devotion.",
          "On February 21, 1822, the Pennsylvania state legislature officially recognized her battlefield service by awarding her an annual pension of $40 for her heroism during the war."
        ],
        [
          "Her lasting legacy grew significantly throughout the 19th and 20th centuries as her story inspired American culture.",
          "In 1876, citizens erected a grand monument at her gravesite in Carlisle, Pennsylvania, followed by a detailed bronze statue dedicated in 1916 to honor her bravery."
        ],
        [
          "Historians consider Molly Pitcher a powerful composite figure representing hundreds of brave camp followers.",
          "Between 1775 and 1783, these courageous women performed vital military roles, from nursing wounded soldiers to supplying water under direct artillery fire."
        ],
        [
          "Today, her remarkable story remains a vital part of social studies education across the United States.",
          "To celebrate her military contributions, the U.S. Postal Service issued a commemorative postage stamp featuring Molly Pitcher in 1928."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Molly Pitcher, Revolutionary War hero (b. 1754) - Origins & History",
      "paragraphs": [
        [
          "Mary Ludwig, famously known as Molly Pitcher, was born on October 13, 1754, near Trenton, New Jersey.",
          "In 1769, at just 15 years old, she married William Hays, an artilleryman who later enlisted in the Continental Army."
        ],
        [
          "During the severe winter of 1777 to 1778, Mary traveled to Valley Forge, Pennsylvania, to support her husband and his regiment.",
          "She spent months washing clothes, treating sick soldiers, and carrying heavy supplies through harsh winter conditions."
        ],
        [
          "Her historic moment occurred on June 28, 1778, during the intense heat of the Battle of Monmouth, where temperatures topped 100 degrees Fahrenheit.",
          "Mary fearlessly ran back and forth from a local spring, carrying water pitchers to cool down thirsty troops and hot cannons, earning her the name 'Molly Pitcher'."
        ],
        [
          "When her husband collapsed at his post from heat stroke, Mary immediately stepped up to take his place.",
          "She grabbed the artillery rammer rod and swabbed the cannon herself, continuing to fight until the battle ended."
        ]
      ]
    }
  },
  {
    "id": "oct-21-dwight-d-eisenhower",
    "month": "October",
    "day": "October 14",
    "dayNum": 14,
    "title": "Dwight D. Eisenhower (34th president), (b. 1890)",
    "type": "Person (Biography.com)",
    "connection": "5-star general, Supreme Allied Commander in WWII, and 34th U.S. President!",
    "emoji": "\ud83c\udf96\ufe0f",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Dwight D. Eisenhower is documented on Biography.com as a landmark historical subject from October 14.",
    "who2": "Dwight D. Eisenhower developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 14 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Dwight D. Eisenhower (34th president), (b. 1890) - Impact & Legacy",
      "paragraphs": [
        [
          "Dwight D. Eisenhower served as the 34th President of the United States from 1953 to 1961.",
          "One of his earliest major achievements was helping negotiate an armistice in July 1953 to end active fighting in the Korean War."
        ],
        [
          "In 1956, Eisenhower signed the landmark Federal-Aid Highway Act, which authorized the creation of the Interstate Highway System.",
          "This massive infrastructure project eventually built over 41,000 miles of roadways to safely connect cities across the nation."
        ],
        [
          "Following the Soviet Union's launch of the Sputnik satellite in October 1957, Eisenhower signed legislation creating NASA in July 1958.",
          "This historic decision officially launched America into the Space Race and shaped modern scientific research for generations."
        ],
        [
          "Eisenhower also protected civil rights by signing the Civil Rights Act of 1957 and sending the 101st Airborne Division to Little Rock, Arkansas, in September 1957.",
          "Today, historians remember Eisenhower as a steady commander whose policy decisions modernized American transportation, defense, and space exploration."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Dwight D. Eisenhower (34th president), (b. 1890) - Origins & History",
      "paragraphs": [
        [
          "Dwight David Eisenhower was born on October 14, 1890, in Denison, Texas.",
          "He grew up in Abilene, Kansas, as the third of seven sons in a modest and hardworking household."
        ],
        [
          "Eisenhower entered the United States Military Academy at West Point in 1911 and graduated in 1915 as a second lieutenant.",
          "Over the next three decades, he steadily rose through the army ranks by demonstrating exceptional organization and strategic skills."
        ],
        [
          "During World War II, General Eisenhower was appointed Supreme Commander of Allied Expeditionary Forces in Europe in December 1943.",
          "He directed the famous D-Day invasion of Normandy, France, on June 6, 1944, leading millions of Allied troops to victory in Europe."
        ],
        [
          "After serving as the first supreme commander of NATO, Eisenhower entered politics and won the 1952 presidential election with 442 electoral votes.",
          "He took the oath of office as the 34th President of the United States on January 20, 1953, beginning eight years of presidential service."
        ]
      ]
    }
  },
  {
    "id": "oct-22-wayne-gretzky-record",
    "month": "October",
    "day": "October 15",
    "dayNum": 15,
    "title": "Wayne Gretzky breaks NHL points record",
    "type": "Person (Biography.com)",
    "connection": "Broke Gordie Howe's all-time NHL scoring record on October 15, 1989!",
    "emoji": "\ud83c\udfd2",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Wayne Gretzky breaks NHL points record is documented on Biography.com as a landmark historical subject from October 15.",
    "who2": "Wayne Gretzky breaks NHL points record developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 15 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Wayne Gretzky breaks NHL points record - Impact & Legacy",
      "paragraphs": [
        [
          "On October 15, 1989, Wayne Gretzky made history by becoming the all-time leading point scorer in National Hockey League history.",
          "Playing for the Los Angeles Kings against his former team, the Edmonton Oilers, Gretzky scored his 1,851st career point to surpass his idol, Gordie Howe."
        ],
        [
          "Gretzky's achievement brought immense national attention to hockey across North America, proving that the sport could thrive in sunbelt cities like Los Angeles.",
          "Ticket sales exploded, and youth hockey participation skyrocketed throughout California and other warm-climate states during the 1990s."
        ],
        [
          "By the time Gretzky retired in 1999, he had built a massive total of 2,857 points, including 894 goals and 1,963 assists.",
          "His incredible total point count is so high that even if he had never scored a single goal, his assist count alone would still make him the leading scorer in NHL history."
        ],
        [
          "Gretzky earned the nickname \"The Great One\" because he redefined how hockey was played through exceptional vision, teamwork, and intelligence.",
          "Today, the NHL has retired his jersey number 99 league-wide, ensuring that future generations remember his incredible October 15 milestone."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Wayne Gretzky breaks NHL points record - Origins & History",
      "paragraphs": [
        [
          "Born on January 26, 1961, in Brantford, Ontario, Wayne Gretzky began skating at the age of two on a backyard rink built by his father.",
          "By age 10, he scored an unbelievable 378 goals in a single 85-game youth season, signaling the rise of a hockey prodigy."
        ],
        [
          "Gretzky entered the NHL in 1979 with the Edmonton Oilers and quickly dominated the league by winning four Stanley Cup championships in the 1980s.",
          "In the 1981-1982 season, he set a record by scoring 50 goals in just 39 games, showing his extraordinary scoring capabilities."
        ],
        [
          "In August 1988, a shocking trade sent Gretzky from the Edmonton Oilers to the Los Angeles Kings, changing the landscape of professional hockey.",
          "Entering the 1989-1990 season, Gretzky needed only 13 points to match Gordie Howe's long-standing record of 1,850 career points."
        ],
        [
          "On October 15, 1989, Gretzky tied Howe's record early in the game and then scored a dramatic goal with just 53 seconds remaining in regulation to break it.",
          "The game was temporarily stopped for a 15-minute celebration on the ice, marking a historical milestone documented extensively by sports historians."
        ]
      ]
    }
  },
  {
    "id": "oct-23-clarence-thomas",
    "month": "October",
    "day": "October 15",
    "dayNum": 15,
    "title": "Clarence Thomas confirmed on Supreme Court (1991)",
    "type": "Person (Biography.com)",
    "connection": "Confirmed as the second African American Supreme Court Justice on Oct 15!",
    "emoji": "\u2696\ufe0f",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Clarence Thomas confirmed on Supreme Court is documented on Biography.com as a landmark historical subject from October 15.",
    "who2": "Clarence Thomas confirmed on Supreme Court developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 15 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Clarence Thomas confirmed on Supreme Court (1991) - Impact & Legacy",
      "paragraphs": [
        [
          "On October 15, 1991, the United States Senate confirmed Clarence Thomas to the Supreme Court by a narrow vote of 52 to 48.",
          "With this vote, he officially became the 106th justice in the court's history and only the second African American justice, following Thurgood Marshall."
        ],
        [
          "Over his more than 30 years on the bench, Justice Thomas established himself as one of the most consistently conservative members of the Supreme Court.",
          "He became known for practicing originalism, an approach to legal interpretation that focuses strictly on the original public meaning of the United States Constitution when it was written in 1787."
        ],
        [
          "Thomas wrote influential majority opinions and dissents on major national issues, including constitutional gun rights, voting laws, and federal power.",
          "In 2023, he joined the court's landmark ruling that brought an end to race-conscious affirmative action policies in college admissions across the United States."
        ],
        [
          "The fiery political fight over his 1991 confirmation fundamentally transformed how the United States Senate evaluates judicial nominees.",
          "Additionally, the widespread public reaction to his confirmation hearings inspired a record number of women to run for national political office during the 1992 elections."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Clarence Thomas confirmed on Supreme Court (1991) - Origins & History",
      "paragraphs": [
        [
          "Clarence Thomas was born on June 23, 1948, in the small community of Pin Point, Georgia, and grew up in poverty during racial segregation.",
          "He earned his law degree from Yale Law School in 1974 and later served eight years as chairman of the Equal Employment Opportunity Commission starting in 1982."
        ],
        [
          "On July 1, 1991, President George H.W. Bush nominated 43-year-old Thomas to replace retiring civil rights icon Justice Thurgood Marshall on the Supreme Court.",
          "President Bush described Thomas as the best qualified candidate for the lifetime position, setting off a detailed Senate review process."
        ],
        [
          "In October 1991, law professor Anita Hill testified before the Senate Judiciary Committee, alleging that Thomas had sexually harassed her a decade earlier when they worked together.",
          "Millions of Americans watched the televised hearings as Thomas strongly denied all allegations, calling the proceedings a unfair attack on his character."
        ],
        [
          "Despite the national debate, the full Senate moved forward with the vote on October 15, 1991, confirming Thomas by a 52-48 margin.",
          "He officially took his judicial oath eight days later on October 23, 1991, beginning his long career as an Associate Justice."
        ]
      ]
    }
  },
  {
    "id": "oct-24-nelson-mandela-nobel",
    "month": "October",
    "day": "October 15",
    "dayNum": 15,
    "title": "Nelson Mandela receives the Nobel Peace Prize (1993)",
    "type": "Person (Biography.com)",
    "connection": "Awarded the Nobel Peace Prize on October 15, 1993 for ending apartheid!",
    "emoji": "\ud83c\uddff\ud83c\udde6",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Nelson Mandela receives the Nobel Peace Prize is documented on Biography.com as a landmark historical subject from October 15.",
    "who2": "Nelson Mandela receives the Nobel Peace Prize developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 15 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Nelson Mandela receives the Nobel Peace Prize (1993) - Impact & Legacy",
      "paragraphs": [
        [
          "In December 1993, Nelson Mandela received the Nobel Peace Prize in Oslo, Norway, alongside South African President F.W. de Klerk.",
          "This prestigious honor recognized their combined efforts to peacefully dismantle the cruel system of racial segregation known as apartheid."
        ],
        [
          "The international recognition provided a crucial boost to South Africa's peaceful transition toward democracy.",
          "Just four months later, on April 27, 1994, more than 22 million South Africans cast their ballots in the nation's first fully democratic election."
        ],
        [
          "Mandela's Nobel Prize strengthened his global platform, allowing him to launch the Nelson Mandela Foundation in 1999.",
          "Through this organization, he raised millions of dollars to build schools, combat HIV/AIDS, and support rural development across Africa."
        ],
        [
          "Today, Mandela's victory stands as one of the most powerful examples of forgiveness and political reconciliation in human history.",
          "His legacy continues to inspire leaders worldwide to resolve bitter conflicts through open communication rather than war."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Nelson Mandela receives the Nobel Peace Prize (1993) - Origins & History",
      "paragraphs": [
        [
          "The path to the 1993 Nobel Peace Prize began decades earlier when South Africa adopted apartheid policies in 1948.",
          "This legal system forced non-white citizens to live separately from white citizens and deprived millions of basic human rights."
        ],
        [
          "Nelson Mandela became a key leader in the African National Congress, organizing peaceful protests to fight against these unjust laws.",
          "Because of his anti-apartheid activism, Mandela was arrested in 1962 and sentenced to life in prison at the Rivonia Trial in 1964."
        ],
        [
          "Mandela spent 27 years in prison, with 18 of those years served in a small cell on Robben Island.",
          "Global boycotts and relentless public protest finally forced President F.W. de Klerk to release Mandela on February 11, 1990."
        ],
        [
          "Over the next three years, Mandela and de Klerk led complex negotiations to draft a new temporary constitution.",
          "On October 15, 1993, the Norwegian Nobel Committee officially announced that both men had won the Nobel Peace Prize for their historical achievements."
        ]
      ]
    }
  },
  {
    "id": "oct-25-noah-webster",
    "month": "October",
    "day": "October 16",
    "dayNum": 16,
    "title": "Noah Webster, author and lexicographer (b. 1758)",
    "type": "Person (Biography.com)",
    "connection": "Author of the first major American dictionary containing 70,000 words!",
    "emoji": "\ud83d\udcd6",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Noah Webster, author and lexicographer is documented on Biography.com as a landmark historical subject from October 16.",
    "who2": "Noah Webster, author and lexicographer developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 16 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Noah Webster, author and lexicographer (b. 1758) - Impact & Legacy",
      "paragraphs": [
        [
          "Noah Webster left a lasting mark on American culture by publishing 'An American Dictionary of the English Language' in 1828.",
          "His massive work contained over 70,000 entries and standardized American spelling, formally separating American English from British English."
        ],
        [
          "Long before his dictionary, Webster published 'A Grammatical Institute of the English Language' in 1783, which became known as the 'Blue-Backed Speller.'",
          "This school textbook sold over 100 million copies across the country, helping millions of American children learn to read and spell using a unified American curriculum."
        ],
        [
          "Webster changed many traditional English spellings to make them simpler and more logical, such as dropping the extra letter 'u' from words like 'color' and 'honor.'",
          "He also altered words like 'theatre' to 'theater' and removed silent letters from words, creating a distinct written language for a new nation."
        ],
        [
          "After Webster died in 1843, George and Charles Merriam acquired the rights to his dictionary, keeping his educational legacy alive in modern homes and schools.",
          "Today, Noah Webster is celebrated every year on October 16 as a founding father of American education who reshaped how millions of people communicate."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Noah Webster, author and lexicographer (b. 1758) - Origins & History",
      "paragraphs": [
        [
          "Noah Webster was born on October 16, 1758, in West Hartford, Connecticut, to a local farming family.",
          "Growing up during the era of the American Revolution, he entered Yale College at age 16 in 1774 and graduated four years later in 1778."
        ],
        [
          "While working as a schoolmaster in the late 1770s, Webster became frustrated that American schools relied entirely on British textbooks.",
          "He strongly believed that a newly independent nation needed its own unique educational tools, which inspired him to start writing original American textbooks in 1783."
        ],
        [
          "To create a comprehensive dictionary, Webster spent 22 years mastering 26 languages, including Old English, Greek, Latin, and Sanskrit, to trace the origins of words.",
          "To protect his literary work, he traveled to 13 states in 1785 to lobby state legislatures, helping to establish early copyright laws in the United States."
        ],
        [
          "Beyond his work with dictionaries, Webster helped found Amherst College in Massachusetts in 1821 to expand higher education opportunities for young students.",
          "Until his death at age 84 in 1843, Webster worked tirelessly as an author, teacher, and scholar to shape the history of American learning."
        ]
      ]
    }
  },
  {
    "id": "oct-26-san-francisco-earthquake-1989",
    "month": "October",
    "day": "October 17",
    "dayNum": 17,
    "title": "San Francisco Earthquake (1989)",
    "type": "Event / History (Wikipedia)",
    "connection": "The Loma Prieta earthquake struck the San Francisco Bay Area during World Series!",
    "emoji": "\ud83c\udf0b",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "San Francisco Earthquake is documented on Wikipedia as a landmark historical subject from October 17.",
    "who2": "San Francisco Earthquake developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 17 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: San Francisco Earthquake (1989) - Impact & Legacy",
      "paragraphs": [
        [
          "On October 17, 1989, at 5:04 p.m., a powerful magnitude 6.9 earthquake struck the San Francisco Bay Area.",
          "Millions of people watched live on television as Game 3 of the World Series at Candlestick Park was suddenly interrupted by violent shaking."
        ],
        [
          "The intense tremor resulted in 63 deaths, injured 3,757 people, and left more than 12,000 residents homeless.",
          "The most severe structural collapse occurred along Oakland's Cypress Street Viaduct, a double-decker highway section on Interstate 880."
        ],
        [
          "Ruptured gas lines ignited major fires across San Francisco's Marina District, where soft soil turned to mud during a process called liquefaction.",
          "Total property damage reached an estimated $6 billion, making it one of the costliest natural disasters in United States history."
        ],
        [
          "Following the disaster, California passed new safety laws and spent billions of dollars to reinforce bridges, roads, and public buildings.",
          "The legacy of the 1989 earthquake fundamentally changed modern engineering and improved emergency response strategies across the nation."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: San Francisco Earthquake (1989) - Origins & History",
      "paragraphs": [
        [
          "The 1989 San Francisco earthquake originated deep along the San Andreas Fault, a major tectonic boundary stretching across California.",
          "This fault line marks the region where the Pacific Plate slowly slides north past the North American Plate at about 1.5 inches each year."
        ],
        [
          "The earthquake's epicenter was located in Nisene Marks State Park near Loma Prieta peak, roughly 60 miles south of San Francisco.",
          "Scientists calculated that the fault ruptured 11 miles underground and slipped for approximately 15 seconds, releasing decades of built-up pressure."
        ],
        [
          "Northern California has a long history of intense seismic activity, including the infamous magnitude 7.9 earthquake of April 18, 1906.",
          "Geologists had previously labeled the Santa Cruz Mountains segment of the fault as a high-risk zone for a major event."
        ],
        [
          "Analyzing data from the 1989 rupture provided geologists with critical new evidence about how faults move both horizontally and vertically.",
          "Today, advanced monitoring instruments along the San Andreas Fault help researchers track ongoing tectonic shifts to better predict future hazards."
        ]
      ]
    }
  },
  {
    "id": "oct-27-mason-dixon-line",
    "month": "October",
    "day": "October 18",
    "dayNum": 18,
    "title": "Mason-Dixon Line established (1767)",
    "type": "Event / History (Wikipedia)",
    "connection": "Surveyed boundary line separating Maryland and Pennsylvania!",
    "emoji": "\ud83d\udccd",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Mason-Dixon Line established is documented on Wikipedia as a landmark historical subject from October 18.",
    "who2": "Mason-Dixon Line established developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 18 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Mason-Dixon Line established (1767) - Impact & Legacy",
      "paragraphs": [
        [
          "When Charles Mason and Jeremiah Dixon completed their boundary survey on October 18, 1767, they immediately solved a violent land conflict that had lasted for over eighty years.",
          "By clearly marking the border between Maryland and Pennsylvania, families living near the line finally knew which colony had the right to collect taxes and enforce laws."
        ],
        [
          "Over time, the Mason-Dixon Line took on a far larger political meaning than its original creators ever imagined.",
          "As northern states gradually abolished slavery after the American Revolution, this 233-mile survey line became the official division between free northern states and slaveholding southern states."
        ],
        [
          "In 1820, during debates over the Missouri Compromise, the line was referenced as part of the broader legislative boundary dividing slave territory from free territory.",
          "For millions of enslaved people seeking freedom in the 1800s, crossing north of this line meant taking a crucial step toward reaching liberty along the Underground Railroad."
        ],
        [
          "Today, the original stone markers placed every five miles still stand along the border between Pennsylvania and Maryland.",
          "While no longer a legal dividing line between opposing social systems, the Mason-Dixon Line remains a famous historical symbol that marks the cultural border between the American North and South."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Mason-Dixon Line established (1767) - Origins & History",
      "paragraphs": [
        [
          "The creation of the Mason-Dixon Line began with conflicting land grants issued by the British Crown in the seventeenth century.",
          "King Charles I granted Maryland to the Calvert family in 1632, while King Charles II granted Pennsylvania to William Penn in 1681, creating an overlapping territory claimed by both families."
        ],
        [
          "To stop armed clashes known as Cresap's War along the Susquehanna River, the proprietors turned to two skilled English experts in 1763.",
          "Astronomer Charles Mason and surveyor Jeremiah Dixon were hired to measure a precise boundary along the latitude of 39 degrees and 43 minutes north."
        ],
        [
          "For four intense years from 1763 to 1767, Mason and Dixon hacked through dense forests and crossed rugged mountains while using precise star observations.",
          "They were guided by Native American escorts through western territories until local tribes warned them not to travel past a major war path near Mount Morris, Pennsylvania."
        ],
        [
          "The duo marked the final border with heavy limestone posts imported directly from England, carving a 'P' for Pennsylvania on one side and an 'M' for Maryland on the other.",
          "On October 18, 1767, Mason and Dixon officially submitted their completed map, establishing one of the most famous borders in world history."
        ]
      ]
    }
  },
  {
    "id": "oct-28-puerto-rico-us-colony",
    "month": "October",
    "day": "October 18",
    "dayNum": 18,
    "title": "Puerto Rico becomes U.S. Colony (1898)",
    "type": "Event / History (Wikipedia)",
    "connection": "United States officially took control of Puerto Rico following Spanish-American War!",
    "emoji": "\ud83c\uddf5\ud83c\uddf7",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Puerto Rico becomes U.S. Colony is documented on Wikipedia as a landmark historical subject from October 18.",
    "who2": "Puerto Rico becomes U.S. Colony developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 18 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Puerto Rico becomes U.S. Colony (1898) - Impact & Legacy",
      "paragraphs": [
        [
          "The U.S. takeover in 1898 drastically changed Puerto Rico's political structure, economy, and society.",
          "On October 18, 1898, United States forces officially took control of the island, ending over 400 years of Spanish colonial rule."
        ],
        [
          "In 1900, the U.S. Congress passed the Foraker Act, which established a civilian government but gave limited voting rights to Puerto Ricans.",
          "Seventeen years later, the Jones-Shafroth Act of 1917 granted U.S. citizenship to residents of Puerto Rico, allowing them to serve in the American military."
        ],
        [
          "Economic policies transformed the island's trade, shifting focus from traditional coffee farming to large sugar plantations owned by American businesses.",
          "By 1952, Puerto Rico officially became a U.S. Commonwealth, adopting its own local constitution while remaining subject to U.S. federal laws."
        ],
        [
          "Today, more than 3.2 million residents living in Puerto Rico continue to debate the island's future political status.",
          "Although Puerto Ricans are U.S. citizens, island residents cannot vote in U.S. presidential elections unless they move to one of the 50 states."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Puerto Rico becomes U.S. Colony (1898) - Origins & History",
      "paragraphs": [
        [
          "For over four centuries following Christopher Columbus's arrival in 1493, Puerto Rico was a territory ruled by Spain.",
          "In November 1897, Spain granted the island self-governing autonomy through a reform known as the Carta Auton\u00f3mica."
        ],
        [
          "This newly gained independence was short-lived because the Spanish-American War broke out in April 1898.",
          "On July 25, 1898, General Nelson A. Miles landed approximately 3,300 American troops at Gu\u00e1nica on the southern coast of the island."
        ],
        [
          "U.S. forces marched across Puerto Rico for several weeks, fighting minor battles against Spanish defenders.",
          "Active fighting ended on August 12, 1898, when a peace agreement was signed between the United States and Spain."
        ],
        [
          "The Spanish flag was lowered over San Juan on October 18, 1898, as U.S. military governors assumed authority.",
          "Finally, on December 10, 1898, the Treaty of Paris officially ceded Puerto Rico to the United States alongside Guam and the Philippines."
        ]
      ]
    }
  },
  {
    "id": "oct-29-star-spangled-banner-sung",
    "month": "October",
    "day": "October 19",
    "dayNum": 19,
    "title": "Star Spangled Banner first sung (1814)",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Francis Scott Key's anthem performed publicly for the first time in Baltimore!",
    "emoji": "\ud83c\udfb6",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Star Spangled Banner first sung is documented on Wikipedia as a landmark historical subject from October 19.",
    "who2": "Star Spangled Banner first sung developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 19 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Star Spangled Banner first sung (1814) - Impact & Legacy",
      "paragraphs": [
        [
          "Shortly after Francis Scott Key penned his inspiring poem in September 1814, the anthem rapidly spread throughout the young nation.",
          "The song was first performed publicly in Baltimore on October 19, 1814, uniting citizens with a powerful message of resilience."
        ],
        [
          "For over a century, the composition grew in national popularity alongside other historic American tunes.",
          "Recognizing its deep emotional power, the United States Navy adopted it in 1889, President Woodrow Wilson ordered its military use in 1916, and Congress officially declared it the national anthem on March 3, 1931."
        ],
        [
          "The performance of the anthem also became a cornerstone of major athletic and patriotic events across the country.",
          "This tradition gained national prominence during Game 1 of the 1918 World Series, establishing a custom that millions of sports fans continue to honor today."
        ],
        [
          "Beyond the lyrics themselves, the physical banner that inspired the words remains one of America's most treasured historical artifacts.",
          "The original 30-by-42-foot woolen flag is preserved and displayed today at the Smithsonian National Museum of American History in Washington, D.C."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Star Spangled Banner first sung (1814) - Origins & History",
      "paragraphs": [
        [
          "During the War of 1812, British military forces captured Washington, D.C., and burned major government buildings in August 1814.",
          "Following their attack on the capital, British naval ships sailed up the Chesapeake Bay to target the strategic port city of Baltimore, Maryland."
        ],
        [
          "On September 7, 1814, a 35-year-old American lawyer named Francis Scott Key boarded a British vessel to negotiate the release of a captured American physician, Dr. William Beanes.",
          "While British officers agreed to free the doctor, they forced both men to stay aboard their ship until the bombardment of Baltimore concluded."
        ],
        [
          "Beginning on September 13, 1814, British warships bombarded Fort McHenry with more than 1,500 cannonballs and explosive shells over 25 continuous hours.",
          "As the smoke cleared at dawn on September 14, Key saw a massive 15-star, 15-stripe flag still flying proudly above the fort, proving American forces had survived."
        ],
        [
          "Inspired by the miraculous victory, Key immediately wrote the initial lines of his poem titled 'Defence of Fort M'Henry' on the back of an old letter.",
          "Matched to a popular 18th-century tune, the song was published in newspapers and was publicly sung for the very first time on October 19, 1814."
        ]
      ]
    }
  },
  {
    "id": "oct-30-revolutionary-war-final-battle",
    "month": "October",
    "day": "October 19",
    "dayNum": 19,
    "title": "Final battle of the Revolutionary War (1781)",
    "type": "Event / History (Wikipedia)",
    "connection": "General Cornwallis surrendered at Yorktown, ending major Revolutionary War fighting!",
    "emoji": "\ud83c\uddfa\ud83c\uddf8",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Final battle of the Revolutionary War is documented on Wikipedia as a landmark historical subject from October 19.",
    "who2": "Final battle of the Revolutionary War developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 19 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Final battle of the Revolutionary War (1781) - Impact & Legacy",
      "paragraphs": [
        [
          "On October 19, 1781, the Siege of Yorktown came to a dramatic end in Virginia.",
          "British General Charles Cornwallis surrendered over 7,000 soldiers to General George Washington and his French allies.",
          "This monumental defeat shattered Great Britain's resolve to continue the costly war across the Atlantic Ocean."
        ],
        [
          "Although small skirmishes continued, Yorktown was the last major land battle of the American Revolutionary War.",
          "The official end of the conflict arrived on September 3, 1783, when representatives signed the Treaty of Paris.",
          "This landmark treaty forced Great Britain to recognize the United States as an independent nation with territory extending west to the Mississippi River."
        ],
        [
          "The outcome of the war created significant global economic and political shifts, especially in Europe.",
          "France had spent roughly 1.3 billion livres aiding the American cause with 12,000 soldiers and dozens of warships.",
          "This massive national debt contributed directly to a major financial crisis in France, helping spark the French Revolution in 1789."
        ],
        [
          "Today, the legacy of the victory in 1781 stands as a major turning point in modern world history.",
          "The successful revolution inspired democratic independence movements across Latin America and Europe throughout the 19th century.",
          "Securing independence at Yorktown cleared the path for the United States to draft its permanent Constitution in 1787."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Final battle of the Revolutionary War (1781) - Origins & History",
      "paragraphs": [
        [
          "The American Revolutionary War began in April 1775 at Lexington and Concord, dragging on for six long years.",
          "By 1778, British commanders shifted their strategy to focus on the Southern colonies, where they believed loyalist support was strongest.",
          "British forces won several early victories in cities like Charleston, South Carolina, where they captured over 5,000 American troops in 1780."
        ],
        [
          "In July 1781, General Charles Cornwallis marched his British army of nearly 8,000 men into Yorktown, Virginia.",
          "He intended to construct a fortified deep-water naval base along the Chesapeake Bay to resupply his forces by sea.",
          "However, this coastal position left the British vulnerable if an enemy fleet managed to block the entrance to the bay."
        ],
        [
          "General George Washington recognized a rare opportunity to trap the British forces.",
          "In August 1781, French Admiral Comte de Grasse arrived at the Chesapeake Bay with a fleet of 28 warships, successfully blocking British naval support.",
          "Meanwhile, Washington secretly led a combined force of 2,100 American and 4,000 French soldiers on a 300-mile march south from New York."
        ],
        [
          "By September 28, 1781, an allied army of nearly 17,000 men completely surrounded the British fortifications at Yorktown.",
          "Allied forces dug trenches and fired over 1,700 cannonballs into the British defenses during weeks of intense bombardment.",
          "Trapped without reinforcements or escape, General Cornwallis surrendered on October 19, 1781, marking the final major battle of the war."
        ]
      ]
    }
  },
  {
    "id": "oct-31-dick-fosbury",
    "month": "October",
    "day": "October 20",
    "dayNum": 20,
    "title": "Dick Fosbury wins gold at the olympics using the 'Fosbury Flop' (1968)",
    "type": "Person (Biography.com)",
    "connection": "Revolutionized Olympic high jumping by jumping backward over the bar!",
    "emoji": "\ud83e\udd47",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Dick Fosbury wins gold at the olympics using the 'Fosbury Flop' is documented on Biography.com as a landmark historical subject from October 20.",
    "who2": "Dick Fosbury wins gold at the olympics using the 'Fosbury Flop' developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 20 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Dick Fosbury wins gold at the olympics using the 'Fosbury Flop' (1968) - Impact & Legacy",
      "paragraphs": [
        [
          "On October 20, 1968, American athlete Dick Fosbury changed the sport of track and field forever at the Mexico City Olympic Games.",
          "By jumping over the bar backward, he cleared an astonishing height of 2.24 meters (7 feet 4.25 inches) to set a new Olympic record and win the gold medal."
        ],
        [
          "Before Fosbury's historic win, almost every high jumper used traditional methods like the straddle technique or the scissors kick.",
          "Many coaches initially called his backward leap dangerous and foolish, but his impressive Olympic victory instantly changed their minds."
        ],
        [
          "The legacy of the Fosbury Flop spread rapidly across the international athletic community over the next decade.",
          "By the 1972 Munich Olympic Games, 28 out of the 40 high jump competitors had already adopted Fosbury's unique technique."
        ],
        [
          "Today, virtually every elite high jumper in the world uses the Fosbury Flop to achieve record-breaking heights.",
          "Fosbury's willingness to think differently proved that physics and innovation could completely revolutionize a modern sport."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Dick Fosbury wins gold at the olympics using the 'Fosbury Flop' (1968) - Origins & History",
      "paragraphs": [
        [
          "Dick Fosbury began his high jump career as a 16-year-old student at Medford High School in Oregon during the early 1960s.",
          "At the time, he struggled to compete against other athletes using the standard scissors technique, which limited how high he could jump."
        ],
        [
          "Realizing he needed a new strategy, Fosbury began experimenting with his jumping posture during high school track meets in 1963.",
          "He discovered that leaning back and going over the bar headfirst on his back allowed him to clear much higher barriers."
        ],
        [
          "As a civil engineering student at Oregon State University, Fosbury refined his curved approach run between 1965 and 1968.",
          "Soft foam rubber landing mats were introduced during this period, making it safe for jumpers to land on their backs for the first time."
        ],
        [
          "His hard work paid off at the 1968 United States Olympic Trials, where he earned a spot on the national team.",
          "On October 20, 1968, his years of experimentation ended in ultimate triumph when his custom technique won him an Olympic gold medal."
        ]
      ]
    }
  },
  {
    "id": "oct-32-colin-powell",
    "month": "October",
    "day": "October 21",
    "dayNum": 21,
    "title": "Colin Powell confirmed as Chairman of the Joint Chiefs",
    "type": "Person (Biography.com)",
    "connection": "Four-star general and first African American Secretary of State!",
    "emoji": "\ud83c\udf96\ufe0f",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Colin Powell confirmed as Chairman of the Joint Chiefs is documented on Biography.com as a landmark historical subject from October 21.",
    "who2": "Colin Powell confirmed as Chairman of the Joint Chiefs developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 21 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Colin Powell confirmed as Chairman of the Joint Chiefs - Impact & Legacy",
      "paragraphs": [
        [
          "On October 1, 1989, General Colin Powell became the 12th Chairman of the Joint Chiefs of Staff, making history as the first African American to hold the highest military position in the United States.",
          "At 52 years old, he was also the youngest officer ever appointed to this powerful role, serving as the principal military advisor to the President and the Secretary of Defense."
        ],
        [
          "Powell's legacy was defined by his strategic military framework known as the Powell Doctrine, which emphasized using decisive, overwhelming force and establishing clear exit strategies before entering conflicts.",
          "He successfully applied these principles during Operation Desert Storm in 1991, leading a international coalition of 35 nations to liberate Kuwait while keeping American casualties remarkably low."
        ],
        [
          "His historic leadership earned him immense public respect, pushing his public approval ratings above 80 percent following the swift victory in the Persian Gulf War.",
          "Powell demonstrated that a military leader could bridge the gap between armed forces strategy and international diplomacy, changing how Americans viewed military leadership."
        ],
        [
          "Powell served under both President George H.W. Bush and President Bill Clinton before retiring from active military duty in 1993 after 35 years in uniform.",
          "His groundbreaking achievements paved the way for future generations of minority leaders in the United States military, proving that merit and dedication could break long-standing racial barriers."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Colin Powell confirmed as Chairman of the Joint Chiefs - Origins & History",
      "paragraphs": [
        [
          "Colin Luther Powell was born on April 5, 1937, in Harlem, New York City, to Jamaican immigrant parents who encouraged him to pursue a higher education.",
          "While attending the City College of New York in the 1950s, he joined the Reserve Officers' Training Corps, or ROTC, where he discovered his life calling and military discipline."
        ],
        [
          "After graduating in 1958, Powell was commissioned as a second lieutenant in the United States Army and served two combat tours during the Vietnam War in 1962 and 1968.",
          "During his second tour, he survived a helicopter crash and earned the Soldier's Medal for bravery after risking his life to rescue three fellow soldiers from the burning wreckage."
        ],
        [
          "Throughout the 1970s and 1980s, Powell rapidly advanced through command posts while earning a Master of Business Administration degree from George Washington University in 1971.",
          "Recognizing his exceptional talent, President Ronald Reagan appointed Powell as the 16th National Security Advisor in December 1987, where he helped manage crucial arms-control negotiations with the Soviet Union."
        ],
        [
          "In August 1989, President George H.W. Bush nominated Powell to serve as Chairman of the Joint Chiefs of Staff, leading to a swift Senate confirmation.",
          "When his appointment officially began in October 1989, it represented the impressive culmination of a 31-year military journey from a college cadet to the highest-ranking officer in the nation."
        ]
      ]
    }
  },
  {
    "id": "oct-33-lance-armstrong-tour",
    "month": "October",
    "day": "October 22",
    "dayNum": 22,
    "title": "Lance Armstrong loses all 7 Tour de France titles",
    "type": "Person (Biography.com)",
    "connection": "Official sports governance decision on October 22, 2012 regarding cycling titles!",
    "emoji": "\ud83d\udeb4",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Lance Armstrong loses all 7 Tour de France titles is documented on Biography.com as a landmark historical subject from October 22.",
    "who2": "Lance Armstrong loses all 7 Tour de France titles developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 22 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Lance Armstrong loses all 7 Tour de France titles - Impact & Legacy",
      "paragraphs": [
        [
          "On October 22, 2012, the Union Cycliste Internationale officially stripped Lance Armstrong of his seven Tour de France titles.",
          "This monumental decision altered the history of professional sports and destroyed the reputation of a global icon."
        ],
        [
          "The downfall triggered immediate financial and organizational consequences for the former cycling star.",
          "Major corporate sponsors like Nike, Trek, and Anheuser-Busch cut ties with Armstrong, costing him an estimated 75 million dollars in future earnings.",
          "He was also forced to resign from the board of Livestrong, the cancer charity he had established in 1997."
        ],
        [
          "The scandal exposed systematic cheating within professional cycling and deeply damaged public trust in athletic achievements.",
          "Because Armstrong and his teammates used illegal performance-enhancing drugs during all seven victories from 1999 to 2005, cycling officials decided not to name alternative winners for those races.",
          "Instead, those seven years remain blank in the record books to highlight the widespread nature of the deception."
        ],
        [
          "Today, Armstrong's loss of his titles serves as an important turning point in the fight against performance-enhancing drugs.",
          "Anti-doping agencies created stricter testing protocols and longer athlete bans to ensure future competitions remain fair and honest."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Lance Armstrong loses all 7 Tour de France titles - Origins & History",
      "paragraphs": [
        [
          "Lance Armstrong began his professional cycling career in 1992, showing great promise as a young power rider.",
          "However, his career hit a tragic setback in October 1996 when he was diagnosed with stage-four testicular cancer at age 25."
        ],
        [
          "After undergoing extensive surgeries and chemotherapy treatment, Armstrong was declared cancer-free in 1997.",
          "He made a miraculous return to elite racing and won his first Tour de France title in 1999, captivating fans around the globe."
        ],
        [
          "Armstrong dominated the grueling 2,000-mile race for seven consecutive years, taking victories every July from 1999 through 2005.",
          "Despite his record-breaking success, reporters and fellow cyclists raised persistent accusations that his team was using banned substances."
        ],
        [
          "In June 2012, the United States Anti-Doping Agency filed official charges against Armstrong, gathering testimony from 26 witnesses.",
          "USADA released a massive 1,000-page report in October 2012 detailing the sophisticated doping program, which led directly to Armstrong losing all seven of his titles on October 22, 2012."
        ]
      ]
    }
  },
  {
    "id": "oct-34-ipod-first-revealed",
    "month": "October",
    "day": "October 23",
    "dayNum": 23,
    "title": "iPod first revealed (2001)",
    "type": "Event / Science (Wikipedia)",
    "connection": "Steve Jobs unveiled the original Apple iPod featuring 1,000 songs in your pocket!",
    "emoji": "\ud83c\udfb5",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "iPod first revealed is documented on Wikipedia as a landmark historical subject from October 23.",
    "who2": "iPod first revealed developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 23 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: iPod first revealed (2001) - Impact & Legacy",
      "paragraphs": [
        [
          "The introduction of the iPod transformed how human beings listened to music in their daily lives.",
          "Before this device, people carried bulky CD players that held only about twelve songs per disc.",
          "Over its entire product lifetime, Apple sold more than 450 million iPods globally."
        ],
        [
          "The iPod also reshaped the entire music business through digital distribution.",
          "In April 2003, Apple launched the iTunes Store, offering individual songs for 99 cents each.",
          "Customers purchased over one million songs during the store's very first six days of operation."
        ],
        [
          "The iconic signature design of the iPod made it a recognizable global symbol.",
          "Its distinctive white headphones stood out in crowds and quickly became a famous fashion statement.",
          "It proved that a small electronic device could be both useful and trendy."
        ],
        [
          "Most importantly, the success of the iPod set the stage for modern smartphones.",
          "Technologies created for the music player directly helped Apple build the first iPhone in 2007.",
          "Today, the legacy of the iPod lives on inside nearly every smart device we use."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: iPod first revealed (2001) - Origins & History",
      "paragraphs": [
        [
          "On October 23, 2001, Apple CEO Steve Jobs stood on a stage in Cupertino, California.",
          "He revealed a brand-new digital audio player that would change technology history.",
          "The famous slogan for the event promised '1,000 songs in your pocket.'"
        ],
        [
          "Development of the device moved at a remarkably fast speed during early 2001.",
          "A team led by engineer Tony Fadell worked with designer Jony Ive under the secret code name Dulcimer.",
          "They completed the initial design in less than eight months."
        ],
        [
          "The original iPod weighed just 6.5 ounces and featured a tiny 5-gigabyte hard drive.",
          "It included a unique mechanical scroll wheel that let users navigate thousands of tracks easily.",
          "When it went on sale on November 10, 2001, it cost $399."
        ],
        [
          "Despite doubts from some critics about the price, the product was a major success.",
          "Apple sold over 125,000 units in the final two months of 2001 alone.",
          "This early momentum launched a series of popular spin-offs, including the Mini, Nano, and Shuffle."
        ]
      ]
    }
  },
  {
    "id": "oct-35-pele-soccer",
    "month": "October",
    "day": "October 23",
    "dayNum": 23,
    "title": "Pel\u00e9, soccer player (b. 1940)",
    "type": "Person (Biography.com)",
    "connection": "Legendary Brazilian soccer icon and only player to win 3 World Cups!",
    "emoji": "\u26bd",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Pel\u00e9, soccer player is documented on Biography.com as a landmark historical subject from October 23.",
    "who2": "Pel\u00e9, soccer player developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 23 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Pel\u00e9, soccer player (b. 1940) - Impact & Legacy",
      "paragraphs": [
        [
          "Pel\u00e9 revolutionized the sport of soccer, popularizing the phrase 'The Beautiful Game' around the globe.",
          "Over his professional career, he scored an extraordinary total of 1,281 goals in 1,363 matches."
        ],
        [
          "In 1969, Pel\u00e9's global impact was demonstrated when two factions in the Nigerian Civil War agreed to a 48-hour ceasefire.",
          "Both sides paused fighting so that soldiers and civilians could watch Pel\u00e9 play an exhibition match with Santos FC in Lagos."
        ],
        [
          "Pel\u00e9 came out of semi-retirement in 1975 to sign a three-year, $4.7 million contract with the New York Cosmos in the United States.",
          "His presence transformed American sports culture, driving a record crowd of 77,891 fans to New Jersey's Giants Stadium in 1977."
        ],
        [
          "In December 2000, FIFA named Pel\u00e9 the Player of the Century to honor his unparalleled contributions to sports history.",
          "His enduring legacy remains an inspiration to millions of young soccer players across every continent."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Pel\u00e9, soccer player (b. 1940) - Origins & History",
      "paragraphs": [
        [
          "Pel\u00e9 was born Edson Arantes do Nascimento on October 23, 1940, in Tr\u00eas Cora\u00e7\u00f5es, Brazil.",
          "Growing up in modest conditions, he developed his foot skills by kicking a rolled-up sock filled with rags."
        ],
        [
          "In 1956, at just 15 years old, he signed a contract with the Brazilian club Santos FC.",
          "He made his professional debut on September 7, 1956, scoring a goal in his very first game during a 7-1 victory."
        ],
        [
          "At the 1958 World Cup in Sweden, 17-year-old Pel\u00e9 became the youngest player to compete in the tournament.",
          "He scored six total goals during the event, including two crucial goals in the final match to secure Brazil's 5-2 victory over Sweden."
        ],
        [
          "Pel\u00e9 continued his historic national team career by winning additional World Cup titles in Chile in 1962 and Mexico in 1970.",
          "When he played his final international game in 1971, he solidified his place as the only athlete in history to win three World Cups."
        ]
      ]
    }
  },
  {
    "id": "oct-36-united-nations-day",
    "month": "October",
    "day": "October 24",
    "dayNum": 24,
    "title": "United Nations Day",
    "type": "Event / History (Wikipedia)",
    "connection": "Official charter of the United Nations took effect on October 24, 1945!",
    "emoji": "\ud83c\uddfa\ud83c\uddf3",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "United Nations Day is documented on Wikipedia as a landmark historical subject from October 24.",
    "who2": "United Nations Day developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 24 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: United Nations Day - Impact & Legacy",
      "paragraphs": [
        [
          "United Nations Day is celebrated around the world every year on October 24 to highlight the goals and achievements of the organization.",
          "In 1971, the UN General Assembly adopted Resolution 2782, declaring that United Nations Day should be an official international holiday observed by all member states.",
          "Today, people in 193 member nations mark this day through cultural performances, international concerts, and educational workshops."
        ],
        [
          "The day serves as a powerful educational tool for schools, reaching millions of students across the globe each year.",
          "Traditionally, a special international concert is held in the UN General Assembly Hall in New York City to celebrate global harmony.",
          "During these celebrations, world leaders reiterate their commitment to the 17 Sustainable Development Goals created to end poverty and protect the planet by 2030."
        ],
        [
          "Reflecting on United Nations Day allows the world to honor over 70 peacekeeping operations deployed since 1948 to maintain global stability.",
          "Agencies like the World Food Programme, which won the Nobel Peace Prize in 2020, provide food assistance to over 100 million people in 88 countries annually.",
          "UNICEF, founded in 1946, has helped vaccinate billions of children and reduced child mortality rates by over 50 percent worldwide."
        ],
        [
          "As the UN looks toward the future, United Nations Day reminds citizens of critical milestones, such as the 2015 Paris Agreement signed by 195 nations to combat climate change.",
          "The holiday emphasizes that international cooperation remains essential for solving complex global problems that no single country can handle alone.",
          "By honoring this history every October 24, communities around the globe renew their promise to foster peace, equality, and human rights for future generations."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: United Nations Day - Origins & History",
      "paragraphs": [
        [
          "The concept of the United Nations emerged during World War II after the League of Nations, established in 1919, failed to prevent global conflict.",
          "On January 1, 1942, United States President Franklin D. Roosevelt first coined the term United Nations in a formal declaration signed by 26 Allied nations.",
          "These nations pledged to fight together against Axis powers and work toward lasting global peace once the war ended."
        ],
        [
          "Between April 25 and June 26, 1945, delegates from 50 nations gathered in San Francisco, California, for the historic Conference on International Organization.",
          "Representatives spent two months drafting the 111 articles of the United Nations Charter to ensure international security and human rights.",
          "On June 26, 1945, all 50 attending nations signed the completed Charter, with Poland signing later as the 51st original member state."
        ],
        [
          "The United Nations officially came into existence on October 24, 1945, after the UN Charter was formally ratified.",
          "For the Charter to take effect, it required ratification by the five permanent Security Council members\u2014China, France, the Soviet Union, the United Kingdom, and the United States\u2014along with a majority of other signing countries.",
          "Because this monumental legal milestone occurred on October 24, that exact date was selected to be commemorated annually as United Nations Day."
        ],
        [
          "Two years later, in 1947, the United Nations General Assembly officially declared October 24 as United Nations Day through Resolution 168.",
          "The assembly designed this day to inform people worldwide about the aims and achievements of the new global organization.",
          "From its original 51 founding members in 1945 to 193 member states today, United Nations Day remains a landmark event tracing back to that crucial post-war era."
        ]
      ]
    }
  },
  {
    "id": "oct-37-pablo-picasso",
    "month": "October",
    "day": "October 25",
    "dayNum": 25,
    "title": "Pablo Picasso, artist (b. 1881)",
    "type": "Person (Biography.com)",
    "connection": "World-famous Spanish painter who co-founded Cubism and modern art!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Pablo Picasso, artist is documented on Biography.com as a landmark historical subject from October 25.",
    "who2": "Pablo Picasso, artist developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 25 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Pablo Picasso, artist (b. 1881) - Impact & Legacy",
      "paragraphs": [
        [
          "Pablo Picasso fundamentally transformed the art world during the twentieth century by breaking traditional rules of perspective and realism.",
          "Co-founding the Cubist movement around 1907 alongside Georges Braque, Picasso introduced a revolutionary way to view objects and people from multiple geometric angles at once."
        ],
        [
          "Beyond changing artistic style, Picasso used his global platform to make powerful political statements against war and violence.",
          "In 1937, he created his world-famous masterpiece 'Guernica', a massive black-and-white canvas measuring over 25 feet wide that depicted the tragic destruction of a Spanish town during the Spanish Civil War."
        ],
        [
          "Over his remarkable 80-year career, Picasso produced an estimated 50,000 total artworks, including 1,885 paintings, 1,228 sculptures, and thousands of ceramics and drawings.",
          "His incredible productivity and refusal to stay in one style inspired countless modern artists to push creative boundaries and experiment with new mediums."
        ],
        [
          "Today, major museums across the world display his groundbreaking creations to millions of visitors each year.",
          "Picasso's lasting legacy proved to the world that art does not have to copy reality to express deep human emotion and big ideas."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Pablo Picasso, artist (b. 1881) - Origins & History",
      "paragraphs": [
        [
          "Pablo Picasso was born on October 25, 1881, in the coastal city of M\u00e1laga, Spain.",
          "Showing extraordinary talent as a child, Picasso completed his first oil painting, titled 'The Picador', in 1889 when he was only eight years old."
        ],
        [
          "In 1895, at age thirteen, he passed the advanced entrance exam for the Barcelona School of Fine Arts in just one single day.",
          "After moving to Paris in 1900, he experienced his somber 'Blue Period' from 1901 to 1904, which was immediately followed by the warmer tones of his 'Rose Period' in 1904."
        ],
        [
          "By 1907, Picasso completed 'Les Demoiselles d'Avignon', a radical artwork that shocked art critics and officially launched the Cubist movement.",
          "Throughout the 1920s and 1930s, he continuously evolved his technique, contributing significantly to Surrealism and classic figurative painting."
        ],
        [
          "During World War II, Picasso remained in German-occupied Paris, courageously continuing his creative work despite constant political risk.",
          "He spent his final decades working in southern France until his death on April 8, 1973, at the age of 91, leaving behind a profound historical mark on modern culture."
        ]
      ]
    }
  },
  {
    "id": "oct-38-hillary-rodham-clinton",
    "month": "October",
    "day": "October 26",
    "dayNum": 26,
    "title": "Hillary Rodham Clinton, former First Lady and Secretary of State (b. 1947)",
    "type": "Person (Biography.com)",
    "connection": "First Lady, U.S. Senator, and 67th Secretary of State!",
    "emoji": "\u2696\ufe0f",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Hillary Rodham Clinton, former First Lady and Secretary of State is documented on Biography.com as a landmark historical subject from October 26.",
    "who2": "Hillary Rodham Clinton, former First Lady and Secretary of State developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 26 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Hillary Rodham Clinton, former First Lady and Secretary of State (b. 1947) - Impact & Legacy",
      "paragraphs": [
        [
          "Hillary Rodham Clinton, born on October 26, 1947, reshaped the role of American women in high-level government service.",
          "In 2016, she made history as the first woman to secure a presidential nomination from a major American political party."
        ],
        [
          "As the 67th United States Secretary of State from 2009 to 2013, Clinton expanded global diplomatic engagement.",
          "During her four-year tenure under President Barack Obama, she visited 112 countries to strengthen international alliances."
        ],
        [
          "Before joining the Cabinet, she served as a U.S. Senator representing New York from 2001 to 2009.",
          "During her time as First Lady from 1993 to 2001, she helped create the Children's Health Insurance Program in 1997, providing healthcare coverage to millions of American children."
        ],
        [
          "Clinton earned nearly 66 million popular votes in the 2016 presidential election, demonstrating unprecedented support for a female presidential candidate.",
          "Her public career created a lasting legacy that inspired thousands of young women to pursue public service and political leadership."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Hillary Rodham Clinton, former First Lady and Secretary of State (b. 1947) - Origins & History",
      "paragraphs": [
        [
          "Hillary Diane Rodham was born on October 26, 1947, in Chicago, Illinois, and raised in the suburban town of Park Ridge.",
          "She demonstrated strong academic interest early in life, serving as student government leader and graduating from Wellesley College in 1969."
        ],
        [
          "She earned her Juris Doctor degree from Yale Law School in 1973, where she developed a deep dedication to child advocacy.",
          "After graduation, she worked for the Children's Defense Fund and served as an attorney on the House Judiciary Committee staff during 1974."
        ],
        [
          "In 1975, Hillary married Bill Clinton and moved to Arkansas, where she became a successful partner at the Rose Law Firm.",
          "She served as First Lady of Arkansas for twelve years, directing state educational reform initiatives throughout the 1980s."
        ],
        [
          "When her husband became the 42nd President in 1993, Hillary transitioned to national leadership as First Lady of the United States.",
          "In November 2000, she won election to the U.S. Senate, becoming the first First Lady in American history to hold elected public office."
        ]
      ]
    }
  },
  {
    "id": "oct-39-erie-canal-opened",
    "month": "October",
    "day": "October 26",
    "dayNum": 26,
    "title": "Erie Canal opened (1825)",
    "type": "Event / History (Wikipedia)",
    "connection": "Connected the Great Lakes with the Atlantic Ocean, sparking trade growth!",
    "emoji": "\ud83c\udf0a",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Erie Canal opened is documented on Wikipedia as a landmark historical subject from October 26.",
    "who2": "Erie Canal opened developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 26 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Erie Canal opened (1825) - Impact & Legacy",
      "paragraphs": [
        [
          "On October 26, 1825, Governor DeWitt Clinton boarded the packet boat Seneca Chief in Buffalo to celebrate the completion of the Erie Canal.",
          "The new waterway dramatically reduced transportation costs, cutting freight prices from $100 per ton overland down to less than $10 per ton by boat.",
          "Shipping time between Albany and Buffalo was slashed from 20 days to just 6 days."
        ],
        [
          "The economic boom transformed New York City into the financial and commercial capital of the United States.",
          "Towns along the route, such as Rochester, Syracuse, and Buffalo, grew rapidly from small settlements into thriving industrial cities.",
          "By 1830, New York handled more trade than the ports of Boston, Baltimore, and Philadelphia combined."
        ],
        [
          "Beyond trade, the canal sparked a massive wave of westward migration for thousands of American settlers and European immigrants.",
          "It allowed farm products from the Midwest to reach eastern markets, while manufactured goods traveled in the opposite direction.",
          "Inspired by this incredible success, states like Ohio, Indiana, and Pennsylvania rushed to build their own canal networks during the 1830s."
        ],
        [
          "To keep up with growing traffic, New York enlarged the canal between 1836 and 1862, increasing its depth from 4 feet to 7 feet.",
          "Today, the Erie Canal remains an active part of the New York State Canal System and is recognized as a National Heritage Area.",
          "Its legacy endures as one of the greatest engineering feats of the nineteenth century that united a growing nation."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Erie Canal opened (1825) - Origins & History",
      "paragraphs": [
        [
          "In the early 1800s, traveling across the rugged Appalachian Mountains was difficult, expensive, and time-consuming.",
          "In 1807, an imprisoned debtor named Jesse Hawley published a series of essays proposing a 363-mile canal connecting Lake Erie to the Hudson River.",
          "DeWitt Clinton, mayor of New York City and later governor, championed the ambitious vision to connect the Midwest to the Atlantic Ocean."
        ],
        [
          "Critics mocked the ambitious plan as Clinton's Ditch or Clinton's Folly, doubting that a young nation could fund or build such a long channel.",
          "Despite political skepticism, the New York State Legislature approved $7 million in funding for the construction in April 1817.",
          "Groundbreaking officially took place on July 4, 1817, in Rome, New York, initiating an eight-year construction effort."
        ],
        [
          "Thousands of laborers, including many recent Irish immigrants, dug the trench using shovels, pickaxes, and horse-drawn scrapers.",
          "Workers constructed 83 separate lift locks to handle a total elevation change of 565 feet between the Hudson River and Lake Erie.",
          "Self-taught engineers designed massive stone aqueducts to carry the canal over major rivers like the Mohawk and Genesee."
        ],
        [
          "Construction was fully completed in October 1825, producing a channel that was 363 miles long, 40 feet wide, and 4 feet deep.",
          "To mark the official grand opening, Governor Clinton carried two barrels of fresh water from Lake Erie to pour into the Atlantic Ocean during the famous Marriage of the Waters ceremony.",
          "The canal's successful opening proved critics wrong and marked a revolutionary moment in early American infrastructure history."
        ]
      ]
    }
  },
  {
    "id": "oct-40-red-cross-organized",
    "month": "October",
    "day": "October 26",
    "dayNum": 26,
    "title": "International Red Cross organized in Switzerland (1863)",
    "type": "Event / History (Wikipedia)",
    "connection": "Founded in Geneva to provide neutral humanitarian aid during war and disasters!",
    "emoji": "\ud83c\udfe5",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "International Red Cross organized in Switzerland is documented on Wikipedia as a landmark historical subject from October 26.",
    "who2": "International Red Cross organized in Switzerland developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 26 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: International Red Cross organized in Switzerland (1863) - Impact & Legacy",
      "paragraphs": [
        [
          "The creation of the International Red Cross in 1863 permanently transformed how nations treat human suffering during times of crisis.",
          "Today, the global movement includes more than 192 National Red Cross and Red Crescent Societies, operating in almost every country around the world."
        ],
        [
          "One of the most important legacies of the organization was the establishment of international humanitarian law.",
          "Following the founding conference, nations adopted the First Geneva Convention in 1864, which established legally binding rules to protect wounded soldiers and medical staff on the battlefield.",
          "These agreements expanded over time, including major updates in 1949 that extended protections to prisoners of war and civilians."
        ],
        [
          "In addition to wartime aid, the Red Cross became a leading force in worldwide emergency disaster relief.",
          "The organization has been recognized for its incredible humanitarian efforts with three Nobel Peace Prizes, awarded in 1917, 1944, and 1963."
        ],
        [
          "The famous Red Cross symbol, along with the Red Crescent and Red Crystal, remains an universally understood sign of neutral help.",
          "For over 160 years, these symbols have allowed brave volunteers to safely deliver food, medicine, and hope to millions of people in need."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: International Red Cross organized in Switzerland (1863) - Origins & History",
      "paragraphs": [
        [
          "The idea for the Red Cross began in June 1859, when a Swiss businessman named Henry Dunant witnessed the terrible aftermath of the Battle of Solferino in Italy.",
          "Over 40,000 wounded soldiers were left suffering on the field with little to no medical care."
        ],
        [
          "Deeply affected by what he saw, Dunant published a book in 1862 titled 'A Memory of Solferino,' in which he called for national relief groups made of trained volunteers.",
          "In February 1863, Dunant joined four other citizens in Geneva, Switzerland, to form the 'Committee of Five' to bring his idea to life."
        ],
        [
          "A major breakthrough occurred on October 26, 1863, when an international conference opened in Geneva.",
          "Delegates representing 16 nations gathered to discuss Dunant's proposal and officially organized the International Committee for Relief to the Wounded, which later became the International Committee of the Red Cross."
        ],
        [
          "To ensure relief workers were recognized and kept safe, the committee adopted the reverse of the Swiss flag\u2014a red cross on a white background\u2014as their protective emblem.",
          "Less than a year later, on August 22, 1864, 12 states signed the First Geneva Convention, officially founding modern humanitarian aid."
        ]
      ]
    }
  },
  {
    "id": "oct-41-theodore-roosevelt",
    "month": "October",
    "day": "October 27",
    "dayNum": 27,
    "title": "Theodore Roosevelt, 26th U.S. President (b. 1858)",
    "type": "Person (Biography.com)",
    "connection": "26th U.S. President who preserved 230 million acres of public national parks!",
    "emoji": "\ud83c\udf32",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Theodore Roosevelt, 26th U.S. President is documented on Biography.com as a landmark historical subject from October 27.",
    "who2": "Theodore Roosevelt, 26th U.S. President developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 27 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Theodore Roosevelt, 26th U.S. President (b. 1858) - Impact & Legacy",
      "paragraphs": [
        [
          "When Theodore Roosevelt became the 26th President of the United States in September 1901, he introduced a revolutionary domestic program known as the 'Square Deal.'",
          "This policy aimed to ensure fairness for everyday workers, control giant corporate monopolies, and protect public health across the nation."
        ],
        [
          "Roosevelt made land conservation a central priority of the American government.",
          "In 1905, he established the United States Forest Service and ultimately protected 230 million acres of public land, including 5 national parks, 18 national monuments, and 150 national forests."
        ],
        [
          "He also transformed government regulation and international diplomacy.",
          "In 1906, Roosevelt signed the Pure Food and Drug Act to keep consumers safe, directed 44 antitrust lawsuits against harmful corporate trusts, and earned the 1906 Nobel Peace Prize for helping end the Russo-Japanese War."
        ],
        [
          "Roosevelt's energetic leadership permanently reshaped the power of the American presidency.",
          "To honor his enduring influence, his image was carved into Mount Rushmore in South Dakota alongside George Washington, Thomas Jefferson, and Abraham Lincoln."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Theodore Roosevelt, 26th U.S. President (b. 1858) - Origins & History",
      "paragraphs": [
        [
          "Theodore Roosevelt was born on October 27, 1858, in New York City to a prominent and wealthy family.",
          "Although he suffered from severe asthma and poor eyesight as a child, he systematically built up his physical strength through constant exercise and went on to graduate from Harvard University in 1880."
        ],
        [
          "A devastating personal tragedy struck Roosevelt on February 14, 1884, when both his mother and his wife passed away on the exact same day.",
          "To cope with his grief, he moved to the remote Dakota Territory for two years, where he worked as a cattle rancher and a frontier deputy sheriff."
        ],
        [
          "Upon returning to eastern politics, Roosevelt served as the New York City Police Commissioner in 1895 and later as Assistant Secretary of the Navy.",
          "In 1898, he achieved national military renown by forming a volunteer cavalry regiment known as the 'Rough Riders' during the Spanish-American War."
        ],
        [
          "Capitalizing on his wartime popularity, Roosevelt was elected Governor of New York in 1898 and sworn in as Vice President in March 1901.",
          "Following the tragic assassination of President William McKinley in September 1901, Roosevelt assumed the presidency at just 42 years old, becoming the youngest president in American history."
        ]
      ]
    }
  },
  {
    "id": "oct-42-bill-gates",
    "month": "October",
    "day": "October 28",
    "dayNum": 28,
    "title": "Bill Gates, founder of Microsoft (b. 1955)",
    "type": "Person (Biography.com)",
    "connection": "Co-founded Microsoft and pioneered personal computer operating systems!",
    "emoji": "\ud83d\udcbb",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Bill Gates, founder of Microsoft is documented on Biography.com as a landmark historical subject from October 28.",
    "who2": "Bill Gates, founder of Microsoft developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 28 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Bill Gates, founder of Microsoft (b. 1955) - Impact & Legacy",
      "paragraphs": [
        [
          "Bill Gates dramatically transformed modern life by bringing personal computers into millions of homes and offices worldwide.",
          "After launching the Windows operating system on November 20, 1985, Microsoft grew to control over 90 percent of the global personal computer market by the late 1990s."
        ],
        [
          "In 2000, Gates shifted his focus toward global philanthropy by establishing the Bill & Melinda Gates Foundation.",
          "Through this organization, he has donated over $50 billion to improve global health, fight poverty, and expand access to education."
        ],
        [
          "His philanthropic efforts have funded massive global vaccination campaigns, helping reduce worldwide cases of polio by more than 99 percent since 1988.",
          "The foundation has also invested heavily in malaria prevention and agricultural research to support struggling communities in developing nations."
        ],
        [
          "In 2010, Gates co-founded The Giving Pledge, encouraging the world's wealthiest individuals to commit the majority of their fortunes to charitable causes.",
          "Today, his legacy stands not only as a software pioneer who shaped the digital revolution, but also as one of the most generous humanitarians in history."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Bill Gates, founder of Microsoft (b. 1955) - Origins & History",
      "paragraphs": [
        [
          "William Henry Gates III was born on October 28, 1955, in Seattle, Washington.",
          "He discovered his passion for computer programming at the age of 13 in 1968 while attending the private Lakeside School."
        ],
        [
          "At Lakeside, Gates met fellow student Paul Allen, and the duo spent countless hours learning computer languages.",
          "In 1972, at just 17 years old, Gates and Allen formed their first business venture called Traf-O-Data, which created traffic counter devices and earned them $20,000."
        ],
        [
          "Gates enrolled at Harvard University in 1973 to study law, but his passion for technology quickly overtook his academic pursuits.",
          "He made the bold decision to drop out of Harvard in 1975 to officially co-found Microsoft with Paul Allen in Albuquerque, New Mexico."
        ],
        [
          "Microsoft achieved its major historical breakthrough in November 1980 by partnering with technology giant IBM.",
          "Gates provided IBM with the MS-DOS operating system, a landmark business agreement that positioned Microsoft to become a global leader in software development."
        ]
      ]
    }
  },
  {
    "id": "oct-43-statue-of-liberty",
    "month": "October",
    "day": "October 28",
    "dayNum": 28,
    "title": "Statue of Liberty dedicated (1886)",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Official dedication of France's copper monument gift in New York Harbor!",
    "emoji": "\ud83d\uddfd",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Statue of Liberty dedicated is documented on Wikipedia as a landmark historical subject from October 28.",
    "who2": "Statue of Liberty dedicated developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 28 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Statue of Liberty dedicated (1886) - Impact & Legacy",
      "paragraphs": [
        [
          "On October 28, 1886, President Grover Cleveland officially dedicated the Statue of Liberty in New York Harbor.",
          "More than one million people attended the grand celebration, which featured New York City's very first ticker-tape parade."
        ],
        [
          "Standing at 305 feet tall from the base of its pedestal to the tip of its torch, Lady Liberty quickly became an enduring beacon for international travelers.",
          "When the federal immigration station on nearby Ellis Island opened in 1892, millions of arriving immigrants caught their very first glimpse of America by looking at the copper statue."
        ],
        [
          "In 1903, a bronze plaque bearing Emma Lazarus's famous 1883 poem, 'The New Colossus,' was installed inside the pedestal.",
          "Her inspiring words welcoming the 'tired,' 'poor,' and 'huddled masses' transformed the monument into an iconic symbol of freedom and sanctuary."
        ],
        [
          "Today, the Statue of Liberty remains one of the most recognizable landmarks in the world, attracting over four million visitors each year.",
          "Designated as a UNESCO World Heritage Site in 1984, the statue continues to stand as a universal emblem of democracy and human rights."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Statue of Liberty dedicated (1886) - Origins & History",
      "paragraphs": [
        [
          "The idea for the Statue of Liberty was first proposed in 1865 by French political thinker \u00c9douard Ren\u00e9 de Laboulaye.",
          "He wanted to create a grand monument to celebrate the abolition of slavery in the United States and honor the alliance forged between France and America during the Revolutionary War."
        ],
        [
          "French sculptor Fr\u00e9d\u00e9ric-Auguste Bartholdi designed the massive figure, officially naming it Liberty Enlightening the World.",
          "Engineer Gustave Eiffel, who later created the Eiffel Tower, designed the flexible internal iron skeleton that supports the statue's thin outer skin made of copper."
        ],
        [
          "Building the monument required separate fundraising efforts, as France agreed to fund the statue while the United States agreed to build the pedestal.",
          "In 1885, American newspaper publisher Joseph Pulitzer helped raise over $100,000 by publishing the names of everyday citizens who donated even a single penny."
        ],
        [
          "After completion in Paris, the statue was dismantled into 350 individual pieces and packed into 214 wooden crates to cross the Atlantic Ocean on a French ship.",
          "Workers carefully reassembled the monument on Bedloe's Island, culminating in its famous public unveiling on October 28, 1886."
        ]
      ]
    }
  },
  {
    "id": "oct-44-stock-market-crash-1929",
    "month": "October",
    "day": "October 29",
    "dayNum": 29,
    "title": "Stock Market Crash (1929)",
    "type": "Event / History (Wikipedia)",
    "connection": "Black Tuesday crash on Wall Street that signaled the start of Great Depression!",
    "emoji": "\ud83d\udcc8",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Stock Market Crash is documented on Wikipedia as a landmark historical subject from October 29.",
    "who2": "Stock Market Crash developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 29 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Stock Market Crash (1929) - Impact & Legacy",
      "paragraphs": [
        [
          "On October 29, 1929, known as Black Tuesday, the stock market collapsed, wiping out billions of dollars in a single day.",
          "Millions of everyday Americans lost their entire life savings almost overnight as stock values plummeted."
        ],
        [
          "The crash triggered the Great Depression, causing over 9,000 banks to fail across the United States during the 1930s.",
          "By 1933, American unemployment reached a staggering 25 percent, leaving around 13 million people without jobs."
        ],
        [
          "To restore trust in the financial system, President Franklin D. Roosevelt introduced the New Deal in 1933.",
          "Congress created the Securities and Exchange Commission in 1934 to regulate the stock market and prevent future crashes."
        ],
        [
          "Additionally, the Federal Deposit Insurance Corporation was established to protect bank deposits up to a certain limit.",
          "Today, the 1929 crash serves as a crucial reminder of how financial stability relies on smart government regulations and careful investing."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Stock Market Crash (1929) - Origins & History",
      "paragraphs": [
        [
          "During the Roaring Twenties, the United States experienced incredible economic growth and rising prosperity.",
          "Between 1920 and 1929, the Dow Jones Industrial Average increased sixfold as millions of people invested in stocks for the first time."
        ],
        [
          "Many investors bought stock on margin, borrowing up to 90 percent of the purchase price from brokers.",
          "This risky practice created a speculative bubble, pushing stock prices far higher than the actual value of the companies."
        ],
        [
          "By September 1929, production was slowing down, steel output dropped, and automobile sales began to fall.",
          "Panic hit Wall Street on Thursday, October 24, when a record 12.9 million shares were traded in a single day."
        ],
        [
          "Wealthy bankers temporarily stabilized the market on Friday, but panic returned full force the following week.",
          "On October 29, 1929, another 16.4 million shares were sold, finalizing the historic stock market crash that changed world history."
        ]
      ]
    }
  },
  {
    "id": "oct-45-john-adams",
    "month": "October",
    "day": "October 30",
    "dayNum": 30,
    "title": "John Adams, 2nd U.S. President (b. 1735)",
    "type": "Person (Biography.com)",
    "connection": "Founding Father, Declaration drafter, and 2nd President of the United States!",
    "emoji": "\u270d\ufe0f",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "John Adams, 2nd U.S. President is documented on Biography.com as a landmark historical subject from October 30.",
    "who2": "John Adams, 2nd U.S. President developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 30 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: John Adams, 2nd U.S. President (b. 1735) - Impact & Legacy",
      "paragraphs": [
        [
          "John Adams left a powerful legacy as the second President of the United States, serving from 1797 to 1801.",
          "His most crucial achievement was guiding the nation through its first peaceful transfer of executive power when he relinquished the presidency to Thomas Jefferson after the election of 1800."
        ],
        [
          "Adams is widely remembered as the 'Father of the American Navy' because he signed the Naval Act of 1798.",
          "This law authorized the construction of 12 new warships to defend American merchant ships during the undeclared Quasi-War with France."
        ],
        [
          "Despite intense pressure from members of his own Federalist Party to launch a full war, Adams successfully negotiated peace through the Convention of 1800.",
          "He considered avoiding a costly war with France to be one of the greatest accomplishments of his political career."
        ],
        [
          "Beyond his own presidential term, Adams established a political dynasty when his son John Quincy Adams was elected the 6th U.S. President in 1825.",
          "John Adams passed away at age 90 on July 4, 1826, exactly 50 years after the signing of the Declaration of Independence."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: John Adams, 2nd U.S. President (b. 1735) - Origins & History",
      "paragraphs": [
        [
          "John Adams was born on October 30, 1735, in Braintree, Massachusetts, to a family of humble farmers.",
          "He attended Harvard College, graduating in 1755 at the age of 19 before studying law to become a prominent attorney."
        ],
        [
          "In 1770, Adams took a brave legal stand by defending the British soldiers accused of murder in the Boston Massacre.",
          "His commitment to fair trial rights resulted in the acquittal of 6 out of the 8 soldiers involved in the trial."
        ],
        [
          "Adams served as a key delegate from Massachusetts to the Continental Congress beginning in 1774.",
          "In 1776, he strongly advocated for independence and personally chose Thomas Jefferson to write the first draft of the Declaration of Independence."
        ],
        [
          "During the Revolutionary War, Adams traveled to Europe in 1778 to secure essential financial aid, later helping draft the Treaty of Paris in 1783.",
          "His distinguished early career culminated in 1789, when he began serving 8 years as the nation's very first Vice President under George Washington."
        ]
      ]
    }
  },
  {
    "id": "oct-46-juliette-gordon-low",
    "month": "October",
    "day": "October 31",
    "dayNum": 31,
    "title": "Juliette Gordon Low, started the Girl Scouts (b. 1860)",
    "type": "Person (Biography.com)",
    "connection": "Founded Girl Scouts of the USA in 1912 to empower young women!",
    "emoji": "\u2618\ufe0f",
    "funFact": "According to Biography.com, this topic represents an important milestone in October historical calendar records!",
    "who1": "Juliette Gordon Low, started the Girl Scouts is documented on Biography.com as a landmark historical subject from October 31.",
    "who2": "Juliette Gordon Low, started the Girl Scouts developed through significant historical events recorded in detail on Biography.com.",
    "timeline": [
      "October 31 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Juliette Gordon Low, started the Girl Scouts (b. 1860) - Impact & Legacy",
      "paragraphs": [
        [
          "Juliette Gordon Low created an organization that transformed the lives of millions of young women across the United States.",
          "Since its founding, more than 50 million American women have participated in the Girl Scouts program."
        ],
        [
          "The organization revolutionized youth activities by encouraging girls to explore science, outdoor survival, and financial literacy.",
          "By earning merit badges, members learned practical skills ranging from first aid to aviation, breaking traditional social barriers for young women throughout the twentieth century."
        ],
        [
          "In 2012, President Barack Obama posthumously awarded Low the Presidential Medal of Freedom, which is the highest civilian honor in the United States.",
          "Her birthday on October 31 is officially recognized by Girl Scouts nationwide as Founder's Day to celebrate her enduring vision."
        ],
        [
          "Today, the movement reaches millions of active members and extends to over 90 countries worldwide through the World Association of Girl Guides and Girl Scouts.",
          "Low's dedication to inclusivity and leadership ensures that girls everywhere continue to build courage, confidence, and character."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Juliette Gordon Low, started the Girl Scouts (b. 1860) - Origins & History",
      "paragraphs": [
        [
          "Juliette Gordon Low was born on October 31, 1860, in Savannah, Georgia, into a prominent family.",
          "As a child nicknamed 'Daisy,' she suffered from severe hearing loss but maintained an active interest in art, athletics, and travel."
        ],
        [
          "In 1911, while living in England, Low met Sir Robert Baden-Powell, the founder of the Boy Scouts.",
          "Inspired by his youth program and the British Girl Guides established by his sister Agnes, she resolved to bring a similar opportunity to American girls."
        ],
        [
          "On March 12, 1912, Low organized the first official meeting of 18 girls in Savannah, Georgia.",
          "Before the historic meeting, she famously telephoned a relative to declare that she had something for the girls of Savannah and all of America."
        ],
        [
          "The organization officially adopted the name Girl Scouts of the United States of America in 1913 and incorporated in 1915.",
          "During World War I, members supported relief efforts by selling war bonds and growing victory gardens, establishing the group as a major national institution."
        ]
      ]
    }
  },
  {
    "id": "oct-47-halloween-history",
    "month": "October",
    "day": "October 31",
    "dayNum": 31,
    "title": "Halloween",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Ancient festival traditions originating from Celtic Samhain harvest celebrations!",
    "emoji": "\ud83c\udf83",
    "funFact": "According to Wikipedia, this topic represents an important milestone in October historical calendar records!",
    "who1": "Halloween is documented on Wikipedia as a landmark historical subject from October 31.",
    "who2": "Halloween developed through significant historical events recorded in detail on Wikipedia.",
    "timeline": [
      "October 31 - Historical milestone documented in public archives"
    ],
    "article1": {
      "title": "Article 1: Halloween - Impact & Legacy",
      "paragraphs": [
        [
          "Today, Halloween has grown into one of the largest commercial holidays in the United States, ranking second only to Christmas in retail spending.",
          "In 2023, the National Retail Federation reported that consumers spent a record total of $12.2 billion on costumes, candy, and decorations, with over 73 percent of Americans participating in the festivities on October 31."
        ],
        [
          "The tradition of trick-or-treating became widely organized across North America during the 1950s, creating a massive economic boost for the confectionery industry.",
          "Pop culture has also amplified the holiday's reach, as seen in John Carpenter's 1978 film Halloween, which grossed over $70 million globally and sparked a popular media subgenre."
        ],
        [
          "Beyond commercial sales, Halloween fosters major civic and charitable efforts across diverse communities.",
          "New York City's Village Halloween Parade, established in 1974, draws over 2 million spectators annually, while the Trick-or-Treat for UNICEF program has raised more than $185 million for international children's aid since 1950."
        ],
        [
          "In recent decades, Halloween customs have expanded far beyond Western nations to global destinations like Japan and South Korea.",
          "For example, the Kawasaki Halloween Parade in Japan ran for 24 years until 2021, regularly drawing over 120,000 spectators and showcasing how local communities adapt the holiday to fit their own cultures."
        ]
      ]
    },
    "article2": {
      "title": "Article 2: Halloween - Origins & History",
      "paragraphs": [
        [
          "Halloween traces its roots back over 2,000 years to the ancient Celtic festival known as Samhain, which marked the end of the harvest season on November 1.",
          "The Celts believed that on the night of October 31, ghosts of the dead returned to Earth, prompting people to light large bonfires and wear costumes to ward off roaming spirits."
        ],
        [
          "During the 8th century, Pope Gregory III designated November 1 as All Saints' Day to honor Christian martyrs and saints.",
          "The church incorporated traditional Samhain customs into this religious holiday, and the evening prior became known as All Hallows' Eve, which was eventually shortened to Halloween."
        ],
        [
          "When the Irish Potato Famine brought over 1 million immigrants to the United States in 1845, Irish traditions helped spread Halloween across North America.",
          "These newcomers adapted their ancient custom of carving scary faces into turnips by switching to native American pumpkins, creating the iconic jack-o'-lanterns used today."
        ],
        [
          "By the 1920s, American communities began organizing structured events to prevent the rowdy destruction and vandalism that had become associated with the holiday.",
          "Between 1930 and 1950, trick-or-treating was widely adopted as a safe, family-friendly activity for children, giving rise to the modern celebration known today."
        ]
      ]
    }
  }
];
  const RAW_NOVEMBER_DATA = [
  {
    "id": "nov-1-stamp-act",
    "month": "November",
    "day": "November 1",
    "dayNum": 1,
    "title": "Stamp Act imposed (1765)",
    "type": "Event / History (Wikipedia)",
    "connection": "Imposed by British Parliament on November 1, 1765!",
    "emoji": "\ud83d\udcdc",
    "funFact": "According to Wikipedia, the Stamp Act sparked the famous colonial slogan 'No taxation without representation!'",
    "who1": "The Stamp Act was a landmark British parliamentary law enacted on November 1, 1765, that imposed direct taxation on American colonial paper goods, igniting the American Revolution.",
    "who2": "The Stamp Act was passed by the British Parliament under Prime Minister George Grenville to help pay for British military troops stationed in North America following the Seven Years' War.",
    "timeline": [
      "1765 - Stamp Act passed by Parliament in March",
      "1765 - Takes official legal effect across American colonies on November 1",
      "1766 - Repealed by Parliament following widespread colonial boycotts"
    ]
  },
  {
    "id": "nov-1-day-of-dead",
    "month": "November",
    "day": "November 1",
    "dayNum": 1,
    "title": "Day of the Dead (Mexico)",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Celebrated annually on November 1 & 2 in Mexico!",
    "emoji": "\ud83d\udc80",
    "funFact": "According to Wikipedia, families build colorful altar ofrendas with marigolds, candles, and sugar skulls!",
    "who1": "Day of the Dead (D\u00eda de los Muertos) is a vibrant traditional Mexican holiday celebrated on November 1 and 2 that honors and remembers deceased family members.",
    "who2": "Day of the Dead originated thousands of years ago in Mesoamerican Aztec rituals honoring ancestral spirits before blending with Catholic All Saints' Day customs.",
    "timeline": [
      "c. 1000 BC - Indigenous Aztec harvest rituals honor ancestor spirits",
      "1500s - Merged with European All Saints' and All Souls' Day traditions",
      "2008 - Inscribed on UNESCO's Intangible Cultural Heritage list"
    ]
  },
  {
    "id": "nov-2-north-dakota",
    "month": "November",
    "day": "November 2",
    "dayNum": 2,
    "title": "North Dakota becomes 39th state (1889)",
    "type": "Event / History (Wikipedia)",
    "connection": "Admitted to the Union on November 2, 1889!",
    "emoji": "\ud83c\udf3e",
    "funFact": "According to Wikipedia, President Benjamin Harrison shuffled the statehood papers so no one knows whether North Dakota or South Dakota was signed first!",
    "who1": "North Dakota is a Midwestern U.S. state admitted to the Union on November 2, 1889, as the 39th state, famous for its Great Plains agriculture and Badlands.",
    "who2": "North Dakota was originally inhabited by Mandan, Hidatsa, Arikara, and Sioux nations before being explored by French-Canadian fur traders in the 1700s.",
    "timeline": [
      "1803 - Acquired by United States through Louisiana Purchase",
      "1889 - Admitted to the Union as 39th state on November 2",
      "1978 - Theodore Roosevelt National Park established"
    ]
  },
  {
    "id": "nov-2-daniel-boone",
    "month": "November",
    "day": "November 2",
    "dayNum": 2,
    "title": "Daniel Boone, frontiersman (b. 1734)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 2, 1734, legendary American frontiersman!",
    "emoji": "\ud83c\udf32",
    "funFact": "According to Biography.com, Daniel Boone blazed the Wilderness Road through the Cumberland Gap into Kentucky!",
    "who1": "Daniel Boone was a legendary American pioneer, frontiersman, and woodsman whose exploits exploring Kentucky made him one of America's first folk heroes.",
    "who2": "Daniel Boone was born in Berks County, Pennsylvania, on November 2, 1734, learning hunting and tracking skills from local Native American tribes.",
    "timeline": [
      "1734 - Born in Berks County, Pennsylvania on November 2",
      "1775 - Blazed the Wilderness Road through the Cumberland Gap into Kentucky",
      "1775 - Founded the settlement of Boonesborough along the Kentucky River",
      "1820 - Passed away in Missouri as a celebrated American frontier legend"
    ]
  },
  {
    "id": "nov-2-james-polk",
    "month": "November",
    "day": "November 2",
    "dayNum": 2,
    "title": "James Polk (11th president) (b. 1795)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 2, 1795, 11th U.S. President!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, James K. Polk achieved all four of his major presidential goals in a single four-year term!",
    "who1": "James Knox Polk was an American politician who served as the 11th President of the United States, expanding U.S. territory across the Pacific Ocean.",
    "who2": "James K. Polk was born in Mecklenburg County, North Carolina, on November 2, 1795, graduating from the University of North Carolina and studying law.",
    "timeline": [
      "1795 - Born in North Carolina on November 2",
      "1845-1849 - Served as 11th U.S. President",
      "1846 - Oregon Treaty settles Pacific Northwest boundary with Britain",
      "1848 - Treaty of Guadalupe Hidalgo expands U.S. across California and the Southwest"
    ]
  },
  {
    "id": "nov-3-sputnik-2",
    "month": "November",
    "day": "November 3",
    "dayNum": 3,
    "title": "Sputnik 2 was launched in 1957",
    "type": "Event / Space (Wikipedia)",
    "connection": "Launched into Earth orbit on November 3, 1957!",
    "emoji": "\ud83d\udc15",
    "funFact": "According to Wikipedia, Sputnik 2 carried Laika the dog, the first living creature to orbit the Earth!",
    "who1": "Sputnik 2 was the second artificial spacecraft launched into Earth orbit, carrying Laika the dog as the first living creature in orbital spaceflight.",
    "who2": "Sputnik 2 was developed by the Soviet space program under engineer Sergey Korolev and launched from Baikonur on November 3, 1957.",
    "timeline": [
      "1957 - Launched into Earth orbit on November 3 carrying Laika",
      "1957 - Transmitted bio-telemetry data back to scientists",
      "1958 - Reentered Earth's atmosphere after completing 2,570 orbits"
    ]
  },
  {
    "id": "nov-4-king-tut",
    "month": "November",
    "day": "November 4",
    "dayNum": 4,
    "title": "King Tut's tomb discovered (1922)",
    "type": "Event / History (Wikipedia)",
    "connection": "Discovered by Howard Carter on November 4, 1922!",
    "emoji": "\ud83d\udc51",
    "funFact": "According to Wikipedia, King Tutankhamun's tomb contained over 5,000 intact ancient Egyptian artifacts, including his solid gold burial mask!",
    "who1": "King Tutankhamun's tomb was a world-famous archaeological discovery made by British Egyptologist Howard Carter in the Valley of the Kings on November 4, 1922.",
    "who2": "The tomb remained virtually intact for over 3,000 years, preserving golden artifacts, royal thrones, and the iconic burial mask of the young pharaoh.",
    "timeline": [
      "1922 - Howard Carter discovers the first stone step of the tomb on November 4",
      "1923 - Burial chamber officially opened revealing the golden sarcophagus",
      "1925 - King Tut's iconic golden mask revealed to the public"
    ]
  },
  {
    "id": "nov-4-walter-cronkite",
    "month": "November",
    "day": "November 4",
    "dayNum": 4,
    "title": "Walter Cronkite (reporter) (b. 1916)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 4, 1916, 'most trusted man in America'!",
    "emoji": "\ud83d\udcfa",
    "funFact": "According to Biography.com, Walter Cronkite anchored the CBS Evening News for 19 years and reported the Apollo 11 moon landing live!",
    "who1": "Walter Cronkite was an iconic American broadcast journalist and news anchor for the CBS Evening News who was often called 'the most trusted man in America.'",
    "who2": "Walter Cronkite was born in Saint Joseph, Missouri, on November 4, 1916, starting his journalism career covering World War II for the United Press.",
    "timeline": [
      "1916 - Born in Saint Joseph, Missouri on November 4",
      "1962-1981 - Anchored the CBS Evening News",
      "1969 - Broadcasted the live Apollo 11 moon landing for 27 straight hours",
      "2009 - Passed away in New York City as a legendary broadcast journalist"
    ]
  },
  {
    "id": "nov-5-monopoly",
    "month": "November",
    "day": "November 5",
    "dayNum": 5,
    "title": "Monopoly Game premiered in 1935",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Debuted nationwide on November 5, 1935!",
    "emoji": "\ud83c\udfa9",
    "funFact": "According to Wikipedia, over 275 million copies of Monopoly have been sold worldwide in 47 languages!",
    "who1": "Monopoly is a world-famous real estate board game introduced by Parker Brothers on November 5, 1935, that became the best-selling board game in history.",
    "who2": "Monopoly was derived from The Landlord's Game created by Lizzie Magie in 1903 to demonstrate the economic consequences of land monopolies.",
    "timeline": [
      "1903 - Lizzie Magie patents The Landlord's Game",
      "1935 - Parker Brothers releases Monopoly nationwide on November 5",
      "1999 - Monopoly money printed in over 80 national currencies",
      "2008 - World Monopoly Championship held in Las Vegas"
    ]
  },
  {
    "id": "nov-5-ida-tarbell",
    "month": "November",
    "day": "November 5",
    "dayNum": 5,
    "title": "Ida Tarbell (journalist) (b. 1857)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 5, 1857, investigative journalist pioneer!",
    "emoji": "\ud83d\udcf0",
    "funFact": "According to Biography.com, Ida Tarbell's investigative report on Standard Oil led to the U.S. Supreme Court breaking up oil monopolies!",
    "who1": "Ida Tarbell was a pioneering American investigative journalist, author, and lecturer whose reporting exposed corporate monopolies and transformed American journalism.",
    "who2": "Ida Tarbell was born in Erie County, Pennsylvania, on November 5, 1857, studying biology at Allegheny College before writing for McClure's Magazine.",
    "timeline": [
      "1857 - Born in Erie County, Pennsylvania on November 5",
      "1904 - Published 'The History of the Standard Oil Company'",
      "1911 - U.S. Supreme Court orders Standard Oil monopoly broken up",
      "1944 - Passed away in Bridgeport, Connecticut as a pioneering journalist"
    ]
  },
  {
    "id": "nov-6-james-naismith",
    "month": "November",
    "day": "November 6",
    "dayNum": 6,
    "title": "James Naismith (invented basketball) (b. 1861)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 6, 1861, inventor of basketball!",
    "emoji": "\ud83c\udfc0",
    "funFact": "According to Biography.com, James Naismith wrote the original 13 rules of basketball using two peach baskets in 1891!",
    "who1": "James Naismith was a Canadian-American physical educator, physician, and sports innovator who invented the international game of basketball in December 1891.",
    "who2": "James Naismith was born in Almonte, Ontario, Canada, on November 6, 1861, studying physical education at McGill University and Springfield YMCA College.",
    "timeline": [
      "1861 - Born in Almonte, Ontario, Canada on November 6",
      "1891 - Invented basketball at Springfield YMCA using peach baskets",
      "1892 - Published the 13 Official Rules of Basketball",
      "1936 - Honored at Berlin Olympics as basketball became an official Olympic sport"
    ]
  },
  {
    "id": "nov-6-john-philip-sousa",
    "month": "November",
    "day": "November 6",
    "dayNum": 6,
    "title": "John Philip Sousa (American composer) (b. 1854)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 6, 1854, 'The March King'!",
    "emoji": "\ud83c\udfba",
    "funFact": "According to Biography.com, John Philip Sousa composed 'The Stars and Stripes Forever,' the official National March of the United States!",
    "who1": "John Philip Sousa was a world-renowned American composer and conductor known as 'The March King' who led the United States Marine Band.",
    "who2": "John Philip Sousa was born in Washington, D.C., on November 6, 1854, learning violin and brass instruments at an early age.",
    "timeline": [
      "1854 - Born in Washington, D.C. on November 6",
      "1880 - Appointed Leader of the United States Marine Band",
      "1896 - Composed 'The Stars and Stripes Forever'",
      "1987 - 'The Stars and Stripes Forever' declared official U.S. National March"
    ]
  },
  {
    "id": "nov-7-marie-curie",
    "month": "November",
    "day": "November 7",
    "dayNum": 7,
    "title": "Marie Curie (chemist & physicist) (b. 1867)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 7, 1867, Nobel laureate scientist!",
    "emoji": "\ud83e\uddea",
    "funFact": "According to Biography.com, Marie Curie is the only person to win Nobel Prizes in two different scientific disciplines (Physics and Chemistry)!",
    "who1": "Marie Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity and discovered polonium and radium.",
    "who2": "Marie Curie was born Maria Sk\u0142odowska in Warsaw, Poland, on November 7, 1867, studying physics and mathematics at the Sorbonne in Paris.",
    "timeline": [
      "1867 - Born in Warsaw, Poland on November 7",
      "1898 - Discovered radioactive elements polonium and radium",
      "1903 - Awarded Nobel Prize in Physics alongside Pierre Curie",
      "1911 - Awarded Nobel Prize in Chemistry",
      "1934 - Passed away in France as one of history's greatest scientists"
    ]
  },
  {
    "id": "nov-8-louvre",
    "month": "November",
    "day": "November 8",
    "dayNum": 8,
    "title": "Louvre opened in Paris in 1793",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Opened as a public museum on November 8, 1793!",
    "emoji": "\ud83d\uddbc\ufe0f",
    "funFact": "According to Wikipedia, the Louvre is the world's largest art museum, housing over 380,000 historic objects and the Mona Lisa!",
    "who1": "The Louvre is the world's most visited art museum and historic monument in Paris, France, housing famous masterpieces such as the Mona Lisa.",
    "who2": "The Louvre was originally built as a medieval royal fortress in the 12th century before the French National Assembly opened it as a public museum on November 8, 1793.",
    "timeline": [
      "1793 - Opened as a public art museum on November 8",
      "1989 - Iconic Louvre Glass Pyramid inaugurated in Paris",
      "2019 - Welcomed a record 10.2 million visitors in a single year"
    ]
  },
  {
    "id": "nov-8-xrays",
    "month": "November",
    "day": "November 8",
    "dayNum": 8,
    "title": "X-rays discovered (1895)",
    "type": "Event / Science (Wikipedia)",
    "connection": "Discovered by Wilhelm R\u00f6ntgen on November 8, 1895!",
    "emoji": "\ud83e\ude7b",
    "funFact": "According to Wikipedia, Wilhelm R\u00f6ntgen took the first X-ray image of his wife Anna Bertha's hand, revealing her wedding ring!",
    "who1": "X-rays are a form of high-energy electromagnetic radiation discovered by German physicist Wilhelm R\u00f6ntgen on November 8, 1895, revolutionizing medical imaging.",
    "who2": "Wilhelm R\u00f6ntgen discovered X-rays while conducting cathode ray gas discharge experiments at W\u00fcrzburg University in Germany.",
    "timeline": [
      "1895 - Wilhelm R\u00f6ntgen discovers X-rays on November 8",
      "1896 - X-rays first used in clinical bone fracture diagnosis",
      "1901 - R\u00f6ntgen wins inaugural Nobel Prize in Physics"
    ]
  },
  {
    "id": "nov-9-vietnam-memorial",
    "month": "November",
    "day": "November 9",
    "dayNum": 9,
    "title": "Vietnam Veterans' Memorial unveiled (1982)",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Dedicated in Washington, D.C. on November 9, 1982!",
    "emoji": "\ud83d\udda4",
    "funFact": "According to Wikipedia, the memorial wall was designed by 21-year-old Yale architecture student Maya Lin!",
    "who1": "The Vietnam Veterans Memorial is a national monument in Washington, D.C., honoring U.S. service members who served in the Vietnam War.",
    "who2": "The memorial wall was designed by 21-year-old Yale architecture student Maya Lin, listing the names of over 58,000 fallen and missing service members.",
    "timeline": [
      "1982 - Dedicated on the National Mall in Washington, D.C. on November 9",
      "1984 - Three Servicemen statue added to the memorial grounds",
      "2004 - Inscribed with names of over 58,000 U.S. service personnel"
    ]
  },
  {
    "id": "nov-9-benjamin-banneker",
    "month": "November",
    "day": "November 9",
    "dayNum": 9,
    "title": "Benjamin Banneker (astronomer) (b. 1731)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 9, 1731, mathematician & astronomer!",
    "emoji": "\ud83d\udd2d",
    "funFact": "According to Biography.com, Benjamin Banneker built the first striking wooden clock in America and helped survey Washington, D.C.!",
    "who1": "Benjamin Banneker was a self-taught African American mathematician, astronomer, almanac author, and surveyor who assisted in surveying the boundary lines of Washington, D.C.",
    "who2": "Benjamin Banneker was born a free Black man in Baltimore County, Maryland, on November 9, 1731, teaching himself advanced mathematics and astronomy.",
    "timeline": [
      "1731 - Born in Baltimore County, Maryland on November 9",
      "1753 - Built the first working wooden striking clock in North America",
      "1791 - Assisted Andrew Ellicott in surveying the federal territory of Washington, D.C.",
      "1792-1797 - Published annual astronomical almanacs calculating eclipse dates"
    ]
  },
  {
    "id": "nov-10-sesame-street",
    "month": "November",
    "day": "November 10",
    "dayNum": 10,
    "title": "Sesame Street aired for first time (1969)",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Debuted on public television on November 10, 1969!",
    "emoji": "\ud83d\udc25",
    "funFact": "According to Wikipedia, Sesame Street has won 205 Emmy Awards and is broadcast in over 150 countries!",
    "who1": "Sesame Street is an iconic American educational children's television series created by Joan Ganz Cooney and Lloyd Morrisett that revolutionized early childhood education.",
    "who2": "Sesame Street premiered on November 10, 1969, combining live-action actors, sketch comedy, and Jim Henson's Muppets to teach literacy and numeracy.",
    "timeline": [
      "1969 - Premieres on public television on November 10",
      "1983 - 'Goodbye, Mr. Hooper' episode wins Peabody Award for emotional honesty",
      "2019 - Celebrates its 50th anniversary with over 4,500 episodes broadcast"
    ]
  },
  {
    "id": "nov-11-veterans-day",
    "month": "November",
    "day": "November 11",
    "dayNum": 11,
    "title": "Veteran's Day",
    "type": "Event / History (Wikipedia)",
    "connection": "Observed annually on November 11 honoring all military veterans!",
    "emoji": "\ud83c\udf96\ufe0f",
    "funFact": "According to Wikipedia, Veterans Day originated as Armistice Day on November 11, 1919, marking the 11th hour of the 11th day of the 11th month!",
    "who1": "Veterans Day is an official United States federal holiday observed annually on November 11 to honor military veterans who served in the U.S. Armed Forces.",
    "who2": "Veterans Day originated as Armistice Day on November 11, 1919, marking the 11th hour of the 11th day of the 11th month when World War I fighting ceased.",
    "timeline": [
      "1919 - President Woodrow Wilson proclaims Armistice Day on November 11",
      "1938 - Armistice Day made a legal federal holiday",
      "1954 - Congress renames the holiday 'Veterans Day' to honor veterans of all American wars"
    ]
  },
  {
    "id": "nov-12-auguste-rodin",
    "month": "November",
    "day": "November 12",
    "dayNum": 12,
    "title": "Auguste Rodin (artist) (b. 1840)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 12, 1840, sculptor of 'The Thinker'!",
    "emoji": "\ud83d\uddff",
    "funFact": "According to Biography.com, Auguste Rodin is considered the founder of modern sculpture, creating 'The Thinker' and 'The Gates of Hell'!",
    "who1": "Auguste Rodin was a world-famous French sculptor widely considered the founder of modern sculpture, best known for creating bronze masterpieces such as 'The Thinker.'",
    "who2": "Auguste Rodin was born in Paris on November 12, 1840, studying drawing at the Petite \u00c9cole before working as a decorative stonemason.",
    "timeline": [
      "1840 - Born in Paris, France on November 12",
      "1880 - Commissioned to create 'The Gates of Hell'",
      "1904 - Bronze cast of 'The Thinker' displayed publicly in Paris",
      "1917 - Passed away in Meudon, France, leaving his studio as the Mus\u00e9e Rodin"
    ]
  },
  {
    "id": "nov-12-elizabeth-cady-stanton",
    "month": "November",
    "day": "November 12",
    "dayNum": 12,
    "title": "Elizabeth Cady Stanton (suffragist) (b. 1815)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 12, 1815, women's rights pioneer!",
    "emoji": "\ud83d\uddf3\ufe0f",
    "funFact": "According to Biography.com, Elizabeth Cady Stanton organized the 1848 Seneca Falls Convention and wrote the Declaration of Sentiments!",
    "who1": "Elizabeth Cady Stanton was an influential American suffragist, abolitionist, and leading figure of the early women's rights movement in the United States.",
    "who2": "Elizabeth Cady Stanton was born in Johnstown, New York, on November 12, 1815, studying at the Troy Female Seminary.",
    "timeline": [
      "1815 - Born in Johnstown, New York on November 12",
      "1848 - Organized the historic Seneca Falls Convention and wrote the Declaration of Sentiments",
      "1869 - Co-founded the National Woman Suffrage Association alongside Susan B. Anthony",
      "1902 - Passed away in New York City as a legendary leader for equality"
    ]
  },
  {
    "id": "nov-13-robert-louis-stevenson",
    "month": "November",
    "day": "November 13",
    "dayNum": 13,
    "title": "Robert Louis Stevenson (author of Treasure Island) (b. 1850)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 13, 1850, author of Treasure Island!",
    "emoji": "\ud83c\udff4\u200d\u2620\ufe0f",
    "funFact": "According to Biography.com, Robert Louis Stevenson wrote 'Treasure Island' after drawing a fictional treasure map for his stepson!",
    "who1": "Robert Louis Stevenson was a celebrated Scottish novelist, poet, and travel writer best known for classics such as 'Treasure Island' and 'Strange Case of Dr Jekyll and Mr Hyde.'",
    "who2": "Robert Louis Stevenson was born in Edinburgh, Scotland, on November 13, 1850, studying law before dedicating his life to writing.",
    "timeline": [
      "1850 - Born in Edinburgh, Scotland on November 13",
      "1883 - Published the classic adventure novel 'Treasure Island'",
      "1886 - Published 'Strange Case of Dr Jekyll and Mr Hyde'",
      "1894 - Passed away in Samoa as a literary legend"
    ]
  },
  {
    "id": "nov-14-apollo-12",
    "month": "November",
    "day": "November 14",
    "dayNum": 14,
    "title": "Apollo 12 launched in 1969",
    "type": "Event / Space (Wikipedia)",
    "connection": "Launched on second manned moon landing mission on November 14, 1969!",
    "emoji": "\ud83d\ude80",
    "funFact": "According to Wikipedia, Apollo 12 was struck by lightning twice during launch but landed with pinpoint precision near Surveyor 3!",
    "who1": "Apollo 12 was the sixth manned flight in the United States Apollo program and the second space mission to land humans on the Moon.",
    "who2": "Apollo 12 was crewed by astronauts Charles 'Pete' Conrad, Richard F. Gordon Jr., and Alan L. Bean, launching from Kennedy Space Center on November 14, 1969.",
    "timeline": [
      "1969 - Launched from Florida on November 14",
      "1969 - Lunar Module 'Intrepid' lands on Ocean of Storms on November 19",
      "1969 - Astronauts conduct 31 hours of lunar exploration before returning safely"
    ]
  },
  {
    "id": "nov-14-claude-monet",
    "month": "November",
    "day": "November 14",
    "dayNum": 14,
    "title": "Claude Monet (French impressionist painter) (b. 1840)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 14, 1840, founder of Impressionism!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, the entire Impressionist art movement got its name from Monet's painting 'Impression, Sunrise'!",
    "who1": "Claude Monet was a world-famous French painter and founder of French Impressionist painting who mastered capturing natural light and color outdoors.",
    "who2": "Claude Monet was born in Paris on November 14, 1840, studying painting at the Acad\u00e9mie Suisse.",
    "timeline": [
      "1840 - Born in Paris, France on November 14",
      "1874 - Exhibited 'Impression, Sunrise,' giving name to Impressionism",
      "1899 - Begins painting his iconic Water Lilies series at Giverny",
      "1926 - Passed away in Giverny as a master painter"
    ]
  },
  {
    "id": "nov-14-william-steig",
    "month": "November",
    "day": "November 14",
    "dayNum": 14,
    "title": "William Steig (author and illustrator) (b. 1907)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 14, 1907, creator of Shrek!",
    "emoji": "\ud83d\udfe2",
    "funFact": "According to Biography.com, William Steig wrote the picture book 'Shrek!' at age 83, inspiring the Oscar-winning animated movie franchise!",
    "who1": "William Steig was an acclaimed American cartoonist, illustrator, and children's book author who created beloved books such as 'Sylvester and the Magic Pebble' and 'Shrek!'",
    "who2": "William Steig was born in Brooklyn, New York, on November 14, 1907, working for decades as a famous cartoonist for The New Yorker.",
    "timeline": [
      "1907 - Born in Brooklyn, New York on November 14",
      "1970 - Awarded Caldecott Medal for 'Sylvester and the Magic Pebble'",
      "1990 - Published picture book 'Shrek!'",
      "2001 - DreamWorks adapts 'Shrek!' into an Oscar-winning animated movie"
    ]
  },
  {
    "id": "nov-15-georgia-okeeffe",
    "month": "November",
    "day": "November 15",
    "dayNum": 15,
    "title": "Georgia O'Keeffe (artist) (b. 1887)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 15, 1887, 'Mother of American modernism'!",
    "emoji": "\ud83c\udf3a",
    "funFact": "According to Biography.com, Georgia O'Keeffe painted dramatic close-up flowers and New Mexico desert landscapes, selling a flower painting for $44 million!",
    "who1": "Georgia O'Keeffe was a pioneering American artist known as the 'Mother of American modernism' famous for her paintings of enlarged flowers, New York skyscrapers, and New Mexico landscapes.",
    "who2": "Georgia O'Keeffe was born near Sun Prairie, Wisconsin, on November 15, 1887, studying at the Art Institute of Chicago.",
    "timeline": [
      "1887 - Born near Sun Prairie, Wisconsin on November 15",
      "1929 - Made her first summer painting trip to Northern New Mexico",
      "1977 - Awarded the Presidential Medal of Freedom by President Gerald Ford",
      "1986 - Passed away in Santa Fe at age ninety-eight"
    ]
  },
  {
    "id": "nov-16-jean-fritz",
    "month": "November",
    "day": "November 16",
    "dayNum": 16,
    "title": "Jean Fritz (author) (b. 1915)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 16, 1915, author of historical biography!",
    "emoji": "\ud83d\udcda",
    "funFact": "According to Biography.com, Jean Fritz wrote engaging children's biographies about Paul Revere, Ben Franklin, and George Washington that made history fun!",
    "who1": "Jean Fritz was an acclaimed American author of children's historical fiction and biographic books that brought American history alive for young readers.",
    "who2": "Jean Fritz was born to missionary parents in Hankou, China, on November 16, 1915, returning to America at age thirteen.",
    "timeline": [
      "1915 - Born in Hankou, China on November 16",
      "1973 - Published 'And Then What Happened, Paul Revere?'",
      "1983 - Awarded Newbery Honor for her autobiography 'Homesick: My Own Story'",
      "2017 - Passed away at age 101 as a celebrated children's author"
    ]
  },
  {
    "id": "nov-16-wc-handy",
    "month": "November",
    "day": "November 16",
    "dayNum": 16,
    "title": "W.C. Handy ('Father of the Blues') (b. 1872)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 16, 1872, 'Father of the Blues'!",
    "emoji": "\ud83c\udfb7",
    "funFact": "According to Biography.com, W.C. Handy composed 'St. Louis Blues' and brought traditional African American blues music into mainstream popular culture!",
    "who1": "William Christopher Handy was an American composer and musician who took the blues from a regional music style into a dominant force in American popular music.",
    "who2": "W.C. Handy was born in Florence, Alabama, on November 16, 1872, studying cornet and organ against his father's wishes.",
    "timeline": [
      "1872 - Born in Florence, Alabama on November 16",
      "1912 - Published 'The Memphis Blues'",
      "1914 - Composed 'St. Louis Blues,' one of the most recorded songs in music history",
      "1958 - Passed away in New York City as the Father of the Blues"
    ]
  },
  {
    "id": "nov-17-suez-canal",
    "month": "November",
    "day": "November 17",
    "dayNum": 17,
    "title": "Suez Canal began operating in 1869",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Opened for international maritime navigation on November 17, 1869!",
    "emoji": "\ud83c\udf0a",
    "funFact": "According to Wikipedia, the Suez Canal connects the Mediterranean Sea to the Red Sea, saving ships a 4,300-mile trip around Africa!",
    "who1": "The Suez Canal is a 120-mile artificial sea-level waterway in Egypt connecting the Mediterranean Sea to the Red Sea through the Isthmus of Suez.",
    "who2": "The Suez Canal was constructed between 1859 and 1869 under the direction of French diplomat Ferdinand de Lesseps.",
    "timeline": [
      "1859 - Construction begins under French diplomat Ferdinand de Lesseps",
      "1869 - Officially opens for international navigation on November 17",
      "1956 - Egypt nationalizes the canal",
      "2015 - Major expansion opens new parallel channel"
    ]
  },
  {
    "id": "nov-18-mickey-mouse",
    "month": "November",
    "day": "November 18",
    "dayNum": 18,
    "title": "Mickey Mouse appeared for first time (1928)",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Debuted in 'Steamboat Willie' on November 18, 1928!",
    "emoji": "\ud83d\udc2d",
    "funFact": "According to Wikipedia, 'Steamboat Willie' was the first cartoon featuring synchronized sound, and Walt Disney voiced Mickey himself!",
    "who1": "Mickey Mouse is an iconic cartoon character created by Walt Disney and Ub Iwerks who became the official mascot of The Walt Disney Company.",
    "who2": "Mickey Mouse debuted on November 18, 1928, in the groundbreaking animated short film 'Steamboat Willie' at the Colony Theater in New York City.",
    "timeline": [
      "1928 - Debuts in 'Steamboat Willie' in NYC on November 18",
      "1932 - Walt Disney receives special Academy Award for creating Mickey Mouse",
      "1978 - Mickey becomes first animated character to receive a star on Hollywood Walk of Fame"
    ]
  },
  {
    "id": "nov-18-antarctica",
    "month": "November",
    "day": "November 18",
    "dayNum": 18,
    "title": "Antarctica discovered in 1820",
    "type": "Event / History (Wikipedia)",
    "connection": "Discovered by Nathaniel Palmer on November 18, 1820!",
    "emoji": "\ud83e\uddca",
    "funFact": "According to Wikipedia, Antarctica is the coldest, windiest, and driest continent, containing 90% of Earth's ice!",
    "who1": "Antarctica is Earth's southernmost continent, surrounded by the Southern Ocean and discovered by American sealer Nathaniel Palmer on November 18, 1820.",
    "who2": "Nathaniel Palmer sighted the Antarctic Peninsula while searching for seal hunting grounds aboard his 47-foot sloop Hero.",
    "timeline": [
      "1820 - Nathaniel Palmer sights the Antarctic Peninsula on November 18",
      "1911 - Roald Amundsen reaches the South Pole",
      "1959 - Antarctic Treaty signed reserving continent for scientific peaceful research"
    ]
  },
  {
    "id": "nov-19-gettysburg-address",
    "month": "November",
    "day": "November 19",
    "dayNum": 19,
    "title": "Gettysburg Address delivered in 1863",
    "type": "Event / History (Wikipedia)",
    "connection": "Delivered by Abraham Lincoln on November 19, 1863!",
    "emoji": "\ud83d\udcdc",
    "funFact": "According to Wikipedia, Lincoln's address was only 273 words long and took just two minutes to deliver, becoming one of history's greatest speeches!",
    "who1": "The Gettysburg Address is a historic 273-word speech delivered by President Abraham Lincoln on November 19, 1863, at the dedication of the Soldiers' National Cemetery in Pennsylvania.",
    "who2": "President Lincoln delivered the brief address four months after the bloody Battle of Gettysburg, re-dedicating the American nation to human equality and democracy.",
    "timeline": [
      "1863 - Delivered in Gettysburg, Pennsylvania on November 19",
      "1865 - Preserved on the walls of the Lincoln Memorial in Washington, D.C."
    ]
  },
  {
    "id": "nov-19-roy-campanella",
    "month": "November",
    "day": "November 19",
    "dayNum": 19,
    "title": "Roy Campanella (baseball player) (b. 1921)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 19, 1921, 3-time National League MVP!",
    "emoji": "\u26be",
    "funFact": "According to Biography.com, Roy Campanella was a star catcher for the Brooklyn Dodgers who won three National League MVP awards!",
    "who1": "Roy Campanella was an American professional baseball catcher who played for the Brooklyn Dodgers and Negro leagues, winning three National League MVP awards.",
    "who2": "Roy Campanella was born in Philadelphia on November 19, 1921, playing Negro League baseball at age fifteen before joining the Dodgers.",
    "timeline": [
      "1921 - Born in Philadelphia, Pennsylvania on November 19",
      "1948 - Joined Brooklyn Dodgers in Major League Baseball",
      "1951, 1953, 1955 - Won three National League MVP awards",
      "1969 - Inducted into the Baseball Hall of Fame"
    ]
  },
  {
    "id": "nov-20-edwin-hubble",
    "month": "November",
    "day": "November 20",
    "dayNum": 20,
    "title": "Edwin Powell Hubble (astronomer) (b. 1889)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 20, 1889, pioneer astronomer!",
    "emoji": "\ud83d\udd2d",
    "funFact": "According to Biography.com, Edwin Hubble proved the universe is expanding, and NASA named the Hubble Space Telescope in his honor!",
    "who1": "Edwin Powell Hubble was a groundbreaking American astronomer who proved that the universe extends beyond the Milky Way galaxy and is continuously expanding.",
    "who2": "Edwin Hubble was born in Marshfield, Missouri, on November 20, 1889, studying law at Oxford University before completing his astronomy doctorate at the University of Chicago.",
    "timeline": [
      "1889 - Born in Marshfield, Missouri on November 20",
      "1924 - Proved Andromeda is a separate galaxy outside the Milky Way",
      "1929 - Formulated Hubble's Law proving the universe is expanding",
      "1990 - NASA launches the Hubble Space Telescope in his honor"
    ]
  },
  {
    "id": "nov-21-mayflower",
    "month": "November",
    "day": "November 21",
    "dayNum": 21,
    "title": "Mayflower dropped anchor in Cape Cod in 1620",
    "type": "Event / History (Wikipedia)",
    "connection": "Dropped anchor and signed Mayflower Compact on November 21, 1620!",
    "emoji": "\u26f5",
    "funFact": "According to Wikipedia, 41 male Pilgrims signed the Mayflower Compact aboard the ship, creating one of America's first frameworks of democratic governance!",
    "who1": "The Mayflower was an English ship that transported 102 Pilgrim passengers to America in 1620, anchoring at Cape Cod on November 21.",
    "who2": "The Pilgrims departed Plymouth, England, aboard the Mayflower seeking religious freedom in North America.",
    "timeline": [
      "1620 - Anchors at Provincetown Harbor, Cape Cod, on November 21",
      "1620 - 41 passengers sign Mayflower Compact establishing self-government",
      "1621 - Pilgrims celebrate the first Thanksgiving harvest festival"
    ]
  },
  {
    "id": "nov-21-ken-griffey-jr",
    "month": "November",
    "day": "November 21",
    "dayNum": 21,
    "title": "Ken Griffey Jr. (baseball player) (b. 1969)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 21, 1969, Hall of Fame home run hitter!",
    "emoji": "\u26be",
    "funFact": "According to Biography.com, Ken Griffey Jr. hit 630 career home runs and was elected to the Baseball Hall of Fame with a record 99.3% vote!",
    "who1": "Ken Griffey Jr. is an American former professional baseball outfielder who played 22 seasons in Major League Baseball and hit 630 career home runs.",
    "who2": "Ken Griffey Jr. was born in Donora, Pennsylvania, on November 21, 1969, growing up in major league clubhouses while his father played for the Cincinnati Reds.",
    "timeline": [
      "1969 - Born in Donora, Pennsylvania on November 21",
      "1989 - Debuted with Seattle Mariners at age nineteen",
      "1997 - Won American League Most Valuable Player award",
      "2016 - Inducted into Baseball Hall of Fame with 99.3% vote"
    ]
  },
  {
    "id": "nov-22-nhl-founded",
    "month": "November",
    "day": "November 22",
    "dayNum": 22,
    "title": "National Hockey League was founded in 1917",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Founded in Montreal on November 22, 1917!",
    "emoji": "\ud83c\udfd2",
    "funFact": "According to Wikipedia, the NHL started with four Canadian teams in 1917 and expanded to 32 major teams across North America!",
    "who1": "The National Hockey League (NHL) is a professional ice hockey league in North America, founded in Montreal, Quebec, on November 22, 1917.",
    "who2": "The NHL was established at the Windsor Hotel in Montreal following the suspension of the National Hockey Association.",
    "timeline": [
      "1917 - Founded in Montreal, Quebec on November 22",
      "1924 - Boston Bruins become the first U.S. franchise to join the NHL",
      "1926 - NHL assumes sole control of competing for the Stanley Cup"
    ]
  },
  {
    "id": "nov-22-jfk-assassinated",
    "month": "November",
    "day": "November 22",
    "dayNum": 22,
    "title": "JFK assassinated 1963",
    "type": "Event / History (Wikipedia)",
    "connection": "Tragic event in Dallas, Texas on November 22, 1963!",
    "emoji": "\ud83c\uddfa\ud83c\uddf8",
    "funFact": "According to Wikipedia, John F. Kennedy was the 35th President of the United States and the youngest person elected to the presidency!",
    "who1": "The assassination of John F. Kennedy occurred on November 22, 1963, in Dallas, Texas, shocking the American nation and world.",
    "who2": "President Kennedy was riding in a presidential motorcade through Dealey Plaza alongside First Lady Jacqueline Kennedy when shots were fired.",
    "timeline": [
      "1963 - Assassinated in Dallas, Texas on November 22",
      "1963 - Vice President Lyndon B. Johnson sworn in aboard Air Force One",
      "1964 - Warren Commission delivers official investigation report"
    ]
  },
  {
    "id": "nov-22-abigail-adams",
    "month": "November",
    "day": "November 22",
    "dayNum": 22,
    "title": "Abigail Adams (wife of John Adams) (b. 1744)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 22, 1744, Founding First Lady!",
    "emoji": "\u2709\ufe0f",
    "funFact": "According to Biography.com, Abigail Adams wrote famous letters urging her husband to 'Remember the Ladies' when drafting independence laws!",
    "who1": "Abigail Adams was an American Founding First Lady, writer, and political advisor who served as First Lady of the United States as wife of John Adams.",
    "who2": "Abigail Adams was born in Weymouth, Massachusetts, on November 22, 1744, educating herself in her father's extensive library.",
    "timeline": [
      "1744 - Born in Weymouth, Massachusetts on November 22",
      "1776 - Writes famous 'Remember the Ladies' letter to John Adams",
      "1797-1801 - Serves as second First Lady of the United States",
      "1825 - Her son John Quincy Adams elected 6th U.S. President"
    ]
  },
  {
    "id": "nov-23-franklin-pierce",
    "month": "November",
    "day": "November 23",
    "dayNum": 23,
    "title": "Franklin Pierce (14th president) (b. 1804)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 23, 1804, 14th U.S. President!",
    "emoji": "\ud83c\udfa9",
    "funFact": "According to Biography.com, Franklin Pierce was a New Hampshire lawyer and brigadier general who served as 14th U.S. President!",
    "who1": "Franklin Pierce was an American politician and lawyer who served as the 14th President of the United States from 1853 to 1857.",
    "who2": "Franklin Pierce was born in Hillsborough, New Hampshire, on November 23, 1804, graduating from Bowdoin College and studying law.",
    "timeline": [
      "1804 - Born in Hillsborough, New Hampshire on November 23",
      "1847 - Served as brigadier general in the Mexican-American War",
      "1853-1857 - Served as 14th U.S. President",
      "1854 - Signed the Gadsden Purchase acquiring land from Mexico"
    ]
  },
  {
    "id": "nov-24-frances-burnett",
    "month": "November",
    "day": "November 24",
    "dayNum": 24,
    "title": "Francis Hodgson Burnett (author of Secret Garden) (b. 1849)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 24, 1849, author of Little Lord Fauntleroy & Secret Garden!",
    "emoji": "\ud83c\udf31",
    "funFact": "According to Biography.com, Frances Hodgson Burnett wrote 'The Secret Garden' based on her love of gardening at her English country manor!",
    "who1": "Frances Hodgson Burnett was a British-American novelist and playwright best known for classic children's stories 'The Secret Garden' and 'A Little Princess.'",
    "who2": "Frances Hodgson Burnett was born in Manchester, England, on November 24, 1849, emigrating to Knoxville, Tennessee, at age fifteen.",
    "timeline": [
      "1849 - Born in Manchester, England on November 24",
      "1886 - Published 'Little Lord Fauntleroy'",
      "1905 - Published 'A Little Princess'",
      "1911 - Published beloved classic 'The Secret Garden'"
    ]
  },
  {
    "id": "nov-25-marc-brown",
    "month": "November",
    "day": "November 25",
    "dayNum": 25,
    "title": "Marc Brown (author) (b. 1946)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 25, 1946, creator of Arthur!",
    "emoji": "\ud83d\udc53",
    "funFact": "According to Biography.com, Marc Brown created Arthur the Aardvark as a bedtime story for his son, leading to over 65 million books sold!",
    "who1": "Marc Brown is an acclaimed American author and illustrator of children's books best known as the creator of the 'Arthur' book and TV series.",
    "who2": "Marc Brown was born in Erie, Pennsylvania, on November 25, 1946, studying illustration at the Cleveland Institute of Art.",
    "timeline": [
      "1946 - Born in Erie, Pennsylvania on November 25",
      "1976 - Published first book 'Arthur's Nose'",
      "1996 - 'Arthur' animated television series premieres on PBS Kids",
      "2022 - 'Arthur' series concludes after 25 seasons as PBS's longest-running animated show"
    ]
  },
  {
    "id": "nov-25-andrew-carnegie",
    "month": "November",
    "day": "November 25",
    "dayNum": 25,
    "title": "Andrew Carnegie (financier and philanthropist) (b. 1835)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 25, 1835, industrialist & library patron!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, Andrew Carnegie donated over $350 million to fund 2,509 public libraries worldwide!",
    "who1": "Andrew Carnegie was a Scottish-American industrialist and philanthropist who led the expansion of the American steel industry and built over 2,500 public libraries.",
    "who2": "Andrew Carnegie was born in Dunfermline, Scotland, on November 25, 1835, emigrating to Pennsylvania at age thirteen.",
    "timeline": [
      "1835 - Born in Dunfermline, Scotland on November 25",
      "1875 - Founded Carnegie Steel Company in Pittsburgh",
      "1901 - Sold Carnegie Steel to J.P. Morgan for $480 million",
      "1919 - Passed away after donating 90% of his wealth to education and public libraries"
    ]
  },
  {
    "id": "nov-25-joe-dimaggio",
    "month": "November",
    "day": "November 25",
    "dayNum": 25,
    "title": "Joe DiMaggio (baseball player) (b. 1914)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 25, 1914, 56-game hitting streak legend!",
    "emoji": "\u26be",
    "funFact": "According to Biography.com, Joe DiMaggio set a Major League Baseball record by hitting safely in 56 consecutive games in 1941!",
    "who1": "Joe DiMaggio, nicknamed 'The Yankee Clipper,' was an American professional baseball center fielder who played 13 seasons for the New York Yankees and won nine World Series titles.",
    "who2": "Joe DiMaggio was born in Martinez, California, on November 25, 1914, growing up in San Francisco as the son of a Sicilian fisherman.",
    "timeline": [
      "1914 - Born in Martinez, California on November 25",
      "1936 - Debuted with New York Yankees",
      "1941 - Achieved legendary 56-game hitting streak record",
      "1955 - Inducted into Baseball Hall of Fame"
    ]
  },
  {
    "id": "nov-26-sojourner-truth",
    "month": "November",
    "day": "November 26",
    "dayNum": 26,
    "title": "Sojourner Truth (abolitionist) died in 1883",
    "type": "Person (Biography.com)",
    "connection": "Passed away on November 26, 1883, abolitionist hero!",
    "emoji": "\ud83d\udde3\ufe0f",
    "funFact": "According to Biography.com, Sojourner Truth delivered her famous 'Ain't I a Woman?' speech at the 1851 Women's Rights Convention in Akron, Ohio!",
    "who1": "Sojourner Truth was an American abolitionist and women's rights activist who escaped enslavement and became a renowned national orator for civil rights.",
    "who2": "Sojourner Truth was born Isabella Baumfree in Ulster County, New York, around 1797, escaping to freedom in 1826 with her infant daughter.",
    "timeline": [
      "c. 1797 - Born in Ulster County, New York",
      "1826 - Escaped to freedom with her infant daughter Sophia",
      "1851 - Delivered famous 'Ain't I a Woman?' speech in Akron, Ohio",
      "1883 - Passed away in Battle Creek, Michigan on November 26"
    ]
  },
  {
    "id": "nov-26-charles-schulz",
    "month": "November",
    "day": "November 26",
    "dayNum": 26,
    "title": "Charles Schulz (creator of Peanuts comic strip) (b. 1922)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 26, 1922, creator of Charlie Brown & Snoopy!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, Charles M. Schulz drew all 17,897 Peanuts comic strips by himself over 50 years!",
    "who1": "Charles M. Schulz was an American cartoonist and creator of the comic strip Peanuts, widely regarded as one of the most influential cartoonists in history.",
    "who2": "Charles Schulz was born in Minneapolis, Minnesota, on November 26, 1922, serving in the U.S. Army during World War II.",
    "timeline": [
      "1922 - Born in Minneapolis, Minnesota on November 26",
      "1950 - Launched Peanuts comic strip in seven daily newspapers",
      "2000 - Passed away in Santa Rosa, California, after receiving Congressional Gold Medal"
    ]
  },
  {
    "id": "nov-27-macys-parade",
    "month": "November",
    "day": "November 27",
    "dayNum": 27,
    "title": "First Macy's Thanksgiving Day Parade 1924",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Debuted in New York City on November 27, 1924!",
    "emoji": "\ud83c\udf88",
    "funFact": "According to Wikipedia, the first Macy's parade featured live animals from the Central Park Zoo before giant character balloons were introduced in 1927!",
    "who1": "The Macy's Thanksgiving Day Parade is an annual parade in New York City presented by U.S. department store chain Macy's, featuring giant character balloons, marching bands, and floats.",
    "who2": "The parade was organized by Macy's immigrant employees on November 27, 1924, marching from 145th Street to Macy's flagship store in Herald Square.",
    "timeline": [
      "1924 - First parade held in NYC on Thanksgiving Day, November 27",
      "1927 - Felix the Cat becomes the first giant character balloon",
      "1948 - First national television broadcast of the parade on NBC"
    ]
  },
  {
    "id": "nov-28-panama-independence",
    "month": "November",
    "day": "November 28",
    "dayNum": 28,
    "title": "Panama gained Independence from Spain 1821",
    "type": "Event / History (Wikipedia)",
    "connection": "Declared independence from Spain on November 28, 1821!",
    "emoji": "\ud83c\uddf5\ud83c\udde6",
    "funFact": "According to Wikipedia, Panama declared independence from Spanish rule in 1821 and joined Gran Colombia alongside Sim\u00f3n Bol\u00edvar!",
    "who1": "Panama's independence from Spain was achieved on November 28, 1821, ending over 300 years of Spanish colonial rule in Central America.",
    "who2": "Panamanian patriots declared independence in Panama City following the 'Primer Grito de Independencia' in Villa de Los Santos.",
    "timeline": [
      "1821 - Declared independence from Spain on November 28",
      "1821 - Voluntarily joined Sim\u00f3n Bol\u00edvar's Republic of Gran Colombia",
      "1903 - Declared full national sovereignty as the Republic of Panama"
    ]
  },
  {
    "id": "nov-29-louisa-may-alcott",
    "month": "November",
    "day": "November 29",
    "dayNum": 29,
    "title": "Louisa May Alcott (author of Little Women) (b. 1832)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 29, 1832, author of Little Women!",
    "emoji": "\ud83d\udcd6",
    "funFact": "According to Biography.com, Louisa May Alcott wrote 'Little Women' based on her own childhood growing up with three sisters in Concord, Massachusetts!",
    "who1": "Louisa May Alcott was an American novelist, short story writer, and poet best known as the author of the beloved classic novel 'Little Women.'",
    "who2": "Louisa May Alcott was born in Germantown, Pennsylvania, on November 29, 1832, growing up among Transcendentalist writers Ralph Waldo Emerson and Henry David Thoreau.",
    "timeline": [
      "1832 - Born in Germantown, Pennsylvania on November 29",
      "1868 - Published 'Little Women' to instant critical acclaim",
      "1888 - Passed away in Boston, Massachusetts as a beloved American novelist"
    ]
  },
  {
    "id": "nov-29-cs-lewis",
    "month": "November",
    "day": "November 29",
    "dayNum": 29,
    "title": "C.S. Lewis (author of Narnia) (b. 1898)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 29, 1898, author of Chronicles of Narnia!",
    "emoji": "\ud83e\udd81",
    "funFact": "According to Biography.com, C.S. Lewis was an Oxford professor and close friend of J.R.R. Tolkien who wrote 'The Lion, the Witch and the Wardrobe'!",
    "who1": "Clive Staples Lewis was a British writer, literary scholar, and theologian best known for his fantasy series 'The Chronicles of Narnia.'",
    "who2": "C.S. Lewis was born in Belfast, Ireland, on November 29, 1898, studying at Oxford University.",
    "timeline": [
      "1898 - Born in Belfast, Ireland on November 29",
      "1950 - Published 'The Lion, the Witch and the Wardrobe'",
      "1956 - Completed seven-volume 'Chronicles of Narnia' series",
      "1963 - Passed away in Oxford, England"
    ]
  },
  {
    "id": "nov-30-mark-twain",
    "month": "November",
    "day": "November 30",
    "dayNum": 30,
    "title": "Mark Twain (author) (b. 1835)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 30, 1835, Father of American Literature!",
    "emoji": "\u26f5",
    "funFact": "According to Biography.com, Mark Twain worked as a Mississippi riverboat pilot and took his pen name from a riverboat call meaning two fathoms deep!",
    "who1": "Mark Twain, born Samuel Langhorne Clemens, was an iconic American humorist, journalist, lecturer, and novelist known as the Father of American Literature.",
    "who2": "Mark Twain was born in Florida, Missouri, on November 30, 1835, growing up along the Mississippi River in Hannibal, Missouri, working as a riverboat pilot.",
    "timeline": [
      "1835 - Born in Florida, Missouri on November 30",
      "1876 - Published 'The Adventures of Tom Sawyer'",
      "1884 - Published 'Adventures of Huckleberry Finn'",
      "1910 - Passed away in Redding, Connecticut"
    ]
  },
  {
    "id": "nov-30-lucy-maud-montgomery",
    "month": "November",
    "day": "November 30",
    "dayNum": 30,
    "title": "Lucy Maud Montgomery (author of Anne of Green Gables) (b. 1874)",
    "type": "Person (Biography.com)",
    "connection": "Born on November 30, 1874, author of Anne of Green Gables!",
    "emoji": "\ud83d\udc52",
    "funFact": "According to Biography.com, L.M. Montgomery set her famous novel 'Anne of Green Gables' on Prince Edward Island, Canada!",
    "who1": "Lucy Maud Montgomery was a Canadian author best known for a series of novels beginning in 1908 with 'Anne of Green Gables.'",
    "who2": "L.M. Montgomery was born in Clifton, Prince Edward Island, Canada, on November 30, 1874, raised by her grandparents.",
    "timeline": [
      "1874 - Born in Clifton, Prince Edward Island on November 30",
      "1908 - Published 'Anne of Green Gables' becoming an international bestseller",
      "1942 - Passed away in Toronto, Ontario as a Canadian literary icon"
    ]
  }
];
  const RAW_DECEMBER_DATA = [
  {
    "id": "dec-1-jan-brett",
    "month": "December",
    "day": "December 1",
    "dayNum": 1,
    "title": "Jan Brett, author (b. 1949)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 1, 1949, beloved children's author!",
    "emoji": "\ud83e\udd94",
    "funFact": "According to Biography.com, Jan Brett is famous for her intricate border illustrations in books like 'The Mitten'!",
    "who1": "Jan Brett is an acclaimed American children's book author and illustrator best known for detailed winter picture books such as 'The Mitten' and 'The Hat.'",
    "who2": "Jan Brett was born in Hingham, Massachusetts, on December 1, 1949, spending hours at the Boston Museum of Fine Arts studying historical art.",
    "timeline": [
      "1949 - Born in Hingham, Massachusetts on December 1",
      "1989 - Published her beloved winter classic 'The Mitten'",
      "2021 - Over 42 million copies of her books in print worldwide"
    ]
  },
  {
    "id": "dec-1-madame-tussaud",
    "month": "December",
    "day": "December 1",
    "dayNum": 1,
    "title": "Madam Tussaud, French wax modeler (b. 1761)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 1, 1761, wax museum founder!",
    "emoji": "\ud83d\uddff",
    "funFact": "According to Biography.com, Marie Tussaud created wax sculptures of historical figures in Paris before opening her famous London museum in 1835!",
    "who1": "Marie Tussaud, known as Madame Tussaud, was a French artist and sculptor who founded Madame Tussauds wax museum in London.",
    "who2": "Marie Tussaud was born Marie Grosholtz in Strasbourg, France, on December 1, 1761, learning wax modeling from Dr. Philippe Curtius.",
    "timeline": [
      "1761 - Born in Strasbourg, France on December 1",
      "1777 - Sculpted her first wax figure of Voltaire",
      "1835 - Established permanent wax museum on Baker Street in London"
    ]
  },
  {
    "id": "dec-2-georges-seurat",
    "month": "December",
    "day": "December 2",
    "dayNum": 2,
    "title": "Georges Seurat, artist (b. 1859)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 2, 1859, pioneer of Pointillism!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, Georges Seurat painted 'A Sunday on La Grande Jatte' using millions of tiny painted dots!",
    "who1": "Georges-Pierre Seurat was a French Post-Impressionist painter who devised the innovative painting techniques of Chromoluminarism and Pointillism.",
    "who2": "Georges Seurat was born in Paris on December 2, 1859, studying drawing at the \u00c9cole des Beaux-Arts.",
    "timeline": [
      "1859 - Born in Paris, France on December 2",
      "1886 - Exhibited monumental Pointillist masterpiece 'A Sunday on La Grande Jatte'",
      "1891 - Passed away in Paris leaving a landmark legacy in modern art"
    ]
  },
  {
    "id": "dec-3-katarina-witt",
    "month": "December",
    "day": "December 3",
    "dayNum": 3,
    "title": "Katarina Witt, figure skater (b. 1965)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 3, 1965, 2-time Olympic figure skating champion!",
    "emoji": "\u26f8\ufe0f",
    "funFact": "According to Biography.com, Katarina Witt won consecutive Olympic gold medals in figure skating in 1984 and 1988!",
    "who1": "Katarina Witt is a German former competitive figure skater who won two Olympic gold medals, four World Championships, and six European titles.",
    "who2": "Katarina Witt was born in Staaken, East Germany, on December 3, 1965, training under renowned coach Jutta M\u00fcller.",
    "timeline": [
      "1965 - Born in Staaken, East Germany on December 3",
      "1984 - Won first Olympic gold medal in Sarajevo",
      "1988 - Retained her Olympic title in Calgary winning second gold medal",
      "1995 - Inducted into the World Figure Skating Hall of Fame"
    ]
  },
  {
    "id": "dec-4-iss-launched",
    "month": "December",
    "day": "December 4",
    "dayNum": 4,
    "title": "International Space Station launched (1998)",
    "type": "Event / Space (Wikipedia)",
    "connection": "First U.S. module Unity launched on December 4, 1998!",
    "emoji": "\ud83d\udef0\ufe0f",
    "funFact": "According to Wikipedia, the ISS orbits Earth every 90 minutes at 17,500 mph and has been continuously inhabited since November 2000!",
    "who1": "The International Space Station (ISS) is a modular space station in low Earth orbit built by an international partnership of space agencies.",
    "who2": "Construction began in orbit when Space Shuttle Endeavour launched the Unity node module on December 4, 1998, connecting with Zarya.",
    "timeline": [
      "1998 - Space Shuttle Endeavour launches Unity node module on December 4",
      "2000 - Expedition 1 arrives, marking continuous human residency",
      "2010 - ISS station construction completed"
    ]
  },
  {
    "id": "dec-5-phillis-wheatley",
    "month": "December",
    "day": "December 5",
    "dayNum": 5,
    "title": "Phyllis Wheatley, poet (died 1784)",
    "type": "Person (Biography.com)",
    "connection": "Passed away on December 5, 1784, 1st African American published poet!",
    "emoji": "\ud83d\udcdc",
    "funFact": "According to Biography.com, Phillis Wheatley published her poetry book in 1773, praised by George Washington and Voltaire!",
    "who1": "Phillis Wheatley was the first African American author to publish a book of poetry, establishing the African American literary tradition.",
    "who2": "Phillis Wheatley was born in West Africa around 1753, enslaved and brought to Boston before learning to read and write English, Greek, and Latin.",
    "timeline": [
      "c. 1753 - Born in West Africa",
      "1773 - Published 'Poems on Various Subjects, Religious and Moral' in London",
      "1784 - Passed away in Boston on December 5"
    ]
  },
  {
    "id": "dec-5-walt-disney",
    "month": "December",
    "day": "December 5",
    "dayNum": 5,
    "title": "Walt Disney, animator and filmmaker (b. 1901)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 5, 1901, animation & theme park legend!",
    "emoji": "\ud83c\udff0",
    "funFact": "According to Biography.com, Walt Disney won 22 Academy Awards and created Mickey Mouse, Disneyland, and Walt Disney World!",
    "who1": "Walter Elias Disney was an American animator, film producer, and entrepreneur who revolutionized entertainment and theme park design.",
    "who2": "Walt Disney was born in Chicago, Illinois, on December 5, 1901, taking drawing classes at the Kansas City Art Institute.",
    "timeline": [
      "1901 - Born in Chicago, Illinois on December 5",
      "1928 - Created Mickey Mouse in 'Steamboat Willie'",
      "1937 - Released 'Snow White and the Seven Dwarfs,' the first full-length animated film",
      "1955 - Opened Disneyland theme park in Anaheim, California"
    ]
  },
  {
    "id": "dec-5-togo",
    "month": "December",
    "day": "December 5",
    "dayNum": 5,
    "title": "Togo, sled dog hero (died 1929)",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Passed away on December 5, 1929, 1925 Serum Run lead dog!",
    "emoji": "\ud83d\udc15",
    "funFact": "According to Wikipedia, Togo led Leonhard Seppala's sled dog team across 260 miles of dangerous Alaskan ice during the 1925 Serum Run!",
    "who1": "Togo was a Siberian Husky lead sled dog owned by musher Leonhard Seppala who ran the longest and most hazardous leg of the 1925 Serum Run to Nome.",
    "who2": "Togo was born in Nome, Alaska, in 1913, overcoming small size to become Seppala's most reliable lead sled dog.",
    "timeline": [
      "1913 - Born in Nome, Alaska",
      "1925 - Led sled team 260 miles through blizzard conditions during Nome Serum Run",
      "1929 - Passed away in Poland, Maine on December 5",
      "2019 - Honored with a bronze statue in New York City's Seward Park"
    ]
  },
  {
    "id": "dec-6-13th-amendment",
    "month": "December",
    "day": "December 6",
    "dayNum": 6,
    "title": "13th Amendment ratified abolishing slavery (1865)",
    "type": "Event / History (Wikipedia)",
    "connection": "Ratified on December 6, 1865, abolishing slavery!",
    "emoji": "\ud83d\udcdc",
    "funFact": "According to Wikipedia, the 13th Amendment officially abolished slavery and involuntary servitude throughout the entire United States!",
    "who1": "The 13th Amendment to the United States Constitution officially abolished slavery and involuntary servitude across the American nation.",
    "who2": "The amendment passed Congress in January 1865 and achieved final constitutional ratification by three-fourths of states on December 6, 1865.",
    "timeline": [
      "1865 - Passed by U.S. Congress in January",
      "1865 - Ratified when Georgia becomes 27th state to approve it on December 6",
      "1865 - Officially proclaimed part of the U.S. Constitution on December 18"
    ]
  },
  {
    "id": "dec-6-ira-gershwin",
    "month": "December",
    "day": "December 6",
    "dayNum": 6,
    "title": "Ira Gershwin, lyricist (b. 1896)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 6, 1896, Broadway lyricist icon!",
    "emoji": "\ud83c\udfbc",
    "funFact": "According to Biography.com, Ira Gershwin wrote famous Broadway song lyrics alongside his brother George, including 'I Got Rhythm'!",
    "who1": "Ira Gershwin was an American lyricist who collaborated with his younger brother George Gershwin to create some of the most memorable songs of the 20th century.",
    "who2": "Ira Gershwin was born Israel Gershovitz in New York City on December 6, 1896, attending City College of New York.",
    "timeline": [
      "1896 - Born in New York City on December 6",
      "1924 - Co-created Broadway hit musical 'Lady, Be Good!'",
      "1932 - Awarded Pulitzer Prize for Drama for 'Of Thee I Sing'",
      "1983 - Passed away in Beverly Hills, California"
    ]
  },
  {
    "id": "dec-7-pearl-harbor-day",
    "month": "December",
    "day": "December 7",
    "dayNum": 7,
    "title": "Pearl Harbor Day (1941)",
    "type": "Event / History (Wikipedia)",
    "connection": "National Pearl Harbor Remembrance Day on December 7!",
    "emoji": "\ud83c\uddfa\ud83c\uddf8",
    "funFact": "According to Wikipedia, President Franklin D. Roosevelt declared December 7, 1941, 'a date which will live in infamy'!",
    "who1": "National Pearl Harbor Remembrance Day commemorates the surprise military attack on the U.S. naval base at Pearl Harbor, Hawaii, on December 7, 1941.",
    "who2": "The attack damaged U.S. Pacific Fleet battleships and prompted the United States to formally enter World War II.",
    "timeline": [
      "1941 - Surprise attack on Pearl Harbor naval base occurs on December 7",
      "1941 - President Roosevelt delivers 'Infamy Speech' requesting war declaration",
      "1994 - U.S. Congress designates December 7 as annual National Pearl Harbor Remembrance Day"
    ]
  },
  {
    "id": "dec-7-larry-bird",
    "month": "December",
    "day": "December 7",
    "dayNum": 7,
    "title": "Larry Bird, basketball player (b. 1956)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 7, 1956, 3-time NBA champion!",
    "emoji": "\ud83c\udfc0",
    "funFact": "According to Biography.com, Larry Bird won three consecutive NBA MVP awards and led the Boston Celtics to three championships!",
    "who1": "Larry Joe Bird is an American former professional basketball player and executive who led the Boston Celtics to three NBA titles.",
    "who2": "Larry Bird was born in West Baden Springs, Indiana, on December 7, 1956, leading Indiana State University to the 1979 NCAA title game.",
    "timeline": [
      "1956 - Born in West Baden Springs, Indiana on December 7",
      "1981, 1984, 1986 - Won three NBA Championships with Boston Celtics",
      "1984, 1985, 1986 - Won three consecutive NBA Most Valuable Player awards",
      "1992 - Won Olympic gold medal as member of the iconic 'Dream Team'"
    ]
  },
  {
    "id": "dec-8-eli-whitney",
    "month": "December",
    "day": "December 8",
    "dayNum": 8,
    "title": "Eli Whitney, inventor of cotton gin (b. 1765)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 8, 1765, cotton gin inventor!",
    "emoji": "\u2699\ufe0f",
    "funFact": "According to Biography.com, Eli Whitney invented the cotton gin in 1793 and pioneered interchangeable parts in manufacturing!",
    "who1": "Eli Whitney was an American inventor best known for inventing the cotton gin and promoting interchangeable parts in mass production.",
    "who2": "Eli Whitney was born in Westborough, Massachusetts, on December 8, 1765, graduating from Yale College.",
    "timeline": [
      "1765 - Born in Westborough, Massachusetts on December 8",
      "1793 - Invented the cotton gin revolutionizing Southern agriculture",
      "1798 - Secured U.S. military contract pioneering interchangeable musket parts"
    ]
  },
  {
    "id": "dec-8-ec-segar",
    "month": "December",
    "day": "December 8",
    "dayNum": 8,
    "title": "Elzie Crisler Segar, creator of Popeye (b. 1894)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 8, 1894, creator of Popeye!",
    "emoji": "\u2693",
    "funFact": "According to Biography.com, E.C. Segar created Popeye the Sailor Man in 1929, making spinach famous nationwide!",
    "who1": "Elzie Crisler Segar was an American cartoonist best known as the creator of Popeye the Sailor Man.",
    "who2": "E.C. Segar was born in Chester, Illinois, on December 8, 1894, working as a film projectionist before moving to Chicago.",
    "timeline": [
      "1894 - Born in Chester, Illinois on December 8",
      "1919 - Created 'Thimble Theatre' comic strip",
      "1929 - Introduced Popeye the Sailor Man character into his comic strip",
      "1938 - Passed away in Santa Monica, California"
    ]
  },
  {
    "id": "dec-9-petrified-forest",
    "month": "December",
    "day": "December 9",
    "dayNum": 9,
    "title": "Petrified Forest National Park established (1962)",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Established as national park on December 9, 1962!",
    "emoji": "\ud83e\udeb5",
    "funFact": "According to Wikipedia, Petrified Forest National Park contains 225-million-year-old fossilized wood logs and Painted Desert vistas!",
    "who1": "Petrified Forest National Park is an American national park in northeastern Arizona featuring large deposits of petrified wood and Triassic fossils.",
    "who2": "The area was designated a national monument by President Theodore Roosevelt in 1906 before Congress granted National Park status on December 9, 1962.",
    "timeline": [
      "1906 - Designated National Monument by President Theodore Roosevelt",
      "1962 - Granted official National Park status on December 9",
      "2004 - Park boundaries expanded to encompass over 221,000 acres"
    ]
  },
  {
    "id": "dec-10-emily-dickinson",
    "month": "December",
    "day": "December 10",
    "dayNum": 10,
    "title": "Emily Dickenson, poet (b. 1830)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 10, 1830, American poetry icon!",
    "emoji": "\ud83e\udeb6",
    "funFact": "According to Biography.com, Emily Dickinson wrote nearly 1,800 poems in private, but fewer than ten were published during her lifetime!",
    "who1": "Emily Dickinson was an iconic American poet whose innovative slant rhyme, short lines, and unconventional punctuation reshaped modern poetry.",
    "who2": "Emily Dickinson was born in Amherst, Massachusetts, on December 10, 1830, studying at Amherst Academy and Mount Holyoke Female Seminary.",
    "timeline": [
      "1830 - Born in Amherst, Massachusetts on December 10",
      "1862 - Initiated correspondence with literary critic Thomas Wentworth Higginson",
      "1886 - Passed away in Amherst leaving nearly 1,800 manuscript poems",
      "1890 - First complete collection of her poems published posthumously"
    ]
  },
  {
    "id": "dec-10-red-cloud",
    "month": "December",
    "day": "December 10",
    "dayNum": 10,
    "title": "Red Cloud, Sioux Indian Chief (died 1909)",
    "type": "Person (Biography.com)",
    "connection": "Passed away on December 10, 1909, Oglala Lakota Chief!",
    "emoji": "\ud83e\udeb6",
    "funFact": "According to Biography.com, Red Cloud led his people in 'Red Cloud's War,' forcing the U.S. government to sign the 1868 Treaty of Fort Laramie!",
    "who1": "Red Cloud was a prominent leader and war chief of the Oglala Lakota nation who successfully defended Native lands in Wyoming and Montana.",
    "who2": "Red Cloud was born near the Blue Water Creek in Nebraska around 1822, rising to tribal leadership through bravery and military skill.",
    "timeline": [
      "c. 1822 - Born near Blue Water Creek, Nebraska",
      "1866-1868 - Led successful military campaign 'Red Cloud's War' against U.S. forts",
      "1868 - Signed Treaty of Fort Laramie securing the Great Sioux Reservation",
      "1909 - Passed away at Pine Ridge Reservation on December 10"
    ]
  },
  {
    "id": "dec-11-john-kerry",
    "month": "December",
    "day": "December 11",
    "dayNum": 11,
    "title": "John Kerry, U.S. Secretary of State (b. 1943)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 11, 1943, Secretary of State & Senator!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, John Kerry served 28 years in the U.S. Senate, ran for president in 2004, and served as 68th U.S. Secretary of State!",
    "who1": "John Forbes Kerry is an American politician and diplomat who served as the 68th U.S. Secretary of State and longtime U.S. Senator from Massachusetts.",
    "who2": "John Kerry was born in Aurora, Colorado, on December 11, 1943, graduating from Yale University and serving as a naval officer in Vietnam.",
    "timeline": [
      "1943 - Born in Aurora, Colorado on December 11",
      "1985-2013 - Served as U.S. Senator from Massachusetts",
      "2004 - Nominated as Democratic candidate for U.S. President",
      "2013-2017 - Served as 68th U.S. Secretary of State"
    ]
  },
  {
    "id": "dec-11-unicef",
    "month": "December",
    "day": "December 11",
    "dayNum": 11,
    "title": "UNICEF established (1946)",
    "type": "Event / History (Wikipedia)",
    "connection": "Created by UN General Assembly on December 11, 1946!",
    "emoji": "\ud83c\uddfa\ud83c\uddf3",
    "funFact": "According to Wikipedia, UNICEF was awarded the Nobel Peace Prize in 1965 for promoting brotherhood among nations!",
    "who1": "UNICEF (United Nations International Children's Emergency Fund) is a UN agency providing humanitarian and developmental aid to children worldwide.",
    "who2": "UNICEF was created by the UN General Assembly in New York on December 11, 1946, to assist children in post-WWII Europe and China.",
    "timeline": [
      "1946 - Established by UN General Assembly on December 11",
      "1953 - Made a permanent part of the United Nations system",
      "1965 - Awarded the Nobel Peace Prize"
    ]
  },
  {
    "id": "dec-12-tracy-austin",
    "month": "December",
    "day": "December 12",
    "dayNum": 12,
    "title": "Tracy Austin, tennis player (b. 1962)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 12, 1962, youngest U.S. Open champion!",
    "emoji": "\ud83c\udfbe",
    "funFact": "According to Biography.com, Tracy Austin won the U.S. Open singles title at age 16, becoming the youngest champion in U.S. Open history!",
    "who1": "Tracy Ann Austin is an American former world No. 1 professional tennis player who won two U.S. Open singles championships.",
    "who2": "Tracy Austin was born in Palos Verdes, California, on December 12, 1962, turning professional at age fifteen.",
    "timeline": [
      "1962 - Born in Palos Verdes, California on December 12",
      "1979 - Won U.S. Open singles title at age sixteen",
      "1981 - Won her second U.S. Open singles title",
      "1992 - Inducted into the International Tennis Hall of Fame"
    ]
  },
  {
    "id": "dec-12-john-jay",
    "month": "December",
    "day": "December 12",
    "dayNum": 12,
    "title": "John Jay, First Chief Justice of the Supreme Court (b. 1745)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 12, 1745, 1st U.S. Chief Justice!",
    "emoji": "\u2696\ufe0f",
    "funFact": "According to Biography.com, John Jay co-authored the Federalist Papers and negotiated Jay's Treaty with Great Britain!",
    "who1": "John Jay was an American statesman, diplomat, Founding Father, and the first Chief Justice of the United States Supreme Court.",
    "who2": "John Jay was born in New York City on December 12, 1745, graduating from King's College and practicing law.",
    "timeline": [
      "1745 - Born in New York City on December 12",
      "1787 - Co-authored the Federalist Papers defending the U.S. Constitution",
      "1789-1795 - Served as first Chief Justice of the United States Supreme Court",
      "1795-1801 - Served as Governor of New York State"
    ]
  },
  {
    "id": "dec-13-mary-todd-lincoln",
    "month": "December",
    "day": "December 13",
    "dayNum": 13,
    "title": "Mary Todd Lincoln, wife of Abraham Lincoln (b. 1818)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 13, 1818, First Lady of U.S.!",
    "emoji": "\ud83c\udf1f",
    "funFact": "According to Biography.com, Mary Todd Lincoln was fluent in French, educated in literature, and served as First Lady during the Civil War!",
    "who1": "Mary Ann Todd Lincoln was the First Lady of the United States from 1861 to 1865 as the wife of 16th U.S. President Abraham Lincoln.",
    "who2": "Mary Todd was born into a wealthy family in Lexington, Kentucky, on December 13, 1818, studying literature and French.",
    "timeline": [
      "1818 - Born in Lexington, Kentucky on December 13",
      "1842 - Married Abraham Lincoln in Springfield, Illinois",
      "1861-1865 - Served as First Lady during the Civil War",
      "1882 - Passed away in Springfield, Illinois"
    ]
  },
  {
    "id": "dec-13-sergei-fedorov",
    "month": "December",
    "day": "December 13",
    "dayNum": 13,
    "title": "Sergei Federov, hockey player (b. 1969)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 13, 1969, 3-time Stanley Cup champion!",
    "emoji": "\ud83c\udfd2",
    "funFact": "According to Biography.com, Sergei Fedorov scored 1,179 NHL points and won three Stanley Cups with the Detroit Red Wings!",
    "who1": "Sergei Viktorovich Fedorov is a Russian former professional ice hockey center who won three Stanley Cup championships with the Detroit Red Wings.",
    "who2": "Sergei Fedorov was born in Pskov, Soviet Union, on December 13, 1969, playing for CSKA Moscow before joining the NHL.",
    "timeline": [
      "1969 - Born in Pskov, Soviet Union on December 13",
      "1994 - Won Hart Memorial Trophy as NHL Most Valuable Player",
      "1997, 1998, 2002 - Won three Stanley Cups with Detroit Red Wings",
      "2015 - Inducted into the Hockey Hall of Fame"
    ]
  },
  {
    "id": "dec-14-south-pole",
    "month": "December",
    "day": "December 14",
    "dayNum": 14,
    "title": "South Pole discovered (1911)",
    "type": "Event / History (Wikipedia)",
    "connection": "Reached by Roald Amundsen on December 14, 1911!",
    "emoji": "\ud83e\uddca",
    "funFact": "According to Wikipedia, Norwegian explorer Roald Amundsen led a 52-dog sled expedition to become the first human to reach the South Pole!",
    "who1": "The South Pole Discovery occurred on December 14, 1911, when Norwegian explorer Roald Amundsen and his team reached the southernmost point on Earth.",
    "who2": "Amundsen's expedition departed Framheim base on October 19, 1911, navigating across the Ross Ice Shelf and Transantarctic Mountains.",
    "timeline": [
      "1911 - Reached geographical South Pole on December 14",
      "1911 - Planted Norwegian flag and established Polheim camp",
      "1912 - Returned safely to Framheim base on January 25"
    ]
  },
  {
    "id": "dec-15-gustave-eiffel",
    "month": "December",
    "day": "December 15",
    "dayNum": 15,
    "title": "Alexandre Gustave Eiffel, engineer (b. 1832)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 15, 1832, designer of Eiffel Tower!",
    "emoji": "\ud83d\uddfc",
    "funFact": "According to Biography.com, Gustave Eiffel designed the Eiffel Tower in Paris and engineered the internal iron skeleton of the Statue of Liberty!",
    "who1": "Alexandre Gustave Eiffel was a French civil engineer and architect famous for building the Eiffel Tower and designing Liberty's internal structure.",
    "who2": "Gustave Eiffel was born in Dijon, France, on December 15, 1832, studying chemistry and metallurgy at \u00c9cole Centrale Paris.",
    "timeline": [
      "1832 - Born in Dijon, France on December 15",
      "1885 - Designed the internal iron structural framework of the Statue of Liberty",
      "1889 - Completed construction of the Eiffel Tower for Paris World's Fair",
      "1923 - Passed away in Paris as a master civil engineer"
    ]
  },
  {
    "id": "dec-15-bill-of-rights",
    "month": "December",
    "day": "December 15",
    "dayNum": 15,
    "title": "Bill of Rights ratified (1791)",
    "type": "Event / History (Wikipedia)",
    "connection": "Ratified into U.S. Constitution on December 15, 1791!",
    "emoji": "\ud83d\udcdc",
    "funFact": "According to Wikipedia, the Bill of Rights contains the first ten amendments guaranteeing individual liberties such as freedom of speech and religion!",
    "who1": "The Bill of Rights comprises the first ten amendments to the United States Constitution, guaranteeing fundamental personal rights and legal protections.",
    "who2": "The amendments were drafted by James Madison in 1789 and achieved final ratification when Virginia approved them on December 15, 1791.",
    "timeline": [
      "1789 - Proposed by James Madison in 1st U.S. Congress",
      "1791 - Ratified when Virginia becomes 11th state to approve on December 15",
      "1941 - President Franklin D. Roosevelt designates December 15 as Bill of Rights Day"
    ]
  },
  {
    "id": "dec-16-boston-tea-party",
    "month": "December",
    "day": "December 16",
    "dayNum": 16,
    "title": "Boston Tea Party (1773)",
    "type": "Event / History (Wikipedia)",
    "connection": "Colonial protest in Boston Harbor on December 16, 1773!",
    "emoji": "\u2615",
    "funFact": "According to Wikipedia, the Sons of Liberty dumped 342 chests of British East India Company tea into Boston Harbor!",
    "who1": "The Boston Tea Party was a political protest conducted by the Sons of Liberty in Boston, Massachusetts, on December 16, 1773.",
    "who2": "Protesters disguised as Mohawk Native Americans boarded three ships and dumped 342 chests of tea into the harbor to protest tax laws.",
    "timeline": [
      "1773 - Sons of Liberty dump 342 tea chests into Boston Harbor on December 16",
      "1774 - British Parliament responds by passing Intolerable Acts",
      "1775 - American Revolutionary War begins at Lexington and Concord"
    ]
  },
  {
    "id": "dec-16-battle-of-bulge",
    "month": "December",
    "day": "December 16",
    "dayNum": 16,
    "title": "Battle of the Bulge, WWII (1944)",
    "type": "Event / History (Wikipedia)",
    "connection": "Launched in Ardennes forest on December 16, 1944!",
    "emoji": "\ud83c\udf96\ufe0f",
    "funFact": "According to Wikipedia, the Battle of the Bulge was the largest and bloodiest single battle fought by the U.S. Army in World War II!",
    "who1": "The Battle of the Bulge was a major German offensive campaign launched through the Ardennes region on the Western Front in World War II.",
    "who2": "The surprise offensive began on December 16, 1944, creating a 'bulge' in Allied lines before American forces under Patton secured victory.",
    "timeline": [
      "1944 - German forces launch Ardennes offensive on December 16",
      "1944 - 101st Airborne holds strategic crossroads town of Bastogne",
      "1945 - Allied forces eliminate the bulge on January 25"
    ]
  },
  {
    "id": "dec-16-beethoven",
    "month": "December",
    "day": "December 16",
    "dayNum": 16,
    "title": "Ludwig van Beethoven, composer (b. 1770)",
    "type": "Person (Biography.com)",
    "connection": "Baptized on December 17, 1770 (b. Dec 16), musical titan!",
    "emoji": "\ud83c\udfbc",
    "funFact": "According to Biography.com, Beethoven composed his monumental Ninth Symphony ('Ode to Joy') after losing his hearing completely!",
    "who1": "Ludwig van Beethoven was a German composer and pianist whose music marks the transition between the Classical and Romantic eras.",
    "who2": "Beethoven was born in Bonn, Germany, in December 1770, studying under Joseph Haydn in Vienna.",
    "timeline": [
      "1770 - Baptized in Bonn, Germany on December 17",
      "1804 - Premiered Symphony No. 3 'Eroica'",
      "1824 - Conducted premier of Ninth Symphony despite complete deafness",
      "1827 - Passed away in Vienna leaving a monumental musical legacy"
    ]
  },
  {
    "id": "dec-16-concorde-supersonic",
    "month": "December",
    "day": "December 16",
    "dayNum": 16,
    "title": "The Concorde's supersonic flight (1979)",
    "type": "Event / Science (Wikipedia)",
    "connection": "Achieved Mach 2 supersonic milestone!",
    "emoji": "\u2708\ufe0f",
    "funFact": "According to Wikipedia, the Concorde flew from New York to London in under 3.5 hours at twice the speed of sound (1,350 mph)!",
    "who1": "The Concorde was a Franco-British supersonic passenger airliner that operated transatlantic flights at Mach 2.04.",
    "who2": "Developed jointly by A\u00e9rospatiale and British Aircraft Corporation, Concorde entered commercial service in 1976.",
    "timeline": [
      "1969 - First test flight conducted",
      "1976 - Commercial supersonic flights inaugurated",
      "2003 - Concorde retired from commercial passenger service"
    ]
  },
  {
    "id": "dec-17-aztec-calendar-stone",
    "month": "December",
    "day": "December 17",
    "dayNum": 17,
    "title": "Aztec Calendar Stone discovered (1790)",
    "type": "Event / History (Wikipedia)",
    "connection": "Unearthed in Mexico City on December 17, 1790!",
    "emoji": "\ud83d\uddff",
    "funFact": "According to Wikipedia, the Aztec Sun Stone weighs 24 tons and measures 12 feet in diameter, carved in the 1500s!",
    "who1": "The Aztec Calendar Stone (Sun Stone) is a massive 24-ton carved basalt monolith representing Aztec cosmology and solar cycles.",
    "who2": "The stone was unearthed during repairs on the Mexico City Cathedral on December 17, 1790, having been buried since the Spanish conquest.",
    "timeline": [
      "c. 1502 - Carved during reign of Aztec Emperor Moctezuma II",
      "1790 - Unearthed at Z\u00f3calo plaza in Mexico City on December 17",
      "1885 - Transferred to the National Museum of Anthropology in Mexico City"
    ]
  },
  {
    "id": "dec-17-wright-brothers",
    "month": "December",
    "day": "December 17",
    "dayNum": 17,
    "title": "Wright Brothers first powered flight (1903)",
    "type": "Event / History (Wikipedia)",
    "connection": "First powered flight at Kitty Hawk on December 17, 1903!",
    "emoji": "\u2708\ufe0f",
    "funFact": "According to Biography.com, Orville Wright flew 120 feet in 12 seconds aboard the Wright Flyer at Kitty Hawk, North Carolina!",
    "who1": "Orville and Wilbur Wright were American aviation pioneers credited with inventing, building, and flying the world's first successful motor-operated airplane.",
    "who2": "The Wright brothers conducted aeronautical glider experiments in Dayton, Ohio, before making four powered flights at Kitty Hawk on December 17, 1903.",
    "timeline": [
      "1903 - Orville Wright completes first 12-second powered flight on December 17",
      "1905 - Built Wright Flyer III, the first practical fully controllable airplane",
      "1908 - Public flight demonstrations in Europe and America capture global acclaim"
    ]
  },
  {
    "id": "dec-18-ty-cobb",
    "month": "December",
    "day": "December 18",
    "dayNum": 18,
    "title": "Ty Cobb, baseball player (b. 1886)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 18, 1886, highest career batting average (.366)!",
    "emoji": "\u26be",
    "funFact": "According to Biography.com, Ty Cobb set 90 MLB records and holds the highest career batting average (.366) in baseball history!",
    "who1": "Tyrus Raymond 'Ty' Cobb, nicknamed 'The Georgia Peach,' was an American MLB outfielder who set 90 major league records.",
    "who2": "Ty Cobb was born in Narrows, Georgia, on December 18, 1886, playing 22 seasons for the Detroit Tigers.",
    "timeline": [
      "1886 - Born in Narrows, Georgia on December 18",
      "1905 - Debuted with Detroit Tigers in Major League Baseball",
      "1911 - Batted a career-high .420 in a single season",
      "1936 - Received the most votes (98.2%) in the inaugural Baseball Hall of Fame election"
    ]
  },
  {
    "id": "dec-18-steven-spielberg",
    "month": "December",
    "day": "December 18",
    "dayNum": 18,
    "title": "Steven Spielberg, movie producer and director (b. 1946)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 18, 1946, Oscar-winning director!",
    "emoji": "\ud83c\udfac",
    "funFact": "According to Biography.com, Steven Spielberg directed blockbusters 'Jaws', 'E.T.', 'Jurassic Park', and won Oscars for 'Schindler's List'!",
    "who1": "Steven Allan Spielberg is an American film director, producer, and screenwriter who is the highest-grossing director in cinematic history.",
    "who2": "Steven Spielberg was born in Cincinnati, Ohio, on December 18, 1946, directing 8mm amateur movies as a teenager.",
    "timeline": [
      "1946 - Born in Cincinnati, Ohio on December 18",
      "1975 - Directed summer blockbuster 'Jaws'",
      "1982 - Directed beloved sci-fi classic 'E.T. the Extra-Terrestrial'",
      "1993 - Won Academy Award for Best Director for 'Schindler's List'"
    ]
  },
  {
    "id": "dec-19-carter-g-woodson",
    "month": "December",
    "day": "December 19",
    "dayNum": 19,
    "title": "Carter Godwin Woodson, 'Father of Black History' (b. 1875)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 19, 1875, Father of Black History!",
    "emoji": "\ud83d\udcda",
    "funFact": "According to Biography.com, Carter G. Woodson launched Negro History Week in 1926, which expanded into Black History Month!",
    "who1": "Carter Godwin Woodson was an American historian, author, journalist, and founder of the Association for the Study of African American Life and History.",
    "who2": "Carter G. Woodson was born to former enslaved parents in New Canton, Virginia, on December 19, 1875, earning his Ph.D. from Harvard University.",
    "timeline": [
      "1875 - Born in New Canton, Virginia on December 19",
      "1912 - Earned doctorate in history from Harvard University",
      "1915 - Founded the Association for the Study of Negro Life and History",
      "1926 - Established Negro History Week, precursor to Black History Month"
    ]
  },
  {
    "id": "dec-20-louisiana-purchase",
    "month": "December",
    "day": "December 20",
    "dayNum": 20,
    "title": "Louisiana Purchase Day (1803)",
    "type": "Event / History (Wikipedia)",
    "connection": "Formal transfer of territory in New Orleans on December 20, 1803!",
    "emoji": "\ud83d\udcdc",
    "funFact": "According to Wikipedia, the Louisiana Purchase doubled the geographic size of the United States for $15 million (about 3 cents an acre)!",
    "who1": "Louisiana Purchase Day marks the official transfer of 828,000 square miles of territory from France to the United States in New Orleans on December 20, 1803.",
    "who2": "The treaty was negotiated under President Thomas Jefferson and Napoleon Bonaparte, opening Western territory for Lewis and Clark.",
    "timeline": [
      "1803 - Treaty signed in Paris in April",
      "1803 - Official flag-raising ceremony held in New Orleans on December 20",
      "1804 - Lewis and Clark Expedition departs St. Louis to explore territory"
    ]
  },
  {
    "id": "dec-20-sacagawea",
    "month": "December",
    "day": "December 20",
    "dayNum": 20,
    "title": "Sacagawea, interpreter for Lewis and Clark (d. 1812)",
    "type": "Person (Biography.com)",
    "connection": "Passed away on December 20, 1812, Shoshone guide icon!",
    "emoji": "\ud83c\udfd4\ufe0f",
    "funFact": "According to Biography.com, Sacagawea guided the Lewis and Clark Expedition across thousands of uncharted miles while carrying her infant son Pompy!",
    "who1": "Sacagawea was a Lemhi Shoshone woman who served as an interpreter and guide for the Lewis and Clark Expedition from North Dakota to the Pacific Ocean.",
    "who2": "Sacagawea was born around 1788 in Idaho, joining the Corps of Discovery at Fort Mandan alongside her husband Toussaint Charbonneau.",
    "timeline": [
      "c. 1788 - Born in Lemhi River Valley, Idaho",
      "1804-1806 - Guided Lewis and Clark Expedition across Rocky Mountains to the Pacific",
      "1812 - Passed away at Fort Manuel in South Dakota on December 20",
      "2000 - Honored on the U.S. golden dollar coin"
    ]
  },
  {
    "id": "dec-21-apollo-8",
    "month": "December",
    "day": "December 21",
    "dayNum": 21,
    "title": "Apollo 8 launched - first moon voyage (1968)",
    "type": "Event / Space (Wikipedia)",
    "connection": "Launched on historic lunar orbit mission on December 21, 1968!",
    "emoji": "\ud83d\ude80",
    "funFact": "According to Wikipedia, Apollo 8 astronauts became the first humans to see Earth from deep space and captured the iconic 'Earthrise' photo!",
    "who1": "Apollo 8 was the first crewed spacecraft to leave low Earth orbit, reach the Moon, orbit it, and return safely to Earth.",
    "who2": "Apollo 8 launched from Kennedy Space Center on December 21, 1968, crewed by Frank Borman, James Lovell, and William Anders.",
    "timeline": [
      "1968 - Launched from Cape Canaveral, Florida, on December 21",
      "1968 - Entered lunar orbit on Christmas Eve and captured 'Earthrise' photograph",
      "1968 - Returned safely to Pacific Ocean splashdown on December 27"
    ]
  },
  {
    "id": "dec-22-coelacanth",
    "month": "December",
    "day": "December 22",
    "dayNum": 22,
    "title": "Coelacanth (ancient fish) discovered (1938)",
    "type": "Event / Science (Wikipedia)",
    "connection": "Discovered off South Africa coast on December 22, 1938!",
    "emoji": "\ud83d\udc1f",
    "funFact": "According to Wikipedia, coelacanths were believed to have gone extinct 66 million years ago until a live specimen was caught in 1938!",
    "who1": "The Coelacanth Discovery occurred on December 22, 1938, when museum curator Marjorie Courtenay-Latimer discovered a living prehistoric fish off South Africa.",
    "who2": "Scientists thought coelacanths died out with dinosaurs until the living fossil was identified by Ichthyologist J.L.B. Smith.",
    "timeline": [
      "1938 - Marjorie Courtenay-Latimer spots coelacanth in a fishing net on December 22",
      "1939 - J.L.B. Smith identifies fish as living coelacanth Latimeria chalumnae",
      "1997 - Second living coelacanth species discovered in Indonesia"
    ]
  },
  {
    "id": "dec-23-avi",
    "month": "December",
    "day": "December 23",
    "dayNum": 23,
    "title": "Avi, author (b. 1937)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 23, 1937, Newbery Medal author!",
    "emoji": "\ud83d\udcda",
    "funFact": "According to Biography.com, Avi overcame dysgraphia as a student and wrote over 80 books, winning the Newbery Medal for 'Crispin: The Cross of Lead'!",
    "who1": "Avi, pen name of Edward Irving Wortis, is an acclaimed American author of young adult and children's fiction.",
    "who2": "Avi was born in Brooklyn, New York, on December 23, 1937, studying theater and working as a performing arts librarian.",
    "timeline": [
      "1937 - Born in Brooklyn, New York on December 23",
      "1991 - Published Newbery Honor novel 'The True Confessions of Charlotte Doyle'",
      "2003 - Awarded Newbery Medal for 'Crispin: The Cross of Lead'"
    ]
  },
  {
    "id": "dec-24-kit-carson",
    "month": "December",
    "day": "December 24",
    "dayNum": 24,
    "title": "Kit Carson, frontiersman (b. 1809)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 24, 1809, legendary frontiersman & scout!",
    "emoji": "\ud83c\udf32",
    "funFact": "According to Biography.com, Kit Carson worked as a mountain man, fur trapper, wilderness guide, and U.S. Army officer in the American West!",
    "who1": "Christopher Houston 'Kit' Carson was an American frontiersman, wilderness guide, mountain man, fur trapper, and army officer.",
    "who2": "Kit Carson was born in Madison County, Kentucky, on December 24, 1809, growing up in Missouri before running away to join Santa Fe trail caravans.",
    "timeline": [
      "1809 - Born in Madison County, Kentucky on December 24",
      "1842 - Guided John C. Fr\u00e9mont's mapping expeditions across the Rocky Mountains",
      "1868 - Passed away at Fort Lyon, Colorado"
    ]
  },
  {
    "id": "dec-25-clara-barton",
    "month": "December",
    "day": "December 25",
    "dayNum": 25,
    "title": "Clara Barton, nurse and philanthropist (b. 1821)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 25, 1821, founder of American Red Cross!",
    "emoji": "\ud83e\ude7a",
    "funFact": "According to Biography.com, Clara Barton earned the nickname 'Angel of the Battlefield' during the Civil War and founded the American Red Cross!",
    "who1": "Clarissa Harlowe Barton was a pioneering American nurse and humanitarian who founded the American Red Cross in 1881.",
    "who2": "Clara Barton was born in North Oxford, Massachusetts, on December 25, 1821, working as a schoolteacher and patent clerk before nursing soldiers.",
    "timeline": [
      "1821 - Born in North Oxford, Massachusetts on December 25",
      "1862 - Served as battlefield nurse caring for wounded Civil War soldiers",
      "1881 - Founded the American Red Cross and served as its first president for 23 years"
    ]
  },
  {
    "id": "dec-25-anwar-sedat",
    "month": "December",
    "day": "December 25",
    "dayNum": 25,
    "title": "Anwar Sedat, Egyptian president (b. 1918)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 25, 1918, Nobel Peace Prize laureate!",
    "emoji": "\ud83d\udd4a\ufe0f",
    "funFact": "According to Biography.com, Anwar Sadat was the 1st Arab leader to visit Israel and sign the 1978 Camp David Peace Accords!",
    "who1": "Muhammad Anwar el-Sadat was an Egyptian politician who served as the third President of Egypt from 1970 until his assassination in 1981.",
    "who2": "Anwar Sadat was born in Mit Abu El Kom, Egypt, on December 25, 1918, graduating from the Royal Military Academy in Cairo.",
    "timeline": [
      "1918 - Born in Mit Abu El Kom, Egypt on December 25",
      "1970 - Sworn in as President of Egypt",
      "1978 - Signed Camp David Accords with Menachem Begin and won Nobel Peace Prize"
    ]
  },
  {
    "id": "dec-26-susan-butcher",
    "month": "December",
    "day": "December 26",
    "dayNum": 26,
    "title": "Susan Butcher, sled dog racer (b. 1954)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 26, 1954, 4-time Iditarod champion!",
    "emoji": "\ud83d\udc15",
    "funFact": "According to Biography.com, Susan Butcher was the 2nd woman to win the Iditarod Trail Sled Dog Race and the 1st to win it three consecutive times!",
    "who1": "Susan Howlet Butcher was an American dog musher and four-time champion of the 1,100-mile Iditarod Trail Sled Dog Race in Alaska.",
    "who2": "Susan Butcher was born in Cambridge, Massachusetts, on December 26, 1954, moving to Alaska to train sled dogs.",
    "timeline": [
      "1954 - Born in Cambridge, Massachusetts on December 26",
      "1986, 1987, 1988, 1990 - Won four Iditarod Trail Sled Dog Race championships",
      "2006 - Passed away in Seattle, Washington as an Alaskan sporting icon"
    ]
  },
  {
    "id": "dec-26-charles-babbage",
    "month": "December",
    "day": "December 26",
    "dayNum": 26,
    "title": "Charles Babbage, mathematician (b. 1792)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 26, 1792, Father of the Computer!",
    "emoji": "\ud83d\udcbb",
    "funFact": "According to Biography.com, Charles Babbage designed the Difference Engine and Analytical Engine, the first mechanical computer concepts!",
    "who1": "Charles Babbage was an English polymath, mathematician, mechanical engineer, and inventor remembered as the Father of the Computer.",
    "who2": "Charles Babbage was born in London on December 26, 1792, studying mathematics at Trinity College, Cambridge.",
    "timeline": [
      "1792 - Born in London, England on December 26",
      "1822 - Designed the Difference Engine mechanical calculating machine",
      "1837 - Conceived the Analytical Engine, the world's first general-purpose computer design"
    ]
  },
  {
    "id": "dec-27-louis-pasteur",
    "month": "December",
    "day": "December 27",
    "dayNum": 27,
    "title": "Louis Pasteur, chemist and bacteriologist (b. 1822)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 27, 1822, pioneer of pasteurization & vaccines!",
    "emoji": "\ud83e\uddea",
    "funFact": "According to Biography.com, Louis Pasteur invented pasteurization to kill harmful bacteria in milk and created the first rabies vaccine!",
    "who1": "Louis Pasteur was a French chemist and microbiologist renowned for discovering the principles of vaccination, microbial fermentation, and pasteurization.",
    "who2": "Louis Pasteur was born in Dole, France, on December 27, 1822, earning his doctorate from the \u00c9cole Normale Sup\u00e9rieure in Paris.",
    "timeline": [
      "1822 - Born in Dole, France on December 27",
      "1862 - Patented the process of pasteurization to prevent bacterial spoilage",
      "1885 - Successfully administered the first human rabies vaccine"
    ]
  },
  {
    "id": "dec-27-johannes-kepler",
    "month": "December",
    "day": "December 27",
    "dayNum": 27,
    "title": "Johannes Kepler, astronomer (b. 1571)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 27, 1571, laws of planetary motion!",
    "emoji": "\ud83e\ude90",
    "funFact": "According to Biography.com, Johannes Kepler discovered three laws of planetary motion proving planets orbit the Sun in ellipses!",
    "who1": "Johannes Kepler was a German astronomer, mathematician, and astrologer who formulated the three fundamental laws of planetary motion.",
    "who2": "Kepler was born in Weil der Stadt, Germany, on December 27, 1571, studying theology and mathematics at the University of T\u00fcbingen.",
    "timeline": [
      "1571 - Born in Weil der Stadt, Germany on December 27",
      "1609 - Published his first two laws of planetary motion in 'Astronomia Nova'",
      "1619 - Published third law of planetary motion in 'Harmonices Mundi'"
    ]
  },
  {
    "id": "dec-28-poor-richards-almanack",
    "month": "December",
    "day": "December 28",
    "dayNum": 28,
    "title": "Poor Richard's Almanack first published (1732)",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Published by Benjamin Franklin in December 1732!",
    "emoji": "\ud83d\udcd6",
    "funFact": "According to Wikipedia, Ben Franklin wrote under the pen name 'Richard Saunders,' popularizing sayings like 'A penny saved is a penny earned!'",
    "who1": "Poor Richard's Almanack was a famous annual colonial almanac published by Benjamin Franklin from 1732 to 1758.",
    "who2": "Ben Franklin published the first edition in Philadelphia on December 28, 1732, under the pseudonym Richard Saunders.",
    "timeline": [
      "1732 - First edition published in Philadelphia on December 28",
      "1758 - Published final edition containing 'The Way to Wealth' essay"
    ]
  },
  {
    "id": "dec-29-andrew-johnson",
    "month": "December",
    "day": "December 29",
    "dayNum": 29,
    "title": "Andrew Johnson, 17th U.S. President (b. 1808)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 29, 1808, 17th U.S. President!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, Andrew Johnson assumed the presidency following Lincoln's assassination and purchased Alaska from Russia in 1867!",
    "who1": "Andrew Johnson was an American politician who served as the 17th President of the United States from 1865 to 1869.",
    "who2": "Andrew Johnson was born in Raleigh, North Carolina, on December 29, 1808, working as a tailor's apprentice before moving to Tennessee.",
    "timeline": [
      "1808 - Born in Raleigh, North Carolina on December 29",
      "1865-1869 - Served as 17th U.S. President following Lincoln's death",
      "1867 - Approved the U.S. purchase of Alaska from Russia for $7.2 million"
    ]
  },
  {
    "id": "dec-30-rudyard-kipling",
    "month": "December",
    "day": "December 30",
    "dayNum": 30,
    "title": "Rudyard Kipling, poet/writer (b. 1865)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 30, 1865, author of The Jungle Book!",
    "emoji": "\ud83d\udc2f",
    "funFact": "According to Biography.com, Rudyard Kipling won the Nobel Prize in Literature in 1907 at age 41, remaining the youngest recipient in history!",
    "who1": "Joseph Rudyard Kipling was an English journalist, short-story writer, poet, and novelist best known for 'The Jungle Book' and 'Just So Stories.'",
    "who2": "Rudyard Kipling was born in Bombay, British India, on December 30, 1865, working as a journalist before publishing his stories.",
    "timeline": [
      "1865 - Born in Bombay, India on December 30",
      "1894 - Published beloved classic 'The Jungle Book'",
      "1907 - Awarded Nobel Prize in Literature at age 41"
    ]
  },
  {
    "id": "dec-31-henri-matisse",
    "month": "December",
    "day": "December 31",
    "dayNum": 31,
    "title": "Henri Matisse, artist (b. 1869)",
    "type": "Person (Biography.com)",
    "connection": "Born on December 31, 1869, master Fauvist painter!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, Henri Matisse was a leader of modern art alongside Picasso, famous for bold colors and cut-out paper collages!",
    "who1": "Henri \u00c9mile Beno\u00eet Matisse was a French visual artist known for both his use of color and his fluid and original draughtsmanship.",
    "who2": "Henri Matisse was born in Le Cateau-Cambr\u00e9sis, France, on December 31, 1869, studying law before discovering painting.",
    "timeline": [
      "1869 - Born in Le Cateau-Cambr\u00e9sis, France on December 31",
      "1905 - Led Fauvism movement exhibiting 'Woman with a Hat'",
      "1954 - Passed away in Nice, France leaving a landmark legacy in modern art"
    ]
  }
];
  const RAW_JANUARY_DATA = [
  {
    "id": "jan-1-ellis-island",
    "month": "January",
    "day": "January 1",
    "dayNum": 1,
    "title": "Ellis Island opened 1892",
    "type": "Event / History (Wikipedia)",
    "connection": "Opened as premier U.S. immigration gateway on Jan 1, 1892!",
    "emoji": "\ud83d\uddfd",
    "funFact": "According to Wikipedia, over 12 million immigrants were processed through Ellis Island between 1892 and 1954!",
    "who1": "Ellis Island was the chief United States immigration inspection station in New York Harbor that welcomed millions of European newcomers seeking freedom and opportunity.",
    "who2": "Ellis Island opened on January 1, 1892, under President Benjamin Harrison's administration, with fifteen-year-old Annie Moore being the very first immigrant processed.",
    "timeline": [
      "1892 - Opens on January 1 welcoming 15-year-old Annie Moore",
      "1907 - Record 1.2 million immigrants processed in a single year",
      "1990 - Opens as a major public immigration history museum"
    ]
  },
  {
    "id": "jan-1-paul-revere",
    "month": "January",
    "day": "January 1",
    "dayNum": 1,
    "title": "Paul Revere b. 1735 (patriot)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 1, 1735, famous for his midnight ride!",
    "emoji": "\ud83d\udc0e",
    "funFact": "According to Biography.com, Paul Revere was a master silversmith who operated a copper rolling mill and alerted colonial militia before the Battle of Lexington!",
    "who1": "Paul Revere was an American silversmith, industrialist, and Patriot hero who alerted colonial militia of advancing British forces during his historic Midnight Ride.",
    "who2": "Paul Revere was born in Boston's North End on January 1, 1735, learning silversmithing from his father before joining the Sons of Liberty.",
    "timeline": [
      "1735 - Born in Boston, Massachusetts on January 1",
      "1773 - Participated in the historic Boston Tea Party",
      "1775 - Made his famous Midnight Ride from Boston to Lexington",
      "1818 - Passed away in Boston leaving a legacy of American patriot leadership"
    ]
  },
  {
    "id": "jan-1-betsy-ross",
    "month": "January",
    "day": "January 1",
    "dayNum": 1,
    "title": "Betsy Ross b. 1752 (created first U.S. flag)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 1, 1752, creator of first U.S. flag!",
    "emoji": "\ud83c\uddfa\ud83c\uddf8",
    "funFact": "According to Biography.com, Betsy Ross demonstrated to George Washington how to cut a five-pointed star in a single scissor snip!",
    "who1": "Betsy Ross was an American seamstress in Philadelphia credited with creating the first iconic American flag featuring thirteen stars in a circle.",
    "who2": "Betsy Ross was born Elizabeth Griscom in Philadelphia on January 1, 1752, apprenticing under an upholsterer before running her own sewing shop.",
    "timeline": [
      "1752 - Born in Philadelphia, Pennsylvania on January 1",
      "1776 - Handcrafted the original 13-star American flag for the Continental Congress",
      "1836 - Passed away in Philadelphia as an iconic symbol of American independence"
    ]
  },
  {
    "id": "jan-2-isaac-asimov",
    "month": "January",
    "day": "January 2",
    "dayNum": 2,
    "title": "Isaac Asimov b. 1920 (science fiction author)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 2, 1920, sci-fi legend!",
    "emoji": "\ud83e\udd16",
    "funFact": "According to Biography.com, Isaac Asimov coined the word 'robotics' and wrote over 500 books!",
    "who1": "Isaac Asimov was an American biochemist and prolific science fiction author best known for his 'Foundation' series and 'I, Robot' stories.",
    "who2": "Isaac Asimov was born in Petrovichi, Russia, around January 2, 1920, emigrating to Brooklyn, New York, at age three and studying chemistry at Columbia University.",
    "timeline": [
      "1920 - Born in Petrovichi, Russia on January 2",
      "1942 - Formulated the Three Laws of Robotics",
      "1951 - Published foundational sci-fi masterpiece 'Foundation'",
      "1992 - Passed away in New York City as a titan of science fiction"
    ]
  },
  {
    "id": "jan-3-lucretia-mott",
    "month": "January",
    "day": "January 3",
    "dayNum": 3,
    "title": "Lucretia Mott b. 1793 (teacher, minister, anti-slavery leader)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 3, 1793, anti-slavery & women's rights leader!",
    "emoji": "\ud83d\udd4a\ufe0f",
    "funFact": "According to Biography.com, Lucretia Mott helped organize the 1848 Seneca Falls Convention and founded the Philadelphia Female Anti-Slavery Society!",
    "who1": "Lucretia Mott was a Quaker minister, abolitionist, and women's rights activist who advocated for universal human equality.",
    "who2": "Lucretia Mott was born on Nantucket Island, Massachusetts, on January 3, 1793, attending Nine Partners Quaker Boarding School.",
    "timeline": [
      "1793 - Born on Nantucket Island, Massachusetts on January 3",
      "1833 - Co-founded the Philadelphia Female Anti-Slavery Society",
      "1848 - Organized the historic Seneca Falls Convention alongside Elizabeth Cady Stanton",
      "1880 - Passed away in Pennsylvania as a heroic leader for civil rights"
    ]
  },
  {
    "id": "jan-4-louis-braille",
    "month": "January",
    "day": "January 4",
    "dayNum": 4,
    "title": "Louis Braille b. 1809 (invented Braille)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 4, 1809, creator of Braille reading system!",
    "emoji": "\u2803",
    "funFact": "According to Biography.com, Louis Braille invented his raised-dot system at age fifteen while attending the Royal Institute for Blind Youth in Paris!",
    "who1": "Louis Braille was a French educator and inventor who developed the tactile raised-dot system used by blind individuals worldwide to read and write.",
    "who2": "Louis Braille was born in Coupvray, France, on January 4, 1809, losing his sight in a childhood accident before attending school in Paris.",
    "timeline": [
      "1809 - Born in Coupvray, France on January 4",
      "1824 - Invented the 6-dot tactile Braille reading system at age fifteen",
      "1829 - Published the first Braille embossed book",
      "1852 - Passed away in Paris as a benefactor of humanity"
    ]
  },
  {
    "id": "jan-4-isaac-newton",
    "month": "January",
    "day": "January 4",
    "dayNum": 4,
    "title": "Isaac Newton b. 1643 (physicist)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 4, 1643, laws of motion & gravity!",
    "emoji": "\ud83c\udf4e",
    "funFact": "According to Biography.com, Sir Isaac Newton invented calculus and formulated the three universal laws of motion!",
    "who1": "Sir Isaac Newton was an English mathematician, physicist, and astronomer who formulated the fundamental laws of motion and universal gravitation.",
    "who2": "Sir Isaac Newton was born at Woolsthorpe Manor in Lincolnshire on January 4, 1643, studying mathematics and natural philosophy at Trinity College, Cambridge.",
    "timeline": [
      "1643 - Born in Lincolnshire, England on January 4",
      "1666 - Formulated theories of optics, gravity, and calculus",
      "1687 - Published landmark scientific work 'Philosophi\u00e6 Naturalis Principia Mathematica'",
      "1727 - Passed away in London leaving a foundation for modern science"
    ]
  },
  {
    "id": "jan-5-alvin-ailey",
    "month": "January",
    "day": "January 5",
    "dayNum": 5,
    "title": "Alvin Ailey b. 1931 (dancer & choreographer)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 5, 1931, dance pioneer!",
    "emoji": "\ud83d\udc83",
    "funFact": "According to Biography.com, Alvin Ailey founded the Alvin Ailey American Dance Theater and choreographed 'Revelations'!",
    "who1": "Alvin Ailey was an American dancer, director, and choreographer who founded the Alvin Ailey American Dance Theater to showcase African American culture through modern dance.",
    "who2": "Alvin Ailey was born in Rogers, Texas, on January 5, 1931, studying dance under Lester Horton in Los Angeles.",
    "timeline": [
      "1931 - Born in Rogers, Texas on January 5",
      "1958 - Founded the Alvin Ailey American Dance Theater in New York City",
      "1960 - Choreographed his signature masterpiece 'Revelations'",
      "1988 - Awarded the Kennedy Center Honors for lifetime artistic contributions"
    ]
  },
  {
    "id": "jan-5-george-washington-carver",
    "month": "January",
    "day": "January 5",
    "dayNum": 5,
    "title": "George Washington Carver d. 1943 (scientist, inventor, & teacher)",
    "type": "Person (Biography.com)",
    "connection": "Passed away on January 5, 1943, agricultural science pioneer!",
    "emoji": "\ud83e\udd5c",
    "funFact": "According to Biography.com, George Washington Carver developed over 300 products from peanuts and sweet potatoes to help Southern farmers!",
    "who1": "George Washington Carver was an American agricultural scientist, inventor, and educator who revolutionized Southern farming through crop rotation and soil conservation.",
    "who2": "George Washington Carver was born into enslavement in Diamond, Missouri, around 1864, becoming the first Black student and faculty member at Iowa State Agricultural College.",
    "timeline": [
      "c. 1864 - Born in Diamond, Missouri",
      "1896 - Headed the Agricultural Department at Tuskegee Institute under Booker T. Washington",
      "1943 - Passed away on January 5, leaving his estate to fund agricultural research"
    ]
  },
  {
    "id": "jan-6-carl-sandburg",
    "month": "January",
    "day": "January 6",
    "dayNum": 6,
    "title": "Carl Sandburg b. 1878 (poet)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 6, 1878, Pulitzer Prize-winning poet!",
    "emoji": "\ud83d\udcdc",
    "funFact": "According to Biography.com, Carl Sandburg won three Pulitzer Prizes for his poetry and multi-volume biography of Abraham Lincoln!",
    "who1": "Carl Sandburg was an American poet, biographer, musician, and editor who won three Pulitzer Prizes for his celebrated literary works.",
    "who2": "Carl Sandburg was born in Galesburg, Illinois, on January 6, 1878, working as a milk wagon driver and bricklayer before writing poetry.",
    "timeline": [
      "1878 - Born in Galesburg, Illinois on January 6",
      "1916 - Published iconic poem 'Chicago'",
      "1940 - Awarded Pulitzer Prize for his biography 'Abraham Lincoln: The War Years'",
      "1951 - Awarded Pulitzer Prize for Poetry"
    ]
  },
  {
    "id": "jan-7-montgolfier",
    "month": "January",
    "day": "January 7",
    "dayNum": 7,
    "title": "Jacques Etienne Montgolfier b. 1745 (inventor of hot air balloon)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 7, 1745, aviation pioneer!",
    "emoji": "\ud83c\udf88",
    "funFact": "According to Biography.com, the Montgolfier brothers launched the first hot air balloon carrying a sheep, a duck, and a rooster in 1783!",
    "who1": "Jacques-\u00c9tienne Montgolfier was a French paper manufacturer and inventor who co-created the world's first practical hot air balloon.",
    "who2": "Jacques-\u00c9tienne Montgolfier was born in Annonay, France, on January 7, 1745, studying architecture and joining his family's paper factory.",
    "timeline": [
      "1745 - Born in Annonay, France on January 7",
      "1783 - Conducted the first public hot air balloon demonstration",
      "1783 - Piloted first tethered human hot air balloon flight over Paris"
    ]
  },
  {
    "id": "jan-8-elvis-presley",
    "month": "January",
    "day": "January 8",
    "dayNum": 8,
    "title": "Elvis Presley c. 1935 (rock singer)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 8, 1935, 'King of Rock and Roll'!",
    "emoji": "\ud83c\udfb8",
    "funFact": "According to Biography.com, Elvis Presley sold over one billion records worldwide and had 18 number one hits!",
    "who1": "Elvis Presley was an iconic American singer and actor known as the 'King of Rock and Roll' who transformed 20th-century popular music.",
    "who2": "Elvis Presley was born in Tupelo, Mississippi, on January 8, 1935, moving to Memphis, Tennessee, where he recorded at Sun Studio.",
    "timeline": [
      "1935 - Born in Tupelo, Mississippi on January 8",
      "1956 - Released hit single 'Heartbreak Hotel' launching global stardom",
      "1977 - Passed away at Graceland in Memphis, Tennessee"
    ]
  },
  {
    "id": "jan-8-marco-polo",
    "month": "January",
    "day": "January 8",
    "dayNum": 8,
    "title": "Marco Polo d. 1324 (explorer)",
    "type": "Person (Biography.com)",
    "connection": "Passed away on January 8, 1324, famous Venetian explorer!",
    "emoji": "\u26f5",
    "funFact": "According to Biography.com, Marco Polo traveled 15,000 miles along the Silk Road to China and served in the court of Kublai Khan!",
    "who1": "Marco Polo was a Venetian merchant, explorer, and writer who traveled along the Silk Road to Asia, introducing Europeans to East Asian culture.",
    "who2": "Marco Polo was born in Venice around 1254, embarking on a 24-year journey to Asia alongside his father Niccol\u00f2 and uncle Maffeo.",
    "timeline": [
      "c. 1254 - Born in Venice, Italy",
      "1275 - Reached the court of Mongol emperor Kublai Khan in Shangdu",
      "1300 - Dictated 'The Travels of Marco Polo'",
      "1324 - Passed away in Venice on January 8"
    ]
  },
  {
    "id": "jan-9-richard-nixon",
    "month": "January",
    "day": "January 9",
    "dayNum": 9,
    "title": "Richard Nixon b. 1913 (37th U.S. President)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 9, 1913, 37th U.S. President!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, Richard Nixon established the Environmental Protection Agency (EPA) and visited China in 1972!",
    "who1": "Richard Milhous Nixon was an American politician who served as the 37th President of the United States from 1969 to 1974.",
    "who2": "Richard Nixon was born in Yorba Linda, California, on January 9, 1913, studying law at Duke University.",
    "timeline": [
      "1913 - Born in Yorba Linda, California on January 9",
      "1969-1974 - Served as 37th U.S. President",
      "1970 - Established the Environmental Protection Agency (EPA)",
      "1972 - Historic diplomatic visit to the People's Republic of China"
    ]
  },
  {
    "id": "jan-10-league-of-nations",
    "month": "January",
    "day": "January 10",
    "dayNum": 10,
    "title": "League of Nations began 1920",
    "type": "Event / History (Wikipedia)",
    "connection": "Established internationally on January 10, 1920!",
    "emoji": "\ud83c\uddfa\ud83c\uddf3",
    "funFact": "According to Wikipedia, the League of Nations was the first worldwide intergovernmental organization created to maintain world peace!",
    "who1": "The League of Nations was an international diplomatic organization founded on January 10, 1920, following the Paris Peace Conference to prevent future world wars.",
    "who2": "The League was championed by U.S. President Woodrow Wilson as part of his Fourteen Points peace initiative following World War I.",
    "timeline": [
      "1920 - Covenant takes official legal effect on January 10",
      "1920 - First General Assembly meeting held in Geneva, Switzerland",
      "1946 - Officially dissolved and succeeded by the United Nations"
    ]
  },
  {
    "id": "jan-10-suffrage-amendment",
    "month": "January",
    "day": "January 10",
    "dayNum": 10,
    "title": "Woman's Suffrage Amendment Introduced 1878",
    "type": "Event / History (Wikipedia)",
    "connection": "Introduced in U.S. Senate on January 10, 1878!",
    "emoji": "\ud83d\uddf3\ufe0f",
    "funFact": "According to Wikipedia, Senator Aaron Sargent introduced the amendment text written by Susan B. Anthony, which became the 19th Amendment!",
    "who1": "The Woman Suffrage Amendment was a landmark U.S. constitutional proposal introduced on January 10, 1878, to guarantee women the right to vote.",
    "who2": "The amendment text was drafted by Susan B. Anthony and Elizabeth Cady Stanton before Senator Aaron A. Sargent introduced it in Congress.",
    "timeline": [
      "1878 - Introduced in the U.S. Senate on January 10",
      "1919 - Passed by both houses of Congress",
      "1920 - Ratified as the 19th Amendment to the U.S. Constitution"
    ]
  },
  {
    "id": "jan-11-alexander-hamilton",
    "month": "January",
    "day": "January 11",
    "dayNum": 11,
    "title": "Alexander Hamilton b. 1755 (statesman)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 11, 1755, 1st Treasury Secretary!",
    "emoji": "\ud83d\udcb5",
    "funFact": "According to Biography.com, Alexander Hamilton co-authored the Federalist Papers and created the U.S. Coast Guard and National Bank!",
    "who1": "Alexander Hamilton was an American statesman, Founding Father, and first Secretary of the Treasury who established the U.S. financial system.",
    "who2": "Alexander Hamilton was born in Charlestown, Nevis, in the Caribbean on January 11, 1755, attending King's College in New York.",
    "timeline": [
      "1755 - Born on the Caribbean island of Nevis on January 11",
      "1787 - Co-authored the Federalist Papers defending the U.S. Constitution",
      "1789-1795 - Served as first U.S. Secretary of the Treasury",
      "1804 - Passed away following his famous duel with Aaron Burr"
    ]
  },
  {
    "id": "jan-12-jack-london",
    "month": "January",
    "day": "January 12",
    "dayNum": 12,
    "title": "Jack London b. 1876 (author)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 12, 1876, author of Call of the Wild!",
    "emoji": "\ud83d\udc3a",
    "funFact": "According to Biography.com, Jack London sailed to Alaska during the 1897 Klondike Gold Rush, inspiring 'The Call of the Wild'!",
    "who1": "Jack London was a famous American novelist, journalist, and social activist best known for classic adventure novels 'The Call of the Wild' and 'White Fang.'",
    "who2": "Jack London was born in San Francisco, California, on January 12, 1876, working as a sailor and gold prospector.",
    "timeline": [
      "1876 - Born in San Francisco, California on January 12",
      "1897 - Participated in the Klondike Gold Rush in Yukon, Canada",
      "1903 - Published 'The Call of the Wild'",
      "1906 - Published 'White Fang'"
    ]
  },
  {
    "id": "jan-13-frisbee",
    "month": "January",
    "day": "January 13",
    "dayNum": 13,
    "title": "Frisbee introduced 1957",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Introduced by Wham-O on January 13, 1957!",
    "emoji": "\ud83e\udd4f",
    "funFact": "According to Wikipedia, college students originally tossed pie tins from the Frisbie Pie Company, inspiring the plastic toy design!",
    "who1": "The Frisbee is a famous flying disc toy and sports equipment introduced by Wham-O manufacturing company on January 13, 1957.",
    "who2": "The flying disc was invented by Fred Morrison in 1948 before Wham-O bought the rights and renamed it Frisbee.",
    "timeline": [
      "1957 - Wham-O introduces the plastic flying disc on January 13",
      "1967 - Ultimate Frisbee sport invented at Columbia High School in New Jersey",
      "1975 - First World Flying Disc Championship held"
    ]
  },
  {
    "id": "jan-13-michael-bond",
    "month": "January",
    "day": "January 13",
    "dayNum": 13,
    "title": "Michael Bond b. 1926 (creator of Paddington Bear)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 13, 1926, creator of Paddington Bear!",
    "emoji": "\ud83e\uddf8",
    "funFact": "According to Biography.com, Michael Bond bought a toy bear on Christmas Eve in London, which inspired his story 'A Bear Called Paddington'!",
    "who1": "Michael Bond was a British author best known for creating the beloved children's book character Paddington Bear.",
    "who2": "Michael Bond was born in Newbury, Berkshire, England, on January 13, 1926, serving in the Royal Air Force during WWII.",
    "timeline": [
      "1926 - Born in Newbury, England on January 13",
      "1958 - Published first book 'A Bear Called Paddington'",
      "1997 - Awarded OBE for services to children's literature",
      "2017 - Passed away in London leaving a world-famous literary legacy"
    ]
  },
  {
    "id": "jan-14-shannon-lucid",
    "month": "January",
    "day": "January 14",
    "dayNum": 14,
    "title": "Shannon Lucid b. 1943 (astronaut)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 14, 1943, pioneer NASA astronaut!",
    "emoji": "\ud83d\ude80",
    "funFact": "According to Biography.com, Dr. Shannon Lucid spent 188 days aboard the Russian space station Mir, setting an endurance record for American astronauts!",
    "who1": "Dr. Shannon Lucid is an American biochemist and retired NASA astronaut who completed five spaceflights, spending 188 days aboard the Mir space station.",
    "who2": "Shannon Lucid was born in Shanghai, China, to missionary parents on January 14, 1943, earning her Ph.D. in biochemistry from the University of Oklahoma.",
    "timeline": [
      "1943 - Born in Shanghai, China on January 14",
      "1978 - Selected in NASA's first astronaut class containing female candidates",
      "1996 - Spent 188 days in Earth orbit aboard space station Mir",
      "1996 - Awarded Congressional Space Medal of Honor by President Bill Clinton"
    ]
  },
  {
    "id": "jan-15-mlk",
    "month": "January",
    "day": "January 15",
    "dayNum": 15,
    "title": "Martin Luther King, Jr. b. 1929 (Civil Rights Leader)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 15, 1929, civil rights icon!",
    "emoji": "\ud83c\udf99\ufe0f",
    "funFact": "According to Biography.com, Dr. King received the Nobel Peace Prize at age 35 for leading nonviolent protests for racial justice!",
    "who1": "Dr. Martin Luther King, Jr. was a charismatic American Baptist minister and civil rights leader who spearheaded the nonviolent struggle for racial equality.",
    "who2": "Martin Luther King, Jr. was born in Atlanta, Georgia, on January 15, 1929, graduating from Morehouse College, Crozer Theological Seminary, and Boston University.",
    "timeline": [
      "1929 - Born in Atlanta, Georgia on January 15",
      "1955 - Led the successful 381-day Montgomery Bus Boycott",
      "1963 - Delivered iconic 'I Have a Dream' speech at the March on Washington",
      "1964 - Awarded the Nobel Peace Prize"
    ]
  },
  {
    "id": "jan-16-gulf-war",
    "month": "January",
    "day": "January 16",
    "dayNum": 16,
    "title": "Persian Gulf war begins 1991",
    "type": "Event / History (Wikipedia)",
    "connection": "Operation Desert Storm launched on January 16, 1991!",
    "emoji": "\ud83c\udf96\ufe0f",
    "funFact": "According to Wikipedia, Operation Desert Storm involved a 35-nation military coalition led by the United States!",
    "who1": "The Persian Gulf War was an armed conflict executed by a 35-nation UN coalition led by the U.S. against Iraq following its invasion of Kuwait.",
    "who2": "Combat operations were launched under President George H.W. Bush on January 16, 1991, with air strikes across the region.",
    "timeline": [
      "1991 - Coalition air campaign Operation Desert Storm launched on January 16",
      "1991 - 100-hour ground offensive liberates Kuwait",
      "1991 - Ceasefire declared on February 28"
    ]
  },
  {
    "id": "jan-16-dizzy-dean",
    "month": "January",
    "day": "January 16",
    "dayNum": 16,
    "title": "Dizzy Dean b. 1911 (Baseball Hall of Famer)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 16, 1911, Hall of Fame pitcher!",
    "emoji": "\u26be",
    "funFact": "According to Biography.com, Dizzy Dean won 30 games in 1934 for the St. Louis Cardinals 'Gashouse Gang'!",
    "who1": "Jay Hanna 'Dizzy' Dean was an American professional baseball pitcher for the St. Louis Cardinals and famous broadcaster.",
    "who2": "Dizzy Dean was born in Lucas, Arkansas, on January 16, 1911, pitching the Cardinals to a 1934 World Series victory.",
    "timeline": [
      "1911 - Born in Lucas, Arkansas on January 16",
      "1934 - Won 30 games and National League MVP award",
      "1953 - Inducted into the Baseball Hall of Fame"
    ]
  },
  {
    "id": "jan-17-ben-franklin",
    "month": "January",
    "day": "January 17",
    "dayNum": 17,
    "title": "Ben Franklin b. 1706 (statesman, author, printer)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 17, 1706, founding father & inventor!",
    "emoji": "\u26a1",
    "funFact": "According to Biography.com, Benjamin Franklin invented bifocal glasses, the Franklin stove, and proved lightning was electricity!",
    "who1": "Benjamin Franklin was an American polymath, inventor, diplomat, and Founding Father who advanced science and American independence.",
    "who2": "Benjamin Franklin was born in Boston on January 17, 1706, working as a printer's apprentice before founding his press in Philadelphia.",
    "timeline": [
      "1706 - Born in Boston, Massachusetts on January 17",
      "1752 - Conducted historic kite experiment proving lightning is electricity",
      "1776 - Signed the United States Declaration of Independence",
      "1787 - Signed the U.S. Constitution"
    ]
  },
  {
    "id": "jan-17-muhammad-ali",
    "month": "January",
    "day": "January 17",
    "dayNum": 17,
    "title": "Muhammad Ali b. 1942 (boxer)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 17, 1942, 'The Greatest'!",
    "emoji": "\ud83e\udd4a",
    "funFact": "According to Biography.com, Muhammad Ali won the Olympic gold medal in 1960 and became a 3-time World Heavyweight Champion!",
    "who1": "Muhammad Ali was an American professional boxer, activist, and philanthropist widely regarded as one of the most significant sports figures of the 20th century.",
    "who2": "Muhammad Ali was born Cassius Marcellus Clay Jr. in Louisville, Kentucky, on January 17, 1942, beginning boxing training at age twelve.",
    "timeline": [
      "1942 - Born in Louisville, Kentucky on January 17",
      "1960 - Won light heavyweight gold medal at Rome Olympic Games",
      "1964 - Defeated Sonny Liston to win World Heavyweight Championship",
      "1996 - Lit the Olympic flame at Atlanta Summer Olympics"
    ]
  },
  {
    "id": "jan-18-aa-milne",
    "month": "January",
    "day": "January 18",
    "dayNum": 18,
    "title": "A.A. Milne b. 1882 (author of Winnie the Pooh)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 18, 1882, creator of Winnie the Pooh!",
    "emoji": "\ud83c\udf6f",
    "funFact": "According to Biography.com, A.A. Milne wrote 'Winnie-the-Pooh' based on stuffed toys owned by his son Christopher Robin!",
    "who1": "Alan Alexander Milne was an English author best known for his books about the stuffed bear Winnie-the-Pooh.",
    "who2": "A.A. Milne was born in London on January 18, 1882, studying mathematics at Trinity College, Cambridge.",
    "timeline": [
      "1882 - Born in London, England on January 18",
      "1926 - Published beloved children's book 'Winnie-the-Pooh'",
      "1928 - Introduced Tigger in 'The House at Pooh Corner'"
    ]
  },
  {
    "id": "jan-18-mark-messier",
    "month": "January",
    "day": "January 18",
    "dayNum": 18,
    "title": "Mark Messier b. 1961 (hockey player)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 18, 1961, 6-time Stanley Cup champion!",
    "emoji": "\ud83c\udfd2",
    "funFact": "According to Biography.com, Mark Messier scored 1,887 career points and won six Stanley Cups with Edmonton and New York!",
    "who1": "Mark Messier is a Canadian former professional ice hockey center who played 25 seasons in the NHL, winning six Stanley Cup championships.",
    "who2": "Mark Messier was born in Edmonton, Alberta, on January 18, 1961, playing minor hockey before joining the Edmonton Oilers.",
    "timeline": [
      "1961 - Born in Edmonton, Alberta, Canada on January 18",
      "1984, 1985, 1987, 1988, 1990 - Won five Stanley Cups with Edmonton Oilers",
      "1994 - Captained New York Rangers to historic Stanley Cup championship",
      "2007 - Inducted into Hockey Hall of Fame"
    ]
  },
  {
    "id": "jan-19-paul-cezanne",
    "month": "January",
    "day": "January 19",
    "dayNum": 19,
    "title": "Paul Cezanne b. 1839 (impressionist painter)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 19, 1839, Post-Impressionist master!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, Henri Matisse and Pablo Picasso both described C\u00e9zanne as 'the father of us all'!",
    "who1": "Paul C\u00e9zanne was a French Post-Impressionist painter whose work laid the foundations of the transition from 19th-century art to 20th-century Cubism.",
    "who2": "Paul C\u00e9zanne was born in Aix-en-Provence, France, on January 19, 1839, studying law before dedicating himself to painting.",
    "timeline": [
      "1839 - Born in Aix-en-Provence, France on January 19",
      "1895 - First major solo exhibition in Paris establishes his reputation",
      "1906 - Passed away in Aix-en-Provence as a master of modern art"
    ]
  },
  {
    "id": "jan-19-robert-e-lee",
    "month": "January",
    "day": "January 19",
    "dayNum": 19,
    "title": "Robert E. Lee b. 1807 (leader of Confederate Army)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 19, 1807, Civil War general!",
    "emoji": "\u2694\ufe0f",
    "funFact": "According to Biography.com, Robert E. Lee served as superintendent of West Point before commanding the Army of Northern Virginia!",
    "who1": "Robert E. Lee was an American Confederate general who commanded the Army of Northern Virginia during the American Civil War.",
    "who2": "Robert E. Lee was born in Westmoreland County, Virginia, on January 19, 1807, graduating second in his class from West Point.",
    "timeline": [
      "1807 - Born in Westmoreland County, Virginia on January 19",
      "1862 - Assumed command of the Army of Northern Virginia",
      "1865 - Surrendered to Ulysses S. Grant at Appomattox Court House"
    ]
  },
  {
    "id": "jan-19-edgar-allan-poe",
    "month": "January",
    "day": "January 19",
    "dayNum": 19,
    "title": "Edgar Allen Poe b. 1809 (poet and author)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 19, 1809, master of mystery & macabre!",
    "emoji": "\ud83e\udeb6",
    "funFact": "According to Biography.com, Edgar Allan Poe invented the modern detective fiction genre with his story 'The Murders in the Rue Morgue'!",
    "who1": "Edgar Allan Poe was an American writer, poet, and literary critic best known for his mysterious and macabre poetry and short stories.",
    "who2": "Edgar Allan Poe was born in Boston on January 19, 1809, attending the University of Virginia before serving in the U.S. Army.",
    "timeline": [
      "1809 - Born in Boston, Massachusetts on January 19",
      "1841 - Published 'The Murders in the Rue Morgue,' inventing detective fiction",
      "1845 - Published famous poem 'The Raven' to national acclaim"
    ]
  },
  {
    "id": "jan-20-buzz-aldrin",
    "month": "January",
    "day": "January 20",
    "dayNum": 20,
    "title": "Buzz Aldrin b. 1930 (one of first men to walk on moon)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 20, 1930, Apollo 11 moonwalker!",
    "emoji": "\ud83c\udf15",
    "funFact": "According to Biography.com, Buzz Aldrin held a doctorate in astronautics from MIT and was the lunar module pilot on Apollo 11!",
    "who1": "Buzz Aldrin is an American former astronaut, engineer, and fighter pilot who made history in 1969 as one of the first two humans to walk on the Moon.",
    "who2": "Buzz Aldrin was born Edwin Eugene Aldrin Jr. in Glen Ridge, New Jersey, on January 20, 1930, graduating third in his class from West Point.",
    "timeline": [
      "1930 - Born in Glen Ridge, New Jersey on January 20",
      "1966 - Set spacewalk endurance record during Gemini 12 mission",
      "1969 - Walked on the lunar surface during historic Apollo 11 moon landing"
    ]
  },
  {
    "id": "jan-21-john-fitch",
    "month": "January",
    "day": "January 21",
    "dayNum": 21,
    "title": "John Fitch b. 1743 (inventor of the steamboat)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 21, 1743, steamboat inventor!",
    "emoji": "\ud83d\udea2",
    "funFact": "According to Biography.com, John Fitch operated a 45-foot steamboat on the Delaware River in 1787, decades before Fulton!",
    "who1": "John Fitch was an American inventor, clockmaker, and land surveyor who built the first operational steamboat in the United States.",
    "who2": "John Fitch was born in Windsor, Connecticut, on January 21, 1743, working as a brass founder and silversmith.",
    "timeline": [
      "1743 - Born in Windsor, Connecticut on January 21",
      "1787 - Launched a 45-foot steamboat carrying passengers on the Delaware River",
      "1791 - Awarded U.S. patent for steamboat design"
    ]
  },
  {
    "id": "jan-21-ethan-allen",
    "month": "January",
    "day": "January 21",
    "dayNum": 21,
    "title": "Ethan Allen b. 1738 (Revolutionary War hero)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 21, 1738, leader of Green Mountain Boys!",
    "emoji": "\ud83d\udde1\ufe0f",
    "funFact": "According to Biography.com, Ethan Allen led the Green Mountain Boys to capture Fort Ticonderoga from the British in 1775!",
    "who1": "Ethan Allen was an American farmer, philosopher, businessman, and Patriot hero who led the Green Mountain Boys during the Revolutionary War.",
    "who2": "Ethan Allen was born in Litchfield, Connecticut, on January 21, 1738, moving to the New Hampshire Grants (Vermont).",
    "timeline": [
      "1738 - Born in Litchfield, Connecticut on January 21",
      "1775 - Captured Fort Ticonderoga from British forces alongside Benedict Arnold",
      "1791 - Vermont admitted as 14th state following his founding efforts"
    ]
  },
  {
    "id": "jan-22-willa-brown",
    "month": "January",
    "day": "January 22",
    "dayNum": 22,
    "title": "Willa Brown-Chappell b. 1906 (pioneer aviator)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 22, 1906, aviation pioneer!",
    "emoji": "\u2708\ufe0f",
    "funFact": "According to Biography.com, Willa Brown was the 1st African American woman to earn a commercial pilot's license in the U.S.!",
    "who1": "Willa Brown-Chappell was an American aviator, advocate, and educator who was the first African American woman to earn a commercial pilot's license in the United States.",
    "who2": "Willa Brown was born in Glasgow, Kentucky, on January 22, 1906, studying education at Indiana State Teachers College.",
    "timeline": [
      "1906 - Born in Glasgow, Kentucky on January 22",
      "1938 - Earned commercial pilot's license in the U.S.",
      "1939 - Co-founded National Airmen Association of America to integrate military aviation"
    ]
  },
  {
    "id": "jan-23-elizabeth-blackwell",
    "month": "January",
    "day": "January 23",
    "dayNum": 23,
    "title": "Elizabeth Blackwell becomes doctor 1849",
    "type": "Person (Biography.com)",
    "connection": "Graduated medical school on January 23, 1849!",
    "emoji": "\ud83e\ude7a",
    "funFact": "According to Biography.com, Elizabeth Blackwell was the first woman in America to receive a medical degree!",
    "who1": "Dr. Elizabeth Blackwell was a British-born physician who became the first woman to receive a medical degree in the United States.",
    "who2": "Elizabeth Blackwell was born near Bristol, England, on February 3, 1821, graduating from Geneva Medical College in New York on January 23, 1849.",
    "timeline": [
      "1849 - Graduated first in her class from Geneva Medical College on January 23",
      "1857 - Co-founded the New York Infirmary for Indigent Women and Children",
      "1868 - Established the Women's Medical College in New York"
    ]
  },
  {
    "id": "jan-23-edouard-manet",
    "month": "January",
    "day": "January 23",
    "dayNum": 23,
    "title": "Edouard Manet b. 1832 (artist)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 23, 1832, French painter master!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, \u00c9douard Manet bridged the transition from Realism to Impressionism in 19th-century French art!",
    "who1": "\u00c9douard Manet was a pivotal French painter who transitioned 19th-century art from Realism to Impressionism.",
    "who2": "\u00c9douard Manet was born in Paris on January 23, 1832, studying painting under Thomas Couture.",
    "timeline": [
      "1832 - Born in Paris, France on January 23",
      "1863 - Exhibited famous masterpiece 'Le D\u00e9jeuner sur l'herbe'",
      "1882 - Completed famous final masterpiece 'A Bar at the Folies-Berg\u00e8re'"
    ]
  },
  {
    "id": "jan-24-ca-gold-rush",
    "month": "January",
    "day": "January 24",
    "dayNum": 24,
    "title": "California Gold discovery 1848",
    "type": "Event / History (Wikipedia)",
    "connection": "Discovered at Sutter's Mill on January 24, 1848!",
    "emoji": "\ud83e\ude99",
    "funFact": "According to Wikipedia, James Marshall's discovery of gold flakes brought over 300,000 '49ers' to California!",
    "who1": "The California Gold Discovery occurred on January 24, 1848, when James W. Marshall found gold flakes at Sutter's Mill in Coloma, triggering the California Gold Rush.",
    "who2": "James Marshall spotted shiny yellow metal in the water race of a sawmill he was constructing for John Sutter along the American River.",
    "timeline": [
      "1848 - Gold flakes discovered at Sutter's Mill on January 24",
      "1849 - Over 80,000 fortune seekers '49ers' arrive in California",
      "1850 - California admitted directly as the 31st U.S. state"
    ]
  },
  {
    "id": "jan-24-mary-lou-retton",
    "month": "January",
    "day": "January 24",
    "dayNum": 24,
    "title": "Mary Lou Retton b. 1968 (Olympic gymnast)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 24, 1968, Olympic gymnastics champion!",
    "emoji": "\ud83e\udd38\u200d\u2640\ufe0f",
    "funFact": "According to Biography.com, Mary Lou Retton scored perfect 10s on floor and vault to become the 1st American woman to win individual All-Around Olympic gymnastics gold!",
    "who1": "Mary Lou Retton is an American former gymnast who won the individual all-around gold medal at the 1984 Summer Olympics in Los Angeles.",
    "who2": "Mary Lou Retton was born in Fairmont, West Virginia, on January 24, 1968, training under Bela and Marta Karolyi.",
    "timeline": [
      "1968 - Born in Fairmont, West Virginia on January 24",
      "1984 - Won five medals including All-Around Gold at Los Angeles Olympics",
      "1985 - Inducted into the International Gymnastics Hall of Fame"
    ]
  },
  {
    "id": "jan-25-macintosh",
    "month": "January",
    "day": "January 25",
    "dayNum": 25,
    "title": "Macintosh Computer released 1984",
    "type": "Event / Science (Wikipedia)",
    "connection": "Released nationwide by Apple on January 25, 1984!",
    "emoji": "\ud83d\udcbb",
    "funFact": "According to Wikipedia, the Macintosh was the first mass-market personal computer with a graphical user interface (GUI) and mouse!",
    "who1": "The Macintosh Computer was a groundbreaking personal computer designed and sold by Apple Inc., featuring a built-in monitor, graphical interface, and mouse.",
    "who2": "The Macintosh project was started by Jef Raskin and Steve Jobs, unveiled during Apple's 1984 Super Bowl commercial before going on sale January 25.",
    "timeline": [
      "1984 - Unveiled by Steve Jobs in Cupertino",
      "1984 - Released for public sale nationwide on January 25",
      "1985 - Desktop publishing revolution ignited by Mac and LaserWriter"
    ]
  },
  {
    "id": "jan-26-bessie-coleman",
    "month": "January",
    "day": "January 26",
    "dayNum": 26,
    "title": "Bessie Coleman b. 1893 (1st African American woman pilot)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 26, 1893, pioneer stunt pilot!",
    "emoji": "\ud83d\udee9\ufe0f",
    "funFact": "According to Biography.com, Bessie Coleman learned French and traveled to Paris to earn her pilot's license because U.S. flight schools denied her admission!",
    "who1": "Bessie Coleman was an early American civil aviator and the first African American and Native American woman to hold a pilot license.",
    "who2": "Bessie Coleman was born in Atlanta, Texas, on January 26, 1893, working as a laundress and manicurist before attending flight school in France.",
    "timeline": [
      "1893 - Born in Atlanta, Texas on January 26",
      "1921 - Earned international pilot license from F\u00e9d\u00e9ration A\u00e9ronautique Internationale in France",
      "1922 - Performed first public stunt flight in the United States"
    ]
  },
  {
    "id": "jan-26-rocky-mountain-park",
    "month": "January",
    "day": "January 26",
    "dayNum": 26,
    "title": "Rocky Mountain National Park established in 1915",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Signed into law by President Wilson on January 26, 1915!",
    "emoji": "\ud83c\udfd4\ufe0f",
    "funFact": "According to Wikipedia, Rocky Mountain National Park encompasses 415 square miles of alpine tundra and 77 mountain peaks over 12,000 feet!",
    "who1": "Rocky Mountain National Park is a national park located in north-central Colorado, preserving majestic peaks, alpine lakes, and wildlife.",
    "who2": "The park was established when President Woodrow Wilson signed the Rocky Mountain National Park Act on January 26, 1915.",
    "timeline": [
      "1915 - Signed into federal law on January 26",
      "1932 - Trail Ridge Road completed reaching an elevation of 12,183 feet",
      "1976 - Designated a UNESCO Biosphere Reserve"
    ]
  },
  {
    "id": "jan-27-lewis-carroll",
    "month": "January",
    "day": "January 27",
    "dayNum": 27,
    "title": "Lewis Carroll b. 1832 (author)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 27, 1832, author of Alice in Wonderland!",
    "emoji": "\ud83d\udc07",
    "funFact": "According to Biography.com, Lewis Carroll was an Oxford mathematics lecturer whose real name was Charles Lutwidge Dodgson!",
    "who1": "Lewis Carroll, pen name of Charles Lutwidge Dodgson, was an English author, mathematician, and photographer best known for 'Alice's Adventures in Wonderland.'",
    "who2": "Lewis Carroll was born in Daresbury, Cheshire, England, on January 27, 1832, studying mathematics at Christ Church, Oxford.",
    "timeline": [
      "1832 - Born in Daresbury, England on January 27",
      "1865 - Published timeless masterpiece 'Alice's Adventures in Wonderland'",
      "1871 - Published sequel 'Through the Looking-Glass'"
    ]
  },
  {
    "id": "jan-27-mozart",
    "month": "January",
    "day": "January 27",
    "dayNum": 27,
    "title": "W.A. Mozart b. 1756 (composer)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 27, 1756, musical genius!",
    "emoji": "\ud83c\udfbc",
    "funFact": "According to Biography.com, Wolfgang Amadeus Mozart composed his first symphony at age eight and wrote over 600 musical works!",
    "who1": "Wolfgang Amadeus Mozart was a prolific and influential composer of the Classical period whose genius reshaped symphonic, operatic, and chamber music.",
    "who2": "Mozart was born in Salzburg, Austria, on January 27, 1756, performing as a child prodigy across European royal courts.",
    "timeline": [
      "1756 - Born in Salzburg, Austria on January 27",
      "1764 - Composed first symphony at age eight in London",
      "1786 - Premiered opera masterpiece 'The Marriage of Figaro' in Vienna",
      "1791 - Passed away at age 35 leaving over 600 musical works"
    ]
  },
  {
    "id": "jan-28-piccard-twins",
    "month": "January",
    "day": "January 28",
    "dayNum": 28,
    "title": "Jean Felix and Auguste Piccard b. 1884 (scientists)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 28, 1884, stratosphere & deep sea explorers!",
    "emoji": "\ud83c\udf88",
    "funFact": "According to Biography.com, Auguste Piccard reached the stratosphere in a pressurized balloon, while Jean pioneered polyethylene cosmic ray balloons!",
    "who1": "Jean Felix and Auguste Piccard were Swiss twin scientists and balloonists who pioneered high-altitude stratospheric flights and deep-sea bathyscaphe exploration.",
    "who2": "The Piccard twins were born in Basel, Switzerland, on January 28, 1884, studying chemical and mechanical engineering at ETH Zurich.",
    "timeline": [
      "1884 - Born twin brothers in Basel, Switzerland on January 28",
      "1931 - Auguste Piccard reaches record altitude of 51,775 feet in a stratospheric balloon",
      "1960 - Auguste's son Jacques Piccard dives to the ocean's deepest point, the Mariana Trench"
    ]
  },
  {
    "id": "jan-29-oprah-winfrey",
    "month": "January",
    "day": "January 29",
    "dayNum": 29,
    "title": "Oprah Winfrey b. 1954 (entertainer and philanthropist)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 29, 1954, media mogul & philanthropist!",
    "emoji": "\ud83c\udf99\ufe0f",
    "funFact": "According to Biography.com, Oprah Winfrey hosted 'The Oprah Winfrey Show' for 25 seasons and was awarded the Presidential Medal of Freedom!",
    "who1": "Oprah Winfrey is an American talk show host, television producer, actress, author, and philanthropist best known for 'The Oprah Winfrey Show.'",
    "who2": "Oprah Winfrey was born in Kosciusko, Mississippi, on January 29, 1954, beginning her radio career in high school before anchoring local television news.",
    "timeline": [
      "1954 - Born in Kosciusko, Mississippi on January 29",
      "1986 - Launched nationally syndicated 'The Oprah Winfrey Show'",
      "2011 - Concluded her 25-season talk show to launch OWN network",
      "2013 - Awarded Presidential Medal of Freedom by President Obama"
    ]
  },
  {
    "id": "jan-30-fdr",
    "month": "January",
    "day": "January 30",
    "dayNum": 30,
    "title": "Franklin Delano Roosevelt b. 1882 (32nd U.S. President)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 30, 1882, 32nd U.S. President!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, FDR was elected to four terms as president, led the U.S. through the Great Depression and WWII, and created Social Security!",
    "who1": "Franklin Delano Roosevelt was an American statesman and political leader who served as the 32nd President of the United States from 1933 to 1945.",
    "who2": "FDR was born in Hyde Park, New York, on January 30, 1882, graduating from Harvard College and Columbia Law School.",
    "timeline": [
      "1882 - Born in Hyde Park, New York on January 30",
      "1933 - Inaugurated as 32nd President launching New Deal programs",
      "1935 - Signed Social Security Act into law",
      "1941 - Led United States entry into World War II following Pearl Harbor"
    ]
  },
  {
    "id": "jan-31-jackie-robinson",
    "month": "January",
    "day": "January 31",
    "dayNum": 31,
    "title": "Jackie Robinson b. 1919 (1st African American in MLB)",
    "type": "Person (Biography.com)",
    "connection": "Born on January 31, 1919, MLB color line pioneer!",
    "emoji": "\u26be",
    "funFact": "According to Biography.com, Jackie Robinson's jersey number 42 was retired across all of Major League Baseball in 1997!",
    "who1": "Jackie Robinson was an American professional baseball player who broke Major League Baseball's color line when he debuted with the Brooklyn Dodgers in 1947.",
    "who2": "Jackie Robinson was born in Cairo, Georgia, on January 31, 1919, excelling in four sports (football, basketball, track, baseball) at UCLA.",
    "timeline": [
      "1919 - Born in Cairo, Georgia on January 31",
      "1947 - Debuted with Brooklyn Dodgers breaking MLB color line",
      "1949 - Won National League Most Valuable Player award",
      "1962 - Inducted into the Baseball Hall of Fame"
    ]
  }
];
  const RAW_FEBRUARY_DATA = [
  {
    "id": "feb-1-supreme-court",
    "month": "February",
    "day": "February 1",
    "dayNum": 1,
    "title": "Supreme Court held its first session 1790",
    "type": "Event / History (Wikipedia)",
    "connection": "Convened in NYC on February 1, 1790!",
    "emoji": "\u2696\ufe0f",
    "funFact": "According to Wikipedia, the Supreme Court held its first meeting at the Royal Exchange Building in New York City!",
    "who1": "The Supreme Court of the United States held its inaugural session on February 1, 1790, establishing the third branch of American constitutional governance.",
    "who2": "The Supreme Court convened under Chief Justice John Jay in New York City, which served as the temporary national capital.",
    "timeline": [
      "1790 - Convened first official session in New York City on February 1",
      "1791 - Moved to Old City Hall in Philadelphia",
      "1800 - Established permanent headquarters in Washington, D.C."
    ]
  },
  {
    "id": "feb-1-explorer-1",
    "month": "February",
    "day": "February 1",
    "dayNum": 1,
    "title": "First U.S. Satellite launched 1958",
    "type": "Event / Space (Wikipedia)",
    "connection": "Launched into Earth orbit on February 1, 1958!",
    "emoji": "\ud83d\ude80",
    "funFact": "According to Wikipedia, Explorer 1 discovered the Van Allen radiation belts surrounding Earth!",
    "who1": "Explorer 1 was the first artificial satellite launched into Earth orbit by the United States on February 1, 1958, marking America's entry into the Space Age.",
    "who2": "Explorer 1 was built by the Jet Propulsion Laboratory (JPL) under Wernher von Braun and James Van Allen.",
    "timeline": [
      "1958 - Launched from Cape Canaveral, Florida, on February 1",
      "1958 - Discovered the Van Allen radiation belts around Earth",
      "1970 - Reentered Earth's atmosphere after completing 58,000 orbits"
    ]
  },
  {
    "id": "feb-1-langston-hughes",
    "month": "February",
    "day": "February 1",
    "dayNum": 1,
    "title": "Langston Hughes b. 1902 (poet)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 1, 1902, Harlem Renaissance poet icon!",
    "emoji": "\ud83e\udeb6",
    "funFact": "According to Biography.com, Langston Hughes wrote his famous poem 'The Negro Speaks of Rivers' at age eighteen!",
    "who1": "Langston Hughes was an American poet, social activist, novelist, and playwright who was a leading figure of the Harlem Renaissance.",
    "who2": "Langston Hughes was born in Joplin, Missouri, on February 1, 1902, studying at Columbia University and Lincoln University.",
    "timeline": [
      "1902 - Born in Joplin, Missouri on February 1",
      "1921 - Published famous poem 'The Negro Speaks of Rivers'",
      "1926 - Published first poetry collection 'The Weary Blues'",
      "1967 - Passed away in New York City as a literary giant"
    ]
  },
  {
    "id": "feb-2-groundhog-day",
    "month": "February",
    "day": "February 2",
    "dayNum": 2,
    "title": "Groundhog Day",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Celebrated annually on February 2 in Punxsutawney, PA!",
    "emoji": "\ud83e\uddab",
    "funFact": "According to Wikipedia, Punxsutawney Phil's weather prediction ritual began in 1887 at Gobbler's Knob!",
    "who1": "Groundhog Day is a traditional North American holiday celebrated on February 2 where a groundhog's shadow predicts spring's arrival.",
    "who2": "Groundhog Day originated from German weather lore and Candlemas customs brought to Pennsylvania by European settlers.",
    "timeline": [
      "1887 - First official Groundhog Day celebrated in Punxsutawney, Pennsylvania",
      "1993 - Iconic comedy movie 'Groundhog Day' released",
      "2020 - Punxsutawney Phil webstream viewed by millions worldwide"
    ]
  },
  {
    "id": "feb-3-norman-rockwell",
    "month": "February",
    "day": "February 3",
    "dayNum": 3,
    "title": "Norman Rockwell b. 1894 (artist)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 3, 1894, painter of American life!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, Norman Rockwell created 323 cover illustrations for The Saturday Evening Post over 47 years!",
    "who1": "Norman Rockwell was an American painter and illustrator best known for his iconic cover illustrations depicting everyday American life.",
    "who2": "Norman Rockwell was born in New York City on February 3, 1894, studying art at the Chase Art School and National Academy of Design.",
    "timeline": [
      "1894 - Born in New York City on February 3",
      "1916 - Painted his first cover for The Saturday Evening Post",
      "1943 - Created famous 'Four Freedoms' painting series",
      "1977 - Awarded Presidential Medal of Freedom by President Gerald Ford"
    ]
  },
  {
    "id": "feb-3-endangered-species-act",
    "month": "February",
    "day": "February 3",
    "dayNum": 3,
    "title": "Endangered Species Act signed 1973",
    "type": "Event / History (Wikipedia)",
    "connection": "Signed into landmark law conserving wildlife!",
    "emoji": "\ud83e\udd85",
    "funFact": "According to Wikipedia, the Endangered Species Act has saved 99% of listed species from extinction, including the Bald Eagle!",
    "who1": "The Endangered Species Act is a landmark United States environmental law passed to prevent extinction of imperiled wildlife species.",
    "who2": "The act was signed into federal law by President Richard Nixon in December 1973 following unanimous Senate approval.",
    "timeline": [
      "1973 - Signed into federal law preserving imperiled species",
      "1995 - Gray wolves successfully reintroduced to Yellowstone",
      "2007 - American Bald Eagle removed from endangered list after full population recovery"
    ]
  },
  {
    "id": "feb-4-charles-lindbergh",
    "month": "February",
    "day": "February 4",
    "dayNum": 4,
    "title": "Charles Lindberg b. 1902 (aviator)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 4, 1902, 1st solo nonstop Atlantic flight!",
    "emoji": "\u2708\ufe0f",
    "funFact": "According to Biography.com, Charles Lindbergh flew 'The Spirit of St. Louis' solo for 33.5 hours nonstop from NYC to Paris!",
    "who1": "Charles Lindbergh was an American aviator, author, and explorer who completed the first solo nonstop transatlantic flight in 1927.",
    "who2": "Charles Lindbergh was born in Detroit, Michigan, on February 4, 1902, learning to fly as an U.S. Army Air Service cadet.",
    "timeline": [
      "1902 - Born in Detroit, Michigan on February 4",
      "1927 - Completed historic solo transatlantic flight aboard 'The Spirit of St. Louis'",
      "1954 - Awarded Pulitzer Prize for his autobiography 'The Spirit of St. Louis'"
    ]
  },
  {
    "id": "feb-4-rosa-parks",
    "month": "February",
    "day": "February 4",
    "dayNum": 4,
    "title": "Rosa Parks b. 1913 (civil rights activist)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 4, 1913, Mother of Civil Rights!",
    "emoji": "\ud83d\ude8c",
    "funFact": "According to Biography.com, Rosa Parks received the Congressional Gold Medal and Presidential Medal of Freedom!",
    "who1": "Rosa Parks was an iconic African American civil rights activist whose refusal to surrender her seat on a segregated bus ignited the Civil Rights Movement.",
    "who2": "Rosa Parks was born in Tuskegee, Alabama, on February 4, 1913, working as a seamstress and secretary for the Montgomery NAACP.",
    "timeline": [
      "1913 - Born in Tuskegee, Alabama on February 4",
      "1955 - Refused to yield bus seat in Montgomery sparking 381-day boycott",
      "1996 - Awarded Presidential Medal of Freedom by President Bill Clinton",
      "2005 - Passed away in Detroit, becoming first woman to lie in honor at U.S. Capitol Rotunda"
    ]
  },
  {
    "id": "feb-5-hank-aaron",
    "month": "February",
    "day": "February 5",
    "dayNum": 5,
    "title": "Hank Aaron b. 1934 (Baseball Hall of Fame outfielder)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 5, 1934, 'Hammerin' Hank'!",
    "emoji": "\u26be",
    "funFact": "According to Biography.com, Hank Aaron hit 755 career home runs and holds the MLB record for most career RBIs (2,297)!",
    "who1": "Henry Louis 'Hank' Aaron was an American professional baseball right fielder who hit 755 career home runs and won 25 All-Star selections.",
    "who2": "Hank Aaron was born in Mobile, Alabama, on February 5, 1934, playing in the Negro leagues before joining the Milwaukee Braves.",
    "timeline": [
      "1934 - Born in Mobile, Alabama on February 5",
      "1957 - Won National League MVP and led Milwaukee Braves to World Series title",
      "1974 - Hit 715th career home run breaking Babe Ruth's legendary record",
      "1982 - Inducted into the Baseball Hall of Fame"
    ]
  },
  {
    "id": "feb-6-babe-ruth",
    "month": "February",
    "day": "February 6",
    "dayNum": 6,
    "title": "Babe Ruth b. 1895 (Baseball Hall of Fame pitcher)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 6, 1895, 'The Sultan of Swat'!",
    "emoji": "\u26be",
    "funFact": "According to Biography.com, Babe Ruth began his career as a star pitcher for the Red Sox before hitting 714 home runs for the Yankees!",
    "who1": "George Herman 'Babe' Ruth Jr. was an American professional baseball player whose slugging power transformed baseball into America's pastime.",
    "who2": "Babe Ruth was born in Baltimore, Maryland, on February 6, 1895, learning baseball at St. Mary's Industrial School for Boys.",
    "timeline": [
      "1895 - Born in Baltimore, Maryland on February 6",
      "1914 - Signed by Baltimore Orioles and traded to Boston Red Sox as a star pitcher",
      "1927 - Hit record 60 home runs in a single MLB season",
      "1936 - Elected as one of the inaugural five members of the Baseball Hall of Fame"
    ]
  },
  {
    "id": "feb-6-ronald-reagan",
    "month": "February",
    "day": "February 6",
    "dayNum": 6,
    "title": "Ronald Reagan b. 1911 (40th U.S. President)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 6, 1911, 40th U.S. President!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, Ronald Reagan was a Hollywood actor and California Governor before serving two terms as President!",
    "who1": "Ronald Wilson Reagan was an American politician and actor who served as the 40th President of the United States from 1981 to 1989.",
    "who2": "Ronald Reagan was born in Tampico, Illinois, on February 6, 1911, graduating from Eureka College before acting in over 50 films.",
    "timeline": [
      "1911 - Born in Tampico, Illinois on February 6",
      "1967-1975 - Served as 33rd Governor of California",
      "1981-1989 - Served as 40th President of the United States",
      "1987 - Delivered historic 'Tear down this wall!' speech in Berlin"
    ]
  },
  {
    "id": "feb-7-frederick-douglass",
    "month": "February",
    "day": "February 7",
    "dayNum": 7,
    "title": "Frederick Douglass b. 1817 (author & abolitionist)",
    "type": "Person (Biography.com)",
    "connection": "Born in February 1817, abolitionist & orator icon!",
    "emoji": "\ud83d\udde3\ufe0f",
    "funFact": "According to Biography.com, Frederick Douglass escaped enslavement and published 'The North Star' abolitionist newspaper!",
    "who1": "Frederick Douglass was an American social reformer, abolitionist, orator, writer, and statesman who led the national movement to end slavery.",
    "who2": "Frederick Douglass was born into enslavement in Talbot County, Maryland, around February 1817, teaching himself to read and write.",
    "timeline": [
      "c. 1817 - Born in Talbot County, Maryland",
      "1838 - Escaped enslavement disguised as a sailor arriving in New York",
      "1845 - Published groundbreaking 'Narrative of the Life of Frederick Douglass'",
      "1847 - Founded 'The North Star' abolitionist newspaper in Rochester, NY"
    ]
  },
  {
    "id": "feb-7-laura-ingalls-wilder",
    "month": "February",
    "day": "February 7",
    "dayNum": 7,
    "title": "Laura Ingalls Wilder b. 1867 (author of Little House)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 7, 1867, author of Little House on the Prairie!",
    "emoji": "\ud83c\udf3e",
    "funFact": "According to Biography.com, Laura Ingalls Wilder published her first 'Little House' book at age 65 based on her pioneer childhood!",
    "who1": "Laura Ingalls Wilder was an American writer best known for the 'Little House on the Prairie' series of children's books.",
    "who2": "Laura Ingalls was born near Pepin, Wisconsin, on February 7, 1867, traveling by covered wagon across the American frontier.",
    "timeline": [
      "1867 - Born near Pepin, Wisconsin on February 7",
      "1932 - Published first novel 'Little House in the Big Woods'",
      "1935 - Published classic 'Little House on the Prairie'",
      "1957 - Passed away in Mansfield, Missouri as a beloved pioneer author"
    ]
  },
  {
    "id": "feb-8-boy-scouts",
    "month": "February",
    "day": "February 8",
    "dayNum": 8,
    "title": "Boy Scouts of America founded 1910",
    "type": "Event / History (Wikipedia)",
    "connection": "Incorporated on February 8, 1910!",
    "emoji": "\ud83c\udfd5\ufe0f",
    "funFact": "According to Wikipedia, W.D. Boyce incorporated the BSA after an unknown British Scout helped him through London fog!",
    "who1": "The Boy Scouts of America is one of the largest youth organization movements in the U.S., founded on February 8, 1910.",
    "who2": "The organization was incorporated by Chicago publisher W.D. Boyce after visiting Lord Baden-Powell's scouting program in England.",
    "timeline": [
      "1910 - Incorporated in Washington, D.C. on February 8",
      "1911 - First Eagle Scout rank awarded to Arthur R. Eldred",
      "1916 - Granted a federal charter by U.S. Congress"
    ]
  },
  {
    "id": "feb-8-jules-verne",
    "month": "February",
    "day": "February 8",
    "dayNum": 8,
    "title": "Jules Verne b. 1828 (author of Twenty Thousand Leagues)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 8, 1828, Father of Science Fiction!",
    "emoji": "\ud83e\udd91",
    "funFact": "According to Biography.com, Jules Verne envisioned submarines and space travel long before they were invented!",
    "who1": "Jules Verne was a French novelist, poet, and playwright best known for adventure novels such as 'Twenty Thousand Leagues Under the Sea.'",
    "who2": "Jules Verne was born in Nantes, France, on February 8, 1828, studying law in Paris before writing adventure novels.",
    "timeline": [
      "1828 - Born in Nantes, France on February 8",
      "1864 - Published 'Journey to the Center of the Earth'",
      "1870 - Published 'Twenty Thousand Leagues Under the Sea'",
      "1872 - Published 'Around the World in Eighty Days'"
    ]
  },
  {
    "id": "feb-9-william-henry-harrison",
    "month": "February",
    "day": "February 9",
    "dayNum": 9,
    "title": "William Henry Harrison b. 1773 (9th U.S. President)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 9, 1773, 9th U.S. President!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, William Henry Harrison delivered a 105-minute inaugural address, the longest in presidential history!",
    "who1": "William Henry Harrison was an American military officer and politician who served as the 9th President of the United States in 1841.",
    "who2": "William Henry Harrison was born in Charles City County, Virginia, on February 9, 1773, studying medicine before joining the army.",
    "timeline": [
      "1773 - Born in Virginia on February 9",
      "1811 - Commanded forces at the Battle of Tippecanoe",
      "1841 - Sworn in as 9th U.S. President"
    ]
  },
  {
    "id": "feb-9-carole-king",
    "month": "February",
    "day": "February 9",
    "dayNum": 9,
    "title": "Carole King b. 1941 (singer & songwriter)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 9, 1941, Grammy-winning songwriter!",
    "emoji": "\ud83c\udfb9",
    "funFact": "According to Biography.com, Carole King's album 'Tapestry' won four Grammy Awards and stayed on the charts for over 300 weeks!",
    "who1": "Carole King is an American singer-songwriter who is regarded as one of the most successful female songwriters of the 20th century.",
    "who2": "Carole King was born Carol Joan Klein in Manhattan, New York, on February 9, 1941, writing hit songs in the Brill Building.",
    "timeline": [
      "1941 - Born in New York City on February 9",
      "1971 - Released landmark pop album 'Tapestry'",
      "2013 - Awarded Gershwin Prize for Popular Song by the Library of Congress",
      "2021 - Inducted into the Rock and Roll Hall of Fame as a solo artist"
    ]
  },
  {
    "id": "feb-10-french-indian-war",
    "month": "February",
    "day": "February 10",
    "dayNum": 10,
    "title": "French and Indian War ends 1763",
    "type": "Event / History (Wikipedia)",
    "connection": "Concluded with Treaty of Paris on February 10, 1763!",
    "emoji": "\u2694\ufe0f",
    "funFact": "According to Wikipedia, the Treaty of Paris transferred New France and Florida to British colonial control!",
    "who1": "The French and Indian War concluded on February 10, 1763, with the signing of the Treaty of Paris, reshaping North American colonial empires.",
    "who2": "The war pitted Great Britain and its Native allies against France, ending with British territorial expansion.",
    "timeline": [
      "1754 - War breaks out between British and French colonial forces",
      "1763 - Treaty of Paris signed in France on February 10 ending conflict",
      "1763 - Royal Proclamation establishes new colonial boundaries"
    ]
  },
  {
    "id": "feb-10-mark-spitz",
    "month": "February",
    "day": "February 10",
    "dayNum": 10,
    "title": "Mark Spitz b. 1950 (Olympic swimmer)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 10, 1950, 7-gold medal swimmer!",
    "emoji": "\ud83c\udfca\u200d\u2642\ufe0f",
    "funFact": "According to Biography.com, Mark Spitz won seven gold medals at the 1972 Munich Olympics, setting world records in all seven events!",
    "who1": "Mark Andrew Spitz is an American former competition swimmer who won nine Olympic gold medals and set 33 world records.",
    "who2": "Mark Spitz was born in Modesto, California, on February 10, 1950, swimming for Indiana University under Doc Counsilman.",
    "timeline": [
      "1950 - Born in Modesto, California on February 10",
      "1968 - Won two gold medals at Mexico City Olympics",
      "1972 - Won historic seven gold medals at Munich Olympics setting seven world records",
      "1977 - Inducted into International Swimming Hall of Fame"
    ]
  },
  {
    "id": "feb-11-thomas-edison",
    "month": "February",
    "day": "February 11",
    "dayNum": 11,
    "title": "Thomas Alva Edison b. 1847 (inventor)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 11, 1847, prolific American inventor!",
    "emoji": "\ud83d\udca1",
    "funFact": "According to Biography.com, Edison developed the phonograph, motion picture camera, and practical incandescent electric lightbulb!",
    "who1": "Thomas Alva Edison was an American inventor and businessman who held 1,093 U.S. patents and developed central electric power stations.",
    "who2": "Thomas Edison was born in Milan, Ohio, on February 11, 1847, working as a telegraph operator before establishing Menlo Park lab.",
    "timeline": [
      "1847 - Born in Milan, Ohio on February 11",
      "1877 - Invented the phonograph sound recorder",
      "1879 - Developed long-lasting practical incandescent lightbulb",
      "1931 - Passed away in West Orange, New Jersey"
    ]
  },
  {
    "id": "feb-12-abraham-lincoln",
    "month": "February",
    "day": "February 12",
    "dayNum": 12,
    "title": "Abraham Lincoln b. 1809 (16th U.S. President)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 12, 1809, 16th U.S. President!",
    "emoji": "\ud83c\udfa9",
    "funFact": "According to Biography.com, Lincoln issued the Emancipation Proclamation and delivered the Gettysburg Address during the Civil War!",
    "who1": "Abraham Lincoln was an American lawyer and statesman who served as the 16th President of the United States, preserving the Union and abolishing slavery.",
    "who2": "Abraham Lincoln was born in a one-room log cabin in Hardin County, Kentucky, on February 12, 1809, teaching himself law.",
    "timeline": [
      "1809 - Born in Hardin County, Kentucky on February 12",
      "1861 - Sworn in as 16th President of the United States",
      "1863 - Issued the Emancipation Proclamation",
      "1865 - Preserved the Union before his tragic death"
    ]
  },
  {
    "id": "feb-13-chuck-yeager",
    "month": "February",
    "day": "February 13",
    "dayNum": 13,
    "title": "Chuck Yeager b. 1923 (broke the sound barrier)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 13, 1923, 1st pilot to break sound barrier!",
    "emoji": "\u2708\ufe0f",
    "funFact": "According to Biography.com, Chuck Yeager flew the Bell X-1 rocket plane at Mach 1.05 in 1947, breaking the sound barrier for the first time!",
    "who1": "Charles Elwood Yeager was a United States Air Force officer and test pilot who became the first human officially confirmed to have broken the sound barrier.",
    "who2": "Chuck Yeager was born in Myra, West Virginia, on February 13, 1923, serving as a WWII fighter ace in the Army Air Forces.",
    "timeline": [
      "1923 - Born in Myra, West Virginia on February 13",
      "1947 - Broke the sound barrier flying Bell X-1 at Mach 1.05",
      "1985 - Awarded Presidential Medal of Freedom by President Ronald Reagan",
      "2020 - Passed away at age ninety-seven as an aviation icon"
    ]
  },
  {
    "id": "feb-14-valentines-day",
    "month": "February",
    "day": "February 14",
    "dayNum": 14,
    "title": "Valentine's Day",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Celebrated annually on February 14 worldwide!",
    "emoji": "\u2764\ufe0f",
    "funFact": "According to Wikipedia, over 145 million Valentine's Day greeting cards are exchanged every year in the United States alone!",
    "who1": "Valentine's Day is an annual holiday celebrated on February 14 recognizing romance, friendship, and affection.",
    "who2": "The holiday originated as a Christian feast day honoring Saint Valentine before becoming a major cultural tradition in Europe and America.",
    "timeline": [
      "c. 496 AD - Pope Gelasius I establishes Feast of Saint Valentine on February 14",
      "1840s - Esther Howland pioneers mass-produced paper Valentines in America",
      "2020 - Celebrated globally with flowers, cards, and chocolates"
    ]
  },
  {
    "id": "feb-15-susan-b-anthony",
    "month": "February",
    "day": "February 15",
    "dayNum": 15,
    "title": "Susan B. Anthony b. 1820 (American reformer & suffragist)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 15, 1820, suffragist pioneer!",
    "emoji": "\ud83d\uddf3\ufe0f",
    "funFact": "According to Biography.com, Susan B. Anthony was arrested for voting illegally in the 1872 election and spent 50 years championing women's right to vote!",
    "who1": "Susan B. Anthony was a legendary American social reformer and women's rights activist who played a pivotal role in the women's suffrage movement.",
    "who2": "Susan B. Anthony was born in Adams, Massachusetts, on February 15, 1820, working as a teacher before co-founding the National Woman Suffrage Association.",
    "timeline": [
      "1820 - Born in Adams, Massachusetts on February 15",
      "1872 - Arrested for voting illegally in Rochester, New York",
      "1906 - Passed away 14 years before the 19th Amendment guaranteed women's right to vote",
      "1979 - Honored as first woman depicted on circulating U.S. coin"
    ]
  },
  {
    "id": "feb-15-galileo",
    "month": "February",
    "day": "February 15",
    "dayNum": 15,
    "title": "Galileo Galilei b. 1564 (physicist and astronomer)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 15, 1564, Father of Modern Science!",
    "emoji": "\ud83d\udd2d",
    "funFact": "According to Biography.com, Galileo discovered Jupiter's four largest moons, Saturn's rings, and phases of Venus using his improved telescope!",
    "who1": "Galileo Galilei was an Italian astronomer, physicist, and polymath known as the Father of Modern Science for his telescopic astronomical discoveries.",
    "who2": "Galileo was born in Pisa, Italy, on February 15, 1564, studying medicine and mathematics at the University of Pisa.",
    "timeline": [
      "1564 - Born in Pisa, Italy on February 15",
      "1609 - Constructed his astronomical telescope",
      "1610 - Discovered Jupiter's four largest moons (Io, Europa, Ganymede, Callisto)",
      "1632 - Published 'Dialogue Concerning the Two Chief World Systems'"
    ]
  },
  {
    "id": "feb-16-john-mcenroe",
    "month": "February",
    "day": "February 16",
    "dayNum": 16,
    "title": "John McEnroe b. 1959 (tennis player)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 16, 1959, 7-time Grand Slam tennis champion!",
    "emoji": "\ud83c\udfbe",
    "funFact": "According to Biography.com, John McEnroe won seven Grand Slam singles titles and 78 doubles titles in professional tennis!",
    "who1": "John Patrick McEnroe Jr. is an American former world No. 1 professional tennis player known for his shot-making and competitive intensity.",
    "who2": "John McEnroe was born in Wiesbaden, West Germany, on February 16, 1959, growing up in Queens, New York, and attending Stanford University.",
    "timeline": [
      "1959 - Born in Wiesbaden, West Germany on February 16",
      "1979 - Won his first U.S. Open singles championship",
      "1981, 1983, 1984 - Won three Wimbledon singles titles",
      "1999 - Inducted into the International Tennis Hall of Fame"
    ]
  },
  {
    "id": "feb-17-geronimo",
    "month": "February",
    "day": "February 17",
    "dayNum": 17,
    "title": "Geronimo d. 1909 (Apache Native American leader)",
    "type": "Person (Biography.com)",
    "connection": "Passed away on February 17, 1909, Apache leader icon!",
    "emoji": "\ud83c\udff9",
    "funFact": "According to Biography.com, Geronimo led Chiricahua Apache resistance against military forces protecting tribal homelands in New Mexico and Arizona!",
    "who1": "Geronimo was a prominent leader and medicine man of the Chiricahua Apache who defended tribal lands against military encroachment.",
    "who2": "Geronimo was born in No-Doyohn Canyon, Mexico, in 1829, joining tribal warrior councils after losing his family in an attack.",
    "timeline": [
      "1829 - Born in No-Doyohn Canyon in Apache territory",
      "1886 - Surrendered to General Nelson Miles ending Apache resistance",
      "1905 - Rode in President Theodore Roosevelt's inaugural parade",
      "1909 - Passed away at Fort Sill, Oklahoma on February 17"
    ]
  },
  {
    "id": "feb-17-marian-anderson",
    "month": "February",
    "day": "February 17",
    "dayNum": 17,
    "title": "Marian Anderson b. 1902 (opera singer)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 17, 1902, opera icon!",
    "emoji": "\ud83c\udfa4",
    "funFact": "According to Biography.com, Marian Anderson sang before 75,000 people at the Lincoln Memorial in 1939 after being denied Constitution Hall!",
    "who1": "Marian Anderson was an American contralto opera singer who broke racial barriers in classical music and civil rights history.",
    "who2": "Marian Anderson was born in Philadelphia on February 17, 1902, singing in her church choir before studying classical vocal performance.",
    "timeline": [
      "1902 - Born in Philadelphia, Pennsylvania on February 17",
      "1939 - Performed historic Easter Sunday concert at the Lincoln Memorial",
      "1955 - Became first African American to perform at the Metropolitan Opera",
      "1963 - Awarded Presidential Medal of Freedom by President Lyndon B. Johnson"
    ]
  },
  {
    "id": "feb-18-jefferson-davis",
    "month": "February",
    "day": "February 18",
    "dayNum": 18,
    "title": "Jefferson Davis inaugurated as President of the Confederacy 1861",
    "type": "Event / History (Wikipedia)",
    "connection": "Inaugurated in Montgomery on February 18, 1861!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Wikipedia, Jefferson Davis was a U.S. Senator and Secretary of War before serving as Confederate President!",
    "who1": "Jefferson Davis was an American politician who served as President of the Confederate States during the American Civil War.",
    "who2": "Jefferson Davis was inaugurated at the Alabama State Capitol building in Montgomery on February 18, 1861.",
    "timeline": [
      "1861 - Inaugurated as Confederate President in Montgomery, Alabama on February 18",
      "1865 - Captured by Union forces in Georgia ending Confederate administration"
    ]
  },
  {
    "id": "feb-18-pluto-discovered",
    "month": "February",
    "day": "February 18",
    "dayNum": 18,
    "title": "Pluto discovered 1930",
    "type": "Event / Science (Wikipedia)",
    "connection": "Discovered by Clyde Tombaugh on February 18, 1930!",
    "emoji": "\ud83e\ude90",
    "funFact": "According to Wikipedia, 11-year-old Venetia Burney suggested the name 'Pluto' after the Roman god of the underworld!",
    "who1": "Pluto is a dwarf planet in the Kuiper belt discovered by American astronomer Clyde Tombaugh at Lowell Observatory on February 18, 1930.",
    "who2": "Clyde Tombaugh discovered Pluto using a blink comparator machine to compare photographic plates of the night sky.",
    "timeline": [
      "1930 - Discovered at Lowell Observatory in Flagstaff, Arizona on February 18",
      "2006 - Reclassified as a dwarf planet by the International Astronomical Union",
      "2015 - NASA's New Horizons spacecraft completes historic flyby of Pluto"
    ]
  },
  {
    "id": "feb-19-copernicus",
    "month": "February",
    "day": "February 19",
    "dayNum": 19,
    "title": "Copernicus b. 1473 (astronomer)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 19, 1473, sun-centered universe pioneer!",
    "emoji": "\u2600\ufe0f",
    "funFact": "According to Biography.com, Nicolaus Copernicus proposed that Earth and planets orbit around the Sun, revolutionizing astronomy!",
    "who1": "Nicolaus Copernicus was a Polish mathematician and astronomer who formulated the heliocentric model of the universe placing the Sun at its center.",
    "who2": "Nicolaus Copernicus was born in Toru\u0144, Poland, on February 19, 1473, studying canon law and mathematics at Krakow University.",
    "timeline": [
      "1473 - Born in Toru\u0144, Poland on February 19",
      "1543 - Published landmark astronomical book 'De revolutionibus orbium coelestium'"
    ]
  },
  {
    "id": "feb-20-ansel-adams",
    "month": "February",
    "day": "February 20",
    "dayNum": 20,
    "title": "Ansel Adams b. 1902 (American photographer)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 20, 1902, landscape photography master!",
    "emoji": "\ud83d\udcf7",
    "funFact": "According to Biography.com, Ansel Adams co-developed the Zone System to achieve perfect black-and-white photographic tonal range!",
    "who1": "Ansel Easton Adams was an American landscape photographer and environmentalist famous for his black-and-white images of the American West.",
    "who2": "Ansel Adams was born in San Francisco, California, on February 20, 1902, taking his first photographs of Yosemite National Park at age fourteen.",
    "timeline": [
      "1902 - Born in San Francisco, California on February 20",
      "1932 - Co-founded Group f/64 advocating straight photography",
      "1980 - Awarded Presidential Medal of Freedom by President Jimmy Carter"
    ]
  },
  {
    "id": "feb-21-washington-monument",
    "month": "February",
    "day": "February 21",
    "dayNum": 21,
    "title": "Washington Monument dedicated 1885",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Dedicated in Washington, D.C. on February 21, 1885!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Wikipedia, at 555 feet tall, the Washington Monument was the tallest structure in the world when dedicated in 1885!",
    "who1": "The Washington Monument is a world-famous 555-foot marble obelisk on the National Mall built to honor George Washington.",
    "who2": "Construction began in 1848 before being halted during the Civil War and dedicated on February 21, 1885.",
    "timeline": [
      "1848 - Cornerstone laid on National Mall",
      "1885 - Dedicated on February 21 at 555 feet tall",
      "1888 - Opened to public visitors"
    ]
  },
  {
    "id": "feb-22-george-washington",
    "month": "February",
    "day": "February 22",
    "dayNum": 22,
    "title": "George Washington b. 1732 (1st U.S. President)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 22, 1732, 1st U.S. President!",
    "emoji": "\ud83c\uddfa\ud83c\uddf8",
    "funFact": "According to Biography.com, Washington commanded the Continental Army to victory in the Revolutionary War and served as first U.S. President!",
    "who1": "George Washington was an American military officer, statesman, and Founding Father who served as the first President of the United States from 1789 to 1797.",
    "who2": "George Washington was born in Westmoreland County, Virginia, on February 22, 1732, working as a surveyor.",
    "timeline": [
      "1732 - Born in Westmoreland County, Virginia on February 22",
      "1775-1783 - Commanded Continental Army during American Revolution",
      "1789 - Sworn in as 1st President of the United States"
    ]
  },
  {
    "id": "feb-22-frederic-chopin",
    "month": "February",
    "day": "February 22",
    "dayNum": 22,
    "title": "Frederic Chopin b. 1810 (pianist & composer)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 22, 1810, Romantic piano genius!",
    "emoji": "\ud83c\udfb9",
    "funFact": "According to Biography.com, Fr\u00e9d\u00e9ric Chopin wrote all his compositions featuring the piano, inventing the instrumental ballade!",
    "who1": "Fr\u00e9d\u00e9ric Fran\u00e7ois Chopin was a Polish composer and virtuoso pianist of the Romantic era who wrote solo piano masterpieces.",
    "who2": "Fr\u00e9d\u00e9ric Chopin was born in \u017belazowa Wola, Poland, on February 22, 1810, completing his musical education at Warsaw Conservatory.",
    "timeline": [
      "1810 - Born in \u017belazowa Wola, Poland on February 22",
      "1831 - Settled in Paris performing intimate salon concerts",
      "1849 - Passed away in Paris leaving timeless piano compositions"
    ]
  },
  {
    "id": "feb-23-web-dubois",
    "month": "February",
    "day": "February 23",
    "dayNum": 23,
    "title": "W.E.B. DuBois b. 1868 (civil rights activist)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 23, 1868, co-founder of NAACP!",
    "emoji": "\ud83d\udcda",
    "funFact": "According to Biography.com, W.E.B. Du Bois was the 1st African American to earn a Ph.D. from Harvard University!",
    "who1": "William Edward Burghardt Du Bois was an American sociologist, historian, civil rights activist, author, and co-founder of the NAACP.",
    "who2": "W.E.B. Du Bois was born in Great Barrington, Massachusetts, on February 23, 1868, earning his Ph.D. from Harvard in 1895.",
    "timeline": [
      "1868 - Born in Great Barrington, Massachusetts on February 23",
      "1895 - First African American to earn a Harvard doctorate",
      "1903 - Published seminal book 'The Souls of Black Folk'",
      "1909 - Co-founded the NAACP and edited 'The Crisis' magazine"
    ]
  },
  {
    "id": "feb-23-george-frederick-handel",
    "month": "February",
    "day": "February 23",
    "dayNum": 23,
    "title": "George Frederick Handel b. 1685 (composer)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 23, 1685, Baroque composer of 'Messiah'!",
    "emoji": "\ud83c\udfbc",
    "funFact": "According to Biography.com, Handel composed the famous 'Hallelujah Chorus' in his sacred oratorio 'Messiah' in 1741!",
    "who1": "George Frideric Handel was a German-born Baroque composer famous for his operas, concertos, and choral masterpiece 'Messiah.'",
    "who2": "Handel was born in Halle, Germany, on February 23, 1685, settling in London as a naturalized British subject.",
    "timeline": [
      "1685 - Born in Halle, Germany on February 23",
      "1717 - Composed 'Water Music' for King George I",
      "1741 - Composed 'Messiah' including the 'Hallelujah Chorus'"
    ]
  },
  {
    "id": "feb-24-honus-wagner",
    "month": "February",
    "day": "February 24",
    "dayNum": 24,
    "title": "Honus Wagner b. 1874 (baseball player)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 24, 1874, Baseball Hall of Fame shortstop!",
    "emoji": "\u26be",
    "funFact": "According to Biography.com, Honus Wagner won eight National League batting titles and his T206 baseball card sold for over $6 million!",
    "who1": "Johannes Peter 'Honus' Wagner, nicknamed 'The Flying Dutchman,' was an American baseball shortstop who played 21 MLB seasons.",
    "who2": "Honus Wagner was born in Chartiers, Pennsylvania, on February 24, 1874, working in coal mines before joining the Pittsburgh Pirates.",
    "timeline": [
      "1874 - Born in Chartiers, Pennsylvania on February 24",
      "1909 - Led Pittsburgh Pirates to World Series victory",
      "1936 - Elected as one of the inaugural five members of the Baseball Hall of Fame"
    ]
  },
  {
    "id": "feb-25-pierre-renoir",
    "month": "February",
    "day": "February 25",
    "dayNum": 25,
    "title": "Pierre Renoir b. 1841 (painter)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 25, 1841, Impressionist painter master!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, Pierre-Auguste Renoir painted vibrantly lit portraits and outdoor scenes, including 'Bal du moulin de la Galette'!",
    "who1": "Pierre-Auguste Renoir was a leading French artist in the development of the Impressionist style.",
    "who2": "Renoir was born in Limoges, France, on February 25, 1841, studying painting at the \u00c9cole des Beaux-Arts in Paris.",
    "timeline": [
      "1841 - Born in Limoges, France on February 25",
      "1876 - Painted Impressionist masterpiece 'Bal du moulin de la Galette'",
      "1919 - Passed away in Cagnes-sur-Mer, France"
    ]
  },
  {
    "id": "feb-26-grand-canyon-park",
    "month": "February",
    "day": "February 26",
    "dayNum": 26,
    "title": "Grand Canyon National Park established 1919",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Established by President Woodrow Wilson on February 26, 1919!",
    "emoji": "\ud83c\udfde\ufe0f",
    "funFact": "According to Wikipedia, the Grand Canyon is 277 miles long, up to 18 miles wide, and over a mile deep, carved by the Colorado River!",
    "who1": "Grand Canyon National Park is a world-famous U.S. national park in Arizona preserving the massive mile-deep Grand Canyon.",
    "who2": "The park was established when President Woodrow Wilson signed the Grand Canyon National Park Act on February 26, 1919.",
    "timeline": [
      "1908 - President Theodore Roosevelt establishes Grand Canyon National Monument",
      "1919 - President Woodrow Wilson signs act granting National Park status on February 26",
      "1979 - Designated a UNESCO World Heritage Site"
    ]
  },
  {
    "id": "feb-27-longfellow",
    "month": "February",
    "day": "February 27",
    "dayNum": 27,
    "title": "Henry Wadsworth Longfellow b. 1807 (poet and writer)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 27, 1807, author of 'Paul Revere's Ride'!",
    "emoji": "\ud83d\udcdc",
    "funFact": "According to Biography.com, Longfellow wrote famous poems 'Paul Revere's Ride' and 'The Song of Hiawatha'!",
    "who1": "Henry Wadsworth Longfellow was an American poet and educator whose works include 'Paul Revere's Ride' and 'The Song of Hiawatha.'",
    "who2": "Longfellow was born in Portland, Maine, on February 27, 1807, studying at Bowdoin College and Harvard University.",
    "timeline": [
      "1807 - Born in Portland, Maine on February 27",
      "1855 - Published epic poem 'The Song of Hiawatha'",
      "1860 - Published famous poem 'Paul Revere's Ride'"
    ]
  },
  {
    "id": "feb-28-linus-pauling",
    "month": "February",
    "day": "February 28",
    "dayNum": 28,
    "title": "Linus Pauling b. 1901 (physicist and chemist)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 28, 1901, 2-time unshared Nobel Prize winner!",
    "emoji": "\ud83e\uddea",
    "funFact": "According to Biography.com, Linus Pauling is the only person to win two unshared Nobel Prizes (Chemistry 1954, Peace 1962)!",
    "who1": "Linus Carl Pauling was an American chemist, biochemist, peace activist, and author who pioneered quantum chemistry and molecular biology.",
    "who2": "Linus Pauling was born in Portland, Oregon, on February 28, 1901, earning his doctorate at Caltech.",
    "timeline": [
      "1901 - Born in Portland, Oregon on February 28",
      "1954 - Awarded Nobel Prize in Chemistry for research on chemical bonds",
      "1962 - Awarded Nobel Peace Prize for campaigning against nuclear weapons"
    ]
  },
  {
    "id": "feb-28-republican-party",
    "month": "February",
    "day": "February 28",
    "dayNum": 28,
    "title": "Republican Party founded 1854",
    "type": "Event / History (Wikipedia)",
    "connection": "Founded in Ripon, Wisconsin, in 1854!",
    "emoji": "\ud83d\udc18",
    "funFact": "According to Wikipedia, the Republican Party was founded by anti-slavery activists opposed to the Kansas-Nebraska Act!",
    "who1": "The Republican Party (GOP) is one of the two major contemporary political parties in the United States, founded in 1854.",
    "who2": "The party was established at a schoolhouse meeting in Ripon, Wisconsin, on February 28, 1854, to oppose the expansion of slavery.",
    "timeline": [
      "1854 - Anti-slavery advocates establish party in Ripon, Wisconsin",
      "1860 - Abraham Lincoln elected first Republican U.S. President"
    ]
  },
  {
    "id": "feb-29-leap-year-day",
    "month": "February",
    "day": "February 29",
    "dayNum": 29,
    "title": "Leap Year Day",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Occurs every 4 years on February 29!",
    "emoji": "\ud83d\udcc5",
    "funFact": "According to Wikipedia, a leap year has 366 days instead of 365 to keep our calendar synchronized with Earth's orbit around the Sun!",
    "who1": "Leap Year Day is an intercalary calendar date added to February every four years to align the calendar with Earth's solar orbit.",
    "who2": "Leap years were introduced by Julius Caesar in the Julian calendar in 45 BC and refined by Pope Gregory XIII in 1582.",
    "timeline": [
      "45 BC - Julius Caesar introduces leap years to the calendar",
      "1582 - Gregorian calendar reform establishes modern leap year rules"
    ]
  },
  {
    "id": "feb-29-grand-teton-park",
    "month": "February",
    "day": "February 29",
    "dayNum": 29,
    "title": "Grand Teton National Park established 1929",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Established by President Coolidge on February 26/29, 1929!",
    "emoji": "\ud83c\udfd4\ufe0f",
    "funFact": "According to Wikipedia, Grand Teton National Park protects 310,000 acres of Wyoming wilderness and the Teton mountain range!",
    "who1": "Grand Teton National Park is an American national park in northwestern Wyoming preserving mountain peaks, lakes, and wildlife.",
    "who2": "The park was established when President Calvin Coolidge signed executive legislation in February 1929.",
    "timeline": [
      "1929 - Signed into federal law establishing Grand Teton National Park",
      "1950 - Park expanded by Congress incorporating Jackson Hole National Monument"
    ]
  },
  {
    "id": "feb-29-mario-andretti",
    "month": "February",
    "day": "February 29",
    "dayNum": 29,
    "title": "Mario Andretti b. 1940 (race car driver)",
    "type": "Person (Biography.com)",
    "connection": "Born on February 28/29, 1940, racing legend!",
    "emoji": "\ud83c\udfce\ufe0f",
    "funFact": "According to Biography.com, Mario Andretti is the only driver to win the Daytona 500, Indianapolis 500, and Formula One World Championship!",
    "who1": "Mario Gabriele Andretti is an Italian-born American former racing driver who is one of the most successful drivers in motorsport history.",
    "who2": "Mario Andretti was born in Montona, Italy, on February 28, 1940, emigrating to Nazareth, Pennsylvania, at age fifteen.",
    "timeline": [
      "1940 - Born in Montona, Italy",
      "1967 - Won the Daytona 500 stock car race",
      "1969 - Won the Indianapolis 500 open-wheel race",
      "1978 - Won the Formula One World Championship"
    ]
  }
];
  const RAW_MARCH_DATA = [
  {
    "id": "mar-1-yellowstone",
    "month": "March",
    "day": "March 1",
    "dayNum": 1,
    "title": "Yellowstone National Park established 1872",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Established as world's 1st national park on March 1, 1872!",
    "emoji": "\ud83c\udf0b",
    "funFact": "According to Wikipedia, Yellowstone was signed into law by President Ulysses S. Grant as the world's very first national park!",
    "who1": "Yellowstone National Park is the world's first national park, established on March 1, 1872, to preserve geysers, hot springs, and wildlife.",
    "who2": "The park was created when President Ulysses S. Grant signed the Yellowstone National Park Protection Act after the Hayden Geological Survey.",
    "timeline": [
      "1871 - Ferdinand V. Hayden leads geological survey exploring Yellowstone",
      "1872 - President Ulysses S. Grant signs act establishing park on March 1",
      "1978 - Designated a UNESCO World Heritage Site"
    ]
  },
  {
    "id": "mar-1-peace-corps",
    "month": "March",
    "day": "March 1",
    "dayNum": 1,
    "title": "Peace Corps began in 1961",
    "type": "Event / History (Wikipedia)",
    "connection": "Established by Executive Order on March 1, 1961!",
    "emoji": "\ud83d\udd4a\ufe0f",
    "funFact": "According to Wikipedia, over 240,000 Americans have served as Peace Corps volunteers in 142 countries since 1961!",
    "who1": "The Peace Corps is an independent agency of the U.S. government established on March 1, 1961, to promote world peace and international friendship.",
    "who2": "The agency was created when President John F. Kennedy signed Executive Order 10924, appointing Sargent Shriver as its first director.",
    "timeline": [
      "1961 - Executive Order signed establishing Peace Corps on March 1",
      "1961 - First group of 51 volunteers arrives in Ghana",
      "1981 - Granted independent federal agency status by U.S. Congress"
    ]
  },
  {
    "id": "mar-2-dr-seuss",
    "month": "March",
    "day": "March 2",
    "dayNum": 2,
    "title": "Dr. Seuss b. 1904 (author & illustrator)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 2, 1904, beloved children's book author!",
    "emoji": "\ud83c\udfa9",
    "funFact": "According to Biography.com, Dr. Seuss wrote 'Green Eggs and Ham' using a 50-word vocabulary bet with his publisher!",
    "who1": "Theodor Seuss Geisel, known as Dr. Seuss, was an iconic American children's author and cartoonist who published over 60 books.",
    "who2": "Dr. Seuss was born in Springfield, Massachusetts, on March 2, 1904, studying at Dartmouth College and Oxford University.",
    "timeline": [
      "1904 - Born in Springfield, Massachusetts on March 2",
      "1937 - Published first book 'And to Think That I Saw It on Mulberry Street'",
      "1957 - Published classic 'The Cat in the Hat'",
      "1984 - Awarded Pulitzer Prize Special Citation for his lifetime contribution to children's literature"
    ]
  },
  {
    "id": "mar-2-sam-houston",
    "month": "March",
    "day": "March 2",
    "dayNum": 2,
    "title": "Sam Houston b. 1793 (Texas politician)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 2, 1793, President of Republic of Texas!",
    "emoji": "\ud83e\udd20",
    "funFact": "According to Biography.com, Sam Houston led Texian forces to victory at the Battle of San Jacinto and served as President of Texas!",
    "who1": "Samuel Houston was an American general and statesman who led Texas to independence and served as President of the Republic of Texas.",
    "who2": "Sam Houston was born in Rockbridge County, Virginia, on March 2, 1793, living among the Cherokee as a young man.",
    "timeline": [
      "1793 - Born in Rockbridge County, Virginia on March 2",
      "1836 - Commanded Texian army to victory at Battle of San Jacinto",
      "1836 - Elected 1st President of the Republic of Texas",
      "1859 - Elected Governor of Texas"
    ]
  },
  {
    "id": "mar-3-alexander-graham-bell",
    "month": "March",
    "day": "March 3",
    "dayNum": 3,
    "title": "Alexander Graham Bell b. 1847 (invented telephone)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 3, 1847, inventor of the telephone!",
    "emoji": "\ud83d\udcde",
    "funFact": "According to Biography.com, Bell's first successful telephone call on March 10, 1876, was 'Mr. Watson, come here, I want to see you!'",
    "who1": "Alexander Graham Bell was a Scottish-born inventor, scientist, and teacher of the deaf who patented the first practical telephone.",
    "who2": "Alexander Graham Bell was born in Edinburgh, Scotland, on March 3, 1847, researching acoustic speech and telegraphy.",
    "timeline": [
      "1847 - Born in Edinburgh, Scotland on March 3",
      "1876 - Granted U.S. patent for the electric telephone",
      "1877 - Founded the Bell Telephone Company",
      "1888 - Co-founded the National Geographic Society"
    ]
  },
  {
    "id": "mar-4-vermont-14th-state",
    "month": "March",
    "day": "March 4",
    "dayNum": 4,
    "title": "Vermont became the 14th state 1791",
    "type": "Event / History (Wikipedia)",
    "connection": "Admitted as 14th U.S. state on March 4, 1791!",
    "emoji": "\ud83c\udfd4\ufe0f",
    "funFact": "According to Wikipedia, Vermont was the first state admitted to the Union after the original 13 Colonies!",
    "who1": "Vermont Statehood occurred on March 4, 1791, when Vermont joined the United States as the 14th state.",
    "who2": "Before statehood, Vermont existed as an independent republic (the Vermont Republic) established by Ethan Allen and the Green Mountain Boys.",
    "timeline": [
      "1777 - Vermont Republic declares independence",
      "1791 - Admitted as 14th U.S. state on March 4",
      "1805 - Montpelier designated as state capital"
    ]
  },
  {
    "id": "mar-4-peyton-manning",
    "month": "March",
    "day": "March 4",
    "dayNum": 4,
    "title": "Peyton Manning b. 1976 (football star)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 24/March 4, 1976, 5-time NFL MVP!",
    "emoji": "\ud83c\udfc8",
    "funFact": "According to Biography.com, Peyton Manning won five NFL MVP awards and two Super Bowl championships with two different teams!",
    "who1": "Peyton Williams Manning is an American former professional football quarterback who played 18 seasons in the National Football League.",
    "who2": "Peyton Manning was born in New Orleans, Louisiana, on March 24, 1976, starring at the University of Tennessee.",
    "timeline": [
      "1976 - Born in New Orleans, Louisiana",
      "1998 - Selected #1 overall in NFL Draft by Indianapolis Colts",
      "2007 - Won Super Bowl XLI MVP with Indianapolis Colts",
      "2016 - Won Super Bowl 50 with Denver Broncos",
      "2021 - Inducted into Pro Football Hall of Fame"
    ]
  },
  {
    "id": "mar-5-boston-massacre",
    "month": "March",
    "day": "March 5",
    "dayNum": 5,
    "title": "Boston Massacre 1770",
    "type": "Event / History (Wikipedia)",
    "connection": "Occurred on King Street in Boston on March 5, 1770!",
    "emoji": "\u2694\ufe0f",
    "funFact": "According to Wikipedia, Crispus Attucks, an African-Native American sailor, was the first casualty of the Boston Massacre and Revolutionary War!",
    "who1": "The Boston Massacre was a confrontation on March 5, 1770, in which British soldiers shot and killed five people during a confrontation in Boston.",
    "who2": "The event sparked intense anti-British colonial outrage, publicized by Samuel Adams and Paul Revere.",
    "timeline": [
      "1770 - Incident occurs on King Street in Boston on March 5",
      "1770 - John Adams successfully defends British soldiers at trial",
      "1888 - Boston Massacre Monument dedicated on Boston Common"
    ]
  },
  {
    "id": "mar-5-mercator",
    "month": "March",
    "day": "March 5",
    "dayNum": 5,
    "title": "Gerhardus Mercator b. 1512 (Mercator map projection)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 5, 1512, map projection pioneer!",
    "emoji": "\ud83d\uddfa\ufe0f",
    "funFact": "According to Biography.com, Mercator created the world map projection in 1569 that allowed sailors to navigate straight sailing courses!",
    "who1": "Geert de Kremer, known as Gerardus Mercator, was a 16th-century Flemish cartographer and geographer famous for creating the Mercator map projection.",
    "who2": "Gerardus Mercator was born in Rupelmonde, Flanders, on March 5, 1512, studying mathematics and philosophy at the University of Leuven.",
    "timeline": [
      "1512 - Born in Rupelmonde, Flanders on March 5",
      "1569 - Published revolutionary world map using the Mercator projection",
      "1595 - Posthumously published first collection of maps under the name 'Atlas'"
    ]
  },
  {
    "id": "mar-6-michelangelo",
    "month": "March",
    "day": "March 6",
    "dayNum": 6,
    "title": "Michelangelo b. 1475 (artist)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 6, 1475, Renaissance master!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, Michelangelo sculpted 'David' at age 26 and painted the Sistine Chapel ceiling in Rome!",
    "who1": "Michelangelo di Lodovico Buonarroti Simoni was an Italian sculptor, painter, architect, and poet of the High Renaissance.",
    "who2": "Michelangelo was born in Caprese near Arezzo, Tuscany, on March 6, 1475, apprenticing under Domenico Ghirlandaio in Florence.",
    "timeline": [
      "1475 - Born in Caprese, Italy on March 6",
      "1504 - Unveiled marble masterpiece statue 'David' in Florence",
      "1512 - Completed painting the Sistine Chapel ceiling in the Vatican",
      "1564 - Passed away in Rome leaving an unparalleled artistic heritage"
    ]
  },
  {
    "id": "mar-6-dred-scott",
    "month": "March",
    "day": "March 6",
    "dayNum": 6,
    "title": "Dred Scott Supreme Court Decision 1857",
    "type": "Event / History (Wikipedia)",
    "connection": "Decided by U.S. Supreme Court on March 6, 1857!",
    "emoji": "\u2696\ufe0f",
    "funFact": "According to Wikipedia, the Dred Scott ruling was overturned by the 13th and 14th Constitutional Amendments following the Civil War!",
    "who1": "The Dred Scott Decision was a landmark U.S. Supreme Court ruling on March 6, 1857, stating that enslaved African Americans were not U.S. citizens.",
    "who2": "Dred Scott, an enslaved man who had lived in free territories, sued for his freedom alongside abolitionist lawyers.",
    "timeline": [
      "1846 - Dred Scott files freedom suit in St. Louis court",
      "1857 - Supreme Court issues decision under Chief Justice Roger Taney on March 6",
      "1868 - 14th Amendment formally overturns Dred Scott ruling granting citizenship"
    ]
  },
  {
    "id": "mar-7-antarctica-ice-shelf",
    "month": "March",
    "day": "March 7",
    "dayNum": 7,
    "title": "Antarctica Ice Shelf collapses 2002",
    "type": "Event / Science (Wikipedia)",
    "connection": "Larsen B ice shelf collapse recorded in March 2002!",
    "emoji": "\ud83e\uddca",
    "funFact": "According to Wikipedia, 1,250 square miles of the Larsen B ice shelf disintegrated in Antarctica in just 35 days!",
    "who1": "The Larsen B Ice Shelf Collapse was a major Antarctic environmental event in March 2002 when 3,250 square kilometers of ice disintegrated.",
    "who2": "Satellite imagery captured by NASA's MODIS satellite documented the collapse of the 220-meter-thick ice shelf.",
    "timeline": [
      "2002 - Disintegration begins in January and accelerates through March 7",
      "2002 - Over 3,250 sq km of ice shelf collapses into the Weddell Sea",
      "2020 - Scientists continue monitoring Antarctic ice sheet stability"
    ]
  },
  {
    "id": "mar-8-oliver-wendell-holmes",
    "month": "March",
    "day": "March 8",
    "dayNum": 8,
    "title": "Oliver Wendell Holmes, Jr. b. 1841 (Supreme Court Justice)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 8, 1841, 'The Great Dissenter'!",
    "emoji": "\u2696\ufe0f",
    "funFact": "According to Biography.com, Justice Holmes served 30 years on the U.S. Supreme Court and articulated the 'clear and present danger' doctrine!",
    "who1": "Oliver Wendell Holmes Jr. was an American jurist who served as an Associate Justice of the Supreme Court of the United States from 1902 to 1932.",
    "who2": "Oliver Wendell Holmes Jr. was born in Boston, Massachusetts, on March 8, 1841, serving as a Union officer in the Civil War.",
    "timeline": [
      "1841 - Born in Boston, Massachusetts on March 8",
      "1881 - Published legal classic 'The Common Law'",
      "1902-1932 - Served as Associate Justice of the U.S. Supreme Court",
      "1935 - Passed away in Washington, D.C. as a titan of American law"
    ]
  },
  {
    "id": "mar-9-amerigo-vespucci",
    "month": "March",
    "day": "March 9",
    "dayNum": 9,
    "title": "Amerigo Vespucci b. 1454 (Italian explorer)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 9, 1454, explorer namesake of America!",
    "emoji": "\ud83e\udded",
    "funFact": "According to Biography.com, German cartographer Martin Waldseem\u00fcller named the new continents 'America' in honor of Amerigo Vespucci in 1507!",
    "who1": "Amerigo Vespucci was an Italian merchant, explorer, and navigator who demonstrated that the New World was a separate continent.",
    "who2": "Amerigo Vespucci was born in Florence, Italy, on March 9, 1454, studying astronomy and geography.",
    "timeline": [
      "1454 - Born in Florence, Italy on March 9",
      "1499-1502 - Conducted voyages charting the eastern coast of South America",
      "1507 - Mapmaker Martin Waldseem\u00fcller names the continent 'America' in his honor"
    ]
  },
  {
    "id": "mar-9-bobby-fischer",
    "month": "March",
    "day": "March 9",
    "dayNum": 9,
    "title": "Bobby Fischer b. 1943 (world chess champion)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 9, 1943, World Chess Champion!",
    "emoji": "\u265f\ufe0f",
    "funFact": "According to Biography.com, Bobby Fischer won the U.S. Chess Championship at age 14 and defeated Boris Spassky for World Champion in 1972!",
    "who1": "Robert James Fischer was an American chess grandmaster and the 11th World Chess Champion.",
    "who2": "Bobby Fischer was born in Chicago, Illinois, on March 9, 1943, growing up in Brooklyn, New York, where he learned chess at age six.",
    "timeline": [
      "1943 - Born in Chicago, Illinois on March 9",
      "1958 - Became youngest grandmaster in chess history at age fifteen",
      "1972 - Defeated Boris Spassky in Reykjavik, Iceland, to win World Chess Championship"
    ]
  },
  {
    "id": "mar-10-harriet-tubman",
    "month": "March",
    "day": "March 10",
    "dayNum": 10,
    "title": "Harriet Tubman d. 1913 (conductor of Underground Railroad)",
    "type": "Person (Biography.com)",
    "connection": "Passed away on March 10, 1913, Underground Railroad icon!",
    "emoji": "\ud83d\ude82",
    "funFact": "According to Biography.com, Harriet Tubman made 13 missions rescuing approximately 70 enslaved people without losing a single passenger!",
    "who1": "Harriet Tubman was an American abolitionist, political activist, and Underground Railroad conductor who led dozens to freedom.",
    "who2": "Harriet Tubman was born Araminta Ross in Dorchester County, Maryland, around 1822, escaping enslavement in 1849.",
    "timeline": [
      "c. 1822 - Born in Dorchester County, Maryland",
      "1849 - Escaped enslavement arriving in Philadelphia",
      "1850-1860 - Conducted 13 rescue missions on the Underground Railroad",
      "1863 - Led the Combahee River Raid liberating over 700 enslaved people",
      "1913 - Passed away in Auburn, New York on March 10"
    ]
  },
  {
    "id": "mar-11-johnny-appleseed",
    "month": "March",
    "day": "March 11",
    "dayNum": 11,
    "title": "Johnny Appleseed d. 1845 (American pioneer)",
    "type": "Person (Biography.com)",
    "connection": "Passed away on March 11, 1845, American pioneer!",
    "emoji": "\ud83c\udf4e",
    "funFact": "According to Biography.com, John Chapman introduced apple trees to large parts of Pennsylvania, Ohio, Indiana, and Illinois!",
    "who1": "John Chapman, known as Johnny Appleseed, was an American pioneer nurseryman who introduced apple trees to the American Midwest.",
    "who2": "John Chapman was born in Leominster, Massachusetts, on September 26, 1774, wandering across Ohio and Indiana planting apple orchards.",
    "timeline": [
      "1774 - Born in Leominster, Massachusetts",
      "1801 - Established first apple tree nursery in Licking County, Ohio",
      "1845 - Passed away near Fort Wayne, Indiana on March 11"
    ]
  },
  {
    "id": "mar-11-robert-treat-paine",
    "month": "March",
    "day": "March 11",
    "dayNum": 11,
    "title": "Robert Paine b. 1731 (signed Declaration of Independence)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 11, 1731, Signer of Declaration!",
    "emoji": "\ud83d\udcdc",
    "funFact": "According to Biography.com, Robert Treat Paine signed the Declaration of Independence and served as Massachusetts' first Attorney General!",
    "who1": "Robert Treat Paine was an American lawyer, politician, and Founding Father who signed the Declaration of Independence.",
    "who2": "Robert Treat Paine was born in Boston, Massachusetts, on March 11, 1731, graduating from Harvard College.",
    "timeline": [
      "1731 - Born in Boston, Massachusetts on March 11",
      "1776 - Signed the United States Declaration of Independence",
      "1777-1790 - Served as first Attorney General of Massachusetts"
    ]
  },
  {
    "id": "mar-12-james-taylor",
    "month": "March",
    "day": "March 12",
    "dayNum": 12,
    "title": "James Taylor b. 1948 (singer/songwriter)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 12, 1948, 6-time Grammy-winning singer!",
    "emoji": "\ud83c\udfb8",
    "funFact": "According to Biography.com, James Taylor was inducted into both the Rock and Roll Hall of Fame and Songwriters Hall of Fame!",
    "who1": "James Vernon Taylor is an American singer-songwriter and guitarist who achieved breakthrough success with classic hits like 'Fire and Rain.'",
    "who2": "James Taylor was born in Boston, Massachusetts, on March 12, 1948, growing up in Chapel Hill, North Carolina.",
    "timeline": [
      "1948 - Born in Boston, Massachusetts on March 12",
      "1970 - Released breakthrough hit album 'Sweet Baby James'",
      "2000 - Inducted into the Rock and Roll Hall of Fame",
      "2015 - Awarded Presidential Medal of Freedom by President Barack Obama"
    ]
  },
  {
    "id": "mar-13-uranus-discovered",
    "month": "March",
    "day": "March 13",
    "dayNum": 13,
    "title": "Planet Uranus discovered 1781",
    "type": "Event / Science (Wikipedia)",
    "connection": "Discovered by William Herschel on March 13, 1781!",
    "emoji": "\ud83e\ude90",
    "funFact": "According to Wikipedia, Uranus was the first planet discovered using a telescope, expanding known solar system boundaries!",
    "who1": "The Planet Uranus Discovery occurred on March 13, 1781, when British astronomer William Herschel discovered the seventh planet from the Sun.",
    "who2": "Herschel observed Uranus from his garden observatory in Bath, England, using a 7-foot reflector telescope he constructed himself.",
    "timeline": [
      "1781 - Discovered by William Herschel on March 13",
      "1986 - NASA's Voyager 2 spacecraft completes historic flyby of Uranus"
    ]
  },
  {
    "id": "mar-14-albert-einstein",
    "month": "March",
    "day": "March 14",
    "dayNum": 14,
    "title": "Albert Einstein b. 1879 (scientist)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 14, 1879, theoretical physics genius!",
    "emoji": "\ud83e\uddea",
    "funFact": "According to Biography.com, Albert Einstein formulated E=mc\u00b2 and won the 1921 Nobel Prize in Physics for explaining the photoelectric effect!",
    "who1": "Albert Einstein was a German-born theoretical physicist widely acknowledged as one of the greatest scientists of all time.",
    "who2": "Albert Einstein was born in Ulm, Germany, on March 14, 1879, studying at the Federal Polytechnic School in Zurich, Switzerland.",
    "timeline": [
      "1879 - Born in Ulm, Germany on March 14",
      "1905 - Published special relativity theory and E=mc\u00b2 formula",
      "1915 - Published general relativity theory",
      "1921 - Awarded Nobel Prize in Physics"
    ]
  },
  {
    "id": "mar-15-andrew-jackson",
    "month": "March",
    "day": "March 15",
    "dayNum": 15,
    "title": "Andrew Jackson b. 1767 (7th U.S. President)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 15, 1767, 7th U.S. President!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, Andrew Jackson was known as 'Old Hickory' and served two terms as 7th U.S. President!",
    "who1": "Andrew Jackson was an American lawyer, general, and statesman who served as the 7th President of the United States from 1829 to 1837.",
    "who2": "Andrew Jackson was born in the Waxhaws region between North and South Carolina on March 15, 1767.",
    "timeline": [
      "1767 - Born in Waxhaws region on March 15",
      "1815 - Commanded American victory at the Battle of New Orleans",
      "1829-1837 - Served as 7th President of the United States"
    ]
  },
  {
    "id": "mar-15-ruth-bader-ginsburg",
    "month": "March",
    "day": "March 15",
    "dayNum": 15,
    "title": "Ruth Bader Ginsburg b. 1933 (Supreme Court Justice)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 15, 1933, 'Notorious RBG'!",
    "emoji": "\u2696\ufe0f",
    "funFact": "According to Biography.com, Ruth Bader Ginsburg co-founded the ACLU Women's Rights Project and served 27 years on the Supreme Court!",
    "who1": "Ruth Bader Ginsburg was an American lawyer and jurist who served as an Associate Justice of the Supreme Court of the United States from 1993 until 2020.",
    "who2": "Ruth Bader Ginsburg was born in Brooklyn, New York, on March 15, 1933, graduating top of her class at Columbia Law School.",
    "timeline": [
      "1933 - Born in Brooklyn, New York on March 15",
      "1972 - Co-founded the ACLU Women's Rights Project",
      "1993 - Appointed 2nd female Associate Justice of U.S. Supreme Court",
      "2020 - Passed away in Washington, D.C. as a cultural icon"
    ]
  },
  {
    "id": "mar-16-james-madison",
    "month": "March",
    "day": "March 16",
    "dayNum": 16,
    "title": "James Madison b. 1751 (4th U.S. President)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 16, 1751, Father of the Constitution!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, James Madison is remembered as the 'Father of the Constitution' and author of the Bill of Rights!",
    "who1": "James Madison Jr. was an American statesman, diplomat, and Founding Father who served as the 4th President of the United States from 1809 to 1817.",
    "who2": "James Madison was born in Port Conway, Virginia, on March 16, 1751, graduating from the College of New Jersey (Princeton).",
    "timeline": [
      "1751 - Born in Port Conway, Virginia on March 16",
      "1787 - Drafted Virginia Plan and co-authored Federalist Papers",
      "1789 - Authored United States Bill of Rights",
      "1809-1817 - Served as 4th President of the United States"
    ]
  },
  {
    "id": "mar-17-st-patricks-day",
    "month": "March",
    "day": "March 17",
    "dayNum": 17,
    "title": "Saint Patrick's Day",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Celebrated globally on March 17!",
    "emoji": "\u2618\ufe0f",
    "funFact": "According to Wikipedia, Saint Patrick's Day parades began in America in 1737, and Chicago dyes its river green every year!",
    "who1": "Saint Patrick's Day is a cultural and religious celebration held on March 17, the traditional death date of Saint Patrick, the patron saint of Ireland.",
    "who2": "The day commemorates Saint Patrick's 5th-century Christian ministry in Ireland before evolving into a worldwide celebration of Irish heritage.",
    "timeline": [
      "c. 461 AD - Traditional feast day established in Ireland on March 17",
      "1737 - First American Saint Patrick's Day parade held in Boston",
      "1962 - Chicago River first dyed green for Saint Patrick's Day"
    ]
  },
  {
    "id": "mar-17-nat-king-cole",
    "month": "March",
    "day": "March 17",
    "dayNum": 17,
    "title": "Nat 'King' Cole b. 1919 (singer)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 17, 1919, jazz vocal legend!",
    "emoji": "\ud83c\udfa4",
    "funFact": "According to Biography.com, Nat King Cole was a virtuoso jazz pianist who hosted the 1st nationally televised show by an African American!",
    "who1": "Nathaniel Adams Coles, known as Nat King Cole, was an iconic American singer, jazz pianist, and television host.",
    "who2": "Nat King Cole was born in Montgomery, Alabama, on March 17, 1919, growing up in Chicago playing church organ.",
    "timeline": [
      "1919 - Born in Montgomery, Alabama on March 17",
      "1950 - Released legendary hit single 'Mona Lisa'",
      "1956 - Hosted 'The Nat King Cole Show' on NBC TV",
      "2000 - Inducted into Rock and Roll Hall of Fame as an early influence"
    ]
  },
  {
    "id": "mar-18-grover-cleveland",
    "month": "March",
    "day": "March 18",
    "dayNum": 18,
    "title": "Grover Cleveland b. 1837 (22nd & 24th U.S. President)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 18, 1837, 22nd & 24th President!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, Grover Cleveland is the only U.S. President to serve two non-consecutive terms in American history!",
    "who1": "Stephen Grover Cleveland was an American lawyer and politician who served as the 22nd and 24th President of the United States.",
    "who2": "Grover Cleveland was born in Caldwell, New Jersey, on March 18, 1837, serving as Mayor of Buffalo and Governor of New York.",
    "timeline": [
      "1837 - Born in Caldwell, New Jersey on March 18",
      "1885-1889 - Served as 22nd President of the United States",
      "1893-1897 - Served as 24th President of the United States"
    ]
  },
  {
    "id": "mar-18-bonnie-blair",
    "month": "March",
    "day": "March 18",
    "dayNum": 18,
    "title": "Bonnie Blair b. 1964 (speed skater)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 18, 1964, 5-time Olympic gold skater!",
    "emoji": "\u26f8\ufe0f",
    "funFact": "According to Biography.com, Bonnie Blair won five Olympic gold medals across three Winter Olympics (1988, 1992, 1994)!",
    "who1": "Bonnie Kathleen Blair is an American retired speed skater who is one of the most decorated athletes in Winter Olympic history.",
    "who2": "Bonnie Blair was born in Cornwall, New York, on March 18, 1964, starting speed skating at age two in Champaign, Illinois.",
    "timeline": [
      "1964 - Born in Cornwall, New York on March 18",
      "1988 - Won gold medal in 500m speed skating at Calgary Olympics",
      "1992, 1994 - Won four additional Olympic gold medals in Albertville and Lillehammer",
      "2004 - Inducted into United States Olympic Hall of Fame"
    ]
  },
  {
    "id": "mar-19-wyatt-earp",
    "month": "March",
    "day": "March 19",
    "dayNum": 19,
    "title": "Wyatt Earp b. 1848 (frontiersman)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 19, 1848, O.K. Corral lawman legend!",
    "emoji": "\ud83e\udd20",
    "funFact": "According to Biography.com, Wyatt Earp took part in the famous 30-second Gunfight at the O.K. Corral in Tombstone, Arizona, in 1881!",
    "who1": "Wyatt Berry Stapp Earp was an American Old West lawman, gambler, and deputy U.S. marshal in Tombstone, Arizona.",
    "who2": "Wyatt Earp was born in Monmouth, Illinois, on March 19, 1848, working as a stagecoach driver and buffalo hunter.",
    "timeline": [
      "1848 - Born in Monmouth, Illinois on March 19",
      "1881 - Participated in Gunfight at the O.K. Corral in Tombstone on October 26",
      "1929 - Passed away in Los Angeles, California"
    ]
  },
  {
    "id": "mar-19-william-bradford",
    "month": "March",
    "day": "March 19",
    "dayNum": 19,
    "title": "William Bradford b. 1589 (2nd governor of Plymouth)",
    "type": "Person (Biography.com)",
    "connection": "Born in March 1589, Plymouth Colony Governor!",
    "emoji": "\ud83d\udea2",
    "funFact": "According to Biography.com, William Bradford sailed on the Mayflower in 1620 and served as Governor of Plymouth Colony for 30 years!",
    "who1": "William Bradford was an English Puritan Separatist leader who sailed on the Mayflower and served as Governor of Plymouth Colony.",
    "who2": "William Bradford was born in Austerfield, Yorkshire, England, in March 1589, joining Separatist religious meetings.",
    "timeline": [
      "1589 - Born in Austerfield, England in March",
      "1620 - Sailed to New England aboard the Mayflower and signed Mayflower Compact",
      "1621 - Elected Governor of Plymouth Colony, serving 30 terms until 1657"
    ]
  },
  {
    "id": "mar-20-bobby-orr",
    "month": "March",
    "day": "March 20",
    "dayNum": 20,
    "title": "Bobby Orr b. 1948 (Hall of Fame hockey player)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 20, 1948, hockey defenseman legend!",
    "emoji": "\ud83c\udfd2",
    "funFact": "According to Biography.com, Bobby Orr is the only defenseman in NHL history to win two league scoring titles!",
    "who1": "Robert Gordon Orr is a Canadian former professional ice hockey defenseman widely regarded as one of the greatest hockey players of all time.",
    "who2": "Bobby Orr was born in Parry Sound, Ontario, Canada, on March 20, 1948, signing with the Boston Bruins at age fourteen.",
    "timeline": [
      "1948 - Born in Parry Sound, Ontario on March 20",
      "1970 - Scored famous overtime goal winning Boston Bruins the Stanley Cup",
      "1970, 1975 - Won Art Ross Trophy as NHL top scorer",
      "1979 - Inducted into Hockey Hall of Fame as youngest inductee in history"
    ]
  },
  {
    "id": "mar-21-js-bach",
    "month": "March",
    "day": "March 21",
    "dayNum": 21,
    "title": "J.S. Bach b. 1685 (composer)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 21, 1685, master Baroque composer!",
    "emoji": "\ud83c\udfbc",
    "funFact": "According to Biography.com, Johann Sebastian Bach composed over 1,000 works, including the Brandenburg Concertos and Well-Tempered Clavier!",
    "who1": "Johann Sebastian Bach was a German composer and musician of the late Baroque period known for counterpoint, fugue, and organ mastery.",
    "who2": "J.S. Bach was born in Eisenach, Germany, on March 21, 1685, coming from a distinguished musical family.",
    "timeline": [
      "1685 - Born in Eisenach, Germany on March 21",
      "1721 - Completed the Brandenburg Concertos",
      "1723 - Appointed Thomaskantor in Leipzig",
      "1750 - Passed away in Leipzig leaving a monumental legacy in music"
    ]
  },
  {
    "id": "mar-21-pocahontas",
    "month": "March",
    "day": "March 21",
    "dayNum": 21,
    "title": "Pocahontas d. 1617 (Powhatan ambassador)",
    "type": "Person (Biography.com)",
    "connection": "Passed away in March 1617, Powhatan ambassador!",
    "emoji": "\ud83c\udf3f",
    "funFact": "According to Biography.com, Pocahontas fostered peace between the Powhatan Paramount Chiefdom and English colonists at Jamestown!",
    "who1": "Pocahontas was a Native American woman of the Powhatan Paramount Chiefdom who promoted peace between Indigenous peoples and English settlers.",
    "who2": "Pocahontas was born Matoaka around 1596 in coastal Virginia, daughter of Powhatan Paramount Chief Wahunsenacawh.",
    "timeline": [
      "c. 1596 - Born in coastal Virginia",
      "1607 - Met Captain John Smith promoting peace with colonists",
      "1614 - Married John Rolfe creating peace period 'Peace of Pocahontas'",
      "1617 - Passed away in Gravesend, England in March"
    ]
  },
  {
    "id": "mar-21-selma-march-court-order",
    "month": "March",
    "day": "March 21",
    "dayNum": 21,
    "title": "The Selma Montgomery march permitted 1965",
    "type": "Event / History (Wikipedia)",
    "connection": "Selma march authorized by federal court on March 21, 1965!",
    "emoji": "\u270a",
    "funFact": "According to Wikipedia, over 25,000 marchers led by Dr. Martin Luther King Jr. walked 54 miles from Selma to Montgomery for voting rights!",
    "who1": "The Selma to Montgomery March commenced on March 21, 1965, after U.S. District Judge Frank Johnson ruled marchers had a constitutional right to demonstrate.",
    "who2": "Dr. Martin Luther King Jr. led thousands of voting rights activists along Highway 80 to the Alabama State Capitol.",
    "timeline": [
      "1965 - Federal court authorizes march on March 17",
      "1965 - 3,200 marchers depart Selma on March 21",
      "1965 - 25,000 marchers arrive at Montgomery Capitol on March 25",
      "1965 - President Johnson signs Voting Rights Act of 1965 in August"
    ]
  },
  {
    "id": "mar-22-randolph-caldecott",
    "month": "March",
    "day": "March 22",
    "dayNum": 22,
    "title": "Randolph Caldecott b. 1846 (children's illustrator)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 22, 1846, namesake of Caldecott Medal!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, the annual Randolph Caldecott Medal was named in his honor in 1937 for most distinguished American picture book!",
    "who1": "Randolph Caldecott was a British artist and illustrator whose lively picture book illustrations revolutionized children's book design.",
    "who2": "Randolph Caldecott was born in Chester, England, on March 22, 1846, working as a bank clerk before illustrating books.",
    "timeline": [
      "1846 - Born in Chester, England on March 22",
      "1878 - Published famous picture books 'The House that Jack Built' and 'John Gilpin'",
      "1937 - American Library Association establishes Randolph Caldecott Medal"
    ]
  },
  {
    "id": "mar-23-lewis-clark-pacific",
    "month": "March",
    "day": "March 23",
    "dayNum": 23,
    "title": "Lewis and Clark reached the Pacific 1806",
    "type": "Event / History (Wikipedia)",
    "connection": "Departed Fort Clatsop on return journey March 23, 1806!",
    "emoji": "\ud83e\udded",
    "funFact": "According to Wikipedia, the Corps of Discovery spent winter at Fort Clatsop near Oregon's coast before starting home on March 23, 1806!",
    "who1": "The Lewis and Clark Pacific Expedition completed its winter stay at Fort Clatsop near the Pacific Ocean and began its return journey on March 23, 1806.",
    "who2": "Meriwether Lewis and William Clark led the 33-person Corps of Discovery mapping 8,000 miles across the American West.",
    "timeline": [
      "1805 - Reached Pacific Ocean in November",
      "1805-1806 - Built Fort Clatsop near present-day Astoria, Oregon",
      "1806 - Departed Fort Clatsop on return journey eastward on March 23",
      "1806 - Arrived back safely in St. Louis in September"
    ]
  },
  {
    "id": "mar-24-exxon-valdez",
    "month": "March",
    "day": "March 24",
    "dayNum": 24,
    "title": "Exxon Valdez Oil Spill 1989",
    "type": "Event / History (Wikipedia)",
    "connection": "Oil tanker ran aground on March 24, 1989!",
    "emoji": "\ud83d\udee2\ufe0f",
    "funFact": "According to Wikipedia, the Exxon Valdez spilled 11 million gallons of crude oil into Alaska's Prince William Sound, reforming environmental laws!",
    "who1": "The Exxon Valdez Oil Spill occurred on March 24, 1989, when the oil tanker Exxon Valdez struck Bligh Reef in Prince William Sound, Alaska.",
    "who2": "The disaster spilled 11 million gallons of crude oil across 1,300 miles of coastline, prompting passage of the Oil Pollution Act of 1990.",
    "timeline": [
      "1989 - Tanker strikes Bligh Reef spilling crude oil on March 24",
      "1990 - U.S. Congress passes landmark Oil Pollution Act requiring double-hull tankers"
    ]
  },
  {
    "id": "mar-24-john-wesley-powell",
    "month": "March",
    "day": "March 24",
    "dayNum": 24,
    "title": "John Wesley Powell b. 1834 (explored Colorado River)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 24, 1834, Grand Canyon explorer!",
    "emoji": "\ud83c\udfde\ufe0f",
    "funFact": "According to Biography.com, Powell led the 1st official 1,000-mile river boat expedition through the Grand Canyon in 1869!",
    "who1": "John Wesley Powell was an American geologist, Civil War officer, and explorer who led the 1869 Powell Geographic Expedition through the Grand Canyon.",
    "who2": "John Wesley Powell was born in Mount Morris, New York, on March 24, 1834, serving as director of the U.S. Geological Survey.",
    "timeline": [
      "1834 - Born in Mount Morris, New York on March 24",
      "1869 - Led 1,000-mile wooden boat expedition down Green and Colorado Rivers through Grand Canyon",
      "1881-1894 - Served as Director of the United States Geological Survey"
    ]
  },
  {
    "id": "mar-25-league-of-nations",
    "month": "March",
    "day": "March 25",
    "dayNum": 25,
    "title": "League of Nations is established in 1919",
    "type": "Event / History (Wikipedia)",
    "connection": "Drafted at Paris Peace Conference 1919!",
    "emoji": "\ud83c\uddfa\ud83c\uddf3",
    "funFact": "According to Wikipedia, President Woodrow Wilson won the 1919 Nobel Peace Prize for sponsoring the League of Nations Covenant!",
    "who1": "The League of Nations was an international diplomatic organization founded after World War I to maintain world peace and prevent conflicts.",
    "who2": "The Covenant of the League of Nations was drafted during the Paris Peace Conference in early 1919 under President Woodrow Wilson.",
    "timeline": [
      "1919 - Paris Peace Conference approves Covenant",
      "1920 - Officially inaugurated in Geneva, Switzerland",
      "1946 - Dissolved and succeeded by the United Nations"
    ]
  },
  {
    "id": "mar-26-robert-frost",
    "month": "March",
    "day": "March 26",
    "dayNum": 26,
    "title": "Robert Frost b. 1874 (poet)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 26, 1874, 4-time Pulitzer-winning poet!",
    "emoji": "\ud83d\udcdc",
    "funFact": "According to Biography.com, Robert Frost won four Pulitzer Prizes for Poetry and recited 'The Gift Outright' at JFK's 1961 inauguration!",
    "who1": "Robert Lee Frost was an iconic American poet celebrated for realistic depictions of rural New England life and philosophical verse.",
    "who2": "Robert Frost was born in San Francisco, California, on March 26, 1874, attending Dartmouth College and Harvard University.",
    "timeline": [
      "1874 - Born in San Francisco, California on March 26",
      "1916 - Published famous poem 'The Road Not Taken'",
      "1924, 1931, 1937, 1943 - Won four Pulitzer Prizes for Poetry",
      "1961 - Recited poem at inauguration of President John F. Kennedy"
    ]
  },
  {
    "id": "mar-26-sandra-day-oconnor",
    "month": "March",
    "day": "March 26",
    "dayNum": 26,
    "title": "Sandra Day O'Connor b. 1930 (1st woman on Supreme Court)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 26, 1930, 1st female Supreme Court Justice!",
    "emoji": "\u2696\ufe0f",
    "funFact": "According to Biography.com, Sandra Day O'Connor was confirmed 99-0 by the Senate in 1981, serving 24 years as first woman on the High Court!",
    "who1": "Sandra Day O'Connor was an American attorney and jurist who served as the first female Associate Justice of the Supreme Court of the United States from 1981 to 2006.",
    "who2": "Sandra Day O'Connor was born in El Paso, Texas, on March 26, 1930, growing up on the Lazy B cattle ranch in Arizona.",
    "timeline": [
      "1930 - Born in El Paso, Texas on March 26",
      "1952 - Graduated third in her class from Stanford Law School",
      "1981 - Sworn in as 1st woman on U.S. Supreme Court",
      "2009 - Awarded Presidential Medal of Freedom by President Barack Obama"
    ]
  },
  {
    "id": "mar-27-cherry-blossoms",
    "month": "March",
    "day": "March 27",
    "dayNum": 27,
    "title": "First Japanese cherry trees planted in D.C. 1912",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Planted along Tidal Basin on March 27, 1912!",
    "emoji": "\ud83c\udf38",
    "funFact": "According to Wikipedia, Tokyo Mayor Yukio Ozaki gifted 3,000 cherry trees to Washington, D.C. as a symbol of Japanese-American friendship!",
    "who1": "The Planting of the Japanese Cherry Trees occurred on March 27, 1912, when First Lady Helen Taft and Viscountess Chinda planted the first two trees at the Tidal Basin.",
    "who2": "The gift of 3,020 cherry trees from Tokyo Mayor Yukio Ozaki initiated Washington, D.C.'s annual National Cherry Blossom Festival.",
    "timeline": [
      "1912 - First Lady Helen Taft plants first cherry tree at Tidal Basin on March 27",
      "1935 - First annual National Cherry Blossom Festival celebrated",
      "2020 - Over 1.5 million visitors attend cherry blossom festivities annually"
    ]
  },
  {
    "id": "mar-28-raphael",
    "month": "March",
    "day": "March 28",
    "dayNum": 28,
    "title": "Raphael b. 1483 (Renaissance painter)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 28, 1483, High Renaissance painter!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, Raphael painted 'The School of Athens' in the Vatican palace alongside Da Vinci and Michelangelo!",
    "who1": "Raffaello Sanzio da Urbino, known as Raphael, was an Italian painter and architect of the High Renaissance famous for clarity and composition.",
    "who2": "Raphael was born in Urbino, Italy, on March 28, 1483, studying under Pietro Perugino before moving to Florence and Rome.",
    "timeline": [
      "1483 - Born in Urbino, Italy on March 28",
      "1511 - Completed famous fresco 'The School of Athens' in the Vatican",
      "1520 - Passed away in Rome leaving a towering artistic legacy"
    ]
  },
  {
    "id": "mar-29-coca-cola-on-sale",
    "month": "March",
    "day": "March 29",
    "dayNum": 29,
    "title": "Coca-Cola went on sale in the U.S. 1886",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Formulated by Dr. John Pemberton in March 1886!",
    "emoji": "\ud83e\udd64",
    "funFact": "According to Wikipedia, Coca-Cola was invented by pharmacist Dr. John Pemberton at Jacobs' Pharmacy in Atlanta, Georgia!",
    "who1": "The Introduction of Coca-Cola occurred in late March 1886 when Atlanta pharmacist Dr. John Stith Pemberton formulated the popular soft drink syrup.",
    "who2": "Pemberton sold the syrup for 5 cents a glass at Jacobs' Pharmacy, where it was mixed with carbonated water.",
    "timeline": [
      "1886 - Formulated by Dr. John Pemberton in Atlanta in March",
      "1892 - Asa Candler incorporates The Coca-Cola Company",
      "1916 - Famous contour glass bottle design patented"
    ]
  },
  {
    "id": "mar-29-cy-young",
    "month": "March",
    "day": "March 29",
    "dayNum": 29,
    "title": "Cy Young b. 1867 (pitcher)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 29, 1867, MLB wins leader (511 wins)!",
    "emoji": "\u26be",
    "funFact": "According to Biography.com, Cy Young won 511 games, pitched a perfect game in 1904, and has MLB's top pitching award named in his honor!",
    "who1": "Denton True 'Cy' Young was an American professional baseball pitcher who established all-time MLB records with 511 wins.",
    "who2": "Cy Young was born in Gilmore, Ohio, on March 29, 1867, playing 22 seasons for Cleveland, Boston, and St. Louis.",
    "timeline": [
      "1867 - Born in Gilmore, Ohio on March 29",
      "1904 - Pitched 1st perfect game in American League history",
      "1911 - Retired with 511 career pitching victories",
      "1956 - MLB establishes annual Cy Young Award honoring top pitchers"
    ]
  },
  {
    "id": "mar-30-van-gogh",
    "month": "March",
    "day": "March 30",
    "dayNum": 30,
    "title": "Vincent van Gogh b. 1853 (artist)",
    "type": "Person (Biography.com)",
    "connection": "Born on March 30, 1853, painter of 'The Starry Night'!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, Vincent van Gogh created over 2,100 artworks in a decade, including 'The Starry Night' and 'Sunflowers'!",
    "who1": "Vincent Willem van Gogh was a Dutch Post-Impressionist painter who became one of the most famous figures in Western art history.",
    "who2": "Vincent van Gogh was born in Zundert, Netherlands, on March 30, 1853, studying art in Antwerp and Paris.",
    "timeline": [
      "1853 - Born in Zundert, Netherlands on March 30",
      "1888 - Painted famous 'Sunflowers' series in Arles, France",
      "1889 - Painted masterpiece 'The Starry Night' while at Saint-R\u00e9my asylum",
      "1890 - Passed away in Auvers-sur-Oise, France"
    ]
  },
  {
    "id": "mar-31-eiffel-tower-opening",
    "month": "March",
    "day": "March 31",
    "dayNum": 31,
    "title": "Opening of the Eiffel Tower in Paris 1889",
    "type": "Event / Landmark (Wikipedia)",
    "connection": "Inaugurated in Paris on March 31, 1889!",
    "emoji": "\ud83d\uddfc",
    "funFact": "According to Wikipedia, Gustave Eiffel climbed 1,710 steps to unfurl the French tricolor flag at the top of the Eiffel Tower on March 31, 1889!",
    "who1": "The Eiffel Tower Opening occurred on March 31, 1889, when civil engineer Gustave Eiffel dedicated the 300-meter iron lattice tower for the 1889 World's Fair.",
    "who2": "Constructed in 2 years, 2 months, and 5 days, the tower stood as the world's tallest man-made structure until 1930.",
    "timeline": [
      "1887 - Construction begins on Champ de Mars in Paris",
      "1889 - Official inauguration and flag ceremony held on March 31",
      "1889 - Opened to public visitors during Exposition Universelle"
    ]
  }
];
  const RAW_APRIL_DATA = [
  {
    "id": "apr-1-save-the-rhino",
    "month": "April",
    "day": "April 1",
    "dayNum": 1,
    "title": "Save the Rhino Day",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Celebrated annually on April 1!",
    "emoji": "\ud83e\udd8f",
    "funFact": "According to Wikipedia, Save the Rhino Day raises global awareness to protect endangered rhinoceros species from poaching!",
    "who1": "Save the Rhino Day is an international environmental awareness event held on April 1 to advocate for rhinoceros conservation.",
    "who2": "Wildlife conservation groups established the day to combat habitat loss and poaching in Africa and Asia.",
    "timeline": [
      "1990s - Conservation organizations establish Save the Rhino Day",
      "2020 - Global anti-poaching initiatives protect black and white rhino populations"
    ]
  },
  {
    "id": "apr-2-frederic-bartholdi",
    "month": "April",
    "day": "April 2",
    "dayNum": 2,
    "title": "Frederic Bartholdi b. 1834 (designed Statue of Liberty)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 2, 1834, Statue of Liberty sculptor!",
    "emoji": "\ud83d\uddfd",
    "funFact": "According to Biography.com, Bartholdi spent 10 years designing and sculpting 'Liberty Enlightening the World'!",
    "who1": "Fr\u00e9d\u00e9ric-Auguste Bartholdi was a French sculptor best known for designing the Statue of Liberty in New York Harbor.",
    "who2": "Bartholdi was born in Colmar, France, on April 2, 1834, studying architecture and painting in Paris.",
    "timeline": [
      "1834 - Born in Colmar, France on April 2",
      "1876 - Displayed Statue of Liberty torch at Philadelphia Centennial Exposition",
      "1886 - Statue of Liberty dedicated in New York Harbor on October 28"
    ]
  },
  {
    "id": "apr-2-first-us-mint",
    "month": "April",
    "day": "April 2",
    "dayNum": 2,
    "title": "First U.S. Mint established 1792",
    "type": "Event / History (Wikipedia)",
    "connection": "Established by Coinage Act on April 2, 1792!",
    "emoji": "\ud83e\ude99",
    "funFact": "According to Wikipedia, the Coinage Act of 1792 established the U.S. dollar and created the U.S. Mint in Philadelphia!",
    "who1": "The United States Mint was established by the U.S. Congress on April 2, 1792, to produce official national coinage.",
    "who2": "The mint was created through the Coinage Act signed by President George Washington, housed in Philadelphia.",
    "timeline": [
      "1792 - Coinage Act signed establishing U.S. Mint on April 2",
      "1793 - First official copper cents minted for circulation",
      "1873 - U.S. Mint becomes part of the Department of the Treasury"
    ]
  },
  {
    "id": "apr-3-washington-irving",
    "month": "April",
    "day": "April 3",
    "dayNum": 3,
    "title": "Washington Irving b. 1783 (author of Sleepy Hollow)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 3, 1783, Father of American Literature!",
    "emoji": "\ud83e\udd94",
    "funFact": "According to Biography.com, Washington Irving created legendary characters Rip Van Winkle and the Headless Horseman!",
    "who1": "Washington Irving was an American short-story writer, essayist, biographer, and diplomat best known for 'The Legend of Sleepy Hollow.'",
    "who2": "Washington Irving was born in Manhattan, New York, on April 3, 1783, named after General George Washington.",
    "timeline": [
      "1783 - Born in New York City on April 3",
      "1819 - Published 'Rip Van Winkle' and 'The Legend of Sleepy Hollow'",
      "1842 - Appointed U.S. Minister to Spain"
    ]
  },
  {
    "id": "apr-3-jane-goodall",
    "month": "April",
    "day": "April 3",
    "dayNum": 3,
    "title": "Jane Goodall b. 1934 (biologist)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 3, 1934, world-famous primatologist!",
    "emoji": "\ud83d\udc35",
    "funFact": "According to Biography.com, Jane Goodall discovered that chimpanzees make and use tools during her 60-year study in Gombe!",
    "who1": "Dame Jane Morris Goodall is an English primatologist and anthropologist considered the world's foremost expert on chimpanzees.",
    "who2": "Jane Goodall was born in London on April 3, 1934, traveling to Tanzania's Gombe Stream National Park in 1960.",
    "timeline": [
      "1934 - Born in London, England on April 3",
      "1960 - Begins landmark wild chimpanzee study at Gombe",
      "1977 - Establishes the Jane Goodall Institute for wildlife conservation",
      "2002 - Appointed UN Messenger of Peace"
    ]
  },
  {
    "id": "apr-3-pony-express",
    "month": "April",
    "day": "April 3",
    "dayNum": 3,
    "title": "Pony Express began in 1860",
    "type": "Event / History (Wikipedia)",
    "connection": "First mail rider departed on April 3, 1860!",
    "emoji": "\ud83d\udc0e",
    "funFact": "According to Wikipedia, Pony Express riders carried mail 1,900 miles between Missouri and California in just 10 days!",
    "who1": "The Pony Express was a horseback mail delivery service that connected Missouri to California from April 3, 1860, to October 1861.",
    "who2": "Founded by William H. Russell, Alexander Majors, and William B. Waddell, the route utilized 190 relay stations.",
    "timeline": [
      "1860 - First riders depart St. Joseph, Missouri, and Sacramento, California, on April 3",
      "1861 - Discontinued after inauguration of transcontinental telegraph"
    ]
  },
  {
    "id": "apr-4-dorothea-dix",
    "month": "April",
    "day": "April 4",
    "dayNum": 4,
    "title": "Dorothea Dix b. 1802 (social reformer)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 4, 1802, mental health reformer pioneer!",
    "emoji": "\ud83c\udfe5",
    "funFact": "According to Biography.com, Dorothea Dix founded or expanded over 30 hospitals for the mentally ill across America!",
    "who1": "Dorothea Lynde Dix was an American advocate on behalf of the indigent mentally ill who created the first generation of American mental asylums.",
    "who2": "Dorothea Dix was born in Hampden, Maine, on April 4, 1802, teaching school before investigating asylum conditions.",
    "timeline": [
      "1802 - Born in Hampden, Maine on April 4",
      "1843 - Submitted famous 'Memorial' to Massachusetts legislature reforming mental care",
      "1861 - Served as Superintendent of Army Nurses during the Civil War"
    ]
  },
  {
    "id": "apr-4-maya-angelou",
    "month": "April",
    "day": "April 4",
    "dayNum": 4,
    "title": "Maya Angelou b. 1928 (author & poet)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 4, 1928, literary legend!",
    "emoji": "\ud83e\udeb6",
    "funFact": "According to Biography.com, Maya Angelou wrote 7 autobiographies, including 'I Know Why the Caged Bird Sings', and recited a poem at JFK/Clinton inauguration!",
    "who1": "Maya Angelou was an American memoirist, poet, and civil rights activist who published seven acclaimed autobiographies.",
    "who2": "Maya Angelou was born Marguerite Annie Johnson in St. Louis, Missouri, on April 4, 1928.",
    "timeline": [
      "1928 - Born in St. Louis, Missouri on April 4",
      "1969 - Published landmark memoir 'I Know Why the Caged Bird Sings'",
      "1993 - Recited poem 'On the Pulse of Morning' at President Bill Clinton's inauguration",
      "2010 - Awarded Presidential Medal of Freedom"
    ]
  },
  {
    "id": "apr-5-booker-t-washington",
    "month": "April",
    "day": "April 5",
    "dayNum": 5,
    "title": "Booker T. Washington b. 1856 (African American leader)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 5, 1856, Tuskegee Institute founder!",
    "emoji": "\ud83d\udcda",
    "funFact": "According to Biography.com, Booker T. Washington founded Tuskegee Institute in 1881 and authored 'Up From Slavery'!",
    "who1": "Booker Taliaferro Washington was an American educator, author, orator, and adviser to several presidents of the United States.",
    "who2": "Booker T. Washington was born into enslavement in Franklin County, Virginia, on April 5, 1856, putting himself through Hampton Institute.",
    "timeline": [
      "1856 - Born in Franklin County, Virginia on April 5",
      "1881 - Founded Tuskegee Normal and Industrial Institute in Alabama",
      "1901 - Published famous autobiography 'Up From Slavery'",
      "1901 - First African American invited to dine at the White House by Theodore Roosevelt"
    ]
  },
  {
    "id": "apr-5-colin-powell",
    "month": "April",
    "day": "April 5",
    "dayNum": 5,
    "title": "Colin Powell b. 1937 (statesman)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 5, 1937, 1st Black Secretary of State!",
    "emoji": "\ud83c\udf96\ufe0f",
    "funFact": "According to Biography.com, General Colin Powell was Chairman of the Joint Chiefs of Staff and 1st African American Secretary of State!",
    "who1": "Colin Luther Powell was an American politician, diplomat, and army general who served as the 65th U.S. Secretary of State.",
    "who2": "Colin Powell was born in Harlem, New York City, on April 5, 1937, joining ROTC at City College of New York.",
    "timeline": [
      "1937 - Born in Harlem, New York City on April 5",
      "1989-1993 - Served as Chairman of the Joint Chiefs of Staff during Persian Gulf War",
      "2001-2005 - Served as 65th U.S. Secretary of State"
    ]
  },
  {
    "id": "apr-6-first-modern-olympics",
    "month": "April",
    "day": "April 6",
    "dayNum": 6,
    "title": "First modern Olympics 1896",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Opened in Athens on April 6, 1896!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Wikipedia, 241 male athletes from 14 nations competed in 43 events at the Panathenaic Stadium in Athens!",
    "who1": "The 1896 Summer Olympics, officially known as the Games of the I Olympiad, opened in Athens, Greece, on April 6, 1896.",
    "who2": "Organized by Pierre de Coubertin and the International Olympic Committee, the games revived ancient Olympic traditions.",
    "timeline": [
      "1896 - Opening ceremony held at Panathenaic Stadium on April 6",
      "1896 - James Connolly wins hop-step-and-jump, becoming 1st modern Olympic champion",
      "1896 - Spiridon Louis wins inaugural Olympic marathon"
    ]
  },
  {
    "id": "apr-6-north-pole-discovery",
    "month": "April",
    "day": "April 6",
    "dayNum": 6,
    "title": "Discovery of the North Pole 1909",
    "type": "Event / History (Wikipedia)",
    "connection": "Reached by Robert Peary & Matthew Henson on April 6, 1909!",
    "emoji": "\ud83e\uddca",
    "funFact": "According to Wikipedia, Matthew Henson, an African American explorer, reached the North Pole alongside Robert Peary!",
    "who1": "The North Pole Expedition reached the geographic North Pole on April 6, 1909, led by American explorers Robert Peary and Matthew Henson.",
    "who2": "The team navigated across Arctic ocean ice with Inuit guides and dog sled teams departing Ellesmere Island.",
    "timeline": [
      "1909 - Reached geographic North Pole on April 6",
      "1988 - Matthew Henson buried with full honors at Arlington National Cemetery",
      "2000 - National Geographic awards Matthew Henson Hubbard Medal"
    ]
  },
  {
    "id": "apr-7-wk-kellogg",
    "month": "April",
    "day": "April 7",
    "dayNum": 7,
    "title": "W.K. Kellogg b. 1860 (cereal manufacturer)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 7, 1860, founder of Kellogg's Cereal!",
    "emoji": "\ud83e\udd63",
    "funFact": "According to Biography.com, Will Keith Kellogg accidentally invented Corn Flakes while working at Battle Creek Sanitarium!",
    "who1": "Will Keith Kellogg was an American industrialist in food manufacturing who founded the Kellogg Company.",
    "who2": "W.K. Kellogg was born in Battle Creek, Michigan, on April 7, 1860, assisting his brother Dr. John Harvey Kellogg.",
    "timeline": [
      "1860 - Born in Battle Creek, Michigan on April 7",
      "1894 - Co-invented toasted wheat and corn flakes",
      "1906 - Founded the Battle Creek Toasted Corn Flake Company",
      "1930 - Established the W.K. Kellogg Foundation"
    ]
  },
  {
    "id": "apr-7-william-wordsworth",
    "month": "April",
    "day": "April 7",
    "dayNum": 7,
    "title": "William Wordsworth b. 1770 (English poet)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 7, 1770, English Romantic poet!",
    "emoji": "\ud83e\udeb6",
    "funFact": "According to Biography.com, Wordsworth co-published 'Lyrical Ballads' with Samuel Taylor Coleridge launching the Romantic Age!",
    "who1": "William Wordsworth was a major English Romantic poet who helped launch the Romantic Age in English literature.",
    "who2": "William Wordsworth was born in Cockermouth, Cumberland, England, on April 7, 1770, studying at St John's College, Cambridge.",
    "timeline": [
      "1770 - Born in Cockermouth, England on April 7",
      "1798 - Co-published landmark poetry collection 'Lyrical Ballads'",
      "1843 - Appointed Poet Laureate of the United Kingdom"
    ]
  },
  {
    "id": "apr-8-buddha",
    "month": "April",
    "day": "April 8",
    "dayNum": 8,
    "title": "Buddha b. 563 B.C. (began Buddhism)",
    "type": "Person (Biography.com)",
    "connection": "Born in April 563 BC, founder of Buddhism!",
    "emoji": "\ud83e\uddd8\u200d\u2642\ufe0f",
    "funFact": "According to Biography.com, Siddhartha Gautama achieved enlightenment under the Bodhi tree and taught the Four Noble Truths!",
    "who1": "Siddhartha Gautama, known as the Buddha, was an ancient Indian spiritual teacher who founded Buddhism.",
    "who2": "Siddhartha Gautama was born in Lumbini (modern-day Nepal) around 563 BC as a prince of the Shakya clan.",
    "timeline": [
      "c. 563 BC - Born in Lumbini, Nepal",
      "c. 528 BC - Attained enlightenment under the Bodhi tree in Bodh Gaya",
      "c. 483 BC - Passed away in Kushinagar leaving a global spiritual heritage"
    ]
  },
  {
    "id": "apr-9-civil-war-ended",
    "month": "April",
    "day": "April 9",
    "dayNum": 9,
    "title": "Civil War ended in 1865",
    "type": "Event / History (Wikipedia)",
    "connection": "Lee surrendered to Grant on April 9, 1865!",
    "emoji": "\u2694\ufe0f",
    "funFact": "According to Wikipedia, General Lee surrendered to General Grant in the parlor of Wilmer McLean's home at Appomattox Court House!",
    "who1": "The Surrender at Appomattox Court House occurred on April 9, 1865, effectively concluding the American Civil War.",
    "who2": "Confederate General Robert E. Lee surrendered his Army of Northern Virginia to Union General Ulysses S. Grant.",
    "timeline": [
      "1865 - Surrender document signed in Appomattox Court House parlor on April 9",
      "1865 - Union troops supply food rations to surrendering Confederate soldiers",
      "1940 - Appomattox Court House National Historical Park created"
    ]
  },
  {
    "id": "apr-10-joseph-pulitzer",
    "month": "April",
    "day": "April 10",
    "dayNum": 10,
    "title": "Joseph Pulitzer b. 1847 (journalist, publisher)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 10, 1847, namesake of Pulitzer Prize!",
    "emoji": "\ud83d\udcf0",
    "funFact": "According to Biography.com, Pulitzer established the Pulitzer Prizes for journalism, literature, and music in his will!",
    "who1": "Joseph Pulitzer was a Hungarian-American newspaper publisher of the St. Louis Post-Dispatch and New York World.",
    "who2": "Joseph Pulitzer was born in Mak\u00f3, Hungary, on April 10, 1847, emigrating to the U.S. to serve in the Union Army.",
    "timeline": [
      "1847 - Born in Mak\u00f3, Hungary on April 10",
      "1883 - Purchased the New York World building it into a major daily newspaper",
      "1917 - First annual Pulitzer Prizes awarded according to his bequest"
    ]
  },
  {
    "id": "apr-10-frances-perkins",
    "month": "April",
    "day": "April 10",
    "dayNum": 10,
    "title": "Frances Perkins b. 1880 (first woman cabinet member)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 10, 1880, 1st female Cabinet Secretary!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, Frances Perkins served as Secretary of Labor under FDR, architecting Social Security and minimum wage laws!",
    "who1": "Frances Perkins was an American workers' rights advocate who served as the U.S. Secretary of Labor from 1933 to 1945, the first woman in a presidential cabinet.",
    "who2": "Frances Perkins was born Fannie Coralie Perkins in Boston, Massachusetts, on April 10, 1880, graduating from Mount Holyoke College.",
    "timeline": [
      "1880 - Born in Boston, Massachusetts on April 10",
      "1933 - Sworn in as U.S. Secretary of Labor under President Franklin D. Roosevelt",
      "1935 - Chaired committee drafting the Social Security Act"
    ]
  },
  {
    "id": "apr-11-aspca-began",
    "month": "April",
    "day": "April 11",
    "dayNum": 11,
    "title": "ASPCA began in 1866",
    "type": "Event / History (Wikipedia)",
    "connection": "Incorporated in NYC on April 11, 1866!",
    "emoji": "\ud83d\udc3e",
    "funFact": "According to Wikipedia, the ASPCA was the 1st humane society established in North America to prevent animal cruelty!",
    "who1": "The American Society for the Prevention of Cruelty to Animals (ASPCA) is a non-profit organization dedicated to preventing cruelty to animals.",
    "who2": "Founded by Henry Bergh, the ASPCA was incorporated by the New York State Legislature on April 11, 1866.",
    "timeline": [
      "1866 - Incorporated in New York City on April 11",
      "1866 - New York passes first anti-cruelty law drafted by Henry Bergh",
      "1894 - ASPCA operates NYC animal shelter system"
    ]
  },
  {
    "id": "apr-11-apollo-13",
    "month": "April",
    "day": "April 11",
    "dayNum": 11,
    "title": "Apollo 13 launched in 1970",
    "type": "Event / Space (Wikipedia)",
    "connection": "Launched on lunar mission April 11, 1970!",
    "emoji": "\ud83d\ude80",
    "funFact": "According to Wikipedia, after an oxygen tank exploded, Apollo 13 returned safely to Earth using the Lunar Module as a lifeboat!",
    "who1": "Apollo 13 was the seventh crewed mission in the NASA Apollo space program, launched on April 11, 1970.",
    "who2": "Crewed by Jim Lovell, Jack Swigert, and Fred Haise, the mission suffered a mid-space oxygen tank explosion two days after launch.",
    "timeline": [
      "1970 - Launched from Kennedy Space Center on April 11",
      "1970 - Oxygen tank explodes on April 13 prompting famous 'Houston, we've had a problem'",
      "1970 - Crew splashes down safely in the South Pacific Ocean on April 17"
    ]
  },
  {
    "id": "apr-12-henry-clay",
    "month": "April",
    "day": "April 12",
    "dayNum": 12,
    "title": "Henry Clay b. 1777 (politician)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 12, 1777, 'The Great Compromiser'!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, Henry Clay served as Speaker of the House, Secretary of State, and brokered the Missouri Compromise!",
    "who1": "Henry Clay Sr. was an American attorney, statesman, and orator who represented Kentucky in the Senate and House of Representatives.",
    "who2": "Henry Clay was born in Hanover County, Virginia, on April 12, 1777, studying law under George Wythe.",
    "timeline": [
      "1777 - Born in Hanover County, Virginia on April 12",
      "1820 - Brokered the Missouri Compromise in U.S. Congress",
      "1825-1829 - Served as 9th U.S. Secretary of State under John Quincy Adams",
      "1850 - Authored the Compromise of 1850"
    ]
  },
  {
    "id": "apr-13-thomas-jefferson",
    "month": "April",
    "day": "April 13",
    "dayNum": 13,
    "title": "Thomas Jefferson b. 1743 (3rd U.S. President)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 13, 1743, 3rd U.S. President!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, Jefferson authored the Declaration of Independence, doubled the nation via Louisiana Purchase, and founded UVA!",
    "who1": "Thomas Jefferson was an American Founding Father who was the principal author of the Declaration of Independence and 3rd President of the U.S.",
    "who2": "Thomas Jefferson was born in Shadwell, Virginia, on April 13, 1743, studying law at the College of William & Mary.",
    "timeline": [
      "1743 - Born in Shadwell, Virginia on April 13",
      "1776 - Authored the United States Declaration of Independence",
      "1801-1809 - Served as 3rd President of the United States",
      "1819 - Founded the University of Virginia"
    ]
  },
  {
    "id": "apr-14-tiger-woods",
    "month": "April",
    "day": "April 14",
    "dayNum": 14,
    "title": "Tiger Woods wins 3rd Masters Tournament 2002",
    "type": "Person (Biography.com)",
    "connection": "Won 3rd Masters green jacket on April 14, 2002!",
    "emoji": "\u26f3",
    "funFact": "According to Biography.com, Tiger Woods has won 15 major golf championships and 82 PGA Tour victories!",
    "who1": "Eldrick Tont 'Tiger' Woods is an American professional golfer widely regarded as one of the greatest golfers of all time.",
    "who2": "Tiger Woods was born in Cypress, California, on December 30, 1975, winning three U.S. Junior Amateurs.",
    "timeline": [
      "1975 - Born in Cypress, California",
      "1997 - Won his first Masters Tournament at age 21 by 12 strokes",
      "2002 - Won 3rd Masters championship on April 14 retaining title",
      "2019 - Won 5th Masters green jacket"
    ]
  },
  {
    "id": "apr-14-anne-sullivan",
    "month": "April",
    "day": "April 14",
    "dayNum": 14,
    "title": "Anne Sullivan b. 1866 (teacher of Helen Keller)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 14, 1866, Helen Keller's teacher!",
    "emoji": "\ud83e\udd1f",
    "funFact": "According to Biography.com, Anne Sullivan taught Helen Keller to communicate by spelling words into her hand, starting at the water pump!",
    "who1": "Johanna 'Anne' Mansfield Sullivan Macy was an American teacher best known for being the instructor and lifelong companion of Helen Keller.",
    "who2": "Anne Sullivan was born in Feeding Hills, Massachusetts, on April 14, 1866, graduating from Perkins School for the Blind.",
    "timeline": [
      "1866 - Born in Feeding Hills, Massachusetts on April 14",
      "1887 - Arrived in Tuscumbia, Alabama, to teach Helen Keller",
      "1904 - Graduated alongside Helen Keller from Radcliffe College"
    ]
  },
  {
    "id": "apr-15-titanic-sunk",
    "month": "April",
    "day": "April 15",
    "dayNum": 15,
    "title": "Titanic sunk 1912",
    "type": "Event / History (Wikipedia)",
    "connection": "Sank in North Atlantic early morning April 15, 1912!",
    "emoji": "\ud83d\udea2",
    "funFact": "According to Wikipedia, the RMS Titanic struck an iceberg at 11:40 PM on April 14 and sank at 2:20 AM on April 15, 1912!",
    "who1": "The Sinking of the RMS Titanic occurred on April 15, 1912, after the ocean liner struck an iceberg in the North Atlantic Ocean.",
    "who2": "The Titanic was on its maiden voyage from Southampton to New York City carrying over 2,200 passengers and crew.",
    "timeline": [
      "1912 - Titanic strikes iceberg on April 14 at 11:40 PM",
      "1912 - Ship sinks beneath North Atlantic waves on April 15 at 2:20 AM",
      "1985 - Wreckage discovered by Robert Ballard on ocean floor"
    ]
  },
  {
    "id": "apr-15-leonardo-da-vinci",
    "month": "April",
    "day": "April 15",
    "dayNum": 15,
    "title": "Leonardo da Vinci b. 1452 (artist & scientist)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 15, 1452, Renaissance genius!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, Leonardo da Vinci painted the 'Mona Lisa' and 'The Last Supper' and sketched flying machines!",
    "who1": "Leonardo di ser Piero da Vinci was an Italian polymath of the High Renaissance active as a painter, draughtsman, engineer, scientist, and sculptor.",
    "who2": "Leonardo was born near Vinci, Republic of Florence, on April 15, 1452, apprenticing under Andrea del Verrocchio.",
    "timeline": [
      "1452 - Born near Vinci, Italy on April 15",
      "1498 - Completed mural masterpiece 'The Last Supper' in Milan",
      "1503 - Began painting the iconic 'Mona Lisa'",
      "1519 - Passed away in Amboise, France"
    ]
  },
  {
    "id": "apr-16-wilbur-wright",
    "month": "April",
    "day": "April 16",
    "dayNum": 16,
    "title": "Wilbur Wright b. 1867 (helped to invent airplane)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 16, 1867, aviation pioneer!",
    "emoji": "\u2708\ufe0f",
    "funFact": "According to Biography.com, Wilbur Wright and his brother Orville conducted hundreds of glider tests before their 1903 powered flight!",
    "who1": "Wilbur Wright was an American aviation pioneer who, alongside his brother Orville, developed the world's first successful motor-operated airplane.",
    "who2": "Wilbur Wright was born in Millville, Indiana, on April 16, 1867, opening a bicycle repair shop with Orville in Dayton, Ohio.",
    "timeline": [
      "1867 - Born in Millville, Indiana on April 16",
      "1903 - Completed historic 1st powered airplane flight at Kitty Hawk",
      "1908 - Demonstrated 3-axis flight control across Europe"
    ]
  },
  {
    "id": "apr-17-thornton-wilder",
    "month": "April",
    "day": "April 17",
    "dayNum": 17,
    "title": "Thornton Wilder b. 1897 (Pulitzer prize winning author)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 17, 1897, 3-time Pulitzer winner!",
    "emoji": "\ud83d\udcda",
    "funFact": "According to Biography.com, Thornton Wilder won three Pulitzer Prizes for his novel 'The Bridge of San Luis Rey' and play 'Our Town'!",
    "who1": "Thornton Niven Wilder was an American playwright and novelist who won three Pulitzer Prizes for literature and drama.",
    "who2": "Thornton Wilder was born in Madison, Wisconsin, on April 17, 1897, graduating from Oberlin College and Yale University.",
    "timeline": [
      "1897 - Born in Madison, Wisconsin on April 17",
      "1928 - Awarded Pulitzer Prize for novel 'The Bridge of San Luis Rey'",
      "1938 - Awarded Pulitzer Prize for classic play 'Our Town'",
      "1943 - Awarded third Pulitzer Prize for play 'The Skin of Our Teeth'"
    ]
  },
  {
    "id": "apr-18-sf-earthquake",
    "month": "April",
    "day": "April 18",
    "dayNum": 18,
    "title": "San Francisco earthquake 1906",
    "type": "Event / History (Wikipedia)",
    "connection": "Struck northern California on April 18, 1906!",
    "emoji": "\ud83c\udf0b",
    "funFact": "According to Wikipedia, the 7.9 magnitude earthquake and subsequent fires destroyed 80% of San Francisco!",
    "who1": "The 1906 San Francisco Earthquake struck the coast of Northern California at 5:12 AM on April 18, 1906, with an estimated magnitude of 7.9.",
    "who2": "Rupturing 296 miles of the San Andreas Fault, the earthquake and three-day fires destroyed over 28,000 buildings.",
    "timeline": [
      "1906 - Earthquake strikes San Francisco at 5:12 AM on April 18",
      "1906 - Fires burn for three days destroying city core",
      "1915 - San Francisco hosts Panama-Pacific International Exposition marking city rebuilding"
    ]
  },
  {
    "id": "apr-19-american-revolution-begins",
    "month": "April",
    "day": "April 19",
    "dayNum": 19,
    "title": "American Revolution begins in Lexington (1775)",
    "type": "Event / History (Wikipedia)",
    "connection": "Battles of Lexington & Concord on April 19, 1775!",
    "emoji": "\u2694\ufe0f",
    "funFact": "According to Wikipedia, the 'Shot Heard 'Round the World' occurred at the North Bridge in Concord, launching the Revolutionary War!",
    "who1": "The Battles of Lexington and Concord on April 19, 1775, were the first military engagements of the American Revolutionary War.",
    "who2": "Colonial minutemen confronted British regulars on Lexington Green and North Bridge in Concord following Paul Revere's ride.",
    "timeline": [
      "1775 - Minutemen clash with British regulars at Lexington Green on April 19",
      "1775 - 'Shot Heard 'Round the World' fired at Concord North Bridge",
      "1894 - Massachusetts designates April 19 as Patriots' Day"
    ]
  },
  {
    "id": "apr-20-marie-curie-radiation",
    "month": "April",
    "day": "April 20",
    "dayNum": 20,
    "title": "Marie Curie discovers radiation 1902",
    "type": "Event / Science (Wikipedia)",
    "connection": "Isolated radium chloride on April 20, 1902!",
    "emoji": "\u269b\ufe0f",
    "funFact": "According to Wikipedia, Marie Curie was the 1st woman to win a Nobel Prize and the only person to win Nobels in two different sciences!",
    "who1": "The Radium Isolation Discovery occurred on April 20, 1902, when Marie and Pierre Curie successfully isolated pure radium chloride salt.",
    "who2": "Working in a converted shed in Paris, Marie Curie processed tons of pitchblende ore to discover radium and polonium.",
    "timeline": [
      "1898 - Discovers radium and polonium elements",
      "1902 - Isolates pure radium chloride on April 20",
      "1903 - Awarded Nobel Prize in Physics",
      "1911 - Awarded Nobel Prize in Chemistry"
    ]
  },
  {
    "id": "apr-20-joan-miro",
    "month": "April",
    "day": "April 20",
    "dayNum": 20,
    "title": "Joan Miro b. 1893 (surrealistic painter)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 20, 1893, Surrealist art master!",
    "emoji": "\ud83c\udfa8",
    "funFact": "According to Biography.com, Joan Mir\u00f3 created biomorphic sculptures and paintings praised for childlike spontaneity and vibrant color!",
    "who1": "Joan Mir\u00f3 i Ferr\u00e0 was a Catalan Spanish painter, sculptor, and ceramicist who earned international acclaim for Surrealist works.",
    "who2": "Joan Mir\u00f3 was born in Barcelona, Catalonia, Spain, on April 20, 1893, studying art at the La Llotja Fine Arts Academy.",
    "timeline": [
      "1893 - Born in Barcelona, Spain on April 20",
      "1924 - Joined the Surrealist group in Paris",
      "1975 - Fundaci\u00f3 Joan Mir\u00f3 museum opened in Barcelona"
    ]
  },
  {
    "id": "apr-20-rubin-hurricane-carter",
    "month": "April",
    "day": "April 20",
    "dayNum": 20,
    "title": "Rubin 'The Hurricane' Carter dies 2014",
    "type": "Person (Biography.com)",
    "connection": "Passed away on April 20, 2014, middleweight boxer icon!",
    "emoji": "\ud83e\udd4a",
    "funFact": "According to Biography.com, Rubin Carter was wrongfully convicted in 1866 before Bob Dylan wrote song 'Hurricane' aiding his exoneration!",
    "who1": "Rubin 'The Hurricane' Carter was an American middleweight boxer who was wrongfully convicted of murder and freed after 19 years in prison.",
    "who2": "Rubin Carter was born in Paterson, New Jersey, on May 6, 1937, compiling 27 professional boxing victories.",
    "timeline": [
      "1937 - Born in Paterson, New Jersey",
      "1966 - Wrongfully arrested and convicted",
      "1985 - Federal judge overturns conviction and frees Carter",
      "2014 - Passed away in Toronto on April 20"
    ]
  },
  {
    "id": "apr-21-john-muir",
    "month": "April",
    "day": "April 21",
    "dayNum": 21,
    "title": "John Muir b. 1838 (naturalist)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 21, 1838, Father of the National Parks!",
    "emoji": "\ud83c\udf32",
    "funFact": "According to Biography.com, John Muir co-founded the Sierra Club and helped establish Yosemite and Sequoia National Parks!",
    "who1": "John Muir, also known as 'John of the Mountains,' was a Scottish-American naturalist, author, and early advocate of wilderness preservation.",
    "who2": "John Muir was born in Dunbar, East Lothian, Scotland, on April 21, 1838, studying at the University of Wisconsin.",
    "timeline": [
      "1838 - Born in Dunbar, Scotland on April 21",
      "1890 - Successfully petitions U.S. Congress to create Yosemite National Park",
      "1892 - Co-founds the Sierra Club, serving as its first president"
    ]
  },
  {
    "id": "apr-21-nina-simone",
    "month": "April",
    "day": "April 21",
    "dayNum": 21,
    "title": "Nina Simone dies 2003",
    "type": "Person (Biography.com)",
    "connection": "Passed away on April 21, 2003, High Priestess of Soul!",
    "emoji": "\ud83c\udfa4",
    "funFact": "According to Biography.com, Nina Simone combined classical piano, jazz, and blues with powerful civil rights anthems like 'Mississippi Goddam'!",
    "who1": "Eunice Kathleen Waymon, known as Nina Simone, was an American singer, songwriter, pianist, and civil rights activist.",
    "who2": "Nina Simone was born in Tryon, North Carolina, on February 21, 1933, studying classical piano at the Juilliard School.",
    "timeline": [
      "1933 - Born in Tryon, North Carolina",
      "1964 - Released iconic civil rights anthem 'Mississippi Goddam'",
      "2003 - Passed away in Carry-le-Rouet, France on April 21",
      "2018 - Inducted into the Rock and Roll Hall of Fame"
    ]
  },
  {
    "id": "apr-21-prince",
    "month": "April",
    "day": "April 21",
    "dayNum": 21,
    "title": "The musician, Prince, d. 2016",
    "type": "Person (Biography.com)",
    "connection": "Passed away on April 21, 2016, musical icon!",
    "emoji": "\ud83d\udc9c",
    "funFact": "According to Biography.com, Prince played 27 instruments, sold over 100 million records, and won 7 Grammys and an Oscar for 'Purple Rain'!",
    "who1": "Prince Rogers Nelson was an American singer-songwriter, musician, and record producer widely regarded as one of the greatest musicians of his generation.",
    "who2": "Prince was born in Minneapolis, Minnesota, on June 7, 1958, signing with Warner Bros. Records at age nineteen.",
    "timeline": [
      "1958 - Born in Minneapolis, Minnesota",
      "1984 - Released landmark album and movie 'Purple Rain'",
      "2004 - Inducted into the Rock and Roll Hall of Fame",
      "2016 - Passed away at Paisley Park studios on April 21"
    ]
  },
  {
    "id": "apr-22-earth-day",
    "month": "April",
    "day": "April 22",
    "dayNum": 22,
    "title": "Earth Day established in 1970",
    "type": "Event / Culture (Wikipedia)",
    "connection": "First celebrated on April 22, 1970!",
    "emoji": "\ud83c\udf0d",
    "funFact": "According to Wikipedia, the first Earth Day in 1970 mobilized 20 million Americans and led to creation of the EPA and Clean Air Act!",
    "who1": "Earth Day is an annual worldwide event held on April 22 to demonstrate support for environmental protection.",
    "who2": "First organized by Senator Gaylord Nelson and Denis Hayes on April 22, 1970, Earth Day now mobilizes 1 billion people in 193 countries.",
    "timeline": [
      "1970 - First Earth Day mobilizes 20 million Americans on April 22",
      "1970 - U.S. Environmental Protection Agency (EPA) established",
      "1990 - Earth Day goes global, reaching 200 million people in 141 nations"
    ]
  },
  {
    "id": "apr-23-william-shakespeare",
    "month": "April",
    "day": "April 23",
    "dayNum": 23,
    "title": "William Shakespeare b. 1564 (poet and playwright)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 23, 1564, The Bard of Avon!",
    "emoji": "\ud83c\udfad",
    "funFact": "According to Biography.com, Shakespeare wrote 39 plays and 154 sonnets, inventing over 1,700 English words!",
    "who1": "William Shakespeare was an English playwright, poet, and actor widely regarded as the greatest writer in the English language.",
    "who2": "William Shakespeare was baptized in Stratford-upon-Avon, England, on April 26, 1564 (traditionally born April 23).",
    "timeline": [
      "1564 - Born in Stratford-upon-Avon on April 23",
      "1599 - Globe Theatre constructed in London by Shakespeare's playing company",
      "1606 - Wrote tragedies 'Macbeth' and 'King Lear'",
      "1616 - Passed away in Stratford-upon-Avon on April 23"
    ]
  },
  {
    "id": "apr-23-shirley-temple",
    "month": "April",
    "day": "April 23",
    "dayNum": 23,
    "title": "Shirley Temple b. 1928 (actress and ambassador)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 23, 1928, child star & U.S. Ambassador!",
    "emoji": "\ud83c\udfac",
    "funFact": "According to Biography.com, Shirley Temple was Hollywood's #1 box office star at age 6 and later served as U.S. Ambassador to Ghana and Czechoslovakia!",
    "who1": "Shirley Temple Black was an American actress, singer, dancer, and diplomat who was Hollywood's number-one box-office draw as a child actress.",
    "who2": "Shirley Temple was born in Santa Monica, California, on April 23, 1928, starring in hit musical films like 'Bright Eyes.'",
    "timeline": [
      "1928 - Born in Santa Monica, California on April 23",
      "1935 - Awarded special Academy Juvenile Award at age six",
      "1974-1976 - Served as U.S. Ambassador to Ghana",
      "1989-1992 - Served as U.S. Ambassador to Czechoslovakia"
    ]
  },
  {
    "id": "apr-24-library-of-congress",
    "month": "April",
    "day": "April 24",
    "dayNum": 24,
    "title": "Library of Congress established 1800",
    "type": "Event / History (Wikipedia)",
    "connection": "Established by President Adams on April 24, 1800!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Wikipedia, the Library of Congress is the largest library in the world, holding over 173 million items!",
    "who1": "The Library of Congress is the national library of the United States and the official research arm of the U.S. Congress.",
    "who2": "Established when President John Adams signed an Act of Congress on April 24, 1800, providing $5,000 to purchase books.",
    "timeline": [
      "1800 - Established by Act of Congress on April 24",
      "1815 - Thomas Jefferson sells his personal 6,487-volume library to reconstitute holdings",
      "1897 - Thomas Jefferson Building opens to the public"
    ]
  },
  {
    "id": "apr-25-guglielmo-marconi",
    "month": "April",
    "day": "April 25",
    "dayNum": 25,
    "title": "Guglielmo Marconi b. 1874 (invented wireless telegraph)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 25, 1874, wireless radio pioneer!",
    "emoji": "\ud83d\udcfb",
    "funFact": "According to Biography.com, Marconi sent the 1st transatlantic wireless radio signal across the Atlantic Ocean in 1901!",
    "who1": "Guglielmo Giovanni Maria Marconi was an Italian inventor and electrical engineer best known for creating the practical wireless telegraph radio system.",
    "who2": "Marconi was born in Bologna, Italy, on April 25, 1874, conducting radio experiments in his attic.",
    "timeline": [
      "1874 - Born in Bologna, Italy on April 25",
      "1901 - Transmits 1st transatlantic wireless radio signal from England to Newfoundland",
      "1909 - Awarded Nobel Prize in Physics for wireless telegraphy"
    ]
  },
  {
    "id": "apr-25-hubble-space-telescope",
    "month": "April",
    "day": "April 25",
    "dayNum": 25,
    "title": "Hubble Space Telescope deployed 1990",
    "type": "Event / Space (Wikipedia)",
    "connection": "Deployed from Discovery on April 25, 1990!",
    "emoji": "\ud83d\udd2d",
    "funFact": "According to Wikipedia, Hubble has taken over 1.5 million observations of deep space, helping pin down the age of the universe (13.8 billion years)!",
    "who1": "The Hubble Space Telescope Deployment occurred on April 25, 1990, when Space Shuttle Discovery released the space telescope into orbit.",
    "who2": "Hubble was built by NASA and the European Space Agency, orbiting 340 miles above Earth's atmosphere.",
    "timeline": [
      "1990 - Deployed into low Earth orbit from Discovery payload bay on April 25",
      "1993 - First servicing mission corrects main mirror optics",
      "2020 - Celebrates 30th anniversary of continuous astronomical observations"
    ]
  },
  {
    "id": "apr-25-jackie-joyner-kersee",
    "month": "April",
    "day": "April 25",
    "dayNum": 25,
    "title": "Jackie Joyner-Kersee famous Olympian (awarded 2007)",
    "type": "Person (Biography.com)",
    "connection": "Honored for Olympic track & field achievements!",
    "emoji": "\ud83c\udfc3\u200d\u2640\ufe0f",
    "funFact": "According to Biography.com, Jackie Joyner-Kersee won 3 gold, 1 silver, and 2 bronze Olympic medals in heptathlon and long jump!",
    "who1": "Jacqueline Joyner-Kersee is an American retired track and field athlete ranked among the greatest female athletes of all time.",
    "who2": "Jackie Joyner-Kersee was born in East St. Louis, Illinois, on March 3, 1962, competing for UCLA.",
    "timeline": [
      "1962 - Born in East St. Louis, Illinois",
      "1988 - Won two gold medals at Seoul Olympics setting world record in heptathlon (7,291 pts)",
      "1992 - Won gold medal in heptathlon at Barcelona Olympics",
      "2007 - Named to U.S. Olympic Hall of Fame"
    ]
  },
  {
    "id": "apr-26-john-james-audubon",
    "month": "April",
    "day": "April 26",
    "dayNum": 26,
    "title": "John James Audubon b. 1785 (ornithologist & artist)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 26, 1785, author of The Birds of America!",
    "emoji": "\ud83e\udd85",
    "funFact": "According to Biography.com, Audubon's 'The Birds of America' contained 435 life-sized hand-colored prints of North American birds!",
    "who1": "John James Audubon was an American self-taught artist, naturalist, and ornithologist famed for his expansive illustrations of American birds.",
    "who2": "Audubon was born Jean-Jacques Audubon in Les Cayes, Saint-Domingue (Haiti), on April 26, 1785, growing up in France.",
    "timeline": [
      "1785 - Born in Les Cayes, Saint-Domingue on April 26",
      "1827-1838 - Published monumental masterwork 'The Birds of America'",
      "1905 - National Audubon Society named in his honor"
    ]
  },
  {
    "id": "apr-26-frederick-law-olmsted",
    "month": "April",
    "day": "April 26",
    "dayNum": 26,
    "title": "Frederick Law Olmsted b. 1822 (designed Central Park)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 26, 1822, Father of American Landscape Architecture!",
    "emoji": "\ud83c\udfde\ufe0f",
    "funFact": "According to Biography.com, Olmsted co-designed New York City's Central Park, Brooklyn's Prospect Park, and the U.S. Capitol grounds!",
    "who1": "Frederick Law Olmsted was an American landscape architect, journalist, and social critic considered the father of American landscape architecture.",
    "who2": "Frederick Law Olmsted was born in Hartford, Connecticut, on April 26, 1822, working as a journalist before landscape design.",
    "timeline": [
      "1822 - Born in Hartford, Connecticut on April 26",
      "1858 - Won Greensward Plan competition with Calvert Vaux designing Central Park",
      "1874 - Designed the U.S. Capitol grounds and terraces in Washington, D.C."
    ]
  },
  {
    "id": "apr-27-samuel-morse",
    "month": "April",
    "day": "April 27",
    "dayNum": 27,
    "title": "Samuel Morse b. 1791 (invented Morse Code)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 27, 1791, inventor of Morse Code!",
    "emoji": "\ud83d\udce1",
    "funFact": "According to Biography.com, Samuel Morse sent the 1st telegraph message 'What hath God wrought' from D.C. to Baltimore in 1844!",
    "who1": "Samuel Finley Breese Morse was an American inventor and painter who co-developed the single-wire electric telegraph and Morse code.",
    "who2": "Samuel Morse was born in Charlestown, Massachusetts, on April 27, 1791, studying at Yale College and painting portraits.",
    "timeline": [
      "1791 - Born in Charlestown, Massachusetts on April 27",
      "1837 - Granted patent for single-wire telegraph system",
      "1844 - Transmits first public telegraph message 'What hath God wrought'"
    ]
  },
  {
    "id": "apr-27-ulysses-s-grant",
    "month": "April",
    "day": "April 27",
    "dayNum": 27,
    "title": "Ulysses S. Grant b. 1822 (18th U.S. President)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 27, 1822, 18th U.S. President!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, Grant commanded Union armies to victory in the Civil War and served two terms as 18th U.S. President!",
    "who1": "Ulysses S. Grant was an American military officer and politician who served as the 18th President of the United States from 1869 to 1877.",
    "who2": "Ulysses S. Grant was born Hiram Ulysses Grant in Point Pleasant, Ohio, on April 27, 1822, graduating from West Point.",
    "timeline": [
      "1822 - Born in Point Pleasant, Ohio on April 27",
      "1864 - Appointed Commanding General of the United States Army",
      "1869-1877 - Served as 18th President of the United States",
      "1885 - Completed landmark personal memoirs shortly before passing away"
    ]
  },
  {
    "id": "apr-28-james-monroe",
    "month": "April",
    "day": "April 28",
    "dayNum": 28,
    "title": "James Monroe b. 1758 (5th U.S. President)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 28, 1758, 5th U.S. President!",
    "emoji": "\ud83c\udfdb\ufe0f",
    "funFact": "According to Biography.com, James Monroe issued the Monroe Doctrine in 1823 opposing European colonialism in the Americas!",
    "who1": "James Monroe was an American Founding Father, lawyer, and diplomat who served as the 5th President of the United States from 1817 to 1825.",
    "who2": "James Monroe was born in Westmoreland County, Virginia, on April 28, 1758, fighting in the Revolutionary War.",
    "timeline": [
      "1758 - Born in Westmoreland County, Virginia on April 28",
      "1803 - Helped negotiate the Louisiana Purchase in Paris",
      "1817-1825 - Served as 5th President of the United States",
      "1823 - Articulated the Monroe Doctrine in State of the Union address"
    ]
  },
  {
    "id": "apr-29-andre-agassi",
    "month": "April",
    "day": "April 29",
    "dayNum": 29,
    "title": "Andre Agassi b. 1970 (tennis player)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 29, 1970, Career Grand Slam champion!",
    "emoji": "\ud83c\udfbe",
    "funFact": "According to Biography.com, Andre Agassi won eight Grand Slam singles titles and an Olympic gold medal, achieving a Career Golden Slam!",
    "who1": "Andre Kirk Agassi is an American former world No. 1 tennis player who won eight Grand Slam singles titles and the 1996 Olympic gold.",
    "who2": "Andre Agassi was born in Las Vegas, Nevada, on April 29, 1970, turning professional at age sixteen.",
    "timeline": [
      "1970 - Born in Las Vegas, Nevada on April 29",
      "1992 - Won 1st Grand Slam title at Wimbledon",
      "1996 - Won Olympic gold medal in Atlanta",
      "1999 - Completed Career Grand Slam by winning French Open",
      "2011 - Inducted into International Tennis Hall of Fame"
    ]
  },
  {
    "id": "apr-29-duke-ellington",
    "month": "April",
    "day": "April 29",
    "dayNum": 29,
    "title": "Duke Ellington b. 1899 (jazz musician)",
    "type": "Person (Biography.com)",
    "connection": "Born on April 29, 1899, jazz orchestra titan!",
    "emoji": "\ud83c\udfb7",
    "funFact": "According to Biography.com, Duke Ellington composed over 1,000 works, leading his famous jazz orchestra for 50 years!",
    "who1": "Edward Kennedy 'Duke' Ellington was an American composer, pianist, and leader of a jazz orchestra from 1923 until his death.",
    "who2": "Duke Ellington was born in Washington, D.C., on April 29, 1899, performing at Harlem's Cotton Club.",
    "timeline": [
      "1899 - Born in Washington, D.C. on April 29",
      "1927 - Began famous residency at Harlem's Cotton Club",
      "1969 - Awarded Presidential Medal of Freedom by President Richard Nixon",
      "1999 - Posthumously awarded Pulitzer Prize Special Citation"
    ]
  },
  {
    "id": "apr-30-national-arbor-day",
    "month": "April",
    "day": "April 30",
    "dayNum": 30,
    "title": "National Arbor Day",
    "type": "Event / Culture (Wikipedia)",
    "connection": "Celebrated on last Friday of April!",
    "emoji": "\ud83c\udf33",
    "funFact": "According to Wikipedia, J. Sterling Morton founded Arbor Day in Nebraska in 1872, planting over 1 million trees on the first day!",
    "who1": "National Arbor Day is a civic holiday encouraging individuals and groups to plant trees, celebrated on the last Friday of April.",
    "who2": "Founded by J. Sterling Morton in Nebraska on April 10, 1872, Arbor Day became a national observance under President Richard Nixon.",
    "timeline": [
      "1872 - First Arbor Day observed in Nebraska with 1 million trees planted",
      "1970 - President Richard Nixon declares last Friday of April as National Arbor Day"
    ]
  },
  {
    "id": "apr-30-vietnam-war-ended",
    "month": "April",
    "day": "April 30",
    "dayNum": 30,
    "title": "Vietnam War ended 1975",
    "type": "Event / History (Wikipedia)",
    "connection": "Fall of Saigon occurred on April 30, 1975!",
    "emoji": "\ud83d\udd4a\ufe0f",
    "funFact": "According to Wikipedia, the Fall of Saigon on April 30, 1975, marked the official end of the Vietnam War!",
    "who1": "The End of the Vietnam War occurred on April 30, 1975, with the Fall of Saigon and conclusion of military hostilities.",
    "who2": "North Vietnamese forces entered Saigon as Operation Frequent Wind evacuated remaining American personnel.",
    "timeline": [
      "1973 - Paris Peace Accords signed bringing U.S. troop withdrawal",
      "1975 - Saigon captured by North Vietnamese forces on April 30, ending war",
      "1982 - Vietnam Veterans Memorial dedicated in Washington, D.C."
    ]
  }
];

  const ALL_RAW_TOPICS = [...RAW_OCTOBER_DATA, ...RAW_NOVEMBER_DATA, ...RAW_DECEMBER_DATA, ...RAW_JANUARY_DATA, ...RAW_FEBRUARY_DATA, ...RAW_MARCH_DATA, ...RAW_APRIL_DATA];
  const TOPICS_DB = ALL_RAW_TOPICS.map(t => {
    const articles = getArticlesForTopic(t);
    return Object.assign({}, t, articles);
  });

  let activeTopic = null;
  let selectedTopicObj = null;
  let activeArticleIndex = 1;
  let selectedMonth = "January";
  let selectedSentencesList = [];
  let currentAudioUtterance = null;

  // DOM Elements
  const welcomeView = document.getElementById("welcomeView");
  const workbenchView = document.getElementById("workbenchView");
  const monthSelect = document.getElementById("monthSelect");
  const topicSearchInput = document.getElementById("topicSearchInput");
  const welcomeTopicChipsGrid = document.getElementById("welcomeTopicChipsGrid");
  const chipsHeaderTitle = document.getElementById("chipsHeaderTitle");
  const chipsCountDisplay = document.getElementById("chipsCountDisplay");
  const launchStudioBtn = document.getElementById("launchStudioBtn");
  const launchBtnText = document.getElementById("launchBtnText");
  const backToTopicsBtn = document.getElementById("backToTopicsBtn");
  const homeLogoBtn = document.getElementById("homeLogoBtn");

  const graphicIconWrap = document.getElementById("graphicIconWrap");
  const topicTypeTag = document.getElementById("topicTypeTag");
  const articleMonthTag = document.getElementById("articleMonthTag");
  const audioReadBtn = document.getElementById("audioReadBtn");
  const audioIcon = document.getElementById("audioIcon");
  const audioText = document.getElementById("audioText");
  const articleTitle = document.getElementById("articleTitle");
  const monthConnectionBanner = document.getElementById("monthConnectionBanner");
  const tabArticle1 = document.getElementById("tabArticle1");
  const tabArticle2 = document.getElementById("tabArticle2");
  const articleBodyProtected = document.getElementById("articleBodyProtected");
  const funFactText = document.getElementById("funFactText");
  const timelineList = document.getElementById("timelineList");

  const focusSentenceBox = document.getElementById("focusSentenceBox");
  const focusSentencesContainer = document.getElementById("focusSentencesContainer");
  const focusSentencePlaceholder = document.getElementById("focusSentencePlaceholder");
  const clearSentencesBtn = document.getElementById("clearSentencesBtn");
  const paraphraseInput = document.getElementById("paraphraseInput");
  const pasteToast = document.getElementById("pasteToast");
  const plagiarismBadge = document.getElementById("plagiarismBadge");
  const plagiarismMsg = document.getElementById("plagiarismMsg");
  const copyParaphraseBtn = document.getElementById("copyParaphraseBtn");
  const printWorksheetBtn = document.getElementById("printWorksheetBtn");

  function init() {
    renderWelcomeTopicChips();
    attachEventListeners();
  }

  function renderWelcomeTopicChips(filterQuery = "") {
    if (!welcomeTopicChipsGrid) return;
    welcomeTopicChipsGrid.innerHTML = "";

    const selectedM = monthSelect ? monthSelect.value : "January";
    selectedMonth = selectedM;

    let filtered = TOPICS_DB.filter(t => {
      const matchMonth = (selectedM === "all" || t.month === selectedM);
      const matchSearch = filterQuery === "" || 
        t.title.toLowerCase().includes(filterQuery.toLowerCase()) || 
        t.connection.toLowerCase().includes(filterQuery.toLowerCase());
      return matchMonth && matchSearch;
    });

    if (chipsCountDisplay) chipsCountDisplay.textContent = filtered.length;
    if (chipsHeaderTitle) {
      if (selectedM === "all") {
        chipsHeaderTitle.innerHTML = `📚 All Extracted Topics (<span id="chipsCountDisplay">${filtered.length}</span> Available)`;
      } else {
        chipsHeaderTitle.innerHTML = `🗓️ ${selectedM} Featured Topics (<span id="chipsCountDisplay">${filtered.length}</span> Available)`;
      }
    }

    if (filtered.length === 0) {
      welcomeTopicChipsGrid.innerHTML = `
        <div style="grid-column:1/-1; background:rgba(255,255,255,0.06); padding:1.5rem; border-radius:14px; color:white; text-align:center;">
          <p style="font-size:1.1rem; font-weight:700;">No topic chips match "${filterQuery}".</p>
          <p style="font-size:0.9rem; color:#94a3b8; margin-top:0.4rem;">Try searching another keyword or select a different calendar month!</p>
        </div>
      `;
      disableLaunchButton();
      return;
    }

    filtered.forEach(topic => {
      const chip = document.createElement("div");
      const isSelected = selectedTopicObj && selectedTopicObj.id === topic.id;
      chip.className = `welcome-topic-chip ${isSelected ? "selected" : ""}`;
      chip.innerHTML = `
        <div class="chip-left">
          <span class="chip-emoji">${topic.emoji}</span>
          <div class="chip-info">
            <span class="chip-title">${topic.title}</span>
            <span class="chip-date">${topic.day || topic.month} • ${topic.type}</span>
          </div>
        </div>
        <div class="chip-check">${isSelected ? "✓" : ""}</div>
      `;

      chip.addEventListener("click", () => {
        document.querySelectorAll(".welcome-topic-chip").forEach(c => {
          c.classList.remove("selected");
          const chk = c.querySelector(".chip-check");
          if (chk) chk.textContent = "";
        });

        chip.classList.add("selected");
        const chk = chip.querySelector(".chip-check");
        if (chk) chk.textContent = "✓";

        selectedTopicObj = topic;
        enableLaunchButton(topic);
      });

      welcomeTopicChipsGrid.appendChild(chip);
    });

    if (selectedTopicObj) {
      const matchingStill = filtered.find(t => t.id === selectedTopicObj.id);
      if (matchingStill) {
        enableLaunchButton(matchingStill);
      } else {
        disableLaunchButton();
      }
    } else {
      disableLaunchButton();
    }
  }

  function enableLaunchButton(topic) {
    if (!launchStudioBtn) return;
    launchStudioBtn.disabled = false;
    if (launchBtnText) launchBtnText.textContent = `Launch Research Studio for "${topic.title}" 🚀`;
  }

  function disableLaunchButton() {
    if (!launchStudioBtn) return;
    launchStudioBtn.disabled = true;
    if (launchBtnText) launchBtnText.textContent = "Select a Topic Above to Begin";
  }

  function switchToStudioView() {
    if (!selectedTopicObj) return;
    activeTopic = selectedTopicObj;

    if (welcomeView) welcomeView.style.display = "none";
    if (workbenchView) workbenchView.style.display = "grid";
    if (backToTopicsBtn) backToTopicsBtn.style.display = "inline-flex";

    loadTopic(activeTopic);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function switchToWelcomeView() {
    if (workbenchView) workbenchView.style.display = "none";
    if (welcomeView) welcomeView.style.display = "flex";
    if (backToTopicsBtn) backToTopicsBtn.style.display = "none";

    stopAudio();
    renderWelcomeTopicChips(topicSearchInput ? topicSearchInput.value.trim() : "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function loadTopic(topic) {
    if (!topic) return;
    activeTopic = topic;
    activeArticleIndex = 1;
    stopAudio();

    if (graphicIconWrap) graphicIconWrap.textContent = topic.emoji;
    if (topicTypeTag) topicTypeTag.textContent = topic.type || "Research Topic";
    if (articleMonthTag) articleMonthTag.textContent = `📅 ${topic.day || topic.month} Topic`;
    if (articleTitle) articleTitle.textContent = topic.title;
    if (monthConnectionBanner) monthConnectionBanner.innerHTML = `<span>🗓️ <strong>Month Connection:</strong> ${topic.connection}</span>`;
    if (funFactText) funFactText.textContent = topic.funFact;

    if (timelineList) {
      timelineList.innerHTML = "";
      if (topic.timeline) {
        topic.timeline.forEach(item => {
          const li = document.createElement("li");
          li.className = "timeline-item";
          li.textContent = item;
          timelineList.appendChild(li);
        });
      }
    }

    if (tabArticle1) tabArticle1.classList.add("active");
    if (tabArticle2) tabArticle2.classList.remove("active");

    renderCurrentArticle();

    if (paraphraseInput) paraphraseInput.value = "";
    selectedSentencesList = [];
    renderSelectedSentences();
    runPlagiarismCheck();
  }

  function renderCurrentArticle() {
    stopAudio();
    if (!articleBodyProtected || !activeTopic) return;
    
    // Always resolve full article object dynamically
    const freshArticles = getArticlesForTopic(activeTopic);
    if (freshArticles) {
      Object.assign(activeTopic, freshArticles);
    }

    let articleData = (activeArticleIndex === 1) ? activeTopic.article1 : activeTopic.article2;

    articleBodyProtected.innerHTML = "";
    if (!articleData) return;
    
    const subHeading = document.createElement("h3");
    subHeading.className = "article-section-heading";
    subHeading.style.color = "#4f46e5";
    subHeading.textContent = articleData.title;
    articleBodyProtected.appendChild(subHeading);

    articleData.paragraphs.forEach((paragraphSentences) => {
      const pElem = document.createElement("p");
      pElem.className = "article-paragraph";

      paragraphSentences.forEach((sentText) => {
        const span = document.createElement("span");
        span.className = "sentence-item";
        span.innerHTML = sentText + " ";

        if (selectedSentencesList.includes(sentText.trim())) {
          span.classList.add("active-highlight");
        }

        span.addEventListener("click", () => {
          const cleanText = sentText.trim();
          const existingIndex = selectedSentencesList.indexOf(cleanText);

          if (existingIndex >= 0) {
            selectedSentencesList.splice(existingIndex, 1);
            span.classList.remove("active-highlight");
          } else {
            selectedSentencesList.push(cleanText);
            span.classList.add("active-highlight");
          }

          renderSelectedSentences();
        });

        pElem.appendChild(span);
      });

      articleBodyProtected.appendChild(pElem);
    });
  }

  function renderSelectedSentences() {
    if (!focusSentencesContainer) return;
    focusSentencesContainer.innerHTML = "";

    const countElem = document.getElementById("collectedCount");
    if (countElem) countElem.textContent = selectedSentencesList.length;

    if (selectedSentencesList.length === 0) {
      if (focusSentenceBox) focusSentenceBox.classList.remove("has-sentences");
      if (clearSentencesBtn) clearSentencesBtn.style.display = "none";
      if (focusSentencePlaceholder) focusSentencesContainer.appendChild(focusSentencePlaceholder);
      return;
    }

    if (focusSentenceBox) focusSentenceBox.classList.add("has-sentences");
    if (clearSentencesBtn) clearSentencesBtn.style.display = "inline-block";

    selectedSentencesList.forEach((sentText, idx) => {
      const tag = document.createElement("div");
      tag.className = "selected-sentence-tag";
      tag.innerHTML = `
        <span>${idx + 1}. "${sentText}"</span>
        <button class="remove-sent-btn" data-idx="${idx}">&times;</button>
      `;

      tag.querySelector(".remove-sent-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        selectedSentencesList.splice(idx, 1);
        renderSelectedSentences();
        renderCurrentArticle();
      });

      focusSentencesContainer.appendChild(tag);
    });
  }

  function attachCopyProtection() {
    if (articleBodyProtected) {
      articleBodyProtected.addEventListener("copy", (e) => {
        e.preventDefault();
        showCopyToast("🚫 Copying direct article text is disabled. Write in your own words and copy your paraphrase!");
      });
      articleBodyProtected.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    }
  }

  function showCopyToast(msg) {
    if (!pasteToast) return;
    pasteToast.textContent = msg;
    pasteToast.classList.add("show");
    setTimeout(() => {
      pasteToast.classList.remove("show");
    }, 3000);
  }

  function isProperNoun(word) {
    if (!word) return false;
    const cleanWord = word.replace(/[^a-zA-Z]/g, "");
    if (!cleanWord) return false;
    
    const isCapitalized = cleanWord.charAt(0) === cleanWord.charAt(0).toUpperCase() && cleanWord.charAt(0) !== cleanWord.charAt(0).toLowerCase();
    
    const monthsAndDates = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    if (monthsAndDates.includes(cleanWord.toLowerCase())) return true;

    return isCapitalized;
  }

  function runPlagiarismCheck() {
    if (!paraphraseInput || !plagiarismBadge || !plagiarismMsg) return;
    const inputText = paraphraseInput.value.trim();
    
    if (inputText.length < 20) {
      plagiarismBadge.className = "plagiarism-badge badge-original";
      plagiarismBadge.textContent = "Original";
      plagiarismMsg.textContent = "Start typing your paraphrase to test originality. Proper nouns are excluded!";
      return;
    }

    const source1Text = activeTopic.article1.paragraphs.flat().join(" ").replace(/<[^>]*>/g, "");
    const source2Text = activeTopic.article2.paragraphs.flat().join(" ").replace(/<[^>]*>/g, "");
    const fullSourceCombined = `${source1Text} ${source2Text}`;

    const studentRawWords = inputText.split(/\s+/).filter(Boolean);
    
    let maxConsecutiveMatchingWords = 0;
    let currentMatchingStreak = 0;
    let matchingPhraseSnippet = "";
    let tempStreakSnippet = [];

    const normalizeWord = w => w.toLowerCase().replace(/[^a-z0-9]/g, "");
    const sourceNormalizedWords = fullSourceCombined.split(/\s+/).map(normalizeWord).filter(Boolean);

    for (let i = 0; i < studentRawWords.length; i++) {
      const rawWord = studentRawWords[i];
      const normWord = normalizeWord(rawWord);

      if (!normWord) continue;

      if (isProperNoun(rawWord)) {
        continue;
      }

      if (sourceNormalizedWords.includes(normWord)) {
        currentMatchingStreak++;
        tempStreakSnippet.push(rawWord);

        if (currentMatchingStreak > maxConsecutiveMatchingWords) {
          maxConsecutiveMatchingWords = currentMatchingStreak;
          matchingPhraseSnippet = tempStreakSnippet.join(" ");
        }
      } else {
        currentMatchingStreak = 0;
        tempStreakSnippet = [];
      }
    }

    if (maxConsecutiveMatchingWords >= 5) {
      plagiarismBadge.className = "plagiarism-badge badge-danger";
      plagiarismBadge.textContent = "Too Close to Source!";
      plagiarismMsg.innerHTML = `⚠️ <strong>Warning:</strong> You have 5+ consecutive matching words (<em>"${matchingPhraseSnippet}"</em>). Rearrange sentence structure and use your own words!`;
    } else if (maxConsecutiveMatchingWords === 4) {
      plagiarismBadge.className = "plagiarism-badge badge-warning";
      plagiarismBadge.textContent = "Close to Limit (4 Words)";
      plagiarismMsg.innerHTML = `💡 <strong>Tip:</strong> You have 4 matching words in a row. Remember that 5+ matching words will trigger a warning. Proper nouns are ignored!`;
    } else {
      plagiarismBadge.className = "plagiarism-badge badge-original";
      plagiarismBadge.textContent = "Great Originality! ✨";
      plagiarismMsg.textContent = "Awesome work! Proper nouns (names, dates, places) are allowed, and your sentence structure is original.";
    }
  }

  function toggleAudio() {
    if (currentAudioUtterance && window.speechSynthesis.speaking) {
      stopAudio();
    } else {
      startAudio();
    }
  }

  function startAudio() {
    if (!('speechSynthesis' in window)) {
      alert("Sorry, your browser doesn't support text-to-speech audio.");
      return;
    }

    stopAudio();

    let activeArticle = (activeArticleIndex === 1) ? activeTopic.article1 : activeTopic.article2;

    const plainText = activeArticle.paragraphs.flat().join(" ").replace(/<[^>]*>/g, "");
    const speechText = `${activeTopic.title}. ${activeArticle.title}. ${plainText}`;

    currentAudioUtterance = new SpeechSynthesisUtterance(speechText);
    currentAudioUtterance.rate = 0.9;
    currentAudioUtterance.pitch = 1.0;

    currentAudioUtterance.onstart = () => {
      if (audioReadBtn) audioReadBtn.classList.add("playing");
      if (audioIcon) audioIcon.textContent = "⏹️";
      if (audioText) audioText.textContent = "Stop Audio";
    };

    currentAudioUtterance.onend = () => {
      stopAudio();
    };

    currentAudioUtterance.onerror = () => {
      stopAudio();
    };

    window.speechSynthesis.speak(currentAudioUtterance);
  }

  function stopAudio() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (audioReadBtn) audioReadBtn.classList.remove("playing");
    if (audioIcon) audioIcon.textContent = "🔊";
    if (audioText) audioText.textContent = "Read Aloud";
    currentAudioUtterance = null;
  }

  function copyWorkToClipboard() {
    if (!paraphraseInput) return;
    const text = paraphraseInput.value.trim();
    if (!text) {
      alert("Please write your paraphrase before copying!");
      return;
    }

    const topicTitle = activeTopic ? activeTopic.title : "Talking Calendar Topic";
    const topicMonth = activeTopic ? (activeTopic.day || activeTopic.month) : "";
    
    let copyText = `Talking Calendar Research: ${topicTitle} (${topicMonth})
`;
    copyText += `--------------------------------------------------------

`;
    if (selectedSentencesList.length > 0) {
      copyText += `Key Fact Sentences Highlighted:
`;
      selectedSentencesList.forEach((s, i) => {
        copyText += `${i+1}. "${s}"
`;
      });
      copyText += `
`;
    }
    copyText += `Student Paraphrase Summary:
${text}
`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(copyText).then(() => {
        showCopyToast("📋 Copied to clipboard!");
      }).catch(() => {
        fallbackCopy(copyText);
      });
    } else {
      fallbackCopy(copyText);
    }
  }

  function fallbackCopy(str) {
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = str;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    showCopyToast("📋 Copied to clipboard!");
  }

  function triggerPrintWorksheet() {
    const dateElem = document.getElementById("printDate");
    const titleElem = document.getElementById("printTitle");
    const collectedElem = document.getElementById("printCollectedSentences");
    const paraphraseElem = document.getElementById("printParaphraseText");

    if (dateElem) dateElem.textContent = new Date().toLocaleDateString();
    if (titleElem) titleElem.textContent = activeTopic ? activeTopic.title : "Talking Calendar Research";
    
    if (collectedElem) {
      if (selectedSentencesList.length === 0) {
        collectedElem.textContent = "(No sentences highlighted)";
      } else {
        collectedElem.innerHTML = selectedSentencesList.map((s, i) => `<p style="margin-bottom:0.4rem;"><strong>${i+1}.</strong> "${s}"</p>`).join("");
      }
    }

    if (paraphraseElem) {
      paraphraseElem.textContent = (paraphraseInput ? paraphraseInput.value.trim() : "") || "(No paraphrase written yet)";
    }

    window.print();
  }

  function attachEventListeners() {
    if (monthSelect) {
      monthSelect.addEventListener("change", () => {
        selectedTopicObj = null;
        disableLaunchButton();
        const filterVal = topicSearchInput ? topicSearchInput.value.trim() : "";
        renderWelcomeTopicChips(filterVal);
      });
    }

    if (topicSearchInput) {
      topicSearchInput.addEventListener("input", (e) => {
        renderWelcomeTopicChips(e.target.value.trim());
      });
    }

    if (launchStudioBtn) {
      launchStudioBtn.addEventListener("click", switchToStudioView);
    }

    if (backToTopicsBtn) {
      backToTopicsBtn.addEventListener("click", switchToWelcomeView);
    }

    if (homeLogoBtn) {
      homeLogoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        switchToWelcomeView();
      });
    }

    if (tabArticle1) {
      tabArticle1.addEventListener("click", () => {
        activeArticleIndex = 1;
        tabArticle1.classList.add("active");
        if (tabArticle2) tabArticle2.classList.remove("active");
        renderCurrentArticle();
      });
    }

    if (tabArticle2) {
      tabArticle2.addEventListener("click", () => {
        activeArticleIndex = 2;
        tabArticle2.classList.add("active");
        if (tabArticle1) tabArticle1.classList.remove("active");
        renderCurrentArticle();
      });
    }

    if (clearSentencesBtn) {
      clearSentencesBtn.addEventListener("click", () => {
        selectedSentencesList = [];
        renderSelectedSentences();
        renderCurrentArticle();
      });
    }

    if (audioReadBtn) audioReadBtn.addEventListener("click", toggleAudio);
    attachCopyProtection();
    if (paraphraseInput) paraphraseInput.addEventListener("input", runPlagiarismCheck);

    document.querySelectorAll(".starter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const starter = chip.getAttribute("data-starter");
        if (paraphraseInput) {
          paraphraseInput.value = starter + paraphraseInput.value;
          paraphraseInput.focus();
          runPlagiarismCheck();
        }
      });
    });

    if (copyParaphraseBtn) copyParaphraseBtn.addEventListener("click", copyWorkToClipboard);
    if (printWorksheetBtn) printWorksheetBtn.addEventListener("click", triggerPrintWorksheet);
  }

  document.addEventListener("DOMContentLoaded", init);

})();
