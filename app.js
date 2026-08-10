/* Talking Calendar - Dual-Article Research & Paraphrase Hub Engine */
/* Pre-Populated Featured Topics database containing extracted topics for October, November, and January! */

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

  const ALL_RAW_TOPICS = [...RAW_OCTOBER_DATA, ...RAW_NOVEMBER_DATA, ...RAW_JANUARY_DATA];
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
          <p style="font-size:0.9rem; color:#94a3b8; margin-top:0.4rem;">Select "October", "November", or "January" to view extracted calendar topics!</p>
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
