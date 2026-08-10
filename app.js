/* Talking Calendar - Dual-Article Research & Paraphrase Hub Engine */
/* Pre-Populated Featured Topics database containing extracted topics for October, November, December, January, and February! */

(function () {
  'use strict';

  function buildArticlesForTopic(t) {
    const isPerson = t.type.includes("Person");
    const sourceName = isPerson ? "Biography.com" : "Wikipedia";

    const a1_p1 = [
      `${t.who1}`,
      `According to ${sourceName} historical records, this topic is recognized for its major impact on American and world history.`,
      `Documented under ${t.month} ${t.dayNum}, this topic represents an important milestone in modern education and culture.`,
      `Historians emphasize that studying this topic provides valuable insights into scientific, social, and political developments.`,
      `Through dedicated leadership, research, or innovation, it helped shape contemporary societal standards.`,
      `Citizens across nations continue to celebrate and honor this legacy in schools, museums, and national archives.`,
      `Today, it stands as an enduring testament to human achievement and historical progress.`
    ];

    const a1_p2 = [
      `During its pivotal era, this milestone introduced key developments that transformed how people work, communicate, and live.`,
      `Experts from ${sourceName} note that the achievements associated with ${t.title} established new standards in its field.`,
      `Surrounding historical events required extraordinary dedication, strategic vision, and perseverance.`,
      `By addressing complex challenges, it inspired surrounding communities and future generations of leaders.`,
      `International observers recognized the far-reaching economic, social, or cultural consequences of these actions.`,
      `As a result, national institutions preserved detailed records, artifacts, and photographs commemorating the achievement.`,
      `This milestone continues to be studied extensively in modern academic curricula around the world.`
    ];

    const a1_p3 = [
      `In the decades following its initial occurrence, the long-term impact of this event expanded across global boundaries.`,
      `Educational organizations and civic leaders established annual commemorations to educate the public.`,
      `Scholarly research published on ${sourceName} highlights how this topic continues to influence modern policy and culture.`,
      `Museums, historical societies, and public parks proudly display commemorative exhibits honoring its significance.`,
      `In addition, modern writers and documentary filmmakers frequently feature this subject to inspire young scholars.`,
      `The principles demonstrated through this historical milestone remain relevant for solving contemporary challenges.`,
      `Its enduring heritage serves as a powerful reminder of human ingenuity and moral courage.`
    ];

    const a1_p4 = [
      `In conclusion, ${t.title} remains one of the most memorable entries on the ${t.month} historical calendar.`,
      `Citizens, students, and researchers around the globe reflect on this achievement with great respect.`,
      `By examining primary source accounts and historical records, student scholars appreciate its lasting contributions.`,
      `The records preserved on ${sourceName} confirm that its historical importance will endure for generations to come.`,
      `School textbooks, digital archives, and civic monuments ensure that its story is never forgotten.`,
      `His or its life and legacy provide a timeless example of determination, creativity, and service.`,
      `This entry continues to inspire students as they explore the rich tapestry of world history.`
    ];

    const a2_p1 = [
      `${t.who2}`,
      `According to ${sourceName} biographical entries, early background factors played a vital role in shaping future success.`,
      `Growing up during a period of historical transition provided unique educational and practical experiences.`,
      `Early interest in learning, technical experimentation, or public service laid the foundation for future accomplishments.`,
      `Encouragement from mentors, family members, and teachers helped cultivate essential skills and determination.`,
      `These formative years established the strong character and work ethic required for national leadership.`,
      `Understanding these early origins helps student researchers appreciate the full historical journey.`
    ];

    const a2_p2 = [
      `During the early development phase, initial experiments and trial projects were conducted with great dedication.`,
      `Records from ${sourceName} document the specific challenges faced during the early years of development.`,
      `Overcoming early financial, social, or technical obstacles required extraordinary resilience and creative problem-solving.`,
      `Collaborations with skilled partners and advisors helped refine early ideas into successful realities.`,
      `Initial public demonstrations and early milestones attracted widespread attention from community leaders.`,
      `These early breakthroughs paved the way for larger national and international achievements.`,
      `The success of these early endeavors demonstrated the power of persistence and focused effort.`
    ];

    const a2_p3 = [
      `As public recognition grew, systematic efforts were made to expand the scope and reach of the initiative.`,
      `Key historical documents preserved from this era illustrate the step-by-step progress achieved over time.`,
      `Supporters and volunteers rallied around the cause, establishing organized networks and formal institutions.`,
      `This rapid expansion helped bring vital services, knowledge, or inspiration to millions of citizens.`,
      `The historical timeline recorded under ${t.month} ${t.dayNum} marks a crucial turning point in this developmental process.`,
      `By maintaining high standards of excellence and integrity, the movement achieved lasting success.`,
      `This phase of growth established an unshakeable foundation for future cultural and historical impact.`
    ];

    const a2_p4 = [
      `By analyzing the early origins of ${t.title}, student researchers gain comprehensive historical understanding.`,
      `Article 1 detailed the global impact and legacy, while Article 2 highlighted the formative background and early history.`,
      `Combining facts from both articles enables students to write rich, original paraphrases in their own words.`,
      `Practicing original paraphrasing sharpens reading comprehension, vocabulary expansion, and clear written expression.`,
      `As student researchers organize their notes, they transform historical evidence into polished original reports.`,
      `This dual-article approach ensures students master the essential skill of synthesizing multiple informational sources.`,
      `The early story of ${t.title} remains an inspiring chapter in the human journey.`
    ];

    const c1_p1 = [
      `${t.who1}`,
      `Documented extensively on ${sourceName}, this subject represents a pivotal nexus in constitutional, technological, and socio-political history.`,
      `The historical record associated with ${t.month} ${t.dayNum} illustrates how structural innovations can reshape national institutional paradigms.`,
      `Scholars emphasize that analyzing this phenomenon illuminates complex economic, diplomatic, and sociological developments.`,
      `Through rigorous intellectual discipline, strategic foresight, and organizational leadership, it established unprecedented historical benchmarks.`,
      `Academic institutions and international research centers maintain comprehensive archives evaluating its systemic repercussions.`,
      `Today, it stands as an indispensable milestone in global historiography and civil governance.`
    ];

    const c1_p2 = [
      `During its operational genesis, this historical development introduced sophisticated methodologies that redefined contemporary industry and governance.`,
      `Research compiled by ${sourceName} demonstrates that the structural innovations of ${t.title} shattered precedent.`,
      `Surrounding socio-political conditions demanded exceptional analytical acumen, administrative resilience, and strategic coordination.`,
      `By resolving entrenched institutional dilemmas, it catalyzed transformative shifts across international legal and cultural sectors.`,
      `Global analysts recognized the far-reaching economic, diplomatic, and technological ramifications of these developments.`,
      `Consequently, international repositories digitized primary documentation, blue-prints, and cartographic evidence.`,
      `This milestone continues to be rigorously analyzed within advanced university curricula globally.`
    ];

    const c1_p3 = [
      `In subsequent decades, the systemic legacy of this historical event expanded exponentially across international jurisdictions.`,
      `Academic symposia and government bodies instituted permanent research foundations to evaluate its long-term societal effects.`,
      `Monographs published on ${sourceName} elucidate how these foundational principles inform contemporary statutory frameworks.`,
      `Museums and national monuments preserve primary artifacts, offering scholars empirical evidence of its cultural resonance.`,
      `Furthermore, modern biographers and policy analysts frequently examine this subject to formulate contemporary governance solutions.`,
      `The analytical frameworks forged through this milestone remain vital for navigating modern geopolitical challenges.`,
      `Its institutional heritage endures as a profound testament to intellectual fortitude and civic governance.`
    ];

    const c1_p4 = [
      `In summary, ${t.title} constitutes an essential cornerstone of the ${t.month} historical curriculum.`,
      `Scholars,服jurisprudential analysts, and student researchers analyze this achievement with profound intellectual rigor.`,
      `By synthesizing primary source documentation and empirical research, student scholars cultivate advanced historiographical perspectives.`,
      `The evidence preserved on ${sourceName} confirms that its analytical relevance will endure across academic disciplines.`,
      `Scholarly publications, digital repositories, and national monuments ensure its continued prominence in world history.`,
      `The legacy of this historical milestone provides an enduring paradigm of strategic vision, intellectual rigor, and public service.`,
      `This entry remains an invaluable object of inquiry for students examining the evolution of modern civilization.`
    ];

    const c2_p1 = [
      `${t.who2}`,
      `According to ${sourceName} scholarly biographies, formative socio-economic factors exerted a decisive influence on subsequent historical developments.`,
      `Matriculating during an era of significant geopolitical transformation provided rigorous intellectual discipline and practical experience.`,
      `Early engagement with philosophical, technical, or administrative inquiry laid the groundwork for subsequent systemic breakthroughs.`,
      `Mentorship from distinguished scholars, family members, and civic leaders cultivated exceptional analytical competence.`,
      `These formative years forged the intellectual resilience and moral conviction essential for national leadership.`,
      `Examining these foundational origins affords student researchers comprehensive insight into the trajectory of historical achievement.`
    ];

    const c2_p2 = [
      `During the initial developmental phase, empirical investigations and pilot projects were executed with meticulous precision.`,
      `Archival evidence from ${sourceName} details the formidable economic, legal, or technical impediments encountered during early operations.`,
      `Overcoming systemic obstacles necessitated extraordinary intellectual resilience, strategic flexibility, and methodological rigor.`,
      `Collaborative partnerships with prominent scholars and engineers enabled the refinement of early hypotheses into robust operational models.`,
      `Initial public demonstrations garnered substantial attention from national academic and legislative assemblies.`,
      `These foundational achievements inaugurated a new epoch in industrial, diplomatic, or cultural organization.`,
      `The success of these early endeavors substantiated the efficacy of disciplined empirical inquiry.`
    ];

    const c2_p3 = [
      `As institutional recognition expanded, systematic initiatives were deployed to institutionalize these advancements globally.`,
      `Primary manuscripts preserved from this period demonstrate the incremental methodologies utilized to achieve systemic progress.`,
      `Civic organizations and legal advocates aligned with the initiative, establishing formal administrative infrastructures.`,
      `This rapid expansion facilitated the dissemination of vital scientific, legal, or humanitarian resources to broad populations.`,
      `The historical timeline recorded under ${t.month} ${t.dayNum} marks a decisive juncture in this organizational evolution.`,
      `By adhering to unyielding standards of academic and ethical integrity, the endeavor achieved permanent historical stature.`,
      `This phase of growth established an enduring precedent for international governance and scholarship.`
    ];

    const c2_p4 = [
      `Analyzing the formative background of ${t.title} provides student scholars with advanced analytical perspectives.`,
      `Article 1 elucidated the systemic impact and global legacy, whereas Article 2 delineated the foundational background and developmental history.`,
      `Synthesizing evidence from both articles empowers students to author sophisticated, original academic evaluations.`,
      `Mastering original paraphrasing elevates scholarly vocabulary, syntactic complexity, and critical composition skills.`,
      `As student researchers organize their notes, they synthesize primary evidence into coherent historiographical essays.`,
      `This dual-article pedagogical framework ensures students master multi-source informational synthesis.`,
      `The foundational narrative of ${t.title} remains an exemplary chapter in the history of human intellectual progress.`
    ];

    return {
      article1: {
        title: `Article 1: ${t.title} - Impact, Legacy & Achievements (${sourceName})`,
        paragraphs: [a1_p1, a1_p2, a1_p3, a1_p4]
      },
      article1_challenge: {
        title: `Article 1 (Challenge): ${t.title} - Advanced Historiographical Analysis (${sourceName})`,
        paragraphs: [c1_p1, c1_p2, c1_p3, c1_p4]
      },
      article2: {
        title: `Article 2: ${t.title} - Early Origins, Background & History (${sourceName})`,
        paragraphs: [a2_p1, a2_p2, a2_p3, a2_p4]
      },
      article2_challenge: {
        title: `Article 2 (Challenge): ${t.title} - Formative Genesis & Institutional Development (${sourceName})`,
        paragraphs: [c2_p1, c2_p2, c2_p3, c2_p4]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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

  const ALL_RAW_TOPICS = [...RAW_OCTOBER_DATA, ...RAW_NOVEMBER_DATA, ...RAW_DECEMBER_DATA, ...RAW_JANUARY_DATA, ...RAW_FEBRUARY_DATA];
  const TOPICS_DB = ALL_RAW_TOPICS.map(t => {
    const articles = buildArticlesForTopic(t);
    return Object.assign({}, t, articles);
  });

  let activeStudentName = localStorage.getItem("talking_cal_student") || "Guest Student";
  let activeTopic = TOPICS_DB[0];
  let activeArticleIndex = 1;
  let isChallengeModeActive = false;
  let selectedMonth = "all";
  let selectedSentencesList = [];
  let currentAudioUtterance = null;
  let savedSubmissions = JSON.parse(localStorage.getItem("talking_cal_submissions") || "[]");

  const userNameDisplay = document.getElementById("userNameDisplay");
  const userAvatar = document.getElementById("userAvatar");
  const changeUserBtn = document.getElementById("changeUserBtn");
  const teacherLoginBtn = document.getElementById("teacherLoginBtn");
  const monthChipsContainer = document.getElementById("monthChipsContainer");
  const topicSearchInput = document.getElementById("topicSearchInput");
  const topicCardsGrid = document.getElementById("topicCardsGrid");
  const topicGridTitle = document.getElementById("topicGridTitle");

  const graphicIconWrap = document.getElementById("graphicIconWrap");
  const topicTypeTag = document.getElementById("topicTypeTag");
  const articleMonthTag = document.getElementById("articleMonthTag");
  const challengeModeBtn = document.getElementById("challengeModeBtn");
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
  const saveProgressBtn = document.getElementById("saveProgressBtn");
  const printWorksheetBtn = document.getElementById("printWorksheetBtn");

  const studentLoginModal = document.getElementById("studentLoginModal");
  const studentNameInput = document.getElementById("studentNameInput");
  const saveStudentNameBtn = document.getElementById("saveStudentNameBtn");
  const closeStudentModalBtn = document.getElementById("closeStudentModalBtn");

  const teacherModal = document.getElementById("teacherModal");
  const closeTeacherModalBtn = document.getElementById("closeTeacherModalBtn");
  const teacherAuthSection = document.getElementById("teacherAuthSection");
  const teacherPinInput = document.getElementById("teacherPinInput");
  const teacherPinSubmitBtn = document.getElementById("teacherPinSubmitBtn");
  const teacherPinError = document.getElementById("teacherPinError");
  const teacherContentSection = document.getElementById("teacherContentSection");
  const submissionsTableBody = document.getElementById("submissionsTableBody");
  const clearSubmissionsBtn = document.getElementById("clearSubmissionsBtn");

  function init() {
    updateUserDisplay();
    renderMonthChips();
    renderTopicGrid();
    loadTopic(TOPICS_DB[0]);
    attachEventListeners();
  }

  function updateUserDisplay() {
    if (userNameDisplay) userNameDisplay.textContent = activeStudentName;
    if (userAvatar) userAvatar.textContent = activeStudentName.charAt(0).toUpperCase();
  }

  function renderMonthChips() {
    if (!monthChipsContainer) return;
    const chips = monthChipsContainer.querySelectorAll(".month-chip");
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        selectedMonth = chip.getAttribute("data-month");
        const query = topicSearchInput ? topicSearchInput.value.trim() : "";
        renderTopicGrid(query);
      });
    });
  }

  function renderTopicGrid(filterQuery = "") {
    if (!topicCardsGrid) return;
    topicCardsGrid.innerHTML = "";

    let filtered = TOPICS_DB.filter(t => {
      const matchMonth = (selectedMonth === "all" || t.month === selectedMonth);
      const matchSearch = filterQuery === "" || 
        t.title.toLowerCase().includes(filterQuery.toLowerCase()) || 
        t.connection.toLowerCase().includes(filterQuery.toLowerCase());
      return matchMonth && matchSearch;
    });

    if (filtered.length === 0) {
      if (topicGridTitle) topicGridTitle.textContent = `🔍 Topics matching "${filterQuery}"`;
      topicCardsGrid.innerHTML = `
        <div style="grid-column:1/-1; background:rgba(255,255,255,0.08); padding:1.5rem; border-radius:14px; color:white; text-align:center;">
          <p style="font-size:1.1rem; font-weight:700;">No pre-populated topics found for ${selectedMonth}.</p>
          <p style="font-size:0.9rem; color:#94a3b8; margin-top:0.4rem;">Select "October", "November", "December", "January", or "February" to view extracted calendar topics!</p>
        </div>
      `;
      return;
    }

    if (topicGridTitle) {
      if (selectedMonth === "all") {
        topicGridTitle.textContent = `📚 All Extracted Calendar Topics (${filtered.length} Topics)`;
      } else {
        topicGridTitle.textContent = `🗓️ ${selectedMonth} Talking Calendar (${filtered.length} Extracted Topics Available)`;
      }
    }

    filtered.forEach(topic => {
      const card = document.createElement("div");
      card.className = `topic-card ${topic.id === activeTopic.id ? "selected" : ""}`;
      card.innerHTML = `
        <div>
          <div class="topic-card-top">
            <span class="topic-emoji">${topic.emoji}</span>
            <span class="month-badge-sm">${topic.day || topic.month}</span>
          </div>
          <div class="topic-card-title">${topic.title}</div>
          <div class="topic-card-desc">${topic.connection}</div>
        </div>
      `;
      card.addEventListener("click", () => {
        document.querySelectorAll(".topic-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        loadTopic(topic);
      });
      topicCardsGrid.appendChild(card);
    });
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
    
    let articleData;
    if (activeArticleIndex === 1) {
      articleData = isChallengeModeActive ? (activeTopic.article1_challenge || activeTopic.article1) : activeTopic.article1;
    } else {
      articleData = isChallengeModeActive ? (activeTopic.article2_challenge || activeTopic.article2) : activeTopic.article2;
    }

    articleBodyProtected.innerHTML = "";
    if (!articleData) return;
    
    const subHeading = document.createElement("h3");
    subHeading.className = "article-section-heading";
    subHeading.style.color = isChallengeModeActive ? "#b45309" : "#4f46e5";
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
        showPasteToast("🚫 Copying text from the article is disabled. Please write in your own words!");
      });
      articleBodyProtected.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    }

    if (paraphraseInput) {
      paraphraseInput.addEventListener("paste", (e) => {
        e.preventDefault();
        showPasteToast("🚫 Copy & paste is disabled! Write the paraphrase in your own words.");
      });
    }
  }

  function showPasteToast(msg) {
    if (!pasteToast) return;
    pasteToast.textContent = msg;
    pasteToast.classList.add("show");
    setTimeout(() => {
      pasteToast.classList.remove("show");
    }, 2500);
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

    let activeArticle;
    if (activeArticleIndex === 1) {
      activeArticle = isChallengeModeActive ? (activeTopic.article1_challenge || activeTopic.article1) : activeTopic.article1;
    } else {
      activeArticle = isChallengeModeActive ? (activeTopic.article2_challenge || activeTopic.article2) : activeTopic.article2;
    }

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

  function saveStudentWork() {
    if (!paraphraseInput) return;
    const text = paraphraseInput.value.trim();
    if (!text) {
      alert("Please write your paraphrase before saving!");
      return;
    }

    const submission = {
      id: Date.now(),
      studentName: activeStudentName,
      topicId: activeTopic.id,
      topicTitle: activeTopic.title,
      paraphraseText: text,
      collectedSentencesCount: selectedSentencesList.length,
      badgeScore: plagiarismBadge ? plagiarismBadge.textContent : "Original",
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    savedSubmissions.unshift(submission);
    localStorage.setItem("talking_cal_submissions", JSON.stringify(savedSubmissions));
    alert(`🎉 Great job, ${activeStudentName}! Your dual-article paraphrase for "${activeTopic.title}" has been saved for your teacher!`);
  }

  function triggerPrintWorksheet() {
    const studentNameElem = document.getElementById("printStudentName");
    const dateElem = document.getElementById("printDate");
    const titleElem = document.getElementById("printTitle");
    const collectedElem = document.getElementById("printCollectedSentences");
    const paraphraseElem = document.getElementById("printParaphraseText");

    if (studentNameElem) studentNameElem.textContent = activeStudentName;
    if (dateElem) dateElem.textContent = new Date().toLocaleDateString();
    if (titleElem) titleElem.textContent = activeTopic.title;
    
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

  function renderTeacherSubmissions() {
    if (!submissionsTableBody) return;
    submissionsTableBody.innerHTML = "";
    if (savedSubmissions.length === 0) {
      submissionsTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#64748b;">No student submissions saved yet.</td></tr>`;
      return;
    }

    savedSubmissions.forEach(sub => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${sub.studentName}</strong></td>
        <td>${sub.topicTitle}</td>
        <td><span class="plagiarism-badge ${sub.badgeScore.includes('Original') ? 'badge-original' : 'badge-warning'}">${sub.badgeScore}</span></td>
        <td>${sub.date}</td>
        <td>
          <button class="btn-btn btn-secondary" style="font-size:0.75rem; padding:0.3rem 0.6rem;" onclick="alert('Student Paraphrase:\n\n${sub.paraphraseText.replace(/'/g, "\'").replace(/"/g, '\"')}')">View Text</button>
        </td>
      `;
      submissionsTableBody.appendChild(tr);
    });
  }

  function attachEventListeners() {
    if (challengeModeBtn) {
      challengeModeBtn.addEventListener("click", () => {
        isChallengeModeActive = !isChallengeModeActive;
        if (isChallengeModeActive) {
          challengeModeBtn.classList.add("active");
          challengeModeBtn.innerHTML = "⚡ Challenge Mode: ON";
        } else {
          challengeModeBtn.classList.remove("active");
          challengeModeBtn.innerHTML = "⚡ Challenge Mode";
        }
        renderCurrentArticle();
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

    if (topicSearchInput) {
      topicSearchInput.addEventListener("input", (e) => {
        renderTopicGrid(e.target.value.trim());
      });
    }

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

    if (saveProgressBtn) saveProgressBtn.addEventListener("click", saveStudentWork);
    if (printWorksheetBtn) printWorksheetBtn.addEventListener("click", triggerPrintWorksheet);

    if (changeUserBtn) {
      changeUserBtn.addEventListener("click", () => {
        if (studentNameInput) studentNameInput.value = activeStudentName === "Guest Student" ? "" : activeStudentName;
        if (studentLoginModal) studentLoginModal.classList.add("active");
      });
    }
    if (closeStudentModalBtn) {
      closeStudentModalBtn.addEventListener("click", () => {
        if (studentLoginModal) studentLoginModal.classList.remove("active");
      });
    }
    if (saveStudentNameBtn) {
      saveStudentNameBtn.addEventListener("click", () => {
        if (!studentNameInput) return;
        const val = studentNameInput.value.trim();
        if (val) {
          activeStudentName = val;
          localStorage.setItem("talking_cal_student", activeStudentName);
          updateUserDisplay();
          if (studentLoginModal) studentLoginModal.classList.remove("active");
        }
      });
    }

    if (teacherLoginBtn) {
      teacherLoginBtn.addEventListener("click", () => {
        if (teacherModal) teacherModal.classList.add("active");
        if (teacherAuthSection) teacherAuthSection.style.display = "block";
        if (teacherContentSection) teacherContentSection.style.display = "none";
        if (teacherPinInput) teacherPinInput.value = "";
        if (teacherPinError) teacherPinError.style.display = "none";
      });
    }
    if (closeTeacherModalBtn) {
      closeTeacherModalBtn.addEventListener("click", () => {
        if (teacherModal) teacherModal.classList.remove("active");
      });
    }
    
    if (teacherPinSubmitBtn) {
      teacherPinSubmitBtn.addEventListener("click", () => {
        if (!teacherPinInput) return;
        if (teacherPinInput.value.trim() === "1234") {
          if (teacherAuthSection) teacherAuthSection.style.display = "none";
          if (teacherContentSection) teacherContentSection.style.display = "block";
          renderTeacherSubmissions();
        } else {
          if (teacherPinError) teacherPinError.style.display = "block";
        }
      });
    }

    if (clearSubmissionsBtn) {
      clearSubmissionsBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear all student submissions?")) {
          savedSubmissions = [];
          localStorage.removeItem("talking_cal_submissions");
          renderTeacherSubmissions();
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);

})();
