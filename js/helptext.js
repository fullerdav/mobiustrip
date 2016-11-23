const sources = {
    intro: {
      slides: [
        { active: true, isbn: '9780300089943', recno: "b1288032", title: '<b>Andy</b> <b>Warhol</b>: series and singles : exhibition, Riehen/Basel, 17 Sept.-Dec. 2000', callno: 'AVAILABLE, [q] N6537.W28 A4 2000a, Oversize: q Stacks', type: 'Book', author: 'Beyeler, Ernst', year: '2000'},
        { active: false, isbn: '9780810955394', recno: "b1405659", title: '<b>Andy Warhol</b> screen tests: the films of Andy Warhol : catalogue raisonné', callno: 'AVAILABLE, [q] PN1998.3.W366 A54 2006 v.1, Oversize: q Stacks', type:'Book', author: 'Angell, Callie', year: '2006'},
        { active: false, isbn: '9780262522724', recno: "b1273178", title: 'About face: <b>Andy Warhol</b> portraits', callno: 'AVAILABLE, N6537.W28 A4 1999a, Stacks', type:'Book', author: 'Warhol, Andy; Baume, Nicholas', year: '1999'}
        //{ active: false, isbn: '', issn: '0738-4602', title: 'What Do You Need to Know to Use a Search Engine? Why We Still Need to Teach Research Skills', callno: 'Full Text Online', type:'Journal Article', author: 'Russell, Daniel M.', year: '1999'}
      ],
      text:'<div class="previewPane"><strong>Summary</strong><ul>   \
          <li>the library has a wealth of resources that can support and advance your research</li> \
          <li>there are so many different things in different places it can be kind of ...overwhelming</li> \
          <li>it would be helpful to have a guide of some kind, an introduction to some of the resources</li> \
          <li>a way to explore interactively, all in one place...</li></ul></div>'
    },
    kgraph: {
        name: "Knowledge Graph",
        text: 'The Knowledge Graph provides a way to see similar or associated entities and concepts. Enter word to find associated "things":'
    },
    altervista: {
        name: "Altervista",
        text: 'Altervista is a web service which provides related words.  It may be useful to find alternative search terms.  Finding synonyms \
        might return better search results, for example - money and (slang or jargon or lingo) -'
    },
    oxford: {
        name: "Merriam-Webster's Collegiate Dictionary",
        slides: ["The Eleventh Edition of America's best-selling dictionary features more than 225,000 clear and precise definitions and newly added words and meanings.  \
        More than 100,000 audio pronunciations and 42,000 usage examples. Includes Foreign Words and Phrases, and Biographical Names and Geographical Names."]
    },
    oed: {
        name: "Oxford English Dictionary",
        slides: []
    },
    googlescholar : {
        name: "Google Scholar",
        slides: [],
        sources: {}
    },
    google: {
        name: "Google",
        slides: [],
        sources: {}
    },
    reference: {
      slides:[],
      sources: {
        summon: {id:"summonref", type:"summon", name:"Summon (Reference)", text:'<span class="comments">Summon with the Content Type limited to <i>Reference Sources</i>. Summon indexes reference sources at the article level</span>', params:["reference"]},
        azlist: {id:"azlistref", type:"az", name:"A to Z list", text:'<span class="comments">Our A-Z database list with "type" filtered to <i>Reference</i>. The  sources are listed at the title level, i.e. <i>The Brittanica Online</i>, or <i>The Dictionary of American Regional English</i></span>', url:"http://libguides.union.edu/az.php", params:{t:4215}},
        schaffer: {id:"schafferref", type:"form", name:"Schaffer Library", inputname:"SEARCH", url:"http://libraryopac.union.edu/search/X", params: {b:"ur   ", sort:"DX"}, 
            text:'<span class="comments">We still have many interesting, unique and valuable reference titles in print..</span>'}
      }
    },
    books: {
      slides: [],
      sources: {
          schaffer: {id:"schafferbook",type:"form", name:"Schaffer Library", inputname:"SEARCH", url:"http://libraryopac.union.edu/search/X", text: 'a catalog of items owned and loaned to the Union College community' },
          cny: {id:"cnybook",type: "form", name: "Connect NY", inputname:"SEARCH", url: "http://www.connectny.info/search/X", text: 'The catalog of ConnectNY, 19 libraries throughout the State that share loanable items. Items typically arrive within two days for a 6 week loan period.'},
          summon: {id:"summonbook",type: "summon", name: "Summon (books)", params:["book"] , text: 'includes records from the Schaffer Library Catalog as well.  In order to see only books/ebooks this search applies the "Content Type" filter.'}
      }
    },
    articles: {
       slides:[],
       sources: {
           summon: { id:"summonarticle", type:"summon", name:"Summon (articles)", text:"summonarticletext", params:["magarticle","jnlarticle"] },
           gcse: { id:"gcsearticle", type:"gcse", name:"Google custom search (articles)", text:'This searches Google&apos;s index for articles that have been tagged as "ScholarlyArticle" (according to the categories \
           listd at schema.org.  It is a third alternative to using Summon or Google Scholar to find articles and is included mainly \
           to illustrate the limits of Google for scholarly research. You may encounter a "paywall" if we do not have a subscription.', cx:"017097913603090994702:m6sjv7tu628"}
      } 
   },
   localarchives: {
        slides:[],
        sources: {
            azlist: {id:"azlistprimary", type:"az",  name:"A to Z list (primary sources)", url: "http://libguides.union.edu/az.php", params:{t: 4217}},
            gcse: {id:"gcseprimary", type:"gcse", name:"Google custom search (primary sources)", cx:"017097913603090994702:fjd8tlez-hc"},
            catalog: {id:"schafferprimary", type:"form", name:"Schaffer Library", method:"GET", inputname:"SEARCH", xarg: "(s:correspond* OR s:diar* OR s:narrative* OR s:letter*)", url:"http://libraryopac.union.edu/search/X", params: {searcharg:"", sort:"DX"}, text:"schaffercattext"},
            catalog: {id:"cnyprimary", type:"form", name: "Connect NY", inputname:"SEARCH", url: "http://www.connectny.info/search/X", xarg: "(s:correspond* OR s:diar* OR s:narrative* OR s:letter*)", params: {sort:"DX"}, text:"cnycattext"}
       }
    },
    digitalarchives: {
       slides: [],
       sources: {
           dpla: {id:"dpla", type:"form", inputname:"q", url:"https://dp.la/search", name: "The Digital Public Library of America", text:"The DPLA brings together libraries, archives, museums, and cultural heritage sites, and makes them freely available to students, teachers, researchers, and the general public."},
           oaister: {id:"oaister", type:"form", name: "OAIster (pronounced \ˈȯis-tər\)", inputname:"q", url: "http://oaister.worldcat.org/search?fq=x0%3Aarchv+>++&qt=advanced&dblist=239",
                text: 'A searchable catalog of publicly available archives courtesy of the University of Michigan and OCLC.  Not all of the items are primary source materials.  There are scholarly publications and electronic journals.'},
           doar: {id:"doar", type:"link", name: "Directory of Open Access Repositories", url: "http://www.opendoar.org/search.php", text: "The DOAR encompasses a wide range of academic disciplines"}
      }
    },
    blogs: {
        slides:['<span class="message">Blogs - expert opinion</span> A blog can be published by anyone.  Is it a valid source for scholarly research?  There are now blogs which are regarded as expert opinion.  It is important to identify \
        the author and the sponsoring organization, if there is one. <div class="nextslide">What does a blog citation look like?<span class="glyphicon glyphicon-arrow-right"></span></div>', 
        '<span class="message">Citing blogs:</span><cite>Last, First M. “Article Title.” Blog Post Type.<div style="visibility:hidden;" class="tooltip">Standard, Audio, or Video Blog</div> <em>Website/Blog Title</em>. Website Publisher, Date Month Year Published. Web. Date. Month. Year Accessed.</cite> \
        <cite>Cohen, Micah. “Retirements Contributing to Largest Senate Turnover in Decades.” Web blog post. <em>FiveThirtyEight</em>. The New York Times Company, 28 Mar. 2013. Web. 30 Mar. 2013.</cite>'],
        sources: {
          gcse: {id:"gcseblogs", type: 'gcse', name: 'Google Custom Search - Blogs', cx: '017097913603090994702:wsw4y_fvygo'}
        }
    },
    thinktanks: {
        slides:[],
        sources: {
          gcse: {id:"gcsethinktanks", type: 'gcse', name: 'Google Custom Search - Think Tanks', cx: '017097913603090994702:rzhmodt523w'}
        }
    },
    videos: {
        slides: [],
        sources: {}
    },
    datasets: {
        slides: ['Citing data: Each citation must include the basic elements that allow a unique dataset to be identified over time: \
            <p class="citation">Author, Title, Version, Distributor, Persistent identifier, Date of Access (D-M-Y) </p> \
            (such as the Digital Object Identifier, Uniform Resource Name URN, or Handle System)<br> \
            Here is an example:<p class="citation">Deschenes, Elizabeth Piper, Susan Turner, and Joan Petersilia. Intensive Community Supervision in Minnesota, 1990-1992: A Dual Experiment in Prison Diversion and Enhanced Supervised Release [Computer file]. ICPSR06849-v1. Ann Arbor, MI: Inter-university Consortium for Political and Social Research [distributor], 2000. doi:10.3886/ICPSR06849 \
            </p><a href id="datacitelink">Convert a doi to a citation.</a><!--iframe id="dataFrame" name="citeDataFrame" src="http:\/\/crosscite.org/citeproc/"></iframe-->'],
        sources: {
            r3data: {id:"r3data", type:"form", name:"re3data.org (Registry of Research Data Repositories)", inputname:"query", url: "http://service.re3data.org/search", text: "A global repository of research data axross all disciplines, including both open and restricted access"},
            gcse: {id:"gcsedata", type:"gcse", name:"Google custom search (datasets)", cx:"017097913603090994702:-xygo9gvyvw"},
            azlist: {id:"azlist", type:"az", name:"A to Z list (datsets)", url:"http://libguides.union.edu/az.php", params:{t: 4708}}
        }
    },
    newspapers: {
        slides: [],
        sources: {
            azlist: {id:"azlistnews", type:"az", name:"A to Z list (newspapers)", url:"http://libguides.union.edu/az.php", params:{t: 4219}},
            chronam: {id:"chronam", type:"form", name:"Chronicling America", text:'The DPLA brings together libraries, archives, museums, and cultural heritage sites, and makes \
              them freely available to students, teachers, researchers, and the general public.', inputname:"terms", url: "http://chroniclingamerica.loc.gov/search/titles/results/"}
        }
    },
    libguide: {
      slides: [],
      sources: {
        libguides: {id:"libguides", type: "form", inputname: "q", name: "Libguides", url: "http://libguides.union.edu/srch.php", text: "This searches libguides, a utility librarians use to create...guides"}
      }
    },
    summonbubbles: {
      slides:[],
      sources: {
        summon: {id:"summondemo", type:"summon", name:"Summon (demo)", text:"", params:[] },
        bubbles: {id:"bubbles", type:"d3js", name: "d3 bubbles"}
      }
    }
};

