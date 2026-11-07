const QUESTION_BANKS = {};
function addBank(id, source) {
  QUESTION_BANKS[id]=source.trim().split('\n').map((line,i)=>{const [question,correct,...wrong]=line.split('|');return {id:id+'-'+i,question,options:[correct,...wrong],answer:0,explanation:correct+'. Check this principle against the linked learning material.'};});
}
addBank('usd', `What is a USD stage?|The composed scene view|A single texture file|A render settings preset
What does a prim path identify?|A location in a scene hierarchy|A GPU memory address|A frame rate
What does a USD attribute store?|A typed value that may vary over time|Only a filesystem path|Only a material image
What does a relationship target?|Other scene objects through paths|Only numeric samples|Only binary textures
Why use layers?|Separate independently authored scene opinions|Remove all composition|Force all work into one mesh
What is a reference used for?|Composing reusable scene content|Changing the Python interpreter|Encoding a video
Why choose a payload?|To control when referenced content is loaded|To forbid loading geometry|To replace all metadata
What does a variant set represent?|Selectable alternatives for scene content|An unordered list of users|A fixed render resolution
What controls competing opinions?|Composition strength rules|The longest filename|File modification time alone
What is an edit target?|The layer and mapping used for authoring changes|The active GPU|The output video codec
How is animation commonly authored?|Values at time samples|Renaming the root layer each frame|Changing the filename extension
What is a model kind used for?|Describing asset hierarchy semantics|Setting texture compression|Changing the display resolution
Why validate units during data exchange?|To preserve physical scale consistently|To make every object one meter|To avoid writing any metadata
Why use instancing?|Share repeated scene structure efficiently|Guarantee every instance is independently editable|Remove the need for source assets
What should conversion validation compare?|Geometry, hierarchy and relevant properties|Only file size|Only the extension
What does stage traversal do?|Visits prims in the scene hierarchy|Renders image pixels|Compiles extensions
Why separate workstreams?|Allow independent contributions to compose|Prevent collaboration|Discard asset interfaces
What is a default prim useful for?|Identifying a layer's intended entry prim|Setting the current frame|Selecting a renderer
What should asset interfaces expose?|Stable parameters and supported composition boundaries|All internal implementation details indiscriminately|Only private filesystem paths
What does changing an authored opinion require?|Choosing an appropriate edit target|Always flattening every layer|Always deleting the source asset`);
addBank('robotics', `What is the role of a sensor?|Measure aspects of the robot or environment|Provide mechanical movement|Store only application logs
What does an actuator do?|Produces physical movement or force|Labels training images|Chooses a cloud region
What is feedback control?|Adjusting actions using measured state|Repeating actions without observation|Replacing all measurements with guesses
Why calibrate sensors?|Align measurements with the intended physical reference|Increase file count|Remove all uncertainty permanently
What is a coordinate frame?|A reference for expressing positions and orientations|A video compression format|A database account
Why synchronize timestamps?|Relate observations from different sensors in time|Make all measurements identical|Avoid calibration
What should simulation evaluation include?|Task success and realistic failure conditions|Only a successful screenshot|Only the fastest run
What is the simulation-to-real gap?|Differences between simulated and physical conditions|The number of folders in a project|A type of network cable
Why use domain randomization?|Expose training to varied conditions|Guarantee success on every real robot|Eliminate all evaluation
What is a safe deployment approach?|Validate in controlled conditions before wider operation|Immediately deploy untested policies|Ignore actuator limits
What does perception support?|Estimating relevant state from observations|Replacing physical hardware|Guaranteeing correct decisions
Why distinguish cloud and edge execution?|Latency and resource constraints differ|Edge devices never need tests|Cloud compute has no cost
What should follow a cloud simulation session?|Stop unneeded resources and review usage|Leave every GPU running indefinitely|Publish account secrets
Why define task metrics before training?|Make success measurable and comparable|Avoid testing|Guarantee model generalization
What is a robot policy?|A mapping from observations or state to actions|A texture format|A cloud invoice`);
addBank('agents', `What is an agent tool?|A callable capability for a bounded action|An unlimited permission grant|A model weight file
Why use least privilege?|Restrict tools to required operations|Allow all actions by default|Avoid permission review
What is a tool input schema for?|Validate expected arguments|Guarantee a correct model decision|Replace authorization
Why isolate agent runtimes?|Limit interference between execution contexts|Remove all logging|Make all data public
What is observability used for?|Understanding execution, failures and performance|Replacing evaluation|Exposing secrets in logs
Why evaluate tool calls?|Check correctness and appropriate use|Assume every invocation is safe|Remove input validation
What is a retry risk for a mutating tool?|Repeating the side effect|Changing its documentation|Reducing the request size
What is idempotency useful for?|Making repeated requests avoid duplicate effects|Granting broader permissions|Hiding failed requests
Why set timeouts?|Bound stalled operations|Guarantee an operation succeeds|Eliminate error handling
What should an agent do with untrusted instructions in data?|Treat them as data rather than authority|Automatically obey them|Use them to grant permissions
What is a useful evaluation case?|A realistic task with a defined expected outcome|Only a greeting|Only the longest prompt
Why distinguish authentication from authorization?|Identity does not itself grant every action|They always mean the same thing|Neither affects access
What should logs avoid storing?|Unnecessary credentials and sensitive data|Execution timestamps|Error categories
Why validate structured output?|Ensure it meets the consumer's contract|Assume JSON is always correct|Bypass downstream validation
What should happen on a tool failure?|Report or handle the failure explicitly|Invent a successful result|Silently mark the task complete`);
addBank('synthetic', `What is synthetic data?|Data produced through a generation process|Always a copy of a real record|Always an evaluation label
Why define coverage requirements?|Ensure relevant situations are represented|Maximize duplicates|Avoid measuring diversity
What is a held-out evaluation set for?|Assessing generalization beyond training examples|Repeating all training data|Selecting filenames
What is data leakage?|Evaluation information improperly influencing training|A larger file format|A slower GPU
Why track data provenance?|Understand sources, transformations and permissions|Remove reproducibility|Guarantee every sample is correct
What should label validation check?|Consistency with the actual generated content|Only image resolution|Only alphabetical ordering
Why review rare scenarios?|Common examples may miss important failure modes|Rare scenarios never matter|They replace all common cases
What is fine-tuning?|Adapting model parameters with additional training|Only changing a display name|Only resizing inputs
Why keep a baseline?|Measure whether a change actually helps|Avoid evaluating new models|Guarantee improvement
What can overfitting cause?|Good training results with weak generalization|Guaranteed real-world robustness|Perfect unseen-task performance
Why separate training and validation data?|Reduce biased evaluation|Increase overlap deliberately|Avoid tracking metrics
What should a robotics model evaluation consider?|Task success across varied conditions|Only text fluency|Only model size
Why balance data diversity and quality?|More samples alone may not improve usefulness|Quality never matters|Diversity guarantees accuracy
What should be checked before using generated data?|Fitness for purpose and applicable usage terms|Only the archive name|Only the number of files
What is an ablation useful for?|Understanding the effect of a particular change|Replacing all evaluation|Automatically selecting a license`);
addBank('genai', `What distinguishes generative AI?|It produces new content based on learned patterns|It guarantees truth|It never uses training data
What is a hallucination in model output?|A plausible but unsupported or incorrect statement|Any short response|A slow network request
Why verify factual claims?|Fluent output can still be wrong|All model output is authoritative|Formatting guarantees accuracy
What is a prompt?|Input that guides a model's response|An earned certificate|A hardware driver
What does context provide?|Information relevant to the task|Guaranteed correctness|Unlimited memory
Why identify an intended audience?|Adapt the output to users' needs|Avoid requirements|Eliminate review
What is a useful evaluation rubric?|Explicit criteria for judging output quality|Only response length|Only stylistic preference
What is multimodal input?|Input involving more than one information modality|Only several text files|Only repeated questions
Why review bias?|Outputs can reflect uneven or harmful patterns|Models cannot produce bias|More words eliminate bias
What should be considered before uploading work data?|Permission and data sensitivity|Only the filename|Only typing speed
What is human oversight for?|Accountability and judgment over outcomes|Rubber-stamping every response|Avoiding all review
What is a limitation of a confident response?|Confidence in wording does not prove accuracy|It always means verification occurred|It always signals expert review
Why compare against a non-AI baseline?|Determine whether AI provides useful improvement|Guarantee AI is better|Avoid measuring outcomes
What is retrieval used for?|Providing relevant external information to a system|Guaranteeing all sources are correct|Removing source review
What should a responsible application disclose?|Material limitations relevant to its users|Fabricated performance claims|Only attractive outcomes`);
addBank('prompt', `What should a clear prompt specify?|The task and expected outcome|Only a vague command|Only unrelated history
Why add relevant context?|Reduce ambiguity about the situation|Guarantee factual accuracy|Fill the entire context window
Why provide examples?|Demonstrate the desired output pattern|Eliminate the need for review|Make all outputs identical
What does an output constraint do?|Defines a requirement such as format or scope|Guarantees the facts are true|Removes model limitations
How should a weak response be improved?|Identify the mismatch and refine instructions|Repeat identical prompts indefinitely|Assume longer is always better
Why specify the audience?|Match tone and detail to readers|Avoid checking content|Override privacy requirements
What should summarization preserve?|Key meaning and important qualifications|Every original word|Only positive claims
Why check a generated table?|Structure can look correct while entries are wrong|Tables cannot contain errors|Formatting verifies data
What is a reusable prompt template?|A structure with task-specific fields|A guarantee of correctness|A substitute for all context
When should source material be supplied?|When the task depends on its specific content|Only after inventing facts|Never when summarizing
What is prompt iteration?|Refining prompts using observed output quality|Changing words without evaluation|Copying every answer
Why protect confidential information?|Prompts may be processed outside the original data context|All tools have identical policies|Prompt length determines privacy
What does a long context window not guarantee?|Accurate use of every supplied detail|Ability to receive more text|Room for more reference material
What is a useful prompt test?|Compare outputs against explicit acceptance criteria|Judge only by confidence|Count only the words
Why keep effective prompts with notes?|Record when and why they work|Avoid ever updating them|Claim universal reliability`);
addBank('fluency', `What is delegation in AI fluency?|Deciding which work to assign to AI and which to retain|Handing over all accountability|Accepting every suggested task
What is description?|Communicating useful goals, context and constraints|Providing only a vague instruction|Avoiding all examples
What is discernment?|Evaluating the quality and suitability of AI output|Trusting fluent wording automatically|Counting only response length
What is diligence?|Using AI responsibly with appropriate care|Skipping review to save time|Avoiding accountability
Why clarify task boundaries?|Support appropriate human and AI roles|Guarantee perfect output|Remove judgment
What is an appropriate review strategy?|Check claims according to their consequences|Review nothing|Treat every claim as verified
What should an AI learner practice?|Judgment in realistic scenarios|Only memorizing product names|Only producing longer prompts
How should teaching assess fluency?|Observe decisions and explanations in applied tasks|Count only tool logins|Require blind agreement
Why adapt instruction to learners?|Prior knowledge and needs differ|All learners have identical goals|Tools replace pedagogy
What is useful feedback?|Specific guidance linked to the learning outcome|Only praise|Only an unexplained grade
What should a teacher distinguish?|Tool operation from transferable reasoning skills|All tools as identical|Output length from accuracy only
Why disclose relevant AI use?|Support transparency where it matters|Claim work was fully independent|Avoid institutional expectations
What should learners do with conflicting sources?|Investigate credibility and evidence|Choose the most confident wording|Ignore the disagreement
What does responsible collaboration retain?|Human accountability for decisions|Automatic acceptance of outputs|Unlimited delegation
Why revisit an AI workflow?|Tools and task requirements can change|Once learned it never changes|Review always makes results worse`);
addBank('coding', `What is a product requirement document for?|Describing expected behavior and constraints|Replacing all tests|Storing credentials
Why inspect a generated change?|It may introduce incorrect or unintended behavior|Generated code is always safe|A successful prompt proves correctness
What is version control useful for?|Tracking and recovering changes|Automatically fixing every bug|Replacing requirements
What is a focused debugging step?|Reproduce the issue and inspect evidence|Change unrelated files randomly|Delete all tests
Why use checkpoints?|Recover a known working state|Hide defects|Avoid reviewing changes
What should an acceptance test describe?|An observable expected behavior|The number of source lines|Only variable names
Why separate secrets from public code?|Prevent unauthorized disclosure|Improve indentation|Increase repository size
What should input validation do?|Reject or handle invalid data predictably|Trust all input|Replace authorization
What is least privilege in an application?|Grant only necessary access|Make every user an administrator|Avoid authentication
Why review dependencies?|Understand maintenance and security implications|Assume all packages are identical|Install everything suggested
What does a failing test indicate?|An expectation was not met and needs investigation|The user is always wrong|Testing should be disabled
Why make bounded changes?|Ease review and isolate effects|Eliminate the need to understand code|Guarantee no regressions
What should precede deployment?|Relevant validation of the release|Only renaming the project|Deleting the previous version
What is persistent storage for?|Keeping data beyond a process or page lifetime|Making every value public|Avoiding data models
What should a coding agent receive?|Relevant repository context and a concrete task|Unrestricted secrets by default|Only a broad vague wish
Why check error paths?|Failures must be handled as well as success|Errors never occur in production|Success tests cover every failure
What should code review consider?|Correctness, maintainability and security|Only formatting|Only generated comments
What is a rollback plan for?|Recovering if a release causes problems|Avoiding all tests|Proving a release cannot fail`);
addBank('product', `What is a core product management responsibility?|Connect user needs to product value|Approve every requested feature|Maximize code volume
What makes a useful user story?|A user goal with relevant value and context|Only a technical file name|Only a vague slogan
Why prioritize a backlog?|Allocate effort according to value and constraints|Make all work equally urgent|Avoid stakeholder discussion
What are acceptance criteria for?|Clarify observable conditions for completion|Replace user needs|Guarantee business success
Why validate assumptions?|Plans may rest on incorrect beliefs|All initial ideas are facts|Only competitors need evidence
What should customer feedback analysis preserve?|Context and differences between user needs|Only positive comments|Only the loudest request
Why distinguish outputs and outcomes?|Shipping a feature does not prove user benefit|They always mean the same thing|Outcomes are only file counts
What is an MVP intended to support?|Learning about a focused value proposition|Shipping every possible feature|Avoiding user feedback
What does iterative delivery enable?|Feedback-informed adjustment|A guarantee of success|Elimination of planning
Who remains accountable for AI-assisted product decisions?|The responsible product team|The model alone|The prompt library
Why communicate tradeoffs?|Help stakeholders understand decisions|Avoid evidence|Make all decisions automatic
What should a roadmap express?|Direction and priorities with appropriate uncertainty|A guarantee that nothing changes|Only a list of technologies
Why review generated user stories?|They may omit context or invent needs|Generated stories are always valid|They replace customer research
What is a meaningful product metric?|One connected to a user or business outcome|Only number of meetings|Only document length
Why consider ethical impacts?|Product choices affect people and trust|Only technical correctness matters|AI removes responsibility`);
addBank('vr', `What is immersion in VR associated with?|The system's ability to present an encompassing experience|Only a project name|Only application file size
What is presence?|A user's sense of being in the virtual environment|A network account|A texture compression mode
Why does latency matter?|Delayed feedback can harm comfort and responsiveness|It never affects experience|It only changes file size
What is head tracking used for?|Update the view according to head movement|Replace display hardware|Guarantee no discomfort
What does stereoscopic rendering provide?|Different eye views supporting depth perception|Only a flat text overlay|Automatic physical movement
Why consider motion mismatch?|Visual motion can conflict with vestibular cues|It always improves comfort|It only affects audio
What is a useful VR evaluation?|Observe user comfort and task performance|Only inspect a screenshot|Only count polygons
Why design accessible interactions?|Users differ in abilities and hardware|All users move identically|Accessibility removes all interaction
What is spatial audio useful for?|Providing directional sound cues|Replacing visual feedback entirely|Guaranteeing presence
Why maintain a suitable frame rate?|Support responsive and comfortable interaction|Make all geometry identical|Avoid all testing
What should VR hardware selection consider?|Tracking, display and interaction requirements|Only the color of the headset|Only brand popularity
Why define physical play boundaries?|Reduce collisions with real surroundings|Increase virtual texture quality|Improve file compression
What is an interaction affordance?|A cue about a possible action|A GPU invoice|A hidden database field
Why test with intended users?|Designer expectations may differ from user experience|Only developers can assess comfort|Hardware specifications prove usability
What should VR applications avoid assuming?|That every user tolerates the same motion|That inputs have effects|That visual feedback exists`);
