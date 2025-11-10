////////////////////////////////////////////////////////////////////////////
// Free Leading SAFe Practice Exam
const freeLeadingPracticeExam = 
[
  {
    question: 'Which of the following is a Lean Budget Guardrail?',
    type: 'single',
    options: [
      { text: 'Investment horizons.', isCorrect: true },
      { text: 'Centralized decision-making.', isCorrect: false },
      { text: 'Participatory budgeting.', isCorrect: false },
      { text: 'Lean startup cycle.', isCorrect: false }
    ]
  },
  {
    question: 'What does Solution Intent describe?',
    type: 'single',
    options: [
      { text: 'The behavior of the solution.', isCorrect: true },
      { text: 'The platform architecture.', isCorrect: false },
      { text: 'Where the solution operates.', isCorrect: false },
      { text: 'The customer or consumer of the solution.', isCorrect: false }
    ]
  },
  {
    question: 'Which two actions can slow the delivery of value?',
    type: 'multiple',
    options: [
      { text: 'System delays.', isCorrect: true },
      { text: 'Loopbacks.', isCorrect: true },
      { text: 'Team swarming.', isCorrect: false },
      { text: 'Shortened Architectural Runway.', isCorrect: false }
    ]
  },
  {
    question: 'What is the foundation of Lean?',
    type: 'single',
    options: [
      { text: 'Leadership.', isCorrect: true },
      { text: 'Lean-Agile development.', isCorrect: false },
      { text: 'Innovation.', isCorrect: false },
      { text: 'Lean-thinking.', isCorrect: false }
    ]
  },
  {
    question: 'What is the ultimate goal of DevOps in SAFe?',
    type: 'single',
    options: [
      { text: 'To automate the integration, testing, and deployment of features.', isCorrect: false },
      { text: 'To combine Development and Operations groups into one team.', isCorrect: false },
      { text: 'To clarify program and team roles.', isCorrect: false },
      { text: 'To enable Agile Release Trains to deliver value more frequently.', isCorrect: true }
    ]
  },
  {
    question: 'What is one fundamental difference between Agile Software Engineering and Waterfall?',
    type: 'single',
    options: [
      { text: 'Agile supports test-first development.', isCorrect: true },
      { text: 'Agile delivers every single requested requirement.', isCorrect: false },
      { text: 'Waterfall concentrates on code quality.', isCorrect: false },
      { text: 'Waterfall has no fixed schedule.', isCorrect: false }
    ]
  },
  {
    question: 'Which statement is most accurate about the Solution Vision?',
    type: 'single',
    options: [
      { text: 'It summarizes the team PI Objectives for the current Program Increment.', isCorrect: false },
      { text: 'It provides an outline of the Features for the next three Program Increments.', isCorrect: false },
      { text: 'It drives the allocation of budget for the Agile Release Train.', isCorrect: false },
      { text: 'It expresses the strategic intent of the Program.', isCorrect: true }
    ]
  },
  {
    question: 'What is the primary purpose of Strategic Themes?',
    type: 'single',
    options: [
      { text: 'Connect the portfolio to the enterprise business strategy.', isCorrect: true },
      { text: 'Determine the order in which Epics should be executed.', isCorrect: false },
      { text: 'Drive incremental implementation across the enterprise.', isCorrect: false },
      { text: 'Define the sequence of steps used to deliver value to the customer.', isCorrect: false }
    ]
  },
  {
    question: 'Which two statements best describe a cross-functional Agile Team?',
    type: 'multiple',
    options: [
      { text: 'They release customer products to production continuously.', isCorrect: false },
      { text: 'They are optimized for communication and delivery of value.', isCorrect: true },
      { text: 'They deliver value every six weeks.', isCorrect: false },
      { text: 'They can define, build, and test a Feature or component.', isCorrect: true },
      { text: 'They are made up of members, each of whom can define, develop, test, and deploy the system.', isCorrect: false }
    ]
  },
  {
    question: 'The role of the Product Manager is most similar to what other role in SAFe?',
    type: 'single',
    options: [
      { text: 'Solution Manager.', isCorrect: true },
      { text: 'Business Manager.', isCorrect: false },
      { text: 'Development Manager.', isCorrect: false },
      { text: 'Release Train Engineer.', isCorrect: false }
    ]
  },
  {
    question: 'What are three practices for building large Solutions?',
    type: 'multiple',
    options: [
      { text: 'Capture and refine system specifications as fixed/variable Solution Intent.', isCorrect: true },
      { text: 'Build and integrate the Solution with a Solution Train.', isCorrect: true },
      { text: 'Employ multiple Solution Teams.', isCorrect: false },
      { text: 'Employ and improve the Continuous Development Pipeline.', isCorrect: false },
      { text: 'Ensure value stream consistency.', isCorrect: false },
      { text: 'Build Solution components and capabilities with ARTs.', isCorrect: true }
    ]
  },
  {
    question: 'Which of the following is responsible for managing the Portfolio Kanban?',
    type: 'single',
    options: [
      { text: 'Product Management.', isCorrect: false },
      { text: 'Release Train Engineer.', isCorrect: false },
      { text: 'Solution Management.', isCorrect: false },
      { text: 'Lean Portfolio Management.', isCorrect: true }
    ]
  },
  {
    question: 'What is a benefit of continuously deploying using a DevOps model?',
    type: 'single',
    options: [
      { text: 'It ensures that changes deployed to production are always immediately available to end-users.', isCorrect: false },
      { text: 'It alleviates the reliance on the skill sets of Agile Teams.', isCorrect: false },
      { text: 'It increases the transaction cost.', isCorrect: false },
      { text: 'It lessons the severity and frequency of release failures.', isCorrect: true }
    ]
  },
  {
    question: 'Which of the following is a key purpose of DevOps?',
    type: 'single',
    options: [
      { text: 'DevOps enables continuous release by building a scalable Continuous Delivery Pipeline.', isCorrect: false },
      { text: 'DevOps focuses on automating the delivery pipeline to reduce transaction cost.', isCorrect: false },
      { text: 'DevOps joins development and operations to enable continuous delivery.', isCorrect: true },
      { text: 'DevOps focuses on a set of practices applied to large systems.', isCorrect: false }
    ]
  },
  {
    question: 'What is the purpose of dynamic models?',
    type: 'single',
    options: [
      { text: 'They are used when there are a set of parallel interactions related to a scenario.', isCorrect: false },
      { text: 'They are used when there are a specific number of interactions that are less complex.', isCorrect: false },
      { text: 'They are used to sequence a set of interactions related to a scenario.', isCorrect: false },
      { text: 'They are used when there are numerous and complex interactions.', isCorrect: true }
    ]
  },
  {
    question: 'What is BDD?',
    type: 'single',
    options: [
      { text: 'Backlog-Driven Development.', isCorrect: false },
      { text: 'Business-Driven Development.', isCorrect: false },
      { text: 'Benchmark-Driven Development.', isCorrect: false },
      { text: 'Behavior-Driven Development.', isCorrect: true }
    ]
  },
  {
    question: 'In which event are the PI Objectives created?',
    type: 'single',
    options: [
      { text: 'PI System Demo.', isCorrect: false },
      { text: 'Post PI-Planning.', isCorrect: false },
      { text: 'Iteration Planning.', isCorrect: false },
      { text: 'PI Planning.', isCorrect: true }
    ]
  },
  {
    question: 'What is the purpose of having deployment decoupled from release?',
    type: 'single',
    options: [
      { text: 'To make deploying a business decision.', isCorrect: false },
      { text: 'To remove the need to respond quickly to product issues.', isCorrect: false },
      { text: 'To enable releasing upon demand.', isCorrect: true },
      { text: 'To enable deploying upon demand.', isCorrect: false }
    ]
  },
  {
    question: 'At what level of the SAFe Big Picture do Strategic Themes reside?',
    type: 'single',
    options: [
      { text: 'Large Solution Level.', isCorrect: false },
      { text: 'Team Level.', isCorrect: false },
      { text: 'Portfolio Level.', isCorrect: true },
      { text: 'Essential Level.', isCorrect: false }
    ]
  },
  {
    question: 'Which of the following is the primary focus of Lean Portfolio Management?',
    type: 'single',
    options: [
      { text: 'Define the enterprise strategy', isCorrect: false },
      { text: 'Establish lean budgets', isCorrect: false },
      { text: 'Align strategy and execution', isCorrect: true },
      { text: 'Ensure program and portfolio execution.', isCorrect: false }
    ]
  }
];