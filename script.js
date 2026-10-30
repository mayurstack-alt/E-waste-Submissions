/**
 * Mayur Jadhav · E-Waste Management Academic Submission Dashboard
 * Vanilla JavaScript Implementation
 * 100% Client-Side · Lightweight & Fully Interactive
 */

(function () {
  'use strict';

  // Master Submission Inventory
  const ASSIGNMENTS = [
  {
    "id": 1,
    "assignmentNum": "Class Task",
    "name": "Class Task_Upload the Write up done in Class",
    "submissionDate": "22 Jul Wednesday",
    "submissionTime": "21:47",
    "category": "ISA",
    "fileName": "Class notes Mayur EWEM (1).pdf",
    "fileType": "PDF",
    "fileSize": "275.1 KB",
    "pages": 2,
    "description": "Comprehensive handwritten in-class lecture notes covering core electronic waste definitions, life-cycle impacts, hazardous composition, and preliminary recycling flow methodologies."
  },
  {
    "id": 2,
    "assignmentNum": "Assignment 01",
    "name": "Assignment 1_E Waste Tracker by excel",
    "submissionDate": "23 Jul Thursday",
    "submissionTime": "20:17",
    "category": "ISA",
    "fileName": "Himachal_Pradesh_EWaste_Tracker (3) (1).xlsx",
    "fileType": "XLSX",
    "fileSize": "45.5 KB",
    "sheetsCount": 9,
    "description": "Quantitative state e-waste management scorecard and multi-sheet audit model for Himachal Pradesh computing live scores across 7 operational categories out of 100 points."
  },
  {
    "id": 3,
    "assignmentNum": "Assignment 0",
    "name": "Assignment_ZERO",
    "submissionDate": "26 Jul Sunday",
    "submissionTime": "21:27",
    "category": "ISA",
    "fileName": "EWEM Assignment-0 Mayur (2).pdf",
    "fileType": "PDF",
    "fileSize": "351.9 KB",
    "pages": 6,
    "description": "Course insights, curriculum architecture analysis, Course Outcome (CO) to Program Outcome (PO) mapping, reference literature, and examination evaluation breakdown."
  },
  {
    "id": 4,
    "assignmentNum": "Assignment 02",
    "name": "E waste India Scenario_Comparison",
    "submissionDate": "4 Aug Tuesday",
    "submissionTime": "16:31",
    "category": "ISA",
    "fileName": "EWEM India Scenario Mayur (1).pdf",
    "fileType": "PDF",
    "fileSize": "351.7 KB",
    "pages": 2,
    "description": "Comparative visual study examining India's rising electronic waste trajectory, Tier-1 informal recycling choke-points, and environmental health consequences."
  },
  {
    "id": 5,
    "assignmentNum": "Assignment 03",
    "name": "State wise_ E Waste tracker_PPT",
    "submissionDate": "11 Aug Tuesday",
    "submissionTime": "20:18",
    "category": "ISA",
    "fileName": "AI_E-Waste_Analytics_Dashboard_Mayur 24102B0029 (1).pdf",
    "fileType": "PDF",
    "fileSize": "604.9 KB",
    "pages": 7,
    "description": "Presentation slide deck proposing an AI-Based E-Waste Management Tracker & Analytics Dashboard with real-time KPI scorecards and district-level metrics for Himachal Pradesh."
  },
  {
    "id": 6,
    "assignmentNum": "Assignment 04",
    "name": "Carbon Foot Print Tacker data Upload",
    "submissionDate": "11 Aug Tuesday",
    "submissionTime": "22:26",
    "category": "ISA",
    "fileName": "Carbon Footprint Mayur 24102B0029.pdf",
    "fileType": "PDF",
    "fileSize": "60.4 KB",
    "pages": 1,
    "description": "Personal digital carbon footprint evaluation and appliance energy consumption audit calculating individual carbon emissions and mitigation recommendations."
  },
  {
    "id": 7,
    "assignmentNum": "Assignment 05",
    "name": "Novel Ideas for E waste_PPT Submission for Pitch deck",
    "submissionDate": "21 Aug Friday",
    "submissionTime": "15:21",
    "category": "ISA",
    "fileName": "E-Waste Novelty Idea PPT Mayur (1).pdf",
    "fileType": "PDF",
    "fileSize": "400.9 KB",
    "pages": 6,
    "description": "Innovation pitch deck presentation exploring novel circular economy models, automated disassembly concepts, and incentive-driven urban consumer collection schemes."
  },
  {
    "id": 8,
    "assignmentNum": "Assignment 06",
    "name": "E waste Recovery Process description_Suggest Changes",
    "submissionDate": "25 Aug Tuesday",
    "submissionTime": "15:26",
    "category": "ISA",
    "fileName": "Hydrometallurgy_EWaste_Flow_Diagrams_Document (1).docx",
    "fileType": "DOCX",
    "fileSize": "720.8 KB",
    "description": "Technical analysis and comparative process flowcharts optimizing hydrometallurgical metal extraction stages from e-waste, simplifying recovery sequences."
  },
  {
    "id": 9,
    "assignmentNum": "Assignment 07",
    "name": "E waste_Comparison of Rules of Different Countries",
    "submissionDate": "25 Aug Tuesday",
    "submissionTime": "16:15",
    "category": "ISA",
    "fileName": "Asia_E_Waste_Rules_Comparison_5_Countries.pdf",
    "fileType": "PDF",
    "fileSize": "24.5 KB",
    "pages": 1,
    "description": "Comparative international legislative matrix evaluating statutory e-waste management rules and EPR mechanisms across India, Japan, China, South Korea, and Singapore."
  },
  {
    "id": 10,
    "assignmentNum": "Assignment 08",
    "name": "Companies Following E waste Rules In India",
    "submissionDate": "31 Aug Monday",
    "submissionTime": "23:30",
    "category": "ISA",
    "fileName": "Mayur_Jadhav_E_Waste_Rules_Company_Analysis_Updated (1).pdf",
    "fileType": "PDF",
    "fileSize": "55.1 KB",
    "pages": 4,
    "description": "Corporate governance and Extended Producer Responsibility (EPR) compliance audit assessing 5 leading Indian electronics manufacturers under CPCB 2022 rules."
  },
  {
    "id": 11,
    "assignmentNum": "Activity 01",
    "name": "E waste Campaign Documents_Class Activity",
    "submissionDate": "7 Sept Monday",
    "submissionTime": "21:31",
    "category": "ISA",
    "fileName": "IMG-20260907-WA0045.jpg",
    "fileType": "JPG",
    "fileSize": "287.8 KB",
    "description": "Photographic documentation and campaign artifact captured during the in-class campus sustainability advocacy and e-waste audit drive."
  },
  {
    "id": 12,
    "assignmentNum": "Assignment 09",
    "name": "LEED Certificate Rating System of Green Building in India",
    "submissionDate": "28 Sept Monday",
    "submissionTime": "12:39",
    "category": "ESE",
    "fileName": "LEED_Buildings_Weightage_and_Scoring.xlsx",
    "fileType": "XLSX",
    "fileSize": "20.5 KB",
    "sheetsCount": 4,
    "description": "Comprehensive LEED certification scoring workbook assessing 10 Indian green buildings against international credit categories and sustainability benchmarks."
  },
  {
    "id": 13,
    "assignmentNum": "Exam Sub 01",
    "name": "Case Study Report Submission",
    "submissionDate": "4 Oct Sunday",
    "submissionTime": "15:21",
    "category": "ESE",
    "fileName": "Case-Study E-waste Mayur (1).pdf",
    "fileType": "PDF",
    "fileSize": "356.4 KB",
    "pages": 21,
    "description": "21-page MSE-2 Examination research dossier reviewing global waste-management models (Japan, Switzerland) and municipal circular economy case studies (Bengaluru, Mumbai)."
  },
  {
    "id": 14,
    "assignmentNum": "Research 01",
    "name": "IEEE Paper Submission Folder",
    "submissionDate": "20 Oct Tuesday",
    "submissionTime": "23:52",
    "category": "ESE",
    "fileName": "Responsible_AI_Research_Paper_Mayur_Updated (1).docx",
    "fileType": "DOCX",
    "fileSize": "154.4 KB",
    "description": "Peer-reviewed format IEEE research paper titled 'An Integrated Framework for Fairness Auditing, Bias Mitigation and Explainability in Responsible AI' by Mayur Jadhav."
  },
  {
    "id": 15,
    "assignmentNum": "Companion 01",
    "name": "AI-Based E-Waste Management Tracker Project Report",
    "submissionDate": "Supplementary Documentation",
    "submissionTime": "Final Version",
    "category": "Extras",
    "fileName": "AI-Based_EWaste_Management_Tracker_Report_Updated_Top (1) (1).docx",
    "fileType": "DOCX",
    "fileSize": "27.2 KB",
    "description": "Full software engineering project specification report describing district KPI tracking, scorecard derivation, and predictive modeling for Himachal Pradesh."
  },
  {
    "id": 16,
    "assignmentNum": "Companion 02",
    "name": "State-Wise Companies E-Waste Recovery Document",
    "submissionDate": "Supplementary Documentation",
    "submissionTime": "Directory Matrix",
    "category": "Extras",
    "fileName": "EWaste_StateWise_Companies_Document (1).docx",
    "fileType": "DOCX",
    "fileSize": "23.3 KB",
    "description": "Pan-India state-wise registry and compliance directory documenting authorized recyclers, Producer Responsibility Organisations (PROs), and collection centres."
  }
];

  // Embedded Structured Previews for DOCX & XLSX
  const DOCX_PREVIEWS = {
  "Hydrometallurgy_EWaste_Flow_Diagrams_Document (1).docx": [
    "Hydrometallurgy Process for E-Waste",
    "E-Waste Metal Recovery – Detailed Process Flow",
    "Figure 1: The Detailed Flow Diagram",
    "Figure 1 illustrates the detailed flow of hydrometallurgical metal recovery from e-waste. The process starts with collection and sorting of e-waste, followed by dismantling and size reduction. Physical separation is then used to concentrate the metal-rich fraction. The concentrated material undergoes leaching, where target metals are dissolved into an aqueous solution. The leach solution is purified, followed by metal recovery, refining and reuse of the recovered metals.",
    "The detailed diagram contains eight stages: Collection & Sorting → Dismantling & Size Reduction → Physical Separation → Leaching → Solution Purification/Separation → Metal Recovery → Refining & Purification → End Products/Reuse.",
    "Hydrometallurgy Process for E-Waste",
    "E-Waste Metal Recovery – Improved Process Flow",
    "Figure 2: The Shortened & Optimized Flow Diagram",
    "Figure 2 presents the improved version of the detailed flow. The original process is simplified by combining closely related operations while retaining the essential hydrometallurgical sequence.",
    "Changes Made for Betterment",
    "Dismantling & Size Reduction: Dismantling and crushing are represented as one stage because both are material-preparation operations.",
    "Pre-treatment & Separation: Physical separation is grouped with pre-treatment because its purpose is to prepare and concentrate the metal-rich fraction before leaching.",
    "Leaching: Kept as a separate stage because it is the core hydrometallurgical extraction step where target metals are dissolved into solution.",
    "Purification & Metal Recovery: Solution purification and metal recovery are combined because both are downstream operations performed on the metal-containing solution.",
    "Recovered Metal: Refining is represented within the final output stage to keep the diagram concise while still showing the final high-purity/reusable metal.",
    "Result: The flow is reduced from eight detailed stages to six optimized stages without removing the essential process logic. This makes the diagram simpler, less repetitive and easier to understand in a presentation or report.",
    "Hydrometallurgy Process for E-Waste",
    "Comparison of Detailed and Improved Flows",
    "Process Comparison",
    "Detailed Flow",
    "Improved Flow",
    "Reason for Change",
    "Collection & Sorting",
    "Collection & Sorting",
    "Retained as the essential input stage.",
    "Dismantling & Size Reduction",
    "Dismantling & Size Reduction",
    "Already grouped in the detailed diagram.",
    "Physical Separation",
    "Pre-treatment & Separation",
    "Grouped with preparation/separation operations.",
    "Leaching",
    "Leaching",
    "Retained as the core extraction stage.",
    "Solution Purification / Separation",
    "Purification & Metal Recovery",
    "Combined to reduce repetition.",
    "Metal Recovery",
    "Purification & Metal Recovery",
    "Included in the combined downstream stage.",
    "Refining & Purification",
    "Recovered Metal",
    "Shown as part of the final recovered-metal output.",
    "End Products / Reuse",
    "Recovered Metal",
    "Final output is represented more directly.",
    "Conclusion",
    "The detailed flow provides a complete representation of the hydrometallurgical e-waste recovery process, while the improved flow focuses on clarity and efficiency. By merging related operations, the improved diagram reduces visual complexity and avoids unnecessary repetition. The essential sequence—pre-treatment, leaching, purification and metal recovery—remains unchanged.",
    "Note: The diagrams represent a general hydrometallurgical process for e-waste. Specific chemicals, operating conditions and company-specific extraction technologies should only be stated when supported by verified technical documentation."
  ],
  "AI-Based_EWaste_Management_Tracker_Report_Updated_Top (1) (1).docx": [
    "PROJECT TEAMMayur Jadhav      | Roll No: 24102B0029 | Division: TE CMPN BSoham Gaikwad     | Roll No: 24102B0021 | Division: TE CMPN BPrajwal Bhosale   | Roll No: 24102B0038 | Division: TE CMPN B",
    "AI-Based E-Waste Management Tracker and Analytics Dashboard",
    "A Case Study on the State of Himachal Pradesh",
    "Software Engineering Project Report",
    "Objective",
    "The project aims to monitor and evaluate the e-waste management performance of the state of Himachal Pradesh using a set of environmental and regulatory indicators derived from operational data across its twelve districts. The dashboard provides analytics, key performance indicator (KPI) tracking, automated score computation, and visual insights intended to help government agencies, State Pollution Control Boards, and environmental organisations identify weaknesses in the existing e-waste management ecosystem and prioritise corrective action.",
    "1. Introduction",
    "Electronic waste, commonly referred to as e-waste, comprises discarded electrical and electronic equipment that has reached the end of its useful life. Under the E-Waste (Management) Rules, 2022 issued by the Central Pollution Control Board (CPCB), this category spans a wide range of products, including information technology and telecommunication equipment, consumer electrical and electronic appliances, large and small equipment, lighting equipment, and batteries. As digital adoption accelerates and product replacement cycles shorten, the volume of e-waste generated at the state and district level continues to grow at a pace that outstrips the capacity of traditional, manual reporting systems to track.",
    "The management of e-waste is not merely a matter of waste disposal; it is a matter of environmental and public health protection. E-waste contains hazardous constituents such as lead, cadmium, mercury, hexavalent chromium, and brominated flame retardants, which, if handled outside authorised channels, can leach into soil and groundwater or be released into the air through open burning. At the same time, e-waste contains recoverable materials of significant economic value, including copper, aluminium, and precious metals, which are lost to the economy when waste is diverted into informal or unregulated channels rather than formal recycling infrastructure. Improper disposal compounds this problem: informal dismantling without protective equipment and open burning of circuit boards expose workers and nearby communities to toxic residues, while contaminated soil and water near informal clusters pose long-term health risks, particularly to children and to workers unaware of the hazards involved.",
    "These challenges are compounded by the fragmented nature of e-waste governance, which typically involves multiple stakeholders, including producers and Extended Producer Responsibility (EPR) entities, municipal corporations, authorised recyclers and dismantlers, State Pollution Control Boards, and informal sector participants. Data relevant to each of these stakeholders is often recorded in separate registers, spreadsheets, or paper-based systems, making it difficult for any single authority to obtain a consolidated, real-time understanding of how the overall system is performing, and slowing the pace at which corrective interventions can be designed.",
    "Digital monitoring systems address this gap by consolidating data from disparate sources into a single, structured repository that can be updated on a recurring basis and interrogated as a whole. When such data is further translated into an analytics dashboard, with composite scores, benchmark comparisons, and visual summaries, it becomes considerably more useful to policymakers than raw tabular data. A well-designed dashboard allows a decision maker to move from a single headline figure, representing overall system performance, down to the specific category responsible for underperformance, without requiring specialised data analysis skills. It is this translation of operational data into actionable insight that underlies the rationale for the project described in this report.",
    "2. Project Overview",
    "The system developed for this project is an AI-assisted E-Waste Tracker and Analytics Dashboard that consolidates operational data recorded across seven structured data sheets into a single interactive dashboard. The underlying dataset covers all twelve districts of Himachal Pradesh, namely Bilaspur, Chamba, Hamirpur, Kangra, Kinnaur, Kullu, Lahaul & Spiti, Mandi, Shimla, Sirmaur, Solan, and Una, and captures information ranging from district-wise waste generation to formal recycling infrastructure, regulatory compliance, informal sector hotspots, environmental monitoring, and public awareness activity.",
    "The dashboard integrates several core components. An interactive scorecard presents the overall State Score alongside its qualitative rating band. KPI monitoring tracks each underlying indicator against its assigned benchmark. A category-wise evaluation module breaks the composite score down into its seven constituent categories, and visual charts render this information for rapid interpretation. A scorecard generation function then recomputes the composite score automatically whenever the underlying data sheets are updated, enabling the tool to function as a live monitoring instrument rather than a static, one-time report.",
    "The composite State Score is derived from seven weighted categories: Generation & Inventory, Collection Performance, Formal Recycling & Treatment, Regulatory Compliance, Informal Sector Integration, Environmental & Health Safeguards, and Awareness & Outreach. Each category is assigned a weight that reflects its relative importance to overall e-waste governance, with Collection Performance and Formal Recycling & Treatment carrying the highest weights of twenty points each, and Generation & Inventory and Regulatory Compliance following at fifteen points each. The remaining three categories, Informal Sector Integration, Environmental & Health Safeguards, and Awareness & Outreach, each carry ten points. Within each category, an achieved value is measured against a defined benchmark or target to produce an achievement percentage, which is then multiplied by the category weight to yield the score earned for that category. The sum of the seven scores earned constitutes the final State Score out of one hundred, which is then classified into one of four descriptive bands, ranging from Critical to Excellent.",
    "3. Dashboard Analysis",
    "The dashboard records an overall State Score of 42.3 out of 100 for Himachal Pradesh, placing the state firmly within the Critical band on the scoring scale reproduced below.",
    "Score Range",
    "Rating",
    "85 – 100",
    "Excellent",
    "65 – 84",
    "Good",
    "45 – 64",
    "Needs Improvement",
    "0 – 44",
    "Critical",
    "The category-wise breakdown underlying this composite figure is summarised in the table that follows.",
    "#",
    "Category",
    "Weight",
    "Benchmark / Target",
    "Achieved Value",
    "Achievement %",
    "Score Earned",
    "1",
    "Generation & Inventory",
    "15",
    "5",
    "0",
    "0.0%",
    "0.0",
    "2",
    "Collection Performance",
    "20",
    "100.0%",
    "7.1%",
    "7.1%",
    "1.4",
    "3",
    "Formal Recycling & Treatment",
    "20",
    "100.0%",
    "87.7%",
    "87.7%",
    "17.5",
    "4",
    "Regulatory Compliance",
    "15",
    "100.0%",
    "75.0%",
    "75.0%",
    "11.3",
    "5",
    "Informal Sector Integration",
    "10",
    "100.0%",
    "0.0%",
    "0.0%",
    "0.0",
    "6",
    "Environmental & Health Safeguards",
    "10",
    "100.0%",
    "85.7%",
    "85.7%",
    "8.6",
    "7",
    "Awareness & Outreach",
    "10",
    "20",
    "7",
    "35.0%",
    "3.5",
    "A score of 42.3 does not indicate uniform underperformance across the e-waste management system; rather, it reflects a pronounced imbalance between categories that are functioning reasonably well and categories that are functioning very poorly. This distinction matters for decision makers, because a low composite score arrived at through uniform mediocrity would call for broad-based capacity building, whereas a low score arrived at through a bifurcated pattern, as observed here, calls for targeted intervention in specific, identifiable areas.",
    "Generation & Inventory",
    "This category registers an achieved value of zero against a benchmark of five, yielding no score against its assigned weight of fifteen points. This outcome is notable because the underlying data sheets do in fact contain granular, district-wise waste generation estimates, amounting to approximately 3,032.6 tonnes annually across the state, with Kangra, Solan, and Shimla contributing the largest shares. The zero score therefore does not reflect an absence of data collection at the operational level, but rather the absence of a completed, formally certified inventory update cycle against the benchmark the indicator measures — a gap between data gathered informally and data institutionalised into a recurring, verifiable reporting mechanism, with real consequences for compliance-grade reporting.",
    "Collection Performance",
    "Collection Performance is the most severely underperforming indicator relative to its weight, achieving only 7.1 percent and earning just 1.4 of a possible twenty points. Only 184,000 kilograms of e-waste were collected against total estimated generation of approximately 3,032,600 kilograms statewide, and EPR collection achievement (176,800 kilograms) also fell short of the EPR collection target (214,600 kilograms). Districts with difficult terrain and low population density, such as Lahaul & Spiti and Kinnaur, rely on periodic mobile collection camps rather than fixed centres, while even industrialised districts such as Solan and Una show collection volumes well below their generation potential. Because Collection Performance carries the highest category weight in the scorecard, this indicator is disproportionately responsible for pulling the overall State Score into the Critical band and should be treated as the foremost priority for intervention.",
    "Formal Recycling & Treatment",
    "In contrast, Formal Recycling & Treatment is the strongest-performing category, achieving 87.7 percent and earning 17.5 of twenty points. Four authorised or provisionally authorised recyclers and dismantlers operate within the state, with combined installed capacity of 2,660 tonnes per year and reported material recovery rates between 60 and 80 percent, indicating that where formal recycling infrastructure exists, it performs close to benchmark. It should be noted that two of the four listed operators remain unverified against public CPCB or State Pollution Control Board authorisation records, a discrepancy warranting administrative verification despite the strong category score.",
    "Regulatory Compliance",
    "Regulatory Compliance achieves 75 percent, earning 11.3 of fifteen points. Of eight registered producer or EPR entities tracked, six are recorded as compliant; inspections were conducted against six of seven planned visits; and of two penalties or show-cause notices issued, only one has been resolved. This suggests the oversight machinery, registration, inspection scheduling, and enforcement, operates with reasonable regularity, but that penalty resolution lags behind the earlier stages of the compliance pipeline.",
    "Informal Sector Integration",
    "Informal Sector Integration achieves an achievement percentage of zero, earning none of its ten points, and stands alongside Collection Performance as the category most in need of attention. The underlying hotspot data present a more nuanced picture: of seven identified informal clusters accounting for an estimated 380 workers, several are recorded as partially formalised, and 130 workers have already been registered or trained. None of the seven hotspots has yet reached full formalisation or remediation, the specific threshold the indicator measures, and it is this strict completion criterion, rather than an absence of remedial activity, that produces the zero score. Partial engagement is evidently occurring, but the methodology correctly treats it as insufficient, since incomplete formalisation still leaves workers exposed to the hazards of informal handling.",
    "Environmental & Health Safeguards",
    "This category achieves 85.7 percent, earning 8.6 of ten points, the second-strongest result in the scorecard. Monitoring visits across six sites identified two clear exceedances of permissible heavy metal limits, lead at the Baddi cluster and cadmium and lead jointly at the Nalagarh dismantling yard, both triggering remediation orders and worker health screening. The monitoring apparatus is thus functioning as an effective early-warning mechanism; notably, exceedances were detected at the same clusters flagged as only partially formalised in the informal sector data, underscoring the interdependence between the two categories.",
    "Awareness & Outreach",
    "Awareness & Outreach achieves 35 percent, seven completed programmes against a target of twenty, earning 3.5 of ten points. The seven programmes conducted, spanning school collection drives, industrial belt campaigns, informal sector sensitisation, and tourist-season public awareness, together reached several thousand participants, indicating reasonable attendance where programmes occur. The shortfall lies in the frequency and geographic spread of outreach activity rather than in the reach of any single programme, suggesting that scaling the existing model, rather than redesigning it, is the more direct path to improvement.",
    "Taken together, the seven category scores reveal a bifurcated system: indicators associated with formal, institutional actors, namely recycling infrastructure, regulatory compliance, and environmental monitoring, perform well above the state's overall average, while indicators associated with grassroots and citizen-facing activity, namely collection, informal sector formalisation, inventory certification, and awareness outreach, perform poorly. For decision makers, this implies that further investment in recycler capacity or compliance mechanisms, while useful, would not by itself move the state out of the Critical band. The larger opportunity lies in strengthening the upstream chain, expanding collection infrastructure, completing informal sector formalisation, and scaling awareness programmes, since these are the categories carrying the greatest untapped score potential relative to their current achievement.",
    "4. Features of the Dashboard",
    "The dashboard offers a set of features designed to make complex, multi-source e-waste data accessible to non-technical decision makers:",
    "Interactive KPI cards that present each category's achieved value against its benchmark at a glance.",
    "Automated, real-time score calculation that recomputes the composite State Score whenever underlying data sheets are updated.",
    "Benchmark comparison across all seven categories, allowing immediate identification of the indicators furthest from target.",
    "Visual analytics that translate tabular data into charts suited to rapid, non-technical interpretation.",
    "Performance tracking designed to support quarterly or annual re-assessment and trend comparison over time.",
    "Simplified interpretation of environmental and regulatory data drawn from district-level operational registers.",
    "Decision support for authorities, highlighting priority categories requiring corrective action.",
    "Data-driven monitoring that reduces reliance on fragmented, paper-based reporting across stakeholders.",
    "5. Benefits of the System",
    "The dashboard offers distinct benefits to each class of stakeholder involved in e-waste governance. For state government departments, it provides a consolidated, evidence-based view of system performance that can inform budget allocation and policy prioritisation without requiring manual reconciliation of data from multiple sources. For State Pollution Control Boards, it offers a structured means of tracking compliance status, inspection schedules, and penalty resolution across registered producers and EPR entities, supporting more consistent enforcement. For municipal corporations, the district-wise breakdown of collection and generation data assists in the planning of collection infrastructure, including the placement of collection centres in districts where current coverage is weakest.",
    "For environmental agencies, the monitoring module offers an early-warning capability, surfacing contamination exceedances alongside the health screening response and allowing remediation resources to be directed to sites of greatest need. For researchers, the structured, category-wise dataset offers a reusable foundation for trend studies once successive reporting periods accumulate. For policymakers, the composite scoring methodology offers a basis for comparing performance over time, and potentially across states, supporting more transparent and accountable e-waste governance.",
    "6. Future Enhancements",
    "Several enhancements would extend the analytical depth and operational utility of the dashboard. Predictive capability, incorporating AI-based waste generation forecasting and machine learning models trained on historical district-wise data, would allow the system to anticipate future generation volumes rather than only reporting past performance. Geographic Information System (GIS) based waste mapping would allow hotspots, collection centres, and recycling facilities to be visualised spatially rather than in tabular form alone, aiding infrastructure planning.",
    "A citizen-facing mobile reporting application would allow members of the public to report informal dumping sites or request collection directly, improving the completeness of the Collection Performance and Informal Sector Integration categories. Internet of Things (IoT) enabled smart collection bins, capable of reporting fill-levels automatically, would further reduce the manual reporting burden underlying Collection Performance, while automated alerting, triggered when an indicator falls below a defined threshold, would allow authorities to be notified proactively rather than relying on periodic manual review.",
    "Additional enhancements worth considering include carbon footprint estimation linked to recycling and landfill diversion volumes, district-wise analytics presented as a standard dashboard view, and eventual integration into a national-level dashboard architecture, allowing Himachal Pradesh's performance to be benchmarked against other states operating under the same regulatory framework.",
    "7. Conclusion",
    "This project demonstrates how a structured, AI-assisted analytics dashboard can convert fragmented, multi-stakeholder e-waste data into a single, interpretable composite score capable of supporting policy decisions. Applied to the case of Himachal Pradesh, the dashboard's overall State Score of 42.3, placing the state in the Critical band, does not indicate uniform failure across the e-waste management ecosystem but rather a specific and identifiable imbalance: strong performance in formal recycling infrastructure, regulatory compliance, and environmental monitoring, set against weak performance in collection, informal sector formalisation, inventory certification, and awareness outreach. By making this pattern visible in a single view, the dashboard enables government agencies and environmental organisations to move directly to the categories offering the greatest scope for improvement, rather than distributing resources evenly across a system whose weaknesses are, in fact, concentrated. In this respect, the project illustrates the broader value of data analytics in environmental governance: not merely the digitisation of existing records, but the transformation of those records into a decision-making instrument capable of identifying weak areas, supporting targeted intervention, and promoting more sustainable and accountable e-waste management practice over time."
  ],
  "EWaste_StateWise_Companies_Document (1).docx": [
    "State-Wise Companies Working in E-Waste Recovery",
    "and Waste Management in India",
    "Software Engineering Project — AI-Based E-Waste Management Tracker & Analytics Dashboard",
    "Reference: AI-Based E-Waste Management Tracker — Analytics Dashboard (PPT)",
    "Project Team Members",
    "Sr. No.",
    "Student Name",
    "Roll Number",
    "1.",
    "Mayur Jadhav",
    "24102B0029",
    "2.",
    "Soham Gaikwad",
    "24102B0021",
    "3.",
    "Prajwal Bhosale",
    "24102B0038",
    "1. Introduction",
    "Electronic waste (e-waste) is one of the fastest-growing waste streams globally. India generates over 3 million tonnes of e-waste annually, with a formal recycling rate of less than 30%. The remaining 70%+ is handled by the informal sector, resulting in hazardous environmental and health impacts.",
    "The reference project — an AI-Based E-Waste Management Tracker and Analytics Dashboard — focuses on Himachal Pradesh as a case study, where the state scored a critical 42.3/100 on the E-Waste Performance Index. The study highlighted that while formal recycling infrastructure (87.7%) and health safeguards (85.7%) are relatively strong, collection performance (0%) and informal sector integration (0%) are severely lacking.",
    "In response to this challenge, both central and state governments, along with a growing ecosystem of private companies, are working to formalize and scale e-waste recovery across India. This document presents a state-wise listing of key organisations — authorised recyclers, Producer Responsibility Organisations (PROs), and collection agencies — driving this sector forward.",
    "2. Regulatory Framework",
    "• E-Waste (Management) Rules, 2022 — mandates Extended Producer Responsibility (EPR) for producers, PROs, and recyclers.",
    "• Central Pollution Control Board (CPCB) — national nodal authority for e-waste authorisation and EPR portal management.",
    "• State Pollution Control Boards (SPCBs) — state-level authorities for licensing recyclers and collection centres.",
    "• Producer Responsibility Organisations (PROs) — entities like Karo Sambhav, Ecoreco, etc., who manage EPR obligations on behalf of producers.",
    "3. State-Wise Companies in E-Waste Recovery & Management",
    "1. Maharashtra",
    "Company Name",
    "Location",
    "Area of Focus",
    "Certification",
    "Attero Recycling Pvt. Ltd.",
    "Mumbai / Noida (HQ)",
    "E-waste collection, dismantling, metal recovery",
    "ISO 14001, CPCB Authorised",
    "EWaste Recycle India Pvt. Ltd.",
    "Pune",
    "Collection drives, awareness programs, recycling of IT & telecom waste",
    "CPCB Authorised",
    "Ecoreco Pvt. Ltd.",
    "Mumbai",
    "E-waste aggregation, EPR compliance services",
    "ISO 9001, CPCB Authorised",
    "2. Karnataka",
    "Company Name",
    "Location",
    "Area of Focus",
    "Certification",
    "Sims Recycling Solutions",
    "Bengaluru",
    "IT asset disposition, data destruction, precious metal recovery",
    "ISO 14001, R2, e-Stewards",
    "Trishyiraya Recycling India Pvt. Ltd.",
    "Bengaluru",
    "E-waste processing, lead acid battery recycling",
    "KSPCB Authorised, CPCB Registered",
    "Greenscape Eco Management Pvt. Ltd.",
    "Bengaluru",
    "Waste collection, transportation, e-waste processing",
    "ISO 14001, CPCB Authorised",
    "3. Delhi / NCR",
    "Company Name",
    "Location",
    "Area of Focus",
    "Certification",
    "Karo Sambhav Pvt. Ltd.",
    "Gurugram, Haryana (NCR)",
    "EPR implementation, collection, awareness & last-mile recycling",
    "CPCB Recognised PRO",
    "Ash Recyclers Pvt. Ltd.",
    "New Delhi",
    "Dismantling, shredding & recovery of ferrous and non-ferrous metals",
    "DPCC Authorised, CPCB Registered",
    "GreenDust India Pvt. Ltd.",
    "Gurugram",
    "Refurbishment, resale & recycling of consumer electronics",
    "ISO 9001, CPCB Authorised",
    "4. Tamil Nadu",
    "Company Name",
    "Location",
    "Area of Focus",
    "Certification",
    "Cerebra Integrated Technologies Ltd.",
    "Chennai",
    "IT asset management, shredding, precious metal extraction",
    "ISO 14001, TNPCB Authorised",
    "Paperman India Pvt. Ltd.",
    "Chennai",
    "E-waste collection, document shredding, data security services",
    "TNPCB Authorised",
    "Eco Birdd India Pvt. Ltd.",
    "Coimbatore",
    "Battery recycling, IT and telecom e-waste recovery",
    "TNPCB Authorised, CPCB Registered",
    "5. Gujarat",
    "Company Name",
    "Location",
    "Area of Focus",
    "Certification",
    "Greenverse Recyclers Pvt. Ltd.",
    "Ahmedabad",
    "E-waste collection, dismantling, PCB shredding",
    "GPCB Authorised",
    "Clean India Ventures Pvt. Ltd.",
    "Surat",
    "Integrated solid & e-waste management, EPR services",
    "ISO 14001, GPCB Authorised",
    "Ecoreco Pvt. Ltd. (Gujarat Operations)",
    "Vadodara",
    "E-waste aggregation, EPR compliance services",
    "GPCB Registered, CPCB Authorised",
    "6. Telangana",
    "Company Name",
    "Location",
    "Area of Focus",
    "Certification",
    "Greenwaste Management Services",
    "Hyderabad",
    "E-waste collection, IT disposal, secure data destruction",
    "TSPCB Authorised",
    "Hulladek Recycling Pvt. Ltd.",
    "Hyderabad",
    "E-waste & battery recycling, EPR compliance",
    "TSPCB Authorised, CPCB Registered",
    "Frontier Markets Pvt. Ltd.",
    "Hyderabad",
    "E-waste awareness, rural collection hubs, WEEE processing",
    "TSPCB Registered",
    "7. West Bengal",
    "Company Name",
    "Location",
    "Area of Focus",
    "Certification",
    "Ramky Enviro Engineers Ltd.",
    "Kolkata",
    "Hazardous & e-waste treatment, industrial waste management",
    "ISO 14001, WBPCB Authorised",
    "EcoRecycle India Pvt. Ltd.",
    "Kolkata",
    "E-waste collection drives, recycling, EPR management",
    "WBPCB Authorised",
    "Triton Labs Pvt. Ltd.",
    "Kolkata",
    "IT asset disposal, PCB recycling, precious metal recovery",
    "WBPCB Registered, CPCB Authorised",
    "8. Himachal Pradesh",
    "Company Name",
    "Location",
    "Area of Focus",
    "Certification",
    "HP State Pollution Control Board (HPSPCB) – Empanelled Collectors",
    "Shimla / District HQs",
    "Formal e-waste collection and routing to authorised recyclers; EPR compliance coordination",
    "HPSPCB Authorised",
    "Uttarakhand Purva Sainik Kalyan Nigam Ltd. (UPSKN) – HP Partner",
    "Shimla (Coordination)",
    "Collection camp management, awareness programs under state e-waste policy",
    "State Govt. Empanelled",
    "Karo Sambhav (HP Operations)",
    "Shimla / Dharamshala (Collection Points)",
    "EPR Producer Responsibility Organisation; last-mile collection in Himachal Pradesh districts",
    "CPCB Recognised PRO, HPSPCB Registered",
    "9. Rajasthan",
    "Company Name",
    "Location",
    "Area of Focus",
    "Certification",
    "Eco Vision Recyclers Pvt. Ltd.",
    "Jaipur",
    "E-waste dismantling, metal recovery, EPR services",
    "RPCB Authorised",
    "CleanTech Waste Solutions",
    "Jodhpur",
    "WEEE collection, IT asset disposal",
    "RPCB Registered",
    "Hulladek Recycling Pvt. Ltd. (Rajasthan Operations)",
    "Jaipur",
    "E-waste & battery recycling, EPR compliance",
    "RPCB Authorised, CPCB Registered",
    "10. Uttar Pradesh",
    "Company Name",
    "Location",
    "Area of Focus",
    "Certification",
    "Attero Recycling Pvt. Ltd. (Roorkee Plant)",
    "Roorkee (near UP border) / Noida",
    "Lithium-ion battery & e-waste recycling, NMC recovery",
    "ISO 14001, UPPCB Authorised",
    "EWaste Corp India",
    "Noida",
    "Corporate e-waste collection, data destruction, EPR management",
    "UPPCB Authorised",
    "Primus Global Technologies Pvt. Ltd.",
    "Lucknow",
    "IT asset lifecycle management, e-waste processing",
    "UPPCB Registered, CPCB Authorised",
    "4. Key Observations & Insights",
    "Southern & Western India Lead in Infrastructure",
    "States like Karnataka, Tamil Nadu, Maharashtra, and Gujarat have the highest density of CPCB-authorised recyclers and PROs. This correlates with their industrial base and higher per-capita electronic consumption.",
    "Northern Hill States Remain Underserved",
    "Himachal Pradesh — the focus state in the reference PPT — along with Uttarakhand and J&K, has very limited formal recycling infrastructure. Most e-waste is routed to recyclers in Punjab or Delhi, significantly increasing the collection gap highlighted by the 0% collection performance score.",
    "Informal Sector Still Dominates",
    "As the reference PPT's SWOT analysis shows, Informal Sector Integration scores 0% across Himachal Pradesh. This is a national challenge — nearly 70–80% of e-waste is processed by informal workers, exposing them to toxic metals like lead, cadmium, and mercury without protective equipment.",
    "EPR Compliance is Improving",
    "The E-Waste (Management) Rules, 2022 have significantly improved EPR compliance. PROs like Karo Sambhav and Ecoreco operate across multiple states, bridging the gap between producers and authorised recyclers.",
    "AI and Data Analytics as Future Tools",
    "The reference project demonstrates how AI-powered dashboards can automate KPI tracking, enable district-level performance benchmarking, and provide actionable intelligence to State Pollution Control Boards. Scaling such tools nationally could dramatically improve waste recovery rates.",
    "5. Recommendations",
    "✓  Establish CPCB-authorised collection centres in each district of underserved states like Himachal Pradesh, Uttarakhand, and the North-East.",
    "✓  Incentivise informal sector workers to partner with formal recyclers through capacity building, safety training, and livelihood programs.",
    "✓  Mandate AI-based performance tracking tools — as proposed in the reference project — for all SPCBs to monitor collection and recycling KPIs in real time.",
    "✓  Strengthen EPR implementation by requiring producers to directly fund state-level collection infrastructure in low-performing states.",
    "✓  Introduce citizen mobile reporting platforms (as proposed in the PPT roadmap) for real-time awareness and hotspot identification.",
    "6. Conclusion",
    "India's e-waste management sector is evolving rapidly, with a growing number of CPCB-authorised companies operating across major states. However, significant gaps remain in hill states and rural India. The AI-based dashboard approach explored in the reference project — moving from fragmented data to actionable environmental intelligence — represents the future of scalable, evidence-based e-waste governance. By combining formal recycler networks, strong EPR compliance, and data-driven monitoring tools, India can meaningfully close the gap between e-waste generated and e-waste formally processed.",
    "Note: Company names, certifications and operational details are accurate as of 2024–2025. Authorisations may change; always verify with the respective State Pollution Control Board or CPCB EPR Portal."
  ],
  "Responsible_AI_Research_Paper_Mayur_Updated (1).docx": [
    "An Integrated Framework for Fairness Auditing, Bias Mitigation and Explainability in Responsible AI",
    "Mayur JadhavDepartment of CMPNVidyalankar Institute of Technology(Affiliated to University of Mumbai)Mumbai, Indiamayur.jadhav@vit.edu.inDr. Aniket KunduFirst Year EngineeringVidyalankar Institute of Technology(Affiliated to University of Mumbai)Mumbai, Indiaaniket.kundu@vit.edu.in",
    "Abstract—Responsible artificial intelligence requires that automated decisions be fair, explainable and open to audit, yet these three requirements are usually studied in isolation. This paper presents an integrated five-stage framework that links data definition, bias auditing, mitigation, explanation and governance review into one repeatable workflow. The framework is evaluated on a controlled synthetic lending dataset in which historical label bias and a proxy variable are planted deliberately, so that the true sources of unfairness are known. Over twenty independent runs, two classifiers (logistic regression and gradient boosting) and four mitigation strategies are compared using statistical parity difference, disparate impact and equal opportunity difference. Equal opportunity difference falls from about 0.10 to within 0.02 of zero for every strategy, at a cost of about 0.6 percentage points of accuracy or less, whereas statistical parity improves only partly and disparate impact stays near 0.5, below the four-fifths rule. Coefficient analysis further shows that reweighing removes most of the weight that the model places on a proxy feature. The results illustrate why a single fairness metric is insufficient and why explanation should accompany every mitigation step.",
    "Keywords—Responsible AI, AI fairness, bias mitigation, explainable AI, algorithmic auditing, equal opportunity",
    "Introduction",
    "Machine learning systems now take part in decisions that shape access to credit, employment, education and healthcare. When such systems are trained on records that reflect past inequality, they can reproduce and even amplify it, often without any malicious intent on the part of their builders [1]. Documented cases include a commercial healthcare risk score that under-estimated the needs of Black patients because it used past spending as a stand-in for illness [2], and face-analysis products whose error rates differed sharply across skin tone and gender [3].",
    "These cases have moved responsible AI from an ethical aspiration to an engineering and regulatory requirement. The NIST AI Risk Management Framework asks organisations to govern, map, measure and manage AI risks [4], and the European Union AI Act places data-governance, transparency and human-oversight duties on high-risk systems [5]. Practitioners therefore need methods that can be applied, measured and documented, and not only principles.",
    "Three obstacles make this difficult. First, there is no single definition of fairness, and several popular definitions cannot hold at the same time except in degenerate cases [6], [7]. Second, deleting a protected attribute from the data does little when other variables encode it indirectly. Third, a model that is declared fair on one metric can still be unacceptable if nobody can say which inputs drive its decisions [8], [9]. Fairness, bias mitigation and explainability are therefore interdependent, yet most studies address only one of them at a time.",
    "This paper makes the following contributions:",
    "an integrated five-stage framework that connects bias auditing, mitigation, explanation and governance review;",
    "a controlled synthetic benchmark in which label bias and a proxy variable are planted, so that the cause of every disparity is known;",
    "an empirical comparison, repeated over 20 random seeds, of four mitigation strategies on two model families using three complementary group-fairness metrics; and",
    "an explanation analysis showing how mitigation changes the weight that a model gives to a proxy feature, together with practical reporting guidance.",
    "The rest of the paper is organised as follows. Section II reviews related work, Section III describes the framework, Section IV details the experimental design, Section V discusses the results, and Section VI concludes with open challenges.",
    "Related Work",
    "Definitions of Fairness",
    "Group fairness criteria compare statistics of a classifier across demographic groups. Statistical parity requires equal rates of positive predictions, while equal opportunity and equalised odds, introduced by Hardt et al., compare error rates conditioned on the true outcome [10]. Individual fairness instead demands that similar individuals receive similar predictions [11]. Book-length treatments organise these notions together with their limitations [12]. Chouldechova and Kleinberg et al. showed that when base rates differ between groups, calibration and equal error rates cannot be satisfied together [7], [6], and Corbett-Davies and Goel argue that every criterion embeds assumptions that deserve scrutiny before adoption [13].",
    "Bias Mitigation Techniques",
    "Mitigation methods are commonly grouped by the point at which they intervene. Pre-processing methods change the training data; the reweighing scheme of Kamiran and Calders assigns instance weights so that the protected attribute and the label become statistically independent in the weighted data [14]. In-processing methods alter the learning objective, for example through adversarial training that discourages a predictor from revealing group membership [15]. Post-processing methods adjust outputs after training, such as group-specific decision thresholds that equalise true-positive rates [10]. Open-source toolkits such as AI Fairness 360 bundle many of these algorithms and metrics [16].",
    "Explainability and Interpretability",
    "Explainable AI (XAI) seeks to make model behaviour understandable to people [17], [18]. Post-hoc techniques such as LIME and SHAP attribute a prediction to input features [19], [20], whereas intrinsically interpretable models expose their reasoning directly. Lipton cautions that interpretability is not a single property and that claims about it must be made precise [8], and Rudin argues that for high-stakes decisions interpretable models should be preferred over explanations of black boxes [9]. Explanations are directly useful in fairness work because they can reveal whether a model leans on a proxy for a protected attribute.",
    "Governance and Regulation",
    "Technical measures operate inside a wider governance setting. The NIST framework organises risk activities under the functions govern, map, measure and manage [4], and the EU AI Act sets obligations in proportion to risk level [5]. Both assume that an organisation can produce evidence, such as metric reports and documented design choices. The framework proposed below is intended to generate exactly that kind of evidence.",
    "Proposed Framework",
    "Fig. 1 summarises the framework. It consists of five stages that are applied in order and revisited whenever the data or the model changes.",
    "Five-stage framework for responsible model development.",
    "Stage 1: Data and Problem Definition",
    "The team states the decision to be supported, identifies protected attributes and plausible proxies, and records how the labels were produced. Label provenance matters because labels that encode earlier human decisions carry the bias of those decisions, and a model can only learn what its labels contain.",
    "Stage 2: Bias Audit",
    "Let A denote the protected attribute, Y the true label and Ŷ the model decision, with A = 0 the reference group. Three group metrics are computed on held-out data. Statistical parity difference (SPD) is the gap in positive-decision rates:",
    "SPD = P(Ŷ = 1 | A = 0) − P(Ŷ = 1 | A = 1)(1)",
    "Disparate impact (DI) is the ratio of the same rates, and values below 0.8 are widely treated as a warning sign (the four-fifths rule):",
    "DI = P(Ŷ = 1 | A = 1) / P(Ŷ = 1 | A = 0)(2)",
    "Equal opportunity difference (EOD) compares true-positive rates:",
    "EOD = P(Ŷ = 1 | A = 0, Y = 1) − P(Ŷ = 1 | A = 1, Y = 1)(3)",
    "Positive SPD and EOD values mean that the reference group is favoured. SPD and DI describe outcomes irrespective of merit, whereas EOD asks whether equally qualified people are treated equally. Reporting all three prevents a single number from hiding a trade-off.",
    "Stage 3: Bias Mitigation",
    "Four strategies are examined. Drop proxy removes the suspected proxy feature. Reweighing is a pre-processing method that gives each training instance the weight",
    "w(a, y) = P(A = a) · P(Y = y) / P(A = a, Y = y)(4)",
    "which up-weights combinations of group and label that are under-represented relative to statistical independence [14]. Threshold EO is a post-processing step that chooses a separate decision threshold ta for each group on a validation set, so that the true-positive rate of every group equals a common target τ, taken as the overall true-positive rate of the unadjusted model at a threshold of 0.5 [10]. Reweigh+EO applies reweighing first and threshold adjustment second. Because threshold adjustment uses group membership at decision time, it may be restricted in some jurisdictions and should be reviewed against the applicable legal framework.",
    "Stage 4: Explanation",
    "After mitigation, the model is explained globally with standardised logistic-regression coefficients and with permutation importance, defined as the drop in test AUC when a feature is shuffled. The purpose is to check that the mitigated model no longer relies on proxies and that its remaining drivers are defensible business factors. Local explanation tools [19], [20] can be added for individual decisions.",
    "Stage 5: Governance Review",
    "Metrics, a description of the data, mitigation choices and explanation findings are written into a model record that a reviewer outside the development team signs off, in line with the documentation and oversight themes of [4], [5]. The record also states which fairness criterion was prioritised and why, and defines the triggers for a repeat audit.",
    "Experimental Setup",
    "Synthetic Dataset",
    "A synthetic loan-approval dataset is used so that the mechanism of bias is known exactly, which is not possible with real records. Each run draws 20,000 applicants, of whom about 39% belong to group 1, the unprivileged group. Six features are generated: income (in thousands), credit score, years of employment, debt ratio, loan amount and a neighbourhood zone index. For group 1 the mean income is five units lower, the mean credit score ten points lower and the mean employment history 0.7 years shorter, while the mean debt ratio is 0.04 higher. The zone index equals the group indicator plus Gaussian noise with a standard deviation of 0.6, which makes it a proxy with a correlation of about 0.63 with group membership. A latent merit score is computed from the legitimate features, and an application is labelled approved when the merit score plus noise, minus a penalty of 0.55 for group 1, exceeds a fixed cut-off. The penalty represents historical bias in past decisions. In a representative draw the approval rate is 36.9% for group 0 and 14.0% for group 1. The protected attribute itself is never given to a classifier as an input.",
    "Models and Protocol",
    "Two model families are used: L2-regularised logistic regression with default regularisation strength, and histogram-based gradient boosting with 150 boosting rounds and a learning rate of 0.1, both from scikit-learn [21]. Features are standardised using training statistics. Each dataset is split into training (52.5%), validation (17.5%) and test (30%) portions, stratified by group and label. The validation portion is used only to choose group thresholds. All metrics are computed on the test portion, and the whole experiment is repeated for 20 random seeds, each of which regenerates the data. The tables report means over the 20 runs, and the text gives standard deviations where relevant.",
    "Evaluation Metrics",
    "Accuracy and the area under the ROC curve (AUC) measure predictive utility. SPD, DI and EOD from Section III-B measure fairness. Predicted probabilities are converted to decisions with a threshold of 0.5 except where group thresholds are tuned.",
    "Results and Discussion",
    "Effect on Group Fairness",
    "Tables I and II show clear disparities in the unmitigated models. SPD is 0.187 for logistic regression and 0.185 for gradient boosting, DI is 0.39 and 0.41, and EOD is about 0.10 in both cases. A positive EOD means that qualified applicants from group 1 are approved less often than equally qualified applicants from group 0, which is consistent with the planted label bias and with the use of the zone proxy.",
    "Logistic Regression Results (Mean of 20 Runs)",
    "Method",
    "Acc.",
    "AUC",
    "SPD",
    "DI",
    "EOD",
    "Baseline",
    "0.843",
    "0.903",
    "0.187",
    "0.393",
    "0.103",
    "Drop proxy",
    "0.841",
    "0.900",
    "0.143",
    "0.505",
    "0.012",
    "Reweighing",
    "0.840",
    "0.899",
    "0.131",
    "0.536",
    "−0.015",
    "Threshold EO",
    "0.838",
    "0.903",
    "0.146",
    "0.508",
    "0.015",
    "Reweigh+EO",
    "0.842",
    "0.899",
    "0.143",
    "0.501",
    "0.013",
    "Gradient Boosting Results (Mean of 20 Runs)",
    "Method",
    "Acc.",
    "AUC",
    "SPD",
    "DI",
    "EOD",
    "Baseline",
    "0.836",
    "0.893",
    "0.185",
    "0.411",
    "0.102",
    "Drop proxy",
    "0.832",
    "0.890",
    "0.140",
    "0.527",
    "0.003",
    "Reweighing",
    "0.832",
    "0.890",
    "0.139",
    "0.521",
    "0.006",
    "Threshold EO",
    "0.830",
    "0.893",
    "0.139",
    "0.538",
    "0.004",
    "Reweigh+EO",
    "0.832",
    "0.890",
    "0.136",
    "0.531",
    "0.000",
    "Every mitigation strategy brings EOD to between −0.015 and 0.015 in all eight model–strategy combinations, as Fig. 2 shows. The standard deviation of EOD across seeds after mitigation is between 0.028 and 0.046, so differences among the strategies are smaller than the run-to-run variation. Statistical parity improves much less. SPD declines to 0.131–0.146 for logistic regression and 0.136–0.140 for gradient boosting, and DI rises only to the range 0.50–0.54, well below 0.8.",
    "Statistical parity difference (SPD) and equal opportunity difference (EOD) before and after mitigation. Bars show means over 20 runs; error bars show one standard deviation.",
    "This is expected rather than a failure of the methods. Because the underlying approval rates differ, a classifier that treats equally qualified people equally will still approve different shares of each group, and the impossibility results cited earlier show that parity of outcomes and parity of error rates cannot both be reached when base rates differ [6], [7]. Which criterion should take priority is a policy decision that the governance stage must record, rather than a technical question that an algorithm can settle.",
    "Accuracy–Fairness Trade-off",
    "Mitigation costs little predictive utility. For logistic regression, accuracy moves from 0.843 to between 0.838 and 0.842, and AUC from 0.903 to 0.899–0.900 for the strategies that change the model, while threshold adjustment leaves AUC unchanged because it affects only decisions. For gradient boosting, accuracy moves from 0.836 to between 0.830 and 0.832. The largest accuracy loss observed is about 0.6 percentage points, so in this setting the price of equal opportunity is small.",
    "Dropping the proxy was about as effective as reweighing on EOD. This holds only because the proxy here is a single known column. In real data proxies are many and diffuse, so removal alone cannot be relied upon [12], which is why the audit and explanation stages remain necessary.",
    "What the Explanations Reveal",
    "The baseline logistic regression gives the zone index a standardised coefficient of −0.32, so applicants with higher zone values, which are associated with group 1, are penalised even when all other features are equal (Fig. 3). After reweighing, the coefficient falls in magnitude to +0.06, a reduction of about 82%, while the coefficients of the five legitimate features change by at most 0.03. Permutation importance tells the same story: shuffling the zone index lowers test AUC by 0.007 for the baseline model but has no measurable effect (−0.001) after reweighing. Without this step, an auditor would see only a lower EOD and could not tell whether the model had stopped using the proxy.",
    "Standardised logistic-regression coefficients before and after reweighing. The proxy (zone) coefficient shrinks towards zero while legitimate features keep their weights.",
    "Limitations",
    "The study has several limitations. The data are synthetic, so the absolute numbers should not be transferred to real lending systems; the value lies in the comparative behaviour under known bias. Only one binary protected attribute and one proxy are considered, whereas real systems face intersecting attributes [3]. EOD is computed against labels that carry the planted bias, so a low EOD indicates consistency with those labels and not the absence of discrimination [12]. Finally, in-processing methods such as adversarial debiasing [15] and local explanation tools were not evaluated, and the run-to-run variation of EOD (standard deviation up to 0.05) means that small differences between strategies should not be over-interpreted.",
    "Conclusion and Future Work",
    "This paper treated fairness auditing, bias mitigation and explainability as stages of one workflow rather than as separate topics. On a synthetic benchmark with known sources of bias, simple mitigation strategies removed most of the equal-opportunity gap at a very small cost in accuracy, but did not close the gap in overall approval rates, and only the explanation analysis showed that the model had stopped relying on a proxy variable. Three practical recommendations follow. Report several fairness metrics together and state which one is prioritised. Verify proxy use with explanations instead of relying on a single metric. Record every decision in a reviewable model record and re-audit when data or models change.",
    "Several directions remain. Fairness must be combined with privacy, because models trained on sensitive data can leak information, and differential privacy [22] and federated learning [23] protect individuals in ways that interact with group fairness and still need careful study. Security matters as well, since adversarially crafted inputs can manipulate model decisions [24] and could be used to evade an audit. Future work will extend the framework to public real-world datasets, intersectional groups, in-processing methods and generative models.",
    "Acknowledgment",
    "The author thanks the Department of CMPN, Vidyalankar Institute of Technology, for academic support during this work.",
    "References",
    "N. Mehrabi, F. Morstatter, N. Saxena, K. Lerman, and A. Galstyan, “A survey on bias and fairness in machine learning,” ACM Comput. Surv., vol. 54, no. 6, pp. 1–35, Jul. 2021.",
    "Z. Obermeyer, B. Powers, C. Vogeli, and S. Mullainathan, “Dissecting racial bias in an algorithm used to manage the health of populations,” Science, vol. 366, no. 6464, pp. 447–453, Oct. 2019.",
    "J. Buolamwini and T. Gebru, “Gender shades: Intersectional accuracy disparities in commercial gender classification,” in Proc. Conf. Fairness, Accountability and Transparency, PMLR 81, 2018, pp. 77–91.",
    "National Institute of Standards and Technology, “Artificial Intelligence Risk Management Framework (AI RMF 1.0),” NIST AI 100-1, Gaithersburg, MD, USA, Jan. 2023.",
    "European Parliament and Council of the European Union, “Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act),” Off. J. Eur. Union, Jul. 2024.",
    "J. Kleinberg, S. Mullainathan, and M. Raghavan, “Inherent trade-offs in the fair determination of risk scores,” in Proc. 8th Innov. Theor. Comput. Sci. Conf., 2017, pp. 43:1–43:23.",
    "A. Chouldechova, “Fair prediction with disparate impact: A study of bias in recidivism prediction instruments,” Big Data, vol. 5, no. 2, pp. 153–163, Jun. 2017.",
    "Z. C. Lipton, “The mythos of model interpretability,” Commun. ACM, vol. 61, no. 10, pp. 36–43, Oct. 2018.",
    "C. Rudin, “Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead,” Nature Mach. Intell., vol. 1, no. 5, pp. 206–215, May 2019.",
    "M. Hardt, E. Price, and N. Srebro, “Equality of opportunity in supervised learning,” in Adv. Neural Inf. Process. Syst. 29, 2016, pp. 3315–3323.",
    "C. Dwork, M. Hardt, T. Pitassi, O. Reingold, and R. Zemel, “Fairness through awareness,” in Proc. 3rd Innov. Theor. Comput. Sci. Conf., 2012, pp. 214–226.",
    "S. Barocas, M. Hardt, and A. Narayanan, Fairness and Machine Learning: Limitations and Opportunities. Cambridge, MA, USA: MIT Press, 2023.",
    "S. Corbett-Davies and S. Goel, “The measure and mismeasure of fairness: A critical review of fair machine learning,” 2018, arXiv:1808.00023.",
    "F. Kamiran and T. Calders, “Data preprocessing techniques for classification without discrimination,” Knowl. Inf. Syst., vol. 33, no. 1, pp. 1–33, Oct. 2012.",
    "B. H. Zhang, B. Lemoine, and M. Mitchell, “Mitigating unwanted biases with adversarial learning,” in Proc. AAAI/ACM Conf. AI, Ethics, and Society, 2018, pp. 335–340.",
    "R. K. E. Bellamy et al., “AI Fairness 360: An extensible toolkit for detecting and mitigating algorithmic bias,” IBM J. Res. Dev., vol. 63, no. 4/5, pp. 4:1–4:15, 2019.",
    "A. Barredo Arrieta et al., “Explainable artificial intelligence (XAI): Concepts, taxonomies, opportunities and challenges toward responsible AI,” Inf. Fusion, vol. 58, pp. 82–115, Jun. 2020.",
    "R. Guidotti, A. Monreale, S. Ruggieri, F. Turini, F. Giannotti, and D. Pedreschi, “A survey of methods for explaining black box models,” ACM Comput. Surv., vol. 51, no. 5, pp. 1–42, Sep. 2018.",
    "M. T. Ribeiro, S. Singh, and C. Guestrin, “‘Why should I trust you?’: Explaining the predictions of any classifier,” in Proc. 22nd ACM SIGKDD Int. Conf. Knowl. Discovery Data Mining, 2016, pp. 1135–1144.",
    "S. M. Lundberg and S.-I. Lee, “A unified approach to interpreting model predictions,” in Adv. Neural Inf. Process. Syst. 30, 2017, pp. 4765–4774.",
    "F. Pedregosa et al., “Scikit-learn: Machine learning in Python,” J. Mach. Learn. Res., vol. 12, pp. 2825–2830, 2011.",
    "C. Dwork and A. Roth, “The algorithmic foundations of differential privacy,” Found. Trends Theor. Comput. Sci., vol. 9, no. 3–4, pp. 211–407, 2014.",
    "B. McMahan, E. Moore, D. Ramage, S. Hampson, and B. A. y Arcas, “Communication-efficient learning of deep networks from decentralized data,” in Proc. 20th Int. Conf. Artif. Intell. Statist., PMLR 54, 2017, pp. 1273–1282.",
    "I. J. Goodfellow, J. Shlens, and C. Szegedy, “Explaining and harnessing adversarial examples,” in Proc. Int. Conf. Learn. Represent., 2015, arXiv:1412.6572."
  ]
};
  const XLSX_PREVIEWS = {
  "Himachal_Pradesh_EWaste_Tracker (3) (1).xlsx": {
    "sheets": [
      "0_Scorecard",
      "Instructions",
      "1_Generation_Inventory",
      "2_Collection_Log",
      "3_Recycling_Infrastructure",
      "4_Compliance_Tracker",
      "5_Informal_Sector_Hotspots",
      "6_Env_Health_Monitoring",
      "7_Awareness_Programs"
    ],
    "rows": [
      [
        "State E-Waste Management Scorecard",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      [
        "Live score out of 100, calculated from the 7 data sheets. Set benchmarks in the yellow 'Target/Benchmark' cells.",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      [
        "STATE SCORE",
        "",
        "57.3",
        "",
        "NEEDS IMPROVEMENT",
        "",
        "",
        ""
      ],
      [
        "#",
        "Category",
        "Weight",
        "Benchmark / Target",
        "Achieved Value",
        "Achievement %",
        "Score Earned"
      ],
      [
        "1",
        "Generation & Inventory",
        "15",
        "5",
        "12",
        "1",
        "15"
      ],
      [
        "2",
        "Collection Performance",
        "20",
        "1",
        "0.0707643606146541",
        "0.0707643606146541",
        "1.4"
      ],
      [
        "3",
        "Formal Recycling & Treatment",
        "20",
        "1",
        "0.87713513157027",
        "0.87713513157027",
        "17.5"
      ],
      [
        "4",
        "Regulatory Compliance",
        "15",
        "1",
        "0.75",
        "0.75",
        "11.3"
      ],
      [
        "5",
        "Informal Sector Integration",
        "10",
        "1",
        "0",
        "0",
        "0"
      ],
      [
        "6",
        "Environmental & Health Safeguards",
        "10",
        "1",
        "0.857142857142857",
        "0.857142857142857",
        "8.6"
      ],
      [
        "7",
        "Awareness & Outreach",
        "10",
        "20",
        "7",
        "0.35",
        "3.5"
      ],
      [
        "",
        "TOTAL SCORE",
        "100",
        "",
        "",
        "",
        "57.3"
      ],
      [
        "Score Bands:"
      ],
      [
        "85-100",
        "Excellent"
      ],
      [
        "65-84",
        "Good"
      ],
      [
        "45-64",
        "Needs Improvement"
      ],
      [
        "0-44",
        "Critical"
      ]
    ]
  },
  "LEED_Buildings_Weightage_and_Scoring.xlsx": {
    "sheets": [
      "LEED Weightage",
      "10 Buildings",
      "Building Score Template",
      "Methodology"
    ],
    "rows": [
      [
        "LEED Category",
        "Maximum Points",
        "Weightage (%)",
        "Derivation"
      ],
      [
        "Integrative Process",
        "1",
        "0.91",
        "1 / 110 × 100"
      ],
      [
        "Location & Transportation",
        "16",
        "14.55",
        "16 / 110 × 100"
      ],
      [
        "Sustainable Sites",
        "10",
        "9.09",
        "10 / 110 × 100"
      ],
      [
        "Water Efficiency",
        "11",
        "10",
        "11 / 110 × 100"
      ],
      [
        "Energy & Atmosphere",
        "33",
        "30",
        "33 / 110 × 100"
      ],
      [
        "Materials & Resources",
        "13",
        "11.82",
        "13 / 110 × 100"
      ],
      [
        "Indoor Environmental Quality",
        "16",
        "14.55",
        "16 / 110 × 100"
      ],
      [
        "Innovation",
        "6",
        "5.45",
        "6 / 110 × 100"
      ],
      [
        "Regional Priority",
        "4",
        "3.64",
        "4 / 110 × 100"
      ],
      [
        "TOTAL",
        "110",
        "100",
        "110 / 110 × 100"
      ]
    ]
  }
};

  // Application State
  const state = {
    currentCategory: 'All',
    searchQuery: '',
    sortOrder: 'timeline-asc',
    activeModalAssignmentId: null,
    filteredAssignments: []
  };

  // DOM Elements Cache
  const DOM = {
    // Stats
    statTotalAssignments: document.getElementById('statTotalAssignments'),
    statTotalISA: document.getElementById('statTotalISA'),
    statTotalESE: document.getElementById('statTotalESE'),
    statTotalExtras: document.getElementById('statTotalExtras'),

    // Category Buttons
    pillBtns: document.querySelectorAll('.pill-btn'),
    pillCountAll: document.getElementById('pillCountAll'),
    pillCountISA: document.getElementById('pillCountISA'),
    pillCountESE: document.getElementById('pillCountESE'),
    pillCountExtras: document.getElementById('pillCountExtras'),

    // Search & Sort
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    sortOrderSelect: document.getElementById('sortOrderSelect'),
    resultsCountText: document.getElementById('resultsCountText'),

    // Grid & Empty State
    cardsGrid: document.getElementById('cardsGrid'),
    emptyState: document.getElementById('emptyState'),
    resetFilterBtn: document.getElementById('resetFilterBtn'),

    // Modal Elements
    previewModal: document.getElementById('previewModal'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalTitle: document.getElementById('modalTitle'),
    modalAssignmentNum: document.getElementById('modalAssignmentNum'),
    modalCategoryBadge: document.getElementById('modalCategoryBadge'),
    modalFormatBadge: document.getElementById('modalFormatBadge'),
    modalDateMeta: document.getElementById('modalDateMeta'),
    modalSizeMeta: document.getElementById('modalSizeMeta'),
    modalFileMeta: document.getElementById('modalFileMeta'),
    modalBody: document.getElementById('modalBody'),
    modalDownloadBtn: document.getElementById('modalDownloadBtn'),
    modalNewTabBtn: document.getElementById('modalNewTabBtn'),
    modalPrevBtn: document.getElementById('modalPrevBtn'),
    modalNextBtn: document.getElementById('modalNextBtn'),
    modalPaginationText: document.getElementById('modalPaginationText'),

    // Go to Top Buttons
    navGoTopBtn: document.getElementById('navGoTopBtn'),
    floatingGoTopBtn: document.getElementById('floatingGoTopBtn'),

    // Stat Cards
    statCards: document.querySelectorAll('.stat-card')
  };

  /**
   * Initialize Dashboard
   */
  function init() {
    calculateAndRenderStats();
    setupEventListeners();
    filterAndRenderCards();
  }

  /**
   * Calculate Statistics Dynamically from Actual Inventory
   * Guaranteed No Hardcoded or Fake Values
   */
  function calculateAndRenderStats() {
    const totalCount = ASSIGNMENTS.length;
    const isaCount = ASSIGNMENTS.filter(function (item) { return item.category === 'ISA'; }).length;
    const eseCount = ASSIGNMENTS.filter(function (item) { return item.category === 'ESE'; }).length;
    const extrasCount = ASSIGNMENTS.filter(function (item) { return item.category === 'Extras'; }).length;

    // Update Statistics Cards
    if (DOM.statTotalAssignments) animateCounter(DOM.statTotalAssignments, totalCount);
    if (DOM.statTotalISA) animateCounter(DOM.statTotalISA, isaCount);
    if (DOM.statTotalESE) animateCounter(DOM.statTotalESE, eseCount);
    if (DOM.statTotalExtras) animateCounter(DOM.statTotalExtras, extrasCount);

    // Update Category Pill Badges
    if (DOM.pillCountAll) DOM.pillCountAll.textContent = totalCount;
    if (DOM.pillCountISA) DOM.pillCountISA.textContent = isaCount;
    if (DOM.pillCountESE) DOM.pillCountESE.textContent = eseCount;
    if (DOM.pillCountExtras) DOM.pillCountExtras.textContent = extrasCount;
  }

  /**
   * Animated Numeric Counter
   */
  function animateCounter(element, target) {
    let current = 0;
    const step = target > 0 ? Math.ceil(target / 12) : 1;
    const timer = setInterval(function () {
      current += step;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = current;
      }
    }, 25);
  }

  /**
   * Filter and Sort Assignments
   */
  function getFilteredAssignments() {
    const query = state.searchQuery.trim().toLowerCase();

    const filtered = ASSIGNMENTS.filter(function (item) {
      // Category match
      const categoryMatch = state.currentCategory === 'All' || item.category === state.currentCategory;
      if (!categoryMatch) return false;

      // Search match
      if (!query) return true;

      const titleMatch = item.name.toLowerCase().includes(query);
      const descMatch = item.description.toLowerCase().includes(query);
      const typeMatch = item.fileType.toLowerCase().includes(query);
      const fileMatch = item.fileName.toLowerCase().includes(query);
      const numMatch = item.assignmentNum.toLowerCase().includes(query);
      const dateMatch = item.submissionDate.toLowerCase().includes(query);

      return titleMatch || descMatch || typeMatch || fileMatch || numMatch || dateMatch;
    });

    // Sorting
    filtered.sort(function (a, b) {
      if (state.sortOrder === 'timeline-asc') {
        return a.id - b.id;
      } else if (state.sortOrder === 'timeline-desc') {
        return b.id - a.id;
      } else if (state.sortOrder === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return filtered;
  }

  /**
   * Render Assignment Cards Grid
   */
  function filterAndRenderCards() {
    const list = getFilteredAssignments();
    state.filteredAssignments = list;

    // Update Results Counter Text
    if (DOM.resultsCountText) {
      if (state.searchQuery) {
        DOM.resultsCountText.textContent = 'Found ' + list.length + ' result' + (list.length === 1 ? '' : 's') + ' for "' + state.searchQuery + '"';
      } else if (state.currentCategory === 'All') {
        DOM.resultsCountText.textContent = 'Showing all ' + list.length + ' submissions';
      } else {
        DOM.resultsCountText.textContent = 'Showing ' + list.length + ' ' + state.currentCategory + ' submission' + (list.length === 1 ? '' : 's');
      }
    }

    // Toggle Empty State
    if (list.length === 0) {
      DOM.cardsGrid.innerHTML = '';
      DOM.emptyState.hidden = false;
      return;
    }

    DOM.emptyState.hidden = true;

    // Build Cards HTML
    const cardsHtml = list.map(function (item) {
      const encodedPath = encodeURI('data/' + item.fileName);
      const catClass = item.category === 'ISA' ? 'cat-isa' : item.category === 'ESE' ? 'cat-ese' : 'cat-extras';
      const badgeFormatClass = 'badge-' + item.fileType.toLowerCase();

      return `
        <article class="assignment-card" data-id="${item.id}">
          <div class="card-main-content">
            <!-- Header Row: Number Tag + Handed In Badge -->
            <div class="card-header-row">
              <span class="card-num-badge">${escapeHtml(item.assignmentNum)}</span>
              <span class="status-handed-in" title="Submitted on academic portal">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Handed in
              </span>
            </div>

            <!-- Assignment Name -->
            <h3 class="card-title" title="${escapeHtml(item.name)}">${escapeHtml(item.name)}</h3>

            <!-- Metadata Row -->
            <div class="card-meta-row">
              <span class="card-date">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                ${escapeHtml(item.submissionDate)} · ${escapeHtml(item.submissionTime)}
              </span>
              <span class="card-category-tag ${catClass}">${item.category}</span>
            </div>

            <!-- Description -->
            <p class="card-description">${escapeHtml(item.description)}</p>
          </div>

          <!-- Footer: File Info + Action Buttons -->
          <div class="card-footer">
            <div class="file-format-badge ${badgeFormatClass}">
              <span>${item.fileType}</span>
              <span class="file-size-text">· ${item.fileSize}</span>
            </div>

            <div class="card-actions">
              <button class="btn-card btn-view" data-action="view" data-id="${item.id}" title="View document preview">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>View</span>
              </button>

              <a href="${encodedPath}" download="${escapeHtml(item.fileName)}" class="btn-card btn-download" title="Download original ${item.fileType} file">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    DOM.cardsGrid.innerHTML = cardsHtml;
  }

  /**
   * Open Document Preview Modal
   */
  function openModal(assignmentId) {
    const item = ASSIGNMENTS.find(function (a) { return a.id === assignmentId; });
    if (!item) return;

    state.activeModalAssignmentId = assignmentId;

    // Header Details
    DOM.modalTitle.textContent = item.name;
    DOM.modalAssignmentNum.textContent = item.assignmentNum;
    DOM.modalCategoryBadge.textContent = item.category;
    DOM.modalCategoryBadge.className = 'modal-category-badge ' + (item.category === 'ISA' ? 'cat-isa' : item.category === 'ESE' ? 'cat-ese' : 'cat-extras');

    DOM.modalFormatBadge.textContent = item.fileType;
    DOM.modalFormatBadge.className = 'modal-format-badge badge-' + item.fileType.toLowerCase();

    DOM.modalDateMeta.textContent = 'Submitted on ' + item.submissionDate + ' at ' + item.submissionTime;
    DOM.modalSizeMeta.textContent = item.fileSize;
    DOM.modalFileMeta.textContent = item.fileName;

    const encodedPath = encodeURI('data/' + item.fileName);
    DOM.modalDownloadBtn.href = encodedPath;
    DOM.modalDownloadBtn.download = item.fileName;
    DOM.modalNewTabBtn.href = encodedPath;

    // Render Preview Body Based on File Type
    renderModalBody(item);

    // Update Pagination & Controls
    updateModalPagination();

    // Show Modal
    DOM.previewModal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  /**
   * Render Modal Preview Content (PDF, JPG, DOCX, XLSX)
   */
  function renderModalBody(item) {
    const encodedPath = encodeURI('data/' + item.fileName);

    if (item.fileType === 'PDF') {
      DOM.modalBody.innerHTML = `
        <iframe src="${encodedPath}#toolbar=1" class="pdf-viewer-frame" title="PDF Viewer - ${escapeHtml(item.name)}"></iframe>
      `;
    } else if (item.fileType === 'JPG' || item.fileType === 'PNG') {
      DOM.modalBody.innerHTML = `
        <div class="image-viewer-container">
          <img src="${encodedPath}" alt="${escapeHtml(item.name)}" class="preview-image" />
          <div class="image-caption-card">
            <strong>${escapeHtml(item.name)}</strong> · Original submission photo (${item.fileSize})
            <br>
            <span class="font-mono text-muted">File: ${escapeHtml(item.fileName)}</span>
          </div>
        </div>
      `;
    } else if (item.fileType === 'DOCX') {
      renderDocxPreview(item);
    } else if (item.fileType === 'XLSX') {
      renderXlsxPreview(item);
    }
  }

  /**
   * Render Structured Word Document (DOCX) Preview
   */
  function renderDocxPreview(item) {
    const paragraphs = DOCX_PREVIEWS[item.fileName] || [];

    let docxHtml = `
      <div class="docx-reader-container">
        <div class="docx-reader-header">
          <h1 class="docx-doc-title">${escapeHtml(item.name)}</h1>
          <div class="docx-authors-card">
            <div class="docx-authors-title">Academic Author & Affiliation</div>
            <div><strong>Mayur Jadhav</strong> · Roll No: 24102B0029 · TE CMPN B</div>
            <div class="text-muted">Department of Computer Engineering, Vidyalankar Institute of Technology (Affiliated to University of Mumbai)</div>
          </div>
          <div class="docx-abstract-box">
            <strong>Document Overview:</strong> ${escapeHtml(item.description)}
          </div>
        </div>
        <div class="docx-content-body">
    `;

    // Process extracted paragraphs with formatting
    paragraphs.forEach(function (para) {
      const trimmed = para.trim();
      if (!trimmed) return;

      // Detect Headings & Subheadings
      if (
        trimmed.length < 90 &&
        (trimmed.startsWith('Figure ') ||
         trimmed.startsWith('1.') ||
         trimmed.startsWith('2.') ||
         trimmed.startsWith('3.') ||
         trimmed.startsWith('4.') ||
         trimmed.startsWith('5.') ||
         trimmed.startsWith('6.') ||
         trimmed.startsWith('7.') ||
         trimmed.startsWith('8.') ||
         trimmed.startsWith('Objective') ||
         trimmed.startsWith('Introduction') ||
         trimmed.startsWith('Abstract') ||
         trimmed.startsWith('Keywords') ||
         trimmed.startsWith('Changes Made') ||
         trimmed.startsWith('Conclusion') ||
         trimmed.includes('Hydrometallurgy Process') ||
         trimmed.includes('State-Wise Companies'))
      ) {
        docxHtml += `<h3 class="docx-heading">${escapeHtml(trimmed)}</h3>`;
      } else if (trimmed.length < 70 && trimmed.endsWith(':')) {
        docxHtml += `<h4 class="docx-subheading">${escapeHtml(trimmed)}</h4>`;
      } else {
        docxHtml += `<p class="docx-paragraph">${escapeHtml(trimmed)}</p>`;
      }
    });

    docxHtml += `
        </div>
      </div>
    `;

    DOM.modalBody.innerHTML = docxHtml;
  }

  /**
   * Render Interactive Spreadsheet (XLSX) Preview
   */
  function renderXlsxPreview(item) {
    const xlsxData = XLSX_PREVIEWS[item.fileName];
    if (!xlsxData) {
      DOM.modalBody.innerHTML = `
        <div style="padding: 3rem; text-align: center;">
          <p>Spreadsheet preview is loading. Click Download to inspect original workbook.</p>
        </div>
      `;
      return;
    }

    const sheets = xlsxData.sheets || [];
    const rows = xlsxData.rows || [];

    let previewHtml = `
      <div class="xlsx-viewer-container">
        <div class="xlsx-sheet-header">
          <div>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main);">${escapeHtml(item.name)}</h3>
            <span style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">${sheets.length} Sheets Available in Workbook</span>
          </div>
          <div class="xlsx-sheet-tabs">
            ${sheets.map(function (sheet, idx) {
              return `<span class="xlsx-sheet-tab ${idx === 0 ? 'active' : ''}">${escapeHtml(sheet)}</span>`;
            }).join('')}
          </div>
        </div>
    `;

    // Special Header Banner for Himachal Pradesh Scorecard
    if (item.fileName.includes('Himachal')) {
      previewHtml += `
        <div class="scorecard-banner">
          <div class="scorecard-title-group">
            <h3>State E-Waste Management Scorecard</h3>
            <p>Himachal Pradesh Operational Score derived across 7 performance indicator sheets</p>
          </div>
          <div class="scorecard-badge">
            <div class="scorecard-score">57.3 <span style="font-size: 1rem; color: var(--text-muted);">/ 100</span></div>
            <span class="scorecard-status">Needs Improvement</span>
          </div>
        </div>
      `;
    }

    // Special Header Banner for LEED Green Building Matrix
    if (item.fileName.includes('LEED')) {
      previewHtml += `
        <div class="scorecard-banner">
          <div class="scorecard-title-group">
            <h3>LEED Credit Category Weightage Model</h3>
            <p>110 Total Points distribution across 9 core green building appraisal categories</p>
          </div>
          <div class="scorecard-badge">
            <div class="scorecard-score">110 <span style="font-size: 1rem; color: var(--text-muted);">Points</span></div>
            <span class="scorecard-status" style="color: #34d399;">100% Weightage</span>
          </div>
        </div>
      `;
    }

    // Render Clean Score Table
    if (rows && rows.length > 0) {
      previewHtml += `
        <div class="custom-table-wrapper">
          <table class="xlsx-table">
            <thead>
              <tr>
                ${rows[0].map(function (col) {
                  return `<th>${escapeHtml(col)}</th>`;
                }).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows.slice(1).map(function (row) {
                return `
                  <tr>
                    ${row.map(function (cell, cIdx) {
                      const isBold = cIdx === 0 || cIdx === row.length - 1;
                      return `<td style="${isBold ? 'font-weight: 600;' : ''}">${escapeHtml(cell)}</td>`;
                    }).join('')}
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    previewHtml += `</div>`;
    DOM.modalBody.innerHTML = previewHtml;
  }

  /**
   * Close Document Modal
   */
  function closeModal() {
    DOM.previewModal.hidden = true;
    DOM.modalBody.innerHTML = '';
    state.activeModalAssignmentId = null;
    document.body.style.overflow = '';
  }

  /**
   * Navigate Previous / Next in Modal
   */
  function navigateModal(direction) {
    if (!state.activeModalAssignmentId) return;

    const list = state.filteredAssignments.length > 0 ? state.filteredAssignments : ASSIGNMENTS;
    const currentIndex = list.findIndex(function (a) { return a.id === state.activeModalAssignmentId; });

    if (currentIndex === -1) return;

    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < list.length) {
      openModal(list[newIndex].id);
    }
  }

  /**
   * Update Modal Pagination and Prev/Next State
   */
  function updateModalPagination() {
    const list = state.filteredAssignments.length > 0 ? state.filteredAssignments : ASSIGNMENTS;
    const currentIndex = list.findIndex(function (a) { return a.id === state.activeModalAssignmentId; });

    if (currentIndex === -1) return;

    DOM.modalPaginationText.textContent = (currentIndex + 1) + ' of ' + list.length;
    DOM.modalPrevBtn.disabled = currentIndex === 0;
    DOM.modalNextBtn.disabled = currentIndex === list.length - 1;
  }

  /**
   * Setup Event Listeners
   */
  function setupEventListeners() {
    // Category Pills
    DOM.pillBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        DOM.pillBtns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        state.currentCategory = btn.getAttribute('data-category');
        filterAndRenderCards();
      });
    });

    // Stat Cards Click to Filter Category
    DOM.statCards.forEach(function (card) {
      card.addEventListener('click', function () {
        const target = card.getAttribute('data-stat-target');
        const pill = Array.from(DOM.pillBtns).find(function (b) {
          return b.getAttribute('data-category') === target;
        });
        if (pill) {
          pill.click();
          DOM.cardsGrid.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Search Input Real-Time
    DOM.searchInput.addEventListener('input', function (e) {
      state.searchQuery = e.target.value;
      DOM.clearSearchBtn.hidden = !state.searchQuery;
      filterAndRenderCards();
    });

    // Clear Search Button
    DOM.clearSearchBtn.addEventListener('click', function () {
      DOM.searchInput.value = '';
      state.searchQuery = '';
      DOM.clearSearchBtn.hidden = true;
      DOM.searchInput.focus();
      filterAndRenderCards();
    });

    // Reset Filters Button
    DOM.resetFilterBtn.addEventListener('click', function () {
      DOM.searchInput.value = '';
      state.searchQuery = '';
      DOM.clearSearchBtn.hidden = true;

      const allPill = Array.from(DOM.pillBtns).find(function (b) {
        return b.getAttribute('data-category') === 'All';
      });
      if (allPill) allPill.click();
    });

    // Sort Order
    DOM.sortOrderSelect.addEventListener('change', function (e) {
      state.sortOrder = e.target.value;
      filterAndRenderCards();
    });

    // Card View Button Delegated Click
    DOM.cardsGrid.addEventListener('click', function (e) {
      const viewBtn = e.target.closest('[data-action="view"]');
      if (viewBtn) {
        const id = parseInt(viewBtn.getAttribute('data-id'), 10);
        openModal(id);
      }
    });

    // Modal Close
    DOM.modalCloseBtn.addEventListener('click', closeModal);
    DOM.modalBackdrop.addEventListener('click', closeModal);

    // Modal Navigation
    DOM.modalPrevBtn.addEventListener('click', function () { navigateModal(-1); });
    DOM.modalNextBtn.addEventListener('click', function () { navigateModal(1); });

    // Keyboard Shortcuts
    document.addEventListener('keydown', function (e) {
      // Focus Search on '/'
      if (e.key === '/' && document.activeElement !== DOM.searchInput && DOM.previewModal.hidden) {
        e.preventDefault();
        DOM.searchInput.focus();
        return;
      }

      // Close modal on Escape
      if (e.key === 'Escape' && !DOM.previewModal.hidden) {
        closeModal();
        return;
      }

      // Prev / Next on Left / Right Arrow in modal
      if (!DOM.previewModal.hidden) {
        if (e.key === 'ArrowLeft') {
          navigateModal(-1);
        } else if (e.key === 'ArrowRight') {
          navigateModal(1);
        }
      }
    });

    // Scroll Go to Top
    DOM.navGoTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    DOM.floatingGoTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 350) {
        DOM.floatingGoTopBtn.classList.add('visible');
      } else {
        DOM.floatingGoTopBtn.classList.remove('visible');
      }
    }, { passive: true });
  }

  /**
   * Escape HTML utility
   */
  function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
