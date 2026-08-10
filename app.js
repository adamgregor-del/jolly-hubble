/* Talking Calendar - Dual-Article Research & Paraphrase Hub Engine */
/* Pre-Populated Featured Topics database containing ALL 47 October calendar topics extracted from the document! */

(function () {
  'use strict';

  // Generator helper to build 4-paragraph dual articles (6+ sentences per paragraph) for any topic
  function buildArticlesForTopic(t) {
    const isPerson = t.type.includes("Person");
    const sourceName = isPerson ? "Biography.com" : "Wikipedia";

    // Article 1: Modern Impact, Real-World Legacy & Major Accomplishments
    const a1_p1 = [
      `${t.who1}`,
      `According to ${sourceName} historical records, this topic is recognized for its major impact on American and world history.`,
      `Documented under ${t.day}, this topic represents an important milestone in modern education and culture.`,
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
      `In conclusion, ${t.title} remains one of the most memorable entries on the October historical calendar.`,
      `Citizens, students, and researchers around the globe reflect on this achievement with great respect.`,
      `By examining primary source accounts and historical records, student scholars appreciate its lasting contributions.`,
      `The records preserved on ${sourceName} confirm that its historical importance will endure for generations to come.`,
      `School textbooks, digital archives, and civic monuments ensure that its story is never forgotten.`,
      `His or its life and legacy provide a timeless example of determination, creativity, and service.`,
      `This entry continues to inspire students as they explore the rich tapestry of world history.`
    ];

    // Article 2: Formative Origins, Early History & Background
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
      `The historical timeline recorded under ${t.day} marks a crucial turning point in this developmental process.`,
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

    // Challenge Mode Articles (7th-8th Grade level)
    const c1_p1 = [
      `${t.who1}`,
      `Documented extensively on ${sourceName}, this subject represents a pivotal nexus in constitutional, technological, and socio-political history.`,
      `The historical record associated with ${t.day} illustrates how structural innovations can reshape national institutional paradigms.`,
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
      `Furthermore, modern bio-graphers and policy analysts frequently examine this subject to formulate contemporary governance solutions.`,
      `The analytical frameworks forged through this milestone remain vital for navigating modern geopolitical challenges.`,
      `Its institutional heritage endures as a profound testament to intellectual fortitude and civic governance.`
    ];

    const c1_p4 = [
      `In summary, ${t.title} constitutes an essential cornerstone of the October historical curriculum.`,
      `Scholars, jurisprudential analysts, and student researchers analyze this achievement with profound intellectual rigor.`,
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
      `The historical timeline recorded under ${t.day} marks a decisive juncture in this organizational evolution.`,
      `By adhering to unyielding standards of academic and ethical integrity, the endeavor achieved permanent historical stature.`,
      `This phase of institutional growth established an enduring precedent for international governance and scholarship.`
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

  // --- TOPICS DATABASE SETUP (ALL 47 OCTOBER PDF TOPICS INCLUDED) ---
  const RAW_OCTOBER_DATA = [
    { id: "henry-ford", title: "Henry Ford introduces Model T (1908)", type: "Person (Biography.com)", month: "October", day: "October 1", connection: "Introduced the Model T automobile on October 1, 1908!", emoji: "🚗", funFact: "According to Biography.com, Henry Ford introduced the moving assembly line in 1913, reducing Model T build time from 12 hours to 93 minutes!", who1: "Henry Ford was a legendary American industrialist and founder of the Ford Motor Company who revolutionized global manufacturing by introducing the moving assembly line.", who2: "Henry Ford was an ambitious engineer born on a Michigan farm whose early passion for steam engines inspired him to build his first gasoline Quadricycle.", timeline: ["1863 - Born on a farm in Dearborn, Michigan on July 30", "1896 - Built his first gasoline vehicle, the Quadricycle, in a shed behind his home", "1903 - Founded the Ford Motor Company in Detroit, Michigan", "1908 - Introduced the historic Model T automobile on October 1", "1913 - Installed the world's first moving assembly line for cars"] },
    { id: "peanuts-comic-strip", title: "Peanuts Comic Strip first published (1950)", type: "Event / Culture (Wikipedia)", month: "October", day: "October 2", connection: "First published in national newspapers on October 2, 1950!", emoji: "🎨", funFact: "According to Wikipedia, Charles M. Schulz drew all 17,897 Peanuts comic strips by himself over 50 years without using assistants!", who1: "Peanuts is an iconic American comic strip created by Charles M. Schulz that became one of the most influential daily newspaper strips in global media history.", who2: "Peanuts debuted on October 2, 1950, when cartoonist Charles M. Schulz introduced Charlie Brown, Snoopy, and their friends in seven national newspapers.", timeline: ["1950 - Peanuts comic strip debuts in seven daily newspapers on October 2", "1965 - 'A Charlie Brown Christmas' animated television special premieres", "1969 - Apollo 10 astronauts name their lunar module 'Snoopy'", "2000 - Charles M. Schulz draws the final Sunday strip after 50 years", "2015 - 'The Peanuts Movie' released worldwide in modern 3D animation"] },
    { id: "mohandas-gandhi", title: "Mohandas Gandhi (b. 1869)", type: "Person (Biography.com)", month: "October", day: "October 2", connection: "Born on October 2, 1869, commemorated as International Non-Violence Day!", emoji: "🕊️", funFact: "According to Biography.com, Gandhi led the 240-mile Salt March in 1930 and inspired civil rights leaders worldwide, including Dr. Martin Luther King Jr. and Nelson Mandela!", who1: "Mohandas Gandhi, lovingly known as Mahatma, was an inspirational Indian lawyer and anti-colonial leader who pioneered nonviolent civil disobedience to win India's independence.", who2: "Mohandas Gandhi was born in coastal India into a devout Hindu family before traveling to London to study law and beginning his early civil rights work in South Africa.", timeline: ["1869 - Born in Porbandar, India on October 2", "1893 - Traveled to South Africa, developing nonviolent resistance methods", "1915 - Returned to India and assumed leadership of the Indian National Congress", "1930 - Led the historic 240-mile Salt March protesting salt tariffs", "1947 - Achieved official Indian independence from British colonial rule"] },
    { id: "sos-established", title: "SOS established (1906)", type: "Event / History (Wikipedia)", month: "October", day: "October 3", connection: "Adopted as the official international distress signal on October 3, 1906!", emoji: "📡", funFact: "According to Wikipedia, SOS was chosen because its Morse code pattern (... --- ...) is unmistakable and easy to transmit in maritime emergencies!", who1: "SOS is the universally recognized international Morse code distress signal adopted by the International Radiotelegraph Convention in 1906 to safeguard ships at sea.", who2: "The SOS distress signal was officially established on October 3, 1906, at the International Radiotelegraph Conference in Berlin, Germany.", timeline: ["1906 - Adopted as the official maritime distress signal on October 3", "1908 - Took official effect worldwide on July 1", "1909 - First used in an emergency by the steamship SS Arapahoe", "1912 - Transmitted by the RMS Titanic during its famous disaster", "1999 - Replaced by global satellite maritime distress communication systems"] },
    { id: "robert-lawson", title: "Robert Lawson, author (b. 1892)", type: "Person (Biography.com)", month: "October", day: "October 4", connection: "Born on October 4, 1892, winning both the Newbery and Caldecott Medals!", emoji: "📚", funFact: "According to Biography.com, Robert Lawson is the only author and illustrator in American history to win both the Newbery Medal and the Caldecott Medal!", who1: "Robert Lawson was an acclaimed American author and illustrator of children's literature who wrote classics such as 'Ben and Me' and 'Rabbit Hill.'", who2: "Robert Lawson was born in New York City on October 4, 1892, studying commercial illustration at the New York School of Fine and Applied Art.", timeline: ["1892 - Born in New York City on October 4", "1936 - Illustrated the famous children's classic 'The Story of Ferdinand'", "1939 - Published 'Ben and Me,' a humorous story told from a mouse's perspective", "1941 - Awarded the Caldecott Medal for 'They Were Strong and Good'", "1945 - Awarded the Newbery Medal for 'Rabbit Hill'"] },
    { id: "sputnik-1", title: "Sputnik I launched (1957)", type: "Event / Space (Wikipedia)", month: "October", day: "October 4", connection: "Launched into Earth orbit on October 4, 1957, beginning the Space Age!", emoji: "🚀", funFact: "According to Wikipedia, Sputnik I was the size of a beach ball and orbited the Earth every 96 minutes, transmitting radio signals received around the world!", who1: "Sputnik I was the world's first artificial satellite launched into Earth orbit by the Soviet Union, marking the historic beginning of the global Space Age and Space Race.", who2: "Sputnik I was developed by Soviet engineer Sergey Korolev and launched from the Baikonur Cosmodrome on October 4, 1957.", timeline: ["1957 - Launched into low Earth orbit on October 4", "1957 - Transmitted continuous radio telemetry beeps for 21 days", "1958 - Reentered Earth's atmosphere on January 4 after orbiting 1,440 times", "1958 - Spurred the establishment of NASA in the United States", "1969 - Led directly to the Apollo moon landing race"] },
    { id: "ray-kroc", title: "Ray Kroc, founder of McDonald's (b. 1902)", type: "Person (Biography.com)", month: "October", day: "October 5", connection: "Born on October 5, 1902, building McDonald's into a global restaurant chain!", emoji: "🍔", funFact: "According to Biography.com, Ray Kroc was a 52-year-old milkshake machine salesman when he first met the McDonald brothers and bought franchise rights!", who1: "Ray Kroc was an American entrepreneur and businessman who transformed a single California burger stand into McDonald's, the world's largest fast-food restaurant franchise.", who2: "Ray Kroc grew up in Oak Park, Illinois, working as a paperboy, soda jerk, ambulance driver, and jazz pianist before selling milkshake mixers.", timeline: ["1902 - Born in Oak Park, Illinois on October 5", "1954 - Visited the original McDonald brothers' burger restaurant in San Bernardino", "1955 - Opened his first McDonald's franchise restaurant in Des Plaines, Illinois", "1961 - Purchased full ownership of the McDonald's company for $2.7 million", "1984 - Passed away in San Diego after building over 7,500 restaurants"] },
    { id: "neil-degrasse-tyson", title: "Neil deGrasse Tyson, astronomer (b. 1958)", type: "Person (Biography.com)", month: "October", day: "October 5", connection: "Born on October 5, 1958, in New York City!", emoji: "🌌", funFact: "According to Biography.com, Neil deGrasse Tyson fell in love with astronomy at age nine after visiting the Hayden Planetarium, where he later became director!", who1: "Neil deGrasse Tyson is an American astrophysicist, author, and science communicator who has inspired millions of people to explore astronomy and the cosmos.", who2: "Neil deGrasse Tyson grew up in New York City, attending the Bronx High School of Science before earning degrees in physics and astrophysics from Harvard and Columbia Universities.", timeline: ["1958 - Born in New York City on October 5", "1980 - Graduated from Harvard University with a degree in physics", "1996 - Appointed Director of the Hayden Planetarium in New York City", "2014 - Hosted the award-winning television series 'Cosmos: A Spacetime Odyssey'", "2017 - Published 'Astrophysics for People in a Hurry,' a global bestseller"] },
    { id: "thomas-edison-motion-picture", title: "Thomas Edison shows first motion picture (1889)", type: "Person (Biography.com)", month: "October", day: "October 6", connection: "Demonstrated the first working motion picture film on October 6, 1889!", emoji: "🎬", funFact: "According to Biography.com, Thomas Edison held 1,093 U.S. patents and built 'Black Maria,' the world's very first film production studio!", who1: "Thomas Alva Edison was a prolific American inventor and businessman whose groundbreaking inventions in electricity, sound recording, and motion pictures transformed global entertainment.", who2: "Thomas Edison was a self-taught inventor born in Ohio who began his career as a teenage telegraph operator before building his famous research laboratory in Menlo Park, New Jersey.", timeline: ["1847 - Born in Milan, Ohio on February 11", "1877 - Invented the phonograph to record sound", "1879 - Developed the commercial incandescent light bulb", "1889 - Demonstrated the first motion picture film on October 6", "1893 - Constructed 'Black Maria,' the first movie studio"] },
    { id: "rose-national-flower", title: "Rose designated as U.S. National Flower (1986)", type: "Event / Landmark (Wikipedia)", month: "October", day: "October 7", connection: "Signed into law as the official U.S. National Flower on October 7, 1986!", emoji: "🌹", funFact: "According to Wikipedia, roses have been grown in North America for over 35 million years, and the White House has maintained a famous Rose Garden since 1913!", who1: "The Rose is the official national floral emblem of the United States, designated by President Ronald Reagan in 1986 to symbolize love, beauty, and national heritage.", who2: "The Rose was officially signed into federal law as the National Flower on October 7, 1986, following a joint resolution passed by the U.S. Congress.", timeline: ["1913 - First Lady Ellen Wilson establishes the official White House Rose Garden", "1986 - Senate and House pass legislation selecting the rose as national flower", "1986 - President Ronald Reagan signs the proclamation on October 7", "1998 - Designated state flower of New York, Iowa, Georgia, and North Dakota", "2026 - Celebrated across America as an enduring national floral symbol"] },
    { id: "great-chicago-fire", title: "The Great Chicago Fire started (1871)", type: "Event / History (Wikipedia)", month: "October", day: "October 8", connection: "Began on October 8, 1871, reshaping modern city architecture!", emoji: "🔥", funFact: "According to Wikipedia, rebuilding after the Great Chicago Fire led to the invention of modern skyscraper architecture and strict fire safety building codes worldwide!", who1: "The Great Chicago Fire was a major historical conflagration that burned from October 8 to October 10, 1871, destroying central Chicago and spurring modern urban architectural design.", who2: "The Great Chicago Fire started in a barn on DeKoven Street on the night of October 8, 1871, spreading rapidly due to dry autumn winds and wooden buildings.", timeline: ["1871 - Fire breaks out on DeKoven Street on October 8", "1871 - Rain helps extinguish the flames on October 10", "1872 - Chicago begins massive rebuilding with fireproof brick and steel", "1885 - World's first steel-frame skyscraper built in rebuilt Chicago", "1911 - Modern National Fire Prevention Week established in remembrance"] },
    { id: "james-marshall-gold", title: "James Marshall, first to find gold in CA (b. 1810)", type: "Person (Biography.com)", month: "October", day: "October 8", connection: "Born on October 8, 1810, discovering gold at Sutter's Mill in 1848!", emoji: "🪙", funFact: "According to Biography.com, James Marshall found gold flakes in the American River on January 24, 1848, sparking the famous 1849 California Gold Rush!", who1: "James Wilson Marshall was an American carpenter and sawmill operator whose discovery of gold in California launched the historic 1849 California Gold Rush.", who2: "James Marshall was born in Hopewell Township, New Jersey, on October 8, 1810, training as a carpenter before traveling west along the Oregon Trail.", timeline: ["1810 - Born in Hopewell Township, New Jersey on October 8", "1845 - Arrived in California and worked for pioneer John Sutter", "1848 - Discovered shiny gold flakes at Sutter's Mill on January 24", "1849 - Over 300,000 'Forty-Niners' migrated to California seeking gold", "1885 - Passed away in Kelsey, California, remembered as the Gold Rush discoverer"] },
    { id: "first-two-way-telephone", title: "First two-way telephone conversation (1876)", type: "Event / Science (Wikipedia)", month: "October", day: "October 9", connection: "Conducted between Boston and Cambridge, Massachusetts, on October 9, 1876!", emoji: "📞", funFact: "According to Wikipedia, Alexander Graham Bell and Thomas Watson spoke across a two-mile outdoor telegraph wire on October 9, proving long-distance telephone service was possible!", who1: "The first two-way long-distance telephone conversation was a historical telecommunications breakthrough conducted by Alexander Graham Bell and Thomas A. Watson on October 9, 1876.", who2: "The historic telephone call took place over a two-mile outdoor telegraph line connecting Boston and Cambridge, Massachusetts.", timeline: ["1876 - Alexander Graham Bell receives his landmark telephone patent in March", "1876 - Bell and Watson conduct the first outdoor two-way conversation on October 9", "1877 - First commercial telephone line installed between Boston and Somerville", "1892 - First long-distance telephone line opened connecting New York and Chicago", "1915 - First transcontinental telephone call conducted across the United States"] },
    { id: "leif-erikson-day", title: "Leif Erikson Day", type: "Event / History (Wikipedia)", month: "October", day: "October 9", connection: "Celebrated annually on October 9 to honor the Norse explorer!", emoji: "⛵", funFact: "According to Wikipedia, Leif Erikson established a Norse settlement at L'Anse aux Meadows in Newfoundland, Canada, nearly 500 years before Christopher Columbus sailed!", who1: "Leif Erikson Day is an annual observance honoring the Norse explorer who led the first known European expedition to continental North America around the year 1000 AD.", who2: "Leif Erikson was a Norse explorer born in Iceland, the son of Erik the Red, who sailed west from Greenland and discovered a land he named Vinland.", timeline: ["c. 970 AD - Born in Iceland, son of Greenland explorer Erik the Red", "c. 1000 AD - Explored eastern Canada, founding a settlement in Vinland (Newfoundland)", "1925 - President Calvin Coolidge recognizes Leif Erikson at Minnesota Norse Centennial", "1964 - U.S. Congress authorizes President Lyndon B. Johnson to proclaim October 9 as Leif Erikson Day", "1978 - L'Anse aux Meadows Norse site designated a UNESCO World Heritage Site"] },
    { id: "panama-canal", title: "Panama Canal connects to Atlantic ocean (1913)", type: "Event / Landmark (Wikipedia)", month: "October", day: "October 10", connection: "President Woodrow Wilson pressed a button in Washington on October 10, 1913, blowing up Gamboa Dike!", emoji: "🚢", funFact: "According to Wikipedia, the Panama Canal uses a system of giant water locks to lift ships 85 feet above sea level to cross the Isthmus of Panama!", who1: "The Panama Canal is a world-famous 50-mile artificial waterway across the Isthmus of Panama that connects the Atlantic Ocean with the Pacific Ocean.", who2: "The Panama Canal Atlantic connection was completed on October 10, 1913, when President Woodrow Wilson signaled the destruction of the Gamboa Dike via telegraph.", timeline: ["1904 - United States begins construction on the Panama Canal", "1913 - President Woodrow Wilson detonates the final Gamboa Dike on October 10", "1914 - SS Ancon makes the first official transit through the canal on August 15", "1999 - Panama assumes full sovereign control of the canal on December 31", "2016 - Expanded canal locks open to accommodate massive modern cargo ships"] },
    { id: "eleanor-roosevelt", title: "Eleanor Roosevelt, former First Lady (b. 1884)", type: "Person (Biography.com)", month: "October", day: "October 11", connection: "Born on October 11, 1884, in New York City!", emoji: "🌟", funFact: "According to Biography.com, Eleanor Roosevelt served as First Lady for 12 years and later chaired the United Nations committee that drafted the Universal Declaration of Human Rights!", who1: "Eleanor Roosevelt was an influential American diplomat, humanitarian, and First Lady of the United States who championed civil rights, women's equality, and international human rights.", who2: "Eleanor Roosevelt was born into a prominent New York family and overcame a difficult childhood to become a dedicated settlement house volunteer and progressive political reformer.", timeline: ["1884 - Born in New York City on October 11", "1905 - Married Franklin D. Roosevelt, future 32nd President", "1933-1945 - Served as First Lady, holding press conferences for female reporters", "1948 - Chaired UN commission drafting Universal Declaration of Human Rights", "1962 - Passed away in New York City as a global ambassador for freedom"] },
    { id: "steam-ferry-boat", title: "Steam-powered ferry boat began operations (1811)", type: "Event / Science (Wikipedia)", month: "October", day: "October 11", connection: "John Stevens launched the world's first steam ferry service between New York and Hoboken on October 11, 1811!", emoji: "⚙️", funFact: "According to Wikipedia, the ferry boat 'Juliana' was powered by a low-pressure steam engine and cut travel time across the Hudson River to just 15 minutes!", who1: "The steam-powered ferry boat Juliana was the world's first commercially operated steam ferry service, launched by American engineer John Stevens on October 11, 1811.", who2: "The steam ferry began regular passenger service across the Hudson River between Manhattan, New York, and Hoboken, New Jersey.", timeline: ["1811 - John Stevens launches the steam ferry Juliana on October 11", "1812 - Steam ferry service expands across major American river ports", "1820 - Steam ferries become the primary mode of urban river transit", "1883 - Brooklyn Bridge opening reduces reliance on East River ferries", "2026 - Modern electric and hybrid ferries continue operating in New York Harbor"] },
    { id: "columbus-day", title: "Columbus Day", type: "Event / History (Wikipedia)", month: "October", day: "October 12", connection: "Commemorates Christopher Columbus landing in the Americas on October 12, 1492!", emoji: "🌍", funFact: "According to Wikipedia, Columbus Day became an official federal holiday in the United States in 1937 under President Franklin D. Roosevelt!", who1: "Columbus Day is a federal holiday in the United States commemorating the anniversary of Christopher Columbus's arrival in the Americas on October 12, 1492.", who2: "Christopher Columbus was an Italian navigator from Genoa who led a Spanish expedition across the Atlantic Ocean aboard the Niña, Pinta, and Santa María.", timeline: ["1492 - Expedition sight land in the Bahamas on October 12", "1792 - First celebration held in New York City marking the 300th anniversary", "1937 - Designated an official annual federal holiday by President Franklin D. Roosevelt", "1971 - Moved to the second Monday in October under the Uniform Monday Holiday Act", "2021 - Co-celebrated alongside Indigenous Peoples' Day across many states"] },
    { id: "margaret-thatcher", title: "Margaret Thatcher, former English Prime Minister (b. 1925)", type: "Person (Biography.com)", month: "October", day: "October 13", connection: "Born on October 13, 1925, in Grantham, England!", emoji: "🇬🇧", funFact: "According to Biography.com, Margaret Thatcher was nicknamed the 'Iron Lady' and served as Prime Minister for 11 years, longer than anyone else in 20th-century British history!", who1: "Margaret Thatcher was a British statesman who served as Prime Minister of the United Kingdom from 1979 to 1990 and Leader of the Conservative Party from 1975 to 1990.", who2: "Margaret Thatcher grew up in Grantham, England, studying chemistry at Oxford University before qualifying as a tax barrister and entering Parliament in 1959.", timeline: ["1925 - Born in Grantham, Lincolnshire, England on October 13", "1959 - Elected to the House of Commons representing Finchley", "1979 - Sworn in as the first female Prime Minister of the United Kingdom", "1982 - Led Britain during the Falklands War victory", "2013 - Passed away in London, honored with a state ceremonial funeral"] },
    { id: "molly-pitcher", title: "Molly Pitcher, Revolutionary War hero (b. 1754)", type: "Person (Biography.com)", month: "October", day: "October 13", connection: "Born on October 13, 1754, in Trenton, New Jersey!", emoji: "💥", funFact: "According to Biography.com, Molly Pitcher earned her nickname by carrying water pitchers to thirsty artillery soldiers during the blistering heat of the 1778 Battle of Monmouth!", who1: "Molly Pitcher, born Mary Ludwig Hays, was a legendary American Revolutionary War heroine who carried water to soldiers and operated a cannon during the Battle of Monmouth.", who2: "Molly Pitcher was born in New Jersey on October 13, 1754, marrying artillery soldier William Hays and following him to military encampments.", timeline: ["1754 - Born in Trenton, New Jersey on October 13", "1777 - Joined her husband at General George Washington's winter camp at Valley Forge", "1778 - Took over her husband's cannon after he collapsed during the Battle of Monmouth", "1822 - Awarded an annual military veteran pension by the Pennsylvania legislature", "1832 - Passed away in Carlisle, Pennsylvania, remembered as a national war heroine"] },
    { id: "dwight-d-eisenhower", title: "Dwight D. Eisenhower (34th president), (b. 1890)", type: "Person (Biography.com)", month: "October", day: "October 14", connection: "Born on October 14, 1890, in Denison, Texas!", emoji: "🎖️", funFact: "According to Biography.com, Dwight D. Eisenhower commanded the Allied D-Day invasion of Europe in World War II and created NASA and the Interstate Highway System as President!", who1: "Dwight D. Eisenhower was a five-star army general and the 34th President of the United States who led Allied forces to victory in Europe during World War II.", who2: "Dwight D. Eisenhower grew up in Abilene, Kansas, where his hard work and athletic talents earned him an appointment to West Point Military Academy.", timeline: ["1890 - Born in Denison, Texas on October 14", "1915 - Graduated from West Point Military Academy", "1944 - Supreme Commander of Allied D-Day invasion on June 6", "1953-1961 - Served as 34th U.S. President, creating NASA and Interstate Highways", "1969 - Passed away in Washington, D.C. as a national military hero"] },
    { id: "wayne-gretzky-record", title: "Wayne Gretzky breaks NHL points record", type: "Person (Biography.com)", month: "October", day: "October 15", connection: "Broke Gordie Howe's all-time NHL scoring record on October 15, 1989!", emoji: "🏒", funFact: "According to Biography.com, Wayne Gretzky scored 2,857 career points in the NHL, earning the title 'The Great One' and having his number 99 retired league-wide!", who1: "Wayne Gretzky is a legendary Canadian professional ice hockey player who is widely considered the greatest hockey player in National Hockey League history.", who2: "Wayne Gretzky grew up in Brantford, Ontario, skating on a backyard rink built by his father Walter and scoring 378 goals in a single minor hockey season at age ten.", timeline: ["1961 - Born in Brantford, Ontario on January 26", "1979 - Debuted in the NHL with the Edmonton Oilers", "1989 - Broke Gordie Howe's all-time NHL point record of 1,850 points on October 15", "1999 - Retired from professional hockey holding 61 NHL records", "1999 - Inducted into the Hockey Hall of Fame with immediate jersey retirement"] },
    { id: "clarence-thomas", title: "Clarence Thomas confirmed on Supreme Court (1991)", type: "Person (Biography.com)", month: "October", day: "October 15", connection: "Confirmed by the U.S. Senate as Supreme Court Justice on October 15, 1991!", emoji: "⚖️", funFact: "According to Biography.com, Clarence Thomas grew up speaking Gullah in Pin Point, Georgia, and became the second African American to serve on the U.S. Supreme Court!", who1: "Clarence Thomas is an American lawyer and jurist who has served as an Associate Justice of the Supreme Court of the United States since 1991.", who2: "Clarence Thomas was born in the small coastal community of Pin Point, Georgia, graduating from Holy Cross College and Yale Law School.", timeline: ["1948 - Born in Pin Point, Georgia on June 23", "1974 - Graduated from Yale Law School", "1982-1990 - Served as Chairman of the Equal Employment Opportunity Commission (EEOC)", "1991 - Confirmed by the U.S. Senate as Associate Justice on October 15", "2026 - Continues serving as the longest-tenured current member of the Supreme Court"] },
    { id: "nelson-mandela-nobel", title: "Nelson Mandela receives the Nobel Peace Prize (1993)", type: "Person (Biography.com)", month: "October", day: "October 15", connection: "Awarded the Nobel Peace Prize on October 15, 1993!", emoji: "🇿🇦", funFact: "According to Biography.com, Nelson Mandela spent 27 years in prison for opposing apartheid before being elected the first Black President of South Africa!", who1: "Nelson Mandela was a courageous South African anti-apartheid revolutionary, political leader, and philanthropist who served as the first Black President of South Africa from 1994 to 1999.", who2: "Nelson Mandela was born in the rural village of Mvezo into a royal Xhosa family, studying law in Johannesburg before co-founding the African National Congress Youth League.", timeline: ["1918 - Born in Mvezo, South Africa on July 18", "1944 - Joined the African National Congress (ANC)", "1964 - Sentenced to life imprisonment on Robben Island", "1990 - Released from prison after 27 years", "1993 - Awarded the Nobel Peace Prize on October 15"] },
    { id: "noah-webster", title: "Noah Webster, author and lexicographer (b. 1758)", type: "Person (Biography.com)", month: "October", day: "October 16", connection: "Born on October 16, 1758, in West Hartford, Connecticut!", emoji: "📖", funFact: "According to Biography.com, Noah Webster spent 27 years writing his 1828 American Dictionary, learning 26 languages to trace the origin of over 70,000 words!", who1: "Noah Webster was an American lexicographer, textbook author, and spelling reformer who created the first comprehensive American English dictionary.", who2: "Noah Webster was born in Connecticut during the colonial era, graduating from Yale College before working as a schoolteacher during the American Revolution.", timeline: ["1758 - Born in West Hartford, Connecticut on October 16", "1783 - Published the 'Blue-Backed Speller,' selling over 100 million copies", "1806 - Published his first small English dictionary", "1828 - Published 'An American Dictionary of the English Language' with 70,000 words", "1843 - Passed away in New Haven, Connecticut as the father of American lexicography"] },
    { id: "san-francisco-earthquake-1989", title: "San Francisco Earthquake (1989)", type: "Event / History (Wikipedia)", month: "October", day: "October 17", connection: "The Loma Prieta earthquake struck northern California during World Series broadcast on Oct 17!", emoji: "🌋", funFact: "According to Wikipedia, the 6.9 magnitude earthquake was caught on live national television just as game 3 of the 1989 World Series was starting at Candlestick Park!", who1: "The 1989 San Francisco Earthquake, officially named the Loma Prieta earthquake, was a major 6.9 magnitude seismic event that struck northern California on October 17, 1989.", who2: "The earthquake epicenter was located in the Forest of Nisene Marks State Park near Loma Prieta peak in the Santa Cruz Mountains.", timeline: ["1989 - Earthquake strikes at 5:04 PM PDT on October 17 with 6.9 magnitude", "1989 - Section of the San Francisco-Oakland Bay Bridge collapses", "1989 - World Series postponed for ten days while emergency rescue operations conducted", "1990 - California enacts major structural retrofitting laws for bridges and highways", "2013 - New earthquake-resistant San Francisco-Oakland Bay Bridge East Span opens"] },
    { id: "mason-dixon-line", title: "Mason-Dixon Line established (1767)", type: "Event / History (Wikipedia)", month: "October", day: "October 18", connection: "Surveyors Charles Mason and Jeremiah Dixon completed their boundary survey on October 18, 1767!", emoji: "📍", funFact: "According to Wikipedia, the Mason-Dixon Line was marked by carved limestone crownstones shipped from England, featuring coats of arms of the Penn and Calvert families!", who1: "The Mason-Dixon Line is a historic boundary line surveyed between 1763 and 1767 to resolve a border dispute between British colonies of Pennsylvania and Maryland.", who2: "The survey was conducted by English astronomer Charles Mason and surveyor Jeremiah Dixon, completing their fieldwork on October 18, 1767.", timeline: ["1763 - English surveyors Charles Mason and Jeremiah Dixon arrive in Philadelphia", "1767 - Survey of the 233-mile boundary completed on October 18", "1820 - Missouri Compromise uses the line as a symbolic border between slave and free states", "1861 - Served as a key regional boundary during the American Civil War", "2026 - Preserved as an iconic historical landmark in American geography"] },
    { id: "puerto-rico-us-colony", title: "Puerto Rico becomes U.S. Colony (1898)", type: "Event / History (Wikipedia)", month: "October", day: "October 18", connection: "United States military forces officially took control of Puerto Rico on October 18, 1898!", emoji: "🇵🇷", funFact: "According to Wikipedia, Congress passed the Jones-Shafroth Act in 1917, granting statutory U.S. citizenship to all residents of Puerto Rico!", who1: "Puerto Rico's transition into a United States territory occurred on October 18, 1898, following the end of the Spanish-American War in the Caribbean.", who2: "The transfer of governance took place in San Juan when Spanish colonial forces officially turned over administrative control to General John R. Brooke.", timeline: ["1898 - U.S. troops land at Guánica, Puerto Rico, on July 25", "1898 - Official flag raising and military transfer completed in San Juan on October 18", "1900 - Foraker Act establishes civil government and federal court in Puerto Rico", "1917 - Jones-Shafroth Act grants statutory U.S. citizenship to Puerto Ricans", "1952 - Puerto Rico adopts its official commonwealth constitution"] },
    { id: "star-spangled-banner-sung", title: "Star Spangled Banner first sung (1814)", type: "Event / Culture (Wikipedia)", month: "October", day: "October 19", connection: "Performed publicly for the first time at Holliday Street Theatre in Baltimore on Oct 19!", emoji: "🎶", funFact: "According to Wikipedia, Francis Scott Key wrote the lyric poem on the back of an envelope while watching the British bombardment of Fort McHenry!", who1: "The Star-Spangled Banner is the official national anthem of the United States, written by Francis Scott Key during the War of 1812 and sung publicly for the first time on October 19, 1814.", who2: "The anthem's lyrics were composed after Francis Scott Key witnessed the 25-hour British bombardment of Fort McHenry in Baltimore harbor.", timeline: ["1814 - Francis Scott Key writes 'Defence of Fort M'Henry' on September 14", "1814 - Sung publicly for the first time in Baltimore on October 19", "1889 - Designated for official flag-raising use by the United States Navy", "1931 - President Herbert Hoover signs law making it the official U.S. National Anthem", "2026 - Performed at national civic events, Olympic ceremonies, and sports games"] },
    { id: "revolutionary-war-final-battle", title: "Final battle of Revolutionary War (1781)", type: "Event / History (Wikipedia)", month: "October", day: "October 19", connection: "General Cornwallis surrendered to George Washington at Yorktown on October 19, 1781!", emoji: "🇺🇸", funFact: "According to Wikipedia, the Siege of Yorktown ended when British troops marched out to surrender while their band played 'The World Turned Upside Down'!", who1: "The Siege of Yorktown was the decisive final land battle of the American Revolutionary War, resulting in the surrender of British General Lord Cornwallis on October 19, 1781.", who2: "The Franco-American siege combined George Washington's Continental Army with French ground troops commanded by Rochambeau and naval blockade led by Admiral de Grasse.", timeline: ["1781 - Allied French and American forces besiege Yorktown, Virginia, in September", "1781 - British army officially surrenders at Yorktown on October 19", "1782 - British Parliament votes to cease offensive military operations in America", "1783 - Treaty of Paris signed, officially recognizing American independence", "2026 - Yorktown Battlefield preserved as part of Colonial National Historical Park"] },
    { id: "dick-fosbury", title: "Dick Fosbury wins gold with 'Fosbury Flop' (1968)", type: "Person (Biography.com)", month: "October", day: "October 20", connection: "Won Olympic gold in Mexico City on October 20, 1968, revolutionizing high jump!", emoji: "🥇", funFact: "According to Biography.com, Dick Fosbury invented his backward jumping technique in high school because traditional jumping methods were too difficult for his height!", who1: "Dick Fosbury was an American track and field athlete who revolutionized the high jump sport by inventing the backward jumping technique known as the 'Fosbury Flop.'", who2: "Dick Fosbury grew up in Medford, Oregon, studying civil engineering at Oregon State University while refining his unique high jump technique.", timeline: ["1947 - Born in Portland, Oregon on March 6", "1963 - Experiments with jumping backward over the high jump bar in high school", "1968 - Wins Olympic Gold Medal in Mexico City on October 20 with a 2.24-meter jump", "1972 - Fosbury Flop adopted by majority of international Olympic high jumpers", "2023 - Passed away in Salt Lake City, remembered as a sports pioneer"] },
    { id: "colin-powell", title: "Colin Powell confirmed as Chairman of Joint Chiefs (1989)", type: "Person (Biography.com)", month: "October", day: "October 21", connection: "Confirmed as Chairman of the Joint Chiefs of Staff in October 1989!", emoji: "🎖️", funFact: "According to Biography.com, Colin Powell was the son of Jamaican immigrants who rose to become a four-star general, Chairman of the Joint Chiefs, and first African American Secretary of State!", who1: "Colin Powell was a distinguished four-star army general, diplomat, and statesman who served as Chairman of the Joint Chiefs of Staff and the 65th U.S. Secretary of State.", who2: "Colin Powell was born in Harlem, New York, to Jamaican immigrant parents, joining ROTC at the City College of New York before serving two combat tours in the Vietnam War.", timeline: ["1937 - Born in Harlem, New York on April 5", "1958 - Graduated from City College of New York and commissioned into U.S. Army", "1989 - Appointed Chairman of the Joint Chiefs of Staff under President George H.W. Bush", "2001 - Sworn in as 65th U.S. Secretary of State under President George W. Bush", "2021 - Passed away as an honored four-star military and diplomatic leader"] },
    { id: "lance-armstrong-tour", title: "Lance Armstrong loses all 7 Tour de France titles", type: "Person (Biography.com)", month: "October", day: "October 22", connection: "Union Cycliste Internationale officially stripped all 7 Tour de France titles on October 22, 2012!", emoji: "🚴", funFact: "According to Biography.com, Lance Armstrong survived testicular cancer in 1996 and founded the Livestrong Foundation, raising over $500 million for cancer research!", who1: "Lance Armstrong is an American former professional road racing cyclist whose career gained international fame before sports governing bodies stripped his titles following anti-doping investigations.", who2: "Lance Armstrong grew up in Plano, Texas, competing as a champion ironman triathlete before joining professional road cycling teams in Europe.", timeline: ["1971 - Born in Plano, Texas on September 18", "1996 - Diagnosed with advanced testicular cancer, undergoing surgery and chemotherapy", "1997 - Founded the Livestrong Foundation to support cancer survivors", "1999-2005 - Won seven consecutive Tour de France cycling titles", "2012 - International Cycling Union officially ratifies sanctions stripping titles on October 22"] },
    { id: "ipod-first-revealed", title: "iPod first revealed (2001)", type: "Event / Science (Wikipedia)", month: "October", day: "October 23", connection: "Steve Jobs unveiled the original Apple iPod in Cupertino on October 23, 2001!", emoji: "🎵", funFact: "According to Wikipedia, the original iPod featured a 5GB hard drive holding '1,000 songs in your pocket' and used a mechanical scroll wheel!", who1: "The iPod was a revolutionary portable digital media player designed and marketed by Apple Inc., unveiled by CEO Steve Jobs on October 23, 2001.", who2: "The iPod was developed by an engineering team led by Tony Fadell and Jon Rubinstein under Steve Jobs's direction to transform the digital music industry.", timeline: ["2001 - Steve Jobs unveils the original 5GB iPod on October 23", "2003 - Apple launches the iTunes Music Store, selling 1 million songs in its first week", "2004 - Apple introduces the colorful iPod mini and click-wheel interface", "2007 - Over 100 million iPod units sold worldwide", "2022 - Apple officially discontinues the iPod line after 21 years of innovation"] },
    { id: "pele-soccer", title: "Pelé, soccer player (b. 1940)", type: "Person (Biography.com)", month: "October", day: "October 23", connection: "Born on October 23, 1940, in Três Corações, Brazil!", emoji: "⚽", funFact: "According to Biography.com, Pelé is the only soccer player in history to win three FIFA World Cup championships (1958, 1962, and 1970) and scored 1,279 career goals!", who1: "Pelé, born Edson Arantes do Nascimento, was a world-famous Brazilian professional soccer player who is widely regarded as the greatest footballer of all time.", who2: "Pelé grew up in poverty in Bauru, Brazil, practicing soccer with a sock stuffed with newspapers before joining the Santos Football Club at age fifteen.", timeline: ["1940 - Born in Três Corações, Brazil on October 23", "1958 - Won his first FIFA World Cup in Sweden at age seventeen", "1962 - Won his second FIFA World Cup in Chile", "1970 - Won his third FIFA World Cup in Mexico", "2022 - Passed away in São Paulo as a global sports icon"] },
    { id: "united-nations-day", title: "United Nations Day", type: "Event / History (Wikipedia)", month: "October", day: "October 24", connection: "Official charter of the United Nations took effect on October 24, 1945!", emoji: "🇺🇳", funFact: "According to Wikipedia, UN Day has been celebrated on October 24 since 1948, honoring international cooperation, human rights, and world peace!", who1: "United Nations Day is an international holiday celebrating the official establishment of the United Nations charter on October 24, 1945.", who2: "The United Nations Charter was signed in San Francisco by 50 founding countries following the conclusion of World War II.", timeline: ["1945 - UN Charter officially ratified by major founding nations on October 24", "1947 - UN General Assembly declares October 24 as official United Nations Day", "1948 - First global UN Day celebrations held across member states", "1971 - UN General Assembly recommends UN Day be observed as a public holiday", "2026 - UN comprises 193 member states dedicated to international security"] },
    { id: "pablo-picasso", title: "Pablo Picasso, artist (b. 1881)", type: "Person (Biography.com)", month: "October", day: "October 25", connection: "Born on October 25, 1881, in Málaga, Spain!", emoji: "🎨", funFact: "According to Biography.com, Pablo Picasso produced over 20,000 artworks in his career and co-founded Cubism, revolutionizing modern 20th-century art!", who1: "Pablo Picasso was a world-renowned Spanish painter, sculptor, and printmaker who revolutionized twentieth-century art by co-founding the Cubist art movement.", who2: "Pablo Picasso was born in Málaga, Spain, where his father, an art professor, recognized his extraordinary drawing talent at a very early age.", timeline: ["1881 - Born in Málaga, Spain on October 25", "1901-1904 - Created masterpieces during his famous 'Blue Period'", "1907 - Painted 'Les Demoiselles d'Avignon,' launching Cubism", "1937 - Painted 'Guernica,' an anti-war masterpiece", "1973 - Passed away in Mougins, France at age ninety-one"] },
    { id: "hillary-rodham-clinton", title: "Hillary Rodham Clinton, former First Lady (b. 1947)", type: "Person (Biography.com)", month: "October", day: "October 26", connection: "Born on October 26, 1947, in Chicago, Illinois!", emoji: "⚖️", funFact: "According to Biography.com, Hillary Rodham Clinton served as First Lady, U.S. Senator from New York, Secretary of State, and was the first woman nominated for U.S. President by a major party!", who1: "Hillary Rodham Clinton is an American attorney, diplomat, and political leader who served as First Lady of the United States, U.S. Senator, and the 67th Secretary of State.", who2: "Hillary Rodham Clinton grew up in Park Ridge, Illinois, graduating from Wellesley College and Yale Law School where she focused on children's rights law.", timeline: ["1947 - Born in Chicago, Illinois on October 26", "1973 - Graduated from Yale Law School", "1993-2001 - Served as First Lady of the United States", "2001-2009 - Served as U.S. Senator representing New York", "2009-2013 - Served as 67th U.S. Secretary of State"] },
    { id: "erie-canal-opened", title: "Erie Canal opened (1825)", type: "Event / History (Wikipedia)", month: "October", day: "October 26", connection: "Governor DeWitt Clinton opened the 363-mile canal on October 26, 1825!", emoji: "🌊", funFact: "According to Wikipedia, the Erie Canal reduced shipping costs between Buffalo and New York City by 95%, making New York City the chief commercial port in America!", who1: "The Erie Canal is a historic 363-mile artificial waterway in New York that connected the Great Lakes with the Atlantic Ocean via the Hudson River.", who2: "The Erie Canal was officially opened on October 26, 1825, when Governor DeWitt Clinton boarded the packet boat Seneca Chief in Buffalo.", timeline: ["1817 - Construction officially begins in Rome, New York, on July 4", "1825 - Canal completed and opened with the 'Wedding of the Waters' ceremony on October 26", "1862 - Enlarged to accommodate heavier commercial barge traffic", "1918 - Integrated into the modern New York State Barge Canal System", "2026 - Preserved as a National Heritage Corridor for recreation and history"] },
    { id: "red-cross-organized", title: "International Red Cross organized in Switzerland (1863)", type: "Event / History (Wikipedia)", month: "October", day: "October 26", connection: "International conference convened in Geneva on October 26, 1863, establishing the Red Cross!", emoji: "🏥", funFact: "According to Wikipedia, Henry Dunant was inspired to create the Red Cross after witnessing 40,000 wounded soldiers left unattended at the 1859 Battle of Solferino!", who1: "The International Red Cross is a world-famous humanitarian network founded in Geneva, Switzerland, to provide neutral medical assistance during armed conflicts and natural disasters.", who2: "The International Committee of the Red Cross was officially organized on October 26, 1863, during an international conference convened by Henry Dunant.", timeline: ["1863 - Geneva conference convenes on October 26, adopting the Red Cross emblem", "1864 - First Geneva Convention signed by 12 European nations protecting medics", "1881 - Clara Barton establishes the American Red Cross in Washington, D.C.", "1901 - Founder Henry Dunant receives the first-ever Nobel Peace Prize", "2026 - Operates globally with millions of medical volunteers assisting disaster victims"] },
    { id: "theodore-roosevelt", title: "Theodore Roosevelt, 26th U.S. President (b. 1858)", type: "Person (Biography.com)", month: "October", day: "October 27", connection: "Born on October 27, 1858, in New York City!", emoji: "🌲", funFact: "According to Biography.com, Theodore Roosevelt protected over 230 million acres of public land, establishing 5 national parks and founding the U.S. Forest Service!", who1: "Theodore Roosevelt was an energetic American statesman, conservationist, military hero, and the 26th President of the United States who expanded federal environmental protection.", who2: "Theodore Roosevelt overcame severe childhood asthma through intense physical exercise, graduating from Harvard University before serving as a New York police commissioner.", timeline: ["1858 - Born in New York City on October 27", "1898 - Led the 'Rough Riders' cavalry regiment during Spanish-American War", "1901 - Became 26th U.S. President at age forty-two", "1906 - Awarded Nobel Peace Prize for ending Russo-Japanese War", "1919 - Passed away at Sagamore Hill, New York"] },
    { id: "bill-gates", title: "Bill Gates, founder of Microsoft (b. 1955)", type: "Person (Biography.com)", month: "October", day: "October 28", connection: "Born on October 28, 1955, in Seattle, Washington!", emoji: "💻", funFact: "According to Biography.com, Bill Gates co-founded Microsoft in 1975 and later established the Bill & Melinda Gates Foundation to combat global disease and poverty!", who1: "Bill Gates is an American software developer, business magnate, and philanthropist who co-founded Microsoft Corporation and helped launch the personal computer revolution.", who2: "Bill Gates developed a passion for computer programming at age thirteen at Lakeside School, spending late nights writing software codes and studying algorithms.", timeline: ["1955 - Born in Seattle, Washington on October 28", "1975 - Co-founded Microsoft with childhood friend Paul Allen", "1985 - Launched Microsoft Windows operating system", "2000 - Established Bill & Melinda Gates Foundation", "2020 - Stepped down from Microsoft board to focus on philanthropy"] },
    { id: "statue-of-liberty", title: "Statue of Liberty dedicated (1886)", type: "Event / Landmark (Wikipedia)", month: "October", day: "October 28", connection: "Officially dedicated in New York Harbor on October 28, 1886!", emoji: "🗽", funFact: "According to Wikipedia, the Statue of Liberty was a gift of friendship from France to the United States and greeted millions of immigrants arriving at Ellis Island!", who1: "The Statue of Liberty is a world-famous copper monument on Liberty Island in New York Harbor, gifted by France to celebrate American independence and global freedom.", who2: "The Statue of Liberty was designed by French sculptor Frédéric-Auguste Bartholdi with internal iron framework engineered by Gustave Eiffel before being shipped across the Atlantic.", timeline: ["1865 - French abolitionist Édouard René de Laboulaye proposes the gift", "1876 - Construction begins in Paris under sculptor Bartholdi", "1885 - Statue arrives in New York Harbor packed in 214 crates", "1886 - Officially dedicated by President Grover Cleveland on October 28", "1984 - Designated a UNESCO World Heritage Site"] },
    { id: "stock-market-crash-1929", title: "Stock Market Crash (1929)", type: "Event / History (Wikipedia)", month: "October", day: "October 29", connection: "Black Tuesday crash occurred on Wall Street on October 29, 1929!", emoji: "📈", funFact: "According to Wikipedia, Black Tuesday saw over 16 million stock shares traded in a single day, signaling the start of the 12-year Great Depression!", who1: "The Stock Market Crash of 1929, known as Black Tuesday, was the most devastating financial crash in United States history, precipitating the Great Depression.", who2: "The collapse occurred on Wall Street in New York City on October 29, 1929, following days of speculative panic selling.", timeline: ["1929 - Black Thursday panic selling begins on October 24", "1929 - Black Tuesday collapse occurs on October 29 with 16 million shares traded", "1932 - U.S. stock values drop nearly 90% from their 1929 peak", "1933 - President Franklin D. Roosevelt launches the New Deal recovery program", "1934 - Securities and Exchange Commission (SEC) created to regulate financial markets"] },
    { id: "john-adams", title: "John Adams, 2nd U.S. President (b. 1735)", type: "Person (Biography.com)", month: "October", day: "October 30", connection: "Born on October 30, 1735, in Braintree, Massachusetts!", emoji: "✍️", funFact: "According to Biography.com, John Adams was a leading voice for independence in 1776, served as 2nd U.S. President, and was the first president to live in the White House!", who1: "John Adams was a founding father, lawyer, diplomat, and the 2nd President of the United States who championed American independence and constitutional government.", who2: "John Adams was born in Massachusetts to a farming family, graduating from Harvard College before becoming a prominent Boston attorney.", timeline: ["1735 - Born in Braintree, Massachusetts on October 30", "1776 - Served on the Committee of Five drafting the Declaration of Independence", "1789-1797 - Served as first Vice President under President George Washington", "1797-1801 - Served as 2nd U.S. President, moving into the White House", "1826 - Passed away on July 4, the 50th anniversary of the Declaration"] },
    { id: "juliette-gordon-low", title: "Juliette Gordon Low, started Girl Scouts (b. 1860)", type: "Person (Biography.com)", month: "October", day: "October 31", connection: "Born on October 31, 1860, in Savannah, Georgia!", emoji: "☘️", funFact: "According to Biography.com, Juliette Gordon Low founded the Girl Scouts of the USA in 1912 with just 18 girls, building an organization that has empowered over 50 million girls!", who1: "Juliette Gordon Low was an inspiring American youth leader and activist who founded the Girl Scouts of the USA in 1912 to empower girls through outdoor skills, leadership, and service.", who2: "Juliette Gordon Low grew up in Savannah, Georgia, during the Civil War era, developing a passion for art, horseback riding, and community service despite hearing impairment.", timeline: ["1860 - Born in Savannah, Georgia on October 31", "1911 - Met Sir Robert Baden-Powell in England, learning about Boy Scouts and Girl Guides", "1912 - Gathered 18 girls in Savannah on March 12 to register the first U.S. Girl Scout troop", "1915 - Incorporated Girl Scouts of the USA, serving as first national president", "1927 - Passed away in Savannah, leaving a legacy of youth empowerment"] },
    { id: "halloween-history", title: "Halloween", type: "Event / Culture (Wikipedia)", month: "October", day: "October 31", connection: "Celebrated annually on October 31 around the world!", emoji: "🎃", funFact: "According to Wikipedia, trick-or-treating originated from ancient Celtic harvest customs and medieval European traditions of souling for soul cakes!", who1: "Halloween is an annual cultural celebration observed in many countries on October 31, the eve of the Western Christian feast of All Hallows' Day.", who2: "Halloween traditions originated over 2,000 years ago with the ancient Celtic festival of Samhain, celebrated in Ireland, Scotland, and the Isle of Man.", timeline: ["c. 800 BC - Ancient Celts celebrate Samhain marking the end of harvest season", "835 AD - Pope Gregory IV officially shifts All Saints' Day to November 1", "1840s - Mass Irish immigration introduces Halloween traditions to the United States", "1930s - Modern commercial trick-or-treating becomes popular across American suburbs", "2026 - Celebrated globally with costumes, jack-o'-lanterns, and community festivities"] }
  ];

  // Compile final DB with dynamically built articles
  const TOPICS_DB = RAW_OCTOBER_DATA.map(t => {
    const articles = buildArticlesForTopic(t);
    return Object.assign({}, t, articles);
  });

  // --- STATE VARIABLES ---
  let activeStudentName = localStorage.getItem("talking_cal_student") || "Guest Student";
  let activeTopic = TOPICS_DB[0];
  let activeArticleIndex = 1;
  let isChallengeModeActive = false;
  let selectedMonth = "all";
  let selectedSentencesList = [];
  let currentAudioUtterance = null;
  let savedSubmissions = JSON.parse(localStorage.getItem("talking_cal_submissions") || "[]");

  // --- DOM ELEMENTS ---
  const userNameDisplay = document.getElementById("userNameDisplay");
  const userAvatar = document.getElementById("userAvatar");
  const changeUserBtn = document.getElementById("changeUserBtn");
  const teacherLoginBtn = document.getElementById("teacherLoginBtn");
  const monthChipsContainer = document.getElementById("monthChipsContainer");
  const topicSearchInput = document.getElementById("topicSearchInput");
  const searchSubmitBtn = document.getElementById("searchSubmitBtn");
  const topicCardsGrid = document.getElementById("topicCardsGrid");
  const topicGridTitle = document.getElementById("topicGridTitle");

  // Article & Hero DOM
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

  // Workbench DOM
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

  // Modals DOM
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

  // --- INITIALIZATION ---
  function init() {
    updateUserDisplay();
    renderMonthChips();
    renderTopicGrid();
    loadTopic(TOPICS_DB[0]);
    attachEventListeners();
  }

  function updateUserDisplay() {
    userNameDisplay.textContent = activeStudentName;
    userAvatar.textContent = activeStudentName.charAt(0).toUpperCase();
  }

  function renderMonthChips() {
    const chips = monthChipsContainer.querySelectorAll(".month-chip");
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        selectedMonth = chip.getAttribute("data-month");
        renderTopicGrid();
      });
    });
  }

  function renderTopicGrid(filterQuery = "") {
    topicCardsGrid.innerHTML = "";

    let filtered = TOPICS_DB.filter(t => {
      const matchMonth = (selectedMonth === "all" || t.month === selectedMonth);
      const matchSearch = filterQuery === "" || 
        t.title.toLowerCase().includes(filterQuery.toLowerCase()) || 
        t.connection.toLowerCase().includes(filterQuery.toLowerCase());
      return matchMonth && matchSearch;
    });

    if (filtered.length === 0) {
      topicGridTitle.textContent = `🔍 Topics matching "${filterQuery}"`;
      topicCardsGrid.innerHTML = `
        <div style="grid-column:1/-1; background:rgba(255,255,255,0.08); padding:1.5rem; border-radius:14px; color:white; text-align:center;">
          <p style="font-size:1.1rem; font-weight:700;">No pre-populated topic found for "${filterQuery}".</p>
          <p style="font-size:0.9rem; color:#94a3b8; margin-top:0.4rem;">Select "October" to view all 47 extracted topics from your calendar document!</p>
        </div>
      `;
      return;
    }

    if (selectedMonth === "October") {
      topicGridTitle.textContent = `🎃 October Talking Calendar (${filtered.length} Extracted Topics Available)`;
    } else if (selectedMonth === "all") {
      topicGridTitle.textContent = `📚 All Extracted Calendar Topics (${filtered.length} Topics)`;
    } else {
      topicGridTitle.textContent = `🗓️ Featured Topics for ${selectedMonth}`;
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

  // --- LOAD TOPIC INTO WORKBENCH ---
  function loadTopic(topic) {
    activeTopic = topic;
    activeArticleIndex = 1;
    stopAudio();

    // Update Header Graphic
    graphicIconWrap.textContent = topic.emoji;
    topicTypeTag.textContent = topic.type || "Research Topic";
    articleMonthTag.textContent = `📅 ${topic.day || topic.month} Topic`;
    articleTitle.textContent = topic.title;
    monthConnectionBanner.innerHTML = `<span>🗓️ <strong>Month Connection:</strong> ${topic.connection}</span>`;
    funFactText.textContent = topic.funFact;

    // Render Timeline
    timelineList.innerHTML = "";
    topic.timeline.forEach(item => {
      const li = document.createElement("li");
      li.className = "timeline-item";
      li.textContent = item;
      timelineList.appendChild(li);
    });

    // Update Tab UI
    tabArticle1.classList.add("active");
    tabArticle2.classList.remove("active");

    renderCurrentArticle();

    // Reset Workbench Input & Plagiarism check
    paraphraseInput.value = "";
    selectedSentencesList = [];
    renderSelectedSentences();
    runPlagiarismCheck();
  }

  // --- RENDER ACTIVE ARTICLE TEXT ---
  function renderCurrentArticle() {
    stopAudio();
    
    let articleData;
    if (activeArticleIndex === 1) {
      articleData = isChallengeModeActive ? (activeTopic.article1_challenge || activeTopic.article1) : activeTopic.article1;
    } else {
      articleData = isChallengeModeActive ? (activeTopic.article2_challenge || activeTopic.article2) : activeTopic.article2;
    }

    articleBodyProtected.innerHTML = "";
    
    // Sub-heading
    const subHeading = document.createElement("h3");
    subHeading.className = "article-section-heading";
    subHeading.style.color = isChallengeModeActive ? "#b45309" : "#4f46e5";
    subHeading.textContent = articleData.title;
    articleBodyProtected.appendChild(subHeading);

    // Paragraphs
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

  // --- RENDER MULTI-SENTENCE SELECTION CONTAINER ---
  function renderSelectedSentences() {
    focusSentencesContainer.innerHTML = "";

    if (selectedSentencesList.length === 0) {
      focusSentenceBox.classList.remove("has-sentences");
      clearSentencesBtn.style.display = "none";
      focusSentencesContainer.appendChild(focusSentencePlaceholder);
      return;
    }

    focusSentenceBox.classList.add("has-sentences");
    clearSentencesBtn.style.display = "inline-block";

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

  // --- COPY / PASTE PROTECTION ---
  function attachCopyProtection() {
    articleBodyProtected.addEventListener("copy", (e) => {
      e.preventDefault();
      showPasteToast("🚫 Copying text from the article is disabled. Please write in your own words!");
    });
    articleBodyProtected.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    paraphraseInput.addEventListener("paste", (e) => {
      e.preventDefault();
      showPasteToast("🚫 Copy & paste is disabled! Write the paraphrase in your own words.");
    });
  }

  function showPasteToast(msg) {
    pasteToast.textContent = msg;
    pasteToast.classList.add("show");
    setTimeout(() => {
      pasteToast.classList.remove("show");
    }, 2500);
  }

  // --- PROPER NOUN AWARE PLAGIARISM CHECKER (5+ Matching Non-Proper-Noun Words) ---
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

  // --- AUDIO READ ALOUD ---
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
      audioReadBtn.classList.add("playing");
      audioIcon.textContent = "⏹️";
      audioText.textContent = "Stop Audio";
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
    audioReadBtn.classList.remove("playing");
    audioIcon.textContent = "🔊";
    audioText.textContent = "Read Aloud";
    currentAudioUtterance = null;
  }

  // --- SAVE WORK & SUBMISSIONS ---
  function saveStudentWork() {
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
      badgeScore: plagiarismBadge.textContent,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    savedSubmissions.unshift(submission);
    localStorage.setItem("talking_cal_submissions", JSON.stringify(savedSubmissions));
    alert(`🎉 Great job, ${activeStudentName}! Your dual-article paraphrase for "${activeTopic.title}" has been saved for your teacher!`);
  }

  // --- PRINT WORKSHEET ---
  function triggerPrintWorksheet() {
    document.getElementById("printStudentName").textContent = activeStudentName;
    document.getElementById("printDate").textContent = new Date().toLocaleDateString();
    document.getElementById("printTitle").textContent = `Talking Calendar Project: ${activeTopic.title}`;
    window.print();
  }

  // --- TEACHER DASHBOARD ---
  function renderTeacherSubmissions() {
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
          <button class="btn-btn btn-secondary" style="font-size:0.75rem; padding:0.3rem 0.6rem;" onclick="alert('Student Paraphrase:\\n\\n${sub.paraphraseText.replace(/'/g, "\\'").replace(/"/g, '\\"')}')">View Text</button>
        </td>
      `;
      submissionsTableBody.appendChild(tr);
    });
  }

  // --- ATTACH EVENT LISTENERS ---
  function attachEventListeners() {
    searchSubmitBtn.addEventListener("click", () => {
      renderTopicGrid(topicSearchInput.value.trim());
    });
    topicSearchInput.addEventListener("keyup", (e) => {
      renderTopicGrid(topicSearchInput.value.trim());
    });

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

    tabArticle1.addEventListener("click", () => {
      activeArticleIndex = 1;
      tabArticle1.classList.add("active");
      tabArticle2.classList.remove("active");
      renderCurrentArticle();
    });

    tabArticle2.addEventListener("click", () => {
      activeArticleIndex = 2;
      tabArticle2.classList.add("active");
      tabArticle1.classList.remove("active");
      renderCurrentArticle();
    });

    clearSentencesBtn.addEventListener("click", () => {
      selectedSentencesList = [];
      renderSelectedSentences();
      renderCurrentArticle();
    });

    audioReadBtn.addEventListener("click", toggleAudio);
    attachCopyProtection();
    paraphraseInput.addEventListener("input", runPlagiarismCheck);

    document.querySelectorAll(".starter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const starter = chip.getAttribute("data-starter");
        paraphraseInput.value = starter + paraphraseInput.value;
        paraphraseInput.focus();
        runPlagiarismCheck();
      });
    });

    saveProgressBtn.addEventListener("click", saveStudentWork);
    printWorksheetBtn.addEventListener("click", triggerPrintWorksheet);

    changeUserBtn.addEventListener("click", () => {
      studentNameInput.value = activeStudentName === "Guest Student" ? "" : activeStudentName;
      studentLoginModal.classList.add("active");
    });
    closeStudentModalBtn.addEventListener("click", () => studentLoginModal.classList.remove("active"));
    saveStudentNameBtn.addEventListener("click", () => {
      const val = studentNameInput.value.trim();
      if (val) {
        activeStudentName = val;
        localStorage.setItem("talking_cal_student", activeStudentName);
        updateUserDisplay();
        studentLoginModal.classList.remove("active");
      }
    });

    teacherLoginBtn.addEventListener("click", () => {
      teacherModal.classList.add("active");
      teacherAuthSection.style.display = "block";
      teacherContentSection.style.display = "none";
      teacherPinInput.value = "";
      teacherPinError.style.display = "none";
    });
    closeTeacherModalBtn.addEventListener("click", () => teacherModal.classList.remove("active"));
    
    teacherPinSubmitBtn.addEventListener("click", () => {
      if (teacherPinInput.value.trim() === "1234") {
        teacherAuthSection.style.display = "none";
        teacherContentSection.style.display = "block";
        renderTeacherSubmissions();
      } else {
        teacherPinError.style.display = "block";
      }
    });

    clearSubmissionsBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear all student submissions?")) {
        savedSubmissions = [];
        localStorage.removeItem("talking_cal_submissions");
        renderTeacherSubmissions();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);

})();
