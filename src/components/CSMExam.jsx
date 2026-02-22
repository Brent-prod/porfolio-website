import React, { useState, useEffect, } from "react";

/* ─── GOOGLE FONTS LOADER ─────────────────────────────────────────── */
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);
  return null;
};

/* ─── FULL QUESTION BANK (105 Qs) ─────────────────────────────────── */
const ALL_QUESTIONS = [
  { id:1, category:"Scrum Theory", multi:false, question:"What is Scrum?", options:["A sequential design process where progress flows steadily downwards","A lightweight framework for generating value through adaptive solutions for complex problems","A software development methodology intended to improve software quality","A project management technique based on fixed plans and detailed instructions"], answer:[1], explanation:"Scrum is a lightweight framework that helps people, teams and organisations generate value through adaptive solutions for complex problems. (2020 Scrum Guide)" },
  { id:2, category:"Scrum Theory", multi:false, question:"Scrum is founded on which two core ideas?", options:["Agile thinking and iterative development","Empiricism and lean thinking","Transparency and continuous improvement","Complexity theory and systems thinking"], answer:[1], explanation:"Scrum is founded on empiricism and lean thinking. Empiricism asserts that knowledge comes from experience; lean thinking reduces waste and focuses on the essentials." },
  { id:3, category:"Scrum Theory", multi:false, question:"Scrum is NOT a process or technique. True or False?", options:["True","False"], answer:[0], explanation:"Scrum is not a process, technique, or definitive method. Rather, it is a framework within which you can employ various processes and techniques." },
  { id:4, category:"Scrum Theory", multi:false, question:"Scrum recommends using only the components and rules that suit a particular project. True or False?", options:["True","False"], answer:[1], explanation:"Each element of the framework serves a specific purpose. Leaving out elements or not following the rules covers up problems and limits the benefits, potentially rendering Scrum useless." },
  { id:5, category:"Scrum Theory", multi:false, question:"Which correctly orders the three empirical Scrum pillars?", options:["Inspection, Transparency, Adaptation","Transparency, Inspection, Adaptation","Adaptation, Transparency, Inspection","Inspection, Adaptation, Transparency"], answer:[1], explanation:"The three pillars are Transparency → Inspection → Adaptation. Transparency enables Inspection; Inspection enables Adaptation." },
  { id:6, category:"Scrum Theory", multi:false, question:"What does the Scrum Guide say about Inspection without Adaptation?", options:["It is encouraged when time is limited","It is considered pointless","It is an acceptable practice for mature teams","It is misleading and wasteful"], answer:[1], explanation:"'Inspection without adaptation is considered pointless. Scrum events are designed to provoke change.' (2020 Scrum Guide)" },
  { id:7, category:"Scrum Theory", multi:false, question:"What does the Scrum Guide say about Transparency without Inspection?", options:["It is considered pointless","It is misleading and wasteful","It is the foundation of Scrum","It is an acceptable starting point"], answer:[1], explanation:"'Transparency enables inspection. Inspection without transparency is misleading and wasteful.' (2020 Scrum Guide)" },
  { id:8, category:"Scrum Theory", multi:false, question:"Scrum uses an iterative, incremental approach primarily to do what?", options:["Speed up delivery at any cost","Optimize predictability and control risk","Reduce the need for documentation","Remove the need for project managers"], answer:[1], explanation:"Scrum employs an iterative, incremental approach to optimize predictability and to control risk." },
  { id:9, category:"Scrum Theory", multi:false, question:"How frequently should Scrum users inspect artifacts and progress toward a Sprint Goal?", options:["As frequently as possible","Frequently, but not so much that it gets in the way of the work","Only at the Daily Scrum","Only at the Sprint Review"], answer:[1], explanation:"Artifacts and progress must be inspected frequently and diligently to detect potentially undesirable variances — but not so frequently that inspection gets in the way of the work." },
  { id:10, category:"Scrum Theory", multi:false, question:"If aspects of a process deviate outside acceptable limits, when must an adjustment be made?", options:["As soon as possible to minimise further deviation","At the next Daily Scrum after discussion","After clarifying details with the Product Owner","After Scrum Master approval"], answer:[0], explanation:"The adjustment must be made as soon as possible to minimise further deviation. (2020 Scrum Guide)" },
  { id:11, category:"Scrum Theory", multi:false, question:"What is the essence of Scrum?", options:["A small team of people that is highly flexible and adaptive","The Scrum Guide","The Developers","The Scrum Master and the Product Owner"], answer:[0], explanation:"The essence of Scrum is a small team of people. The individual team is highly flexible and adaptive." },
  { id:12, category:"Scrum Theory", multi:false, question:"Is it normal to have a 'hardening' Sprint to remove all technical debt and prepare the product for release?", options:["No — every Increment must already be Done and usable","Yes — this is standard practice","Only for the final Sprint","Only if the Definition of Done allows it"], answer:[0], explanation:"This is not normal Scrum. Each Sprint should deliver a Done, usable Increment. There should be nothing to 'harden' — the Increment should already meet the Definition of Done." },
  { id:13, category:"Scrum Theory", multi:false, question:"All Scrum Teams on the same product must have the same Sprint length. True or False?", options:["True","False"], answer:[1], explanation:"Scrum does not require aligned Sprint lengths for multiple teams. Each Scrum Team sets its own Sprint length." },
  { id:14, category:"Scrum Theory", multi:false, question:"What does a Burn-down Chart show?", options:["How much work remains toward a goal over time","How much is known about the product over time","Dependencies and start/stop times for tasks","The hierarchy of tasks in a project"], answer:[0], explanation:"A burn-down chart shows the evolution of remaining effort against time — how much work remains until the end of the Sprint or project." },
  { id:15, category:"Scrum Theory", multi:false, question:"What does the Cone of Uncertainty describe?", options:["The hierarchy of tasks in a project","How much work remains toward the Sprint Goal","The evolution of the amount of uncertainty during a project","Dependencies and start/stop times for project tasks"], answer:[2], explanation:"The Cone of Uncertainty describes how much is known about the product over time — the evolution of the amount of uncertainty during a project." },
  { id:16, category:"Scrum Theory", multi:false, question:"When the empirical Scrum pillars come to life, what do they build?", options:["Faster delivery cycles","Trust","Better documentation","Larger team capacity"], answer:[1], explanation:"When Scrum values are embodied and the pillars come to life, they build trust within and around the Scrum Team." },
  { id:17, category:"Scrum Values", multi:false, question:"Which of the following is NOT one of the five Scrum values?", options:["Courage","Transparency","Commitment","Respect"], answer:[1], explanation:"The five Scrum values are Commitment, Focus, Openness, Respect, and Courage. Transparency is a Scrum pillar, not a value." },
  { id:18, category:"Scrum Values", multi:false, question:"Which Scrum value encourages team members to do the right thing and work on tough problems?", options:["Commitment","Focus","Openness","Courage"], answer:[3], explanation:"'The Scrum Team members have the courage to do the right thing, to work on tough problems.' (2020 Scrum Guide)" },
  { id:19, category:"Scrum Values", multi:false, question:"The Scrum Team's primary focus during a Sprint is on what?", options:["Satisfying the stakeholders","The work of the Sprint to make the best progress toward their goals","Completing all backlog items","Meeting the project deadline"], answer:[1], explanation:"Their primary focus is on the work of the Sprint to make the best possible progress toward these goals." },
  { id:20, category:"Scrum Values", multi:true, question:"Select all five Scrum Values.", options:["Commitment","Courage","Focus","Openness","Respect","Self-organisation","Effectiveness","Agility"], answer:[0,1,2,3,4], explanation:"The five Scrum values are: Commitment, Courage, Focus, Openness, and Respect." },
  { id:21, category:"Scrum Team", multi:false, question:"What is the typical recommended maximum size of a Scrum Team?", options:["7 people","8 people","10 people","12 people"], answer:[2], explanation:"The Scrum Team is typically 10 or fewer people. Smaller teams communicate better and are more productive." },
  { id:22, category:"Scrum Team", multi:false, question:"Within a Scrum Team, who decides who does what, when, and how?", options:["The Scrum Master","The Product Owner","The Scrum Team internally (self-managing)","The organisation's management"], answer:[2], explanation:"Scrum Teams are self-managing, meaning they internally decide who does what, when, and how." },
  { id:23, category:"Scrum Team", multi:false, question:"If multiple Scrum Teams work on the same product, what must they share?", options:["The same Scrum Master and Daily Scrum time","The same Product Goal, Product Backlog, and Product Owner","The same Sprint length and retrospective format","The same team room and tooling"], answer:[1], explanation:"Multiple teams focused on the same product should share the same Product Goal, Product Backlog, and Product Owner." },
  { id:24, category:"Scrum Team", multi:false, question:"How many sub-teams or hierarchies exist within a Scrum Team?", options:["As many as needed for specialisation","One hierarchy led by the Scrum Master","None","Depends on team size"], answer:[2], explanation:"Within a Scrum Team, there are no sub-teams or hierarchies. It is a cohesive unit of professionals." },
  { id:25, category:"Scrum Team", multi:false, question:"The Scrum Master is focused only on the Scrum Team and does not care about those outside. True or False?", options:["True","False"], answer:[1], explanation:"Scrum Masters serve the broader organisation — they help employees and stakeholders understand Scrum and remove barriers between stakeholders and Scrum Teams." },
  { id:26, category:"Scrum Team", multi:false, question:"Could the Product Owner and Scrum Master also be Developers?", options:["Yes, Scrum does not prohibit it, though it is not best practice","No, it is strictly prohibited by the Scrum Guide","Only the Scrum Master may also be a Developer","Only with the organisation's permission"], answer:[0], explanation:"Scrum does not prohibit the Product Owner or Scrum Master from doing development work. However, it is not best practice as it can create a conflict of interest." },
  { id:27, category:"Scrum Team", multi:false, question:"The entire Scrum Team is accountable for what every Sprint?", options:["Delivering all items in the Sprint Backlog","Creating a valuable, useful Increment","Meeting every stakeholder expectation","Completing the Product Goal"], answer:[1], explanation:"The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint." },
  { id:28, category:"Scrum Team", multi:true, question:"What are the two essential features a Scrum Team must possess?", options:["It should choose how best to accomplish work rather than being directed by others outside the team","It should have all competencies needed to accomplish the work without depending on others not part of the team","It should use tools and processes approved by the organisation","It should be flexible enough to complete all planned work even if team members are away"], answer:[0,1], explanation:"Scrum Teams are self-managing (choose how to accomplish work) and cross-functional (have all competencies needed to create value each Sprint)." },
  { id:29, category:"Developers", multi:false, question:"Who is responsible for sizing Product Backlog items?", options:["The Product Owner","The Scrum Master","The Developers","The stakeholders"], answer:[2], explanation:"The Developers who will be doing the work are responsible for the sizing. The Product Owner may influence them by helping understand trade-offs." },
  { id:30, category:"Developers", multi:false, question:"Who creates the Sprint Backlog?", options:["The Product Owner","The Scrum Master","The Developers","The entire Scrum Team collaboratively"], answer:[2], explanation:"The Sprint Backlog is a plan by and for the Developers. Developers are accountable for creating it." },
  { id:31, category:"Developers", multi:false, question:"Who is responsible for all estimates in the Product Backlog?", options:["The Developers","The Product Owner","The Scrum Team","The Scrum Master"], answer:[0], explanation:"The Developers who will do the work make the estimates. The Product Owner may influence them by helping understand trade-offs, but the final estimate belongs to those doing the work." },
  { id:32, category:"Developers", multi:false, question:"During the Daily Scrum, if the Product Owner is actively working on Sprint Backlog items, how do they participate?", options:["They observe without participating","They join as a stakeholder","They participate as Developers","They lead the event as Product Owner"], answer:[2], explanation:"If the Product Owner or Scrum Master are actively working on items in the Sprint Backlog, they participate as Developers." },
  { id:33, category:"Developers", multi:false, question:"The Sprint Backlog belongs solely to whom?", options:["The Product Owner","The Scrum Team","The Developers","The Scrum Master"], answer:[2], explanation:"The Sprint Backlog is a plan by and for the Developers. Only the Developers can change it during a Sprint." },
  { id:34, category:"Developers", multi:false, question:"The Sprint Backlog is created at Sprint Planning. Is it prohibited to add new work to it later?", options:["False — the Developers modify the Sprint Backlog throughout the Sprint as more is learned","True — no changes are permitted after Sprint Planning"], answer:[0], explanation:"The Developers modify the Sprint Backlog throughout the Sprint. As new work is required, they add it to the Sprint Backlog." },
  { id:35, category:"Developers", multi:false, question:"Who tracks total work remaining in the Sprint Backlog to project the likelihood of achieving the Sprint Goal?", options:["The Developers","The Product Owner","The Scrum Master","The Product Owner and Developers"], answer:[0], explanation:"The Developers track total work remaining at least for every Daily Scrum to project likelihood of achieving the Sprint Goal." },
  { id:36, category:"Product Owner", multi:false, question:"Who is accountable for maximising the value of the product?", options:["The Scrum Master","The Developers","The Product Owner","The stakeholders"], answer:[2], explanation:"The Product Owner is accountable for maximising the value of the product resulting from the work of the Scrum Team." },
  { id:37, category:"Product Owner", multi:false, question:"If a stakeholder wants to change the Product Backlog, what must they do?", options:["Raise a change request with the Scrum Master","Speak directly to the Developers","Try to convince the Product Owner","Submit it at the Sprint Review"], answer:[2], explanation:"Those wanting to change the Product Backlog can do so by trying to convince the Product Owner." },
  { id:38, category:"Product Owner", multi:false, question:"It is good practice to have at least two Product Owners on large projects. True or False?", options:["True","False"], answer:[1], explanation:"The Product Owner is one person, not a committee. They may represent the needs of many stakeholders in the Product Backlog." },
  { id:39, category:"Product Owner", multi:false, question:"When the Product Owner delegates Product Backlog responsibilities to others, who remains accountable?", options:["The delegated team members","The Scrum Master","The Product Owner","The entire Scrum Team"], answer:[2], explanation:"The Product Owner may delegate responsibilities to others. Regardless, the Product Owner remains accountable." },
  { id:40, category:"Product Owner", multi:false, question:"What is the correct order of items in the Product Backlog?", options:["Alphabetical order","Most valuable and clear items at the top; less valuable and unclear items lower","Recently added items at the top","Less clear items at the top for refinement focus"], answer:[1], explanation:"The Product Owner orders the Product Backlog to best achieve goals. The most valuable and clear items are at the top." },
  { id:41, category:"Product Owner", multi:false, question:"Who is responsible for monitoring progress toward high-level product goals?", options:["The Product Owner","The Product Owner and Developers","The Scrum Master and Developers","The Scrum Master"], answer:[0], explanation:"The Product Owner tracks total work remaining at least every Sprint Review and compares it with previous Sprint Reviews to assess progress toward the goal." },
  { id:42, category:"Product Owner", multi:false, question:"What is the single source of requirements for any changes to be made to the product?", options:["The Product Backlog","The CEO of the organisation","The key stakeholders","The Sprint Backlog"], answer:[0], explanation:"The Product Backlog is an emergent, ordered list of what is needed to improve the product — the single source of work undertaken by the Scrum Team." },
  { id:43, category:"Product Owner", multi:true, question:"Who is allowed to make changes in the Product Backlog? (Select all that apply)", options:["The Product Owner","The Developers, when the Product Owner delegates to them","The key stakeholders directly","Anyone at any time","The Scrum Master"], answer:[0,1], explanation:"The Product Owner is the sole person responsible for the Product Backlog, but may delegate some management work to the Developers." },
  { id:44, category:"Scrum Master", multi:false, question:"How does the 2020 Scrum Guide describe the Scrum Master?", options:["A project manager who tracks team velocity","A true leader who serves the Scrum Team and the larger organisation","A facilitator who only runs Scrum events","A coach who focuses exclusively on the Developers"], answer:[1], explanation:"'Scrum Masters are true leaders who serve the Scrum Team and the larger organisation.' (2020 Scrum Guide)" },
  { id:45, category:"Scrum Master", multi:false, question:"Who is responsible for promoting and supporting Scrum?", options:["The Scrum Master","The Product Owner","The Scrum Team","The Developers"], answer:[0], explanation:"The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide by helping everyone understand Scrum theory and practice." },
  { id:46, category:"Scrum Master", multi:false, question:"What is the Scrum Master accountable for?", options:["Maximising the value of the product","Establishing Scrum as defined in the Scrum Guide","Creating and ordering Product Backlog items","Delivering the Sprint Increment"], answer:[1], explanation:"The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide and for the Scrum Team's effectiveness." },
  { id:47, category:"Scrum Master", multi:false, question:"What is the Scrum Master's responsibility regarding Scrum events?", options:["To run all events and keep minutes","To ensure all events take place and are positive, productive, and within the timebox","To decide who attends each event","To cancel events that are unnecessary"], answer:[1], explanation:"The Scrum Master ensures that all Scrum events take place and are positive, productive, and kept within the timebox." },
  { id:48, category:"Scrum Master", multi:true, question:"How does the Scrum Master serve the Product Owner? (Select three)", options:["Helping find techniques for effective Product Backlog management","Ordering Product Backlog items on their behalf","Helping the Scrum Team understand the need for clear and concise Product Backlog items","Facilitating stakeholder collaboration as requested or needed","Approving the Product Goal"], answer:[0,2,3], explanation:"The Scrum Master serves the PO by: helping find effective backlog management techniques, helping the team understand the need for clear PBIs, and facilitating stakeholder collaboration." },
  { id:49, category:"Scrum Master", multi:true, question:"How does the Scrum Master serve the Developers? (Select three)", options:["Removing impediments to the Developers' progress","Coaching Developers in self-management and cross-functionality","Helping the Developers to create high-value Increments","Adding or removing Developers based on velocity changes","Telling Developers how to turn Product Backlog items into Increments"], answer:[0,1,2], explanation:"The Scrum Master serves Developers by coaching in self-management/cross-functionality, helping create high-value Increments, and removing impediments." },
  { id:50, category:"Scrum Master", multi:true, question:"How does the Scrum Master serve the organisation? (Select three)", options:["Leading, training, and coaching the organisation in Scrum adoption","Planning and advising Scrum implementations within the organisation","Working with other Scrum Masters to increase the effectiveness of Scrum","Mixing experienced and junior Developers across teams to speed adoption","Ensuring key stakeholders are invited to all Sprint Reviews"], answer:[0,1,2], explanation:"The Scrum Master serves the organisation by leading/coaching Scrum adoption, planning implementations, helping employees understand empiricism, and working with other Scrum Masters." },
  { id:51, category:"Scrum Master", multi:true, question:"The Scrum Master does the following regarding the Daily Scrum (select all applicable):", options:["Ensures that the Developers have the meeting","Is solely responsible for conducting the Daily Scrum","Teaches the Developers to keep the Daily Scrum within the 15-minute timebox","Ensures that others who are present do not disrupt the meeting"], answer:[0,2,3], explanation:"The Scrum Master ensures the Daily Scrum happens, teaches the 15-minute timebox, and ensures non-Developers don't disrupt it — but the Developers are responsible for conducting it." },
  { id:52, category:"Scrum Master", multi:false, question:"Who is responsible for coping with incomplete artifact transparency?", options:["The Scrum Master","The Product Owner","The Developers","The Scrum Team"], answer:[0], explanation:"The Scrum Master's job is to work with the Scrum Team and the organisation to increase the transparency of the artifacts through learning, convincing, and change." },
  { id:53, category:"The Sprint", multi:false, question:"What is the maximum length of a Sprint?", options:["Two weeks","Three weeks","One month","Six weeks"], answer:[2], explanation:"Sprints are fixed-length events of one month or less to create consistency." },
  { id:54, category:"The Sprint", multi:false, question:"When does a new Sprint start?", options:["After a brief break for the team to recharge","Immediately after the conclusion of the previous Sprint","At the beginning of each calendar month","After the Sprint Review is approved by stakeholders"], answer:[1], explanation:"A new Sprint starts immediately after the conclusion of the previous Sprint." },
  { id:55, category:"The Sprint", multi:false, question:"During a Sprint, which of the following is true about the Sprint Goal?", options:["It can be changed if the Product Owner requests it","No changes are made that would endanger it","It can be extended if the team falls behind","It can be dropped if business priorities shift"], answer:[1], explanation:"During the Sprint, no changes are made that would endanger the Sprint Goal." },
  { id:56, category:"The Sprint", multi:false, question:"Who has the authority to cancel a Sprint?", options:["The Scrum Master","The Developers","Any member of the Scrum Team","Only the Product Owner"], answer:[3], explanation:"Only the Product Owner has the authority to cancel the Sprint — if the Sprint Goal becomes obsolete." },
  { id:57, category:"The Sprint", multi:false, question:"During a Sprint, which of the following is true about scope?", options:["Scope is fixed once Sprint Planning ends","Scope may be clarified and renegotiated with the Product Owner as more is learned","The Scrum Master can adjust scope to protect the team","Scope can only be changed at the Sprint Review"], answer:[1], explanation:"Scope may be clarified and renegotiated with the Product Owner as more is learned during the Sprint." },
  { id:58, category:"The Sprint", multi:false, question:"If an item in the Sprint Backlog cannot be finished by the end of the Sprint, the Sprint is cancelled. True or False?", options:["True","False"], answer:[1], explanation:"A Sprint is cancelled only if the Sprint Goal becomes obsolete. If some work cannot be done, the Sprint Backlog is renegotiated between the Product Owner and Developers." },
  { id:59, category:"The Sprint", multi:true, question:"What happens when a Sprint is cancelled? (Select three)", options:["Any completed and 'Done' Product Backlog items are reviewed","If part of the work is potentially releasable, the Product Owner typically accepts it","All incomplete Product Backlog Items are re-estimated and put back on the Product Backlog","Several top backlog items are taken into the Sprint Backlog to replace the obsolete items","The Scrum Master determines who from the team is responsible for the cancellation"], answer:[0,1,2], explanation:"When cancelled: Done items are reviewed and potentially accepted by the PO; incomplete items are re-estimated and returned to the Product Backlog." },
  { id:60, category:"The Sprint", multi:true, question:"What happens during the Sprint? (Select three)", options:["No changes are made that would endanger the Sprint Goal","Quality does not decrease","Scope may be clarified and renegotiated with the Product Owner as more is learned","The Sprint Goal is changed frequently to reflect the status of remaining work","Sprint scope is defined at Sprint Planning and cannot change"], answer:[0,1,2], explanation:"During the Sprint: the Sprint Goal is protected, quality does not decrease, and scope can be clarified/renegotiated with the PO." },
  { id:61, category:"The Sprint", multi:false, question:"What does Scrum say about additional meetings not defined in Scrum?", options:["They are prohibited","They are allowed if they facilitate achieving the Sprint Goal","They must be approved by the Scrum Master","They replace the Scrum events if the team agrees"], answer:[1], explanation:"Scrum is not prescriptive about additional meetings. Events are used to minimise the need for undefined meetings, but additional meetings are allowed when they provide value." },
  { id:62, category:"Sprint Planning", multi:false, question:"Sprint Planning for a one-month Sprint is timeboxed to a maximum of:", options:["Four hours","Six hours","Eight hours","Ten hours"], answer:[2], explanation:"Sprint Planning is timeboxed to a maximum of eight hours for a one-month Sprint. Shorter Sprints have shorter Sprint Planning." },
  { id:63, category:"Sprint Planning", multi:false, question:"What are the three topics Sprint Planning addresses?", options:["Who, What, When","Why, What, How","Goal, Items, Timeline","Value, Capacity, Design"], answer:[1], explanation:"Sprint Planning addresses: Why is this Sprint valuable? What can be Done this Sprint? How will the chosen work get done?" },
  { id:64, category:"Sprint Planning", multi:false, question:"Who proposes how the product could increase its value during Sprint Planning?", options:["The Scrum Master","The Developers","The Product Owner","The stakeholders"], answer:[2], explanation:"The Product Owner proposes how the product could increase its value and utility in the current Sprint." },
  { id:65, category:"Sprint Planning", multi:false, question:"Who decides how Product Backlog items are turned into Increments of value?", options:["The Product Owner","The Scrum Master","The Developers — at their sole discretion","The entire Scrum Team together"], answer:[2], explanation:"How items are turned into Increments is 'at the sole discretion of the Developers. No one else tells them how.' (2020 Scrum Guide)" },
  { id:66, category:"Sprint Planning", multi:false, question:"Can people outside the Scrum Team attend Sprint Planning?", options:["No, Sprint Planning is only for the Scrum Team","Yes, the Scrum Team may invite others to provide technical or domain advice","Yes, but only if the Scrum Master approves","Only the Product Owner can invite outside people"], answer:[1], explanation:"The Scrum Team may also invite other people to attend Sprint Planning to provide advice." },
  { id:67, category:"Sprint Planning", multi:false, question:"Only the Product Owner and Developers participate in Sprint Planning — there is nothing for the Scrum Master to do. True or False?", options:["True","False"], answer:[1], explanation:"Sprint Planning is created by the collaborative work of the entire Scrum Team — including the Scrum Master." },
  { id:68, category:"Sprint Planning", multi:false, question:"What provides guidance to the Developers on WHY they are building the Increment?", options:["The Sprint Goal","The Scrum Master","The Product Owner","The Sprint Backlog"], answer:[0], explanation:"The Sprint Goal provides guidance on why the Developers are building the Increment. The Sprint Backlog is composed of the Sprint Goal (why), selected PBIs (what), and the delivery plan (how)." },
  { id:69, category:"Sprint Planning", multi:false, question:"Who is responsible for crafting the Sprint Goal at Sprint Planning?", options:["The Product Owner","The Scrum Team","The Scrum Master","The Developers"], answer:[1], explanation:"The whole Scrum Team collaborates to define a Sprint Goal that communicates why the Sprint is valuable to stakeholders." },
  { id:70, category:"Sprint Planning", multi:false, question:"By the end of Sprint Planning, all Sprint Backlog items must be decomposed into tasks of one day or less. True or False?", options:["True","False"], answer:[1], explanation:"Only work planned for the first days of the Sprint needs to be decomposed by the end of Sprint Planning, often to units of one day or less." },
  { id:71, category:"Daily Scrum", multi:false, question:"What is the timebox for the Daily Scrum?", options:["30 minutes","20 minutes","15 minutes","10 minutes"], answer:[2], explanation:"The Daily Scrum is a 15-minute event for the Developers of the Scrum Team." },
  { id:72, category:"Daily Scrum", multi:false, question:"The Daily Scrum timebox depends on the size of the Developers group. True or False?", options:["True","False"], answer:[1], explanation:"The Daily Scrum is a 15-minute event regardless of the size of the Developers group." },
  { id:73, category:"Daily Scrum", multi:false, question:"What is the purpose of the Daily Scrum?", options:["To report status to the Scrum Master","To inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary","To identify and resolve all impediments","To update the Product Owner on team progress"], answer:[1], explanation:"The purpose of the Daily Scrum is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary, adjusting the upcoming planned work." },
  { id:74, category:"Daily Scrum", multi:false, question:"Is the Daily Scrum the only time Developers are allowed to adjust their plan?", options:["Yes, all planning must happen in the Daily Scrum","No — they often meet throughout the day for more detailed discussions","No, but additional meetings require Scrum Master approval","Yes, except during Sprint Planning"], answer:[1], explanation:"The Daily Scrum is not the only time Developers are allowed to adjust their plan. They often meet throughout the day for more detailed discussions." },
  { id:75, category:"Daily Scrum", multi:false, question:"Is it allowed to skip the Daily Scrum if there is nothing to talk about?", options:["Yes","No"], answer:[1], explanation:"Each event in Scrum is a formal opportunity to inspect and adapt. Failure to include any event is a lost opportunity to inspect and adapt." },
  { id:76, category:"Daily Scrum", multi:false, question:"The structure of the Daily Scrum must always follow the three standard questions. True or False?", options:["True","False"], answer:[1], explanation:"The 2020 Scrum Guide removed the three standard questions as a requirement. The Developers can select whatever structure they want, as long as the focus is on progress toward the Sprint Goal." },
  { id:77, category:"Daily Scrum", multi:false, question:"The Daily Scrum must always take exactly 15 minutes — if done in 5 minutes, 10 more must be used for other activities. True or False?", options:["True","False"], answer:[1], explanation:"All Scrum events are timeboxed with a maximum duration, not a minimum. Events can end early if the purpose has been achieved." },
  { id:78, category:"Daily Scrum", multi:false, question:"Who is allowed to participate in the Daily Scrum?", options:["The Developers","The entire Scrum Team","The Scrum Master and Developers only","Anyone who chooses to attend"], answer:[0], explanation:"The Daily Scrum is a 15-minute event for the Developers. If others are present, the Scrum Master ensures they do not disrupt the meeting." },
  { id:79, category:"Sprint Review", multi:false, question:"The Sprint Review is timeboxed to a maximum of how long for a one-month Sprint?", options:["Two hours","Three hours","Four hours","Eight hours"], answer:[2], explanation:"The Sprint Review is timeboxed to a maximum of four hours for a one-month Sprint." },
  { id:80, category:"Sprint Review", multi:false, question:"Can an Increment be released to stakeholders before the Sprint Review?", options:["No, the Sprint Review is the gate for releasing value","Yes — an Increment may be delivered to stakeholders prior to the end of the Sprint","Only with the Scrum Master's approval","Only if the Definition of Done has been waived"], answer:[1], explanation:"An Increment may be delivered to stakeholders prior to the end of the Sprint. The Sprint Review should never be considered a gate to releasing value." },
  { id:81, category:"Sprint Review", multi:false, question:"What should the Scrum Team avoid at the Sprint Review?", options:["Inviting too many stakeholders","Limiting it to a presentation only","Discussing the Product Backlog","Talking about what changed in the environment"], answer:[1], explanation:"The Sprint Review is a working session — the Scrum Team should avoid limiting it to a presentation." },
  { id:82, category:"Sprint Review", multi:false, question:"What is the result of the Sprint Review?", options:["A revised Product Backlog that defines probable items for the next Sprint","A list of improvements the Scrum Team will implement in the next Sprint","A common understanding of progress toward the Sprint Goal","A signed-off Increment ready for release"], answer:[0], explanation:"The result of the Sprint Review is a revised Product Backlog that defines the probable Product Backlog items for the next Sprint." },
  { id:83, category:"Sprint Review", multi:true, question:"Who participates in the Sprint Review? (Select all applicable)", options:["The Scrum Master","The Product Owner","The Developers","The key stakeholders","The organisation CEO (always required)"], answer:[0,1,2,3], explanation:"The Sprint Review is attended by the Scrum Team and stakeholders. The CEO may attend but is not always required." },
  { id:84, category:"Sprint Review", multi:true, question:"Which meetings can people outside the Scrum Team attend? (Select two)", options:["Sprint Planning","Sprint Review","Sprint Retrospective","Daily Scrum"], answer:[0,1], explanation:"Outside people may attend Sprint Planning (for technical/domain advice) and the Sprint Review (stakeholders). The Retrospective is for the Scrum Team only." },
  { id:85, category:"Sprint Retrospective", multi:false, question:"What is the timebox for the Sprint Retrospective in a one-month Sprint?", options:["One hour","Two hours","Three hours","Four hours"], answer:[2], explanation:"The Sprint Retrospective is timeboxed to a maximum of three hours for a one-month Sprint." },
  { id:86, category:"Sprint Retrospective", multi:false, question:"Can improvements identified in the Sprint Retrospective be added to the next Sprint Backlog?", options:["No — they must go to the Product Backlog first","Yes — the most impactful improvements may be added to the Sprint Backlog","Only if approved by the Product Owner","Only if they are technical improvements"], answer:[1], explanation:"The most impactful improvements are addressed as soon as possible. They may even be added to the Sprint Backlog for the next Sprint." },
  { id:87, category:"Sprint Retrospective", multi:false, question:"The Sprint Retrospective focuses on which areas of inspection?", options:["Product quality and customer feedback","Individuals, interactions, processes, tools, and their Definition of Done","Budget, timeline, and scope","Stakeholder satisfaction and business value"], answer:[1], explanation:"The team inspects how the Sprint went with regard to individuals, interactions, processes, tools, and their Definition of Done." },
  { id:88, category:"Sprint Retrospective", multi:false, question:"What is the Sprint Retrospective?", options:["An opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint","The key inspect-and-adapt meeting for the product","A meeting where Developers synchronise activities and plan the next 24 hours","A meeting to inspect the Increment and adapt the Product Backlog"], answer:[0], explanation:"The Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint." },
  { id:89, category:"Sprint Retrospective", multi:true, question:"The purpose of the Sprint Retrospective is to (select three):", options:["Inspect how the last Sprint went with regards to individuals, interactions, processes, tools, and the DoD","Identify and order the major items that went well and potential improvements","Create a plan for implementing improvements to the way the Scrum Team does its work","Get feedback from key stakeholders invited by the Product Owner","Get technical advice from specialists invited by the Scrum Master"], answer:[0,1,2], explanation:"The Retrospective purpose: inspect the last Sprint, identify improvements, and create a plan for implementing those improvements." },
  { id:90, category:"Sprint Retrospective", multi:false, question:"The Sprint Retrospective concludes the Sprint. True or False?", options:["True","False"], answer:[0], explanation:"The Sprint Retrospective concludes the Sprint. It is the last event in a Sprint." },
  { id:91, category:"Artifacts", multi:false, question:"What is the commitment associated with the Product Backlog?", options:["The Sprint Goal","The Definition of Done","The Product Goal","The Increment"], answer:[2], explanation:"For the Product Backlog, the commitment is the Product Goal. For the Sprint Backlog — Sprint Goal. For the Increment — Definition of Done." },
  { id:92, category:"Artifacts", multi:false, question:"If a Product Backlog item does not meet the Definition of Done, what happens to it?", options:["It is released with a known defect noted","It can be presented at the Sprint Review with caveats","It returns to the Product Backlog for future consideration","It is discarded permanently"], answer:[2], explanation:"If a PBI does not meet the Definition of Done, it cannot be released or presented at the Sprint Review. It returns to the Product Backlog for future consideration." },
  { id:93, category:"Artifacts", multi:false, question:"The Sprint Backlog is composed of which three elements?", options:["User stories, tasks, and acceptance criteria","Sprint Goal (why), selected PBIs (what), and plan for delivery (how)","Backlog items, capacity plan, and velocity chart","Sprint Goal, Definition of Done, and team assignments"], answer:[1], explanation:"The Sprint Backlog is composed of: the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), plus an actionable plan for delivering the Increment (how)." },
  { id:94, category:"Artifacts", multi:false, question:"What are the three Scrum Artifacts?", options:["Product Backlog, Sprint Backlog, Increment","Product Backlog, Sprint Goal, Definition of Done","Product Goal, Sprint Backlog, Increment","Product Backlog, Sprint Backlog, Sprint Goal"], answer:[0], explanation:"The three Scrum artifacts are: Product Backlog, Sprint Backlog, and Increment." },
  { id:95, category:"Artifacts", multi:false, question:"What is the Increment?", options:["Only the Product Backlog items completed during the current Sprint","A concrete stepping stone toward the Product Goal, additive to all prior Increments","All items in the Sprint Backlog regardless of Done status","All items that could be released regardless of whether the PO decides to release"], answer:[1], explanation:"An Increment is a concrete stepping stone toward the Product Goal. Each Increment is additive to all prior Increments and thoroughly verified, ensuring that all Increments work together." },
  { id:96, category:"Artifacts", multi:false, question:"All Scrum Teams working on the same product should use the same Product Backlog. True or False?", options:["True","False"], answer:[0], explanation:"Multiple Scrum Teams working on the same product use one Product Backlog to describe upcoming work on that product." },
  { id:97, category:"Artifacts", multi:false, question:"What part of the Developers' capacity does Product Backlog refinement typically consume?", options:["Not more than 10%","Not more than 20%","Not more than 5%","Developers are not authorised for backlog refinement"], answer:[0], explanation:"Product Backlog refinement usually consumes no more than 10% of the capacity of the Developers." },
  { id:98, category:"Artifacts", multi:false, question:"A Product Backlog is never complete. True or False?", options:["True","False"], answer:[0], explanation:"A Product Backlog is never complete. It is dynamic and constantly changes to identify what the product needs. As long as a product exists, its Product Backlog also exists." },
  { id:99, category:"Artifacts", multi:false, question:"Who creates the Definition of Done when the organisation has no existing standard?", options:["Only the Developers","Only the Scrum Master","The Scrum Team","The Product Owner"], answer:[2], explanation:"If the Definition of Done is not an organisational standard, the Scrum Team must create a Definition of Done appropriate for the product. (2020 Scrum Guide)" },
  { id:100, category:"Artifacts", multi:false, question:"Definition of Done is created in the first Sprint and remains unchanged until product release. True or False?", options:["True","False"], answer:[1], explanation:"The Definition of Done can be expanded during Sprint Retrospectives. As the Scrum Team matures, the DoD may become stricter." },
  { id:101, category:"Artifacts", multi:true, question:"How does the Definition of Done help the Scrum Team? (Select three)", options:["It is used to assess when work is complete on the product Increment","It guides the Developers in knowing how many PBIs they can select during Sprint Planning","It ensures artifact transparency","It helps calculate the velocity of the Scrum Team","It replaces the Sprint Goal as the primary focus"], answer:[0,1,2], explanation:"The DoD: (1) assesses when work is complete, (2) guides how many PBIs can be selected during Sprint Planning, and (3) ensures artifact transparency." },
  { id:102, category:"Artifacts", multi:false, question:"What is the Product Goal?", options:["The short-term objective for a single Sprint","The long-term objective for the Scrum Team — they must fulfil or abandon one before taking on the next","A description of the features to be delivered in the current release","The business case for building the product"], answer:[1], explanation:"The Product Goal is the long-term objective for the Scrum Team. They must fulfil (or abandon) one Product Goal before taking on the next." },
  { id:103, category:"Artifacts", multi:false, question:"It is good practice to have a special technical Sprint that only removes technical debt with no new functionality. True or False?", options:["True","False"], answer:[1], explanation:"This is not aligned with Scrum. The purpose of each Sprint is to deliver a Done, usable Increment. A Sprint without a usable Increment undermines the empirical nature of Scrum." },
  { id:104, category:"Artifacts", multi:false, question:"The Definition of Done can be reviewed and adapted during each Sprint Retrospective. True or False?", options:["True","False"], answer:[0], explanation:"The Scrum Team inspects how the last Sprint went including their Definition of Done. The DoD may be adapted during the Retrospective to increase quality." },
  { id:105, category:"Artifacts", multi:false, question:"Work cannot be considered part of an Increment unless it meets which condition?", options:["It has been approved by the Product Owner","It meets the Definition of Done","It has been presented at the Sprint Review","It has been tested by an external QA team"], answer:[1], explanation:"'Work cannot be considered part of an Increment unless it meets the Definition of Done.' (2020 Scrum Guide)" },
];

