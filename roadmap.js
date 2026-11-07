/* Proposed study modules, not a recovered course list or earned credentials. */
const OPENUSD = 'https://docs.nvidia.com/learn-openusd/latest/index.html';
const KIT = 'https://docs.omniverse.nvidia.com/kit/docs/kit-manual/latest/guide/extensions_basic.html';
const ROADMAP = [
  ['OpenUSD foundations', 1, 5, OPENUSD, [
    ['3D pipeline and OpenUSD orientation', 'Scene interchange|Pipeline vocabulary|Inspect a USD scene'],
    ['Stages, prims and attributes', 'Create a stage|Define prims|Author attributes'],
    ['Scene hierarchy and transforms', 'Prim paths|Transform operations|Coordinate systems'],
    ['Geometry and schemas', 'Mesh topology|Schema types|Normals and UVs'],
    ['Layers and editing', 'Layer stacks|Edit targets|Save and reopen layers'],
    ['Foundation project', 'Assemble a scene|Validate hierarchy|Document the workflow']
  ]],
  ['Composition and Python', 6, 10, OPENUSD, [
    ['Composition fundamentals', 'Strength ordering|Layer opinions|Resolve composed values'],
    ['References and payloads', 'Reference assets|Load payloads|Choose composition boundaries'],
    ['Variants and instancing', 'Variant sets|Native instances|Point instancers'],
    ['OpenUSD Python workflows', 'Traverse stages|Query properties|Automate edits'],
    ['Asset structure and validation', 'Asset identifiers|Validation checks|Dependency inspection'],
    ['Reusable asset library project', 'Author reusable assets|Build variants|Write validation script']
  ]],
  ['Omniverse Kit development', 11, 15, KIT, [
    ['Kit architecture and setup', 'Applications and extensions|Development environment|Run a sample'],
    ['Extension lifecycle', 'Extension manifest|Startup and shutdown|Dependencies'],
    ['Python tools for Kit', 'Stage access|Commands|Event subscriptions'],
    ['User interfaces', 'Layouts and widgets|Data models|Input validation'],
    ['Packaging and debugging', 'Logging|Debugging|Extension packaging'],
    ['Scene utility extension project', 'Build an inspector|Add a validation action|Package a demo']
  ]],
  ['Production scene workflows', 16, 20, 'https://docs.nvidia.com/omniverse/', [
    ['Materials and shading', 'Material bindings|Shader networks|Material reuse'],
    ['Lighting and rendering', 'Light types|Render settings|Compare outputs'],
    ['CAD and DCC interoperability', 'Import workflow|Units and scale|Geometry cleanup'],
    ['Scene performance', 'Payload strategy|Instancing strategy|Profile bottlenecks'],
    ['Digital twin scene structure', 'Asset organization|Metadata|Scene updates'],
    ['Production scene project', 'Assemble a scene|Optimize performance|Present before and after']
  ]],
  ['Portfolio and certification preparation', 21, 26, OPENUSD, [
    ['Advanced composition review', 'Composition debugging|Variant decisions|Asset resolution'],
    ['Pipeline automation', 'Batch processing|Validation reports|Reproducible scripts'],
    ['Portfolio capstone planning', 'Define requirements|Design architecture|Set acceptance criteria'],
    ['Portfolio capstone delivery', 'Build the workflow|Test the result|Publish documentation'],
    ['OpenUSD exam preparation', 'Review official objectives|Identify knowledge gaps|Practice scenario explanations'],
    ['Readiness and credential milestone', 'Review portfolio|Assess readiness|Record credential only after earning it']
  ]]
].flatMap(([track,start,end,url,modules],ti)=>modules.map(([title,topics],mi)=>({
  id:`t${ti+1}c${mi+1}`, track, trackIndex:ti, title, topics:topics.split('|'), url,
  week:start+Math.floor(mi*(end-start+1)/6), hours:ti===4?15:12.5,
  project:(ti<4 && mi===5) || (ti===4 && mi===3)
})));