const summonobj = {
    "id": "s540f45ce18eb440bc83586bce4b8ef1",
    "endpoint": "//union.summon.serialssolutions.com",
    "style": {
      "tagline": "#000",
      "links": "#000",
      "boxwidth_text": 175
    },
    "params": {
      "pn": 1,
      "ho": true,
      "fvf": [],
      "l": "en"},
    "tagline_text": "",
    "searchbutton_text": "Search",
    "advanced_text": "More search options",
    "placeholder_text": "",
    "advanced": false,
    "suggest": true,
    "tagline": false,
    "popup": true
};
const summonoptions = {
  "summon": {"type":"category", "label":"Summon Options","value":""},
  "contenttype": {"type":"category", "label":"Content Type","value":""},
  "discipline": {"type":"category", "label":"Discipline","value":""},
  "subjectterms": {"type":"category", "label":"Subject Terms","value":"IsFullText,true,f"},
  "primary":{"type":"category","label":"Primary Sources","value":["archives","manuscript","narrative"]},
  "refine": {"type":"category", "label":"Refine","value":"IsFullText,true,f"},
  "fulltext": {"type":"filter", "label":"Full Text","value":"IsFullText,true,f"},
  "peerreview": {"type":"filter", "label":"Peer Review","value":"IsPeerReviewed,true,f"},
  "catalog": {"type":"filter", "label":"Library Catalog","value":"SourceType,Library Catalog,f"},
  "book":{"type":"contenttype","label":"Book/eBook","value":"ContentType,Book / eBook,f"},
  "jnlarticle":{"type":"contenttype","label":"Journal Articles","value":"ContentType,Journal Article,f"},
  "bookreview":{"type":"contenttype","label":"Book Reviews","value":"ContentType,Book Review,f"},
  "magarticle":{"type":"contenttype","label":"Magazine Articles","value":"ContentType,Magazine Article,f"},
  "reference":{"type":"contenttype","label":"Reference","value":"ContentType,Reference,f"},
  "archives":{"type":"contenttype","label":"Archival Materials","value":"ContentType,Archival Material,f"},
  "conference":{"type":"contenttype","label":"Conference Proceedings","value":"ContentType,Conference Proceeding,f"},
  "narrative":{"type":"contenttype","label":"Personal Narratives","value":"ContentType,Personal Narrative,f"},
  "videostream":{"type":"contenttype","label":"Video Stream","value":"ContentType,Streaming Video,f"},
  "videorecording":{"type":"contenttype","label":"Video Recordings","value":"ContentType,Video Recording,f"},
  "tradepublication":{"type":"contenttype","label":"Trade Publications","value":"ContentType,Trade Publication Article,f"},
  "play":{"type":"contenttype","label":"Plays","value":"ContentType,Play,f"},
  "poem":{"type":"contenttype","label":"Poems","value":"ContentType,Poem,f"},
  "newspaper":{"type":"contenttype","label":"Newspapers","value":"ContentType,Newspaper,f"},
  "newsarticle":{"type":"contenttype","label":"Newspaper Articles","value":"ContentType,Newspaper Article,f"},
  "marketresearch":{"type":"contenttype","label":"Market Research","value":"ContentType,Market Research,f"},
  "transcript":{"type":"contenttype","label":"Transcripts","value":"ContentType,Transcript,f"},
  "manuscript":{"type":"contenttype","label":"Manuscripts","value":"ContentType,Manuscript,f"},
  "musicscore":{"type":"contenttype","label":"Musical Scores","value":"ContentType,Music Score,f"},
  "govdoc":{"type":"contenttype","label":"Government Documents","value":"ContentType,Government Document,f"},
  "audiorecording":{"type":"contenttype","label":"Audio Recording","value":"ContentType,Audio Recording,f"},
  "dissertation":{"type":"contenttype","label":"Dissertations","value":"ContentType,Dissertation/Thesis,f"},
  "newsreel":{"type":"subject","label":"newsreel","value":"SubjectTerms,newsreel,f"},
  "interviews":{"type":"subject","label":"interviews","value":"SubjectTerms,interviews,f"},
  "acqmergers":{"type":"subject","label":"acquisitions & mergers","value":"SubjectTerms,acquisitions & mergers,f"},
  "awardshonors":{"type":"subject","label":"awards & honors","value":"SubjectTerms,awards & honors,f"},
  "cities":{"type":"subject","label":"cities","value":"SubjectTerms,cities,f"},
  "councils":{"type":"subject","label":"councils","value":"SubjectTerms,councils,f"},
  "forecasts":{"type":"subject","label":"forecasts and trends","value":"SubjectTerms,forecasts and trends,f"},
  "healthaspects":{"type":"subject","label":"health aspects","value":"SubjectTerms,health aspects,f"},
  "meetings":{"type":"subject","label":"meetings","value":"SubjectTerms,meetings,f"},
  "methods":{"type":"subject","label":"methods","value":"SubjectTerms,methods,f"},
  "motionpictures":{"type":"subject","label":"motion pictures","value":"SubjectTerms,motion pictures,f"},
  "nonfiction":{"type":"subject","label":"nonfiction","value":"SubjectTerms,nonfiction,f"},
  "reports":{"type":"subject","label":"reports","value":"SubjectTerms,reports,f"},
  "research":{"type":"subject","label":"research","value":"SubjectTerms,research,f"},
  "software":{"type":"subject","label":"software","value":"SubjectTerms,software,f"},
  "statistics":{"type":"subject","label":"statistics","value":"SubjectTerms,statistics,f"},  
  "anthropology":{"type":"discipline","label":"Anthropology","value":"Discipline,anthropology,f"},
  "astronomy":{"type":"discipline","label":"Astronomy","value":"Discipline,astronomy & astrophysics,f"},
  "biology":{"type":"discipline","label":"Biology","value":"Discipline,biology,f"},
  "business":{"type":"discipline","label":"Business","value":"Discipline,business,f"},
  "chemistry":{"type":"discipline","label":"Chemistry","value":"Discipline,chemistry,f"},
  "computer":{"type":"discipline","label":"Computer Science","value":"Discipline,computer science,f"},
  "dance":{"type":"discipline","label":"Dance","value":"Discipline,dance,f"},
  "drama":{"type":"discipline","label":"Drama","value":"Discipline,drama,f"},
  "ecology":{"type":"discipline","label":"Ecology","value":"Discipline,ecology,f"},
  "economics":{"type":"discipline","label":"Economics","value":"Discipline,economics,f"},
  "education":{"type":"discipline","label":"Education","value":"Discipline,education,f"},
  "engineering":{"type":"discipline","label":"Engineering","value":"Discipline,engineering,f"},
  "environment":{"type":"discipline","label":"Environment","value":"Discipline,environmental sciences,f"},
  "film":{"type":"discipline","label":"Film","value":"Discipline,film,f"},
  "geography":{"type":"discipline","label":"Geography","value":"Discipline,geography,f"},
  "geology":{"type":"discipline","label":"Geology","value":"Discipline,geology,f"},
  "history":{"type":"discipline","label":"History","value":"Discipline,history & archaeology,f"},
  "languages":{"type":"discipline","label":"Literatures","value":"Discipline,languages & literatures,f"},
  "law":{"type":"discipline","label":"Law","value":"Discipline,law,f"},
  "mathematics":{"type":"discipline","label":"Mathematics","value":"Discipline,mathematics,f"},
  "medicine":{"type":"discipline","label":"Medicine","value":"Discipline,medicine,f"},
  "music":{"type":"discipline","label":"Music","value":"Discipline,music,f"},
  "philosophy":{"type":"discipline","label":"Philosophy","value":"Discipline,philosophy,f"},
  "physics":{"type":"discipline","label":"Physics","value":"Discipline,physics,f"},
  "polisci":{"type":"discipline","label":"Political Science","value":"Discipline,political science,f"},
  "psychology":{"type":"discipline","label":"Psychology","value":"Discipline,psychology,f"},
  "publichealth":{"type":"discipline","label":"Public Health","value":"Discipline,public health,f"},
  "religion":{"type":"discipline","label":"Religion","value":"Discipline,religion,f"},
  "sociology":{"type":"discipline","label":"Sociology","value":"Discipline,sociology & social history,f"},
  "visualarts":{"type":"discipline","label":"Visual Arts","value":"Discipline,visual arts,f"},
  "women":{"type":"discipline","label":"Women's Studies","value":"Discipline,women's studies,f"}
};