const CAT_COLORS = {
  "Scrum Theory":"#E8A838","Scrum Values":"#E85F5C","Scrum Team":"#5CA4E8",
  "Developers":"#5CE87A","Product Owner":"#E8A838","Scrum Master":"#B05CE8",
  "The Sprint":"#E85F5C","Sprint Planning":"#5CE8D4","Daily Scrum":"#E88A5C",
  "Sprint Review":"#5CE8D4","Sprint Retrospective":"#9AE85C","Artifacts":"#B05CE8"
};

const TOTAL_TIME = 60 * 60;
const EXAM_SIZE = 50;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickExam() { return shuffle(ALL_QUESTIONS).slice(0, EXAM_SIZE); }

function fmt(s) {
  return `${Math.floor(s/60).toString().padStart(2,"0")}:${(s%60).toString().padStart(2,"0")}`;
}

function isCorrect(q, ans) {
  if (!ans || !ans.length) return false;
  return [...q.answer].sort().join() === [...ans].sort().join();
}

/* ─── STYLES ──────────────────────────────────────────────────────── */
const S = {
  // Palette
  bg: "#0D0D0D",
  surface: "#161616",
  surfaceHover: "#1E1E1E",
  border: "rgba(255,255,255,0.07)",
  gold: "#E8A838",
  goldDim: "rgba(232,168,56,0.15)",
  text: "#F0EDE8",
  muted: "#6B6B6B",
  green: "#5CE87A",
  red: "#E85F5C",
};

export default function App() {
  const [phase, setPhase] = useState("start");
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [pending, setPending] = useState([]);
  const [filter, setFilter] = useState("all");

  const startExam = () => {
    setQuestions(pickExam());
    setAnswers({}); setFlagged({}); setCurrent(0);
    setTimeLeft(TOTAL_TIME); setPending([]);
    setPhase("exam");
  };

  useEffect(() => {
    if (phase !== "exam") return;
    if (timeLeft <= 0) { setPhase("results"); return; }
    const t = setInterval(() => setTimeLeft(s => s - 1), 1000);
    return () => clearInterval(t);
  }, [phase, timeLeft]);

  const q = questions[current];
  const answered = answers[current] !== undefined;
  const score = questions.reduce((a, q, i) => isCorrect(q, answers[i]) ? a + 1 : a, 0);
  const pct = questions.length ? Math.round(score / questions.length * 100) : 0;
  const passed = pct >= 74;
  const timePct = timeLeft / TOTAL_TIME * 100;
  const timerColor = timeLeft < 600 ? S.red : timeLeft < 1800 ? "#E8A838" : S.green;

  const toggleOption = (oi) => {
    if (answered) return;
    if (!q.multi) { setPending([oi]); return; }
    setPending(p => p.includes(oi) ? p.filter(x => x !== oi) : [...p, oi]);
  };

  const confirmAnswer = () => {
    if (!pending.length) return;
    setAnswers(p => ({ ...p, [current]: pending }));
    setPending([]);
  };

  const reviewQs = questions.filter((_, i) => {
    if (filter === "wrong") return !isCorrect(questions[i], answers[i]);
    if (filter === "flagged") return flagged[i];
    return true;
  });

  /* ── Shared layout wrapper ──────────────────────────────────────── */
  const Wrap = ({ children }) => (
    <div style={{ minHeight:"100vh", background:S.bg, color:S.text, fontFamily:"'DM Sans', sans-serif" }}>
      <FontLoader />
      {children}
    </div>
  );

  /* ── SB Monogram ──────────────────────────────────────────────── */
  const Logo = ({ size = 40 }) => (
    <div style={{ width:size, height:size, borderRadius:"50%", background:`linear-gradient(135deg, ${S.gold}, #c97d10)`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
      <span style={{ fontFamily:"'Playfair Display', serif", fontWeight:900, fontSize:size*0.38, color:"#0D0D0D", letterSpacing:"-0.5px" }}>SB</span>
    </div>
  );

  /* ─── START SCREEN ─────────────────────────────────────────────── */
  if (phase === "start") return (
    <Wrap>
      <div style={{ maxWidth:660, margin:"0 auto", padding:"48px 24px 80px" }}>

        {/* Nav bar */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:64 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <Logo />
            <div>
              <div style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, fontSize:15, color:S.text, lineHeight:1 }}>Silvio Brentan</div>
              <div style={{ fontSize:11, color:S.muted, marginTop:2 }}>CSM Practice Hub</div>
            </div>
          </div>
          <div style={{ fontSize:11, color:S.muted, background:S.surface, border:`1px solid ${S.border}`, borderRadius:20, padding:"5px 12px" }}>
            v2.0 · 2020 Scrum Guide
          </div>
        </div>

        {/* Hero */}
        <div style={{ marginBottom:52 }}>
          <div style={{ display:"inline-block", background:S.goldDim, border:`1px solid rgba(232,168,56,0.3)`, borderRadius:20, padding:"5px 14px", marginBottom:20 }}>
            <span style={{ color:S.gold, fontSize:12, fontWeight:600, letterSpacing:1, textTransform:"uppercase" }}>Certified ScrumMaster® Preparation</span>
          </div>
          <h1 style={{ fontFamily:"'Playfair Display', serif", fontWeight:900, fontSize:"clamp(36px,6vw,58px)", lineHeight:1.1, margin:"0 0 20px", color:S.text }}>
            CSM Practice<br/>
            <span style={{ color:S.gold }}>Exam</span>
          </h1>
          <p style={{ fontSize:16, color:S.muted, lineHeight:1.7, margin:"0 0 32px", maxWidth:480 }}>
            Built by Silvio to prepare for the Scrum Alliance CSM exam. 105 questions drawn from real exam patterns and the official 2020 Scrum Guide — randomised every attempt.
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginBottom:40 }}>
          {[["105","Question Pool"],["50","Per Attempt"],["74%","Pass Mark"]].map(([n,l]) => (
            <div key={l} style={{ background:S.surface, border:`1px solid ${S.border}`, borderRadius:16, padding:"20px 16px", textAlign:"center" }}>
              <div style={{ fontFamily:"'Playfair Display', serif", fontSize:32, fontWeight:700, color:S.gold }}>{n}</div>
              <div style={{ fontSize:12, color:S.muted, marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div style={{ background:S.surface, border:`1px solid ${S.border}`, borderRadius:20, padding:28, marginBottom:28 }}>
          <div style={{ fontSize:12, color:S.gold, fontWeight:700, textTransform:"uppercase", letterSpacing:1.5, marginBottom:18 }}>What's included</div>
          {[
            ["⏱", "60-Minute Timer", "Identical timebox to the real CSM exam"],
            ["✦", "Multi-select Questions", "Some questions require all correct answers — just like the real thing"],
            ["◈", "Instant Explanations", "Every answer explained with 2020 Scrum Guide references"],
            ["◉", "Bookmark & Review", "Flag uncertain questions and revisit before submitting"],
            ["◎", "Category Breakdown", "See exactly where you need to focus revision"],
          ].map(([i, l, d]) => (
            <div key={l} style={{ display:"flex", gap:14, alignItems:"flex-start", marginBottom:16 }}>
              <span style={{ color:S.gold, fontSize:18, lineHeight:1, marginTop:2, minWidth:20 }}>{i}</span>
              <div>
                <div style={{ fontSize:14, fontWeight:600, color:S.text, marginBottom:2 }}>{l}</div>
                <div style={{ fontSize:13, color:S.muted }}>{d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-select note */}
        <div style={{ background:"rgba(232,168,56,0.08)", border:`1px solid rgba(232,168,56,0.2)`, borderRadius:12, padding:"14px 18px", marginBottom:32 }}>
          <span style={{ fontSize:13, color:"rgba(232,168,56,0.9)" }}>
            <strong>Note:</strong> For "select all that apply" questions, tick every correct option then hit <strong>Confirm</strong>. Partial selections are marked incorrect.
          </span>
        </div>

        <button onClick={startExam} style={{ width:"100%", background:S.gold, color:"#0D0D0D", border:"none", borderRadius:14, padding:"18px 0", fontSize:16, fontWeight:700, cursor:"pointer", fontFamily:"'DM Sans', sans-serif", letterSpacing:0.3 }}>
          Start Exam →
        </button>

        {/* Footer */}
        <div style={{ marginTop:48, paddingTop:24, borderTop:`1px solid ${S.border}`, display:"flex", alignItems:"center", gap:12 }}>
          <Logo size={28} />
          <div style={{ fontSize:12, color:S.muted }}>
            Built by <span style={{ color:S.text }}>Silvio (Brent) Brentan</span> · Sources: mlapshin.com + scrumguides.org (Nov 2020) · All answers verified against the 2020 Scrum Guide
          </div>
        </div>
      </div>
    </Wrap>
  );

  /* ─── RESULTS SCREEN ───────────────────────────────────────────── */
  if (phase === "results") return (
    <Wrap>
      <div style={{ maxWidth:760, margin:"0 auto", padding:"32px 20px 80px" }}>

        {/* Nav */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:40 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <Logo size={32} />
            <span style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, fontSize:14, color:S.text }}>Silvio Brentan · CSM Practice Hub</span>
          </div>
          <button onClick={startExam} style={{ background:S.gold, color:"#0D0D0D", border:"none", borderRadius:10, padding:"8px 18px", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"'DM Sans', sans-serif" }}>Retake →</button>
        </div>

        {/* Score banner */}
        <div style={{ border:`2px solid ${passed ? S.green : S.red}`, borderRadius:24, padding:"36px 32px", marginBottom:28, background:passed?"rgba(92,232,122,0.05)":"rgba(232,95,92,0.05)" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:20 }}>
            <div>
              <div style={{ fontFamily:"'Playfair Display', serif", fontSize:48, fontWeight:900, color:passed?S.green:S.red, lineHeight:1 }}>{pct}%</div>
              <div style={{ fontSize:20, fontWeight:700, color:S.text, marginTop:6 }}>
  {passed ? (
    <>
      Passed{" "}
      <span role="img" aria-label="celebration">
        🎉
      </span>
    </>
  ) : (
    "Not quite — keep going!"
  )}
</div>
              <div style={{ fontSize:14, color:S.muted, marginTop:6 }}>{score} of {questions.length} correct · Pass mark: 74%</div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, minWidth:200 }}>
              {[["Correct",score],["Wrong",questions.length-score],["Flagged",Object.values(flagged).filter(Boolean).length],["Time Used",fmt(TOTAL_TIME-timeLeft)]].map(([l,v])=>(
                <div key={l} style={{ background:S.surface, borderRadius:12, padding:"12px 14px", border:`1px solid ${S.border}` }}>
                  <div style={{ fontFamily:"'DM Mono', monospace", fontSize:18, fontWeight:500, color:S.text }}>{v}</div>
                  <div style={{ fontSize:11, color:S.muted, marginTop:2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ background:S.surface, border:`1px solid ${S.border}`, borderRadius:16, padding:24, marginBottom:24 }}>
          <div style={{ fontSize:12, color:S.gold, fontWeight:700, textTransform:"uppercase", letterSpacing:1.5, marginBottom:18 }}>Score by Category</div>
          {Object.keys(CAT_COLORS).map(cat => {
            const cqs = questions.map((q,i)=>({q,i})).filter(({q})=>q.category===cat);
            if (!cqs.length) return null;
            const cs = cqs.filter(({q,i})=>isCorrect(q,answers[i])).length;
            const cp = Math.round(cs/cqs.length*100);
            return (
              <div key={cat} style={{ marginBottom:12 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                  <span style={{ fontSize:13, color:S.muted }}>{cat}</span>
                  <span style={{ fontSize:13, color:cp>=74?S.green:S.red, fontFamily:"'DM Mono', monospace", fontWeight:500 }}>{cs}/{cqs.length}</span>
                </div>
                <div style={{ background:"rgba(255,255,255,0.06)", borderRadius:99, height:5, overflow:"hidden" }}>
                  <div style={{ width:`${cp}%`, height:"100%", background:CAT_COLORS[cat], borderRadius:99 }}/>
                </div>
              </div>
            );
          })}
        </div>

        {/* Question Review */}
        <div style={{ background:S.surface, border:`1px solid ${S.border}`, borderRadius:16, padding:24 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20, flexWrap:"wrap", gap:10 }}>
            <div style={{ fontSize:12, color:S.gold, fontWeight:700, textTransform:"uppercase", letterSpacing:1.5 }}>Question Review</div>
            <div style={{ display:"flex", gap:6 }}>
              {["all","wrong","flagged"].map(f => (
                <button key={f} onClick={()=>setFilter(f)} style={{ background:filter===f?S.gold:"transparent", color:filter===f?"#0D0D0D":S.muted, border:`1px solid ${filter===f?S.gold:S.border}`, borderRadius:8, padding:"5px 12px", fontSize:12, cursor:"pointer", fontFamily:"'DM Sans', sans-serif", fontWeight:600, textTransform:"capitalize" }}>
                  {f==="wrong"?`Wrong (${questions.filter((_,i)=>!isCorrect(questions[i],answers[i])).length})`:f==="flagged"?`Flagged (${Object.values(flagged).filter(Boolean).length})`:"All"}
                </button>
              ))}
            </div>
          </div>

          {reviewQs.map(qItem => {
            const i = questions.indexOf(qItem);
            const ua = answers[i] || [];
            const ok = isCorrect(qItem, ua);
            return (
              <div key={qItem.id} style={{ borderLeft:`3px solid ${ok?S.green:S.red}`, borderRadius:"0 12px 12px 0", background:"rgba(0,0,0,0.3)", padding:18, marginBottom:14 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                  <span style={{ fontSize:10, fontWeight:700, color:CAT_COLORS[qItem.category], textTransform:"uppercase", letterSpacing:1 }}>{qItem.category}</span>
                  <span style={{ fontSize:10, color:S.muted, fontFamily:"'DM Mono', monospace" }}>Q{i+1}{qItem.multi?" · MULTI":""}</span>
                </div>
                <p style={{ fontSize:14, color:S.text, margin:"0 0 12px", lineHeight:1.6 }}>{qItem.question}</p>
                {qItem.options.map((opt,oi) => {
                  const isA = qItem.answer.includes(oi);
                  const wasS = ua.includes(oi);
                  let bc = "transparent", tc = S.muted, bb = `1px solid ${S.border}`;
                  if (isA) { bc = "rgba(92,232,122,0.1)"; tc = S.green; bb = `1px solid rgba(92,232,122,0.4)`; }
                  else if (wasS) { bc = "rgba(232,95,92,0.1)"; tc = S.red; bb = `1px solid rgba(232,95,92,0.4)`; }
                  return (
                    <div key={oi} style={{ display:"flex", gap:10, alignItems:"center", background:bc, border:bb, borderRadius:8, padding:"8px 12px", marginBottom:6 }}>
                      <span style={{ fontSize:14, color:tc, minWidth:16 }}>{isA?"✓":wasS?"✗":"·"}</span>
                      <span style={{ fontSize:13, color:tc }}>{opt}</span>
                    </div>
                  );
                })}
                <div style={{ marginTop:10, borderTop:`1px solid ${S.border}`, paddingTop:10 }}>
                  <span style={{ fontSize:12, color:S.muted, fontStyle:"italic" }}>
  <span role="img" aria-label="lightbulb">
    💡
  </span>{" "}
  {qItem.explanation}
</span>
                </div>
              </div>
            );
          })}
          {!reviewQs.length && <p style={{ color:S.muted, textAlign:"center", fontSize:13 }}>No questions match this filter.</p>}
        </div>

        <div style={{ marginTop:40, paddingTop:24, borderTop:`1px solid ${S.border}`, textAlign:"center" }}>
          <Logo size={28} />
          <div style={{ fontSize:11, color:S.muted, marginTop:8 }}>© 2025 Silvio (Brent) Brentan · Built for personal CSM exam preparation</div>
        </div>
      </div>
    </Wrap>
  );

  /* ─── EXAM SCREEN ──────────────────────────────────────────────── */
  return (
    <Wrap>
      {/* Top bar */}
      <div style={{ position:"sticky", top:0, zIndex:50, background:"rgba(13,13,13,0.95)", backdropFilter:"blur(12px)", borderBottom:`1px solid ${S.border}`, padding:"10px 20px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:12 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <Logo size={28} />
          <span style={{ fontSize:13, fontWeight:600, color:S.muted, display:"none" }}>Silvio Brentan</span>
        </div>

        {/* Progress */}
        <div style={{ flex:1, maxWidth:320, display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ flex:1, background:"rgba(255,255,255,0.08)", borderRadius:99, height:4 }}>
            <div style={{ width:`${Object.keys(answers).length/EXAM_SIZE*100}%`, height:"100%", background:S.gold, borderRadius:99, transition:"width 0.3s" }}/>
          </div>
          <span style={{ fontFamily:"'DM Mono', monospace", fontSize:12, color:S.muted, minWidth:44 }}>{Object.keys(answers).length}/{EXAM_SIZE}</span>
        </div>

        {/* Timer */}
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{ width:80, background:"rgba(255,255,255,0.06)", borderRadius:99, height:4 }}>
            <div style={{ width:`${timePct}%`, height:"100%", background:timerColor, borderRadius:99, transition:"background 0.5s" }}/>
          </div>
          <span style={{ fontFamily:"'DM Mono', monospace", fontSize:14, fontWeight:500, color:timerColor, minWidth:48 }}>{fmt(timeLeft)}</span>
        </div>

        <button onClick={() => {
          const u = questions.length - Object.keys(answers).length;
          if (u > 0 && !window.confirm(`${u} question(s) unanswered. Submit anyway?`)) return;
          setPhase("results");
        }} style={{ background:S.red, color:"#fff", border:"none", borderRadius:8, padding:"7px 16px", fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"'DM Sans', sans-serif" }}>
          Submit
        </button>
      </div>

      <div style={{ display:"flex", minHeight:"calc(100vh - 53px)" }}>

        {/* Sidebar */}
        <div style={{ width:176, minWidth:176, borderRight:`1px solid ${S.border}`, padding:"20px 12px", overflowY:"auto", display:"flex", flexDirection:"column", gap:16 }}>
          <div style={{ fontSize:10, color:S.muted, textTransform:"uppercase", letterSpacing:2 }}>Navigator</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:4 }}>
            {questions.map((_,i) => {
              const ua = answers[i];
              const done = ua !== undefined;
              let bg = S.surface, col = S.muted, border = `1px solid ${S.border}`;
              if (i === current) { bg = S.gold; col = "#0D0D0D"; border = `1px solid ${S.gold}`; }
              else if (done) {
                if (isCorrect(questions[i], ua)) { bg = "rgba(92,232,122,0.15)"; col = S.green; border = `1px solid rgba(92,232,122,0.3)`; }
                else { bg = "rgba(232,95,92,0.15)"; col = S.red; border = `1px solid rgba(232,95,92,0.3)`; }
              }
              return (
                <button key={i} onClick={() => { setCurrent(i); setPending([]); }} style={{ background:bg, color:col, border:flagged[i]?`1px solid ${S.gold}`:border, borderRadius:6, padding:"5px 2px", fontSize:11, cursor:"pointer", fontFamily:"'DM Mono', monospace", outline:"none" }}>
                  {i+1}
                </button>
              );
            })}
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginTop:4 }}>
            {[[S.gold,"Current"],[S.green,"Correct"],[S.red,"Wrong"],["transparent","Flagged"]].map(([c,l],i) => (
              <div key={l} style={{ display:"flex", alignItems:"center", gap:7 }}>
                <div style={{ width:10, height:10, borderRadius:3, background:c==="transparent"?"transparent":c, border:c==="transparent"?`1px solid ${S.gold}`:"none" }}/>
                <span style={{ fontSize:10, color:S.muted }}>
  {l === "Flagged" ? (
    <>
      Flagged{" "}
      <span role="img" aria-label="star">
        ★
      </span>
    </>
  ) : (
    l
  )}
</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main question area */}
        <div style={{ flex:1, overflowY:"auto", padding:"32px 28px" }}>
          {q && (
            <div style={{ maxWidth:660, margin:"0 auto" }}>

              {/* Question meta */}
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <span style={{ fontSize:10, fontWeight:700, color:CAT_COLORS[q.category]||S.gold, textTransform:"uppercase", letterSpacing:1.5, background:`${CAT_COLORS[q.category]}18`, padding:"4px 10px", borderRadius:20 }}>{q.category}</span>
                  {q.multi && <span style={{ fontSize:10, fontWeight:700, color:S.gold, background:S.goldDim, padding:"4px 10px", borderRadius:20, textTransform:"uppercase", letterSpacing:1 }}><>
  Select all{" "}
  <span role="img" aria-label="sparkle">
    ✦
  </span>
</></span>}
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <span style={{ fontFamily:"'DM Mono', monospace", fontSize:12, color:S.muted }}>Q{current+1}/{EXAM_SIZE}</span>
                  <button onClick={() => setFlagged(f => ({...f,[current]:!f[current]}))} style={{ background:flagged[current]?S.goldDim:"transparent", color:flagged[current]?S.gold:S.muted, border:`1px solid ${flagged[current]?`rgba(232,168,56,0.4)`:S.border}`, borderRadius:8, padding:"5px 10px", fontSize:12, cursor:"pointer", fontFamily:"'DM Sans', sans-serif" }}>
                    {flagged[current] ? "★ Flagged" : "☆ Flag"}
                  </button>
                </div>
              </div>

              {/* Question text */}
              <div style={{ background:S.surface, border:`1px solid ${S.border}`, borderRadius:18, padding:"28px 28px", marginBottom:20 }}>
                <p style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(16px,2.5vw,20px)", color:S.text, lineHeight:1.65, margin:0, fontWeight:600 }}>{q.question}</p>
              </div>

              {/* Options */}
              <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:20 }}>
                {q.options.map((opt, oi) => {
                  const ua = answers[current] || [];
                  const isA = q.answer.includes(oi);
                  const wasS = ua.includes(oi);
                  const isP = pending.includes(oi);

                  let bg = S.surface, border = `1px solid ${S.border}`, tc = S.muted, prefix = q.multi ? "□" : ["A","B","C","D","E","F"][oi]+".";
                  if (answered) {
                    if (isA) { bg = "rgba(92,232,122,0.1)"; border = `1px solid rgba(92,232,122,0.5)`; tc = S.green; prefix = "✓"; }
                    else if (wasS) { bg = "rgba(232,95,92,0.1)"; border = `1px solid rgba(232,95,92,0.5)`; tc = S.red; prefix = "✗"; }
                  } else if (isP) {
                    bg = S.goldDim; border = `1px solid rgba(232,168,56,0.5)`; tc = S.gold; prefix = q.multi ? "■" : `${["A","B","C","D","E","F"][oi]}.`;
                  }

                  return (
                    <button key={oi} onClick={() => toggleOption(oi)} disabled={answered} style={{ background:bg, border, borderRadius:12, padding:"14px 18px", textAlign:"left", color:tc, fontSize:14, lineHeight:1.55, cursor:answered?"default":"pointer", display:"flex", gap:14, alignItems:"flex-start", fontFamily:"'DM Sans', sans-serif", transition:"all 0.15s" }}>
                      <span style={{ fontWeight:700, minWidth:18, fontFamily:"'DM Mono', monospace", fontSize:13, marginTop:1 }}>{prefix}</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Confirm button */}
              {!answered && (
                <button onClick={confirmAnswer} disabled={!pending.length} style={{ width:"100%", background:pending.length?S.gold:"rgba(255,255,255,0.05)", color:pending.length?"#0D0D0D":S.muted, border:"none", borderRadius:12, padding:"14px", fontSize:14, fontWeight:700, cursor:pending.length?"pointer":"not-allowed", fontFamily:"'DM Sans', sans-serif", marginBottom:20, transition:"all 0.2s" }}>
                  {q.multi ? `Confirm ${pending.length} answer${pending.length!==1?"s":""}` : "Confirm Answer"}
                </button>
              )}

              {/* Explanation */}
              {answered && (
                <div style={{ background:"rgba(232,168,56,0.07)", border:`1px solid rgba(232,168,56,0.2)`, borderRadius:12, padding:"16px 18px", marginBottom:24 }}>
                  <div style={{ fontSize:11, fontWeight:700, color:S.gold, textTransform:"uppercase", letterSpacing:1.5, marginBottom:6 }}>Explanation</div>
                  <p style={{ fontSize:13, color:"rgba(240,237,232,0.75)", margin:0, lineHeight:1.65 }}>{q.explanation}</p>
                </div>
              )}

              {/* Nav buttons */}
              <div style={{ display:"flex", gap:12 }}>
                <button onClick={() => { setCurrent(c => Math.max(0,c-1)); setPending([]); }} disabled={current===0} style={{ flex:1, background:S.surface, color:current===0?S.muted:S.text, border:`1px solid ${S.border}`, borderRadius:12, padding:"12px", fontSize:14, cursor:current===0?"not-allowed":"pointer", fontFamily:"'DM Sans', sans-serif", fontWeight:600 }}>
                  ← Prev
                </button>
                <button onClick={() => { setCurrent(c => Math.min(questions.length-1,c+1)); setPending([]); }} disabled={current===questions.length-1} style={{ flex:1, background:S.surface, color:current===questions.length-1?S.muted:S.text, border:`1px solid ${S.border}`, borderRadius:12, padding:"12px", fontSize:14, cursor:current===questions.length-1?"not-allowed":"pointer", fontFamily:"'DM Sans', sans-serif", fontWeight:600 }}>
                  Next →
                </button>
              </div>

              {/* Bottom credit */}
              <div style={{ marginTop:48, textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                <Logo size={20} />
                <span style={{ fontSize:11, color:S.muted }}>Silvio Brentan · CSM Practice Hub</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrap>
  );
}